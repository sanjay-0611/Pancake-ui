import React from "react";
import { ThemeProvider } from "styled-components";
//import { MainContainer } from "../../shared/styles/styled";
//import { theme, GlobalStyle } from "../../shared/styles/theme";
import SectionTwo from "./componant/secondSection/Index";
import { SixthSection } from "./componant/SixthSection/Index";
import { Main } from "./componant/homeSection/Index";
import { ThirdSection } from "./componant/thirdSection/Index";
import { ForthSection } from "./componant/forthSection/Index";
import { FifthSection } from "./componant/fifthSection/Index";
import { Navbar } from "./navbar/Navbar";
import {Footer} from "./footer/Footer";
import {SeventhSection} from "./componant/seventhSection/Index";
const App = (props: any) => {

  return (
    <div>
    <Navbar/>
      <Main />
      <SectionTwo />
      <ThirdSection />
      <ForthSection/>
      <FifthSection />
      <SeventhSection/>
      <SixthSection />
      <Footer/>
    </div>
  );
};

export default App;
