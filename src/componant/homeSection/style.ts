import styled from "styled-components";
//import { imageUrl } from "../../../../shared/utility"


export const Wrapper1 = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    z-index:-1;

`;

export const Box1 = styled.div`
    width:70vw;
    height:195px;
    background:#623ab2;
    position:relative;
    top:140px;
    border-radius:40px;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:space-between;
    @media (max-width: 768px) {
        width:80vw;
      }
`
export const Img1 = styled.img`
position:relative;
z-index:1;
margin-top:-60px;
width:auto;
@media (max-width: 768px) {
    margin-top: 50px;
height: 140px;
z-index: 0;
margin-left: 28px;
  }


`


export const LeftBox1 = styled.div`
width:40%;
display:flex;
flex-direction:column;
margin-left:25px;
@media (max-width: 768px) {
    position:absolute;
    width:90%;
    z-index:2;
  }
`

export const RightBox1 = styled.div`
position: relative;
padding: 0px;
width: 40%;
`



export const TimerBox1 = styled.div`
    margin-bottom:16px;
    font-size:40px;
    max-width:230px;
    height:50px;
    background:rgb(40, 13, 95);
    color:rgb(255, 216, 0);
    font-weight:600;
    padding:0 10px 7px;
    border-radius:10px;
    @media (max-width: 768px) {
        font-size: 20px;
        width: 115px;
        height: auto;
      }
    

`

export const PlayBtn1 = styled.button`
height: 48px;
    padding: 0px 24px;
    background-color: rgb(31, 199, 212);
    color: white;
    border-radius: 16px;
    width:145px;
    border:none;
    @media (max-width: 768px) {
        height: 40px;
        width: 115px;
      }
    

   
`

export const Heading1 = styled.h2`
    color: white;
    margin-bottom: 8px;
    font-weight: 600;
    line-height: 1.1;
    font-family: Kanit, sans-serif;`


export const Wrapper2 = styled.div`
display:flex;
justify-content:space-evenly;
width:90%;
height:580px;
position:relative;
top:170px;

@media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }


`

export const LeftBox2 = styled.div`
width:50vh;
display:flex;
justify-content:center;
flex-direction:column;

@media (max-width: 768px) {
   width:90%;
  }


`

export const RightBox2 = styled.div`
width:50vh;
height:100%;
@media (max-width: 768px) {
    width:auto;
    height:auto;
    position: relative;
    margin-bottom: 24px;

    
  }

`


export const Heading2 = styled.h2`
color: rgb(118, 69, 217);
width:575px;    
height:110px;
font-family: Kanit, sans-serif;
font-size:64px;
line-height:1.5;
@media (max-width: 768px) {
    font-size:48px;
    line-height:1.1;
    margin:10px;
    width:auto;    
    height:auto;

  }

`

export const Content2 = styled.h2`
margin-top:30px;
color: rgb(40, 13, 95);
width:575px;
font-family: Kanit, sans-serif;
font-size:20px;
line-height:1.1;
@media (max-width: 768px) {
   margin:10px;
   width:auto;

  }


`

export const ButtonGroup2 = styled.div`
margin:20px;
@media (max-width: 768px) {
    display:flex;
    margin-left:0;
  }
`

export const Btn12 = styled.button`
font-size: 16px;
font-weight: 600;
justify-content: center;
letter-spacing: 0.03em;
line-height: 1;
height: 48px;
padding: 0px 24px;
background-color: rgb(31, 199, 212);
color: white;
border:none;
border-radius:15px;
margin-right: 8px;
`

export const Btn22 = styled.button`
font-size: 16px;
font-weight: 600;
justify-content: center;
letter-spacing: 0.03em;
line-height: 1;
height: 48px;
padding: 0px 24px;
background-color:white;
color: rgb(31, 199, 212);
border:none;
border:2px solid  rgb(31, 199, 212);
border-radius:15px;
margin-left: 15px;`

export const Img2 = styled.img`
height:512px;
width:512px;
position:absolute;
top:0px;
width:100%;
position: relative;
  animation-name: example;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @keyframes example {
	0%  { left:0px; top:0px;}
  25%   { left:0px; top:10px;}
  50%   {left:0px; top:10px;}
  75%   { left:0px; top:0px;}
  }

  @media (max-width: 768px) {
    height:200px;
width:200px;
}
`



//----------------------------------------



export const MainContainer = styled.section`
  background-color: #dfefff;
  font-family: "Kanit", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  height: 20%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #7645d9;
  border-radius: 15px;
  padding: 1rem;
  width: 80vw;
  margin-top: 20px;
  margin-left: 35px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  h2 {
    color: #fff;
    font-size: 24px;
    text-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
    @media screen and (max-width: 780px) {
      font-size: 20px;
    }
  }

  img {
    height: 44px;
    background-repeat: no-repeat;
  }
`;

export const Timer = styled.div`
  width: 100%;
`;

export const BoxImg = styled.div`
  img {
    height:auto;
    width: 100%;
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left:2rem;

  h1 {
    font-size: 54px;
    font-weight: 800;
    color: #7645d9;
    @media screen and (max-width: 480px) {
      font-size: 34px;
    }
  }
  p {
    color: #280d5f;
    font-size: 20px;
  }
`;
export const ColumnRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 50%;
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;

    @-webkit-keyframes mover {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }
    @keyframes mover {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }

    @media screen and (max-width: 768px) {
      height: 20%;
    }
    @media screen and (max-width: 1100px) {
      height: 20%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-size: 100%;
  vertical-align: baseline;
  gap: 10px;
`;

export const Button = styled.button`
  align-items: center;
  border: 0px;
  border-radius: 16px;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 48px;
  padding: 0px 24px;
  background-color: rgb(31, 199, 212);
  color: white;
  &:hover {
    background-color: #aed6f1;
  }
`;

export const RightButton = styled.div`
  position: relative;
  align-items: center;
  border-radius: 16px;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 48px;
  padding: 0px 24px;
  background-color: transparent;
  border: 2px solid rgb(31, 199, 212);
  box-shadow: none;
  color: rgb(31, 199, 212);
`;
