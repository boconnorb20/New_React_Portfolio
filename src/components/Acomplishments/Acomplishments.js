import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 25, text: 'GitHub Repos'},
  { number: 6, text: 'SMU BootCamp', },
  { number: 7, text: 'Udemy-Courses', },
  { number: `%`, text: 'Learning Everyday', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>  
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
