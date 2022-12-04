import React from 'react';

const NewsList = ({ articles }: any) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>News Article</h1>
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
            <h4>
              {article?.title} | {article?.category}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:4000/news`);
  const data = await response.json();

  return {
    props: {
      articles: data,
      title: 'News',
    },
  };
}
