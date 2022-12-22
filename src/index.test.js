import 'react-native';
import React from 'react';
import App from '../App';

// Nota: test renderer precisa ser importado depois do react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});