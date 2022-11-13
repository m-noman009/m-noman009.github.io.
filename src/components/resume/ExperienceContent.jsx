import React from "react";
import styled from "styled-components";
import ResumeCardList from "./ResumeCardList";
import ResumeCard from "./ResumeCard";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ExperienceContent = () => {
  return (
    <ExperienceContentContainer>
      <span>Experience</span>
      <ResumeCardList>
        <ResumeCard
          title="Software Engineer"
          info={`ByteMage / May 2022-${
            monthNames[new Date().getMonth()]
          } ${new Date().getFullYear()} `}
          description="Completed many project of different client in this company using React js, Next Js, Nest Js and React Native."
        />

        <ResumeCard
          title="Full Stack Developer"
          info={`Agon Esport / Feb 2022 - Jun 2022`}
          description="Designed and Completed  many projects using React Js and Nest js."
        />
        <ResumeCard
          title="Front-End Developer"
          info={`FYP / 2020-${new Date().getFullYear()}`}
          description="Completed final year project using ReactJS."
        />
      </ResumeCardList>
    </ExperienceContentContainer>
  );
};

export default ExperienceContent;

const ExperienceContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.secondary};

    @media (max-width: 767.98px) {
      font-size: 20px;
    }
    @media (max-width: 479.98px) {
      font-size: 18px;
    }
  }
`;
