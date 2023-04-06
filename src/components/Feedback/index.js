import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {action: true}

  onClickEmoji = () => {
    this.setState(prevState => ({action: !prevState.action}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {action} = this.state

    return (
      <div className="container">
        <div className="card-container">
          {action ? (
            <div>
              <h1 className="header">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="list-container">
                {emojis.map(eachItem => (
                  <li className="item-container" key={eachItem.id}>
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="logo-img"
                      onClick={this.onClickEmoji}
                    />
                    <p className="name">{eachItem.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="love-container">
              <img src={loveEmojiUrl} alt="love emoji" className="love" />
              <h1 className="thank-you">Thank you!</h1>
              <p className="support">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
