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
    color: specialTheme.colors.darkRed,
    padding: '0 5px',
    [theme.breakpoints.down(widthXS)]: {
      width: '100%',
      margin: '0 15px 0 0',
    },
    textTransform: 'initial',
    textDecoration: 'underline',
    textAlign: 'center',
    fontSize: '0.8rem',
    height: 30,
  },
}))

type BackButtonProps = {
  onClick: () => void
  children?: React.ReactNode
}

export const BackButton = ({
  onClick,
  children,
  ...props
}: BackButtonProps) => {
  const classes = useStyles()
  // @ts-ignore
  return (
    <Button className={classes.button} {...props} onClick={onClick}>
      {children}
    </Button>
  )
}
