import React from 'react';

interface FooterComponentI {
className? : string,
}

const Footer: React.FC<FooterComponentI> = ({className = null}) => {
    return(
        <div className= {`bottom-0 flex p-3 items-center justify-center ${className?className : ""}`}>
            <h1 className="font-bold">Copyright 2025 - Made by Sachmo </h1>
        </div>
    );
}
export default Footer;