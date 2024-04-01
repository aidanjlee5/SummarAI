import Image from 'next/image'

export default function Home() {
  return (
      <body className="w-full">
        <div className="grid w-full grid-cols-4">
          <div className="flex w-full h-full col-span-1">
            <div className="font-petrona italic fixed top-0 left-0 p-8 text-5xl">SummarAI</div>
            <div className='w-full ml-8 flex flex-col mt-32' style={{ width: '60%' }}>
              <div className='flex flex-col gap-y-2'>
                <div className='rounded-lg bg-yellow-200 py-4 mb-2 px-4 text-xl'>For You</div>
                <p className='text-lg '><b>Glencore's</b> emissions rose ~9% in 2023</p>
                <p className='text-lg '><b>Glencore's</b> emissions rose ~9% in 2023</p>
                <p className='text-lg '><b>Glencore's</b> emissions rose ~9% in 2023</p>
                <p className='text-lg '><b>Glencore's</b> emissions rose ~9% in 2023</p>
              </div>
              <div className='flex flex-col gap-y-2 mt-8'>
                <div className='rounded-lg bg-yellow-200 mb-2 py-4 px-4 text-xl'>Trending Global</div>
                <p className='text-lg '><b>Glencore's</b> emissions rose ~9% in 2023</p>
                <p className='text-lg '><b>Glencore's</b> emissions rose ~9% in 2023</p>
                <p className='text-lg '><b>Glencore's</b> emissions rose ~9% in 2023</p>
                <p className='text-lg '><b>Glencore's</b> emissions rose ~9% in 2023</p>
              </div>
            </div>
            <a href="/settings" className="fixed bottom-0 left-0 p-4">
              <div className="fixed top-0 right-0 p-4">
                <Image 
                    alt="settings icon"
                    src='/settings.png'
                    width={75}
                    height={75}
                  />
              </div>
            </a>
          </div>
          <div className="flex w-full h-full col-span-3">
            <div className='flex flex-col'>
              <div className="fixed mt-32 bg-yellow-200 py-4 px-10 rounded-t-lg text-xl">Focused Topic</div> 
              <div className='flex flex-col gap-y-8 mt-56 pr-48'>
                <section>
                  <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
                  <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
                </section>
                <section>
                  <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
                  <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
                </section>
                <section>
                  <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
                  <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
                </section>
                <section>
                  <h1 className='text-2xl font-bold'>Why you should rent, even if you’re ‘rich’</h1>
                  <p className='mt-2 text-lg'>Well, according to the host of Netflix’s “How To Get Rich” and the very dude who founded this newsletter, the answer in an economy this ugly is to rent without remorse (and invest). Hear Ramit’s napkin math and Sam’s tips for home hunters on our top-ranked podcast, My First Million.</p>
                </section>
              </div>
            </div>
            <div className="fixed bottom-0 w-full">
              <div className="flex pl-8 gap-x-8">
                <div className="bg-yellow-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
                <div className="bg-blue-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
                <div className="bg-red-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
                <div className="bg-orange-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
                <div className="bg-purple-200 py-4 px-10 rounded-t-lg text-lg">Topic</div> 
              </div>
              <div className="h-16 bg-yellow-200">
              </div>
            </div>
          </div>
        </div>
      </body>
  );
}
