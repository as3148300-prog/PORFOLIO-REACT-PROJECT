import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Bootscreen = () => {
  useGSAP(() => {
    gsap.to("#loadingline", {
      width: "100%",
      duration: 3,
      ease: "power1.in",
      delay: 1,
    });

    gsap.to("#apple", {
      opacity: 0,
      duration: 0.5,
      delay: 4.2,
      ease: "power2.in",
      display: "none",
    });

    gsap.to("#boot", {
      opacity: 0,
      duration: 1,
      delay: 4.8,
      ease: "power2.in",
      display: "none",
    });
  });

  return (
    <div id="boot" className="fixed inset-0 z-[9999] bg-black">
      <div
        id="loadingline"
        className="h-1 w-0 bg-white"
      ></div>

      <img
        id="apple"
        className="h-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src="/images/apple.png"
        alt="Apple"
      />
    </div>
  );
};

export default Bootscreen;