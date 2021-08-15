import React from 'react'

const Title = ({start,isWon}) => !start ? (
    <h1 className="h1">Press Any Key To Start</h1>) : isWon===true ? (
        <h1 className="h1">You Won !!!</h1>
    ): isWon===false ? (
        <h1 className="h1">You Lose )-:</h1>
    ):null;

export default Title
