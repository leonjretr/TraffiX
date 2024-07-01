const MainPageTapCoin = () => {
    return (
        <div className={"MainPageTapCoin"}>
            <div className={"flex justify-center"}>
                <div className={"relative inline-block"}>
                    <img src={"../public/imgs/coin.png"} alt={"TapCoin"} className={"w-64 h-64"}/>
                    <button className={"absolute inset-0 justify-center rounded-full w-64 h-64 bg-transparent"} onClick={() => window.open("https://instagram.com")}></button>
                </div>
            </div>
        </div>
    );
};

export default MainPageTapCoin;