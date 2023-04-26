import '../UserJobs.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fsd from '../assets/fsd.png'


function Jobs(){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    const navigate = useNavigate();
    const homeclick = (event) => {
        event.preventDefault();
        navigate('/');
    }
    const profileclick = (event) => {
        event.preventDefault();
        navigate('/profile');
    }
    const comapniesclick = (event) => {
        event.preventDefault();
        navigate('/companies');
    }
    const signoutclick = (event) => {
        event.preventDefault();
        navigate('/');
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
                <div className="flex flex-col h-screen">
                    <nav className="flex items-center justify-between bg-white border-b border-gray-200 pb-5 pt-5 px-8 py-2">
                        <div className="text-2xl font-bold">Jobee</div>
                        <ul className="flex items-center cursor-pointer">
                            <li className="text-base font-sans font-semibold ml-4" onClick={homeclick}>Home</li>
                            <li className="text-base font-sans font-semibold ml-4" onClick={profileclick}>Profile</li>
                            <li className="text-base font-sans font-semibold ml-4" onClick={comapniesclick}>Companies</li>
                            <li className="text-base font-sans font-semibold ml-4" onClick={signoutclick}>Sign out</li>
                        </ul>
                    </nav>
                    <div className='w-full flex items-center justify-start flex-col p-1 gap-2' style={{height:'100vh',backgroundColor:'white'}}>
                        <div className='flex items-center justify-center p-1 gap-4' style={{width:'100%',height:'auto'}}>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className=' flex items-center justify-center p-1 gap-4' style={{width:'100%',height:'auto'}}>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex items-center justify-center p-1 gap-4' style={{width:'100%',height:'auto'}}>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6 w-1/2'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Jobs;