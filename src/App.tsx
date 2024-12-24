import { useState,useEffect, useLayoutEffect } from "react";
import './App.css'
import Popup  from './popup';
import jsonContent from './assets/content.json';
import DOMPurify from 'dompurify';
import CurtainAnimation from "./welcome";
//import resume from "./assets/Tadiparthi, Sai Chandra Mouli Resume - 2024.pdf"; // Import the PDF file
import SnowEffect from "./assets/snowEffect";
type ButtonAttributes = {
  [key: string]: string
}
type Button = {
  text: string,
  link: string,
  attributes?: ButtonAttributes
};

type AboutMeContent = {
  [key: string]: {
    heading: string,
    content: string,
    button?: Button[]
  };
};
type timeQuotationType = {
    quote: string,
    author:string
}

const aboutmeContent : AboutMeContent = jsonContent.aboutme_content;
const timeQuotes : timeQuotationType[] = jsonContent.time_quotations;
const App: React.FC = () => {
  const [popupBody, setPopupBody] = useState< React.ReactNode | null>(null);
  const [buttonList, setButtonList] = useState<Button[] | null>(null);
  const [popupHeading, setPopupHeading] = useState<string | null > (null);
  const [ntpTime, setNTPTime] = useState<string | null>(null);
  const [showCurtain, setShowCurtain] = useState<boolean | null>(true);



  useLayoutEffect(() =>{
    console.log("App Component Mounted");
    const visited = sessionStorage.getItem("visited");
    console.log(visited);
    console.log(showCurtain);
    if(visited === null) {
      sessionStorage.setItem("visited", "true");
    }else {
      setShowCurtain(false);
    }
  },[])
  useEffect(() => {

    const fetchIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        if (!response.ok) {
          setNTPTime("Cannot fetch NTP Time...")
          
        }
        const ipData = await response.json();
        console.log(ipData.ip);
        const timeResponse = await fetch(
          `https://www.timeapi.io/api/time/current/ip?ipAddress=${ipData.ip}`
        )
        if (!timeResponse.ok) {
          setNTPTime("Cannot fetch NTP Time...")
        }
        const timeData = await timeResponse.json();
        setNTPTime(timeData.dateTime);
      } catch (err) {
        setNTPTime("Cannot Fetch NTP Time...")
      }
    };

    fetchIP();
  }, [popupBody]);


  const handleItemClick = (key : string) => {
    if(key === "clock") {
      const randomNumber = Math.floor(Math.random() *10);
      const quoteContent = timeQuotes[randomNumber];
      setPopupHeading("Clock");
      setPopupBody(
        <div className="text-black text-sm">
          <strong>
            {quoteContent["quote"]}
          </strong>
          <p className="italic"> - {quoteContent["author"]}</p>
          <br />
          <p>NTP Time (based on your IP):<strong> {ntpTime? new Date(ntpTime).toTimeString() : "Cannot fetch..."}</strong></p>
          <p>Current Local Time: <strong> {new Date().toLocaleTimeString()}</strong></p>
        </div>
      )
    }
    const item = aboutmeContent[key];
    if (item) {
      setPopupHeading(item["heading"]);
      setPopupBody(
        <div className="text-gray-600 justify-center items-center"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(item["content"])
        }}>
        </div>
      );
      if(item.button){
        setButtonList(item.button);
      }
    }
  };
  const sanitizeHtml = (html:string) => {
    return DOMPurify.sanitize(html);
  }
  // useEffect(() => {
  //   console.log(popupBody);
  // },[popupBody])


  const closePopup = () => {
    setPopupHeading(null);
    setPopupBody(null);
    setButtonList(null);
  };

  return (
    <div className="relative w-screen h-screen">
      {showCurtain && <CurtainAnimation />}
      <div className="absolute w-screen min-h-screen overflow-scroll z-0 top-0 left-0">
        { /*<img src="/portfolio_me.jpg" className="w-full h-screen min-h-screen object-fill"></img> */ }
        <SnowEffect />
      </div>
            {/* Interactive Elements */}
      <div className="absolute z-2 h-[100%] w-[100%] top-0 left-0 flex">
        <div className="interactive-clock pulsing-div"
        onClick={() => handleItemClick("clock")}>
        </div>
      <div
        className="interactive-computer pulsing-div"
        onClick={() => handleItemClick("computer")}
      ></div>
      <div
        className="interactive-picture pulsing-div"
        onClick={() => handleItemClick("frames")}
      ></div>
      <div
        className="interactive-shelf pulsing-div"
        onClick={() => handleItemClick("shelf")}
      ></div>

      {/* Popup */}
      {popupHeading && <Popup heading={popupHeading} isOpen={popupHeading.length !== 0} onClose={closePopup} >
          {popupBody}
          <br />
          <div className="flex justify-center">
            {buttonList && buttonList.map((button, index) => (
              <a href={button.link} key={index}
                {...button.attributes}
               className="no-underline hover:text-black hover:bg-gray-300 bg-blue-500 text-white rounded-md px-2 py-1 mx-2">
                {button.text}
              </a>
            ))}
          </div>
         </Popup>}
      </div>
    </div>
  )
}

export default App;
