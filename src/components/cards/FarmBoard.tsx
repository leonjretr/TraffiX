import FarmCard from "./FarmCard.tsx";

const FarmBoard = () => {
    const features = [
        "Energy 3x",
        "Money 2x"
    ];
    return (
        <div className="flex flex-col justify-center items-center">
            <div className={"flex justify-center items-center"}>
                <h2 className={"text-center text-2xl font-poppinsFont text-white font-semibold mt-3"}>
                    Mining farm
                </h2>
            </div>
            <div className={"grid grid-flow-row grid-cols-2 auto-cols-auto gap-x-4 gap-y-3 mt-1"}>
                <FarmCard cardTitle={"AMD Ryzen"} features={features} featuresProfit={300} featuresTotal={1200}/>
                <FarmCard cardTitle={"AMD Ryzen"} features={features} featuresProfit={200} featuresTotal={990}/>
                <FarmCard cardTitle={"AMD Ryzen"} features={features} featuresProfit={100} featuresTotal={733}/>
                <FarmCard cardTitle={"AMD Ryzen"} features={features} featuresProfit={444} featuresTotal={5150}/>
                <FarmCard cardTitle={"AMD Ryzen"} features={features} featuresProfit={300} featuresTotal={1200}/>
                <FarmCard cardTitle={"AMD Ryzen"} features={features} featuresProfit={300} featuresTotal={1200}/>
                <FarmCard cardTitle={"AMD Ryzen"} features={features} featuresProfit={444} featuresTotal={5150}/>
                <FarmCard cardTitle={"AMD Ryzen"} features={features} featuresProfit={444} featuresTotal={5150}/>
            </div>

        </div>
    );
};

export default FarmBoard;