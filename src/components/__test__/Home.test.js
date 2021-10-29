import React from 'react';
import renderer from 'react-test-renderer';
// import isTSAnyKeyword from '@babel/types';
// import { render } from '@testing-library/react';
import Home from '../Home';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Home />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
