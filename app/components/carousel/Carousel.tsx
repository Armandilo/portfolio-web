"use client"
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './carousel.css'
import { useEffect, useRef } from 'react'


type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {

  const { slides, options } = props;
  const autoplayRef = useRef(Autoplay({ delay: 5000, stopOnInteraction: false })); 
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplayRef.current]); 
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (emblaApi && autoplayRef.current) {
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            autoplayRef.current.play(); // Start autoplay when in view
          } else {
            autoplayRef.current.stop(); // Stop autoplay when out of view
          }
        });

        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
      }
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [emblaApi]);

  return (
    <section className="embla" ref={sectionRef}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img className="embla__slide__img opacity-90" src={`./ss${index}.png`} alt="" />
            </div>
          ))}
        </div>
      </div>
 
    </section>
  )
}

export default Carousel