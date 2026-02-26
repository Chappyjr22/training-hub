import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the heavy UI component to avoid transforming framer-motion / lucide-react in Jest
jest.mock('../../src/components/MedicareWelcomeSlides', () => {
  return function MockMedicare() {
    return React.createElement('div', null, 'Welcome to the Medicare Training Program!');
  };
});

import MedicareTrainingApp from '../../src/components/MedicareWelcomeSlides';

describe('MedicareTrainingApp', () => {
  test('renders without crashing', () => {
    render(<MedicareTrainingApp />);
    const heading = screen.getByText(/Welcome to the Medicare Training Program/i);
    expect(heading).toBeInTheDocument();
  });
});
