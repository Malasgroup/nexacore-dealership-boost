
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Layout = () => {
  const location = useLocation();
  const isLegalPage = location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service';
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Nexacore Marketing" />
      </Helmet>
      
      <Navbar useDarkLogo={isLegalPage} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
