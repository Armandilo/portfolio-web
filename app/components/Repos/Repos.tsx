'use client'
import React from 'react'
import { FaCode } from "react-icons/fa6";
import { SiFramework } from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { LuArrowUpRight } from "react-icons/lu";
import { useRef } from 'react';
import { useEffect } from 'react';



const Repos = () => {
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
    <div className='relative isolate px-6 lg:px-8 bg-[#04091f] lg:h-screen bg-opacity-50 overflow-hidden'>
              <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-100 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>  
      <div className='mx-auto max-w-7xl sm:py-0 lg:py-24 2xl:py-48 flex flex-wrap gap-4 justify-center items-center'>
        <div className="mx-auto max-w-screen-md flex flex-col justify-center items-center text-center mb-0 lg:mb-4">
            <div className="w-max">
              <h2 ref={elementRef} className="animate-typingonce1 w-[max-content] overflow-hidden whitespace-nowrap border-r-4 pr-1 border-r-white mb-4 text-xl sm:text-4xl mt-8 sm:mt-0 tracking-tight font-extrabold text-gray-900 dark:text-white"><span className='text-xl sm:text-4xl font-extrabold text-indigo-700'>{'</'}</span>Code in Action<span className='text-xl sm:text-4xl text-indigo-700 font-extrabold'>{'>'}</span></h2>
            </div>
            <p className="mb-5 text-sm font-light text-white-600 sm:text-xl">Check out collection of projects where ideas meet execution—each one a step in my coding journey!</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-1 md:grid-rows-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full'>
          {/* Repo 1 */}
          <div className='group relative h-full w-full flex bg-gray-500 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800 transform transition-transform duration-400 hover:scale-[1.02] lg:hover:scale-[1.02] cursor-pointer'>
              <div className='flex flex-col'>
                <div className='flex flex-row gap-2 justif-center items-center'>
                    <span className='text-lg'>🔗 usmtalent-app</span>
                    <div className='flex flex-wrap gap-1 sm:justify-start justify-center'>
                      <span className=" border flex items-center px-2 h-min justify-center rounded-full text-[10px] font-extralight text-gray-200">ViteJs</span>
                      <span className=" border flex items-center px-2 h-min justify-center rounded-full text-[10px] font-extralight text-gray-200">ExpressJs</span>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='text-sm font-lighter text-gray-400'>A platform that brings students and staff together for seamless skill-sharing across the USM campus.</span>
                    <div className='flex flex-row items-end justify-end'>
                      <span className='text-xs text-gray-400 font-lighter opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500'>web</span>
                    </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 text-gray-700 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                <LuArrowUpRight size={26} />
              </div>
          </div>
          {/* Repo 1 */}

          {/* Repo 2 */}
          <div className='group relative h-full w-full flex bg-gray-500 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800 transform transition-transform duration-400 hover:scale-[1.02] lg:hover:scale-[1.02] cursor-pointer'>
              <div className='flex flex-col'>
                <div className='flex flex-row gap-2 justif-center items-center'>
                    <span className='text-lg'>🔗 django-event</span>
                    <div className='flex flex-wrap gap-1 sm:justify-start justify-center'>
                      <span className=" border flex items-center px-2 h-min justify-center rounded-full text-[10px] font-extralight text-gray-200">Django</span>
                      <span className=" border flex items-center px-2 h-min justify-center rounded-full text-[10px] font-extralight text-gray-200">PostgreSQL</span>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='text-sm font-lighter text-gray-400'>backend for a platform that centralize event management across Malaysia.</span>
                    <div className='flex flex-row items-end justify-end'>
                      <span className='text-xs text-gray-400 font-lighter opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500'>web</span>
                    </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 text-gray-700 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                <LuArrowUpRight size={26} />
              </div>
          </div>
          {/* Repo 2 */}

          {/* Repo 3 */}
          <div className='group relative h-full w-full flex bg-gray-500 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800 transform transition-transform duration-400 hover:scale-[1.02] lg:hover:scale-[1.02] cursor-pointer'>
              <div className='flex flex-col'>
                <div className='flex flex-row gap-2 justif-center items-center'>
                    <span className='text-lg'>🔗 nextjs-event</span>
                    <div className='flex flex-wrap gap-1 sm:justify-start justify-center'>
                      <span className=" border flex items-center px-2 h-min justify-center rounded-full text-[10px] font-extralight text-gray-200">NextJs</span>
                      <span className=" border flex items-center px-2 h-min justify-center rounded-full text-[10px] font-extralight text-gray-200">Tailwind CSS</span>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='text-sm font-lighter text-gray-400'>frontend for a platform that centralize event management across Malaysia.</span>
                    <div className='flex flex-row items-end justify-end'>
                      <span className='text-xs text-gray-400 font-lighter opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500'>web</span>
                    </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 text-gray-700 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                <LuArrowUpRight size={26} />
              </div>
          </div>
          {/* Repo 3 */}

          {/* Repo 4 */}
          <div className='group relative h-full w-full flex bg-gray-500 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800 transform transition-transform duration-400 hover:scale-[1.02] lg:hover:scale-[1.02] cursor-pointer'>
              <div className='flex flex-col'>
                <div className='flex flex-row gap-2 justif-center items-center'>
                    <span className='text-lg'>🔗 bah-app</span>
                    <div className='flex flex-wrap gap-1 sm:justify-start justify-center'>
                      <span className=" border flex items-center px-2 h-min justify-center rounded-full text-[10px] font-extralight text-gray-200">Flutter</span>
                      <span className=" border flex items-center px-2 h-min justify-center rounded-full text-[10px] font-extralight text-gray-200">Firebase</span>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='text-sm font-lighter text-gray-400'>A cross-platform mobile application for flood disaster management in Malaysia.</span>
                    <div className='flex flex-row items-end justify-end'>
                      <span className='text-xs text-gray-400 font-lighter opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500'>mobile</span>
                    </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 text-gray-700 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                <LuArrowUpRight size={26} />
              </div>
          </div>
          {/* Repo 4 */}

          {/* Repo 5 */}
          <div className='group relative h-full w-full flex bg-gray-500 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800 transform transition-transform duration-400 hover:scale-[1.02] lg:hover:scale-[1.02] cursor-pointer'>
              <div className='flex flex-col'>
                <div className='flex flex-row gap-2 justif-center items-center'>
                    <span className='text-lg'>🔗 dailydose-app</span>
                    <div className='flex flex-wrap gap-1 sm:justify-start justify-center'>
                      <span className=" border flex items-center px-2 h-min justify-center rounded-full text-[10px] font-extralight text-gray-200">NextJs</span>
                      <span className=" border flex items-center px-2 h-min justify-center rounded-full text-[10px] font-extralight text-gray-200">MongoDB</span>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='text-sm font-lighter text-gray-400'>daily dose's restaurant online food ordering web application.</span>
                    <div className='flex flex-row items-end justify-end'>
                      <span className='text-xs text-gray-400 font-lighter opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500'>web</span>
                    </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 text-gray-700 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                <LuArrowUpRight size={26} />
              </div>
          </div>
          {/* Repo 5 */}

          {/* Repo 6 */}
          <div className='group relative h-full w-full flex bg-gray-500 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800 transform transition-transform duration-400 hover:scale-[1.02] lg:hover:scale-[1.02] cursor-pointer'>
              <div className='flex flex-col'>
                <div className='flex flex-row gap-2 justif-center items-center'>
                    <span className='text-lg'>🔗 cinema-app</span>
                    <div className='flex flex-wrap gap-1 sm:justify-start justify-center'>
                      <span className=" border flex items-center px-2 h-min justify-center rounded-full text-[10px] font-extralight text-gray-200">Java</span>
                      <span className=" border flex items-center px-2 h-min justify-center rounded-full text-[10px] font-extralight text-gray-200">Firebase</span>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='text-sm font-lighter text-gray-400'>java android mobile application for cinema ticket booking system.</span>
                    <div className='flex flex-row items-end justify-end'>
                      <span className='text-xs text-gray-400 font-lighter opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500'>mobile</span>
                    </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 text-gray-700 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                <LuArrowUpRight size={26} />
              </div>
          </div>
          {/* Repo 6 */}

          

        </div>

        <h1 className='mb-6 lg:mt-14 xl:mt-24'>View more on my <a href="" className='font-semibold hover:text-gray-300'>Github Profile</a></h1>
    
            
     
      </div>
      <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> 
    </div>
  )
}

export default Repos