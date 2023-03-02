import "dotenv/config";

import express from "express";

import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/getReport", async (req, res) => {
  console.log(req.body);
  const prompt = req.body.text;
  const optionTwo =
    req.body.optionTwo == "" ? 1000 : parseInt(req.body.optionTwo);
  console.log(prompt);
  console.log(optionTwo);
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
    max_tokens: optionTwo,
  });
  console.log(completion.data.choices[0].text);
  res.send(completion.data.choices[0].text);
});

app.listen(4000, () => {
  console.log("서버온");
});
