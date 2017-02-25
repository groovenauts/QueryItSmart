import React, { Component } from 'react'
import classNames from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/searchDocumentActions'
import { connect } from 'react-redux'
import _ from 'lodash'
import { QUERY } from '../../const'
import HACKER_NEWS from '../../data/hacker_news.json'
import STACK_OVERFLOW from '../../data/stackoverflow.json'
import Query from '../Query'
import Restart from '../Restart'
import lang from '../../lang.json'
import Circle from '../Circle'

const labelStyle = {
  color: 'black',
  fontSize: 32,
  wordBreak: 'breakAll',
  paddingBottom: 10,
  height: '3em',
  lineHeight: '1.5em',
  overflow: 'hidden',
}

const bodyStyle = {
  color: 'black',
  fontSize: 18,
  wordBreak: 'breakAll',
  height: '51%',
  overflow: 'hidden',
}

class Select extends Component {
  constructor(props) {
    super(props)
    let contents = _.map(HACKER_NEWS, item => _.defaults(item, {
      compiledQuery: QUERY.hackerNews.sql,
      categoryName: lang.searchDocument.category.hackerNews,
    }))
    contents = contents.concat(_.map(STACK_OVERFLOW, item => _.defaults(item, {
      compiledQuery: QUERY.stackOverflow.sql,
      categoryName: lang.searchDocument.category.hackerNews,
    })))
    contents = _.sampleSize(contents, 4)
    this.state = {
      category: null,
      contents,
    }
  }

  onClick(id, e) {
    const { actions } = this.props
    const target = _.find(this.state.contents, item => item.id === id)
    actions.searchDocument(id, target.compiledQuery({id}))
  }

  renderHeader() {
    return (
      <div id="document-search-header">
        <div className="row center-xs">
          <div className="col-xs-6">
            <div className="box"
                style={{
                  position: 'absolute',
                  margin: '0 auto',
                  right: 0,
                  left: 0,
                  top: 0,
                  overflow: 'hidden',
                  wordWrap: 'break-word',
                  maxWidth: '80%',
                  transform: 'translateY(14vh)',
                }}>
              <div className="large" style={{fontSize: 80}}>
                { lang.searchDocument.select.title }
              </div>
              <div style={{fontSize: 24, padding: 20}}>
                { lang.searchDocument.select.subtitle }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderContents() {
    const { contents } = this.state
    return (
      <div id="document-search-content">
        <div className="row" style={{height: '100%'}}>
          { _.map(contents, (content, i) => {
            return (
              <div key={`content-${i}`}
                  className="col-xs-3"
                  style={{
                    position: 'relative',
                    height: '100%',
                    border: '1px solid #E0E0E0',
                    borderWidth: '1px 1px 0px 0px',
                  }}>
                <div className="box"
                  style={{
                    wordWrap: 'break-word',
                    height: '70%',
                    padding: `20px ${i===0?"0px":"20px"} 20px ${i===_.size(contents)?"0px":"20px"}`,
                  }}>
                  <div style={labelStyle}>{ content.title || "NO TITLE" }</div>
                  <div style={bodyStyle}>{ content.body || "" }</div>
                </div>
                <div className="box" 
                    style={{
                      left: 0,
                      right: 0,
                      margin: 'auto',
                      bottom: 0,
                    }}>
                  <Circle
                    onClick={this.onClick.bind(this, content.id)}
                    innerClassName="document-start-button"
                    style={{
                      position: 'absolute',
                      height: 100,
                      width: 100,
                      opacity: 1,
                      lineHeight: '100px',
                    }}>
                    Start
                  </Circle>
                </div>
              </div>
            )
          }) }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        { this.renderContents() }
      </div>
      )
  }
}

const stateToProps = state => {
  return {
    searchImage: state.searchImage
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
)(Select)
