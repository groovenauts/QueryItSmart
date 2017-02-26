import React, { Component } from 'react'
import classNames from 'classnames'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Select from './Select'
import Result from './Result'
import { connect } from 'react-redux'
import Searching from '../Searching'
import Query from '../Query'
import Restart from '../Restart'
import Circle from '../Circle'
import lang from '../../lang'
import { QUERY, DOCUMENT_IMAGE } from '../../const'

class Top extends Component {

  renderSelect() {
    const { searching, finished } = this.props.searchDocument
    if (!searching && !finished) {
      return (
        <Select />
      )
    }
    return null
  }
  renderSearch() {
    const { searching, searchId, sql } = this.props.searchDocument
    if (searching) {
      return (
        <Searching
          imgSrc={DOCUMENT_IMAGE}
          marqueeText={sql}
          pulseClassName="gray"
          textColor="black"
          />
      )
    }
    return null
  }
  renderResult() {
    const { finished, searchId } = this.props.searchDocument
    if (finished) {
      return (
        <Result />
      )
    }
    return null
  }
  render() {
    return (
      <MuiThemeProvider>
        <div id="document-search">
          { this.renderSelect() }
          { this.renderSearch() }
          { this.renderResult() }
        </div>
      </MuiThemeProvider>
    )
  }
}

const stateToProps = state => {
  return {
    searchDocument: state.searchDocument
  }
}

export default connect(
  stateToProps,
)(Top)
