import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <SocialIconsContainer>
      <a
        href="https://github.com/m-noman009"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
      >
        <FaGithub size={25} />
      </a>
      <a
        href="https://linkedin.com/in/muhammad-noman-02a371209"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={25} />
      </a>
      <a
        href="https://www.instagram.com/muhammad_noman009/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram size={25} />
      </a>
      <a
        href="https://facebook.com/noman.bhatti1208"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook size={25} />
      </a>
    </SocialIconsContainer>
  );
};

export default SocialIcons;

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: flex-end;
  gap: 30px;
  margin-right: 50px;
  margin-top: -50px;

  @media (max-width: 767.98px) {
    flex-direction: row;
    margin-right: 20px;
    margin-top: -20px;
  }
  @media (max-width: 479.98px) {
    flex-direction: row;
  }

  a {
    text-decoration: none;
    color: #fff;
    opacity: 0.8;

    :hover {
      color: ${({ theme }) => theme.light};
      transition: all 1s ease;
    }
  }

  svg {
    cursor: pointer;
  }
`;
