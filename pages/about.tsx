import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="That's awesome" />
      </Head>
      <h1>About Page</h1>
    </div>
  );
};

export default About;

About.getLayout = function PageLayout(page: any) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
