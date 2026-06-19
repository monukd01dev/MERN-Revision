import { useState, useRef } from "react"
const useSlider = () => {
    const sliderViewport = useRef(null)
    const [disableRight, setDisableRight] = useState(false)
    const [disableLeft, setDisableLeft] = useState(true)


    const scrollDirection = {
        right: "RIGHT",
        left: "LEFT"
    }

    const handleBtnScroll = (direction, scrollOffset) => {
        if (!sliderViewport.current) return;
        const maxScroll = sliderViewport.current.scrollWidth - sliderViewport.current.clientWidth;
        const currentScroll = sliderViewport.current.scrollLeft
        const scrollAmount = scrollOffset;
        let nextScroll;

        if (direction === 'RIGHT')
            nextScroll = Math.min(currentScroll + scrollAmount, maxScroll);
        if (direction === 'LEFT')
            nextScroll = Math.max(currentScroll - scrollOffset, 0)

        sliderViewport.current.scrollTo({
            left: nextScroll,
            behavior: 'smooth'
        });
    }

    const handleSlideScroll = () => {
        if (!sliderViewport.current) return;
        const maxScroll = sliderViewport.current.scrollWidth - sliderViewport.current.clientWidth;
        const currentScroll = sliderViewport.current.scrollLeft


        const isAtStart = currentScroll <= 0;
        const isAtEnd = currentScroll >= maxScroll - 2;

        if (disableLeft !== isAtStart) {
            setDisableLeft(isAtStart);
        }

        if (disableRight !== isAtEnd) {
            setDisableRight(isAtEnd);
        }
    }

    return {
        sliderRef: sliderViewport,
        disableRight,
        disableLeft,
        handleBtnScroll,
        handleSlideScroll,
        scrollDirection
    }


}

export default useSlider