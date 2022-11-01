import { useRouter } from 'next/router';
import { Header, Accordion, Label, Segment, Icon, Button, List } from 'semantic-ui-react';
import formatDate from '../utils/formatDate';

function AccountProgress({ progress }) {
    const router: any = useRouter();

    // function mapProgressToPanels(progress) {
    //     return progress.map(progress => ({
    //         key: progress._id,
    //         title: {
    //             content: <Label color="blue" content={formatDate(progress.createdAt)}/>
    //         }, 
    //         content: {
    //             content: (
    //                 <>
    //                     <List.Header as="h3">
    //                         <Label
    //                             content={progress.email}
    //                             icon="mail"
    //                             basic
    //                             horizontal
    //                             style={{ marginLeft: '1em' }}
    //                         />
    //                     </List.Header>
    //                     <List>
    //                         {progress.progress.map(p => (
    //                             <List.Item>
    //                                 <List.Content>
    //                                     <List.Header>
    //                                         {p.progress}
    //                                     </List.Header>
    //                                     <List.Description>
    //                                         {p.BMI} {p.Body_Fat_Percent}
    //                                     </List.Description>
    //                                 </List.Content>
    //                             </List.Item>
    //                         ))}
    //                     </List>
    //                 </>
    //             )
    //         }
    //     }))
    // }

    return <>
        <Header as="h2">
            <Icon name="folder open"/>
            Goal History
        </Header>
            <Segment inverted tertiary color="grey" textAlign="center">
                <Header icon>
                    <Icon name="copy outline"/>
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
                //panels={mapProgressToPanels(progress)}
            />
    </>;
}

export default AccountProgress;
