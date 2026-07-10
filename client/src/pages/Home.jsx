import Navbar from "../components/Navbar/Navbar"
import './Home.css'
function Home({theme,setTheme}){

  return (
    <div className="container">
      <Navbar theme={theme} setTheme={setTheme}/>
      
    </div>
  );
}

export default Home