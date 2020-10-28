import { render, screen } from '@testing-library/react';
import Lobby from './Lobby';
import {MemoryRouter} from 'react-router-dom'
describe('Lobby', ()=>{
  describe('Unit Tests', ()=>{
    test('Should load messages and prompts in Lobby', () => {
      render(
        <MemoryRouter>
          <Lobby />
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
      render(
        <MemoryRouter>
          <Lobby />
        </MemoryRouter>
      );
      const moodButtonContainer = screen.getByTestId('moodButtonContainer');
      const linkToReflecting = screen.getByTestId('linkToReflecting');
      const linkToFeeling = screen.getByTestId('linkToFeeling');
      const linkToBreathing = screen.getByTestId('linkToBreathing');
      expect(moodButtonContainer).toBeInTheDocument();
      expect(linkToReflecting).toBeInTheDocument();
      expect(linkToFeeling).toBeInTheDocument();
      expect(linkToBreathing).toBeInTheDocument();
    });
  })
})
