import { render, screen } from '@testing-library/react';
import Lobby from './Lobby';

test('renders learn react link', () => {
  render(<Lobby />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// It should render a welcome greeting
// It should prompt the user to choose a current mood
// It should display 4 mood buttons
// It should prompt the user to navigate to a room
// It should display 3 room option buttons
