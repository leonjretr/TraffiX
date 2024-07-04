import {useState} from 'react';

const CopyButton = () => {

    const [copySuccess, setCopySuccess] = useState('Copy');
    const textToCopy = 'traffix.com/ref/dJls$231nd#2';

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopySuccess('Copied!');
            setTimeout(() => {
                setCopySuccess('Copy');
            }, 3000)
        } catch (err) {
            setCopySuccess('Failed to copy!');
            setTimeout(() => {
                setCopySuccess('Copy');
            }, 3000)
        }
    };

    return (
        <div className="grid grid-cols-8 gap-1 w-80 mob2:w-96 sm:w-110 mt-5 select-none">
            <label className="sr-only">Label</label>
            <input id="npm-install" type="text"
                   className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm mob2:text-lg sm:text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   value={textToCopy} disabled readOnly/>
            <button
                className="col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mob2:text-lg sm:text-2xl w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
                onClick={() => copyToClipboard()}>
                <span id="success-message" className="inline-flex items-center">
                {copySuccess}
                </span>
            </button>
        </div>
    );
};

export default CopyButton;