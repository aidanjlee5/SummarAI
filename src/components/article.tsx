export default function Article({headline, summarization} : {headline: string, summarization: string}) {
    return (
        <section>
            <h1 className='text-2xl font-bold'>{headline}</h1>
            <p className='mt-2 mb-2 text-lg'>{summarization}</p>
        </section>
    )
}