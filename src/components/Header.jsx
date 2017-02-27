import React, { Component } from 'react'
import classNames from 'classnames'
import Slider from 'material-ui/Slider'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Header extends Component {

  render() {
    const { title, subtitle, style } = this.props
    return (
      <div className="content-header" style={style}>
        <div className="title">{ title }</div>
        { subtitle ? <div className="subtitle" dangerouslySetInnerHTML={{__html: subtitle}} /> : null }
      </div>
    )
  }
}

export default Header
