import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <title>Pomodoro Timer</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;700&family=Roboto+Slab:wght@300;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;700&family=Roboto+Slab:wght@300;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <div id="portal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
