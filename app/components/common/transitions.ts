export const leaveTransition = (theme, properties) => ({
  transition: theme.transitions.create(properties, {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
})

export const enterTransition = (theme, properties) => ({
  transition: theme.transitions.create(properties, {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
})
