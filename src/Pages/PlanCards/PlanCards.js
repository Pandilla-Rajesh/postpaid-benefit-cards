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

const PlanCards = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data); 
      console.log("Fetched Users:", response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (selectedUser) {
        await updateUser(selectedUser.id, formData);
      } else {
        await addUser(formData);
      }
      getUser();
      setSelectedUser(null);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleEdit = (user) => setSelectedUser(user);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      getUser();
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <PlanTypes />
      <PriceForm/>
      <UpdateForm
        onSubmit={handleSubmit}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <UserTable  onEdit={handleEdit} onDelete={handleDelete} />
      <UserGets />
      {/* <UserData/> */}
      <PlanBenfits />
      <PhonePlanSelector />
      <WhyChooseSection />
    </>
  );
};

export default PlanCards;
