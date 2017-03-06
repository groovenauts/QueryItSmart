import React, { Component } from 'react'
import classNames from 'classnames'
import { black, white } from 'material-ui/styles/colors'
import { bindActionCreators } from 'redux'
import * as appActions from '../../actions/appActions'
import * as documentActions from '../../actions/searchDocumentActions'
import { connect } from 'react-redux'
import _ from 'lodash'
import Button from '../Button'
import Overlay from '../Overlay'
import lang from '../../lang.json'
import Circle from '../Circle'
import HACKER_NEWS from '../../data/hacker_news.json'
import STACK_OVERFLOW from '../../data/stackoverflow.json'
import Finished from '../Finished'
import { roundElapsed } from '../../utils'

const roundDown = (num, decimals=0) => Math.floor(num * Math.pow(10, decimals)) / Math.pow(10, decimals)
const score = (num) => _.isNumber(num) ? _.template(lang.searchDocument.detail.label2)({num: roundDown(num * 100)}):''

const styles = {
  label: {
    fontSize: '3vh',
    fontWeight: 400,
    color: 'green',
  },
  title: {
    fontSize: '5vh',
    fontWeight: 400,
    color: 'black',
    margin: '14px 0px',
  },
  body: {
    fontSize: '3vh',
    fontWeight: 300,
    color: 'black',
  }
}
class Result extends Component {

  onRestart() {
    this.props.actions.restart();
    this.props.actions.documentRestart();
  }

  onShowSQL() {
    this.props.actions.showSQL()
  }

  onCloseFinished() {
    this.props.actions.closeFinished()
  }

  onSelectDocument(id, e) {
    const { actions, searchDocument } = this.props
    const { resultId } = searchDocument
    if (id !== resultId) {
      actions.selectDocument(id)
    }
  }

  renderFinished() {
    const { error, elapsedTime, totalSize, hideFinished } = this.props.searchDocument
    if (!error && !hideFinished) {
      const subtitle = _.template(lang.searchDocument.finished.subtitle)({
        size: totalSize || '-',
        time: roundElapsed(elapsedTime),
      })
      return (
        <Finished
          title={lang.searchDocument.finished.title}
          subtitle={subtitle}
          color={black}
          backgroundColor="rgba(255,255,255,0.9)"
          buttonClassName="button-black"
          closeHandler={this.onCloseFinished.bind(this)}
          />
      )
    }
    return null
  }
  renderLeft() {
    const { searchId } = this.props.searchDocument
    const source = _.find([...HACKER_NEWS, ...STACK_OVERFLOW], o => o.id === searchId) || {}
    return (
      <div className="col-xs-4 animated slideInLeft" style={{position: 'relative', height: '100%'}}>
        <div className="box" style={{
            wordWrap: 'break-word', 
            padding: '30px 10px 30px 30px',
            overflow: 'auto',
            height: '100vh',
          }}>
          <div style={styles.label}>{ lang.searchDocument.detail.label1 }</div>
          <div style={styles.title}>{ source.title }</div>
          <div style={styles.body}>{ source.body || source.text }</div>
        </div>
      </div>
    )
  }
  renderCenter() {
    const { searchId, resultId, results } = this.props.searchDocument
    const _results = _.reject(results, ret => ret.id === searchId)
    return (
      <div className="col-xs-4" style={{position: 'relative', height: '100%'}}>
        <div className="box list">
          <ul>
            { _.map(_results, (ret, i) => {
              return (
                <li key={`doc-${i}`}
                  className={ classNames(`${resultId && ret.id === resultId ? "is-selected":""}`, " animated slideDown")}
                  onClick={this.onSelectDocument.bind(this, ret.id)}>
                  <div className="list-item">
                    <div className="label">{ score(ret.similarity) }</div>
                    <div className="title">{ ret.title}</div>
                    <div className="body">{ ret.body || ret.text }</div>
                  </div>
                </li>
              )
            }) }
          </ul>
        </div>
      </div>
    )
  }
  renderRight() {
    const { resultId, results } = this.props.searchDocument
    const select = _.find(results, ret => ret.id === resultId) || {}
    return (
      <div className="col-xs-4 animated slideInDown" style={{position: 'relative', height: '100%'}}>
        <div className="box"
          style={{
            wordWrap: 'break-word',
            padding: '30px 30px 30px 10px',
            overflow: 'auto',
            height: '100vh',          
          }}>
          <div style={styles.label}>{ score(select.similarity) }</div>
          <div style={styles.title}>{select.title}</div>
          <div style={styles.body}>{select.body || select.text }</div>
        </div>
      </div>
    )
  }

  render() {
    const { searchId, hideFinished } = this.props.searchDocument
    return (
      <div id="document-search-result">
        { this.renderFinished() }
        <div className="row">
          { this.renderLeft() }
          { this.renderCenter() }
          { this.renderRight() }
        </div>
        { hideFinished ?
          <Button
            label="Restart"
            className="button-black"
            handler={this.onRestart.bind(this)}/>
          : null }
        { hideFinished ?
          <Button
            style={{right: '22vh'}}
            label={lang.button.sql}
            className="button-black"
            handler={this.onShowSQL.bind(this)}
            />
          : null }
      </div>
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
    actions: bindActionCreators(Object.assign({}, appActions, documentActions), dispatch)
  }
}

export default connect(
  stateToProps,
  dispatchToProps,
)(Result)
