import React, { FC } from "react";
import FooterNew from "../footer/FooterNew.tsx";
import HeaderOtherNew from "../header/HeaderOtherNew.tsx";


interface PageWrapperNewProperties {
    children: React.ReactNode;
}

const MainPageWrapper: FC<PageWrapperNewProperties> = ({ children }) => {
    return (
        <div>
            <HeaderOtherNew />
            {children}
            <FooterNew />
        </div>
    );
};

export default MainPageWrapper;
