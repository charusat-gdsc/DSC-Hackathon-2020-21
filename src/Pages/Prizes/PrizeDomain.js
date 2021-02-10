import React from 'react';
import classes from './Prizes.module.css';
import PrizeWinner from './PrizeWinner';
import Heading from '../../Components/HomePage Components/Headings/Heading'

const PrizeDomain = (props) => {
    return (
        <div className = {classes.bg}>
            <Heading heading = {props.domainName} />
            <div className = {classes.flexContainer}>
                <PrizeWinner pos = "F"/>
                <PrizeWinner pos = "S"/>
            </div>
        </div>
    )
}
export default PrizeDomain;