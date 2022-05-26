import React from 'react';

type SectionProps = {
  name: string;
}

const Intro = ({ name }: SectionProps) => (
  <div>Hello, {name} </div>
);

export default Intro;