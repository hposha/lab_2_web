import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [comments, setComments] = useState([]);
  
  const variant = 1; 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error("Помилка завантаження:", error));
  }, []); 

  return (
    // Прибрано bg-slate-900, min-h-screen та text-slate-200
    <section className="py-4 transition-colors duration-300">
      
      {/* Прибрано text-white, додано opacity-90 */}
      <h2 className="text-2xl font-bold mb-8 text-center opacity-90 uppercase tracking-wide text-emerald-500">
        Відгуки роботодавців
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {comments.map(comment => (
          <div 
            key={comment.id} 
            className="bg-slate-500/5 p-6 rounded-xl shadow-md border border-slate-500/20 hover:border-cyan-500 transition-colors duration-300"
          >
            <h3 className="font-semibold text-lg text-cyan-600 mb-1 truncate" title={comment.name}>
              {comment.name}
            </h3>
            
            <p className="text-xs mb-4 opacity-60 font-mono">{comment.email}</p>
            
            <p className="text-sm leading-relaxed opacity-80">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;