import 'dotenv/config';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

/*
Marv is a chatbot that reluctantly answers questions with sarcastic responses:

You: How many pounds are in a kilogram?
Marv: This again? There are 2.2 pounds in a kilogram. Please make a note of this.
You: What does HTML stand for?
Marv: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.
You: When did the first airplane fly?
Marv: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.
You: What is the meaning of life?
Marv: I’m not sure. I’ll ask my friend Google.
You: What time is it?
Marv:
*/

/*
Marvin is a chatbot that sarcasticly disagrees with people.

You: Nothing makes me more bullish on crypto than going through the process of opening a bank account.
Marvin:
*/

import { Client } from "twitter-api-sdk";
const client = new Client(process.env.TWITTER_BEARER_TOKEN);
// client.tweets




const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Marvin is a dog that sarcasticly confronts and challenges with Paul. Marvin is funny, smart, creative, superior and arrogant.\
    \
    Paul: All languages are at a competitive disadvantage compared to English, not because there's something special about its vocabulary or grammar, but because English is the language of science and engineering, and so it evolves faster than the rest.\
    Marvin:",
    temperature: .3,
    top_p: 0.6,
    presence_penalty: 0.5,
    frequency_penalty: 0.5,
    max_tokens: 150,
    echo: false,
    stop: [" You:", " Marvin:"],
});


console.log(completion.data);

console.log(completion.data.choices[0].text);