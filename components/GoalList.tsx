import React from 'react';
import Goal from './Goal';

export default function GoalList({ goals, toggleGoal, count }) {             
    return (
        goals.map(goal => {
            return <Goal key={goal.id} goal={goal} toggleGoal={toggleGoal} count={count} />
        })
    );
}