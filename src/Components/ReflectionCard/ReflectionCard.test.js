import { render, screen } from '@testing-library/react';
import ReflectionCard from './ReflectionCard';
import { MemoryRouter } from 'react-router-dom'

describe('ReflectionCard', () => {
  describe('Unit Tests', () => {
    test('Should render a ReflectionCard', () => {
      render(
        <MemoryRouter>
          <ReflectionCard />
        </MemoryRouter>
      )
      const cardDate = screen.getByTestId("cardDate");
      const reflectionMood = screen.getByTestId("reflectionMood");
      const reflectionEntry = screen.getByTestId("reflectionEntry");
      expect(cardDate).toBeInTheDocument();
      expect(reflectionMood).toBeInTheDocument();
      expect(reflectionEntry).toBeInTheDocument();
    });
  })
})
