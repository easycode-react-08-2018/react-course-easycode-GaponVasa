import React, {Component} from 'react';

import './App.css';

import {HomePage} from './pages/home-page'
import { AdminStorePage } from './pages/admin-store-page';
import { UserStorePage } from './pages/user-store-page';
import { ShoppingCard } from './pages/shopping-card';

class App extends Component {
    constructor(){
        super();
        this.state = {
            activePage: 'home-page',
            allGoods:['MacBook pro 2018', 'Dell xs', 'Microsoft Surface'],
            cardGoods:['MacBook pro 2018']
        }
    }

    addNewGoods = (newGood)=>{
        this.setState(
            prevState=>{
                return{
                    allGoods:[...prevState.allGoods, newGood],
                }
            }
        )
    }

    addToCardNewGoods = (newGood)=>{
        this.setState(
            prevState=>{
                return{
                    cardGoods:[...prevState.cardGoods, newGood],
                }
            }
        )
    }

    changeActivePageToHomePage = ()=>{
        this.setState({
            activePage: 'home-page',
        });
    }

    changeActivePageToAdminPage = ()=>{
        this.setState({
            activePage: 'admin-store-page',
        });
    }

    changeActivePageToUserPage = ()=>{
        this.setState({
            activePage: 'user-store-page',
        });
    }

    changeActivePageToShoppingCard = ()=>{
        this.setState({
            activePage: 'shopping-card',
        });
    }

    render() {
        const {activePage} = this.state;

        if(activePage === 'home-page'){
            return <HomePage 
                changeActivePageToAdminPage={this.changeActivePageToAdminPage}
                changeActivePageToUserPage={this.changeActivePageToUserPage}
            />;
        };
        if(activePage === 'admin-store-page'){
            return <AdminStorePage 
                changeActivePageToHomePage={this.changeActivePageToHomePage}
                changeActivePageToShoppingCard={this.changeActivePageToShoppingCard}
                allGoods={this.state.allGoods}
                addNewGoods={this.addNewGoods}
            />;
        };
        if(activePage === 'user-store-page'){
            return <UserStorePage
                changeActivePageToHomePage={this.changeActivePageToHomePage}
                changeActivePageToShoppingCard={this.changeActivePageToShoppingCard}
                allGoods={this.state.allGoods}
                cardGoods={this.state.cardGoods}
                addToCardNewGoods={this.addToCardNewGoods}
            />;
        };
        if(activePage === 'shopping-card'){
            return <ShoppingCard
                changeActivePageToHomePage={this.changeActivePageToHomePage}
                cardGoods={this.state.cardGoods}
            />;
        };

        return (
            <div className="wrapper">
                {this.state.activePage}
            </div>
        );
    }
}

export default App;