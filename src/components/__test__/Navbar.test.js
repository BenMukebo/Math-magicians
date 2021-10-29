/** @format */

import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';
import { HashRouter } from 'react-router-dom';

it('matches navbar snapshot', () => {
  const tree = renderer.create(<HashRouter> <Navbar /></HashRouter>,).toJSON();
  expect(tree).toMatchSnapshot();
});
