import React, { useState } from "react";

const StoryGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyBFip-kCluOtC1JL_57SDHI2UM5TCRPwDs"; // Your actual API key

  const generateStory = async () => {
    if (!prompt) return;
    setLoading(true);
    setStory("");
  
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `Write a short story about ${prompt}` }] }],
          }),
        }
      );
  
      const data = await response.json();
      console.log("API Response:", data);
  
      // 🔴 The response format contains parts, extract text properly
      if (data?.candidates?.[0]?.content?.parts) {
        const storyText = data.candidates[0].content.parts.map((part) => part.text).join("\n");
        setStory(storyText);
      } else {
        setStory("No story generated. Try again!");
      }
    } catch (error) {
      console.error("Error generating story:", error);
      setStory("An error occurred. Try again!");
    }
  
    setLoading(false);
  };
  
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">AI Story Generator</h2>
      <input
        type="text"
        className="w-full p-2 border rounded mb-2"
        placeholder="Enter story theme..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white py-2 rounded"
        onClick={generateStory}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Story"}
      </button>
      {story && <p className="mt-4 p-3 bg-gray-100 rounded">{story}</p>}
    </div>
  );
};

export default StoryGenerator;
