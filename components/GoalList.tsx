import React from 'react';
import Goal from './Goal';

export default function GoalList(values) {

    const { 
      goals,
      toggleGoal,
      user
    } = values;
    
  return (
    goals.map((goal) => {
      return (
        <Goal key={goal.id} goal={goal} toggleGoal={toggleGoal} user={user} goals={goals} />
      );
    })
  );
}
