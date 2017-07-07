import React, { Component } from 'react'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/appActions'
import GoogleReCAPTCHA from 'react-google-recaptcha'
import lang from '../lang.json'

class ReCAPTCHA extends Component {
  onChange(value) {
    this.props.actions.recaptchaVerify(value)
  }
  render() {
    const { siteKey } = this.props
    const { authorized } = this.props.app
    if (!siteKey || authorized) {
      return null
    }
    return (
      <div id="recaptcha">
        <div className="container">
          <div className="box">
            <div className="recaptcha-container">
              <label className="animated fadeIn">{ lang.recaptcha.title }</label>
              <GoogleReCAPTCHA
                ref="recaptcha"
                sitekey={siteKey}
                onChange={this.onChange.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    app: state.app,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReCAPTCHA)
