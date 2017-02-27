import React, { Component } from 'react'
import classNames from 'classnames'
import { yellow500, white } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/searchDocumentActions'
import { connect } from 'react-redux'
import Select from './Select'
import Result from './Result'
import Searching from '../Searching'
import Query from '../Query'
import Overlay from '../Overlay'
import Restart from '../Restart'
import Circle from '../Circle'
import lang from '../../lang'
import { QUERY, DOCUMENT_IMAGE } from '../../const'

class Top extends Component {

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

  renderSQL() {
    const { showSQL, sql } = this.props.searchDocument
    if (showSQL) {
      return (
        <Overlay
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
