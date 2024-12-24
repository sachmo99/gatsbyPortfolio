import React, { useEffect } from "react";
//import resume from "../assets/Tadiparthi, Sai Chandra Mouli Resume - 2024.pdf"; // Import the PDF file

const DownloadResume: React.FC = () => {
  useEffect(() => {
    // Create a download link programmatically
    const link = document.createElement("a");
    link.href = "/Tadiparthi, Sai Chandra Mouli Resume - 2024.pdf"; // Use the imported file's path
    link.download = "Tadiparthi, Sai Chandra Mouli Resume - 2024.pdf"; // The default file name for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return null; // Render nothing to avoid UI changes
};

export default DownloadResume;
