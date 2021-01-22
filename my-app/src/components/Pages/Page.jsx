import React, { useState } from 'react';
import ContentTopics from './ContentTopics/ContentTopics';
import GithubIssues from './GithubIssues/GithubIssues';
import PullRequests from './PullRequests/PullRequests';

const Page = (props) =>{
    const [author, setAuthor] = useState('');
    const [repo, setRepo] = useState('');
    const [issue, setIssue] = useState('');
    const [status, setStatus] = useState('');
    const [repoType, setRepoType] = useState({
        "public": false,
        "private": false
    });

    const checkboxHandler = (event) =>{
        const {name} = event.target;
        setRepoType({
            ...repoType,
            [name]: !repoType[name]
        });
    }

    if(props.page === ''){
        return null;
    }
    else if (props.page === 'ContentTopics'){
        
        return (<ContentTopics 
                    returnResults={props.returnResults}
                    changedAuthor={(event) => setAuthor(event.target.value)}
                    changedRepo={(event) => setRepo(event.target.value)}
                    search={props.search}/>);
    }
    else if (props.page === 'PullRequests'){
        return (<PullRequests 
                    returnResults={props.returnResults}
                    changedAuthor={(event) => setAuthor(event.target.value)}
                    changedStatus={(event) => setStatus(event.target.value)}
                    changedCheckbox={(event) => checkboxHandler(event)}
                    search={props.search}/>);
    }
    else if (props.page === 'GithubIssues'){
        return (<GithubIssues 
                    returnResults={props.returnResults}
                    changedAuthor={(event) => setAuthor(event.target.value)}
                    changedIssue={(event) => setIssue(event.target.value)}
                    search={props.search}/>);
    }
};

export default Page;