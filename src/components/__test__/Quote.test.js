import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Quote />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
