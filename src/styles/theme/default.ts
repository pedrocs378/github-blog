export const defaultTheme = {
  colors: {
    white: '#FFFFFF',
    background: '#071422',
    text: '#AFC2D4',

    blue: {
      100: '#E7EDF4',
      200: '#C4D4E3',
      300: '#7B96B2',
      400: '#3A536B',
      500: '#3294F8',
      600: '#1C2F41',
      700: '#112131',
      800: '#0B1B2B',
      900: '#040F1A',
    },
  },
  lineHeights: {
    default: 1.6,
    sm: 1.3,
  },
  fontSizes: {
    /** 12px */
    xs: '0.75rem',
    /** 14px */
    sm: '0.875rem',
    /** 16px */
    md: '1rem',
    /** 18px */
    lg: '1.125rem',
    /** 20px */
    xl: '1.25rem',
    /** 24px */
    xxl: '1.5rem',
  },
} as const
