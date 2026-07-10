import React from "react";
import { dockApps } from "../constents";
import gsap from "gsap";

const Dock = () => {
  const handleEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -15,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(e.currentTarget.querySelector("p"), {
      opacity: 1,
      duration: .6,
      ease: "power2.out",
    });
  };

  const handleLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(e.currentTarget.querySelector("p"), {
      opacity: 0,
      duration: 0.6,
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
          className="relative flex flex-col items-center cursor-pointer"
        >
          <p
            className="
              opacity-0
              pointer-events-none
              absolute
              -top-9
              bg-white/20


              px-3
              py-1
              rounded-md
              text-[15px]
              font-medium
              text-white
              whitespace-nowrap

              after:content-['']
              after:absolute
              after:left-1/2
              after:top-full
              after:-translate-x-1/2
              after:border-l-[6px]
              after:border-r-[6px]
              after:border-t-[6px]
              after:border-l-transparent
              after:border-r-transparent
              after:border-t-white/20
            "
          >
            {app.name}
          </p>

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