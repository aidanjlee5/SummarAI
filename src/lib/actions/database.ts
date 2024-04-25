"use server"
import { createClient } from "@/utils/supabase/server";

export async function getSummarizedArticlesFromTopics(topics: Topics) {
    let results: SummarizedArticlesByTopic = {};
  
    for (let topic in topics) {
      const ids = topics[topic];
      results[topic] = await getSummarizedArticlesFromList(ids);
    }
  
    return results;
  }
  
  async function getSummarizedArticlesFromList(ids: number[]) {
    const supabase = createClient();
    const promises = ids.map(async (id) => {
      const { data: headlineData } = await supabase.from("summarizations").select("headline").eq("id", id).single();
      const { data: summarizationData } = await supabase.from("summarizations").select("summarization").eq("id", id).single();
      return {
        headline: headlineData.headline,
        summarization: summarizationData.summarization
      };
    });
    return Promise.all(promises);
  }
  

