import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Lobby from './Lobby';
import { MemoryRouter } from 'react-router-dom'

describe('Lobby', () => {
  describe('Unit Tests', () => {
    test('Should load messages and prompts in Lobby', () => {
      const mockedFunction = jest.fn()
      render(
        <MemoryRouter>
          <Lobby
            setMood={mockedFunction}
          />
        </MemoryRouter>
      );
      const welcomeMessage = screen.getByTestId('welcomeMessage');
      const checkInQuestion = screen.getByTestId('checkInQuestion');
      const actionPrompt = screen.getByTestId('actionPrompt');
      expect(welcomeMessage).toBeInTheDocument();
      expect(checkInQuestion).toBeInTheDocument();
      expect(actionPrompt).toBeInTheDocument();
    });
    test('Should load actionable elements in Lobby', () => {
      const mockedFunction = jest.fn()
      render(
        <MemoryRouter>
          <Lobby
            setMood={mockedFunction}
          />
        </MemoryRouter>
      );
      const moodButtonContainer = screen.getByTestId('moodButtonContainer');
      const linkToReflecting = screen.getByTestId('reflect');
      const linkToFeeling = screen.getByTestId('feel');
      const linkToBreathing = screen.getByTestId('breathe');
      expect(moodButtonContainer).toBeInTheDocument();
      expect(linkToReflecting).toBeInTheDocument();
      expect(linkToFeeling).toBeInTheDocument();
      expect(linkToBreathing).toBeInTheDocument();
    });
  })

  describe('Integration Tests', () => {
    test('Should fire function when Mood button is clicked', () => {
      const mockedFunction = jest.fn()
      render(
        <MemoryRouter>
          <Lobby
            setMood={mockedFunction}
          />
        </MemoryRouter>
      );
      userEvent.click(screen.getByText('Angry'))
      expect(mockedFunction).toHaveBeenCalledTimes(1)
    });

    test('Nav buttons should be disabled until Mood is selected', () => {
      const mockedFunction = jest.fn()
      render(
        <MemoryRouter>
          <Lobby
            setMood={mockedFunction}
          />
        </MemoryRouter>
      )
      const reflectButton = screen.getByTestId('reflect')
      expect(reflectButton).toHaveProperty('disabled')
    })
  })
})
