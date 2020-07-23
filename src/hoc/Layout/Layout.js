import React, {Component} from "react";
import Aux from "../Aux/Aux";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

import classes from './Layout.module.css'

class layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloserHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
           return  {showSideDrawer: !prevState.showSideDrawer}})
    }

    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer}  closed={this.sideDrawerCloserHandler}/>
                <main className={classes.Content} >{this.props.children}</main>
            </Aux>
        )
    }
};

export default layout;
