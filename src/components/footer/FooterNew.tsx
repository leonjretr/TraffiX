import FooterNavbarNew from "../navbars/FooterNavbarNew.tsx";

const FooterNew = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 w-full h-24">
            <div className="bg-greenNew rounded-tr-3xl rounded-tl-3xl p-4">
                <FooterNavbarNew/>
            </div>
        </div>
    );
};

export default FooterNew;