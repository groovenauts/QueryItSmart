import React, { Component } from 'react'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/searchDocumentActions'
import { connect } from 'react-redux'
import _ from 'lodash'
import Typist from 'react-typist';
import { TYPING_OPTION } from '../../const'
import { QUERY } from '../../const'
import HACKER_NEWS from '../../data/hacker_news.json'
import STACK_OVERFLOW from '../../data/stackoverflow.json'
import Query from '../Query'
import lang from '../../lang.json'
import Circle from '../Circle'

const styles = {
  label: {
    color: 'black',
    fontSize: 32,
    fontWeight: 400,
    wordBreak: 'breakAll',
    paddingBottom: 10,
    height: '3em',
    lineHeight: '1.5em',
    overflow: 'hidden',
  },
  body: {
    color: 'black',
    fontSize: '2vh',
    wordBreak: 'breakAll',
    height: '51%',
    overflow: 'hidden',
  },
  buttonText: {
    animation: 'flash 4s ease-in-out',
  },
}

class Select extends Component {
  constructor(props) {
    super(props)
    let contents = _.map(HACKER_NEWS, item => _.defaults(item, {
      queryType: "hackerNews",
      compiledQuery: QUERY.hackerNews.sql,
      categoryName: lang.searchDocument.category.hackerNews,
    }))
    contents = contents.concat(_.map(STACK_OVERFLOW, item => _.defaults(item, {
      queryType: "stackOverflow",
      compiledQuery: QUERY.stackOverflow.sql,
      categoryName: lang.searchDocument.category.stackOverflow,
    })))
    contents = _.sampleSize(contents, 4)
    this.state = {
      category: null,
      contents,
      count: 0,
    }

    setTimeout(() => {
      this.timer = setInterval(() => {
        const { contents, count } = this.state
        if (count < _.size(contents)) {
          this.animateTrigger()
        } else {
          clearInterval(this.timer)
        }
      }, 1000)
    }, 1000)
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  onClick(id, e) {
    const { actions } = this.props
    const target = _.find(this.state.contents, item => item.id === id)
    actions.searchDocument(target.queryType, id, target.compiledQuery({id}), target.categoryName)
  }

  animateTrigger() {
    const { count } = this.state
    this.setState({count: count+1})
  }

  renderHeader() {
    return (
      <div id="document-search-header">
        <div className="row center-xs">
          <div className="col-xs-6 animated fadeIn">
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
                  transform: 'translateY(10vh)',
                }}>
              <div style={{fontSize: '12vh', fontWeight: 400}}>
                { lang.searchDocument.select.title }
              </div>
              <div style={{fontSize: '4vh', padding: 20}}>
                <Typist
                  cursor={TYPING_OPTION.cursor}>
                  { lang.searchDocument.select.subtitle }
                </Typist>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderContents() {
    const { contents, count } = this.state
    return (
      <div id="document-search-content">
        <div className="row" style={{height: '100%'}}>
          { _.map(_.take(contents, count), (content, i) => {
            return (
              <div key={`content-${i}`}
                  className="col-xs-3 animated fadeInUp"
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
                  <div style={styles.label}>{ content.title || "NO TITLE" }</div>
                  <div style={styles.body}>{ content.body || "" }</div>
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
                    innerClassName="document-start-button  animated zoomIn"
                    style={{
                      position: 'absolute',
                      height: 100,
                      width: 100,
                      opacity: 1,
                      fontSize: '1.5em',
                      lineHeight: '100px',
                    }}>
                    <div style={styles.buttonText}>
                      Start
                    </div>
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
