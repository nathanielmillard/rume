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

  })
})

// A user sees the quote of the day and the emptyLogo
