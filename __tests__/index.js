import 'react-native';
import React from 'react';
import App from '../App/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.unmock('ScrollView')
it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});
