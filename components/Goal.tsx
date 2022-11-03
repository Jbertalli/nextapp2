//map over current array and return element of goals

import React, { useState } from 'react';
import { Label, Divider, Grid } from 'semantic-ui-react';

    const today = new Date();
    const config: any = { 
        year: 'numeric',
        month: 'short',
        day: '2-digit'
        // hour: '2-digit',
        // minute: '2-digit'
    };

    const DTF = new Intl.DateTimeFormat('default', config);

    console.log(DTF.format(today));

export default function Goal({ goal, toggleGoal, count }) {                //pass in goal from <GoalList> goals.map
    const [checked, setChecked] = useState<boolean>(false);

    function handleGoalClick() {
        toggleGoal(goal.id);
    }

    function handleUnclick() {
        setChecked((c) => !c);
    }

    // console.log(count);

    return (
        <div>
            <Grid style={{ background: checked ? '#E0E1E2' : '#FFF' }}>                                          {/* style={{ background: (count % 2) ? 'red' : 'blue' }} */}
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Label size="massive" style={{ fontSize: '21px', display: 'flex', justifyContent: 'flex-start', color: 'black', background: 'none' }}>
                        {/* <input type="radio" checked={goal.complete} checked={checked} onClick={() => {handleGoalClick(), handleUnclick()}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                            <input type="radio" checked={goal.complete} onClick={() => {handleGoalClick(), handleUnclick()}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          {/* onClick={handleUnclick} checked={checked} */}
                            <div>
                                {goal.name} 
                            </div>
                        </Label>
                    </Grid.Column>
                    <Grid.Column />
                    <Grid.Column style={{ fontSize: '1em', margin: '1% 0% 0% 0%', color: 'gray' }}>
                        Added { DTF.format(today) }
                    </Grid.Column>
                </Grid.Row>
            </Grid>      
            <Divider />                         
        </div>
    );
}
