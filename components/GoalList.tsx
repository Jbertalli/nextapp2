import React from 'react';
import Goal from './Goal';

export default function GoalList(values) {

    const { 
        goals, 
        toggleGoal,
        count 
    } = values;
    
  //pass in goals
  return (
    // <div>
    //     {goals.length}
    // </div>
    goals.map((goal) => {
      //map on goals to <Goal> component
      return (
        <Goal key={goal.id} goal={goal} toggleGoal={toggleGoal} count={count} />
      );
    })
  );
}
