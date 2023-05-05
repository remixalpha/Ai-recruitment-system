import React from "react";
import { useState } from "react";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/index.jsx";



const HrHome =()=> {
    const [open ,setOpen] = useState(true);






    return(

        <div className="flex w-screen h-screen">   
      
            <div className={`${open ? "w-1/6" : "w-20"} duration-300 h-screen p-8 pt-2 bg-sky-900 relative`}> 

            <Link to="/" className="block" aria-label="Cruip">  
                <svg className="w-8 h-8 fill-current text-blue-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                </svg>
              </Link>
      
            <Helmet>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"/>

            </Helmet>
            <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
            />
                <span class={`material-icons-outlined absolute cursor-pointer -right-3 top-9 border-2
                 border-gray-600 bg-white rounded-full ${!open && "rotate-180"}`}
                onClick={()=>setOpen(!open)}>
                arrow_forward_ios
                </span>

                <div className={`flex gap-x-4 items-center transition-all p-2 rounded-md text-sm`}>
                    <h1 className={`${!open && "scale-0"} text-white origin-left font-bold text-3xl duration-300`}>Jobee</h1>
                </div>

                <div className={`flex gap-x-4 items-center transition-all p-2 rounded-md text-sm`}>
                    <h1 className={`${!open && "scale-0"} text-white origin-left font-bold text-xl duration-300`}>HR Home</h1>
                </div>

                <div className={`flex items-center transition-all hover:bg-black cursor-pointer p-2 pt-10 rounded-md text-sm `}>
                <span class={`material-icons-outlined cursor-pointer duration-500 text-white`}>
                home
                </span>
                    <h1 className={`${!open && "scale-0"} text-white origin-left font-medium text-xl duration-300`}>Home</h1>
                </div>
                
                <div className={`flex gap-x-4   gap-y-4 items-center transition-all hover:bg-black cursor-pointer p-2 rounded-md text-sm`}>
                    <span class={`material-icons-outlined cursor-pointer duration-500 text-white`}>
                    Settings</span>
                    <h1 className={`${!open && "scale-0"} text-white origin-left font-medium text-xl duration-300`}>Settins</h1>
                </div>

                <div className={`flex gap-x-4   gap-y-4 items-center transition-all hover:bg-black cursor-pointer p-2 rounded-md text-sm`}>
                    <span class={`material-icons-outlined cursor-pointer duration-500 text-white`}>
                    Work</span>
                    <h1 className={`${!open && "scale-0"} text-white origin-left font-medium text-xl duration-300`}>Oppenings</h1>
                </div>
                <div className={`flex gap-x-4   gap-y-4 items-center transition-all hover:bg-black cursor-pointer p-2 rounded-md text-sm`}>
                    <span class={`material-icons-outlined cursor-pointer duration-500 text-white`}>
                    home</span>
                    <h1 className={`${!open && "scale-0"} text-white origin-left font-medium text-xl duration-300`}>Home</h1>
                </div>
                
                <div className={`flex gap-x-4   gap-y-4 items-center transition-all hover:bg-black cursor-pointer p-2 rounded-md text-sm`}>
                    <span class={`material-icons-outlined cursor-pointer duration-500 text-white`}>
                    Settings</span>
                    <h1 className={`${!open && "scale-0"} text-white origin-left font-medium text-xl duration-300`}>Settins</h1>
                </div>

                <div className={` flex gap-x-4   gap-y-4 items-center transition-all hover:bg-black cursor-pointer p-2 rounded-md text-sm`}>
                    <span class={`material-icons-outlined cursor-pointer duration-500 text-white origin-left`}>
                    Work</span>
                    <h1 className={`${!open && "scale-0"} text-white origin-left font-medium text-xl duration-300`}>Oppenings</h1>
                </div>
            </div>
            <div className=" text-2xl font-semibold flex-1 h-screen w-screen bg-white "> 
                <div className="  container border-4 h-25 w-screen ">  
                    <nav className="p-4 flex items-center ">
                        <div className=" flex items-center p">
                            <div className="ml-10 p-4">
                                <input type="text" placeholder="Search" className="px-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-white rounded-full px-4 py-2 mr-4 hover:bg-sky-900">
                            <span class="material-icons-outlined">search</span>
                            </button>
                            <button className="bg-white rounded-full px-4 py-2 mr-4 hover:bg-sky-900">                                <span class="material-symbols-outlined">notifications</span>
                            </button>

                            <Link to="/hrPro" className="bg-white  px-4 py-2 rounded-full hover:bg-sky-900">
                            <span class="material-icons-outlined">person</span>
                            </Link>

                        </div>
                    </nav>
                </div>
            
                <div className=" items-center w-screen h-1/2 p-4 grid gap-x-2 gap-y-2 grid-cols-4 border-b-4"> 

                    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg border-solid border-4 border-sky-900">
                        <div className="w-screen h-1/2 justify-center text-2xl p-2">
                            <span className="material-icons-outlined font-extrabold text-sky-900 text-3xl">work</span>
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Software Tester
                            </div>
                            <p className="text-gray-700 text-base">4-9 Yrs
                            Not disclosed
                            Temp. WFH - Noida, Kolkata, Hyderabad/Secunderabad, Pune, Gurgaon/Gurugram, Chennai, Bangalore/Bengaluru
                            </p> 
                        </div>
                        <div className="px-6 py-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            More
                            </button>
                        </div>
                    </div>

                    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg border-solid border-4 border-sky-900">
                        <div className="w-screen h-1/2 justify-center text-2xl p-2">
                            <span className="material-icons-outlined font-extrabold text-sky-900 text-3xl">work</span>
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Software Tester
                            </div>
                            <p className="text-gray-700 text-base">4-9 Yrs
                            Not disclosed
                            Temp. WFH - Noida, Kolkata, Hyderabad/Secunderabad, Pune, Gurgaon/Gurugram, Chennai, Bangalore/Bengaluru 
                            </p> 
                        </div>
                        <div className="px-6 py-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            More
                            </button>
                        </div>
                    </div>
                    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg border-solid border-4 border-sky-900">
                        <div className="w-screen h-1/2 justify-center text-2xl p-2">
                            <span className="material-icons-outlined font-extrabold text-sky-900 text-3xl">work</span>
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Software Tester
                            </div>
                            <p className="text-gray-700 text-base">4-9 Yrs
                            Not disclosed
                            Temp. WFH - Noida, Kolkata, Hyderabad/Secunderabad, Pune, Gurgaon/Gurugram, Chennai, Bangalore/Bengaluru 
                            </p> 
                        </div>
                        <div className="px-6 py-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            More
                            </button>
                        </div>
                    </div>

                </div>
                <div>
                    
                </div>
                    

                    
            </div>
     
            </div>
        </div>
    
    )
}
export default HrHome;
