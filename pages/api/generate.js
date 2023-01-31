import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `
  Write me the sourcecode in markup for a README for a following repository in the style of the template https://github.com/othneildrew/Best-README-Template.
  It should include a table of contents.
  If already existing include the information already in the README of the repository.
  The instructions on install should be using yarn. 
  The README should describe how to use the scripts in package.json of the repository. 
  If there is Nextjs or React included in the package.json file include instructions on how to spin up the local webserver with yarn dev and start after cloning the repo. If not exclude this from the README.
  If there is Hardhat or Foundry included in the package.json file include instructions on how to spin up a local node, use scripts and tests or deploy contracts. If not exclude this from the README.
  If there is an env.example file include instructions that these information has to be filled and stored as .env.
  The repository to create the readme for: `;
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.7,
    max_tokens: 1000,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
