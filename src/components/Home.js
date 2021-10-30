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
      <p>
        This technology allows students solve complicated problems quickly and in an efficient
        manner.
        <span className="show">
          Students can develop fluency and mental math skills without a calculator.
          Visual models and number sentences help students find answers while also developing
          number sense, mental math, and problem solving abilities. When students become reliant
          on calculators, their fluency and number sense actually decline over time.
        </span>
      </p>
    </div>
    <button className="btn-more" type="button">Read More</button>
  </section>
);

export default Home;
