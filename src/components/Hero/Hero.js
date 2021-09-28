import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Beginning my journey in Web Development...
      </SectionText>
      <Button onClick={() => window.location = "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=boconnor20@gmail.com"}>Email Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;