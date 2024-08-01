import React, { useState } from "react";
import axios from "axios";

export default function ImportGuidance() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputText === "") {
      setError("Please enter some text.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:5050/call_llm_step0",
        {
          question: inputText,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResult(response.data);
      setError(""); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching data from Flask API:", error);
      if (error.response) {
        setError(
          `Server error: ${error.response.status} - ${
            error.response.data.message || "Unknown error"
          }`
        );
      } else if (error.request) {
        setError(
          "No response received from server. Please check if the server is running."
        );
      } else {
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-blue-400">
            Import Guidance Assistant
          </h2>
          <p className="text-gray-300 mb-4">
            Our{" "}
            <span className="font-semibold text-blue-300">Import Guidance</span>{" "}
            tool is designed to assist with the importation of medicines for
            businesses, as well as pets and vehicles for personal use.
          </p>
          <p className="text-sm text-gray-400 italic">
            Note: Answers are generated in real-time by AI without human review
            and are intended for demonstration purposes only.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2 text-blue-400">
            Live Import Scenario Check
          </h3>
          <p className="text-gray-300">
            Enter your import scenario below for guidance.
          </p>
        </div>

        <form
          className="bg-gray-700 p-6 rounded-lg shadow-md mb-6"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Enter your scenario
            </label>
            <textarea
              id="text"
              placeholder="Describe your import scenario here..."
              className="w-full p-3 bg-gray-600 text-white border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={inputText}
              onChange={handleChange}
              rows={4}
            />
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            type="submit"
          >
            Send
          </button>
        </form>

        {result && (
          <div className="mt-6 p-6 bg-gray-700 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-blue-400 mb-4">Guidance:</h4>
            <div className="text-white space-y-4">
              <div>
                <h5 className="text-lg font-semibold mb-2 text-blue-300">
                  Fetch Details:
                </h5>
                <p className="text-gray-200 leading-relaxed">
                  {result.fetch_details}
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-2 text-blue-300">
                  Goods Type:
                </h5>
                <p className="text-gray-200">{result.goods_type}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
