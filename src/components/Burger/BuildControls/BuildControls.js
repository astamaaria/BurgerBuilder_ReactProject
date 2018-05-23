import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    // on type the casing have to be same as in BurgerBuilder's state
    {label: 'Salad', type: 'salad'},    
    {label: 'Bacon', type: 'bacon'},    
    {label: 'Cheese', type: 'cheese'},    
    {label: 'Meat', type: 'meat'},    
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl =>(
            <BuildControl key={ctrl.label} label ={ctrl.label}/>
        ))}
    </div>    
);
    


export default buildControls
