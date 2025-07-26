import { useContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ThemeContext from "./context/theme.context";
import "./styles/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer";

function App() {
  const { dark } = useContext(ThemeContext);
  
  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
