import React from "react";

interface ModalProps {
  heading: string,
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<ModalProps> = ({ heading,isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        
      <div className="bg-white rounded-lg shadow-lg max-w-[35rem] max-h-screen overflow-y-auto p-6 h-auto relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
      <div>
      <h2 className="flex-row text-center text-[#C5A39A] italic"><strong>{heading.toUpperCase()}</strong></h2>
      </div>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Modal Content */}
        {!children ? "Error loading content. Try again": children}
      </div>
    </div>
  );
};

export default Popup;
