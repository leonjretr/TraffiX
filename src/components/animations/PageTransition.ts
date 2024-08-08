export const slideIn = {
    initial: { x: '-100%' },
    animate: { x: '0%' },
    exit: { x: '-100%' },
    transition: { duration: 0.1 }
};

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 }
};

export const flip = {
    initial: { rotateY: 180, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    exit: { rotateY: -180, opacity: 0 },
    transition: { duration: 0.3 }
};

export const slideUpExpand = {
    initial: { y: '100%', scaleY: 0 },
    animate: { y: '0%', scaleY: 1 },
    exit: { y: '100%', scaleY: 0 },
    transition: { duration: 0.7 }
};

export const bubbleInOut = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
    transition: { duration: 0.3, damping: 10 }
};

export const zoomIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { duration: 0.6 }
};
export const cubeRotation = {
    initial: { rotateY: 90, scale: 0.8, opacity: 0 },
    animate: { rotateY: 0, scale: 1, opacity: 1 },
    exit: { rotateY: -90, scale: 0.8, opacity: 0 },
    transition: { duration: 0.4, type: 'spring', damping: 12 }
};
