import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { useParams } from "react-router-dom"; 

import { data } from "../Data";
// import { Link } from "react-router";
import { Link } from "react-router-dom";

const Room = () => {
    const [room, setRoom] = useState([])
    const {rid} = useParams()

    console.log(rid)


    useEffect(() => {
        let newData = data.filter((ele) => ele.id == rid)
         setRoom(newData)
    } ,[])

    return(
        <>
            {room.map((ele) => (
                 <div key={ele.id} className="shadow rounded p-2 mt-5 w-full">
                            
                            <div className="m-auto  text-2xl">Room Details : </div>

                            <div className="max-w-lg m-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg h-[250px] w-full" src={ele.img} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.heading}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.location}</p>
                                    <br />
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.rating}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.description}</p>
                                    
                                    
                                   
                                </div>
                                    
                                     <Link to={`/room/${ele.id}/register`}
                                       
                                    className="inline-flex mb-5 m-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Register
                                    </Link>

                            </div>

                        </div>
            )

            )}
        </>
    )
}
export default Room