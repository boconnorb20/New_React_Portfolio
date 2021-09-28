import React from 'react';
import { DiBootstrap, DiCss3Full, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { LinkContainer, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have been introduced to many Technologies in the Web Dev world recently. I continue to learn each day. 
        I have experience with Front-end, Back-end Development and Design. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <LinkContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            JavaScript, React.js, HTML
          </ListParagraph>
        </LinkContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <LinkContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </LinkContainer>
      </ListItem>
      <ListItem>
        <DiCss3Full size="3rem" />
        <LinkContainer>
          <ListTitle>Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            CSS, Bootstrap, React-Bootstrap, Material-UI
          </ListParagraph>
        </LinkContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
