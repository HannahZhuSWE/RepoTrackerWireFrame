import React from 'react';
import classes from './PullRequests.module.css';
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

const dropdownDisplayStatus = [
    "--Choose a Status--",
    "Open",
    "Closed",
    "Created"
];

const dropdownValuesStatus = [
    "",
    "1",
    "2",
    "3"
];

const pullRequests = (props) =>{
    return (
        <div className={classes.PullRequests}>
            <div><h2 className={classes.Right}>Pull Requests Tracker</h2></div>
            <div className={classes.Box}>
                <span>
                    <Dropdown 
                        label="Choose Author" 
                        name="pullRequestsAuthor" 
                        options={dropdownDisplayAuthor} 
                        values={dropdownValuesAuthor}
                        changed={props.changedAuthor}
                    />
                </span>
                <span>
                    <Dropdown 
                        label="Choose a Pull Request Status" 
                        name="pullRequestsStatus" 
                        options={dropdownDisplayStatus} 
                        values={dropdownValuesStatus}
                        changed={props.changedStatus}
                    />
                </span>
                <span className={classes.Vertical}>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="Public"
                                onCheckboxChange={props.changedCheckbox}
                                key="public"
                            />
                            Public
                        </label>
                    </div>
                        
                        <label>
                            <input
                                type="checkbox"
                                name="Private"
                                onCheckboxChange={props.changedCheckbox}
                                key="private"
                            />
                            Private
                        </label>
                </span>
            <button onClick={props.search}>Search</button>
            </div>
            
            <div>
                <br/><br/>
                {props.returnResults ? <Table /> : null}
            </div>
        </div>
        
    );
};

export default pullRequests;