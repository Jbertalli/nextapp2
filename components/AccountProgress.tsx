import { useRouter } from 'next/router';
import { Header, Accordion, Segment, Icon, Button } from 'semantic-ui-react';

function AccountProgress() {
  const router: any = useRouter();

  return (
    <>
      <Header as="h2">
        <Icon name="folder open" />
        Goal History
      </Header>
      <Segment inverted tertiary color="grey" textAlign="center">
        <Header icon>
          <Icon name="copy outline" />
          No goal history.
        </Header>
        <div>
          <Button onClick={() => router.push('/goals')} color="blue">
            Set Goals
          </Button>
        </div>
      </Segment>
      <Accordion
        fluid
        styled
        exclusive={false}
      />
    </>
  );
}

export default AccountProgress;
