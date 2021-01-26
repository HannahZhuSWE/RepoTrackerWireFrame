import React from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import classes from './DisplayInfo.module.css'

//displays the info of the article and/or repo if there is info to display, 
//otherwise displays a message to the user asking for a github url
const displayInfo = (props) =>{
    //path to json file containing the article metadata
    const articleData = require("../../assets/data/articleData.json");
    //path to json file containing the repo metadata
    const repoData = require("../../assets/data/repoData.json");

    let results = <p>Please enter the github link of an article or repo in the search field above.</p>;

    if(props.show){
        results = (
            <Aux>
                <h2 className={classes.Right}>Ownership Information</h2>
                <div className={classes.DisplayInfo}>
                    <div>
                        <h3>Article Information</h3>
                        <ul >
                            <li>Title: {articleData.title}</li>
                            <li>Author: {articleData.author}</li>
                            <li>ms.author: {articleData.msAuthor}</li>
                            <li>ms.manager: {articleData.msManager}</li>
                            <li>ms.service: {articleData.msService}</li>
                            <li>ms.subservice: {articleData.msSubservice}</li>
                            <li>Freshness: {articleData.freshness}</li>
                            <li># of Issues: {articleData.issues}</li>
                            <li># of Pull Requests: {articleData.pullRequests}</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Repo Information</h3>
                        <ul >
                            <li>M1: {repoData.m1}</li>
                            <li>M2: {repoData.m2}</li>
                            <li>Business Approvers: {repoData.businessApprovers}</li>
                            <li>Org: {repoData.org}</li>
                            <li>Public vs Private: {repoData.publicPrivate}</li>
                            <li>Repo Area: {repoData.repoArea}</li>
                            <li>Product Info: {repoData.productInfo}</li>
                            <li>Last Build from Master: {repoData.buildMaster}</li>
                            <li>Last Build from Live: {repoData.buildLive}</li>
                        </ul>
                    </div>
                </div>
            </Aux>
        );
    }

    return (
        <div>
            {results}   
        </div>
            
    );
}

export default displayInfo;