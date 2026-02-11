import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
                <meta httpEquiv="Content-Style-Type" content="text/css" />
                <meta name="author" lang="en" content="MWeitzman" />
                <meta name="robots" content="Index,Follow" />
                <meta name="title" content="Michael Weitzman" />
                <meta
                    name="description"
                    content="Resume for frontend engineer Michael Weitzman"
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
                <meta
                    property="og:image"
                    content="https://weitzly.com/share.png"
                />
                <link rel="icon" type="image/png" href="/logo.webp" />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="144x144"
                    href="/logo.webp"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="114x114"
                    href="/logo.webp"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="72x72"
                    href="/logo.webp"
                />
                <link rel="apple-touch-icon-precomposed" href="/logo.webp" />
                <link rel="preload" as="image" href="/images/bg.jpg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
