import React, { useState, useEffect } from 'react';
import S1 from '.././Assets/CompanyImages/S1.jpeg'
import S2 from '.././Assets/CompanyImages/S2.jpeg'
import S3 from '.././Assets/CompanyImages/S4.jpeg'
import S5 from '.././Assets/CompanyImages/S5.jpeg'
import S6 from '.././Assets/CompanyImages/S6.jpeg'
import S7 from '.././Assets/CompanyImages/S7.jpeg'
import S8 from '.././Assets/CompanyImages/S8.jpeg'
import S9 from '.././Assets/CompanyImages/S9.jpeg'
import S10 from '.././Assets/CompanyImages/S10.jpeg'
import S11 from '.././Assets/CompanyImages/S11.jpeg'



const Carousel = () => {
  const [slides] = useState([
    {
      imgSrc: S2,
    },
    {
      imgSrc: S1,
    },
    {
      imgSrc: S3,
    },
    {
      imgSrc: S5,
    },
    {
      imgSrc: S6,
    },
    {
      imgSrc: S7,
    },
    {
      imgSrc: S8,
    },
    {
      imgSrc: S9,
    },
    {
      imgSrc: S10,
    }
  ]);

  const autoplayIntervalTime = 4000;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, autoplayIntervalTime);

    return () => clearInterval(interval);
  }, [isPaused, currentSlideIndex]);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="relative w-full overflow-hidden mt-[6rem]">
      {/* Slides */}
      <div className="relative min-h-[86svh] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlideIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {/* Central Text Overlay for Company Name */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1
                style={{
                  lineHeight: "1.5",
                  color: "#fff", // Light whitish color
                  textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)", // Soft shadow for depth
                  backgroundColor: "rgb(97 97 97)", // Solid background color (dark gray)   
                  fontFamily: "ui-rounded",
                  padding: "1rem 2rem", // Padding for better spacing
                  borderRadius: "8px", // Rounded corners
                }}
                className="text-4xl lg:text-[2rem] font-extrabold px-8 py-6 rounded-lg text-center shadow-lg tracking-wide transform transition-transform duration-300 hover:scale-105"
              >
                "KAMLA CORRUGATED BOX PACKAGING SOLUTION" <br /><span className='lg:text-[1.2rem] text-red-400'>Since 1979</span>
              </h1>



            </div>
            <img
              className="absolute w-full h-full inset-0 object-cover text-neutral-600 dark:text-neutral-300"
              src={slide.imgSrc}
              alt=""
            />
          </div>
        ))}
      </div>

      {/* Pause/Play Button */}
      <button
        type="button"
        className="absolute bottom-5 right-5 z-20 rounded-full text-neutral-300 opacity-50 transition hover:opacity-80 focus-visible:opacity-80"
        onClick={togglePause}
        aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
      >
        {isPaused ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-7">
            <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-7">
            <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-4.5Zm4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-4.5Z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Indicators */}
      <div className="absolute rounded-md bottom-3 md:bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-4 md:gap-3 px-1.5 py-1 md:px-2" role="group" aria-label="slides">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`size-2 cursor-pointer rounded-full transition ${currentSlideIndex === index ? 'bg-neutral-300' : 'bg-neutral-300/50'}`}
            onClick={() => setCurrentSlideIndex(index)}
            aria-label={`slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;




// // src/components/Carousel.js

// import React, { useState, useEffect } from 'react';

// const Carousel = () => {
//     // Carousel content (images and captions)
//     const slides = [
//         {
//             id: 1,
//             image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
//         },
//         {
//             id: 2,
//             image: 'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',
//         },
//         {
//             id: 3,
//             image: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg',
//         },
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [autoPlay, setAutoPlay] = useState(true);

//     const nextSlide = () => setCurrentIndex((currentIndex + 1) % slides.length);
//     const prevSlide = () => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);

//     useEffect(() => {
//         if (autoPlay) {
//             const interval = setInterval(nextSlide, 5000); // Slide every 5 seconds
//             return () => clearInterval(interval);
//         }
//     }, [currentIndex, autoPlay]);

//     return (
//         <div className="relative w-full h-[90vh] overflow-hidden">
//             {/* Slides */}
//             <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                 {slides.map((slide) => (
//                     <div key={slide.id} className="w-full h-[90vh] relative flex-shrink-0">
//                         <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
//                         <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-6">
//                             <h3 className="text-4xl md:text-5xl font-bold">{slide.title}</h3>
//                             <p className="mt-3 text-lg md:text-xl max-w-2xl">{slide.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Stylish Navigation Controls */}
//             <button
//                 onClick={prevSlide}
//                 className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-transparent border-2 border-white rounded-full p-3 text-white hover:bg-white hover:text-black transition duration-300"
//                 aria-label="Previous Slide"
//             >
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//                 </svg>
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-transparent border-2 border-white rounded-full p-3 text-white hover:bg-white hover:text-black transition duration-300"
//                 aria-label="Next Slide"
//             >
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                 </svg>
//             </button>

//             {/* Dot Indicators */}
//             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentIndex(index)}
//                         className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'} hover:bg-white`}
//                         aria-label={`Go to slide ${index + 1}`}
//                     ></button>
//                 ))}
//             </div>

//             {/* Autoplay Toggle */}
//             <button
//                 onClick={() => setAutoPlay(!autoPlay)}
//                 className="absolute top-10 right-10 bg-black/60 text-white p-2 rounded hover:bg-black/80 focus:outline-none"
//                 aria-label="Toggle autoplay"
//             >
//                 {autoPlay ? 'Pause' : 'Play'}
//             </button>
//         </div>
//     );
// };

// export default Carousel;
