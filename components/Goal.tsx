//map over current array and return element of goals
import React, { useState } from 'react';
import { Label, Divider, Grid } from 'semantic-ui-react';

const config: any = {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
};

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

  const date = new Date();
  const year = date.getFullYear();

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
                onClick={() => {
                  handleGoalClick(), handleUnclick();
                }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
              <div>{goal.name}</div>
            </Label>
          </Grid.Column>
          <Grid.Column />
          <Grid.Column
            style={{ 
              fontSize: '1em', 
              margin: '14px 0% 0% 0%', 
              color: 'gray' 
            }}
          >
            {goal.date ? (
            <>
              {(goal.date).slice(5, 10)}-{year}
              {/* {goal.date} */}
            </>
            ): null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
    </div>
  );
}
