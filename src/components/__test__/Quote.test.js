import React from 'react';
import renderer from 'react-test-renderer';
// import isTSAnyKeyword from '@babel/types';
// import { render } from '@testing-library/react';
import Quote from '../Quote';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Quote />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
