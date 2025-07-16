import React from 'react';

const BlogOutline = ({ outline }) => {
  return (
    <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded shadow-inner">
      <h2 className="text-xl font-semibold mb-2">Generated Blog Outline</h2>
      <pre className="whitespace-pre-wrap text-sm text-gray-800">{outline}</pre>
    </div>
  );
};

export default BlogOutline;
