import { createClient } from "@/utils/supabase/server";

export async function getSummarizationById(id: string) {
    const supabase = createClient();
    const { data, error } = await supabase.from("summarization").select("headling").eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    return "Learning " + data[0].title.split(" ")[0];
}

export async function getSummarizations() {
    const supabase = createClient();
    const { data, error } = await supabase.from("summarization").select("*");

    if (error) {
        throw new Error(error.message);
    }

    return data;
}