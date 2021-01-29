import React, { useState } from 'react';
import {connect} from 'react-redux'; 

import Aux from '../Auxilary/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Search from '../../components/Search/Search';
import DisplayInfo from '../../components/DisplayInfo/DisplayInfo';
import LoginPage from '../../containers/LoginPage/LoginPage';
import classes from './Layout.module.css';
import * as actionCreators from '../../store/actions';

//gives the basic layout of the page
//keeps track of the value in the search bar and whether or not the login page should appear
export const Layout = (props) =>{
    const [searchValue, setSearchValue] = useState('');
    const [loginPage, setLoginPage] = useState(false);

    return(
        <Aux>
            <Toolbar 
                clicked={() => setLoginPage(true)}
                authenticated={props.authenticated}/>
            <LoginPage show={loginPage} hide={() => setLoginPage(false)}/>
            <main className={classes.Layout}>
                <Search 
                    clicked = {()=>{props.onSearch(searchValue)}}
                    value={searchValue}
                    change={(event) =>{setSearchValue(event.target.value)}}/>
                <hr/>
                <DisplayInfo 
                    show={props.showResults} 
                    articleData={props.articleData}
                    repoData={props.repoData}/>
            </main>
            <footer className={classes.Footer}>
                <p> This page is powered by the Repo Tracker Tool, maintained by Mike Jacobs @
                    <a href=""> www.aka.ms/repotracker</a>
                   
                </p>
            </footer>
        </Aux>
    );
}

//mapping of states to props
const mapStateToProps = state =>{
    return{
        showResults : state.displayResults.showResults,
        articleData : state.displayResults.articleData,
        repoData : state.displayResults.repoData,
        authenticated : state.login.authenticated
    };
};

//mapping of actions to props
const mapDispatchToProps = dispatch =>{
    return {
        onSearch: () => dispatch(actionCreators.searchAsync())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Layout);