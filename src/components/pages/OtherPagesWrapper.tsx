import React, { FC } from "react";
import FooterNew from "../footer/FooterNew.tsx";
import HeaderOtherNew from "../header/HeaderOtherNew.tsx";


interface OtherPagesWrapperProps {
    children: React.ReactNode;
}

const OtherPagesWrapper: FC<OtherPagesWrapperProps> = ({ children }) => {
    return (
        <div>
            <HeaderOtherNew />
            {children}
            <FooterNew />
        </div>
    );
};

export default OtherPagesWrapper;
