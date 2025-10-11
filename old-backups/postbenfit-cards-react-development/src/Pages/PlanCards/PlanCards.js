import React from "react";
import PlanTypes from "../PlantTypes/PlantTypes";
import PhonePlanSelector from "../PhonePlanSelector/PhonePlanSelector";
import WhyChooseSection from "../WhyChooseSection/WhyChooseSection";
import PlanBenfits from "../PlanBenfits/PlanBenfits";

const PlanCards = () => {

  return (

    <>
    <PlanTypes/>
    <PlanBenfits/>
    <PhonePlanSelector/>
    <WhyChooseSection/>
    </>

  )
}

export default PlanCards