import React from 'react';

interface FooterComponentI {
className? : string,
}

const Footer: React.FC<FooterComponentI> = ({className = null}) => {
    return(
        <div className= {`bottom-0 flex ${className?className : ""}`}>
            <h1>This is the Footer</h1>
        </div>
    );
}
export default Footer;