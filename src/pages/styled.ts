import { makeStyles } from '@material-ui/core/styles'
import { specialTheme, widthSM, widthXS } from '../theme'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: specialTheme.colors.white,
    minHeight: '80vh',
  },
  gridMainForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: specialTheme.layout.gridMainFormMaxWidth,
    backgroundColor: specialTheme.colors.white,
    padding: specialTheme.layout.gridMainFormPadding,
    [theme.breakpoints.down(widthSM)]: {
      padding: specialTheme.layout.gridMainFormPaddingDownWidthSM,
    },
  },
  gridWorkArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: specialTheme.layout.gridWorkAreaMaxWidth,
    backgroundColor: specialTheme.colors.white,
    paddingLeft: specialTheme.layout.gridWorkAreaPaddingLeft,
    margin: specialTheme.layout.gridWorkAreaMargin,
    minHeight: specialTheme.layout.gridWorkAreaMinHeight,
    [theme.breakpoints.down(widthXS)]: {
      minHeight: specialTheme.layout.gridWorkAreaMinHeightDownWidthXS,
    },
  },
  gridResize: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: specialTheme.layout.gridItemPadding,
    [theme.breakpoints.down(widthXS)]: {
      padding: specialTheme.layout.gridItemPaddingDownWidthXS,
    },
  },
  dashboardContainer: {
    maxWidth: specialTheme.layout.gridMainFormMaxWidth,
    backgroundColor: specialTheme.colors.white,
    padding: specialTheme.layout.gridMainFormPadding,
    [theme.breakpoints.down(widthSM)]: {
      padding: specialTheme.layout.gridMainFormPaddingDownWidthSM,
    },
  },
  gridLeft: {
    padding: specialTheme.layout.gridItemPadding,
    backgroundColor: specialTheme.colors.gray.light,
    [theme.breakpoints.down(widthXS)]: {
      padding: specialTheme.layout.gridItemPaddingDownWidthXS,
    },
  },
  gridRight: {
    padding: specialTheme.layout.gridItemPadding,
    backgroundColor: specialTheme.colors.white,
    [theme.breakpoints.down(widthXS)]: {
      padding: specialTheme.layout.gridItemPaddingDownWidthXS,
    },
  },
  fieldSize: {
    width: '100%',
    fontFamily: specialTheme.font.fontW1G,
  },
  gridButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: specialTheme.layout.gridButtonMargin,
  },
  text: {
    color: specialTheme.colors.dark,
    fontFamily: specialTheme.font.fontW1G,
    fontSize: specialTheme.layout.gridTypographyTextFontSize,
    fontWeight: specialTheme.layout.gridTypographyTextFontWeight,
    [theme.breakpoints.down(widthXS)]: {
      fontSize: specialTheme.layout.gridTypographyTextFontSizeWidthXS,
    },
    letterSpacing: specialTheme.layout.gridTypographyTextLetterSpacing,
    margin: specialTheme.layout.gridTypographyTextMargin,
  },
  tablePadding: {
    [theme.breakpoints.down(widthSM)]: {
      paddingRight: 16,
    },
  },
  tableRowBackground: {
    backgroundColor: 'rgba(228, 240, 248, 0.5)',
    borderTop: '1px solid #ebebeb',
    borderBottom: '1px solid #ebebeb',
  },
  tableKeysColor: {
    fontWeight: 400,
    color: '#737373 ',
    fontSize: '1rem',
    [theme.breakpoints.down(widthXS)]: {
      fontSize: '0.8rem',
    },
    letterSpacing: '0.18px',
    //fontFamily: theme.palette.primary.fontW1G,
  },
  tableValuesColor: {
    fontWeight: 400,
    fontSize: '1rem',
    [theme.breakpoints.down(widthXS)]: {
      fontSize: '0.8rem',
    },
    letterSpacing: '0.21px',
    //fontFamily: theme.palette.primary.fontW1G,
  },
  columnWidth: {
    width: '50%',
    whiteSpace: 'pre-line',
  },
  buttonText: {
    fontSize: '1rem',
    [theme.breakpoints.down(widthXS)]: {
      fontSize: '0.8rem',
    },
    letterSpacing: 0.24,
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0.7rem',
  },
  emptyGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3rem 0 0 0',
  },
}))
