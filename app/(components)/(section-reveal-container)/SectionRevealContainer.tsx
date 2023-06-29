"use client"
import { useEffect } from "react";

export function SectionRevealContainer({children}: any){
    useEffect(() => {
        const reveal = () => {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 150;
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
          }
        window.addEventListener("scroll", reveal)
        reveal()
        return () => {
          window.removeEventListener("scroll", reveal)
        }
    }, [])
    return <>
        {children}
    </>
}