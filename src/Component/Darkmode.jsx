import React, { useState, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const Darkmode = () => {
  const [isDark, setisDark] = useState(false);

  const handleDark = () => {
    setisDark(!isDark);
  };
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
    
    
    
  return (
   
      <div
        className="border absolute right-14 top-5 p-1 rounded-full bg-slate-900 dark:bg-orange-400 cursor-pointer select-none text-xl "
        onClick={handleDark}
      >
      {isDark ? <HiOutlineMoon /> : <HiOutlineSun />}
      </div>
    
  );
};

export default Darkmode;
