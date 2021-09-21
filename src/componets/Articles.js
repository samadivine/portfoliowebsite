import { useState } from "react";
import { Article } from "../data/Article";

function Articles() {
  const [items, useItem] = useState(Article);
  return (
    <section className="my-10">
      <h2 className="font-bold text-center text-2xl">News Articles</h2>
      <div className="w-20 h-1 mx-auto mb-4 bg-blue-500"></div>
      <div className="grid grid-cols-1 gap-5 px-5 my-5 lg:grid-cols-4 max-w-7xl lg:mx-auto">
        {items.map((article) => {
          return (
            <div
              key={article.id}
              className="flex items-center bg-blue-500 rounded"
            >
              <img
                src={article.image}
                className="w-40 mr-2 rounded-l lg:w-20 h-full"
                alt=""
              />
              <div>
                <h2 className="font-bold text-1xl mb-2">{article.title}</h2>
                <p>{article.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Articles;
