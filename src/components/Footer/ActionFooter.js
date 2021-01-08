import React from 'react';
import { Button, OutlineButton } from '../../globalStyles';

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
            <OutlineButton primary big fontBig style={{padding: "20px 22px"}}>Contact a team member</OutlineButton>
        </Form>
      </FooterSubscription>
    </ActionFooterContainer>
  );
}

export default ActionFooter;
