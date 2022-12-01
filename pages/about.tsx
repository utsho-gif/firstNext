import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
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
