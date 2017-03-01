import React, { Component } from 'react'
import classNames from 'classnames'
import lang from '../../lang.json'
import Base from './IntroBase'

class Intro extends Component {
  render() {
    return (
      <Base
        title={lang.intro.title}
        subtitle={lang.intro.subtitle}
        />
    )
  }
}

export default Intro
