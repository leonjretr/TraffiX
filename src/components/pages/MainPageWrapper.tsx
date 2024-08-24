import React, { FC } from "react";
import HeaderMainNew from "../header/HeaderMainNew.tsx";
import FooterNew from "../footer/FooterNew.tsx";


interface PageWrapperNewProperties {
    children: React.ReactNode;
}

const MainPageWrapper: FC<PageWrapperNewProperties> = ({ children }) => {
    return (
        <div>
            <HeaderMainNew />
            {children}
            <FooterNew />
        </div>
    );
};

export default MainPageWrapper;
