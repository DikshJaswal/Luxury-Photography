import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

import ScrollToTop from "./components/common/ScrollToTop";
import FloatingActions from "./components/common/FloatingActions";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <AppRoutes />

      <FloatingActions />
    </>
  );
}

export default App;