import React, { useState } from 'react';

const App = () => {
    const anecdotes = [
        'The best way to get a project done faster is to start sooner',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Even the best planning is not so omniscient as to get it right the first time.',
        'How does a project get to be a year late?... One day at a time.',
        'The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging.',
        'Plan to throw one (implementation) away; you will, anyhow.',
        'Every good work of software starts by scratching a developer\'s personal itch',
        'Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Program testing can be used to show the presence of bugs, but never to show their absence!'
    ]

    const [selected, setSelected] = useState(0);
    const [vote, setVote] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0));


    const setRandom = () => {
        const random = Math.floor((Math.random() * anecdotes.length));
        setSelected(random);

    }

    const castVote = () => {
        setVote([...vote, vote[selected] + 1])
        console.log(vote)
    }

    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <p>{vote[selected]} votes</p>
            <br/>
            <button onClick={setRandom}>Next anecdote</button>
            <button onClick={castVote}>Vote</button>

        </div>
    );
};

export default App;
