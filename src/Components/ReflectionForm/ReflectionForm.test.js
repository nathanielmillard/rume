import { render, screen } from '@testing-library/react';
import ReflectionForm from './ReflectionForm';
import {MemoryRouter} from 'react-router-dom'

describe('ReflectionForm', ()=>{
  describe('Unit Tests', ()=>{
    test('Should render a footer on the ReflectionForm', () => {
      render(
        <MemoryRouter>
          <ReflectionForm />
        </MemoryRouter>
      );
      const link = screen.getByTestId("linkToAllReflections");
      expect(link).toBeInTheDocument();
    });

  })
})
