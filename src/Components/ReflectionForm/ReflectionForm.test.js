import { render, screen } from '@testing-library/react';
import ReflectionForm from './ReflectionForm';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom'
import { postAReflection } from '../../apiCalls.js'
jest.mock('../../apiCalls.js')

describe('ReflectionForm', () => {
  describe('Unit Tests', () => {
    test('Should render a ReflectionForm', () => {
      render(
        <MemoryRouter>
          <ReflectionForm
            mood='Fine'
          />
        </MemoryRouter>
      );
      const libraryButton = screen.getByTestId("linkToAllReflections");
      expect(libraryButton).toBeInTheDocument();
      const submitButton = screen.getByText("Save This Reflection");
      expect(submitButton).toBeInTheDocument();
      const reflectionForm = screen.getByTestId("reflectionForm");
      expect(reflectionForm).toBeInTheDocument();
    });
  })

  describe('Integration Tests', () => {
    test('Should reset the input when a user types a reflection and submits it', () => {
      render(
        <MemoryRouter>
          <ReflectionForm
            mood='Fine'
          />
        </MemoryRouter>
      );
      const libraryButton = screen.getByTestId("linkToAllReflections");
      expect(libraryButton).toBeInTheDocument();
      const submitButton = screen.getByText("Save This Reflection");
      expect(submitButton).toBeInTheDocument();
      const reflectionForm = screen.getByTestId("reflectionForm");
      expect(reflectionForm).toBeInTheDocument();
      const input = screen.getByTestId("reflectionArea");
      userEvent.type(input, "Feeling fine!")
      expect(input.value).toBe("Feeling fine!");
      userEvent.click(submitButton);
      expect(input.value).toBe("");
    });

    test('Should post a reflection', () => {
      render(
        <MemoryRouter>
          <ReflectionForm
            mood='Fine'
          />
        </MemoryRouter>
      );
      const libraryButton = screen.getByTestId("linkToAllReflections");
      expect(libraryButton).toBeInTheDocument();
      const submitButton = screen.getByText("Save This Reflection");
      expect(submitButton).toBeInTheDocument();
      const reflectionForm = screen.getByTestId("reflectionForm");
      expect(reflectionForm).toBeInTheDocument();
      const input = screen.getByTestId("reflectionArea");
      userEvent.type(input, "Feeling fine!")
      expect(input.value).toBe("Feeling fine!");
      userEvent.click(submitButton);
      expect(postAReflection).toHaveBeenCalled()
    });
  })
})
