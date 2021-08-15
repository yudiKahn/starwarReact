import React from 'react'
const shootUrl = "https://1.bp.blogspot.com/-WC5Scs_KLKg/X9InszMCPGI/AAAAAAAACkY/WuLm6xYzSf0svaXT2RAXHnffIJsLLB0PACLcBGAsYHQ/s352/spaceship%2Bshot.png";
const imgExplosion = 'https://bestanimations.com/Military/Explosions/fire-explosion-animation-3-s.gif';

class GoodGay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            position:10,
            width:70,
            speed:4,
            shoots:[]
        }
    }
    componentDidMount(){
        this.props.onKeyDownHandler(e=>{
            if(e.key==="ArrowLeft") this.setState({position:this.state.position-this.state.speed});
            else if(e.key==="ArrowRight")this.setState({position:this.state.position+this.state.speed});
            else if(e.code==="Space") this.shoot();
        })
    }
    shoot = () => {
        let imgEl = <img key={this.state.shoots.length} alt="shoot"
        onLoad={e=>{
            let interval = setInterval(()=>{
                let enemies = Array.from(document.querySelectorAll('.enemy.exist'));
                let {top, left} = e.target.getBoundingClientRect();
                if(top<0)
                    return clearInterval(interval);
                let en = enemies.find(el=>{
                    let ePos = el.getBoundingClientRect();
                    if(top<=ePos.top&&left>=ePos.left&&left<=(ePos.left+ePos.width))
                        return true;
                    else return false;
                });
                if(en){
                    clearInterval(interval);
                    this.destroy(e.target, en);
                }
            },50)
        }}
        src={shootUrl} className="shoot-img" style={{left:this.state.position+(this.state.width/2),bottom:50}}/>;
        this.setState({shoots:[...this.state.shoots, imgEl]});
    }

    destroy = (shootImg, enemyImg) => {
        let enEl = document.getElementById(enemyImg.id);
        enEl.src = imgExplosion;
        enEl.classList.remove('exist');
        setTimeout(() => enEl.style.visibility ="hidden",1000 );
        shootImg.style.display="none";
        this.props.oneDown();
    }

    render(){
        return (<>
        <img
             alt="spaceship" id="good-gay" style={{left:this.state.position, width:this.state.width}}
             src="https://1.bp.blogspot.com/-E1rK8If4pDA/X9Ins_hPk9I/AAAAAAAACkc/EF0UkowaX5ktX7WsmVrmKBupntKnEo5SwCLcBGAsYHQ/s343/spaceship%2Bmando.png"/>
            {this.state.shoots.map((v,i)=> v)}
        </>)
    }
}

export default GoodGay
