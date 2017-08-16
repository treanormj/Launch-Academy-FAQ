import React from 'react';
import Questions from './Questions';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectionQuestionId: null
    }
    // Whenever you click something it always relates to this state.
    this.clickAlert = this.clickAlert.bind(this);
  }

// this allows me to have the answer disappear when I click a 2nd time.
  clickAlert(id){
    if (this.state.selectionQuestionId === id) {
      this.setState({selectionQuestionId: null})
    } else {
      this.setState({selectionQuestionId: id})
    }
  }

  render() {


    let question = this.props.data.map(quest => {
      // I need to make explicit declarations of variables. It won't know tht className is a variable without stating "let className"
      let className;
      if (this.state.selectionQuestionId === quest.id) {
        className = "showans"
      } else {
        className = "ans"
      }

      return (<Questions
        key={quest.id}
        id={quest.id}
        question={quest.question}
        answer={quest.answer}
        clickAlert={this.clickAlert}
        className = {className}
      />)
    })



    return(
      <div>
        <img src={'https://learn.launchacademy.com/assets/dyson_sphere/launch-logo-ec11466202b39431f9d3a67f9482886cd5de2f3301ce99067163159e48571006.png'} className="picture" />
        <h1 className="mainTitle">We are here to help</h1>
        {question}
      </div>

    )
  }
}

export default App;
