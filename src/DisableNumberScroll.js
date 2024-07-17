import { useEffect } from 'react';

export const DisableNumberScroll = () => {
    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
        };
        const numberInputs = document.querySelectorAll('input[type="number"]');

        numberInputs.forEach((input) => {
            input.addEventListener('wheel', handleWheel, { passive: false });
        });

        return () => {
            numberInputs.forEach((input) => {
                input.removeEventListener('wheel', handleWheel);
            });
        };
    }, []);
};

export default DisableNumberScroll;