import { createTheme } from '@material-ui/core'

export const widthSM = 880
export const widthXS = 466
export const widthXL = 1180

type SpecialThemeType = {
  layout: {
    rootHeight: string
    gridMainFormMaxWidth: number
    gridMainFormPadding: string
    gridMainFormPaddingDownWidthSM: number
    gridWorkAreaMaxWidth: number
    gridWorkAreaPaddingLeft: number
    gridWorkAreaPaddingLeftDownWidthSM: number
    gridWorkAreaMargin: string
    gridWorkAreaMinHeight: number
    gridWorkAreaMinHeightDownWidthXS: number
    gridItemPadding: string
    gridItemPaddingDownWidthXS: string
    gridButtonMargin: string
    gridOverviewPadding: string
    gridOverviewPaddingDownWidthXS: string
    gridTypographyTextFontSize: string
    gridTypographyTextFontWeight: number
    gridTypographyTextFontSizeWidthXS: string
    gridTypographyTextLetterSpacing: string
    gridTypographyTextMargin: string
  }
  colors: {
    dark: string
    main: string
    white: string
    red: string
    darkRed: string
    violet: {
      light: string
      violet: string
      dark1: string
      dark2: string
      dark3: string
    }
    gray: {
      light: string
      warmGray: string
      dark1: string
      dark2: string
      dark3: string
    }
  }
  font: {
    fontFamily: string
    fontW1G: string
    fontW1GRegular: string
  }
}

export const specialTheme = {
  layout: {
    rootHeight: '100%',
    gridMainFormMaxWidth: 1180,
    gridMainFormPadding: '0 6.2rem 0 6.2rem',
    gridMainFormPaddingDownWidthSM: 0,
    gridWorkAreaMaxWidth: 940,
    gridWorkAreaPaddingLeft: 16,
    gridWorkAreaPaddingLeftDownWidthSM: 0,
    gridWorkAreaMargin: '0 auto',
    gridWorkAreaMinHeight: 200,
    gridWorkAreaMinHeightDownWidthXS: 70,
    gridItemPadding: '12px 0',
    gridItemPaddingDownWidthXS: '5px 0',
    gridOverviewPadding: '3px 0',
    gridOverviewPaddingDownWidthXS: '2px 0',
    gridButtonMargin: '2rem 0 0 0',
    gridTypographyTextFontSize: '1.8rem',
    gridTypographyTextFontWeight: 400,
    gridTypographyTextFontSizeWidthXS: '1.3rem',
    gridTypographyTextLetterSpacing: '0.45px',
    gridTypographyTextMargin: '1.8rem 0 1.2rem 0',
    gridTypographyOverviewMargin: '0.4rem 0 0.6rem 0',
  },
  colors: {
    dark: '#000000',
    main: '#003C78',
    white: '#ffffff',
    red: '#bf1528',
    darkRed: '#8e0038',
    violet: {
      light: '#efe7ed',
      violet: '#e4d6e4',
      dark1: '#dbaccc',
      dark2: '#ce5e92',
      dark3: '#b31767',
    },
    gray: {
      light: '#ebe6d8',
      warmGray: '#d9d5c7',
      dark1: '#bbb9ad',
      dark2: '#807e6f',
      dark3: '#545241',
    },
    yellow: {
      light: '#fff4b0',
      yellow: '#f8e89d',
      dark1: '#f7db6f',
      dark2: '#fad73b',
      dark3: '#f6cb00',
    },
    orange: {
      light: '#ffeede',
      orange: '#f7dcbb',
      dark1: '#f3c591',
      dark2: '#efa56d',
      dark3: '#e87a16',
    },
  },
  font: {
    fontW1G: 'FS Me, Arial, sans-serif',
    fontFedra: 'Fedra Serif, sans-serif',
  },
}

const themeObj = {
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#000' },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 466,
      sm: 880,
      md: 960,
      lg: 1000,
      xl: 1180,
    },
  },
}

type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key]
}

// @ts-ignore
const theme = createTheme(themeObj)

theme.props = {
  MuiInputLabel: {
    shrink: true,
  },
  MuiInput: {
    disableUnderline: true,
  },
}

theme.overrides = {
  MuiInput: {
    root: {
      borderBottom: `1px solid ${specialTheme.colors.dark}`,
      flexGrow: 1,
      flexShrink: 1,
      width: '100%',
      [theme.breakpoints.down(widthXS)]: {
        fontSize: '0.8rem',
      },
    },
    formControl: {
      'label + &': {
        marginTop: '0.6rem',
        [theme.breakpoints.down(widthXS)]: {
          marginTop: '0.6rem',
        },
      },
    },
    input: {
      '&::placeholder': {
        fontStyle: 'italic',
      },
    },
    error: {
      '&.MuiFormHelperText-root.Mui-error': {
        marginTop: theme.spacing(2),
        color: specialTheme.colors.red,
      },
      '&.MuiInputLabel-root.Mui-error': {
        color: specialTheme.colors.red,
      },
    },
  },
  MuiTypography: {
    h3: {
      fontFamily: specialTheme.font.fontFedra,
    },
  },
  MuiInputLabel: {
    root: {
      fontSize: '1rem',
      [theme.breakpoints.down(widthXS)]: {
        fontSize: '0.8rem',
      },
      color: specialTheme.colors.dark,
      fontWeight: 600,
      fontFamily: specialTheme.font.fontW1G,
      letterSpacing: 0.24,
      paddingBottom: 5,
    },
    formControl: {
      position: 'relative',
      '&.MuiInputLabel-root.Mui-error': {
        color: specialTheme.colors.red,
      },
    },
    asterisk: {
      content: '*',
      fontSize: '1rem',
      fontWeight: 600,
      color: specialTheme.colors.dark,
    },
    shrink: {
      transform: 'translate(0px, 0px) scale(1)',
    },

    outlined: {
      '&$shrink': {
        transform: 'translate(0px, 0px) scale(1)',
      },
      zIndex: 0,
    },
  },
  MuiInputBase: {
    root: {
      fontFamily: specialTheme.font.fontW1G,
      borderBottom: `1px solid ${specialTheme.colors.dark}`,
      padding: '0.3rem',
      marginTop: '0.3rem',
      [theme.breakpoints.down(widthXS)]: {
        padding: '0',
      },
    },
    input: {
      padding: '3px 0',
    },
  },
  MuiButton: {
    root: {
      fontWeight: 0,
    },
    endIcon: {
      marginLeft: 12,
      marginRight: -8,
    },
  },
  MuiOutlinedInput: {
    root: {
      borderRadius: 0,
    },
  },
  MuiFormLabel: {
    root: {
      [theme.breakpoints.down(widthXS)]: {
        fontSize: '0.8rem',
      },
      color: specialTheme.colors.dark,
      fontWeight: 600,
      fontFamily: specialTheme.font.fontW1G,
      letterSpacing: 0.24,
    },
    focused: {
      '&$focused': {
        color: specialTheme.colors.dark,
      },
    },
    asterisk: {
      content: '*',
      fontSize: '1rem',
      fontWeight: 600,
      color: specialTheme.colors.dark,
    },
    error: {
      '&.MuiFormLabel-root.Mui-error': {
        color: specialTheme.colors.red,
      },
    },
  },
  MuiFormGroup: {
    root: { flexDirection: 'row' },
  },
  MuiFormControlLabel: {
    root: {
      [theme.breakpoints.down(widthXS)]: {
        fontSize: '0.8rem',
      },
      color: specialTheme.colors.dark,
      fontWeight: 600,
      fontFamily: specialTheme.font.fontW1G,
      letterSpacing: 0.24,
      error: {
        '&.MuiFormControlLabel-root.Mui-error': {
          color: specialTheme.colors.red,
        },
      },
    },
    label: {
      content: ' *',
      fontSize: '1rem',
      fontWeight: 600,
      color: specialTheme.colors.dark,
    },
  },
  // @ts-ignore
  MuiAutocomplete: {
    root: {
      flexGrow: 1,
      flexShrink: 1,
      width: '100%',
      fontFamily: specialTheme.font.fontW1G,
    },
    inputRoot: {
      '&&[class*="MuiInput-root"]': {
        paddingBottom: 0,
      },
      '&&[class*="MuiOutlinedInput-root"] $input': {
        padding: '2px 0 3px',
        [theme.breakpoints.down(widthXS)]: {
          padding: 4,
          fontSize: '0.8rem',
        },
      },
      '&[class*="MuiOutlinedInput-root"]': {
        [theme.breakpoints.down(widthXS)]: {
          padding: 2,
          fontSize: '0.8rem',
        },
      },
    },
    listbox: {
      padding: 0,
      position: 'absolute',
      border: `1px solid ${specialTheme.colors.dark}`,
      boxShadow: '0 2px 0.25rem rgba(0, 0, 0, 0.15)',
      margin: `-0.3rem 0 0 -1px`,
      [theme.breakpoints.down(widthXS)]: {
        margin: `-0.3rem 0 0 0px`,
      },
      '& li': {
        fontFamily: specialTheme.font.fontW1G,
        [theme.breakpoints.down(widthXS)]: {
          fontSize: '0.8rem',
          padding: '0px 4px',
        },
      },
      backgroundColor: '#fff',
      '& li[data-focus="true"]': {
        backgroundColor: '#e6f7ff',
      },
      '& li[aria-selected="true"]': {
        fontWeight: 600,
        backgroundColor: '#e6f7ff',
      },
    },
  },
  MuiIconButton: {
    root: {
      padding: '0.5rem',
    },
  },
  MuiPaper: {
    rounded: {
      borderRadius: 0,
    },
    elevation1: {
      boxShadow: 'none',
    },
  },
  PrivateNotchedOutline: {
    root: {
      display: 'none',
    },
  },
  MuiFormHelperText: {
    contained: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}

export default theme
