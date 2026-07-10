import React from "react";
import { dockApps } from "../constents";
import gsap from "gsap";

const Dock = () => {
  const handleEnter = (e) => {
    gsap.to(e.currentTarget, {
     y:-10,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = (e) => {
    gsap.to(e.currentTarget, {
      y:0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section className="fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-5 bg-white/20 px-5 py-3 rounded-2xl">
      {dockApps.map((app) => (
        <div
          key={app.id}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="flex flex-col items-center cursor-pointer"
        >
          <img
            src={`/images/${app.icon}`}
            alt={app.name}
            className="w-14 h-14"
          />
        </div>
      ))}
    </section>
  );
};

export default Dock;