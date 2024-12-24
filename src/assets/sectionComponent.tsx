import React from 'react';
import './sectionComponent.css';
import Header from './header';
import Footer from './footer';

interface sectionComponentI {
    sectionName: string,
    className: string,
    children: React.ReactNode
}

const SectionComponent: React.FC<sectionComponentI> = ({ sectionName,className = null,children }) => {
    return(
        <div className={`w-screen flex flex-col ${className}`}>
            <Header sectionName={sectionName}/>
            <div className="flex-grow">
            {children}
            </div>
            <Footer />
        </div>
    );
}
export default SectionComponent;