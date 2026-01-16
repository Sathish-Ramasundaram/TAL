import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * WelcomeBox Component
 * 
 */
interface WelcomeBoxProps {
  title: string;
  message: string;
  backgroundColor?: string;
}

const WelcomeBox: React.FC<WelcomeBoxProps> = ({ 
  title, 
  message, 
  backgroundColor = '#f0f9ff' 
}) => {
  return (
    <div 
      style={{ 
        padding: '20px', 
        borderRadius: '12px', 
        border: '2px solid #3b82f6',
        backgroundColor: backgroundColor,
        fontFamily: 'sans-serif',
        maxWidth: '400px'
      }}
    >
      <h2 style={{ color: '#1e40af', marginTop: 0 }}>{title}</h2>
      <p style={{ color: '#1e3a8a', lineHeight: '1.5' }}>{message}</p>
    </div>
  );
};

/**
 * Storybook Configuration
 */
const meta: Meta<typeof WelcomeBox> = {
  title: 'Example/WelcomeBox',
  component: WelcomeBox,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof WelcomeBox>;


export const Default: Story = {
  args: {
    title: 'Welc!',
    message: 'This component is being rendered inside Storybook using TypeScript.',
  },
};


export const CustomColor: Story = {
  args: {
    title: 'Look at the Color!',
    message: 'We passed a custom background color prop here.',
    backgroundColor: '#fef3c7', 
  },
};