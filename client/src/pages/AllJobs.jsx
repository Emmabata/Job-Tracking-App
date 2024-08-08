import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../pages";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";



export const loader = async () => {
    try{

    }catch (error) {
        toast.error()
    }
}


const AllJobs = () => {
    return (
        <h1>All Jobs</h1>
    );
}

export default AllJobs;