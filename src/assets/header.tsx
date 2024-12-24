import React,{useState} from 'react';

interface HeaderComponentI {
    sectionName:string,
    className? : string
}

const Header: React.FC<HeaderComponentI> = ({sectionName,className = null}) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const handleMenu = () => {
        console.log("Menu Clicked");
        setShowMenu((menu) => !menu);
    }
    return(
        <div className={`w-screen h-auto top-0 bg-[#f92c85] shadow-lg flex flex-row items-center ${className ? className : ""}`}>
            <img alt="logo" src="/vite.svg" className="left-0 w-[7%] h-auto"></img>
            <div className= "flex w-[100%] justify-center items-center">
                <h1 className="font-extrabold text-7xl text-[#fff]">{sectionName}</h1>
            </div>
            <div className="right-0 w-[7%] h-auto">
                <div className="relative">
                    <button className="peer relative z-10 block p-2 transition-colors duration-300 transform rounded-lg focus:outline-none border-2 border-blue-500" onClick={handleMenu}>
                        <svg className="w-6 h-6 text-blue-500 rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </button>
                    { showMenu && 
                    <div
                        className="absolute right-0 z-20 w-48 mt-2 overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 border">
                        <a href="/"
                        className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-300 transform border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">HOME
                        </a>
                        <a href="/#/aboutme"
                        className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-300 transform border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">ABOUT ME
                        </a>
                        <a href="/#/contactme"
                        className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">CONTACT ME
                        </a>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default Header;