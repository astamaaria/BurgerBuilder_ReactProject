import React, {Component, Fragment} from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    sideDrawerToggleHandler = () =>{
        const oldValue = this.state.showSideDrawer;
        this.setState({showSideDrawer: !oldValue})
    }
    render (){
        return (
        <Fragment>
            <Toolbar clicked ={this.sideDrawerToggleHandler}/>
            <SideDrawer closed={this.sideDrawerClosedHandler}
            open={this.state.showSideDrawer}/>
            <main className={classes.Content}> 
                {this.props.children}
            </main>
        </Fragment>
    );
    }
        
    
} 
 export default Layout;
