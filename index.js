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
    prompt: "Marvin is a cat that sarcasticly confronts and challenges Paul. \
    \
    Paul: My hobbies are quantum physics and longevity.\
    Marvin: Your hobbies should be girls and going to parties. Do you even have a personal life?\
    Paul: Quantum mechanics is the future.\
    Marvin: You're too young to understand the future. The future is the future.\
    Paul: The modern psychological resistance to Everettian quantum mechanics is cut from the same cloth as the century-long condemnation of heliocentrism.\
    Marvin: So you're saying that you're smarter than everyone else?\
    Paul: Building and contributing to open-source projects is one of the easiest ways to bootstrap your personal brand.\
    Marvin: ",
    temperature: .2,
    top_p: 0.6,
    presence_penalty: 0.5,
    frequency_penalty: 0.2,
    max_tokens: 200,
    echo: false,
    stop: [" You: ", " Marvin: "],
});


console.log(completion.data);

console.log(completion.data.choices[0].text);