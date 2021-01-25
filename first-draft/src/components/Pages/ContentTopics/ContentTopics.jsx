import React from 'react';
import classes from './ContentTopics.module.css';
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

const dropdownDisplayRepo = [
    "--Choose Repo--",
    "Windows",
    ".Net",
    "Azure"
];

const dropdownValuesRepo = [
    "",
    "windows",
    ".net",
    "azure"
];

const contentTopics = (props) =>{
    return (
        <div className={classes.ContentTopics}>
            <h2 className={classes.Right}>Content Topics Tracker</h2>
            <span>
                <Dropdown 
                    label="Choose Author" 
                    name="contentTopicAuthor" 
                    options={dropdownDisplayAuthor} 
                    values={dropdownValuesAuthor}
                    changed={props.changedAuthor}
                />
            </span>
            <span>
                <Dropdown 
                    label="Choose a Repo" 
                    name="contentTopicRepo" 
                    options={dropdownDisplayRepo} 
                    values={dropdownValuesRepo}
                    changed={props.changedRepo}
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

export default contentTopics;