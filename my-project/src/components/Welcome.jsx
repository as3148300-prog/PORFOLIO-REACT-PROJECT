import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const titleSplit = SplitText.create(titleRef.current, {
      type: "chars",
    });

    const subtitleSplit = SplitText.create(subtitleRef.current, {
      type: "chars",
    });

    const addHover = (chars, defaultWeight, hoverWeight) => {
      chars.forEach((char) => {
        gsap.set(char, {
          fontVariationSettings: `"wght" ${defaultWeight}`,
        });

        char.addEventListener("mouseenter", () => {
          gsap.to(char, {
            fontVariationSettings: `"wght" ${hoverWeight}`,
            duration: 0.2,
            ease: "power2.out",
          });
        });

        char.addEventListener("mouseleave", () => {
          gsap.to(char, {
            fontVariationSettings: `"wght" ${defaultWeight}`,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      });
    };

    addHover(titleSplit.chars, 400, 600);
    addHover(subtitleSplit.chars, 100, 400);

    return () => {
      titleSplit.revert();
      subtitleSplit.revert();
    };
  }, []);

  return (
    <section
      id="welcome"
      className="w-full min-h-screen flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-20"
    >
      <p
        ref={subtitleRef}
        className="font-georama text-[clamp(1rem,1vw,1.875rem)] mb-4"
      >
        Hey, I'm Areeb! Welcome to my
      </p>

      <h1
        ref={titleRef}
        className="font-georama italic leading-none tracking-tight text-[clamp(3.5rem,7vw,9rem)]"
      >
        Portfolio
      </h1>

      <div className="mt-8 lg:hidden">
        <p className="text-sm text-gray-400">
          This Portfolio is designed for desktop/tablet screen only.
        </p>
      </div>
    </section>
  );
};

export default Welcome;