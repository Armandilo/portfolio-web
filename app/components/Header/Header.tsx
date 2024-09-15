'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { FiGithub } from "react-icons/fi";
import { TbBrandLinktree } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";





const navigation = [
  { name: 'Skill', href: '#' },
  { name: 'Highlight', href: '#' },
  { name: 'Repo', href: '#' },
  { name: 'Contact', href: '#' },
]


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  

  return (
    <div className="">
      <header className="sm:absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-16">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex flex-row gap-1">
              <span className="sr-only">Muhammad Armand</span>
              <img
                alt=""
                src="./logo.png"
                className="h-8 w-auto"
              />
              
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end flex-row gap-4">
            <a href="" className='text-white hover:text-gray-500'><FiGithub size={22}/></a>
            <a href="" className='text-white hover:text-gray-500'><FiLinkedin size={22}/></a>
            <a href="" className='text-white hover:text-gray-500'><TbBrandLinktree size={22}/></a>
            
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex flex-row gap-1">
                <span className="sr-only">Muhammad Armand</span>
                <img
                  alt=""
                  src="./logo.png"
                  className="h-8 w-auto"
                />
                
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-950"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-6 lg:px-8">
      
        <div className="mx-auto max-w-2xl py-24 lg:py-44 2xl:py-64">    
          <div className='hidden sm:mb-6 sm:flex sm:justify-center'>
            <div className='inline-flex'>
              <span className='relative inline-block overflow-hidden rounded-full p-[1px]'>
                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]'></span>
                <div className='inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-lg font-medium leading-6 text-slate-600 backdrop-blur-xl dark:bg-gray-950 dark:text-slate-200'>
                  Fresh Grad Software Engineer 💻&nbsp;&nbsp;{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                 My skills <span aria-hidden="true">&rarr;</span>
                </a>
                </div>
              </span>
            </div>

          </div>

          <div className="text-center">
            <div className='flex items-center justify-center pb-6 pt-4'>
              <div className="w-max">
              <h1 className="animate-typing w-[max-content] overflow-hidden whitespace-nowrap border-r-4 pr-1 border-r-white text-4xl font-bold tracking-tight text-white sm:text-7xl sm:pb-2 ">
                <span className='text-3xl sm:text-7xl text-indigo-700'>{'</'}</span>Muhd Armand<span className='text-3xl sm:text-7xl text-indigo-700'>{'>'}</span>
              </h1>
              </div>
            </div>
            
            <p className="mt-4 text-sm sm:text-xl leading-6 text-white-600">
            Fresh out of uni 🎓, turning ideas into sleek apps 💻. 
            <br />
            <span>
            Looking for exciting job opportunities 👀
            </span>
            
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-700 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Resume
              </a>
              <a href="#" className="text-lg font-semibold leading-6 text-white-900">
                Contact me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  )
}
