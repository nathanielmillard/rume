import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import BreathingRoom from './BreathingRoom';
import { inhaleExhale } from './BreathingRoomAnimation.js';
jest.mock('./BreathingRoomAnimation.js')

describe('BreathingRoom', () => {
  describe('Unit Tests', () => {
    test('Should render a BreathingRoom', () => {
      const currentMood = 'Fine'
      render (
        <MemoryRouter>
          <BreathingRoom
            mood={currentMood}/>
        </MemoryRouter>
      )
      const directions = screen.getByTestId("instructions");
      expect(directions).toBeInTheDocument();
      const startButton = screen.getByText("Start");
      expect(startButton).toBeInTheDocument();
    });
  })

  describe('Integration Tests', () => {
    test('Should not display instructions once breathing animation begins', () => {
      const currentMood = 'Fine'
      render (
        <MemoryRouter>
          <BreathingRoom
            mood={currentMood}/>
        </MemoryRouter>
      )
      const directions = screen.getByTestId("instructions");
      expect(directions).toBeInTheDocument();
      const startButton = screen.getByText("Start");
      expect(startButton).toBeInTheDocument();
      userEvent.click(startButton);
      expect(directions).not.toBeInTheDocument();
    });
    test('Should invoke the animation function after start is clicked', () => {
      const currentMood = 'Fine'
      render (
        <MemoryRouter>
          <BreathingRoom
            mood={currentMood}/>
        </MemoryRouter>
      )
      const directions = screen.getByTestId("instructions");
      expect(directions).toBeInTheDocument();
      const startButton = screen.getByText("Start");
      expect(startButton).toBeInTheDocument();
      userEvent.click(startButton);
      expect(directions).not.toBeInTheDocument();
      expect(inhaleExhale).toHaveBeenCalledTimes(1);
    });
  })
})
