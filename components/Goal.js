//map over current array and return element of goals

import React from 'react';
import { Label, Divider } from 'semantic-ui-react';

export default function Goal({ goal, toggleGoal }) {                //pass in goal from <GoalList> goals.map

    function handleGoalClick() {
        toggleGoal(goal.id);
    }

    return (
        <div>
            <Label size="massive" style={{ fontSize: '21px', display: 'flex', justifyContent: 'flex-start', background: '#FFF' }}>
                <input type="radio" checked={goal.complete} onChange={handleGoalClick} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {goal.name}
            </Label>      
            <Divider />                         
        </div>
    );
}
