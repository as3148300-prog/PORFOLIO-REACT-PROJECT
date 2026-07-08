import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
}

const renderText = (text, className, Baseweight = 400) => {
  return [...text].map((char, i) => {
    return (
      <span
        key={i}
        className={className}
        style={{
          fontVariationSettings: `"wght" ${Baseweight}`,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    )
  })
}

// har letter ko animate karne wala helper
const animateLetter = (letter, weight, duration = 0.25) => {
  return gsap.to(letter, {
    duration,
    ease: "power2.out",
    fontVariationSettings: `"wght" ${weight}`,
  })
}

const setupTextHover = (container, type) => {
  if (!container) return

  const letters = container.querySelectorAll("span") // sirf container ke andar ke spans
  const { min, max, default: base } = FONT_WEIGHTS[type]

  letters.forEach((letter) => {
    letter.addEventListener("mouseenter", () => {
      animateLetter(letter, max)
    })
    letter.addEventListener("mouseleave", () => {
      animateLetter(letter, base)
    })
  })
}

const Welcome = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    setupTextHover(subtitleRef.current, "subtitle")
    setupTextHover(titleRef.current, "title")
  }, [])

  return (
    <section id="welcome">
      <p className='ml-20' ref={subtitleRef}>
        {renderText(" Hey,I'am Areeb! Welcome to my", "text-3xl font-georama", 100)}
      </p>
      <h1 ref={titleRef}>
        {renderText("   Portfolio", "text-[150px] italic font-georama")}
      </h1>
      <div className='small-screen'>
        <p>this Portfolio is designed for desktop/tablet screen only.</p>
      </div>
    </section>
  )
}

export default Welcome