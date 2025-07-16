
import React, { useState } from 'react';
import generateBlogOutline from './api';

function App() {
  const [topic, setTopic] = useState('');
  const [outline, setOutline] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await generateBlogOutline(topic);
    setOutline(result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Blog Outline Generator</h1>

        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter blog topic"
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition disabled:bg-blue-300"
          >
            {loading ? 'Generating...' : 'Generate Outline'}
          </button>
        </form>

        {outline && (
          <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded shadow-inner">
            <h2 className="text-xl font-semibold mb-2">Generated Blog Outline</h2>
            <pre className="whitespace-pre-wrap text-sm text-gray-800">{outline}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
