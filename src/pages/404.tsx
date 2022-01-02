import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

import { specialTheme, widthSM, widthXS } from '../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: specialTheme.colors.white,
    fontSize: '1rem',
    minHeight: '80vh',
  },
  gridMainForm: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
}))

function ErrorPage() {
  const classes = useStyles()

  return (
    <Grid className={classes.root}>
      <Grid
        item
        sm={12}
        xl={12}
        xs={12}
        container
        direction="row"
        className={classes.gridMainForm}
      >
        <Grid
          item
          sm={9}
          xl={9}
          xs={12}
          container
          direction="row"
          className={classes.gridWorkArea}
        >
          <Grid
            item
            sm={12}
            xs={12}
            xl={12}
            container
            className={classes.gridResize}
          >
            <Typography className={classes.text} variant="h1">
              Error Route
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs sm={3} xl={3} />
      </Grid>
    </Grid>
  )
}

export default ErrorPage
