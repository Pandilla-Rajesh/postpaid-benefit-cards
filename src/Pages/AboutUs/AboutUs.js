import React from "react";
import {
    KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";
import TelanganaTourism from "../TelanaganaTourism/TelanaganaTourism";

const AboutUs = () => {
    return (
        <>
            <section className="py-16 bg-blue-50 info-ab-bg" id="about">
                <article className="container mx-auto px-4">
                    {/* 12-column grid */ }
                    <div className="grid grid-cols-12 gap-15 items-center">

                        {/* LEFT COLUMN (4 cols) */ }
                        <div className="col-span-12 md:col-span-5">
                            <h5 className="mb-2 font-normal text-2xl">
                                <span className="rounded bg-green-500 px-2 py-1 text-slate-50 
                                inline-flex items-center gap-1 info-ab-ex">
                                    Explore Tours
                                    <KeyboardDoubleArrowRightRounded />
                                </span>
                            </h5>

                            <h2 className="text-5xl font-bold text-gray-700 leading-[1.2]">
                                The perfect travel <br />
                                place for you & <br /> your family
                            </h2>
                        </div>

                        {/* RIGHT COLUMN (8 cols) */ }
                        <div className="col-span-12 md:col-span-5 relative">
                            {/* Tourism Component */ }
                            <TelanganaTourism />

                            {/* Decorative Image Positioned Relative to Parent */ }
                            <div className="absolute -left-48 bottom-[-30px] z-10">
                                <img
                                    src={ require("../../assets/images/nine-jewel.png") }
                                    alt="Nine Jewel"
                                    className="w-[350px] md:w-[300px]"
                                />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};

export default AboutUs;
