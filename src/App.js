import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImg: 'https://i.imgur.com/KFICjor.jpg',
      name: 'Alexander Guevara',
      description: `Web Designer °Front-End Developer ° Pokemon Master`,
      social: {
        gh: 'https://github.com/kusillus',
        tw: 'https://twitter.com/kusillus',
        ln: 'https://www.linkedin.com/in/kusillus/'
      }
    }
    this.transformDescription = this.transformDescription.bind(this)
  }
  transformDescription(){
    let desc = this.state.description.replace(/°/g, '<b class="d_separator">|</b>')
    this.setState({description: desc})
    
  }
  componentDidMount() {
    this.transformDescription()
  }
  render() {
    return (
      <div className="App">
        <Header 
          profile={this.state.profileImg}
          name={this.state.name}
          description={this.state.description}
        />
        <Body
          social={this.state.social}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
