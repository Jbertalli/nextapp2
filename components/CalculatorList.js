import { Card } from 'semantic-ui-react';

function CalculatorList({ examples }) {
    function mapCalculatorsToItems(examples) {
        return examples.map(examples => ({
            header: examples.name,
            description: examples.description,
            image: examples.mediaUrl,
            childKey: examples._id,
            href: `/examples?_id=${examples._id}`,                              //display example based on it's id by making request to api
            color: 'black',
            fluid: true
        }))
    }

    return (
        <>  
            <Card.Group stackable as="h2" centered itemsPerRow={5} items={mapCalculatorsToItems(examples)} />
        </>
    );
}

export default CalculatorList;