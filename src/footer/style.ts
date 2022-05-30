import {
  FaDocker,
  FaGithub,
  FaInstagram,
  FaMedium,
  FaReddit,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import styled from "styled-components";

export const MainContainer = styled.div`
  background: #27262c;
  //height: 80vh;
`;

export const FooterWrap = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 2rem;
padding: 1rem;


@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}

`;

export const LinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;

export const LinkTitle = styled.div`
margin-bottom: 16px;
color: #9A6AFF;
font-size: 16px;
font-weight: 600;

`;

export const FooterImage = styled.div`
img{
  width: 180px;
  cursor: pointer; 
}

`

export const Link = styled.div`
  font-size: 16px;
  color: #f4eeff;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom:5px;
`;

export const SocialIcon = styled.div`
padding: 8px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: Kanit, sans-serif;
`;

export const Tweeter = styled(FaTwitter)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);

`;
export const Telegram = styled(FaTelegram)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);
  
`;
export const Reddit = styled(FaReddit)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);
  
`;
export const Instagram = styled(FaInstagram)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);
  
`;
export const Github = styled(FaGithub)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);
  
`;
export const Docker = styled(FaDocker)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);
  
`;
export const Medium = styled(FaMedium)`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  fill: rgb(184, 173, 210);
`;

export const BottomLine=styled.div`
    margin:4px;
    border:1px solid darkgray;
`;
