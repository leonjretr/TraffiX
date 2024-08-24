import {FC} from "react";

interface InputSettingsProps {
    title: string;
    typeInput:string;
}
const InputSettingsModal:FC<InputSettingsProps> = ({title,typeInput}) => {
    return (
        <div className={"mb-1"}>
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {title}
            </label>
            <input type={typeInput}
                   className="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"/>
        </div>
    );
};

export default InputSettingsModal;