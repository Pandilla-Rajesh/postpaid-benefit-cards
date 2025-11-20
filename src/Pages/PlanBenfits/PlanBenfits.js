// ...existing code...
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plans from "../../Data/Plans.json";
import { ArrowForwardOutlined, Check, Close, CurrencyRupeeOutlined, KeyboardDoubleArrowRightRounded } from "@mui/icons-material";

const PlanBenefits = () => {

  const [open, setOpen] = useState(false)
  const handOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    if((open)) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  useEffect(() => {
    const selectors = [".info-grid .info-card"];

    function gridAdjust(targetSelector) {
      const elements = document.querySelectorAll(targetSelector);
      if(!elements.length) return;
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
    if(width <= 480) return 1;
    if(width <= 768) return 1;
    if(width <= 1024) return Math.min(2, plans.length);
    if(width <= 1280) return Math.min(3, plans.length);
    return slidesDesktop;
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: plans.length > getSlidesToShow(),
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: Math.min(3, plans.length) } },
      { breakpoint: 1024, settings: { slidesToShow: Math.min(2, plans.length) } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const cards = plans.map((plan, index) => (
    <div key={ index } className="p-2 h-full">
      <div className="info-card my-4 relative flex flex-col justify-between transition
         bg-white border border-gray-200 shadow-md rounded-2xl hover:shadow-xl h-full">
        <div className=" relative z-50">
          { plan.tag && (
            <div className={ `absolute z-50 px-2 py-1 
             text-gray-100 rounded-t-lg left-2 -top-6 text-sm font-bold
               ${plan.id === 1 ? 'bg-slate-800' :
                plan.id === 2 ? 'bg-green-700' :
                  plan.id === 3 ? 'bg-orange-500' :
                    plan.id === 4 ? 'bg-blue-700' :
                      'bg-green-700'}` }>
              { plan.tag } <span><KeyboardDoubleArrowRightRounded fontSize="large text-white" /></span>
            </div>
          ) }
        </div>

        <div className={ `absolute left-0 top-0 h-full rounded-s-xl
         w-2 inline-block bg-gradient-to-r from-blue-50 to-green-50
        ` }></div>

        <div className="flex flex-col flex-1 p-5 pl-5">
          {/* Content-Section */ }
          <div className="flex-1">
            <p className="text-xs font-medium text-green-700">You Pay</p>
            <p className="text-2xl font-bold text-slate-700">
              <span>
                <CurrencyRupeeOutlined />
              </span>
              { plan.price }
              {/* <small className="text-sm font-medium text-blue-800 font-extrabold">/month</small> */ }
            </p>
            {/* <p className="mb-3 text-xs font-normal text-gray-800">{ plan.duration }</p> */ }
            <hr className="h-px my-3 bg-gray-200 border-0" />
            <p className="text-sm font-normal text-blue-700">
              { plan.getdata }
            </p>
            <h3 className="mb-3 text-xl font-bold text-green-700">
              { plan.name }</h3>
            <hr className="h-px my-3 bg-gray-200 border-0" />
            <div className="mb-4 space-y-1 text-gray-800">
              <p className=" relative inline-block">
                {/* <span className="font-bold text-xl me-3">{ plan.data }</span> */ }
                <span className="text-gray-800">{ plan.guide }</span>
              </p>
              {/* <p>
                <span className="font-bold text-xl me-3">{ plan.minutes }</span>
                <span className="text-gray-800">Flexi minutes</span>
              </p> */}
            </div>

            {/* <ul className="text-sm text-gray-600 space-y-1 mb-4">
              { plan.features.map((feature, i) => (
                <li key={ i } className="flex gap-1">
                  <Check fontSize="medium" />
                  <p> { feature }</p>
                </li>
              )) }
            </ul> */}
          </div>
          {/* end */ }

          {/* Offer Section */ }
          {/* <div className="flex flex-col items-start py-4 justify-between border-t border-gray-300">
            <div className="flex-1">
              { plan.offer && (
                <h5 className=" inline-block bg-gradient-to-r from-blue-800 to-green-500
                 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  { plan.offer }
                </h5>
              ) }
              <div>
                { plan.entertainer && (
                  <div className=" flex items-center my-3 gap-3">
                    <p className="text-sm text-gray-700 font-medium">{ plan.entertainer }</p>
                    <p className="text-sm text-gray-700 font-normal">{ plan.onmonth }</p>
                  </div>
                ) }
              </div>
            </div>
          </div> */}
          {/* end */ }

          {/* Card-buttons */ }
          <div className="flex items-center justify-between border-t border-gray-200 pt-3 text-sm font-medium">
            <a href="#" className="underline transition-all text-slate-800 hover:underline
             hover:text-green-700">
              What you get
            </a>
            <button type='button' onClick={ handOpen }
              className='bg-gray-50 hover:bg-green-700 hover:text-slate-50 duration-300 
                                            ease-in-out transition-all py-2 px-4 border border-green-700 rounded-full text-md 
                                            font-semibold hover:animate-bounce flex items-center justify-center gap-2'>
              <span>Book a Tour</span>
              <div className='bg-green-600 rounded-full w-5 h-5 leading-4'>
                <KeyboardDoubleArrowRightRounded fontSize='medium text-white' /></div>
            </button>
          </div>
          {/* end */ }
        </div>
      </div>
    </div>
  ));

  return (
    <section className="py-10 bg-gray-100 border-t border-gray-300 shadow-lg info-grid" id="packages">
      <div className="container mx-auto px-4">
        <div className=" text-center info-cmn-sub-font mb-10">
          <h5 className='mb-2 font-normal text-2xl'>
            <span className='rounded bg-green-500 px-2 info-ab-ex
                                        text-slate-50 '>Especially curated for you!
              <KeyboardDoubleArrowRightRounded />
            </span>
          </h5>
          <h2 className='text-5xl font-bold leading-10 text-gray-700 mb-10'>
            Pick from our <br /> travel-friendly packages<br /> for every budget</h2>
          <div className="flex items-center justify-center">
            <button type='button' onClick={ handOpen }
              className='bg-gray-50 hover:bg-green-700 hover:text-slate-50 duration-300 
                  text-slate-700 ease-in-out transition-all py-2 px-4 border border-green-700 rounded-full text-md 
                  font-semibold hover:animate-bounce flex items-center justify-center gap-2'>
              <span>Book a Tour</span>
              <div className='bg-green-600 rounded-full w-8 h-8 leading-7'>
                <KeyboardDoubleArrowRightRounded fontSize='medium text-white' /></div>
            </button>
          </div>

        </div>
        {/* benfit-cards-slider */ }
        <Slider key={ width } ref={ sliderRef } { ...sliderSettings }>
          { cards }
        </Slider>
        {/* end */ }
      </div>


      {/* modal */ }

      <div className='flex flex-col items-center justify-center'>
        { open && (
          <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
            {/* modal content */ }
            <div className='bg-white relative rounded-md shadow-xl w-11/12 md:w-1/3'>
              <div className="bg-green-700 px-4 py-2">
                <h2 className="text-5xl text-green-100 font-normal
                                     text-white info-ab-ex">
                  Book a Tour
                </h2>
                {/* <p className="text-sm text-green-50">Lorem Ipsum is simply dummy text of
                  the printing  </p> */}
              </div>
              <button
                onClick={ () => setOpen(false) }
                className='bg-blue-900 px-4 py-4 absolute top-0 right-0 
                                    text-white hover:text-white'
              >
                <Close />
              </button>
              <div className="px-4 py-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-full gap-2">
                  <div className="mb-2">
                    <label class="block text-sm text-gray-700 text-sm font-semibold mb-2" for="username">
                      Full Name
                    </label>
                    <input type="text" className="w-full px-2 py-2 border border-gray-300"
                      placeholder="Your Name" />
                  </div>
                  <div className="mb-2">
                    <label class="block text-sm text-gray-700 text-sm font-semibold mb-2" for="username">
                      Email Address
                    </label>
                    <input type="text" className="w-full px-2 py-2 border border-gray-300"
                      placeholder="Your Email ID" />
                  </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
                  <div className="mb-2">
                    <label class="block text-sm text-gray-700 text-sm font-semibold mb-2" for="username">
                      Phone Number
                    </label>
                    <input type="text" className="w-full px-2 py-2 border border-gray-300"
                      placeholder="Contact Number" />
                  </div>

                  <div className="mb-2">
                    <label class="block text-sm text-gray-700 text-sm font-semibold mb-2" for="username">
                      City/Country
                    </label>
                    <input type="text" className="w-full px-2 py-2 border border-gray-300"
                      placeholder="Where are you travelling from?" />
                  </div>
                </div>


                <div className="mb-2">
                  <label class="block text-sm text-gray-700 text-sm font-semibold mb-2" for="username">
                    Number of Travellers
                  </label>
                  <input type="number"
                    className="w-full px-2 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Where are you travelling from?" />
                </div>

                <div className="mb-2">
                  <label class="block text-sm text-gray-700 text-sm font-semibold mb-2"
                    for="username">
                    Special Requests
                  </label>
                  <textarea name="" cols="5" rows="4" className="w-full px-2 py-2 border border-gray-300
                                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us what kind of experience you’re looking for…" >
                  </textarea>

                </div>

              </div>
              <div className="flex items-center justify-center">
                <button onClick={ () => setOpen(false) }
                  className="px-2 py-3 w-full uppercase bg-slate-700 text-white hover:bg-blue-900 
                  transition duration-300 font-bold">
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) }
      </div>

    </section>
  );
};

export default PlanBenefits;