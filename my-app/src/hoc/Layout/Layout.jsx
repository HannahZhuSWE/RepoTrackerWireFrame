import React, { useState } from 'react';
import Aux from '../Auxilary/Auxilary';
import PageSelector from '../../components/Navigation/PageSelector/PageSelector';
import Page from '../../components/Pages/Page';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import LoginPage from '../../components/Login/LoginPage/LoginPage';

const Layout = (props) =>{
    const [loginPage, setLoginPage] = useState(false);
    const [page, setPage] = useState('');
    const [returnResults, setReturnResults] = useState(false);

    const pageChangeHandler = (event) =>{
        setPage(event.target.value);
        setReturnResults(false);
    }

    const searchHandler = () =>{
        setReturnResults(true);
    }

    return (
        <Aux>
            <Toolbar clicked={() => setLoginPage(true)}/>
            <LoginPage show={loginPage} hide={() => setLoginPage(false)}/>
            <main className={classes.Content}>
                <PageSelector changed={(event) => pageChangeHandler(event)}/>
                <hr/><br/>
                <Page 
                    page={page} 
                    returnResults={returnResults}
                    search={searchHandler}
                />
            </main>
        </Aux>
    );
}

export default Layout;