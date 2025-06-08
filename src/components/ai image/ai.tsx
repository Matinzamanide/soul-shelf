"use client"
import React, { useState } from 'react';

// Main App component
function App() {
  // State to store the user's text prompt, explicitly typed as string
  const [prompt, setPrompt] = useState<string>('');
  // State to store the generated image URL, explicitly typed as string
  const [imageUrl, setImageUrl] = useState<string>('');
  // State to manage loading status, explicitly typed as boolean
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // State to store any error messages, explicitly typed as string
  const [error, setError] = useState<string>('');

  // Function to handle image generation
  const generateImage = async (): Promise<void> => {
    // Clear previous image and error
    setImageUrl('');
    setError('');
    setIsLoading(true); // Set loading to true

    try {
      // Construct the payload for the image generation API call
      const payload = {
        instances: { prompt: prompt },
        parameters: { "sampleCount": 1 } // Request one image
      };

      // API key is handled by the Canvas environment for imagen-3.0-generate-002
      const apiKey: string = "AIzaSyD230SVHioRL8uMn93uAsQWcLreU8aqch4";
      const apiUrl: string = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;

      // Make the fetch call to the image generation API
      const response: Response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // Check if the response was successful
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API error: ${errorData.error.message || response.statusText}`);
      }

      const result = await response.json();

      // Check if the response contains valid image data
      if (result.predictions && result.predictions.length > 0 && result.predictions[0].bytesBase64Encoded) {
        // Construct the image URL from the base64 encoded data
        const generatedImageUrl: string = `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
        setImageUrl(generatedImageUrl); // Set the image URL
      } else {
        setError('Failed to generate image. No valid image data received.');
      }
    } catch (err: any) { // Use 'any' for catch error if type is uncertain, or more specific 'Error'
      console.error('Error generating image:', err);
      setError(`Error generating image: ${err.message}`);
    } finally {
      setIsLoading(false); // Set loading to false regardless of success or failure
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          AI Image Generator
        </h1>

        <div className="mb-6">
          <label htmlFor="prompt-input" className="block text-gray-700 text-sm font-semibold mb-2">
            Enter your image description:
          </label>
          <textarea
            id="prompt-input"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out resize-none"
            rows={4} // Changed to number as it's a numeric prop
            placeholder="e.g., A futuristic city at sunset with flying cars and neon lights"
            value={prompt}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
            disabled={isLoading}
          ></textarea>
        </div>

        <button
          onClick={generateImage}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading || !prompt.trim()} // Disable if loading or prompt is empty
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </div>
          ) : (
            'Generate Image'
          )}
        </button>

        {error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm" role="alert">
            {error}
          </div>
        )}

        {imageUrl && (
          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Generated Image:</h2>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-inner border border-gray-200">
              <img
                src={imageUrl}
                alt="Generated by AI"
                className="w-full h-auto rounded-lg object-contain max-h-96"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { // Explicitly type the event
                  e.currentTarget.onerror = null; // Prevent infinite loop
                  e.currentTarget.src = "https://placehold.co/400x300/CCCCCC/333333?text=Image+Load+Error";
                  setError("Failed to load generated image. It might be corrupted or the URL is invalid.");
                }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              This image was generated by an AI model based on your prompt.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;