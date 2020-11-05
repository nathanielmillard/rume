import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';


describe('App', () => {
  describe('Unit Tests', () => {
    test('Should render a footer on the App', () => {
      render(<App />);
      const homeButton = screen.getByTestId("homeButton");
      const randomQuote = screen.getByTestId("randomQuote");
      expect(homeButton).toBeInTheDocument();
      expect(randomQuote).toBeInTheDocument();
    });

    test('Should see a random quote generated in the footer', () => {
      render(<App />);
      const randomQuote = screen.getByTestId("randomQuote");
      expect(randomQuote).toBeInTheDocument();
    });

    test('Should see the open door icon generated in the footer', () => {
      render (<App />);
      const homeButton = screen.getByTestId("homeButton");
      expect(homeButton).toBeInTheDocument();
    });
  })

  describe('Integration Tests', () => {
    test('Should render Lobby when the "door" icon is clicked', () => {
      render(<App />);
      const homeButton = screen.getByTestId("homeButton");
      expect(homeButton).toBeInTheDocument();
      userEvent.click(homeButton);
      const feelingPrompt = screen.getByTestId("checkInQuestion");
      expect(feelingPrompt).toBeInTheDocument();
    });

    test('Should render the Reflection page when the reflect button is clicked', () => {
      render (<App />);
      const homeButton = screen.getByTestId("homeButton");
      expect(homeButton).toBeInTheDocument();
      userEvent.click(homeButton);
      const fineButton = screen.getByText("Fine");
      expect(fineButton).toBeInTheDocument();
      userEvent.click(fineButton);
      const reflectButton = screen.getByTestId("reflect");
      userEvent.click(reflectButton);
      const reflectionsButton = screen.getByTestId("linkToAllReflections");
      expect(reflectionsButton).toBeInTheDocument();
    });

    test('Should render the Reflection Library when the "show all reflections" button is clicked', () => {
      render (<App />);
      const homeButton = screen.getByTestId("homeButton");
      expect(homeButton).toBeInTheDocument();
      userEvent.click(homeButton);
      const fineButton = screen.getByText("Fine");
      expect(fineButton).toBeInTheDocument();
      userEvent.click(fineButton);
      const reflectButton = screen.getByTestId("reflect");
      userEvent.click(reflectButton);
      const reflectionsButton = screen.getByTestId("linkToAllReflections");
      expect(reflectionsButton).toBeInTheDocument();
      userEvent.click(reflectionsButton);
      const library = screen.getByTestId("reflections");
      expect(library).toBeInTheDocument();
    });

    test('Should render the Feeling page when feel is clicked', () => {
      render (<App />);
      const homeButton = screen.getByTestId("homeButton");
      expect(homeButton).toBeInTheDocument();
      userEvent.click(homeButton);
      const fineButton = screen.getByText("Fine");
      expect(fineButton).toBeInTheDocument();
      userEvent.click(fineButton);
      const feelButton = screen.getByTestId("feel");
      userEvent.click(feelButton);
      const directions = screen.getByText("Welcome to the feeling room");
      expect(directions).toBeInTheDocument();
    });
    
    test('Should render the Breathing page when breathe is clicked', () => {
      render (<App />);
      const homeButton = screen.getByTestId("homeButton");
      expect(homeButton).toBeInTheDocument();
      userEvent.click(homeButton);
      const fineButton = screen.getByText("Fine");
      expect(fineButton).toBeInTheDocument();
      userEvent.click(fineButton);
      const breatheButton = screen.getByTestId("breathe");
      userEvent.click(breatheButton);
      const directions = screen.getByTestId("instructions");
      expect(directions).toBeInTheDocument();
    });
  })
})
