import React, {useEffect, useState} from 'react';

type ImageProps = {
    classname:string
    id:string;
    src: string | undefined;
    alt: string;
    defaultSrc: string;
};

const ImageWithFallback: React.FC<ImageProps> = ({ src, alt, defaultSrc, id, classname }) => {
    const [imgSrc, setImgSrc] = useState(src || defaultSrc);
    useEffect(() => {
        if (!src) {
            setImgSrc(defaultSrc);
        } else {
            setImgSrc(src);
        }
    }, [src, defaultSrc]);

    const handleError = () => {
        setImgSrc(defaultSrc);
    };

    return <img className={classname} id={id} src={imgSrc} alt={alt} onError={handleError} />;
};

export default ImageWithFallback;