import { render, screen } from '@testing-library/react';
import App from './App';


describe('App', ()=>{
  describe('Unit Tests', ()=>{
    test('Should render a footer on the App', () => {
      render(<App />);
      const homeButton = screen.getByTestId("homeButton");
      const randomQuote = screen.getByTestId("randomQuote");
      expect(homeButton).toBeInTheDocument();
      expect(randomQuote).toBeInTheDocument();
    });

    test('Should see a random quote generated in the footer', () => {
      render (<App />);
      const randomQuote = screen.getByTestId("randomQuote");
      expect(randomQuote).toBeInTheDocument();
    });

    test('Should see the open door icon generated in the footer', () => {
      render (<App />);
      const homeButton = screen.getByTestId("homeButton");
      expect(homeButton).toBeInTheDocument();
    });
  })
})
