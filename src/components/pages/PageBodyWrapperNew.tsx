import React, { FC } from "react";
import HeaderNew from "../header/HeaderNew.tsx";
import FooterNew from "../footer/FooterNew.tsx";


interface PageWrapperNewProperties {
    children: React.ReactNode;
}

const PageBodyWrapperNew: FC<PageWrapperNewProperties> = ({ children }) => {
    return (
        <div>
            <HeaderNew />
            {children}
            <FooterNew />
        </div>
    );
};

export default PageBodyWrapperNew;
