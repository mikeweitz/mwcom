import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/main.scss';
import '../styles/keyframes.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
                />
            </Head>
            <Component {...pageProps} />;
        </>
    );
}
