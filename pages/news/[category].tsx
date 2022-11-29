import React from 'react';

const CategoryList = ({ articles, category }: any) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Showing news of {category}</h1>
      {articles.map((article: any) => {
        return (
          <div
            key={article?.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h3>
              {article?.title} | {article?.description}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;

export async function getServerSideProps(context: any) {
  const { params, req, res, query } = context;
  res.setHeader('Set-Cookie', ['hello=utsho']);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
