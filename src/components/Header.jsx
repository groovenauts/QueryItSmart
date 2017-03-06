import React, { Component } from 'react'
import classNames from 'classnames'
import Slider from 'material-ui/Slider'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Typist from 'react-typist';
import { TYPING_OPTION } from '../const'
import { removeHTMLTag } from '../utils'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finishedTyping: false
    }
  }

  renderSubTitle() {
    const { finishedTyping } = this.state
    const { title, subtitle, style, animate, onTypingDone=()=>{} } = this.props
    const className = classNames("subtitle", `${title ? "":"large"}`)
    if (subtitle) {
      if (animate && !finishedTyping) {
        return (
          <div className={className}>
            <Typist
              cursor={TYPING_OPTION.cursor}
              onTypingDone={e => {
                this.setState({finishedTyping: true})
                onTypingDone()
              }}>
              { removeHTMLTag(subtitle) }
            </Typist>
          </div>
        )
      } else {
        return (
          <div className={className}
            dangerouslySetInnerHTML={{__html: subtitle}} />
        )
      }
    }
    return null
  }

  render() {
    const { title, style } = this.props
    return (
      <div className="content-header" style={style}>
        { title ? <div className="title">{ title }</div> : null }
        { this.renderSubTitle() }
      </div>
    )
  }
}

export default Header
