import React from 'react';
import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
    let { good, neutral, bad } = props;
    let allValues = good + neutral + bad;

    const average = () => {
        let total = good - bad;
        return total / allValues;
    }

    const positivePercentage = () => {
        return good / allValues * 100;
    }

    return (
        <div>
            <h2>Statistics</h2>

            <table>
                <tbody>
                <tr>
                    <td><StatisticLine text="Good:"/></td>
                    <td><StatisticLine value={good}/></td>
                </tr>
                <tr>
                    <td><StatisticLine text="Neutral:"/></td>
                    <td><StatisticLine value={neutral}/></td>
                </tr>
                <tr>
                    <td><StatisticLine text="Bad:"/></td>
                    <td><StatisticLine value={bad}/></td>
                </tr>
                <tr>
                    <td><StatisticLine text="All:"/></td>
                    <td><StatisticLine value={allValues}/></td>
                </tr>
                <tr>
                    <td><StatisticLine text="Average:"/></td>
                    <td><StatisticLine value={average()}/></td>
                </tr>
                <tr>
                    <td><StatisticLine text="Positive:"/></td>
                    <td><StatisticLine value={positivePercentage()}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Statistics;