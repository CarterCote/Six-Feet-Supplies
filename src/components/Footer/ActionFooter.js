import React from 'react';
import { Button } from '../../globalStyles';

import {
  ActionFooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,

} from './Footer.elements';

function ActionFooter() {
  return (
    <ActionFooterContainer>
      <FooterSubscription>
        <Form>
            <FooterSubHeading>
            Get your supplies delivered today.
            </FooterSubHeading>
            <Button primary big fontBig style={{margin: "0.5rem 1.5rem 0.5rem 2rem"}}>Request a delivery</Button>
            <Button primary big fontBig>Contact a team member</Button>
        </Form>
      </FooterSubscription>
    </ActionFooterContainer>
  );
}

export default ActionFooter;
