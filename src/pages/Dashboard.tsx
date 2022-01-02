import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useStyles } from './styled'
import BackButtonLayout from '../components/BackButtonLayout'
import useAsync from '../hooks/useAsync'
import { useProjects } from '../context/projects'
import getProjects from '../services/projects/getProjects'
import { ProjectType } from '../models'

const Dashboard = () => {
  const classes = useStyles()
  const { state, dispatch } = useProjects()
  const { fetch: getMyProjects, pending } = useAsync({
    promiseFn: () => loadProjects(),
  })

  const loadProjects = () => {
    return async () => {
      try {
        const projects = (await getProjects()) as any
        console.log(projects, 'projects')
        const { data } = projects
        dispatch({ type: 'load', payload: { projects: data } })
      } catch (error) {
        console.log(error)
        //dispatch({ type: 'error', payload: { error: error?.message } })
        throw error
      }
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        sm={12}
        xl={12}
        xs={12}
        direction="row"
        className={classes.dashboardContainer}
      >
        <Grid
          item
          sm={3}
          xl={3}
          xs={3}
          container
          direction="column"
          className={classes.gridLeft}
        >
          <Typography className={classes.text} variant="h3">
            {'dashboard'}
          </Typography>
          <BackButtonLayout text="Projects" onClick={() => getMyProjects()} />
        </Grid>
        <Grid
          item
          sm={9}
          xl={9}
          xs={9}
          container
          direction="column"
          className={classes.gridRight}
        >
          <Typography className={classes.text} variant="h3">
            Projects
          </Typography>
          {state.projects?.length &&
            state.projects?.map((item: ProjectType) => (
              <Grid key={item.id}>{item.id + ' ' + item.name}</Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Dashboard
