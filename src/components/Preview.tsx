"use client";
import { useState, useEffect } from 'react';

const Preview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show preview when user has scrolled 80% of the page
      if (scrollPosition + windowHeight >= documentHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border-2 border-black shadow-[4px_4px_0_#000] p-2">
      <div className="bg-[#EECDBA] px-3 py-2 border-b-2 border-black flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full border border-black"></div>
          <div className="w-3 h-3 rounded-full border border-black"></div>
          <div className="w-3 h-3 rounded-full border border-black"></div>
        </div>
        <span className="text-sm text-black">Live Preview</span>
      </div>
      <div className="w-[300px] h-[200px] bg-[#F9E8D0] border-2 border-black mt-2 overflow-hidden">
        <iframe
          src="/"
          className="w-full h-full scale-[0.3] origin-top-left"
          style={{ transform: 'scale(0.3) translate(-100%, -100%)' }}
          title="Site Preview"
        />
      </div>
    </div>
  );
};

export default Preview; 