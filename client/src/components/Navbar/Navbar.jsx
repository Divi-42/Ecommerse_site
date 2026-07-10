import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
import Brand_Text from '../../assets/New_bt2.png'
function Navbar ({theme,setTheme}){
  const toggle_mode=()=>{
    theme =='light' ? setTheme('dark') : setTheme('light');
  }
  return(
    <>
    <div className='navbar'>
      <img src={logo}alt = "Nothing " className='logo'/>
      <img src={Brand_Text}alt = "Nothing " className='brandtext'/>
      

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>
    <div className='mode'>
      {/* <i className="bi bi-brightness-high-fill" ></i> */}
      <i  onClick={()=>{toggle_mode()}} className={theme == 'light' ? "bi bi-moon-fill toggle-icon " : "bi bi-brightness-high-fill toggle-icon" }></i>
    </div>
   
    
    
    
    <div className='login'>
        Login
    </div>
    <i className= "bi bi-person login_image" />
    </div>
    </>
  )
}
  
export default Navbar;