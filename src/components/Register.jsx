import React from "react";
// import { useParams } from "react-router";
import { useParams } from "react-router-dom"; 

import { useState } from "react";

const Register = () => {

    const {rid} = useParams()
    console.log(rid)

    const [input, setInput] = useState({email:"", password:""})
      const [successMessage, setSuccessMessage] = useState("");

        const handleSubmit = async (e) => {
        e.preventDefault();  

        try {
           
            console.log("User saved:", input);
             setSuccessMessage("registration is succsesfull");
              setInput({ email: "", password: "" });
               setTimeout(() => setSuccessMessage(""), 3000);
        } catch (error) {
            console.error("Save error:", error.code, error.message);
        }
    };

    return(
        <>
           <div className="text-xl mt-5 mx-auto">Register here: </div>

        <form className="max-w-sm mx-auto">
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
       
        <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

             {successMessage && (
                    <p className="text-green-600 mt-3 text-lg font-semibold">
                    {successMessage}
                    </p>
                )}

        </form>

        </>
    )
}
export default Register