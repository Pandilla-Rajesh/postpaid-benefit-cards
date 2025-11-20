import { KeyboardArrowDown, KeyboardArrowDownRounded, KeyboardDoubleArrowRightRounded } from '@mui/icons-material'
import React, { useCallback, useState } from 'react'

const Accordition = () => {

    const [openIndex, setOpenIndex] = useState(null)

    const toggleAccorditin = useCallback((index) => {
        setOpenIndex(openIndex === index ? null : index)
    })

    const accorditionData = [

        {
            title: "What are the “9 Jewels of Telangana”?",
            content: "The “9 Jewels” represent nine curated destinations or experiences across Telangana that highlight the state’s essence — from its historic forts and vibrant festivals to breathtaking landscapes, local crafts, and culinary traditions. Each jewel offers a distinct story and immersive travel experience."
        },

        {
            title: "Is this tour customizable?",
            content: "Absolutely! Our circuits are flexible — you can choose to explore all nine jewels or focus on the ones that match your interests, time, and budget. We also offer guided, semi-guided, and self-drive options."
        },

        {
            title: "What’s the best time to visit Telangana?",
            content: "The ideal time to explore Telangana is between October and February, when the weather is pleasant, making it perfect for sightseeing, outdoor adventures, and cultural festivals."
        },

        {
            title: "How do I book or get more details?",
            content: "Simply fill out the form above, and our travel concierge will reach out to you with a customized itinerary, pricing, and accommodation options within 24–48 hours."
        },

    ]

    return (
        <>
            <section className='bg-blue-50 p-20 info-faq-bg' id='faqs'>
                <article className='container-xl ms-auto'>
                    <div className='grid grid-cols-1'>
                        <div className='flex items-center justify-center flex-col'>
                            <h5 className='mb-2 font-normal text-2xl'>
                                <span className='rounded bg-green-500 px-2 info-ab-ex
                                                                text-slate-50 '>Especially curated for you!
                                    <KeyboardDoubleArrowRightRounded />
                                </span>
                            </h5>
                            <h2 className='text-5xl font-bold leading-10 text-gray-700 mb-10'>FAQs?</h2>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10'>
                        { accorditionData.map((item, index) => (
                            <div key={ index } className="border border-green-300
                            bg-white px-4 text-white rounded-md">
                                <button
                                    onClick={ () => toggleAccorditin(index) }
                                    className="w-full flex justify-between items-center py-4 text-left text-gray-800 font-medium focus:outline-none"
                                >
                                    <span className='font-semibold text-2xl text-gray-700'>
                                        { item.title }
                                    </span>
                                    <KeyboardArrowDown className={ `w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}` } />
                                </button>

                                <div className={ `transition-all duration-500 overflow-hidden ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }` }
                                >
                                    <p className="pb-4 text-gray-600">{ item.content }</p>
                                </div>
                            </div>
                        )) }
                    </div>
                </article>
            </section>
        </>
    )
}

export default Accordition