import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import Main from "./Components/Main/Main";
import Microscholarship from "./Components/Microscholarship/Microscholarship";
import Process from "./Components/Process/Process";
import Stats from "./Components/Stats/Stats";
import "./index.scss";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Info />
      <Banner />
      <Process />
      <Microscholarship />
      <Stats />
      <Footer />
    </>
  );
}

export default App;
