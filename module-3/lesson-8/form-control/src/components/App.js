import React from 'react';
import '../stylesheets/App.css';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inputsData : {firstName:'',lastName:''},
      isSubmitted: false
    }
  }
  

  handleChange(name,value){
    let data = this.state.inputsData;
    data[name]=value;
    this.setState(prevState => {
      return {
        inputsData: {
          ...prevState.inputsData,
          ...data
        }
      };
    });
   }


  // handleChange(name,value){
  //   let {inputsData} = this.state;
  //   inputsData[name]=value;
  //   this.setState({inputsData});
  //  }


  handleSubmit(){
    this.setState({isSubmitted:true})
    console.log(this.state.inputsData)
  }

  render() {
    let {inputsData} = this.state;
    return (
      <div className="App">
        <Form 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          inputValue={inputsData}
        />
      </div>
    );
  }
}

export default App;
