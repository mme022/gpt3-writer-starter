import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const Home = () => {
  /* state and handler for input field */
  const [userInput, setUserInput] = useState("");
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  /* state for copy to clipboard */
  const [copied, setCopied] = useState(false);

  /* state and handler for submit button to call api */
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  return (
    <div className="root">
      <Head>
        <title>README Generator</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>README Generator</h1>
          </div>
          <div className="header-subtitle">
            <h2>Create a README for your repo in seconds.</h2>
          </div>
        </div>

        <div className="prompt-container">
          <textarea
            className="prompt-box"
            placeholder="paste a link to your repo here"
            value={userInput}
            onChange={onUserChangedText}
          />
        </div>

        <div className="prompt-buttons">
          <a
            className={
              isGenerating ? "generate-button loading" : "generate-button"
            }
            onClick={callGenerateEndpoint}
          >
            <div className="generate">
              {isGenerating ? (
                <span className="loader"></span>
              ) : (
                <p>Generate</p>
              )}
            </div>
          </a>
        </div>

        {apiOutput && (
          <div className="output">
            <div className="output-header-container">
              <div className="output-header">
                <h3>Output</h3>
              </div>
            </div>
            <CopyToClipboard text={apiOutput} onCopy={() => setCopied(true)}>
              <div className="prompt-buttons">
                {copied ? (
                  <div className="generate-button generate">
                    <p>Copied</p>
                  </div>
                ) : (
                  <div className="generate-button generate">
                    <p>Copy to clipboard</p>
                  </div>
                )}
              </div>
            </CopyToClipboard>
            <div className="output-content">
              <p>{apiOutput}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
