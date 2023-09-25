import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Router from "../Routes/Routers";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Router />
        
      </main>

      <Footer />
    </>
  );
};

export default Layout;
