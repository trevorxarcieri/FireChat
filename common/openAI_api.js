import openAI from "openai";

const prompt = "Refine the following search query to be more intuitive: ";
let openai = async () => {
        return new openAI({
        //TODO: use the extensions settings to store the API key and retrieve it from there
        //This will probably be a later step, focus on parsing user text as stated below
        apiKey: await browser.storage.sync.get("OPENAI_API_KEY"),
        dangerouslyAllowBrowser: true,
        
    });
};


export async function makeOpenAIApiCall(prompt, content) {
    const chatCompletion = await (await openai()).chat.completions.create({
        model: "gpt-3.5-turbo",
        //TODO: store user input from browser to content, parse this from the Google query input 
        //for search refinery. 
        //
        //TODO: Develop a prompt that consistently creates a well refined search query based off of the user's 
        //previous query
        //
        //TODO: Concatenate the user's previous query with the search refinery prompt and pass this to content
        messages: [{ role: "user", content: prompt + content }],
    });

    console.log(chatCompletion['choices'][0]['message']['content']);
    return chatCompletion['choices'][0]['message']['content'];
}
   
makeOpenAIApiCall(prompt, "parse csv file python");