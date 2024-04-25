// Defines initial topics with ids
interface Topics {
    [key: string]: number[];
}

// Defines article structure
interface Article {
    headline: string;
    summarization: string;
}

// Defines structures once articles are fetched
interface SummarizedArticlesByTopic {
    [key: string]: Article[] | undefined;
}