import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid';

// CLEAN UP: Simple wrapper, no hacks
const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Home = () => {
  const engineerProjects = [
    {
      title: "Motor Control Application",
      description: "A motor control system designed to manage the speed and direction of a DC motor using PWM signals via SPI.",
      tech: ["C"],
      link: "https://github.com/darin-noronha/motor_application",
      image: "/es.jpg"
    },
    {
      title: "Sequential Calculator",
      description: "Designed and implemented a sequential calculator in Verilog using a Finite State Machine (FSM).",
      tech: ["Verilog", "SystemVerilog"],
      link: "https://github.com/darin-noronha/FPGA_Calculator",
      image: "/mark.png"
    },
    {
      title: "Website V1",
      description: "Code for my old website.",
      tech: ["React", "HTML", "CSS"],
      link: "https://github.com/darin-noronha/portfolio-website",
      image: "/port.jpg"
    }
  ];

  return (
    <HomeContainer>
      <Hero />
      <ProjectsGrid projects={engineerProjects} />
    </HomeContainer>
  );
};

export default Home;