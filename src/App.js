import React, {Component} from 'react';
import './App.css';
import Title from './components/Title';
import Enemy from './components/Enemy';
import GoodGay from './components/GoodGay';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      start: false,
      isWon: null,
      enemies:3,
      currentEnemies:null,
      delegate:()=>{}
    }
  }
  componentDidMount(){
    document.addEventListener('keydown', e => {
      this.setState({start:true, currentEnemies:this.state.currentEnemies===null? this.state.enemies:this.state.currentEnemies});
      this.state.delegate(e);
    });
  }

  restart = () => setTimeout(() => this.setState({start:false,currentEnemies:null,isWon:null}), 1000);

  componentDidUpdate(){
    if(this.state.currentEnemies===0&&this.state.isWon===null){
      this.setState({isWon:true});
      this.restart();
    }
  }

  render(){
    return (<div className="bg-img">
      {this.state.currentEnemies}
      <Title start={this.state.start} isWon={this.state.isWon}/>
      <span className="enemies">
        {repeat(this.state.enemies)(i=> <Enemy lose={()=>{
          this.setState({isWon:false});
          this.restart();
        }} num={i} key={i} start={this.state.start}/>)}
      </span>
      <GoodGay oneDown={()=>this.setState({currentEnemies:this.state.currentEnemies-1})} onKeyDownHandler={(func)=>this.setState({delegate:func})}/>
  </div>);
  }
}

export default App;


function repeat(n){
  return function(func){
    let res = [];
    for (let i = 0;i < n;i++) {
      res.push(func(i));
    }
    return res;
  }
}