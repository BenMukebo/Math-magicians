import React from 'react';

const Home = () => (
  <section className="home-section">
    <h2 className="second-title">
      Welcome To The Best
      <span className="second-title"> Calculator </span>
      In The world!
    </h2>
    <div className="paragraph">
      <p>
        Calculators have not only greatly enhanced our ability to perform the regular
        computations that are involved in everyday life, but provided humans with the ability
        to understand mathematics on a greater scale than ever imagined.
      </p>
      <p className="show">
        This technology allows students solve complicated problems quickly and in an efficient
        manner Students can develop fluency and mental math skills without a calculator.
      </p>
    </div>
    <button className="btn-more" type="button">Read More</button>
  </section>
);

export default Home;
