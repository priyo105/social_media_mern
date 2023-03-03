const lightTheme = {
  colors: {
    primary: '#4285F4',
    secondary: '#DB4437',
    background: '#F8F8F8',
    text: '#333333',
  },
  fontSizes: {
    small: 14,
    medium: 18,
    large: 24,
  },
};

const darkTheme = {
  colors: {
    primary: '#BB86FC',
    secondary: '#03DAC6',
    background: '#121212',
    text: '#FFFFFF',
  },
  fontSizes: {
    small: 14,
    medium: 18,
    large: 24,
  },
};

export const ThemeContext = React.createContext(lightTheme);

