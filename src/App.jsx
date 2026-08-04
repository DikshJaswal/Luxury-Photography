import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

import ScrollToTop from "./components/common/ScrollToTop";
import FloatingActions from "./components/common/FloatingActions";
import StickyBookNow from "./components/common/StickyBookNow";
import Footer from "./components/layout/Footer";
import ExitIntentPopup from "./components/common/ExitIntentPopup";

function App() {
  useEffect(() => {
    const pauseOtherVideos = (event) => {
      if (!(event.target instanceof HTMLVideoElement)) return;

      document.querySelectorAll("video").forEach((video) => {
        if (video !== event.target && !video.paused) video.pause();
      });
    };

    document.addEventListener("play", pauseOtherVideos, true);

    return () => document.removeEventListener("play", pauseOtherVideos, true);
  }, []);

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <AppRoutes />

      <Footer />

      <StickyBookNow />
      <FloatingActions />
      <ExitIntentPopup />
    </>
  );
}

export default App;
