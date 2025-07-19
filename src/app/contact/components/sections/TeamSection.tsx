"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface TeamSectionProps {
  initialHeight?: number;
  maxHeight?: number;
  width?: number;
  color?: string;
  className?: string;
  showDot?: boolean;
  dotSize?: number;
  dotColor?: string;
  backgroundImage?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const TeamSection = ({
    initialHeight = 50,
    maxHeight = 400,
    width = 2,
    color = "bg-primary",
    className = "",
    showDot = true,
    dotSize = 8,
    dotColor = "bg-primary",
    backgroundImage="/team.jpg",
    
    
  leftContent = (
    <div className="text-white font-medium space-y-2 p-3">
      <h3  className="text-2xl font-bold text-start "></h3>
      <p className="text-sm font-normal text-start">
      
      </p>
    </div>
  ),

  rightContent = (
    <div className="text-white font-medium space-y-2 p-3">
    <h3  className="text-2xl font-bold text-start "></h3>
    <p className="text-sm font-normal text-start">
    
    </p>
  </div>
  ),
}: TeamSectionProps) => {
  const [dividerHeight, setDividerHeight] = useState(initialHeight);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const windowHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - windowHeight);
      const newHeight =
        initialHeight + (maxHeight - initialHeight) * scrollPercent;
      setDividerHeight(Math.min(newHeight, maxHeight));
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialHeight, maxHeight]);

  return (
    <div
      className={`relative w-full h-[600px] overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-deep-purple/10 bg-opacity-90 z-0" />

      {/* Content + Divider */}
      <div className="relative z-10 flex justify-between items-center h-full px-6 md:px-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 pr-4">{leftContent}</div>

        {/* Divider Line with Dot */}
        <div className="flex flex-col items-center mx-4">
          {showDot && (
            <div
              className={`${dotColor} rounded-full mb-1 transition-all duration-300 ease-out`}
              style={{
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-5px)",
              }}
            />
          )}
          <div
            className={`${color} transition-all duration-300 ease-out rounded-full`}
            style={{
              height: `${dividerHeight}px`,
              width: `${width}px`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-10px)",
            }}
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 pl-4 text-right">{rightContent}</div>
      </div>
    </div>
  );
};

export default TeamSection;
