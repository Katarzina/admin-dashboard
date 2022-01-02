import React, { createContext, useContext, useReducer, Dispatch } from 'react'
import {ProjectType} from "../models";

const initialState = {
    projects: [],
    error: ''
}

type InitialStateType = {
  projects?: ProjectType[]
  error?: string
}

type ProjectsContextType = {
  state: InitialStateType
  dispatch: Dispatch<any>
}

const projectsReducer = (state = initialState, action: any) => {
    console.log(action,'value')
  switch (action.type) {
    case 'load':
      return { ...state, projects: action.payload.projects }
    case 'error':
      return { ...state, error: action.payload.error }
    default:
      return state
  }
}

export const ProjectsContext = createContext<ProjectsContextType>({
  state: initialState,
  dispatch: () => null,
})

export interface ProjectsContextProps {
  children: React.ReactElement
}

export default ({ children }: ProjectsContextProps) => {
  const [state, dispatch] = useReducer(projectsReducer, initialState)
  return (
    <ProjectsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}

export const useProjects = () => useContext(ProjectsContext)
