import React, { Component } from 'react'
import classNames from 'classnames'
import Button from './Button'
import Popover from 'material-ui/Popover';

const style = {
  maxHeight: 600,
  maxWidth: 800,
  textAlign: 'left',
  display: 'inline-block',
  padding: '0px 20px',
  color: 'white',
}

class PopoverButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }
  onClick = (e) => {
    e.preventDefault();
    this.setState({
      open: true,
      anchorEl: e.currentTarget,
    })
  }
  onClose = () => {
    this.setState({
      open: false,
    })
  }
  render() {
    const { label='Show SQL', text, buttonColor, labelColor, textColor, popupBackgroundColor } = this.props
    return (
      <div>
        <Button
          label={label}
          style={{right: 220}}
          handler={ this.onClick.bind(this) }
          buttonColor={buttonColor}
          labelColor={labelColor}
          />
        <Popover
          style={_.defaults(style, {backgroundColor: popupBackgroundColor})}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{"horizontal":"right","vertical":"top"}}
          targetOrigin={{"horizontal":"right","vertical":"bottom"}}
          onRequestClose={this.onClose}
        >
        <pre>{text}</pre>
        </Popover>
      </div>
    )
  }
}

export default PopoverButton
