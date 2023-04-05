import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  firstNameButton = () => {
    console.log(1)
    this.setState(prevState => ({isFirst: !prevState.isFirst}))
  }

  lastNameButton = () => {
    this.setState(prevState => ({isLast: !prevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state
    return (
      <div className="bg">
        <h1 className="head">Show/Hide</h1>
        <div className="container">
          <div className="name-container">
            <button className="button" onClick={this.firstNameButton}>
              Show/Hide Firstname
            </button>
            {isFirst ? (
              <div className="name">
                <p>Joe</p>
              </div>
            ) : null}
          </div>
          <div className="name-container">
            <button className="button" onClick={this.lastNameButton}>
              Show/Hide Lastname
            </button>
            {isLast ? (
              <div className="name">
                <p>Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
