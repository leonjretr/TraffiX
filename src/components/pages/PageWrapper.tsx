import { FC } from "react";
import Footer from "../footer/Footer.tsx";
import Header from "../header/Header.tsx";

interface PageWrapperProperties {
  children: FC;
}

const PageWrapper: FC<PageWrapperProperties> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
