import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import { specialTheme, widthXS } from '../theme'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: specialTheme.font.fontW1G,
    color: specialTheme.colors.white,
    backgroundColor: specialTheme.colors.darkRed,
    '&:hover': {
      // @ts-ignore
      backgroundColor: specialTheme.colors.darkRed,
    },
    padding: '0 60px',
    [theme.breakpoints.down(widthXS)]: {
      width: '100%',
      margin: '0 15px 0 0',
    },
    textTransform: 'initial',
    fontSize: '1rem',
    borderRadius: 0,
    height: 46,
    minWidth: 210,
  },
}))

export const ButtonSubmit = ({
  children,
}: React.HTMLProps<HTMLButtonElement>) => {
  const classes = useStyles()
  return (
    <Button type="submit" className={classes.button}>
      {children}
    </Button>
  )
}
