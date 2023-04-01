import React from 'react';
import Goal from './Goal';

export default function GoalList(values) {

    const { 
      newGoals1,
      goals,
      toggleGoal,
      user,
      arr
    } = values;

    console.log(goals);
    
  return (
    goals.map((goal) => {
      return (
        <Goal 
          key={newGoals1.id} 
          newGoals1={newGoals1} 
          goal={goal} 
          toggleGoal={toggleGoal} 
          user={user} 
          goals={goals} 
          arr={arr}
        />
      );
    })
  );
}
