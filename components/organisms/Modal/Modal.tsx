import { useEffect } from 'react';
import styles from './Modal.module.scss';
import theme from 'styles/Theme.module.scss';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal, ReplaceAllStore } from 'store/actions';
import { AppState } from 'store/types';
import React, { useRef } from 'react';
import useMounted from 'hooks/useMounted';
import useOutsideClick from 'hooks/useOutsideClick';
import { motion, AnimatePresence } from 'framer-motion';
import IconClose from 'assets/svgs/icon-close.svg';
import Button from 'components/atoms/Button/Button';

const overlayVariants = {
  hidden: {
    opacity: 0,
  },
  vissible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    y: '-100%',
    transition: {
      type: 'ease-out',
      when: 'afterChildren',
      duration: 0.2,
    },
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    y: '-70%',
    x: '-50%',
  },
  vissible: {
    opacity: 1,
    y: '-50%',
    x: '-50%',
    transition: {
      type: 'spring',
      stiffness: 100,
      mass: 0.7,
      damping: 9,
    },
  },
  exit: {
    opacity: 0,
    y: '-70%',
    x: '-50%',
    transition: {
      type: 'ease-out',
      duration: 0.2,
    },
  },
};

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  modalTitle: string;
  toggleModal: () => typeof toggleModal;
};

type Ref<T> = {
  current: T;
};

const Modal: React.FC<Props> = ({ isOpen, modalTitle, toggleModal, children }) => {
  const { mainReducer: store } = useSelector((state: AppState) => state);
  const { colorTheme, fontTheme } = store;
  const dispatch = useDispatch();
  const isMounted = useMounted();
  const modalRef: Ref<HTMLDivElement | null> = useRef(null);
  const textClass = theme[fontTheme];

  const handleToggleWithoutChanges = (): void => {
    const prevGlobalStateJSON = localStorage.getItem('appState');
    const prevGlobalState = prevGlobalStateJSON ? JSON.parse(prevGlobalStateJSON) : {};
    dispatch(ReplaceAllStore(prevGlobalState));
    toggleModal();
  };

  useOutsideClick(modalRef, handleToggleWithoutChanges);

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(store));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return isMounted
    ? ReactDOM.createPortal(
        <AnimatePresence exitBeforeEnter>
          {isOpen ? (
            <motion.div
              className={styles.overlay}
              variants={overlayVariants}
              initial="hidden"
              animate="vissible"
              exit="exit"
            >
              <motion.div ref={modalRef} className={styles.modal} variants={modalVariants}>
                <motion.div className={styles.modalHeading}>
                  <h3 className={textClass}>{modalTitle}</h3>
                  <IconClose onClick={handleToggleWithoutChanges} />
                </motion.div>
                {children}
                <div className={styles.modalFooter}>
                  <Button
                    text="Apply"
                    callBackOnClick={toggleModal}
                    bgClass={colorTheme}
                    fontClass={fontTheme}
                    isActive
                  />
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.getElementById('portal')
      )
    : null;
};

export default Modal;
