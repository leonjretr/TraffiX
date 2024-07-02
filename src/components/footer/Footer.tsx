import FooterNavbar from "../navbars/FooterNavbar.tsx";

const Footer = () => {
  return (
    <div className="bg-mainShade p-4 rounded-tr-3xl rounded-tl-3xl w-screen h-20 sm:h-24 fixed bottom-0 select-none">
      <FooterNavbar />
    </div>
  );
};

export default Footer;
