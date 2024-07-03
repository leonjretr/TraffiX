const CoinButton = () => {
  const Imgs = {
    coinImg: new URL("/imgs/coin.png", import.meta.url).href,
  };

  return (
    <div className={"MainPageTapCoin"}>
      <div className={"flex justify-center"}>
        <div className={"relative inline-block mt-14 sm:mt-8"}>
          <img
            src={Imgs.coinImg}
            alt={"TapCoin"}
            className={
              "flex w-72 h-72 mob1:w-80 mob1:h-80 mob2:w-96 mob2:h-96 mob3:w-100 mob3:h-100 mx-auto"
            }
          />
          <button
            className={
              "absolute inset-0 justify-center rounded-full w-72 h-72 mob1:w-80 mob1:h-80 mob2:w-96 mob2:h-96 mob3:w-100 mob3:h-100 mx-auto bg-transparent"
            }
            onClick={() => window.open("https://instagram.com")}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default CoinButton;
