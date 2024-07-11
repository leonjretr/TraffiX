import FooterNavbar from "../navbars/FooterNavbar.tsx";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full pl-4 pr-4">
      <div className="bg-mainShade rounded-tr-3xl rounded-tl-3xl h-24 p-4">
        <FooterNavbar />
      </div>
    </div>
  );
};

export default Footer;
