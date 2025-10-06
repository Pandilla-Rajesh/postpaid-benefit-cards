import { AppBlockingOutlined, AppShortcut, Check, DeliveryDining, East, EastOutlined, SportsGolf, WbIncandescent, WbIncandescentOutlined } from "@mui/icons-material";
import React from "react";

const PlanCards = () => {

  return (

    <>

      <section className="py-12 bg-white">
        <article className="container px-4 mx-auto lg:px-0 sm:px-4 md:px-4">
          {/* plans-btns */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
            <div className="p-0.5 rounded bg-gradient-to-tr from-sky-800 to-sky-400 overflow-hidden">
              <button className="px-6 py-2 font-bold transition-all bg-white rounded text-sky-800 hover:bg-sky-50 w-52 ">
                Power Plans
              </button>
            </div>

            <div className="p-0 overflow-hidden border border-gray-200 rounded">
              <button className="px-6 py-2 font-normal text-gray-700 transition-all bg-white rounded hover:bg-sky-50 w-52">
                New Emirati Plans
              </button>
            </div>

            <div className="p-0 overflow-hidden border border-gray-200 rounded">
              <button className="px-6 py-2 font-normal text-gray-700 transition-all bg-white rounded hover:bg-sky-50 w-52 ">
                Data-Only Plans
              </button>
            </div>

          </div>
          {/* plans-btns-end */}
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

      <section class="py-6 sm:py-6 md:py-6 lg:py-12 bg-gray-50 shadow-2xl border-t border-b border-gray-100">
        <article class=" container px-4 lg:mx-auto md:mx-auto mb-10">
          <div className="grid items-stretch gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {/* Card-1-start */}
            <div className="relative flex flex-col mb-5 overflow-hidden transition bg-white border border-gray-200 shadow-md rounded-2xl hover:shadow-xl sm:mb-0 md:mb-0 lg:mb-0">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-500 to-cyan-400"></div>

              {/* Content-start */}
              <div className="flex flex-col justify-between flex-1 p-4 pl-6">
                <div>
                  <p className="text-xs font-medium text-fuchsia-500">You Pay</p>
                  <p className="text-2xl font-bold text-fuchsia-600">
                    AED 125 <span className="text-sm font-medium text-fuchsia-400">/month</span>
                  </p>
                  <p className="mb-3 text-xs font-normal text-gray-800">For 12 months + 5% VAT</p>
                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <p className="text-sm font-normal text-cyan-500">You Get</p>
                  <h3 className="mb-3 text-xl font-bold text-cyan-500">Power Plan 125</h3>

                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <div className="mb-4 space-y-1 text-gray-800">
                    <p className="flex items-baseline gap-5 justify-stretch">
                      <span className="text-xl font-bold">4 GB</span>
                      <span className="text-gray-800">National data</span>
                    </p>
                    <p>
                      <span className="text-xl font-bold me-5">100</span>
                      <span className="text-gray-800">Flexi minutes</span>
                    </p>
                  </div>
                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <ul className="mb-6 space-y-1 text-sm text-gray-600">
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>No activation fee. Save AED 125</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>4 GB free data on WiFi UAE</p>
                    </li>
                  </ul>
                </div>
                {/* Card-buttons */}
                <div className="flex items-center justify-between pt-3 text-sm font-medium border-t border-gray-200">
                  <a href="#" className="underline transition-all text-slate-800 hover:underline hover:text-cyan-500">
                    What you get</a>
                  <button className="px-8 py-2 font-semibold transition ease-in border rounded text-fuchsia-600 hover:bg-cyan-500 hover:text-white">
                    Select</button>
                </div>
                {/* End */}
              </div>
            </div>
            {/* Card-1-end */}

            {/* Card-2-start */}
            <div className="relative flex flex-col justify-between transition bg-white border border-gray-200 shadow-md rounded-2xl hover:shadow-xl">
              <div className="absolute z-50 px-6 py-1 text-xs font-light text-gray-100 rounded-t-lg left-1 -top-6 bg-indigo-950">
                Most popular
              </div>
              <div className="absolute top-0 left-0 w-2 h-full overflow-hidden bg-gradient-to-b rounded-s-xl from-pink-500 to-cyan-400"></div>
              {/* Content-start */}
              <div className="flex flex-col flex-1 p-4 pl-6 lg:p-3">
                <div className="flex-1">
                  <p className="text-xs font-medium text-fuchsia-500">You Pay</p>
                  <p className="text-2xl font-bold text-fuchsia-600">
                    AED 200 <span className="text-sm font-medium text-fuchsia-400">/month</span>
                  </p>
                  <p className="mb-3 text-xs font-normal text-gray-800">For 12 months + 5% VAT</p>
                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <p className="text-sm font-normal text-cyan-500">You Get</p>
                  <h3 className="mb-3 text-xl font-bold text-cyan-500">Power Plan 200</h3>

                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <div className="mb-4 space-y-1 text-gray-800">
                    <p className="flex items-baseline justify-start gap-3 lg:gap-0 sm:justify-start sm:gap-3 lg:justify-between">

                      <span className="text-xl font-bold">
                        <span className="relative text-xl font-normal text-gray-400 opacity-50">13
                          <span className="absolute left-0 top-1/2 w-full h-[2px] bg-gray-400 rotate-[-12deg]"></span>
                        </span>  26 GB
                      </span>
                      <span className="text-gray-800">Double national data</span>
                    </p>
                    <p>
                      <span className="text-xl font-bold me-5">400</span>
                      <span className="text-gray-800">Flexi minutes</span>
                    </p>
                  </div>
                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <ul className="mb-6 space-y-1 text-sm text-gray-600">
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>No activation fee. Save AED 125</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>15 GB free data on WiFi UAE</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>Carry over data to next month</p>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start w-full py-4 border-t border-gray-200">
                  <h5 className="px-2 py-1 mb-2 text-xs font-normal rounded-full bg-gradient-to-tr from-purple-800 to-pink-500 text-slate-50">Limited time offer</h5>
                  <div> <p><b>The Entertainer</b> on us for 12 months</p></div>
                </div>
                {/* Card-buttons */}
                <div className="flex items-center justify-between pt-3 text-sm font-medium border-t border-gray-200">
                  <a href="#" className="underline transition-all text-slate-800 hover:underline hover:text-cyan-500">
                    What you get</a>
                  <button className="px-8 py-2 font-semibold transition ease-in border rounded text-fuchsia-600 hover:bg-cyan-500 hover:text-white">
                    Select</button>
                </div>
                {/* End */}
              </div>
            </div>
            {/* Card-2-end */}

            {/* Card-3-start */}
            <div className="relative flex flex-col justify-between overflow-hidden transition bg-white border border-gray-200 shadow-md rounded-2xl hover:shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-500 to-cyan-400"></div>

              {/* Content-start */}
              <div className="flex flex-col items-stretch flex-1 p-4 pl-6 lg:p-3">
                <div className="flex-1">
                  <p className="text-xs font-medium text-fuchsia-500">You Pay</p>
                  <p className="text-2xl font-bold text-fuchsia-600">
                    AED 300 <span className="text-sm font-medium text-fuchsia-400">/month</span>
                  </p>
                  <p className="mb-3 text-xs font-normal text-gray-800">For 12 months + 5% VAT</p>
                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <p className="text-sm font-normal text-cyan-500">You Get</p>
                  <h3 className="mb-3 text-xl font-bold text-cyan-500">Power Plan 300</h3>

                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <div className="mb-4 space-y-1 text-gray-800">
                    <p className="flex items-baseline justify-start gap-3 lg:gap-0 sm:justify-start sm:gap-3 lg:justify-between">

                      <span className="text-xl font-bold">
                        <span className="relative text-xl font-normal text-gray-400 opacity-50">25
                          <span className="absolute left-0 top-1/2 w-full h-[2px] bg-gray-400 rotate-[-12deg]"></span>
                        </span>  50 GB
                      </span>
                      <span className="text-gray-800">Double national data</span>
                    </p>
                    <p>
                      <span className="text-xl font-bold me-3">1020</span>
                      <span className="text-gray-800">Flexi minutes</span>
                    </p>
                  </div>
                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <ul className="mb-6 space-y-1 text-sm text-gray-600">
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>No activation fee. Save AED 125</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>15 GB free data on WiFi UAE</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>Amazon Prime on us</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>Free Internet Calling Pack</p>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col items-start w-full py-4 border-t border-gray-200">
                  <h5 className="px-2 py-1 mb-2 text-xs font-normal rounded-full bg-gradient-to-tr from-purple-800 to-pink-500 text-slate-50">Limited time offer</h5>
                  <div> <p><b>The Entertainer</b> on us for 12 months</p></div>
                </div>

                {/* Card-buttons */}
                <div className="flex items-center justify-between pt-3 text-sm font-medium border-t border-gray-200">
                  <a href="#" className="underline transition-all text-slate-800 hover:underline hover:text-cyan-500">
                    What you get</a>
                  <button className="px-8 py-2 font-semibold transition ease-in border rounded text-fuchsia-600 hover:bg-cyan-500 hover:text-white">
                    Select</button>
                </div>
                {/* End */}
              </div>
            </div>
            {/* Card-3-end */}

            {/* Card-4-start */}
            <div className="relative flex flex-col justify-between overflow-hidden transition bg-white border border-gray-200 shadow-md rounded-2xl hover:shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-500 to-cyan-400"></div>

              {/* Content-start */}
              <div className="flex flex-col justify-between flex-1 p-4 pl-6 lg:p-3">
                <div>
                  <p className="text-xs font-medium text-fuchsia-500">You Pay</p>
                  <p className="text-2xl font-bold text-fuchsia-600">
                    AED 500 <span className="text-sm font-medium text-fuchsia-400">/month</span>
                  </p>
                  <p className="mb-3 text-xs font-normal text-gray-800">For 12 months + 5% VAT</p>
                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <p className="text-sm font-normal text-cyan-500">You Get</p>
                  <h3 className="relative inline-block mb-3 text-xl font-bold text-cyan-500">
                    <span className="relative inline-block">
                      Power
                      <span className="absolute right-2 top-1/2 w-full h-[2px] bg-cyan-500 rotate-[-12deg] -translate-y-1/3"></span>
                    </span>
                    <span className="ml-1 text-cyan-500">Plan 500</span>
                  </h3>
                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <div className="mb-4 space-y-1 text-gray-800">
                    <p className="flex items-baseline justify-start gap-3 lg:gap-0 sm:justify-start sm:gap-3 lg:justify-between">

                      <span className="text-xl font-bold">
                        <span className="relative text-xl font-normal text-gray-400 opacity-50">50
                          <span className="absolute left-0 top-1/2 w-full h-[2px] bg-gray-400 rotate-[-12deg]"></span>
                        </span>  100 GB
                      </span>
                      <span className="text-gray-800">Double national data</span>
                    </p>
                    <p>
                      <span className="text-xl font-bold me-3">1500</span>
                      <span className="text-gray-800">Flexi minutes</span>
                    </p>
                  </div>
                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <ul className="mb-6 space-y-1 text-sm font-medium leading-6 text-gray-600">
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>No activation fee. Save AED 125</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>15 GB free data on WiFi UAE</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>Carry over data to next month</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>Amazon Prime on us</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>Free Internet Calling Pack</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>Roaming 2 GB</p>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col items-start w-full py-4 border-t border-gray-200">
                  <h5 className="px-2 py-1 mb-2 text-xs font-normal rounded-full bg-gradient-to-tr from-purple-800 to-pink-500 text-slate-50">Limited time offer</h5>
                  <div> <p><b>The Entertainer</b> on us for 12 months</p></div>
                </div>

                {/* Card-buttons */}
                <div className="flex items-center justify-between pt-3 text-sm font-medium border-t border-gray-200">
                  <a href="#" className="underline transition-all text-slate-800 hover:underline hover:text-cyan-500">
                    What you get</a>
                  <button className="px-8 py-2 font-semibold transition ease-in border rounded text-fuchsia-600 hover:bg-cyan-500 hover:text-white">
                    Select</button>
                </div>
                {/* End */}
              </div>
            </div>
            {/* Card-4-end */}

            {/* Card-5-start */}
            <div className="relative flex flex-col justify-between overflow-hidden transition bg-white border border-gray-200 shadow-md rounded-2xl opacity-30 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-500 to-cyan-400"></div>

              {/* Content-start */}
              <div className="flex flex-col items-stretch justify-between flex-1 p-4 pl-6 lg:p-3">
                <div className="flex-1">
                  <p className="text-xs font-medium text-fuchsia-500">You Pay</p>
                  <p className="text-2xl font-bold text-fuchsia-600">
                    AED 1000 <span className="text-sm font-medium text-fuchsia-400">/month</span>
                  </p>
                  <p className="mb-3 text-xs font-normal text-gray-800">For 12 months + 5% VAT</p>
                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <p className="text-sm font-normal text-cyan-500">You Get</p>
                  <h3 className="mb-3 text-xl font-bold text-cyan-500">Power Plan 1000</h3>

                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <div className="mb-4 space-y-1 text-gray-800">
                    <p className="flex items-baseline justify-start gap-3 lg:gap-0 sm:justify-start sm:gap-3 lg:justify-between">

                      <span className="text-xl font-bold">
                        <span className="relative text-xl font-normal text-gray-400 opacity-50">120
                          <span className="absolute left-0 top-1/2 w-full h-[2px] bg-gray-400 rotate-[-12deg]"></span>
                        </span>  26 GB
                      </span>
                      <span className="text-gray-800">Double national data</span>
                    </p>
                    <p>
                      <span className="text-xl font-bold me-5">2500</span>
                      <span className="text-gray-800">Flexi minutes</span>
                    </p>
                  </div>
                  <div> <hr className="h-px my-3 bg-gray-200 border-0" /></div>
                  <ul className="mb-6 space-y-1 text-sm font-medium leading-6 text-gray-600">
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>No activation fee. Save AED 125</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>15 GB free data on WiFi UAE</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>Carry over data to next month</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>Amazon Prime on us</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>Free Internet Calling Pack</p>
                    </li>
                    <li className="flex gap-1">
                      <Check className="custom-arrow" />
                      <p>Roaming 2 GB</p>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col items-start w-full py-4 border-t border-gray-200">
                  <h5 className="px-2 py-1 mb-2 text-xs font-normal rounded-full bg-gradient-to-tr from-purple-800 to-pink-500 text-slate-50">Limited time offer</h5>
                  <div> <p><b>The Entertainer</b> on us for 12 months</p></div>
                </div>

                {/* Card-buttons */}
                <div className="flex items-center justify-between pt-3 text-sm font-medium border-t border-gray-200">
                  <a href="#" className="underline transition-all text-slate-800 hover:underline hover:text-cyan-500">
                    What you get</a>
                  <button className="px-8 py-2 font-semibold transition ease-in border rounded text-fuchsia-600 hover:bg-cyan-500 hover:text-white">
                    Select</button>
                </div>
                {/* End */}
              </div>
            </div>
            {/* Card-5-end */}


          </div>

        </article>

        <div className="py-4 border-t border-b border-gray-300 sm:py-4 md:py-4 lg:py-8">
          <article className="container px-4 mx-auto lg:px-0 sm:px-4 md:px-4">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-left text-gray-600">
                Need a phone with a plan?
              </p>
              <p>
                <a href="#" className="text-sm font-medium transition-all ease-in-out text-fuchsia-500 hover:text-cyan-600">
                  Choose a phone to get started
                  <span className="ms-2"><East /></span>
                </a>
              </p>
            </div>
          </article>
        </div>
        <div className="py-4 border-b border-gray-300 sm:py-4 md:py-4 lg:py-8">
          <div className="container px-4 mx-auto">
            <ul className="flex flex-col items-start justify-center gap-6 lg:gap-0 sm:gap-6 md:flex-row md:gap-6">
              <li className="flex items-start gap-2">
                <span className="flex items-center justify-center w-10 h-10">
                  <WbIncandescentOutlined fontSize="large" className="rotate-180" />
                </span>
                <div>
                  <small className="text-gray-900">3 reasons why</small>
                  <p className="font-bold text-gray-900">It’s a bright idea to choose du.</p>
                </div>
              </li>
              <li className="flex items-start gap-1">
                <span className="flex items-center text-6xl font-bold justify-cente text-fuchsia-100">
                  1
                </span>
                <div>
                  <p className="mb-1 text-sm font-bold text-gray-900">The network you can trust</p>
                  <p className="text-xs text-gray-600">du’s 4G and 5G mobile networks are unparalleled in coverage and uptime.</p>
                </div>
              </li>
              <li className="flex items-start gap-0">
                <span className="flex items-center text-6xl font-bold justify-cente text-fuchsia-100">
                  2
                </span>
                <div>
                  <p className="mb-1 font-bold text-gray-900">Worry-free contract</p>
                  <p className="text-xs text-gray-600">
                    If you’re not satisfied with your new plan, cancel with no obligation
                    within 30 days.</p>
                </div>
              </li>
              <li className="flex items-start gap-0">
                <p className="flex items-center mb-1 text-6xl font-bold justify-cente text-fuchsia-100"> 3
                </p>
                <div>
                  <p className="mb-1 font-bold text-gray-900">Know what you pay & what you get</p>
                  <p className="text-xs text-gray-600">
                    We’re transparent about your plan terms,
                    fees and cancellation
                    <a href="#" className="font-semibold text-pink-500 underline ms-2">Read the fine print.</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>

  )
}

export default PlanCards