import React, { FC } from "react";
import Footer from "../footer/Footer.tsx";
import Header from "../header/Header.tsx";


interface PageWrapperProperties {
  children: React.ReactNode;
}

const PageBodyWrapper: FC<PageWrapperProperties> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageBodyWrapper;
