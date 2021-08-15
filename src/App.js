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
      dead:0,
      delegate:()=>{}
    }
  }
  componentDidMount(){
    document.addEventListener('keydown', e => {
      this.setState({start:true});
      this.state.delegate(e);
    });
  }

  restart = () => setTimeout(() => this.setState({start:false,isWon:null,dead:[]}), 1000);

  componentDidUpdate(){
    if(this.state.dead===this.state.enemies&&!this.state.isWon){
      this.setState({isWon:true});
      this.restart();
    }
  }

  render(){
    return (<div className="bg-img">
      <Title start={this.state.start} isWon={this.state.isWon}/>
      <span className="enemies">
        {new Array(this.state.enemies).fill("").map((v,i)=> <Enemy lose={()=>{
          this.setState({isWon:false}); this.restart();
        }} key={i} num={i} start={this.state.start}/>)}
      </span>
      <GoodGay oneDown={()=>this.setState({dead:this.state.dead+1})} onKeyDownHandler={(func)=>this.setState({delegate:func})}/>
  </div>);
  }
}

export default App;