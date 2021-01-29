import React from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import classes from './DisplayInfo.module.css'

//displays the info of the article and/or repo if there is info to display, 
//otherwise displays a message to the user asking for a github url
const displayInfo = (props) =>{

    let results = <p>Please enter the github link of an article or repo in the search field above.</p>;

    if(props.show){
        results = (
            <Aux>
                <h2 className={classes.Right}>Ownership Information</h2>
                <div className={classes.DisplayInfo}>
                    <div>
                        <h3>Article Information</h3>
                        <ul >
                            <li>Title: {props.articleData.title}</li>
                            <li>Author: {props.articleData.author}</li>
                            <li>ms.author: {props.articleData.msAuthor}</li>
                            <li>ms.manager: {props.articleData.msManager}</li>
                            <li>ms.service: {props.articleData.msService}</li>
                            <li>ms.subservice: {props.articleData.msSubservice}</li>
                            <li>Freshness: {props.articleData.freshness}</li>
                            <li># of Issues: {props.articleData.issues}</li>
                            <li># of Pull Requests: {props.articleData.pullRequests}</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Repo Information</h3>
                        <ul >
                            <li>M1: {props.repoData.m1}</li>
                            <li>M2: {props.repoData.m2}</li>
                            <li>Business Approvers: {props.repoData.businessApprovers}</li>
                            <li>Org: {props.repoData.org}</li>
                            <li>Public vs Private: {props.repoData.publicPrivate}</li>
                            <li>Repo Area: {props.repoData.repoArea}</li>
                            <li>Product Info: {props.repoData.productInfo}</li>
                            <li>Last Build from Master: {props.repoData.buildMaster}</li>
                            <li>Last Build from Live: {props.repoData.buildLive}</li>
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