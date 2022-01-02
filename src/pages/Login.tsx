import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Form, Formik } from 'formik'
import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { ButtonSubmit } from '../components/Button'
import TextField from '../components/TextField'
import { useAuth } from '../context/auth'
import { LoginInitialValues, LoginSchema } from '../helpers'
import { useStyles } from './styled'

const Login = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const { isAuth, setAuth } = useAuth()
  if (isAuth) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Formik
      initialValues={LoginInitialValues}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        setLoading(true)
      }}
    >
      {({ errors, handleChange, touched, handleBlur }) => (
        <Form className={classes.root}>
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
                <Typography className={classes.text} variant="h3">
                  {'LOGIN'}
                </Typography>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  xl={12}
                  container
                  className={classes.gridItem}
                  spacing={2}
                >
                  <Grid item xl={6} xs={6} sm={6} className={classes.fieldSize}>
                    <TextField
                      //@ts-ignore
                      name="login"
                      error={errors.login && touched.login}
                      label="Login"
                      placeholder="login"
                      helperText={
                        errors.login && touched.login ? errors.login : null
                      }
                      onChange={handleChange}
                      className={classes.fieldSize}
                      InputProps={{ required: false }}
                      inputProps={{ maxLength: 10 }}
                      onBlur={handleBlur}
                      required
                    />
                  </Grid>
                  <Grid item xl={6} xs={6} sm={6} className={classes.fieldSize}>
                    <TextField
                      //@ts-ignore
                      name="password"
                      error={errors.password && touched.password}
                      label="password"
                      helperText={
                        errors.password && touched.password
                          ? errors.password
                          : null
                      }
                      onChange={handleChange}
                      className={classes.fieldSize}
                      InputProps={{ required: false }}
                      inputProps={{ maxLength: 20 }}
                      onBlur={handleBlur}
                      required
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  xl={12}
                  className={classes.gridButton}
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <ButtonSubmit>SUBMIT</ButtonSubmit>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs sm={3} xl={3} />
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default Login
