import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

import ScrollToTop from "./components/common/ScrollToTop";
import FloatingActions from "./components/common/FloatingActions";
import StickyBookNow from "./components/common/StickyBookNow";
import Footer from "./components/layout/Footer";
import ExitIntentPopup from "./components/common/ExitIntentPopup";

function App() {
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
