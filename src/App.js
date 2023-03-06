import React, {Component} from 'react'; 
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
render(){
  return (
    <div className="App">
      <div className='age'>
        your age : <span>{this.props.mahend}</span>
      </div>
      <button className='up' onClick={this.props.onup}>Age UP</button>
      <button className='down' onClick={this.props.ondown}>Age DOWN</button>
    </div>
  );
}
}
const mapStateToProps = state => {
  return{
    mahend : state.age 
  };
};

const mapDispatchToProps = props =>{
  return {
    onup : () => props ({type:"AGE_UP", value:1}),
    ondown : () => props ({type:"AGE_DOWN", value:1})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
) (App);
