import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES ={
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.8,
    meat: 1
}

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state ={
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
                
            }, 
            totalPrice: 3,
            purchaseable: false,
            purchasing: false
        }
    }
    
    updatePurchaseState(ingredients){
        //my own implementation
        this.setState({purchaseable: Object.values(ingredients).some(val =>(val>0))})
    }
    
    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        const ingredients = {...this.state.ingredients};
        ingredients[type] = oldCount+1;
        
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients: ingredients, totalPrice: newPrice})
        this.updatePurchaseState(ingredients);
    }
    
    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        if(oldCount<=0){
            return;
        }
       const ingredients = {...this.state.ingredients};
        ingredients[type] = oldCount-1;
        
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients: ingredients, totalPrice: newPrice})
        this.updatePurchaseState(ingredients);
    }
    
    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }
    purchaseContinueHandler = () => {
        alert('You Continue!')
    }
    
    render(){
        const disableInfo={
            ...this.state.ingredients
        }
        for(let key in disableInfo){
            disableInfo[key]=disableInfo[key] <=0;
        }
        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice.toFixed(2)}
                    purchaseCanceled = {this.purchaseCancelHandler}
                    purchaseContinued ={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                purchaseable ={this.state.purchaseable}
                disabled ={disableInfo}
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}
                ordered={this.purchaseHandler}
                price ={this.state.totalPrice}/>
            </Fragment>
        );
    }
}

export default BurgerBuilder;