/** This component is for CONTACT SECTION */
import React,{useState,useEffect} from 'react';
import SectionComponent from "../assets/sectionComponent";
import "./aboutme.css";
import JSONContent from "../assets/content.json";

type workExperienceJSONType = {
    "company":string,
    "role":string,
    "stack":string
}

interface AboutMeI {

}
const presentWorkExperience : workExperienceJSONType = JSONContent.work_experience.present;
const pastWorkExperience : workExperienceJSONType[] = JSONContent.work_experience.past;
interface DynamicJsonRenderI {
    data: workExperienceJSONType;
}
const DynamicJsonRender:React.FC<DynamicJsonRenderI> = ({ data  }) => {
    return (
      <div className="grid grid-cols-[25%_75%]">
        {Object.entries(data).map(([key, value]) => (
            <>
          <div className="font-bold">{key.charAt(0).toUpperCase() + key.slice(1)}:</div>
          <div className="font-normal text-[#f92c85] italic">{value}</div>
          </>
        ))}
      </div>
    );
  };

const AboutPage : React.FC<AboutMeI>= () => {
    const [loadComponent, setLoadComponent] = useState<boolean>(false);
    useEffect(() => {
           const timer = setTimeout(() => {
            setLoadComponent(true);
           },500);
              return () => clearTimeout(timer); 
    },[])
    return(
        <div className="sectionBackground">
        <SectionComponent sectionName="ABOUT ME" className="h-[100%]">
            <div className={` sticky transition-opacity duration-500 ease-in ${loadComponent ? "opacity-100" : "opacity-0"} fontClass mt-10 ml-16 mr-16 text-[#f92c85] rounded-lg border-l-2 border-b-2 border-gray-600 transition ease-in-out`}>
                <h4 className="ml-1"><pre>Hi. I am Sai Chandra Mouli <span className="italic">(Sachmo)</span>. I am a:</pre></h4>
                <ul className="list-disc list-inside">
                    <div className="pl-20 italic font-normal">
                    <li>Full Stack developer</li>
                    <li>Data Engineer</li>
                    <li>AI Enthusiast</li>
                    <li>Story Writer </li>
                    </div>
                </ul>
            </div>
            <hr className="bg-slate-500 h-[0.5px] mt-4 mb-4"/>
            <div className={` transition-opacity duration-500 ease-in ${loadComponent ? "opacity-100" : "opacity-0"} text-3xl mt-10 ml-16 mr-16 border-l-2 border-b-2 border-gray-600 rounded-lg transition-opacity duration-500 ease-in`}>
                <div className="ml-1"> <p className="underline">I am currently working at:</p> <br/>
                    <div className="ml-10">
                    <DynamicJsonRender data={presentWorkExperience} />
                    </div>
                </div>
                { pastWorkExperience.length > 0 && 
                <div>
                    <p className="font-light underline ml-1">Previous Work Experience:</p>
                    { pastWorkExperience.map((item,index) => (
                        <div key={index} className="ml-1 mt-4">
                            <div className="ml-10">
                            <DynamicJsonRender data={item} />
                            </div>
                            <hr className="bg-slate-500 h-[0.5px] mt-4 mb-4"/>
                        </div>
                    ))
                }
                </div>
                }
            </div>
            <div id="Projects" className="">
                

            </div>
        </SectionComponent>
        </div>
    );
}
export default AboutPage;