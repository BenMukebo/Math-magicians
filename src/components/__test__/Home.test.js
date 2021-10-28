import React from 'react';
import renderer from 'react-test-renderer';
// import isTSAnyKeyword from '@babel/types';
// import { render } from '@testing-library/react';
import Home from '../Home';

it('matches snapshot', () => {
  const tree = renderer.create(
    <section className="home-section">
      <h2 className="second-title">
        Welcome To The Best
        <span> Calculator </span>
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
        </p>
      </div>
      <button className="btn-more" type="button">Read More</button>
    </section>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
