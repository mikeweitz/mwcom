import Document, { Head, Main, NextScript } from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../styletron';

class MyDocument extends Document {
  static getInitialProps(props) {
    const page = props.renderPage((App) => (props) => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ))
    const stylesheets = styletron.getStylesheets() || []
    return { ...page, stylesheets }
  }
  
  render() {
    return (
      <html>
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
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
          <link rel="icon" type="image/png" href="/static/images/logo.png" />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/static/images/logo.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="/static/images/logo.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="/static/images/logo.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            href="/static/images/logo.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
