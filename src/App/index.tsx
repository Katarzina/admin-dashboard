import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import theme from '../theme'
import AuthContext from '../context/auth'
import { RouterApp } from './RouterApp'
import ProjectsContext from '../context/projects'

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthContext>
      <ProjectsContext>
        <Router>
          <RouterApp />
        </Router>
      </ProjectsContext>
    </AuthContext>
  </ThemeProvider>
)

export default App
