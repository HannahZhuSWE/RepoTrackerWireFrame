import React, { useState } from 'react';
import Aux from '../Auxilary/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Search from '../../components/Search/Search';
import DisplayInfo from '../../components/DisplayInfo/DisplayInfo';
import LoginPage from '../../components/Login/LoginPage/LoginPage';
import classes from './Layout.module.css'
const Layout = (props) =>{
    const [showResults, setShowResults] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [loginPage, setLoginPage] = useState(false);

    return(
        <Aux>
            <Toolbar clicked={() => setLoginPage(true)}/>
            <LoginPage show={loginPage} hide={() => setLoginPage(false)}/>
            <main className={classes.Content}>
                <Search 
                    clicked = {()=>{setShowResults(true)}}
                    value={searchValue}
                    change={(event) =>{setSearchValue(event.target.value)}}/>
                <hr/>
                <DisplayInfo show={showResults}/>
            </main>
        </Aux>
    );
}

export default Layout;