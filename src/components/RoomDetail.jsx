import React from "react";
// import RoomSlice from "../Features/RoomSlice";
import { useDispatch } from 'react-redux'
import { Link } from "react-router";
import { data } from "../Data";

const RoomDetail = () => {

   

    return(
        <>
             <div>
        <div className="max-w-7xl mx-auto p-2 mt-5">
            <div className="flex flex-wrap gap-3">
                {
                    data.map((ele) => (
                        <div key={ele.id} className="shadow rounded p-2 w-[300px]">
                            

                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg h-[200px] w-full" src={ele.img} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.heading}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.location}</p>
                                    <br />
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.rating}</p>
                                    
                                    <Link to={`room/${ele.id}`}
                                       
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        More Details
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))
                }
               
            </div>
        </div>
    </div>
        </>
    )
}
export default RoomDetail