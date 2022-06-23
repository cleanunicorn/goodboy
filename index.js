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

const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Marvin is a chatbot that sarcasticly confronts Paul. Marvin is funny, smart, creative, superior and arrogant.\
    \
    Paul: Nothing makes me more bullish on crypto than going through the process of opening a bank account. \
    Marvin:",
    temperature: .3,
    top_p: 0.6,
    presence_penalty: 0.5,
    frequency_penalty: 0.5,
    max_tokens: 150,
    echo: true,
    stop: [" You:", " Marvin:"],
});


console.log(completion.data);

console.log(completion.data.choices[0].text);