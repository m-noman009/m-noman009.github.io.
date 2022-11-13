import React from "react";
import { FaChalkboardTeacher, FaReact, FaRobot } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { GiOnTarget } from "react-icons/gi";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <ServiceListContainer>
      <ServiceCard
        Icon={<FaReact size={65} />}
        title="React Js"
        description="Develop web applications Frontend using React JS."
      />
      <ServiceCard
        Icon={<SiNestjs size={65} />}
        title="Nest Js"
        description="Provide a complete backend RESTful API using Nest JS"
      />
      <ServiceCard
        Icon={<FaReact size={65} />}
        title="React Native"
        description="Develop mobile app using React Native."
      />
      {/* <ServiceCard
        Icon={<FaRobot size={65} />}
        title="Neural Network"
        description="Provide a complete solution of neural network problem using python"
      /> */}
      <ServiceCard
        Icon={<GiOnTarget size={65} />}
        title="Consultation"
        description="Consult and help in your project completion"
      />
      <ServiceCard
        Icon={<FaChalkboardTeacher size={65} />}
        title="Tutoring"
        description="I will be your instructor and teach you web development"
      />
    </ServiceListContainer>
  );
};

export default ServiceList;

const ServiceListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 45px;

  @media (max-width: 424.98px) {
    gap: 20px;
  }
`;
