import { Card } from 'semantic-ui-react';

function CalculatorList({ examples }) {
    function mapCalculatorsToItems(examples) {
        return examples.map(examples => ({
            //use json examples file to build out cards with map function
            header: examples.name,
            description: examples.description,
            image: examples.mediaUrl,
            childKey: examples._id,
            //href: `/examples?_id=${examples._id}`,                              //display example based on it's id by making request to api
            href: examples.link,
            color: 'black',
            fluid: true
        }))
    }

    return (
        <>  
            <Card.Group
                stackable
                centered 
                as="h2"
                style={{ textAlign: 'center' }} 
                itemsPerRow={3} 
                items={mapCalculatorsToItems(examples)} 
            />
        </>
    );
}

export default CalculatorList;
