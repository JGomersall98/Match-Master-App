// SliderSettings.js
import { NextArrow, PrevArrow } from '../CustomArrowComponent';

// Export a function that takes a flag indicating whether players are loaded
export const SliderSettings = (arePlayersLoaded) => ({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: arePlayersLoaded ? <NextArrow /> : <></>,
    prevArrow: arePlayersLoaded ? <PrevArrow /> : <></>,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
