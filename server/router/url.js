import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

router.route("/").get((req, res) => {
  res.render("index.ejs");
});

router.route("/getReport").get(async (req, res) => {
  const prompt = `${inputText} 라는 책을 ${optionOne} ${optionTwo} 꼭 한국어로 요약해줘`;
  const configuration = new Configuration({
    apiKey: "",
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
    max_tokens: `${parseInt(optionTwo)}`,
  });
  console.log(completion.data.choices[0].text);
});

export default router;
