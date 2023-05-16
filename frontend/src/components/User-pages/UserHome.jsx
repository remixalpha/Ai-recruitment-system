import "../../css/user/UserHome.css";
import fsd from "../../assets/fsd.jpg";
import fsd2 from "../../assets/fsd2.gif";
import fsd4 from "../../assets/fsd4.gif";
import fsd5 from "../../assets/fsd5.gif";

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
  const [job, setJob] = useState([]);
  const [notify, setNotify] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();
  const homenav = useRef(null);
  const jobnav = useRef(null);
  const jobappnav = useRef(null);
  const quiznav = useRef(null);
  const meetingnav = useRef(null);
  const companynav = useRef(null);
  const settingsnav = useRef(null);
  const MyUserId = localStorage.getItem("user");
  const URL = "http://localhost:5000/";

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
    navigate("/meethome");
  };
  const quiznavclick = (event) => {
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
    navigate("/assesmentest");
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

  useEffect(() => {
    fetchUser();

    fetchJob();
    fetchJobRequest();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.post(`${URL}users/`, {
        userId: MyUserId,
      });
      const { firstName, lastName } = response.data;
      setUserName(`${firstName} ${lastName}`);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const fetchJob = async () => {
    await axios.post(`${URL}job`).then((res) => {
      console.log({ res: res });

      setJob(res.data?.doc);
    });
  };

  const jobApplyHandler = async (data) => {
    console.log({ selected: data });
    await axios
      .post(`${URL}job/apply`, {
        from: MyUserId,
        to: data.CreatedHr,
        jobId: data._id,
      })
      .then((res) => {
        console.log({ res: res });
        alert("Applyed");
      });
  };

  const fetchJobRequest = async () => {
    await axios
      .post(`${URL}job/get`, {
        from: MyUserId,
        approved: true,
      })
      .then((res) => {
        console.log({ notification: res });
        setNotify(res.data.doNotTrack);
      });
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);

const handleCardClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      {isLoading ? (
        <div
          className="w-full bg-white-100  flex"
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
          style={{ height: "100%", backgroundColor: "#f4f7fe" }}
        >
          {/* Sidebar */}
          <div className="flex items-center justify-center pb-[30rem]  "     
           style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "19%",
              minHeight: "169%",
              backgroundColor: "white",
              overflowY: "auto",
            }}>
          <div
            className="flex items-center justify-center flex-col gap-3 rounded-tl-lg rounded-bl-lg pb-10"
        
          >
            <div className="flex items-center justify-start cursor-pointer">
              <h2 className="font-bold text-navy-700 dark:text-white text-2xl p-14 mr-12">
                👋 Hey, {UserName ? UserName : "Loading..."}
              </h2>
            </div>

            {/*Home*/}
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
                src="https://cdn.lordicon.com/frjgvxce.json"
                trigger="hover"
                style={{ width: "22px", height: "22px" }}
              ></lord-icon>
              <h1 className="font-bold text-navy-700 dark:text-white  cursor-pointer">
                Job Applyed
              </h1>
            </div>

            <div
              className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
              onClick={meetingnavclick}
              ref={meetingnav}
            >
              <lord-icon
                className="cursor-pointer"
                src="https://cdn.lordicon.com/hmkhncjw.json"
                trigger="hover"
                style={{ width: "22px", height: "22px" }}
              ></lord-icon>

              <h1 className="font-bold text-navy-700 dark:text-white cursor-pointer">
                Meetings
              </h1>
            </div>

            <div
              className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
              onClick={quiznavclick}
              ref={quiznav}
            >
              <lord-icon
                className="cursor-pointer"
                src="https://cdn.lordicon.com/zncllhmn.json"
                trigger="hover"
                style={{ width: "22px", height: "22px" }}
              ></lord-icon>
              <h1 className="font-bold text-navy-700 dark:text-white cursor-pointer">
                Test
              </h1>
            </div>

            <div
              className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
              onClick={companynavclick}
              ref={companynav}
            >
              <lord-icon
                className="cursor-pointer"
                src="https://cdn.lordicon.com/lqsduwhb.json"
                trigger="hover"
                style={{ width: "22px", height: "22px" }}
              ></lord-icon>
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
              <h1 className="font-bold text-navy-700 dark:text-white  cursor-pointer ">
                Settings
              </h1>
            </div>
          </div>
          </div>
          {/* Middle portion */}
          <div
            className="flex items-center justify-center flex-col gap-4  "
            style={{
              width: "59%",
              backgroundColor: "#f4f7fe",
              minHeight: "100%",
            }}
          >
            <div className="relative mt-10  flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[700px] xl:gap-2">
              {/* Search-bar */}

              <div className="flex items-left rounded-full bg-lightPrimary text-navy-700 dark:text-white xl:w-[520px]">
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
                  className="block w-full h-full mt-2 rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
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
                    {notify &&
                      notify.map((data) => (
                        <button className="flex w-full items-center">
                          <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
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
                          <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                            <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-gray-900">
                              Congratz {data.from.companyName}
                              {""} is Approved
                            </p>
                            <p className="font-base text-left text-xs text-gray-900 dark:text-gray-900">
                              Your {data.jobId.jobName} apply has been Approved
                              Interview date will be sent soon
                            </p>
                          </div>
                        </button>
                      ))}

                    <button className="flex w-full items-center">
                      <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                        <p className="cursor-pointer">
                          <lord-icon
                            className="cursor-pointer"
                            src="https://cdn.lordicon.com/hbvyhtse.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          />
                        </p>
                      </div>
                      <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                        <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                          Jobee
                        </p>
                        <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                          Your Application for Designer has been Approved
                          Interview date will be 08-11-2020
                        </p>
                      </div>
                    </button>
                  </div>
                }
              />
              
              {/* Profile */}
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

            {/* latest job card */}

            <div
              className=" rounded-[20px] flex items-center justify-center"
              style={{
                backgroundColor: "white",
                width: "65rem",
                marginRight:"4rem",
                minHeight: "100%",
               
              }}
            >
              <div className="w-3/5 h-full rounded-full flex items-center justify-center flex-col">
                <div className="w-auto h-auto ">
                  <h1 className="text-2xl pl-20 font-semibold text-black md:text-3xl md:leading-[42 mt-70 pt-12">
                    FULLSTACK DEVELOPER
                  </h1>
                  <h2 className="pt-6 pl-20 text-base font-medium text-gray-600">
                    We Are a Fast-paced, dynamic organization looking for a
                    skilled and experienced senior fullstack development
                    engineer to join our growing team
                  </h2>
                </div>
                <div className="w-4/5 h-1/2"></div>
                <div
                  className="h-auto flex gap-4 items-center justify-center"
                  style={{ width: "90%" }}
                >
                  <button
                    className="text-white linear rounded-full bg-blue-700  mt-10 px-8 py-2 text-center text-base font-semibold transition duration-200 hover:!bg-black/80 active:!bg-black/70 mb-20"
                    onClick={handleButtonClick}
                  >
                    APPLY
                  </button>
                  <button
                    className="w-1/3 h-10 bg-gray-900 p-2 text-sm font-sans font-semibold tracking-wide text-white mt-10 pl-4 pr-4 rounded hover:scale-105 mb-20"
                    onClick={jobappnavclick}
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>

              <div className="w-2/5 rounded-lg pl-10 ml-7 flex-grow">
                <img src={fsd2} alt="pic" className="h-[15rem] rounded-lg" />
              </div>
            </div>

            {/* New Jobs */}
            <div
              className="rounded-lg flex items-left justify-center flex-col gap-1 "
              style={{
                width: "100%",
                minHeight: "100%",
                backgroundColor: "#f4f7fe",
              }}
            >
              {/* Jobavailable bar */}
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
                className="rounded-[20px] flex items-center justify-center flex-row flex-wrap gap-10"
                style={{ width: "100%", minHeight: "100%" }}
                onClick={handleCardClick}
              >
                {/* <div
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
                </div> */}

                {/* New jobs */}
                {job.map((data) => (
                  <div
                    key={data.id}
                    className="bg-white rounded-[15px] p-1 "
                    style={{ width: "30%", height: "100%" }}
                  >
                    {data.categories.includes("Software") ? (
                      <img
                        src={fsd}
                        alt="pic"
                        className="h-2/5 pl-20 w-90 rounded-tl-lg "
                      />
                    ) : (
                      <img
                        src={fsd4}
                        alt="pic"
                        className="h-2/5 pl-20 w-90 rounded-tl-lg "
                      />
                    )}

                    <div className="w-full h-2/5 flex flex-col gap-4 p-1 bg-white">
                      <h1 className="text-xl font-sans font-bold text-left ml-5 text-gray-900 uppercase">
                        {data.jobName}
                      </h1>
                      <h1 className="text-xs font-kern font-semibold ml-5 pr-5 text-gray-700 ">
                        {data.desc}
                      </h1>
                    </div>
                    
                    <div className="w-full h-1/5 pt-10 pb-5 rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-5">
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
                        onClick={() => {
                          jobApplyHandler(data);
                        }}
                        className="p-1 bg-blue-700 text-base font-sans font-semibold tracking-wide text-white rounded-lg hover:scale-105"
                        style={{ width: "45%" }}
                      >
                        APPLY
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right-side bar */}
         
             {job.map((data) => (
          <div
            className="bg-white flex items-center justify-center rounded-lg animation-class"
            
            style={{
              position: "absolute",
              top:"0",
              right: 0,
              width: "23.5%",
              height: "167vh",
              backgroundColor: "white",
            }}
          >
            
             
              <div
              className="flex items-center justify-center flex-col gap-4 mb-[40rem] "

                style={{
                  width: "100%",
                  height: "auto",
                  backgroundColor: "white",
                }}
              >
                <img src={fsd5} alt="pic" className="h-2/6" />
                <div
                  className="flex flex-col gap-2"
                  style={{ width: "80%", height: "auto" }}
                >
                  <h1 className="text-1xl font-sans font-extrabold text-gray-900">
                  {data.jobName}
                  </h1>
                  <h1 className="text-sm font-sans font-semibold text-gray-700">
                  {data.desc}
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
                    onClick={jobappnavclick}
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
              
           
            
          </div>
          ))}
     
        </div>
      )}
    </div>
  );
}

export default Home;
