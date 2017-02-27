import React, { Component } from 'react'
import classNames from 'classnames'
import { yellow500, white, black, grey500 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/searchDocumentActions'
import { connect } from 'react-redux'
import Select from './Select'
import Result from './Result'
import Searching from '../Searching'
import Query from '../Query'
import SQL from '../SQL'
import Restart from '../Restart'
import Circle from '../Circle'
import lang from '../../lang'
import { QUERY, DOCUMENT_IMAGE } from '../../const'
import { roundElapsed } from '../../utils'

class Top extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elapsed: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.searchDocument.searching && nextProps.searchDocument.searching) {
      // Search start
      this.timer = setInterval(this.tick.bind(this), 50)
    }
    if (this.props.searchDocument.searching && !nextProps.searchDocument.searching) {
      // Search finished
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  tick() {
    this.setState({ elapsed: new Date() })
  }

  onCloseSQL() {
    this.props.actions.closeSQL()
  }

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
    const { searching, searchId, sql, category, startTime } = this.props.searchDocument
    if (searching) {
      const elapsed = roundElapsed(this.state.elapsed - startTime)
      const subtitle = _.template(lang.searchDocument.searching.subtitle)({
        source: category,
        time: elapsed,
      })
      return (
        <Searching
          imgSrc={DOCUMENT_IMAGE}
          title={lang.searchDocument.searching.title}
          subtitle={subtitle}
          marqueeText={sql}
          pulseColor={grey500}
          textColor={black}
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

  renderSQL() {
    const { showSQL, sql } = this.props.searchDocument
    if (showSQL) {
      return (
        <SQL
          header={lang.sql.header}
          body={sql}
          footer={lang.sql.footer}
          backgroundColor='rgba(0, 0, 0, 0.9)'
          headerColor={white}
          bodyColor={white}
          footerColor={yellow500}
          closeHandler={this.onCloseSQL.bind(this)}
          />
      )
    }
    return null
  }

  render() {
    // todo     filter: blur(10px);
    return (
      <MuiThemeProvider>
        <div id="document-search">
          { this.renderSelect() }
          { this.renderSearch() }
          { this.renderResult() }
          { this.renderSQL() }
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

const dispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  stateToProps,
  dispatchToProps,
)(Top)
