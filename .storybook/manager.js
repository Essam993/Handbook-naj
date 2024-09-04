// .storybook/manager.js
import { addons } from '@storybook/manager-api';
import customTheme from './storybookTheme'; // Import your custom theme

addons.setConfig({
  theme: customTheme, // Apply the custom theme
});
