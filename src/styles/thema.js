import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { white, deepPurple900 } from 'material-ui/styles/colors'

export const darkTheme = getMuiTheme({
  slider: {
    trackSize: 3,
    trackColor: white,
    trackColorSelected: white,
    handleSize: 30,
    handleSizeDisabled: 30,
    handleSizeActive: 30,
    handleColorZero: white,
    handleFillColor: white,
    selectionColor: white,
    rippleColor: 'rgba(255, 255, 255, 0.0)',
  }, 
})


export const demandForecastTheme = getMuiTheme({
  slider: {
    trackSize: 4,
    trackColor: deepPurple900,
    trackColorSelected: deepPurple900,
    handleSize: 14,
    handleSizeActive: 20,
    handleColorZero: deepPurple900,
    handleFillColor: deepPurple900,
    selectionColor: deepPurple900,
    rippleColor: deepPurple900,
  },
})
