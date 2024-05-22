import Marquee from "react-fast-marquee";
import { Img } from "@chakra-ui/react";

import React from "react";
import styled from "styled-components";
import { skills } from "../data/constants";
import { Tilt } from "react-tilt";
import { color } from "framer-motion";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>  
          <Title>Skills</Title>
          <Desc
            style={{
              marginBottom: "40px",
            }}
          >
            Here are some of my skills on which I have been working.
          </Desc>
          <div className="w-full">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {skills.map((skill, id) => (
                <div
                  style={{
                    backgroundColor: "rgba(17, 25, 40, 0.83)",
                    marginRight: "20px",
                  }}
                  className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                  key={id}
                >
                  <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                        <Img
                          src={skill.image}
                          alt={skill}
                          width={20}
                          height={20}
                          className="h-full w-auto rounded-lg"
                        />
                      <p style={{color : '#8800ff', fontWeight : 'bold'}}>
                        {skill.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
      </Wrapper>
    </Container>
  );
};

export default Skills;
