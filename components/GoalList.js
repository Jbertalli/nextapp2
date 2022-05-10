import React from 'react';
import Goal from '../components/Goal';

export default function GoalList({ goals, toggleGoal, count }) {             //pass in goals              
    return (
        // <div>
        //     {goals.length}
        // </div>
        goals.map(goal => {                                           //map on goals to <Goal> component
            return <Goal key={goal.id} goal={goal} toggleGoal={toggleGoal} count={count} />
        })
    );
}
