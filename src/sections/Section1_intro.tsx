import React from 'react';

type SectionProps = {
  name: string;
}

const Section1_intro: React.FC<SectionProps> = ({ name }) => (
  <div>Hello, {name} </div>
);

export default Section1_intro;