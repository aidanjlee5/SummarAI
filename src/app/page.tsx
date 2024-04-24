
"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
//import ReactFullpage from '@fullpage/react-fullpage';
//import useScrollSnap from "react-use-scroll-snap";

export default function Home() {
  return (
    <div>
      <div className='fixed w-[20%] p-5'>
        <img src='./SummarAILogo.svg' alt='SummarAI Logo' className='object-contain h-10 w-full size-10/12 mb-6' />
        <div className='flex flex-col gap-y-2'>
          <div className='rounded-lg bg-yellow-200 py-4 mb-2 px-4 text-xl'>For You</div>
          <p className='text-lg pl-2'><b>Glencore's</b> emissions rose ~9% in 2023</p>
          <p className='text-lg pl-2'><b>Glencore's</b> emissions rose ~9% in 2023</p>
          <p className='text-lg pl-2'><b>Glencore's</b> emissions rose ~9% in 2023</p>
          <p className='text-lg pl-2'><b>Glencore's</b> emissions rose ~9% in 2023</p>
        </div>
        <div className='flex flex-col gap-y-2 mt-8'>
          <div className='rounded-lg bg-yellow-200 mb-2 py-4 px-4 text-xl'>Trending Global</div>
          <p className='text-lg pl-2'><b>Glencore's</b> emissions rose ~9% in 2023</p>
          <p className='text-lg pl-2'><b>Glencore's</b> emissions rose ~9% in 2023</p>
          <p className='text-lg pl-2'><b>Glencore's</b> emissions rose ~9% in 2023</p>
          <p className='text-lg pl-2'><b>Glencore's</b> emissions rose ~9% in 2023</p>
         </div>
      </div>
      <div className="w-4/5 mr-0 ml-[20%] justify-end snap-y snap-mandatory h-screen overflow-x-hidden relative">
        <div className="snap-center h-screen w-screen flex flex-col">
          <div className='flex flex-1 mt-20 flex-col gap-y-8 pr-48 w-[85%]'>
            <div className="bg-yellow-200 w-[20%] py-4 px-10 rounded-t-lg text-xl">Focused Topic</div>
            <section>
              <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
              <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
            </section>
            <section>
              <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
              <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
            </section>
            <section>
              <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
              <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
            </section>
            <section>
              <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
              <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
            </section>
          </div>
          <div className="flex flex-col">
            <div className='flex pl-8 gap-x-8'>
              <div className="bg-yellow-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
              <div className="bg-blue-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
              <div className="bg-red-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
              <div className="bg-orange-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
              <div className="bg-purple-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
            </div>
            <div className='h-16 bg-yellow-200'></div>
          </div>
        </div>
      <div className="w-full">
        <div className="grid w-full grid-cols-4">
          <div className="flex w-full h-full col-span-1">
            <a href="/settings" className="fixed bottom-0 left-0 p-4">
              <FontAwesomeIcon icon={faGear} color='#000000' className='hover:animate-spin-slow size-10 fixed top-3 right-3 p-4'/>
            </a>
          </div>
        </div>
        <div className='bg-gradient-to-b from-yellow-200 to-white h-[1200px] w-full justify-end'></div>
        <div className="snap-center h-screen w-screen flex justify-end" style={{ flexDirection: "column"}}>
          <div className='flex flex-1 mt-20 flex-col gap-y-8 pr-48 w-[85%]'>
              <div className="bg-yellow-200 w-[20%] py-4 px-10 rounded-t-lg text-xl">Focused Topic</div>
              <section>
                <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
                <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
              </section>
              <section>
                <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
                <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
              </section>
              <section>
                <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
                <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
              </section>
              <section>
                <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
                <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
              </section>
            </div>
            <div className="flex flex-col">
              <div className='flex pl-8 gap-x-8'>
                <div className="bg-yellow-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
                <div className="bg-blue-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
                <div className="bg-red-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
                <div className="bg-orange-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
              </div>
              <div className='h-16 bg-yellow-200'></div>
            </div>
        </div>
        <div className='bg-gradient-to-b from-yellow-200 to-white h-[1200px] w-full justify-end'></div>
        <div className="snap-center h-screen w-screen flex justify-end" style={{ flexDirection: "column"}}>
          <div className='flex flex-1 mt-20 flex-col gap-y-8 pr-48 w-[85%]'>
              <div className="bg-yellow-200 w-[20%] py-4 px-10 rounded-t-lg text-xl">Focused Topic</div>
              <section>
                <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
                <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
              </section>
              <section>
                <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
                <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
              </section>
              <section>
                <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
                <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
              </section>
              <section>
                <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
                <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
              </section>
            </div>
            <div className="flex flex-col">
              <div className='flex pl-8 gap-x-8'>
                <div className="bg-yellow-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
                <div className="bg-blue-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
                <div className="bg-red-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
              </div>
              <div className='h-16 bg-yellow-200'></div>
            </div>
          </div>
          <div className='bg-gradient-to-b from-yellow-200 to-white h-[1200px] w-full justify-end'></div>
          <div className="snap-center h-screen w-screen flex flex-col">
            <div className='flex flex-col w-[85%] items-center justify-center h-screen'>
              <Image 
                src="/check.png" 
                alt="Check Image" 
                width={250} 
                height={250} 
              />
              <p className='text-2xl text-center pt-8'>You’ve finished your brief for the day. <br/>Check back tomorrow for more info or <a href='#' className='underline'>restart.</a></p>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
}
