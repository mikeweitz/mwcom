import type { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/keyframes.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
