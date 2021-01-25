import React from 'react';
import classes from './GithubIssues.module.css';
import Dropdown from '../../Form/Dropdown/Dropdown';
import Table from '../../Table/Table';

const dropdownDisplayAuthor = [
    "--Choose Author--",
    "Person 1",
    "Person 2",
    "Person 3"
];

const dropdownValuesAuthor = [
    "",
    "Person1",
    "Person2",
    "Person3"
];

const dropdownDisplayIssue = [
    "--Choose Repo--",
    "Status 1",
    "Status 2",
    "Status 3"
];

const dropdownValuesIssue = [
    "",
    "1",
    "2",
    "3"
];

const githubIssues = (props) =>{
    return (
        <div className={classes.GithubIssues}>
            <h2 className={classes.Right}>Github Issues Tracker</h2>
            <span>
                <Dropdown 
                    label="Choose Author" 
                    name="githubIssueAuthor" 
                    options={dropdownDisplayAuthor} 
                    values={dropdownValuesAuthor}
                    changed={props.changedAuthor}
                />
            </span>
            <span>
                <Dropdown 
                    label="Choose a Github Issue Status" 
                    name="githubIssueIssue" 
                    options={dropdownDisplayIssue} 
                    values={dropdownValuesIssue}
                    changed={props.changedIssue}
                />
            </span>
            <button onClick={props.search}>Search</button>
            <div>
                <br/><br/>
                {props.returnResults ? <Table /> : null}
            </div>
        </div>
        
    );
};

export default githubIssues;