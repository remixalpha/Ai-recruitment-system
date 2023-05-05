import '../../css/hr/JobPosting.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function JobPosting(){
    const [isLoading, setIsLoading] = useState(true);
    const [isStepOne, setIsStepOne] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
      const homeclick = (event) => {
        event.preventDefault();
        navigate('/');
        }
        const jobclick = (event) => {
            event.preventDefault();
            navigate('/jobs');
        }
        const comapniesclick = (event) => {
            event.preventDefault();
            navigate('/companies');
        }
        const signoutclick = (event) => {
            event.preventDefault();
            navigate('/');
        }
        const [files, setFiles] = useState([]);

        const onDrop = useCallback((acceptedFiles) => {
            setFiles(
            acceptedFiles.map((file) =>
                Object.assign(file, {
                preview: URL.createObjectURL(file)
                })
            )
            );
        }, []);
        const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
        const IsStepOneTrue = () => {
            setIsStepOne(true);
        }
        const IsStepOneFalse = () => {
            setIsStepOne(false);
        }
    return(
        <div>
            {isLoading ? (
                <div className="w-full bg-indigo-100 flex" style={{height:'100vh',alignItems:'center',justifyContent:'center'}}>
                    <div>
                        <lord-icon
                            src="https://cdn.lordicon.com/oezixobx.json"
                            trigger="loop"
                            delay="70"
                            style={{width:'70px',height:'70px'}}>
                        </lord-icon>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col h-screen'>
                    <nav className="flex items-center justify-between bg-white border-b border-gray-200 pb-5 pt-5 px-8 py-2">
                        <div className="text-2xl font-bold">Jobee</div>
                        <ul className="flex items-center cursor-pointer">
                            <li className="text-base font-sans font-semibold ml-4" onClick={homeclick}>Home</li>
                            <li className="text-base font-sans font-semibold ml-4" onClick={jobclick}>Openings</li>
                            <li className="text-base font-sans font-semibold ml-4" onClick={comapniesclick}>Meetings</li>
                            <li className="text-base font-sans font-semibold ml-4" onClick={signoutclick}>Sign out</li>
                        </ul>
                    </nav>
                    <div className='w-full h-full flex items-start justify-center flex-col'>
                        <h1 className='w-full h-fit p-3 text-2xl font-bold font-sans px-4 py-4'>CREATE OPENINGS</h1>
                        <form className='w-full h-full flex items-center justify-center'>
                            { isStepOne ? (
                                    <div className='p-6 rounded-xl shadow-md flex items-center justify-center gap-2 -mt-8' style={{height:'85%',width:'95%',backgroundColor:'whitesmoke'}}>
                                    <div {...getRootProps()} className="flex items-center justify-center border-2 border-dashed border-blue-400 p-2 rounded-xl text-center overflow-hidden" style={{width:'50%',height:'100%'}}>
                                        <input {...getInputProps()} className='outline-none'/>
                                            {files.length === 0 ? (
                                                isDragActive ? (
                                                    <p className="text-gray-600 font-sans font-bold flex items-center justify-center flex-col"><span class="material-symbols-outlined text-8xl">add_photo_alternate</span>Drop the files here ...</p>
                                                ) : (
                                                    <p className="text-gray-600 font-sans font-bold flex items-center justify-center flex-col"><span class="material-symbols-outlined text-8xl">add_photo_alternate</span>Drag 'n' drop some files here, or click to select files</p>
                                                )
                                            ) : (
                                        <div>
                                            <img className="mx-auto mb-2" src={files[0].preview} alt={files[0].name}/>
                                            <p className="text-gray-600">{files[0].name}</p>
                                        </div>
                                            )}
                                    </div>
                                    <div className='w-1/2 h-full rounded-xl'>
                                        <div className='w-full h-fit p-4 flex items-start justify-center flex-col gap-2'>
                                            <label htmlFor='JobName' className='text-xl font-bold text-gray-800'>Job Name</label>
                                            <input type="text" className='font-bold w-full p-3 rounded-lg' name='JobName' placeholder='Job Name' style={{backgroundColor:'lavender'}}/>
                                        </div>
                                        <div className='w-full h-fit p-4 flex items-start justify-center flex-col gap-2 cursor-pointer'>
                                            <label htmlFor='Jobcategory' className='text-xl font-bold text-gray-800'>Job Category</label>
                                            <select className='w-full p-4 outline-none border-none rounded-lg font-bold' name='Jobcategory' style={{backgroundColor:'lavender'}}    >
                                                <option>Select Job Category</option>
                                                <option>FrontEnd Developer</option>
                                                <option>BackEnd Developer</option>
                                                <option>FullStack Developer</option>
                                                <option>Python Developer</option>
                                            </select>
                                        </div>
                                        <div className='w-full h-2/5 p-4 flex items-start justify-center flex-col gap-2'>
                                            <label htmlFor='JobDescription' className='text-xl font-bold text-gray-800'>Job Description</label>
                                            <textarea className='w-full p-2 font-bold rounded-lg resize-none outline-none' style={{height:'90%',backgroundColor:'lavender'}} placeholder='Description'></textarea>
                                        </div>
                                        <div className='w-full h-fit p-1 flex items-ceneter justify-end'>
                                            <button className='w-fit h-fit bg-blue-700 text-white rounded-md p-2 px-10 font-sans font-bold shadow-md' onClick={IsStepOneFalse}>Next</button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='p-6 rounded-xl shadow-md flex items-center justify-center gap-2 -mt-8' style={{height:'85%',width:'95%',backgroundColor:'whitesmoke'}}>
                                    <div className='w-1/2 h-full rounded-xl'>
                                        <div className='w-full h-fit p-2 px-4 flex items-start justify-center flex-col gap-2'>
                                            <label htmlFor='JobName' className='text-xl font-bold text-gray-800'>Salary</label>
                                            <input type="text" className='font-bold w-full p-3 rounded-lg' name='JobName' placeholder='Salary' style={{backgroundColor:'lavender'}}/>
                                        </div>
                                        <div className='w-full h-fit p-4 flex items-center justify-center gap-2'>
                                            <div className='w-1/2 h-full flex items-start justify-center flex-col gap-2'>
                                                <label htmlFor='JobName' className='w-full text-xl font-bold text-gray-800 text-center'>Job Type</label>
                                                <div className='w-full h-full flex items-start justify-center flex-col gap-1'>
                                                    <div className='w-full h-1/2 flex items-start justify-center gap-2 p-2'>
                                                        <div className='w-fit h-fit flex items-center justify-center gap-2'>
                                                            <input type='checkbox' name='fulltime'/>
                                                            <label htmlFor='fulltime' className='font-bold font-sans'>Full Time</label>
                                                        </div>
                                                        <div className='w-fit h-fit flex items-center justify-center gap-2'>
                                                            <input type='checkbox' name='fulltime'/>
                                                            <label htmlFor='fulltime' className='font-bold font-sans'>Part Time</label>
                                                        </div>
                                                        <div className='w-fit h-fit flex items-center justify-center gap-2'>
                                                            <input type='checkbox' name='fulltime'/>
                                                            <label htmlFor='fulltime' className='font-bold font-sans'>Fresher</label>
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-1/2 flex items-start justify-center gap-2 p-2'>
                                                        <div className='w-fit h-fit flex items-center justify-center gap-2'>
                                                            <input type='checkbox' name='fulltime'/>
                                                            <label htmlFor='fulltime' className='font-bold font-sans'>Regular/permanent</label>
                                                        </div>
                                                        <div className='w-fit h-fit flex items-center justify-center gap-2'>
                                                            <input type='checkbox' name='fulltime'/>
                                                            <label htmlFor='fulltime' className='font-bold font-sans'>Contractual</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 style={{width:'1px',height:'80px',backgroundColor:'#333',borderRadius:'50px'}}> </h1>
                                            <div className='w-1/2 h-full flex items-start justify-center flex-col gap-2'>
                                            <label htmlFor='JobName' className='w-full text-xl font-bold text-gray-800 text-center'>Shift and schedule</label>
                                                <div className='w-full h-full flex items-start justify-center flex-col gap-1'>
                                                    <div className='w-full h-1/2 flex items-start justify-center gap-2 p-2'>
                                                        <div className='w-fit h-fit flex items-center justify-center gap-2'>
                                                            <input type='checkbox' name='fulltime'/>
                                                            <label htmlFor='fulltime' className='font-bold font-sans'>Weekend only</label>
                                                        </div>
                                                        <div className='w-fit h-fit flex items-center justify-center gap-2'>
                                                            <input type='checkbox' name='fulltime'/>
                                                            <label htmlFor='fulltime' className='font-bold font-sans'>Day shift</label>
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-1/2 flex items-start justify-center gap-2 p-2'>
                                                        <div className='w-fit h-fit flex items-center justify-center gap-2'>
                                                            <input type='checkbox' name='fulltime'/>
                                                            <label htmlFor='fulltime' className='font-bold font-sans'>Monday to Friday</label>
                                                        </div>
                                                        <div className='w-fit h-fit flex items-center justify-center gap-2'>
                                                            <input type='checkbox' name='fulltime'/>
                                                            <label htmlFor='fulltime' className='font-bold font-sans'>Rotational shift</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full h-fit px-4 flex items-start justify-center flex-col gap-2 mb-2'>
                                            <label htmlFor='JobDescription' className='text-xl font-bold text-gray-800'>Benfits</label>
                                            <div className='w-full h-fit flex items-center justify-center gap-2'>
                                                <input type="text" className='font-bold w-5/6 p-3 rounded-lg' name='JobName' placeholder='Benfits' style={{backgroundColor:'lavender'}}/>
                                                <button className='w-fit h-fit bg-blue-700 text-white rounded-md p-2 px-10 font-sans font-bold shadow-md' onClick={IsStepOneTrue}>ADD</button>
                                            </div>
                                        </div>
                                        <div className='w-full h-fit px-4 flex items-start justify-center flex-col gap-2 mb-2'>
                                            <label htmlFor='JobDescription' className='text-xl font-bold text-gray-800'>Location</label>
                                            <div className='w-full h-fit flex items-center justify-center gap-2'>
                                                <input type="text" className='font-bold w-full p-3 rounded-lg' name='JobName' placeholder='Location' style={{backgroundColor:'lavender'}}/>
                                            </div>
                                        </div>
                                        <div className='w-full h-fit p-1 px-4 flex items-center justify-start'>
                                            <button className='w-fit h-fit bg-gray-900 text-white rounded-md p-2 px-10 font-sans font-bold shadow-md' onClick={IsStepOneTrue}>Previous</button>
                                        </div>
                                    </div>
                                    <div className='w-1/2 h-full rounded-xl'>
                                        <div className='w-full h-fit px-4 flex items-start justify-center flex-col gap-2 mb-1 mt-2'>
                                            <label htmlFor='JobDescription' className='text-xl font-bold text-gray-800'>Qualifications</label>
                                            <div className='w-full h-fit flex items-center justify-center gap-2'>
                                                <input type="text" className='font-bold w-5/6 p-3 rounded-lg' name='JobName' placeholder='Qualifications' style={{backgroundColor:'lavender'}}/>
                                                <button className='w-fit h-fit bg-blue-700 text-white rounded-md p-2 px-10 font-sans font-bold shadow-md' onClick={IsStepOneTrue}>ADD</button>
                                            </div>
                                        </div>
                                        <div className='w-full p-4 flex items-start justify-center flex-col gap-2' style={{height:'72.5%'}}>
                                            <label htmlFor='JobDescription' className='text-xl font-bold text-gray-800'>Full Job Description</label>
                                            <textarea className='w-full p-2 font-bold rounded-lg resize-none outline-none' style={{height:'93%',backgroundColor:'lavender'}} placeholder='Full Job Description'></textarea>
                                        </div>
                                        <div className='w-full h-fit  px-4 flex items-center justify-end'>
                                            <button className='w-fit h-fit bg-blue-700 text-white rounded-md p-2 px-10 font-sans font-bold shadow-md' onClick={IsStepOneTrue}>Post</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default JobPosting;