import { render, screen } from '@testing-library/react';
import WelcomePage from './WelcomePage';

describe('WelcomePage', () => {
  describe('Unit Tests', () => {
    test('Should render Welcome Page', () => {
      render(<WelcomePage />)
      const appTitle = screen.getByTestId("appTitle");
      const appDirections = screen.getByTestId("appDirections")
      expect(appTitle).toBeInTheDocument();
      expect(appDirections).toBeInTheDocument();
    });
  })
})
