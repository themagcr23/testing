/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('First Screen', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('should give error', () => {
    expect(false).toBeTruthy();
  });
});
