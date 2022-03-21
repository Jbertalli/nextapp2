// import Head from 'next/head';

// const TrackProgress = () => {
//     return (
//         <>
//             <Head>
//                 <title>HealthStat | Track Progress</title>
//                 <meta name="keywords" content="track progress, history, improvement" /> 
//             </Head>
//             TrackProgress
//         </>
//     );
// }

// export default TrackProgress;

import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class CalorieForm extends Component {

  state = { age: '', feet: '', inches: '', weight: '', sex: '', lifestyle: '', centimeters: '', kilograms: '', submittedAge: '', submittedFeet: '', submittedInches: '', submittedWeight: '', submittedSex: '', submittedLifestyle: '', submittedCentimeters: '', submittedKilograms: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { age, feet, inches, weight, sex, lifestyle, centimeters, kilograms } = this.state;
    
    this.setState({ submittedAge: age, submittedFeet: feet, submittedInches: inches, submittedWeight: weight, submittedSex: sex, submittedLifestyle: lifestyle, submittedCentimeters: centimeters, submittedKilograms: kilograms });
    //console result object
    console.log(this.state)
  }

  //show state of input on screen
  render() {
    const { age, feet, inches, weight, sex, lifestyle, centimeters, kilograms, submittedAge, submittedFeet, submittedInches, submittedWeight, submittedSex, submittedLifestyle, submittedCentimeters, submittedKilograms } = this.state

    let imperial=true;

    return (
      <div>
        <Form widths="equal" onSubmit={this.handleSubmit}>
        {/* imperial to metric ternary */}
        {imperial ? (<>
          <Form.Group>
            <Form.Input
              placeholder='Age'
              name='age'
              type="number"
              min="0"
              max="120"
              required
              value={age}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Feet'
              name='feet'
              type="number"
              min="0"
              max="8"
              required
              value={feet}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Inches'
              name='inches'
              type="number"
              min="0"
              max="12"
              required
              value={inches}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Weight'
              name='weight'
              type="number"
              min="0"
              max="800"
              required
              value={weight}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Sex'
              name='sex'
              //required
              value={sex}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Lifestyle'
              name='lifestyle'
              type="number"
              min="1"
              max="5"
              required
              value={lifestyle}
              onChange={this.handleChange}
            />
            <Form.Button 
                content='Submit' 
                color="blue"
            />
          </Form.Group>
        </>
        ) : (
        <>
          {/* metric */}
          <Form.Group>
            <Form.Input
              placeholder='Age'
              name='age'
              type="number"
              min="0"
              max="120"
              required
              value={age}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Centimeters'
              name='centimeters'
              type="number"
              min="0"
              max="270"
              //required
              value={centimeters}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Kilograms'
              name='kilograms'
              type="number"
              min="0"
              max="360"
              required
              value={kilograms}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Sex'
              name='sex'
              //required
              value={sex}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Lifestyle'
              name='lifestyle'
              type="number"
              min="1"
              max="5"
              required
              value={lifestyle}
              onChange={this.handleChange}
            />
            <Form.Button 
                content='Submit' 
                color="blue"
            />
          </Form.Group>
        </>)}
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ age, feet, inches, weight, sex, lifestyle, centimeters, kilograms }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedAge, submittedFeet, submittedInches, submittedWeight, submittedSex, submittedLifestyle, submittedCentimeters, submittedKilograms }, null, 2)}</pre>

        {/* imperial to metric ternary */}
        {/* Male (imperial) */}
        {imperial ? (<>
            <h1>
                {  
                    (
                        ((parseFloat(lifestyle) * 0.2) + 1)
                        * ((66 + (parseFloat(weight) * 6.2))
                        + (12.7 * (parseFloat(feet * 12) + parseFloat(inches)))
                        - (6.76 * parseFloat(age)))
                    ).toFixed(0)
                }
                <span> Calories Per Day</span>
            </h1>
            {/* Female (imperial) */}
            <h1>
                {
                    (
                        ((parseFloat(lifestyle) * 0.2) + 1)
                        * ((655.1 + (parseFloat(weight) * 4.35))
                        + (4.7 * (parseFloat(feet * 12) + parseFloat(inches)))
                        - (4.7 * parseFloat(age)))
                    ).toFixed(0)
                }
                <span> Calories Per Day</span>
            </h1>
            </>
            ) : (
            <>
            {/* Male (metric): BMR = 66 + (13.7 x weight in kg) + (5 x height in cm) - (6.8 x age in years) */}
            <h1>
                {  
                    (
                        ((parseFloat(lifestyle) * 0.2) + 1)
                        * ((66 + (parseFloat(kilograms) * 13.7))
                        + (5 * (parseFloat(centimeters)))
                        - (6.76 * parseFloat(age)))
                    ).toFixed(0)
                }
                <span> Calories Per Day</span>
            </h1>
            {/* Female (metric): BMR = 655 + (9.6 x weight in kg) + (1.8 x height in cm) - (4.7 x age in years) */}
            <h1>
                {  
                    (
                        ((parseFloat(lifestyle) * 0.2) + 1)
                        * ((655 + (parseFloat(kilograms) * 9.6))
                        + (1.8 * (parseFloat(centimeters)))
                        - (4.7 * parseFloat(age)))
                    ).toFixed(0)
                }
                <span> Calories Per Day</span>
            </h1>
        </>)}
      </div>
    );
  }
}

export default CalorieForm;