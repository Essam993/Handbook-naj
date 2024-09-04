// .storybook/storybookTheme.js
import { create } from '@storybook/theming';

export default create({
  base: 'light', // 'light' or 'dark' theme base
  
//   // Brand colors
  colorPrimary: '#1e3a8a', // Primary color (e.g., blue for links and buttons)
  colorSecondary: '#1e3a8a', // Secondary color (used for UI elements like hover states)

//   // UI
//   appBg: '#F3F4F6', // Background color of the app
//   appContentBg: '#FFFFFF', // Content background color
//   appBorderColor: '#E6E6E6', // Border color

//   // Typography
//   fontBase: '"Open Sans", sans-serif', // Base font
//   fontCode: 'monospace', // Code font

//   // Text colors
//   textColor: '#333333', // Primary text color
//   textInverseColor: '#FFFFFF', // Inverse text color (used in dark themes)

//   // Toolbar default and active colors
//   barTextColor: '#999999', // Text color of the toolbar
//   barSelectedColor: '#1EA7FD', // Active state color in toolbar
//   barBg: '#FFFFFF', // Background color of the toolbar

  // Brand logo and title
  brandTitle: 'Nejoum Al Jazeeera', // Title of your Storybook instance
  brandUrl: 'https://new.naj.ae/', // URL linked to the logo/title
  brandImage: 'https://new.naj.ae/assets/images/logo-en.png', // URL of your logo image
});
