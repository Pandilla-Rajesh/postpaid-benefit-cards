import React, { useEffect, useState } from "react";
import PlanTypes from "../PlantTypes/PlantTypes";
import PhonePlanSelector from "../PhonePlanSelector/PhonePlanSelector";
import WhyChooseSection from "../WhyChooseSection/WhyChooseSection";
import PlanBenfits from "../PlanBenfits/PlanBenfits";
import UserData from "../UserData/UserData";
import UserGets from "../UserGets/UserGets";
import { getUsers, addUser, updateUser, deleteUser } from "../../Api/UserApi";
import UpdateForm from "../../Components/UpdateForm";
import UserTable from "../../Components/UserTable";
import PriceForm from "../../Components/PriceForm";
import VideoPage from "../VideoPage/VideoPage";
import Slider from "../Slider/Slider";
import AboutUs from "../AboutUs/AboutUs";
import NineJewells from "../NineJewells/NineJewells";
import Accordition from "../Accordition/Accordition";
import { ArrowUpward } from "@mui/icons-material";

const PlanCards = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const [isScroll, setIsScroll] = useState(false)
  const scrollTop = () => {
    setIsScroll(window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  const getUser = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
      console.log("Fetched Users:", response.data);
    } catch(error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if(selectedUser) {
        await updateUser(selectedUser.id, formData);
      } else {
        await addUser(formData);
      }
      getUser();
      setSelectedUser(null);
    } catch(error) {
      console.error("Error saving user:", error);
    }
  };

  const handleEdit = (user) => setSelectedUser(user);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      getUser();
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch(error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {/* <Slider /> */ }
      {/* <VideoPage /> */ }
      {/* <PlanTypes /> */ }
      {/* <PriceForm /> */ }
      {/* <UpdateForm
        onSubmit={ handleSubmit }
        selectedUser={ selectedUser }
        setSelectedUser={ setSelectedUser }
      /> */}
      {/* <UserTable onEdit={ handleEdit } onDelete={ handleDelete } /> */ }
      {/* <UserGets /> */ }
      {/* <UserData/> */ }

      <AboutUs />
      <PlanBenfits />
      <PhonePlanSelector />
      <NineJewells />
      <WhyChooseSection />
      <Accordition />
      <div className={ `fixed bottom-5 right-5 z-auto ${isScroll ? '' : ''}` }>
        <button onClick={ scrollTop } className="bg-green-700 w-10 h-10  
        font-bold rounded-full text-2xl border border-gray-300 shadow-md leading-5">
          <ArrowUpward fontSize="medium text-white" />
        </button>
      </div>
    </>
  );
};

export default PlanCards;
