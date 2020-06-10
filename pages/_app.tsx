import { AppProps } from "next/app";
import Router from 'next/router';
import NProgress from 'nprogress';

import "../src/styles/nprogress.scss"
import "../src/styles/global.css"

//Binding events.
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App;
