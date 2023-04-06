import Document, { Head, Html, Main, NextScript } from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../styletron';

class MyDocument extends Document {
  // static getInitialProps(props) {
  //   const page = props.renderPage((App) => (props) => (
  //     <StyletronProvider value={styletron}>
  //       <App {...props} />
  //     </StyletronProvider>
  //   ));
  //   const stylesheets = styletron.getStylesheets() || [];
  //   return { ...page, stylesheets };
  // }

  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    const initialProps = await Document.getInitialProps(ctx);
    const stylesheets = styletron.getStylesheets() || [];

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyletronProvider value={styletron}>
              <App {...props} />
            </StyletronProvider>
          ),
      });

    return { ...initialProps, stylesheets };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Content-Style-Type" content="text/css" />
          <meta name="author" lang="en" content="MWeitzman" />
          <meta name="robots" content="Index,Follow" />
          <meta name="title" content="Michael Weitzman" />
          <meta
            name="description"
            content="Resume for front end engineer Michael Weitzman"
          />
          <meta
            name="keyword"
            content="Michael Weitzman, Javascript, CSS, HTML, front end engineer, web developer"
          />
          <meta
            property="og:description"
            content="Resume for front end engineer Michael Weitzman"
          />
          <meta property="og:title" content="MW" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://weitzly.com/share.png" />
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
          <link rel="icon" type="image/png" href="/logo.png" />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/logo.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="/logo.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="/logo.png"
          />
          <link rel="apple-touch-icon-precomposed" href="/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
