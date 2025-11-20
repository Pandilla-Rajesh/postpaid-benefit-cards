import React from 'react'
import { AppBlockingOutlined, DeliveryDining, SportsGolf } from "@mui/icons-material";

const PlanTypes = () => {
  return (
    <>
      <section className="py-12 bg-white">
        <article className="container px-4 mx-auto lg:px-0 sm:px-4 md:px-4">
          {/* plans-btns */ }
          <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
            <div className="p-0.5 rounded bg-gradient-to-tr from-sky-800 to-sky-400 overflow-hidden">
              <button className="px-6 py-2 font-bold transition-all bg-white rounded
                         text-sky-800 hover:bg-sky-500 hover:text-slate-50 duration-700 w-52 ">
                Tours Plans
              </button>
            </div>

            <div className="p-0 overflow-hidden border border-gray-200 rounded">
              <button className="px-6 py-2 font-normal text-gray-700 transition-all
                         bg-white rounded hover:bg-purple-900 hover:text-slate-50 
                         duration-700 hover:font-medium ease-in-out w-52">
                Boating Plan
              </button>
            </div>

            <div className="p-0 overflow-hidden border border-gray-200 rounded">
              <button className="px-6 py-2 font-normal text-gray-700 
                        transition-all bg-white rounded hover:bg-purple-900 hover:text-slate-50 
                         duration-700 hover:font-medium ease-in-out w-52 ">
                Sound & Lights
              </button>
            </div>

            <div className="p-0 overflow-hidden border border-gray-200 rounded">
              <button className="px-6 py-2 font-normal text-gray-700 
                        transition-all bg-white rounded hover:bg-purple-900 hover:text-slate-50 
                         duration-700 hover:font-medium ease-in-out w-52 ">
                River Cruise
              </button>
            </div>

          </div>
          {/* plans-btns-end */ }
          <div className="py-6 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex grid flex-col justify-around grid-cols-1 px-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
              <div className="flex items-center justify-center gap-3 mb-5 sm:mb-5 lg:mb-0 md:mb-5">
                <div className="flex items-center justify-center border border-gray-200 rounded-full custom-icon">
                  <SportsGolf fontSize="large" className="text-orange-400" />
                </div>
                <div className="flex flex-col items-start">
                  <h6 className="px-2 py-0.5 mb-2 text-xs font-normal rounded-full bg-gradient-to-tr from-purple-800 to-pink-500 text-slate-50">
                    Limited time offer
                  </h6>
                  <h4 className="font-bold text-black">The Entertainer App on us</h4>
                  <p className="text-xs font-medium text-gray-400">12 month membership with new Power Plans.</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 mb-5 md:mb-0 lg:mb-0 sm:mb-5">
                <div className="flex items-center justify-center border border-gray-200 rounded-full custom-icon">
                  <DeliveryDining fontSize="large" className="text-blue-500" />
                </div>
                <div className="flex flex-col items-start">
                  <div class="p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                    <div class="bg-white rounded-xl px-1">
                      <h2 class="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">Greater value online</h2>
                    </div>
                  </div>
                  <h4 className="font-bold text-black">FREE 1 hour delivery</h4>
                  <p className="text-xs font-medium text-gray-400">Orders in Dubai, placed between 10am-7pm. </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center justify-center border border-gray-200 rounded-full custom-icon">
                  <AppBlockingOutlined fontSize="large" className="text-blue-600" />
                </div>
                <div className="flex flex-col items-start">

                  <h4 className="font-bold text-black">No activation fee</h4>
                  <p className="text-xs font-medium text-gray-400">Save AED 125 on all new Power Plan activations.</p>
                </div>
              </div>

            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default PlanTypes