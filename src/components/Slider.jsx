import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/slider/1.png",
  "/slider/2.png",
  "/slider/3.png",
  "/slider/4.png",
  "/slider/5.png",
  "/slider/6.png",
  "/slider/7.png",
  "/slider/8.png",
  "/slider/9.png",
  "/slider/10.png",
  "/slider/11.png",
  "/slider/12.png",
  "/slider/13.png",
  "/slider/14.png",
  "/slider/15.png",
  "/slider/16.png",
  "/slider/17.png",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading,setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setAutoplay(false);
    setTimeout(() => {
      setAutoplay(true);
    }, 5000);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
    setAutoplay(false);
    setTimeout(() => {
      setAutoplay(true);
    }, 5000);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
    setAutoplay(false);
    setTimeout(() => {
      setAutoplay(true);
    }, 5000);
  };

   const handleOpenModal = (index) => {
     setCurrentSlide(index);
     setIsModalOpen(true);
   };

   const handleCloseModal = () => {
     setIsModalOpen(false);
   };

   useEffect(() => {
     function handleResize() {
       if (containerRef.current) {
         const width = containerRef.current.offsetWidth;
         console.log("width",width)
         containerRef.current.style.height = width>1000 ? `${width * 0.35}px` : `${width * 0.5}px`;
       }
     }

     handleResize(); // Call initially
     window.addEventListener("resize", handleResize);
     return () => window.removeEventListener("resize", handleResize);
   }, []);

  return (
    <div
      ref={containerRef}
      className={`flex z-0 relative w-full lg:w-[70%] aspect-ratio: 1 / 2; h-80 lg:h-[600px] overflow-hidden justify-center items-center ${
        isModalOpen ? "z-50" : "z-0"
      }`}
    >
      <AnimatePresence initial={false} mode="wait">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute cursor-pointer inset-0 w-full h-full"
            initial={{ opacity: 0, x: "100%" }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              x: index === currentSlide ? 0 : "100%",
            }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5 }}
            onClick={() => handleOpenModal(index)}
          >
            <div className="w-full h-full relative aspect-w-1 aspect-h-2">
              {loading && (
                <div
                  className="absolute inset-0 bg-gray-700 opacity-0 animate-pulse"
                  style={{ animationDuration: "3s" }}
                />
              )}
              <Image
                src={image}
                alt={`slide-${index}`}
                onLoadStart={() => setLoading(true)}
                onLoadingComplete={() => setLoading(false)}
                layout="fill"
                objectFit="cover"
                onClick={() => handleOpenModal(index)}
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`w-[1vh] h-[1vh] mx-[3px] md:w-2 md:h-2 md:mx-2 rounded-full bg-[#F8FAE5] cursor-pointer ${
              index === currentSlide
                ? "w-[1.5vh] h-[1.5vh] md:w-3 md:h-3 bg-[#B19470]"
                : ""
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => handleDotClick(index)}
            initial={{ scale: 1 }}
          />
        ))}
      </div>
      <button
        className="flex justify-center items-center p-3 absolute left-1 md:left-6 rounded-full bg-gray-200 bg-opacity-50 hover:bg-opacity-100 backdrop-blur-md ml-4"
        onClick={handlePrevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="flex p-3 absolute right-1 md:right-6 rounded-full bg-gray-200 bg-opacity-50 hover:bg-opacity-100 backdrop-blur-md mr-4"
        onClick={handleNextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center z-50 backdrop-blur-lg bg-black bg-opacity-50">
          <button
            className="absolute top-8 right-8 lg:right-20 text-white text-2xl z-50"
            onClick={handleCloseModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 lg:w-10 lg:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative max-w-screen-lg w-full h-full">
            <Image
              src={images[currentSlide]}
              alt={`slide-${currentSlide}`}
              layout="fill"
              objectFit="contain"
              onClick={handleNextSlide}
              className="cursor-pointer"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
