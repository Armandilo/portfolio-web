'use client'
import React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import {EmblaOptionsType} from 'embla-carousel';
import Carousel from '../carousel/Carousel';
import { BiSolidAward } from "react-icons/bi";
import { useRef } from 'react';
import { useEffect } from 'react';
import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import Wave from '../../../public/wave.json';
import {motion} from 'framer-motion';
const features = [
  {
    name: 'PIXEL Gold Award : ',
    description:
      'recognized by industry experts, this project earned the top honor at USM PIXEL 2024 for innovation and impact.',
    icon: CloudArrowUpIcon,
  },

]

const revfadeInAnimationVariants = {
  initial: {
    opacity:0,
    x: -50
  },
  animate: {
    opacity:1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  }
}

const fadeInAnimationVariants = {
  initial: {
    opacity:0,
    x: 50
  },
  animate: {
    opacity:1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  }
}

const OPTIONS: EmblaOptionsType ={}
const SLIDE_COUNT =8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Highlight = () => {
  const waveRef = useRef<LottieRefCurrentProps>(null);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          entry.target.classList.add('animate-typingonce1', 'w-[max-content]', 'overflow-hidden', 'whitespace-nowrap', 'border-r-4', 'pr-1' ,'border-r-white');
          hasAnimated.current = true;
        } else {
          entry.target.classList.remove('animate-typingonce1', 'w-[max-content]', 'overflow-hidden', 'whitespace-nowrap', 'border-r-4', 'pr-1' ,'border-r-white');
          if(hasAnimated.current) {
            entry.target.classList.add('animate-blink', 'w-[max-content]', 'overflow-hidden', 'whitespace-nowrap', 'border-r-4', 'pr-1' ,'border-r-white');
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if(elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if(elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  },[]);

  return (
    <div className="relative px-2 lg:px-18 overflow-hidden py-24 sm:py-34 isolate lg:h-screen">
      <Lottie onDOMLoaded={()=>{waveRef.current?.setSpeed(0.5)}} lottieRef={waveRef} animationData={Wave} className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-[-1] opacity-5" />
      <div className="mx-auto max-w-7xl px-6 lg:px-0 sm:py-0 md:py-0 lg:py-8 2xl:py-24">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div variants={revfadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once:true, amount: 0.5}} className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
              <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start'>
                <h2 className="text-xs sm:text-base font-semibold leading-7 text-indigo-300">Final Year Project Web Application</h2>
                <div className='w-max'>
                  <p ref={elementRef} className="animate-typingonce1 w-[max-content] overflow-hidden whitespace-nowrap border-r-4 pr-1 border-r-white mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl tracking-wide"><span className='text-3xl sm:text-4xl text-indigo-500'>{'</'}</span>usm<span className='text-[#FF7600]'>talent</span>.<span className='text-3xl sm:text-4xl text-indigo-500'>{'>'}</span></p>
                </div>
                <p className="mt-4 text-sm sm:text-xl sm:leading-8 leading-2 text-gray-200 text-center sm:text-start">
                A platform that brings students and staff together for seamless skill-sharing, fostering collaboration and growth across the USM campus.
                </p>

                <dl className="mt-6 max-w-xl space-y-8 text-sm sm:text-base sm:leading-7 leading-2 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative text-center sm:text-start">
                      <dt className="inline font-semibold text-indigo-300">
                        
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline text-gray-300">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              

              <div className='flex gap-1 flex-row sm:justify-start justify-center flex-wrap mt-8'>
                <span className='text-sm font-extralight px-1 py-1'>Stack {'</>'} </span>
                <div className='flex gap-1 flex-wrap justify-center sm:justify-start'>
                  <span className=" border border-indigo-400 rounded-full px-3 py-1 text-xs bg-clip-padding backdrop-filter backdrop-blur-sm font-extralight text-gray-200">ViteJs</span>
                  <span className=" border border-indigo-400 rounded-full px-3 py-1 text-xs bg-clip-padding backdrop-filter backdrop-blur-sm font-extralight text-gray-200">Javascript</span>
                  <span className=" border border-indigo-400 rounded-full px-3 py-1 text-xs bg-clip-padding backdrop-filter backdrop-blur-sm font-extralight text-gray-200">Sass</span>
                  <span className=" border border-indigo-400 rounded-full px-3 py-1 text-xs bg-clip-padding backdrop-filter backdrop-blur-sm font-extralight text-gray-200">ExpressJs</span>
                  <span className=" border border-indigo-400 rounded-full px-3 py-1 text-xs bg-clip-padding backdrop-filter backdrop-blur-sm font-extralight text-gray-200">MongoDB</span>

                </div>
                
              </div>

              <div className="mt-10 flex justify-center sm:justify-start items-center gap-x-6">
                <a
                  href="https://github.com/Armandilo/usmtalent-app"
                  target='_blank'
                  rel='noopener noreferrer'
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5  text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  🔗 Repo
                </a>
               
                <a href="https://pixelusm.com/projects/id/U2FsdGVkX193LJHtp1L2u3SeWWsrip1L2u3SB7HtJkUXAcr9RcEvw37HuT6BjnxrTfulVKEla5lS" target='_blank' rel='noopener noreferrer' className="text-base font-semibold leading-6 text-white-900">
                💻 Demo Video <span aria-hidden="true" className='hidden sm:visible'>→</span>
                </a>
            </div>
            </div>
          </motion.div>
            <motion.div variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once:true, amount: 0.5}} className='md:mt-0 lg:mt-6'>
              <Carousel slides={SLIDES} options={OPTIONS} />
            </motion.div>
                
              
          
        </div>
      </div>
    </div>
  )
}

export default Highlight