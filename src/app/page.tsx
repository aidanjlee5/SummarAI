"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import { getSummarizedArticlesFromTopics } from '@/lib/actions/database'
import TopicView from "@/components/topic-view"

export default function Home() {

  const [topics] = useState<Topics>({
    'Politics': [210, 174],
    'Sports': [238,240],
    'Health': [165,199],
    'Tech': [243, 244]
  })

  const [data, setData] = useState<SummarizedArticlesByTopic>({});

  useEffect(() => {
    async function fetchData() {
      const res = await getSummarizedArticlesFromTopics(topics);
      setData(res);
    }
    fetchData();
  }, []);

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

      <TopicView topic="Politics" summarizedArticles={data['Politics'] || []} />

      <div className="w-full">
        <div className="grid w-full grid-cols-4">
          <div className="flex w-full h-full col-span-1">
              <div className='w-full ml-8 flex flex-col mt-24' style={{ width: '60%' }}>
                <div className='flex flex-col gap-y-2'>
                  
                </div>
              </div>
            <a href="/settings" className="fixed bottom-0 left-0 p-4">
              <FontAwesomeIcon icon={faGear} color='#000000' width='70' className='size-8 fixed top-3 right-3 p-4 hover:animate-spin-slow'/>
            </a>
          </div>
        </div>
        <div className='bg-gradient-to-b from-yellow-200 to-white h-[1200px] w-full justify-end'></div>

        <TopicView topic="Sports" summarizedArticles={data['Sports'] || []} />

        <div className='bg-gradient-to-b from-yellow-200 to-white h-[1200px] w-full justify-end'></div>

        <TopicView topic="Health" summarizedArticles={data['Health'] || []} />

        <div className='bg-gradient-to-b from-yellow-200 to-white h-[1200px] w-full justify-end'></div>

        <TopicView topic="Tech" summarizedArticles={data['Tech'] || []} />

        </div>
      </div>
    </div>
  );
}
