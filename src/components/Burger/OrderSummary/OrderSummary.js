import React, {Component, Fragment} from 'react'
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    //could be a functional component. Left like this for debuggin purpose 
    componentWillUpdate(){
        console.log("OrderSummary is updating")
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
    .map(ingKey =>{
        return <li key={ingKey}><span style={{textTransform: 'capitalize'}}>
        {ingKey}</span>: {this.props.ingredients[ingKey]}</li>
    });
        return(
            <Fragment>
                <h3> Your Order </h3>
                <p> A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Fragment> 
        );
    }
    
}

export default OrderSummary;
    
