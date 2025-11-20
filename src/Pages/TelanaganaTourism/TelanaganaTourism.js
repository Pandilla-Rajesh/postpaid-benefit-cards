import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowForwardOutlined } from "@mui/icons-material";

const tourData = [
    {
        id: 1,
        title: "Hyderabad",
        tabname: "Adventure Tourism",
        tourname: "Adventure Tourism",
        description:
            "Explore the City of Pearls with its rich history, cuisine, and architectural marvels.",
        image: require("../../assets/images/adventure-tourism.png"),
    },
    {
        id: 2,
        title: "Warangal",
        tabname: "Tribal Tourism",
        tourname: "Tribal Tourism",
        description:
            "Discover the ancient capital of the Kakatiya dynasty with its grand temples and forts.",
        image: require("../../assets/images/tribal-tourism.png"),
    },
    {
        id: 3,
        title: "Nagarjuna Sagar",
        tabname: "Backpack Tourism",
        tourname: "Backpack Tourism",
        description:
            "Experience the beauty of one of the world’s largest masonry dams and serene landscapes.",
        image: require("../../assets/images/backpack-tourism.png"),
    },
];

export default function TelanganaTourism() {
    const [activeTab, setActiveTab] = useState(0);
    const swiperRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
        if(swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-center">
            {/* LEFT IMAGE SECTION */ }
            <div className="w-full flex justify-center mb-6 md:mb-0">
                <Swiper
                    spaceBetween={ 10 }
                    slidesPerView={ 1 }
                    loop={ true }
                    onSlideChange={ (swiper) => setActiveTab(swiper.activeIndex) }
                    className="rounded-full overflow-hidden"
                    ref={ swiperRef }
                >
                    { tourData.map((tour, index) => (
                        <SwiperSlide key={ index }>
                            <img
                                src={ tour.image }
                                alt={ tour.title }
                                datatype="async"
                                srcSet={ tour.image }
                                loading="lazy"
                                className="w-11/12 img-responsive shadow-lg object-cover 
                                rounded-full transition-all duration-700"
                            />
                        </SwiperSlide>
                    )) }
                </Swiper>
            </div>

            {/* RIGHT CONTENT SECTION */ }
            <div className=" w-full text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    { tourData[activeTab].tourname }
                </h2>
                <p className="text-gray-600 mb-6 text-xl">{ tourData[activeTab].description }</p>

                {/* TAB BUTTONS */ }
                <div className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap">
                    { tourData.map((tour, index) => (
                        <button key={ index } onClick={ () => handleTabClick(index) }
                            className={ `min-w-[160px] py-3 rounded-full border text-sm font-bold transition
                                 ${activeTab === index ? "bg-green-600 text-white border-green-600" :
                                    "border-gray-400 bg-white text-gray-700 hover:border-green-400 hover:text-green-600"
                                }` }>
                            <span>{ tour.tabname } </span>
                            <span><ArrowForwardOutlined fontSize="medium text-green-700" /></span>
                        </button>


                    )) }
                </div>
            </div>
        </section>
    );
}
