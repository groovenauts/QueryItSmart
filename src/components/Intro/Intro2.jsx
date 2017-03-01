import React, { Component } from 'react'
import classNames from 'classnames'
import lang from '../../lang.json'
import Base from './IntroBase'

const titleStyle = {
  fontSize: '9vw',
} 

class Intro2 extends Component {
  render() {
    return (
      <Base
        title={lang.intro2.title}
        subtitle={lang.intro2.subtitle}
        titleStyle={titleStyle}
        />
    )
  }
}

export default Intro2
