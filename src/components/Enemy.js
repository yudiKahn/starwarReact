import React from 'react'

const imgUrl = `https://1.bp.blogspot.com/-im_g8LYhWKU/X9IntFa_tvI/AAAAAAAACkg/VElGMKJEzFcAAzrbzb23JksDHWihTwT8ACLcBGAsYHQ/s405/spaceship%2Benemy.png`;

const Enemy = ({num, start,lose}) => start &&
 (<img onLoad={e=>{
    let el = document.getElementById(e.target.id);
    if(el.classList.contains('exist')){
        let interval = setInterval(() => {
            let {top,height} = el.getBoundingClientRect();
            if(top+height>window.innerHeight)
                lose();
        }, 50);
    }
 }} src={imgUrl} alt="" className="enemy exist" id={`enemy${num}`}/>)

export default Enemy;