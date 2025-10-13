import axios from "axios";
import React from "react";
import { data } from "react-router-dom";

const API_URL = 'https://jsonplaceholder.typicode.com/users'

// get-users //
export const getUsers = async()=>{
    console.log(API_URL, 'user data')
    const res = await axios.get(API_URL)
    console.log(res, 'fetch the user data')
    return res
}
// end //

// add-new-user//
export const addUser = async(data)=>{
    return await axios.post(API_URL, data)
}
// end //

// update-user//
export const updateUser = async(id, data)=>{
    return await axios.put(`${API_URL}/${id}`, data)
}
// end//

// delete-user //
export const deleteUser = async(id)=>{
    return await axios.delete(`${API_URL}/${id}`)
}
// end //