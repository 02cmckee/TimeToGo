import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
