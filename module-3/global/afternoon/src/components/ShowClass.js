import React from 'react';

//en los componentes de clase los datos llegan a través de this.props.

class ShowClass extends React.Component{
  render(){
    return (
      <div>
        Serie de clase {this.props.title} 
        <img src={this.props.img}/> 
      </div>
    );
  }
}

export default ShowClass;
