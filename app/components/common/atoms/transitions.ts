import { Theme } from '@mui/material/styles'

export const leaveTransition = (
  theme: Theme,
  properties: string | string[],
) => ({
  transition: theme.transitions.create(properties, {
    duration: theme.transitions.duration.leavingScreen,
    easing: theme.transitions.easing.sharp,
  }),
})

export const enterTransition = (
  theme: Theme,
  properties: string | string[],
) => ({
  transition: theme.transitions.create(properties, {
    duration: theme.transitions.duration.enteringScreen,
    easing: theme.transitions.easing.easeOut,
  }),
})
