'use client'
import React from 'react'
import { FaCode } from "react-icons/fa6";
import { SiFramework } from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { useEffect } from 'react';
import { useRef } from 'react';

import Particles from "../../../public/particles.json";
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const revfadeInAnimationVariants = {
  initial: {
    opacity:0,
    y: -50
  },
  animate: {
    opacity:1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  }
}

const scaleAnimationVariants = {
  initial: {
    opacity:0,
    scale: 0.9
  },
  animate: {
    opacity:1,
    scale: 1,
    transition: {
      duration: 1,
    },
  }
}

const fade1 = {
  initial: {
    opacity:0,
    y: 50
  },
  animate: {
    opacity:1,
    y: 0,
    transition: {
      delay: 0.0,
      duration: 0.5,
      

    },
  }
  
}
const fade2 = {
  initial: {
    opacity:0,
    y: 50
  },
  animate: {
    opacity:1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,

    },
  }

}

const fade3 = {
  initial: {
    opacity:0,
    y: 50
  },
  animate: {
    opacity:1,
    y: 0,
    transition: {
      delay: 1,
      duration:0.5,

    },
  }
}

const fade4 = {
  initial: {
    opacity:0,
    y: 50
  },
  animate: {
    opacity:1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.5,
      

    },
  }
  
}


    




const Skills = () => {
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          entry.target.classList.add('animate-typingonce', 'w-[max-content]', 'overflow-hidden', 'whitespace-nowrap', 'border-r-4', 'pr-1' ,'border-r-white');
          hasAnimated.current = true;
        } else {
          entry.target.classList.remove('animate-typingonce', 'w-[max-content]', 'overflow-hidden', 'whitespace-nowrap', 'border-r-4', 'pr-1' ,'border-r-white');
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
    <div className='relative isolate px-6  lg:px-8 bg-[#04091f] h-max py-10 sm:py-0 lg:h-screen bg-opacity-50 overflow-hidden'>
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
        <Lottie animationData={Particles} className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-[-1] opacity-30" />  
      <div className='mx-auto max-w-7xl sm:py-0 lg:py-24 2xl:py-48 flex flex-wrap gap-4 justify-center items-center'>
        <motion.div variants={revfadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once:true, amount: 0.5}} className="mx-auto max-w-screen-md flex flex-col justify-center items-center text-center mb-0 lg:mb-2">
          <div className='w-max'>
            <h2 ref={elementRef} className="animate-typingonce w-[max-content] overflow-hidden whitespace-nowrap border-r-4 pr-1 border-r-white mb-4 text-2xl sm:text-4xl mt-8 sm:mt-0 tracking-tight font-extrabold text-gray-900 dark:text-white"><span className='text-xl sm:text-4xl font-extrabold text-indigo-700'>{'</'}</span>Crafting Apps with Precision<span className='text-xl sm:text-4xl text-indigo-700 font-extrabold'>{'>'}</span></h2>
          </div> 
            <p className="mb-2 text-sm font-light text-white-600 sm:text-xl">From front-end magic 🎨 to back-end logic ⚙️, I bring a full toolkit of skills to craft high-performing modern applications</p>
        </motion.div>
        <motion.div variants={fade1} initial="initial" whileInView="animate" viewport={{once:true, amount: isLargeScreen ? 0.5 : 0}} className='h-full w-full mx-auto bg-gray-500 p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800'>
         
              <div className='flex flex-col sm:flex-row justify-center items-center'>
                <div className='flex flex-row gap-2 items-center sm:border-r border-gray-500 px-14 sm:ml-[-50px]'>
                  <span><FaCode size={30} className='text-indigo-700'/></span>
                  <h2 className='text-xl sm:text-2xl font-semibold tracking-wider'>Languages</h2>
                </div>
                  <div className='grid grid-cols-3 justify-center items-center mt-4 sm:mt-0 sm:flex sm:flex-wrap gap-2 sm:gap-8 px-0 sm:px-12 ml-[15px]'>
                    
                    <div className='lg:tooltip' data-tip="Javascript"><img src="./js.png" alt="" className='w-auto h-10 sm:h-12'/></div>
                    <div className='lg:tooltip' data-tip="Typescript"><img src="./ts.svg" alt="" className='w-auto h-10 sm:h-12'/></div>
                    <div className='lg:tooltip' data-tip="Java"><img src="./java.webp" alt="" className='w-auto h-10 sm:h-12'/></div>
                    <div className='lg:tooltip' data-tip="Python"><img src="./py.webp" alt="" className='w-auto h-10 sm:h-12'/></div>
                    <div className='lg:tooltip' data-tip="C++"><img src="./c.png" alt="" className='w-auto h-10 sm:h-12' /></div>
                    <div className='lg:tooltip' data-tip="HTML5"><img src="./html.png" alt="" className='w-auto h-10 sm:h-12' /></div>
                    <div className='lg:tooltip' data-tip="CSS"><img src="./css.png" alt="" className='w-auto h-10 sm:h-12' /></div>
                    <div className='lg:tooltip' data-tip="Dart"><img src="./dart.png" alt="" className='w-auto h-10 sm:h-12' /></div>
                    <div className='lg:tooltip' data-tip="Php"><img src="./php.svg" alt="" className='w-auto h-8 sm:h-12' /></div>
                    
                  </div>
              </div>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-1 mb-10 sm:grid-rows-3 md:grid-cols-1 md:grid-rows-3 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full'>
          <motion.div variants={fade2} initial="initial" whileInView="animate" viewport={{once:true, amount: isLargeScreen ? 0.5 : 0}} className='h-full w-full flex justify-center bg-gray-500 p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800'>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-row gap-2 items-center ml-[0px]'>
                  <span><SiFramework size={30} className='text-indigo-700'/></span>
                  <h2 className='text-xl sm:text-2xl font-semibold tracking-wider'>Frameworks</h2>
                </div>

                <div className='grid grid-cols-3 justify-center items-center mt-4 sm:mt-4 sm:flex sm:flex-wrap gap-6 sm:px-12 sm:gap-8 px-0 ml-[15px]'>
                  <div className='lg:tooltip lg:tooltip-bottom' data-tip="ReactJS/React Native"><img src="./react.webp" alt="" className='w-auto h-10 sm:h-12'/></div>
                  <div className='lg:tooltip lg:tooltip-bottom' data-tip="NodeJS + ExpressJS"><img src="./node.png" alt="" className='w-auto h-10 sm:h-12'/></div>
                  <div className='lg:tooltip lg:tooltip-bottom' data-tip="NextJS"><img src="./next.png" alt="" className='w-auto h-10 sm:h-12'/></div>
                  <div className='lg:tooltip' data-tip="Tailwind CSS"><img src="./tailwind.svg" alt="" className='w-auto h-10 sm:h-12'/></div>
                  <div className='lg:tooltip' data-tip="Django"><img src="./django.png" alt="" className='w-auto h-10 sm:h-12' /></div>
                  <div className='lg:tooltip' data-tip="Flutter"><img src="./flutter.svg" alt="" className='w-auto h-10 sm:h-12' /></div>
                  </div>
              </div>
          </motion.div>
          <motion.div variants={fade3} initial="initial" whileInView="animate" viewport={{once:true, amount: isLargeScreen ? 0.5 : 0}} className='h-full w-full flex justify-center bg-gray-500 p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800'>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-row gap-2 items-center ml-[0px]'>
                  <span><AiFillDatabase size={30} className='text-indigo-700'/></span>
                  <h2 className='text-xl sm:text-2xl font-semibold tracking-wider'>Databases</h2>
                </div>

                <div className='grid grid-cols-3 justify-center items-center mt-4 sm:mt-4 sm:flex sm:flex-wrap gap-6 sm:px-12 sm:gap-8 px-0 ml-[15px]'>
                  <div className='lg:tooltip lg:tooltip-bottom' data-tip="MongoDB"><img src="./mongodb.png" alt="" className='w-auto h-10 sm:h-12'/></div>
                  <div className='lg:tooltip lg:tooltip-bottom' data-tip="PostgreSQL"><img src="./postgre.png" alt="" className='w-auto h-10 sm:h-12'/></div>
                  <div className='lg:tooltip lg:tooltip-bottom' data-tip="Firebase"><img src="./firebase.svg" alt="" className='w-auto h-10 sm:h-12'/></div>
                  <div className='lg:tooltip' data-tip="MySQL"><img src="./mysql.png" alt="" className='w-auto h-10 sm:h-12'/></div>
                  <div className='lg:tooltip' data-tip="Oracle Express"><img src="./oracle.png" alt="" className='w-auto h-10 sm:h-12' /></div>
                  <div className='lg:tooltip' data-tip="Supabase"><img src="./supabase.png" alt="" className='w-auto h-10 sm:h-12' /></div>
                  </div>
              </div>
          </motion.div>
          <motion.div variants={fade4} initial="initial" whileInView="animate" viewport={{once:true, amount: isLargeScreen ? 0.5 : 0}} className='h-full w-full flex justify-center bg-gray-500 p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800'>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-row gap-2 items-center ml-[0px]'>
                  <span><FaTools size={30} className='text-indigo-700'/></span>
                  <h2 className='text-xl sm:text-2xl font-semibold tracking-wider'>Tools</h2>
                </div>

                <div className='grid grid-cols-3 justify-center items-center mt-4 sm:mt-4 sm:flex sm:flex-wrap gap-6 sm:px-12 sm:gap-8 px-0 ml-[15px]'>
                  <div className='lg:tooltip lg:tooltip-bottom' data-tip="Git"><img src="./git.png" alt="" className='w-auto h-10 sm:h-12'/></div>
                  <div className='lg:tooltip lg:tooltip-bottom' data-tip="GitHub"><img src="./github.svg" alt="" className='w-auto h-10 sm:h-12'/></div>
                  <div className='lg:tooltip lg:tooltip-bottom' data-tip="Docker"><img src="./docker.webp" alt="" className='w-auto h-10 sm:h-12'/></div>
                  <div className='lg:tooltip' data-tip="npm"><img src="./npm.png" alt="" className='w-auto h-10 sm:h-12'/></div>
                  <div className='lg:tooltip' data-tip="Android Studio"><img src="./android.png" alt="" className='w-auto h-10 sm:h-12' /></div>
                  <div className='lg:tooltip' data-tip="ViteJS"><img src="./vite.svg" alt="" className='w-auto h-10 sm:h-12' /></div>
                  </div>
              </div>
          </motion.div>

        </div>

     
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

export default Skills