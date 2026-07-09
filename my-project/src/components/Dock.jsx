import React, { useRef } from "react";
import { dockApps } from "../constents";

const Dock = () => {
  const dockRef = useRef(null);

  return (
    <section
      ref={dockRef}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-5  bg-white/20 px-5 py-3 rounded-2xl"
    >
      {dockApps.map((app) => (
        <div
          key={app.id}
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