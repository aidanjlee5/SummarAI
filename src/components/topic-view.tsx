import Article from "@/components/article"

export default function TopicView({topic, summarizedArticles} : {topic: string, summarizedArticles: any[]}) {
    return (
        <div className="snap-center h-screen w-screen flex flex-col">
          <div className='flex flex-1 flex-col gap-y-8 pr-48 w-[85%]'>
            <div className="bg-yellow-200 w-[20%] mt-2 py-4 px-10 rounded-t-lg text-xl">{topic}</div>
            {summarizedArticles.map((article, index) => {
                return <Article key={index} headline={article["headline"]} summarization={article["summarization"]} />
            })}
          </div>
          <div className="flex flex-col">
            <div className='flex pl-8 gap-x-8'>
              <div className="bg-yellow-200 py-4 px-10 rounded-t-lg text-lg">Politics</div> 
              <div className="bg-blue-200 py-4 px-10 rounded-t-lg text-lg">Sports</div> 
              <div className="bg-red-200 py-4 px-10 rounded-t-lg text-lg">Health</div> 
              <div className="bg-purple-200 py-4 px-10 rounded-t-lg text-lg">Tech</div>
            </div>            
          </div>
        </div>
    )
}