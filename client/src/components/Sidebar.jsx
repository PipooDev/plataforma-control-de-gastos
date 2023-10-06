import React, { useState } from "react";
import { useEffect } from "react";
import Menu from "./Menu";

const Sidebar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSideBarOpen(true);
      } else {
        setIsSideBarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://www.example.com/logo.png" alt="Logo" />
      </div>
      {isSideBarOpen && <Menu />}
      <button className="close" onClick={handleToggle}>
        <i className="bx bx-x"></i>
      </button>
    </div>
  );
};

export default Sidebar;
