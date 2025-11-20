import React, { useState } from "react";

const TourismTabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <section>
            {/* Button that triggers tab switch */ }
            <div className="about-section">
                <h2>About Telangana Tourism</h2>
                <p>Telangana offers a rich tapestry of experiences...</p>
                <button
                    onClick={ () => setActiveTab("tab2") }
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                    Book a Tour
                </button>
            </div>

            {/* Tabs section */ }
            <div className="mt-8">
                <div className="flex gap-4 mb-4">
                    <button
                        className={ `px-4 py-2 rounded ${activeTab === "tab1" ? "bg-blue-600 text-white" : "bg-gray-200"
                            }` }
                        onClick={ () => setActiveTab("tab1") }
                    >
                        Tab 1
                    </button>
                    <button
                        className={ `px-4 py-2 rounded ${activeTab === "tab2" ? "bg-blue-600 text-white" : "bg-gray-200"
                            }` }
                        onClick={ () => setActiveTab("tab2") }
                    >
                        Tab 2
                    </button>
                </div>

                {/* Tab content */ }
                { activeTab === "tab1" && (
                    <div className="p-4 border rounded-lg bg-white shadow">
                        <h3 className="font-semibold">Tab 1 Content</h3>
                        <p>Information about tours or other content.</p>
                    </div>
                ) }
                { activeTab === "tab2" && (
                    <div className="p-4 border rounded-lg bg-white shadow">
                        <h3 className="font-semibold">Tab 2 Content</h3>
                        <p>Booking details or tour packages here.</p>
                    </div>
                ) }
            </div>
        </section>
    );
};

export default TourismTabs;
