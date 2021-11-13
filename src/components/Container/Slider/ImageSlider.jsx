import React, { useEffect, useRef, useState } from "react";
import './style.css'

// const ImageSlider = (props) => {
//     //load list img 
//     const { slides } = props;
//     const [current, setCurrent] = useState(0)
//     const length = slides.length

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1)
//         console.log('image index', current)
//     }

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1)
//         console.log('image index', current)
//     }

//     if (!Array.isArray(slides) || slides.length <= 0) {
//         return null
//     }
//     return (
//         <section className="slider">
//             <div className="slider__next">
//                 <i className="fas fa-chevron-right"
//                     onClick={nextSlide}
//                 ></i>
//             </div>
//             <div className="slider__prev">
//                 <i className="fas fa-chevron-left"
//                     onClick={prevSlide}
//                 ></i>
//             </div>
//             {slides.map((slide, index) => {
//                 return (
//                     <div className={index === current ? 'slider__active' : 'slider_none'} key={index}>
//                         {index === current &&
//                             <img src={slide.image} alt='Banner Image' className="slider__image" />
//                         }
//                     </div>
//                 )
//             })}

//         </section>
//     )
// }

const delay = 4500;

function ImageSlider(props) {
    const { slides } = props;

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {slides.map((slide, index) => (
                    <img
                        className="slide"
                        key={index}
                        src={slide.image}
                    />
                ))}
            </div>

            <div className="slideshowDots">
                {slides.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;