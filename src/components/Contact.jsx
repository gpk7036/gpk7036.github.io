import { personalData } from "../data/personal.data";
import { CiLocationOn } from "react-icons/ci";
import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import "../App.css";
import { SocialMediaIcon, SocialMediaIcons } from "./Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Bio } from "../data/constants";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useToast } from "@chakra-ui/react";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    padding: 0px;
    flex-direction: column;
    align-items : center;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  box-sizing : border-box;
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
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
    text-align: center;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
const Contact = () => {
  const form = useRef();
  const toast = useToast();
  console.log("contact...");
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i0t4iej",
        "template_3kjg4nr",
        form.current,
        "8luIAllp-UWpOrFBR"
      )
      .then(
        (result) => {
          toast({
            title: "Message sent.",
            description: "Thank You for contacting me.",
            status: "success",
            duration: 900,
            isClosable: true,
            position: "top",
          });
          e.target.reset();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Oops, there is an Error While sending message.",
            status: "error",
            duration: 900,
            isClosable: true,
            position: "top",
          });
          console.log(error.message);
        }
      );
  };

  return (
    <>
      <Title>Contact</Title>

      <Desc>
        Feel free to reach out to me for any questions or opportunities!
      </Desc>
      <Container id="Contact">
        <Wrapper>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput
              placeholder="Your Email"
              name="from_email"
              type="email"
              required
            />
            <ContactInput
              placeholder="Your Name"
              name="from_name"
              type="text"
              required
            />
            <ContactInput placeholder="Subject" name="subject" required />
            <ContactInputMessage
              placeholder="Message"
              name="message"
              rows={4}
              required
            />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
        </Wrapper>
        <div className="text-white flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer text-white"
                size={48}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer text-white"
                size={48}
              />
              <span>{personalData.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer text-white"
                size={48}
              />
              <span>{personalData.address}</span>
            </p>
          </div>
          <SocialMediaIcons className="links">
            <SocialMediaIcon href={Bio.facebook} target="display">
              <FacebookIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.twitter} target="display">
              <TwitterIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.linkedin} target="display">
              <LinkedInIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.github} target="display">
              <GitHubIcon />
            </SocialMediaIcon>
          </SocialMediaIcons>
        </div>
      </Container>
    </>
  );
};

export default Contact;
