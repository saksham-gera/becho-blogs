import React from 'react';
import { Section, Subtitle, Paragraph } from './styles';

export default function AboutSection(props) {
  return (
    <Section>
      <Subtitle>{props.title}</Subtitle>
      <Paragraph>{props.paragraph}</Paragraph>
    </Section>
  );
}