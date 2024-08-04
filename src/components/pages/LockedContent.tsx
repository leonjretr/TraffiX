const LockedContent = () => {
    const lockUrl = new URL("/imgs/lock.png", import.meta.url).href;
    return (
        <div
            className="absolute inset-x-5 inset-y-28 bg-white/30 rounded-3xl blur-sm flex place-items-center items-center justify-center">
            <div className={"flex justify-center items-center place-items-center z-10"}>
                <img className={"w-20 h-20 blur-none"}
                     src={lockUrl}
                     alt={"Locked Content"}/>
            </div>
        </div>
    );
};

export default LockedContent;