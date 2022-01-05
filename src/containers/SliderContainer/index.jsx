import React from 'react';
import ImageSlider from '../../components/Container/Slider/ImageSlider';
import { SliderData } from '../../components/Container/Slider/SliderData';


function SliderContainer(props) {
    return (
        <>
            <ImageSlider slides={SliderData} />
        </>
    );
}

export default SliderContainer;