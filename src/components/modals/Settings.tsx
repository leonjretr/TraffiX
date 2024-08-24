import CheckedToggle from "../toggle/CheckedToggle.tsx";
import React, {useState} from "react";
import InputSettingsModal from "./InputSettingsModal.tsx";

const Settings = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div>
            <h2 className="text-xl text-center text-black font-poppinsFont font-semibold mb-1">
                Settings
            </h2>
            <h2 className="text-base text-center text-black font-poppinsFont font-bold mb-3">
                Fill in and get 2000TR!
            </h2>
            <div className={"mb-3 text-left"}>
                <InputSettingsModal title={"Your first name:"} typeInput={"text"}/>
                <InputSettingsModal title={"Your last name:"} typeInput={"text"}/>
                <InputSettingsModal title={"Year of birth:"} typeInput={"number"}/>
                <div className={"mb-1"}>
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your sex:
                    </label>
                    <form className="col-span-4">
                        <select
                            defaultValue={"Choose your option:"}
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option key={1} value={"Male"}>Male</option>
                            <option key={2} value={"Female"}>Female</option>
                        </select>
                    </form>
                </div>
                <div className="flex items-center mt-2">
                    <CheckedToggle/>
                </div>
            </div>

        </div>
    );
};

export default Settings;