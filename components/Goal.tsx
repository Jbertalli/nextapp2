// map over current array and return element of goals
import React, { useState } from 'react';
import { Label, Divider, Grid } from 'semantic-ui-react';

export default function Goal(values) {

  const { 
    goal,
    toggleGoal
  } = values;
  
  const [checked, setChecked] = useState<boolean>(false);

  function handleGoalClick() {
    toggleGoal(goal.id);
  }

  function handleUnclick() {
    setChecked((c) => !c);
  }

  return (
    <div>
      <Grid style={{ background: checked ? '#E0E1E2' : '#FFF' }}>
        {' '}
        <Grid.Row columns={3}>
          <Grid.Column>
            <Label
              size="massive"
              style={{
                fontSize: '21px',
                display: 'flex',
                justifyContent: 'flex-start',
                color: 'black',
                background: 'none'
              }}
            >
              <input
                type="radio"
                checked={goal.complete}
                readOnly
                style={{
                  transform: 'translateY(2px)',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  handleGoalClick(), handleUnclick();
                }}
              />
              <div
                style={{
                  marginLeft: '24.5px'
                }}
              >
                {goal.name}
              </div>
            </Label>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
      <Divider />
    </div>
  );
}
