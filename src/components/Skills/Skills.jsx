import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  color: red;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Skills = () => {
  return (
    <Section id='Skills' className='Section-Skills'>
      <h2 className='Skills-Title'>Skills</h2>
      <div className='Skills-Icons'>
      <img className='SVG-Icon' alt="HTML5" class="html-5"  src="https://cdn.svgporn.com/logos/html-5.svg" ></img>
      <img className='SVG-Icon' alt="CSS3" class="css-3"  src="https://cdn.svgporn.com/logos/css-3.svg" ></img>
      <img className='SVG-Icon' alt="Tailwind CSS" class="tailwindcss"  src="https://cdn.svgporn.com/logos/tailwindcss-icon.svg" ></img>
      <img className='SVG-Icon' alt="Javascript (JS)" class="javascript"  src="https://cdn.svgporn.com/logos/javascript.svg" ></img>
      <img className='SVG-Icon' alt="React" class="react"  src="https://cdn.svgporn.com/logos/react.svg" ></img>
      <img className='SVG-Icon' alt="Next.js" class="nextjs"  src="https://cdn.svgporn.com/logos/nextjs-icon.svg"></img>
      </div>
    </Section>
  )
}

export default Skills