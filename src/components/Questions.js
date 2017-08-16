import React from 'react';

class Questions extends
React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
// <hr /> puts the line at the bottom.
  render() {
    let handleClick= () => {
      this.props.clickAlert(this.props.id)
    }
    return (
      <div>
        <i className="fa fa-plus-square fa-lg" aria-hidden="true" onClick={handleClick}></i>
        <h4 className="question">{this.props.question}</h4>
        <h4 className={this.props.className}>{this.props.answer}</h4>
        <hr />
      </div>
    );
  }
}

export default Questions
