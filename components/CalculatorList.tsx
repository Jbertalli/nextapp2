import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

function CalculatorList({ examples }) {
  function mapCalculatorsToItems(examples) {
    return examples.map((examples) => ({
      //use json examples file to build out cards with map function
      header: examples.name,
      description: examples.description,
      image: examples.mediaUrl,
      childKey: examples._id,
      //href: `/examples?_id=${examples._id}`,                              //display example based on it's id by making request to api
      href: examples.link,
      color: 'black',
      fluid: true,
    }));
  }

  const [desktop, setDesktop] = useState<boolean>(true);

  useEffect(() => {
    if (window.innerWidth > 440) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 440) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const isLandscapePhone = useMediaQuery(
    { minHeight: 200, maxHeight: 470 }
  );

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <>
      <Card.Group
        stackable={isLandscapePhone ? false : true}
        centered
        as={isPortrait ? "h4" : "h2"}
        style={{ textAlign: 'center' }}
        itemsPerRow={desktop ? '3' : '1'}
        items={mapCalculatorsToItems(examples)}
      />
    </>
  );
}

export default CalculatorList;
