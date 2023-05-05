import "../../css/user/UserHome.css";
import fsd from "../../assets/fsd.jpg";
import fsdc from "../../assets/job1.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "../dropdown/index";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const [IsNotified, setIsNotified] = useState(true);
  const [UserName, setUserName] = useState("");
  const navigate = useNavigate();
  const homenav = useRef(null);
  const jobnav = useRef(null);
  const jobappnav = useRef(null);
  const meetingnav = useRef(null);
  const companynav = useRef(null);
  const settingsnav = useRef(null);
  const MyUserId = localStorage.getItem("user");
  const URL = "http://localhost:5000/";

  const fetchUser = async () => {
    await axios
      .post(`${URL}users/getUser`, {
        userId: MyUserId,
      })
      .then((res) => {
        console.log({ res: res });
        const firstName = res.data.firstName;
        const lastName = res.data.lastName;
        setUserName(`${firstName} ${lastName}`);
      });
  };
  useEffect(() => {
    fetchUser();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const checkclick = () => {
    setIsChecked(false);
  };
  const checkclickfalse = () => {
    setIsChecked(true);
  };
  const notified = () => {
    setIsNotified(false);
  };
  const notifiedtrue = () => {
    setIsNotified(true);
  };
  const profileclick = (event) => {
    event.preventDefault();
    navigate("/profile");
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    navigate("/jobapp");
  };

  

    const [selectedAlert, setSelectedAlert] = useState(null);

    

    const homenavclick = (event) => {
      homenav.current.style.borderLeft = "4px solid #EF4444";
      homenav.current.style.backgroundColor = "#fff";
      jobnav.current.style.borderLeft = "none";
      jobnav.current.style.backgroundColor = "white";
      meetingnav.current.style.borderLeft = "none";
      meetingnav.current.style.backgroundColor = "white";
      companynav.current.style.borderLeft = "none";
      companynav.current.style.backgroundColor = "white";
      settingsnav.current.style.borderLeft = "none";
      settingsnav.current.style.backgroundColor = "white";
      event.preventDefault();
      navigate("/");
    };
    const jobnavclick = (event) => {
      jobnav.current.style.borderLeft = "4px solid #EF4444";
      jobnav.current.style.backgroundColor = "#fff";
      homenav.current.style.borderLeft = "none";
      homenav.current.style.backgroundColor = "white";
      meetingnav.current.style.borderLeft = "none";
      meetingnav.current.style.backgroundColor = "white";
      companynav.current.style.borderLeft = "none";
      companynav.current.style.backgroundColor = "white";
      settingsnav.current.style.borderLeft = "none";
      settingsnav.current.style.backgroundColor = "white";
      event.preventDefault();
      navigate("/jobs");
    };
    const jobappnavclick = (event) => {
      jobnav.current.style.borderLeft = "4px solid #EF4444";
      jobnav.current.style.backgroundColor = "#fff";
      homenav.current.style.borderLeft = "none";
      homenav.current.style.backgroundColor = "white";
      meetingnav.current.style.borderLeft = "none";
      meetingnav.current.style.backgroundColor = "white";
      companynav.current.style.borderLeft = "none";
      companynav.current.style.backgroundColor = "white";
      settingsnav.current.style.borderLeft = "none";
      settingsnav.current.style.backgroundColor = "white";
      event.preventDefault();
      navigate("/jobapped");
    };
    const meetingnavclick = (event) => {
      meetingnav.current.style.borderLeft = "4px solid #EF4444";
      meetingnav.current.style.backgroundColor = "#fff";
      jobnav.current.style.borderLeft = "none";
      jobnav.current.style.backgroundColor = "white";
      homenav.current.style.borderLeft = "none";
      homenav.current.style.backgroundColor = "white";
      companynav.current.style.borderLeft = "none";
      companynav.current.style.backgroundColor = "white";
      settingsnav.current.style.borderLeft = "none";
      settingsnav.current.style.backgroundColor = "white";
      event.preventDefault();
      navigate("/meetings");
    };
    const companynavclick = (event) => {
      companynav.current.style.borderLeft = "4px solid #EF4444";
      companynav.current.style.backgroundColor = "#fff";
      jobnav.current.style.borderLeft = "none";
      jobnav.current.style.backgroundColor = "white";
      meetingnav.current.style.borderLeft = "none";
      meetingnav.current.style.backgroundColor = "white";
      homenav.current.style.borderLeft = "none";
      homenav.current.style.backgroundColor = "white";
      settingsnav.current.style.borderLeft = "none";
      settingsnav.current.style.backgroundColor = "white";
      event.preventDefault();
      navigate("/companies");
    };
    const settingsnavclick = (event) => {
      settingsnav.current.style.borderLeft = "4px solid #EF4444";
      settingsnav.current.style.backgroundColor = "#fff";
      jobnav.current.style.borderLeft = "none";
      jobnav.current.style.backgroundColor = "white";
      meetingnav.current.style.borderLeft = "none";
      meetingnav.current.style.backgroundColor = "white";
      companynav.current.style.borderLeft = "none";
      companynav.current.style.backgroundColor = "white";
      homenav.current.style.borderLeft = "none";
      homenav.current.style.backgroundColor = "white";
      event.preventDefault();
      navigate("/settings");
    };
    return (
      <div>


{isLoading ? (
        <div
          className="w-full bg-indigo-100 flex"
          style={{
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
         
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/oezixobx.json"
              trigger="loop"
              delay="70"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
          </div>
        </div>
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ height: "100vh", backgroundColor: "#f4f7fe" }}
        >
          <div
            className="flex items-center justify-center flex-col gap-3 rounded-tl-lg rounded-bl-lg"
            style={{
              position: "absolute",
              left: 0,
              width: "20%",
              height: "97vh",
              backgroundColor: "white",
          
            }}
          >
            <h2 className="font-bold text-navy-700 dark:text-white text-2xl fixed left-10 top-40">
              👋 Hey, {UserName}
            </h2>
            <div
              className="w-4/5 h-20  flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105"
              style={{
                backgroundColor: "#f4f7fe",
              }}
              onclick={homenavclick}
              ref={homenav}
            >
              <lord-icon
                className="cursor-pointer"
                src="https://cdn.lordicon.com/slduhdil.json"
                trigger="hover"
                style={{ width: "22px", height: "22px" }}
              ></lord-icon>
              <h1 className="font-bold text-navy-700 dark:text-white  cursor-pointer">
                Home
              </h1>
            </div>
{/*job*/}
            <div
              className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
              onClick={jobnavclick}
              ref={jobnav}
            >
              <lord-icon
                className="cursor-pointer"
                src="https://cdn.lordicon.com/oezixobx.json"
                trigger="hover"
                style={{ width: "22px", height: "22px" }}
              ></lord-icon>
              <h1 className="font-bold text-navy-700 dark:text-white  cursor-pointer">
                Jobs
              </h1>
            </div>
 {/*jobApplyed*/}
            <div
              className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
              onClick={jobappnavclick}
              ref={jobappnav}
            >
              <lord-icon
                className="cursor-pointer"
                src="https://cdn.lordicon.com/oezixobx.json"
                trigger="hover"
                style={{ width: "22px", height: "22px" }}
              ></lord-icon>
              <h1 className="font-bold text-navy-700 dark:text-white  cursor-pointer">
                JobApplyed
              </h1>
            </div>


            <div
              className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
              onClick={meetingnavclick}
              ref={meetingnav}
            >
              <span class="material-symbols-outlined font-extrabold text-2xl hover:scale-50 transition-transform">
                groups
              </span>
              <h1 className="font-bold text-navy-700 dark:text-white cursor-pointer">
                Meetings
              </h1>
            </div>
            <div
              className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
              onClick={companynavclick}
              ref={companynav}
            >
              <span class="material-symbols-outlined font-extrabold text-2xl hover:rotate-12 transition-transform">
                business_center
              </span>
              <h1 className="font-bold text-navy-700 dark:text-white  cursor-pointer">
                Companies
              </h1>
            </div>
            <div
              className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
              onClick={settingsnavclick}
              ref={settingsnav}
            >
              <lord-icon
                src="https://cdn.lordicon.com/dycatgju.json"
                trigger="hover"
                style={{ width: "22px", height: "22px" }}
              ></lord-icon>
              <h1 className="font-bold text-navy-700 dark:text-white  cursor-pointer">
                Settings
              </h1>
            </div>
          </div>
          <div
            className="flex items-center justify-center flex-col gap-4"
            style={{
              width: "52%",
              height: "97vh",
              backgroundColor: "#f4f7fe",
            }}
          >
            <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[700px] xl:gap-2">
              <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[520px]">
                <p className="pl-3 pr-2 text-xl">
                  <lord-icon
                    className="cursor-pointer h-5 w-4 text-gray-400 dark:text-white"
                    src="https://cdn.lordicon.com/rlizirgt.json"
                    trigger="hover"
                    style={{ width: "25px", height: "25px" }}
                  ></lord-icon>
                </p>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
                />
              </div>

    {/* start Notification */}
    <Dropdown
    button={
      <p className="cursor-pointer">
              <lord-icon
                src="https://cdn.lordicon.com/msetysan.json"
                trigger="hover"
                style={{ width: "25px", height: "25px" }}
              />
            </p>
          }
                animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  Notification
                </p>
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  Mark all read
                </p>
              </div>
          
            
            <p className="cursor-pointer">
              <lord-icon
                className="cursor-pointer"
                onClick={profileclick}
                src="https://cdn.lordicon.com/hbvyhtse.json"
                trigger="hover"
                style={{ width: "25px", height: "25px" }}
              />
                 </p>
        </div>
      }
      />
          




            

{/* latest job card */}
            <div
              className=" rounded-[20px] flex items-center justify-center"
              style={{ backgroundColor: "white",width:"56rem",height:"20rem",marginRight:"5rem" }}
            >
              <div className="w-3/5 h-full rounded-lg flex items-center justify-center flex-col">
                <div className="w-auto h-auto ">
                  <h1 className="text-2xl font-bold text-black md:text-3xl md:leading-[42 mt-70 pt-12">
                    FULLSTACK DEVELOPER
                  </h1>
                  <h2 className="pt-6 text-base font-medium text-gray-600">
                    We Need A FullStack Developer
                  </h2>
                </div>
                <div className="w-4/5 h-1/2"></div>
                <div
                  className="h-auto flex gap-4 items-center justify-center"
                  style={{ width: "90%" }}
                >
                  <button
                    className="text-white linear rounded-xl bg-blue-700  px-8 py-2 text-center text-base font-semibold transition duration-200 hover:!bg-black/80 active:!bg-black/70 mb-20"
                    onClick={handleButtonClick}
                  >
                    APPLY
                  </button>
                  <button className="w-1/2 h-10 bg-gray-900 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105 mb-20">
                    LEARN MORE
                  </button>
                </div>
              </div>


              <div className="w-2/5 h-full rounded-lg p-1">
                <img src={fsd} alt="pic" className="h-full rounded-lg" />
              </div>
            </div>



            <div
              className="rounded-lg flex items-left justify-center flex-col gap-1 "
              style={{
        
                width: "100%",
                height: "52%",
                backgroundColor: "#f4f7fe",
              }}
            >
              <div
                className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center cursor-pointer"
                style={{ width: "95%" }}
              >
                <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
                  Jobs Available
                </h4>
                <h1 className="w-3/4">&nbsp;</h1>
                <h1
                  className="ml-1 text-1xl font-semibold text-navy-700 dark:text-white"
                  onClick={jobnavclick}
                >
                  See All
                </h1>
              </div>
              <div
                className="rounded-[20px] flex items-center justify-center flex-row gap-2"
                style={{ width: "95%", height: "90%" }}
              >
                <div
                  className="bg-white rounded-[15px] p-1"
                  style={{ width: "31.666%", height: "97%" }}
                >
                  <img
                    src={fsdc}
                    alt="pic"
                    className="h-2/5  pl-6 w-90 rounded-tl-lg rounded-tr-lg"
                  />
                  <div className="w-full h-2/5 ml-5 flex flex-col gap-4 p-1 bg-white">
                    <h1 className="text-lg font-sans font-bold text-left ml-5  text-gray-900 ">
                      FULLSTACK DEVELOPER
                    </h1>
                    <h1 className="text-sm font-kern font-semibold ml-5 pr-5 text-gray-700">
                      Aither Technology is looking for talented software
                      developers
                    </h1>
                  </div>
                  <div className="w-full h-1/5 rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-3">
                    {isChecked ? (
                      <lord-icon
                        onClick={checkclick}
                        src="https://cdn.lordicon.com/gigfpovs.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                      ></lord-icon>
                    ) : (
                      <lord-icon
                        onClick={checkclickfalse}
                        src="https://cdn.lordicon.com/eanmttmw.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                      ></lord-icon>
                    )}
                    <lord-icon
                      src="https://cdn.lordicon.com/uvqnvwbl.json"
                      trigger="hover"
                      style={{ width: "25px", height: "25px" }}
                    ></lord-icon>
                    <button
                      className="p-1 bg-blue-700 text-base font-sans font-semibold tracking-wide text-white rounded-lg hover:scale-105"
                      style={{ width: "45%" }}
                    >
                      APPLY
                    </button>
                  </div>
                </div>
                <div
                  className="bg-white rounded-[15px] p-1"
                  style={{ width: "31.666%", height: "97%" }}
                >
                  <img
                    src={fsdc}
                    alt="pic"
                    className="h-2/5  pl-6 w-90 rounded-tl-lg rounded-tr-lg"
                  />
                  <div className="w-full h-2/5 flex flex-col gap-4 p-1 bg-white">
                    <h1 className="text-xl font-sans font-bold text-left ml-5 text-gray-900">
                      FULLSTACK DEVELOPER
                    </h1>
                    <h1 className="text-sm font-kern font-semibold ml-5 pr-5 text-gray-700">
                      Aither Technology is looking for talented software
                      developers
                    </h1>
                  </div>
                  <div className="w-full h-1/5 rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-3">
                    {isChecked ? (
                      <lord-icon
                        onClick={checkclick}
                        src="https://cdn.lordicon.com/gigfpovs.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                      ></lord-icon>
                    ) : (
                      <lord-icon
                        onClick={checkclickfalse}
                        src="https://cdn.lordicon.com/eanmttmw.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                      ></lord-icon>
                    )}
                    <lord-icon
                      src="https://cdn.lordicon.com/uvqnvwbl.json"
                      trigger="hover"
                      style={{ width: "25px", height: "25px" }}
                    ></lord-icon>
                    <button
                      className="p-1 bg-blue-700 text-base font-sans font-semibold tracking-wide text-white rounded-lg hover:scale-105"
                      style={{ width: "45%" }}
                    >
                      APPLY
                    </button>
                  </div>
                </div>
                <div
                  className="bg-white rounded-[15px] p-1"
                  style={{ width: "31.666%", height: "97%" }}
                >
                  <img
                    src={fsdc}
                    alt="pic"
                    className="h-2/5 pl-6 w-90 rounded-tl-lg "
                  />
                  <div className="w-full h-2/5 flex flex-col gap-4 p-1 bg-white">
                    <h1 className="text-xl font-sans font-bold text-left ml-5 text-gray-900">
                      FULLSTACK DEVELOPER
                    </h1>
                    <h1 className="text-sm font-kern font-semibold ml-5 pr-5 text-gray-700">
                      Aither Technology is looking for talented software
                      developers
                    </h1>
                  </div>
                  <div className="w-full h-1/5 rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-3">
                    {isChecked ? (
                      <lord-icon
                        onClick={checkclick}
                        src="https://cdn.lordicon.com/gigfpovs.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                      ></lord-icon>
                    ) : (
                      <lord-icon
                        onClick={checkclickfalse}
                        src="https://cdn.lordicon.com/eanmttmw.json"
                        trigger="hover"
                        style={{ width: "25px", height: "25px" }}
                      ></lord-icon>
                    )}
                    <lord-icon
                      src="https://cdn.lordicon.com/uvqnvwbl.json"
                      trigger="hover"
                      style={{ width: "25px", height: "25px" }}
                    ></lord-icon>
                    <button
                      className="p-1 bg-blue-700 text-base font-sans font-semibold tracking-wide text-white rounded-lg hover:scale-105"
                      style={{ width: "45%" }}
                    >
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white flex items-center justify-center rounded-tr-lg rounded-br-lg"
            style={{
              position: "absolute",
              right: 0,
              width: "25%",
              height: "97vh",
              backgroundColor: "white",
          
            }}
          >
            {IsNotified ? (
              <div
                className=" flex items-center justify-center flex-col gap-4 rounded-lg"
                style={{
                  width: "100%",
                  height: "93vh",
                  backgroundColor: "white",
                }}
              >
                <img src={fsdc} alt="pic" className="h-2/6" />
                <div
                  className="flex flex-col gap-2"
                  style={{ width: "80%", height: "auto" }}
                >
                  <h1 className="text-1xl font-sans font-extrabold text-gray-900">
                    FULLSTACK DEVELOPER
                  </h1>
                  <h1 className="text-sm font-sans font-semibold text-gray-700">
                    We Are a Fast-paced, dynamic organization looking for a
                    skilled and experienced senior fullstack development
                    engineer to join our growing team...
                  </h1>
                </div>
                <div
                  className="flex  flex-col gap-2"
                  style={{ width: "80%", height: "auto" }}
                >
                  <h1 className="text-1xl font-sans font-extrabold text-gray-900">
                    Qualification
                  </h1>
                  <ul className="list-disc ml-10 text-base font-sans font-semibold text-gray-700">
                    <li>React : 1 year (Required)</li>
                    <li>Bachelor's (Preffered)</li>
                    <li>Node Js : 1 year (Preffered)</li>
                    <li>Cloud Computing : 1 year (Preffered)</li>
                    <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                  </ul>
                </div>
                <div className="w-4/5 h-16 flex items-center justify-center gap-2">
                  <button
                    className="h-10 bg-gray-900 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105"
                    style={{ width: "50%" }}
                  >
                    LEARN MORE
                  </button>
                  <button
                    className="h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105"
                    style={{ width: "45%" }}
                  >
                    APPLY
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="shadow-md flex items-center flex-col gap-2 rounded-lg"
                style={{
                  width: "90%",
                  height: "93vh",
                  backgroundColor: "aliceblue",
                }}
              >
                <div className="w-full h-auto text-center">
                  <h1
                    className="font-sans font-bold text-neutral-900 mt-7"
                    style={{ fontSize: "1rem" }}
                  >
                    Notifications
                  </h1>
                </div>
            
                <div
                  className="w-full rounded-bl-lg rounded-br -lg flex items-center justify-center gap-2"
                  style={{ height: "10%" }}
                >
                  <button
                    onClick={notifiedtrue}
                    className="h-10 shadow-md bg-gray-900 p-1 text-sm font-sans font-semibold tracking-wide text-white pl-2 pr-2 rounded-lg hover:scale-105"
                    style={{ width: "90%" }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>


      
    )}
    </div>
  )
};
  
 


export default Home;

