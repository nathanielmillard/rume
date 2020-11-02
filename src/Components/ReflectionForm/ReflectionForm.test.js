import { render, screen } from '@testing-library/react';
import ReflectionForm from './ReflectionForm';
import {MemoryRouter} from 'react-router-dom'

describe('ReflectionForm', ()=>{
  describe('Unit Tests', ()=>{
    test('Should render a footer on the ReflectionForm', () => {
      render(
        <MemoryRouter>
          <ReflectionForm
            mood='Fine'
          />
        </MemoryRouter>
      );
      const button = screen.getByTestId("linkToAllReflections");
      expect(button).toBeInTheDocument();
    });

  })
})
