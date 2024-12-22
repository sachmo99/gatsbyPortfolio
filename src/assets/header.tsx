import React from 'react';

interface HeaderComponentI {
    sectionName:string,
    className? : string
}

const Header: React.FC<HeaderComponentI> = ({sectionName,className = null}) => {
    return(
        <div className={`w-screen h-auto top-0 flex flex-row items-center ${className ? className : ""}`}>
            <img alt="logo" src="/vite.svg" className="left-0 w-10 h-10"></img>
            <div className= "flex w-[100%] justify-center items-center">
                <h1 className="font-extrabold">{sectionName}</h1>
            </div>
        </div>
    );
}
export default Header;