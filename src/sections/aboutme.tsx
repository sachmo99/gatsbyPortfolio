/** This component is for CONTACT SECTION */
import React from 'react';
import SectionComponent from "../assets/sectionComponent";
interface AboutMeI {

}
const AboutPage : React.FC<AboutMeI>= () => {
    return(
        <SectionComponent sectionName="ABOUT ME" className="text-black">
            <h1>Hello World</h1>
        </SectionComponent>
    );
}
export default AboutPage;