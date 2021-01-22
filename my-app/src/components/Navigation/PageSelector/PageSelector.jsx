import React from 'react';
import Dropdown from '../../Form/Dropdown/Dropdown';
import classes from './PageSelector.module.css'

const pageSelector = (props) =>{
    const dropdownDisplay = [
        "--Choose a Status Check--",
        "See my Pull Requests",
        "See my Github Issues",
        "See my Content Topics"
    ];

    const dropdownValues = [
        "",
        "PullRequests",
        "GithubIssues",
        "ContentTopics"
    ];
    
    return (
        <div className={classes.PageSelector}>
            <div>
                <div>I want to... &nbsp;
                    <Dropdown changed={props.changed} name="selectPage" options={dropdownDisplay} values={dropdownValues}/>
                </div>
            </div>
        </div>
        
    );
}

export default pageSelector;