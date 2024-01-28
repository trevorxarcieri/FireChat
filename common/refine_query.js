import { makeOpenAIApiCall } from "./openAI_api.js";

const prompt = "Refine the following search query to be more intuitive: ";

function getUserQuery() {
    var userQuery = document.getElementById("APjFqb").value;

    return userQuery;
}

// generate the code to pass the value from getUserQuery to makeOpenAIApiCall
// then pass the result from makeOpenAIApiCall to the search bar    
export function refineQuery() {
    let content = getUserQuery();

    return makeOpenAIApiCall(prompt, content);
}
