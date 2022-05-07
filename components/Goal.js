//map over current array and return element of goals

import React, { useState } from 'react';
import { Label, Divider } from 'semantic-ui-react';

export default function Goal({ goal, toggleGoal }) {                //pass in goal from <GoalList> goals.map
    const [checked, setChecked] = useState(false);

    function handleGoalClick() {
        toggleGoal(goal.id);
    }

    function handleUnclick() {
        setChecked((c) => !c);
    }

    return (
        <div>
            <Label size="massive" style={{ fontSize: '21px', display: 'flex', justifyContent: 'flex-start', background: '#FFF' }}>
                <input type="radio" checked={goal.complete} checked={checked} onClick={() => {handleGoalClick(), handleUnclick()}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          {/* onClick={handleUnclick} checked={checked} */}
                {goal.name}
            </Label>      
            <Divider />                         
        </div>
    );
}
