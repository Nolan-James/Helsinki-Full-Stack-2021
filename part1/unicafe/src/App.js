import React, { useState } from 'react';
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const totalCount = good + neutral + bad;

    return (

        <div>
            <h2>Give feedback</h2>

            <Button good={() => setGood(good + 1)} text="Good"/>
            <Button good={() => setNeutral(neutral + 1)} text="Neutral"/>
            <Button good={() => setBad(bad + 1)} text="Bad"/>

            {totalCount > 0 &&
            <Statistics good={good} neutral={neutral} bad={bad}/>
            }

        </div>
    );
};

export default App;
