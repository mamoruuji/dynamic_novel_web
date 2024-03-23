import { Theme } from '@mui/material/styles'

export const leaveTransition = (
  theme: Theme,
  properties: string | string[],
) => ({
  transition: theme.transitions.create(properties, {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
})

export const enterTransition = (
  theme: Theme,
  properties: string | string[],
) => ({
  transition: theme.transitions.create(properties, {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
})
