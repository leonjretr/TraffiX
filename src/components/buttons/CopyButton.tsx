import React,{useState} from 'react';

const CopyButton = () => {

    const [copySuccess, setCopySuccess] = useState('Copy');
    const [selectedOption, setSelectedOption] = useState('');
    const textToCopy = 'traffixdev';
    const textToCopy2 = 'traffix.com/ref/cy4ka';
    const textToCopy3 = 'tr.com/itsme';

    // const [refData, setRefData] = useState<IReferralApiResponse | undefined>();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             fetchReferrals().then((data) => setRefData(data));
    //             // const data = await fetchTasks();
    //             // setCardData(data);
    //             // if (Array.isArray(data)) {
    //             //
    //             // } else {
    //             //     console.error("Fetched data is not an array:", data);
    //             // }
    //         } catch (error) {
    //             console.error("Error fetching tasks:", error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(selectedOption);
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
        <div className="grid grid-cols-8 gap-1 w-80 mob2:w-96 sm:w-110 mt-5 p-2 select-none">
            <form className="col-span-6">
                <select id="countries"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={textToCopy}>{textToCopy}</option>
                    <option value={textToCopy2}>{textToCopy2}</option>
                    <option value={textToCopy3}>{textToCopy3}</option>
                </select>
            </form>
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