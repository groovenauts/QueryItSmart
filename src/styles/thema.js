import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { white } from 'material-ui/styles/colors'

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
