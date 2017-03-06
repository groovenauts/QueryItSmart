import React, { Component } from 'react'
import classNames from 'classnames'

class Form extends Component {

  render() {
    const { title, subtitle } = this.props
    return (
      <div id="demand-forecast-header">
        <div className="row center-xs">
          <div className="col-xs-6">
            <div className="box box-container"
              style={{
                position: 'absolute',
                margin: '0 auto',
                right: 0,
                left: 0,
                top: 0,
                bottom: 0,
                wordWrap: 'breakWord',
                maxWidth: '80%',
                transform: 'translateY(14vh)',
              }}>
              <div className="title animated fadeIn">{ title }</div>
              <div className="subtitle">{ subtitle }</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
