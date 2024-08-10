import FarmCard from "./FarmCard.tsx";

const FarmBoard = () => {
    const features = [
        "Energy 3x",
        "Money 2x"
    ];
    return (
        <div className="flex flex-col justify-start">
            <div className={"flex justify-center items-center"}>
                <h2 className={"text-center text-2xl font-poppinsFont text-white font-medium mt-5"}>
                    Mining farm
                </h2>
            </div>
            <div className={"grid grid-flow-row grid-cols-2 gap-x-3 gap-y-3 mx-5 mt-3"}>
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