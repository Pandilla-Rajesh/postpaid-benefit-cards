// ...existing code...
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plans from "../../Data/Plans.json";
import { Check } from "@mui/icons-material";

const PlanBenefits = () => {

  useEffect(() => {
    const selectors = [".info-grid .info-card"];

    function gridAdjust(targetSelector) {
      const elements = document.querySelectorAll(targetSelector);
      if (!elements.length) return;
      elements.forEach((el) => (el.style.height = "100%"));
      const heights = Array.from(elements).map((el) => el.offsetHeight);
      const tallest = Math.max(...heights);
      elements.forEach((el) => (el.style.height = `${tallest}px`));
    }

    const runAll = () => selectors.forEach((s) => gridAdjust(s));
    runAll();
    window.addEventListener("resize", runAll);
    return () => window.removeEventListener("resize", runAll);
  }, []);

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1920
  );
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const sliderRef = useRef(null);

  const slidesDesktop = Math.min(4, plans.length);
  const getSlidesToShow = () => {
    if (width <= 480) return 1;
    if (width <= 768) return 1;
    if (width <= 1024) return Math.min(2, plans.length);
    if (width <= 1280) return Math.min(3, plans.length);
    return slidesDesktop;
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: plans.length > getSlidesToShow(),
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,

    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: Math.min(3, plans.length) } },
      { breakpoint: 1024, settings: { slidesToShow: Math.min(2, plans.length) } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true,} },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const cards = plans.map((plan, index) => (
    <div key={index} className="p-2 h-full">
      <div className="info-card my-4 relative flex flex-col justify-between transition
         bg-white border border-gray-200 shadow-md rounded-2xl hover:shadow-xl h-full">
        <div className=" relative z-50">
          {plan.tag && (
            <div className="absolute z-50 px-6 py-1 text-xs font-light text-gray-100 rounded-t-lg left-2 
            -top-6 bg-indigo-950">
              {plan.tag}
            </div>
          )}
        </div>

        <div className={`absolute left-0 top-0 h-full rounded-s-xl w-2 bg-gradient-to-b ${plan.color}`}></div>

        <div className="flex flex-col flex-1 p-5 pl-5">
          {/* Content-Section */}
          <div className="flex-1">
            <p className="text-xs font-medium text-fuchsia-500">You Pay</p>
            <p className="text-2xl font-bold text-fuchsia-600">
              {plan.price}
              <small className="text-sm font-medium text-fuchsia-400">/month</small>
            </p>
            <p className="mb-3 text-xs font-normal text-gray-800">{plan.duration}</p>
            <hr className="h-px my-3 bg-gray-200 border-0" />
            <p className="text-sm font-normal text-cyan-500">You Get</p>
            <h3 className="mb-3 text-xl font-bold text-cyan-500">{plan.name}</h3>
            <hr className="h-px my-3 bg-gray-200 border-0" />
            <div className="mb-4 space-y-1 text-gray-800">
              <p className=" relative inline-block">
                <span className="font-bold text-xl me-3">{plan.data}</span>
                <span className="text-gray-800">National data</span>
              </p>
              <p>
                <span className="font-bold text-xl me-3">{plan.minutes}</span>
                <span className="text-gray-800">Flexi minutes</span>
              </p>
            </div>

            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex gap-1">
                  <Check fontSize="medium" />
                  <p> {feature}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* end */}

          {/* Offer Section */}
          <div className="flex flex-col items-start py-4 justify-between border-t border-gray-300">
            <div className="flex-1">
              {plan.offer && (
                <h5 className=" inline-block bg-gradient-to-r from-purple-800 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  {plan.offer}
                </h5>
              )}
              <div>
                {plan.entertainer && (
                  <div className=" flex items-center my-3 gap-3">
                    <p className="text-sm text-gray-700 font-medium">{plan.entertainer}</p>
                    <p className="text-sm text-gray-700 font-normal">{plan.onmonth}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* end */}

          {/* Card-buttons */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-3 text-sm font-medium">
            <a href="#" className="underline transition-all text-slate-800 hover:underline hover:text-cyan-500">
              What you get
            </a>
            <button className="px-8 py-2 font-semibold transition ease-in border rounded text-fuchsia-600 hover:bg-cyan-500 hover:text-white">
              Select
            </button>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  ));

  return (
    <section className="py-10 bg-gray-100 border-t border-gray-300 shadow-lg info-grid">
      <div className="container mx-auto px-4">
        {/* benfit-cards-slider */}
        <Slider key={width} ref={sliderRef} {...sliderSettings}>
          {cards}
        </Slider>
        {/* end */}
      </div>
    </section>
  );
};

export default PlanBenefits;