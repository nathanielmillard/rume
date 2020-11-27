import { render, screen } from '@testing-library/react';
import ReflectionLibrary from './ReflectionLibrary';
import { MemoryRouter } from 'react-router-dom';
import { getReflections } from '../../apiCalls.js';
import '@testing-library/jest-dom';
jest.mock('../../apiCalls.js');


describe('ReflectionLibrary', () => {
  describe('Unit Tests', () => {
    test('Should render a section for the reflections', () => {
      render(
        <MemoryRouter>
          <ReflectionLibrary />
        </MemoryRouter>
      )
      const reflectionSection = screen.getByTestId('reflections');
      expect(reflectionSection).toBeInTheDocument()
    });

    test('Should render a loading message', () => {
      const reflections = [{
        id: 1,
        date: new Date(),
        mood: 'Angry',
        reflection: 'I want sushi, but no one is delivering. >:|',
      }];
      getReflections.mockResolvedValue(reflections);
      render(
        <MemoryRouter>
          <ReflectionLibrary />
        </MemoryRouter>
      )
      const loadingMessage = screen.getByTestId('loadingMessage')
      expect(loadingMessage).toBeInTheDocument()
    });
  });

  // NOTE: Integration test below needs additional assitance

  // describe('Integration Tests', ()=>{
  //   test('Should display stored reflections', async () => {
  //     const reflections = [{
  //       id: 1,
  //       date: new Date(),
  //       mood: 'Angry',
  //       reflection: 'I want sushi, but no one is delivering. >:|',
  //     }]
  //     getReflections.mockResolvedValue(reflections);
  //     render(
  //       <MemoryRouter>
  //         <ReflectionLibrary />
  //       </MemoryRouter>
  //     )
  //     await waitFor( () => {
  //       screen.getByTestId('cardDate')
  //     })
  //     expect(screen.getByTestId('cardDate')).toBeInTheDocument()
  //   });
  // })
})
