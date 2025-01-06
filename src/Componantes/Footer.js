import React from 'react'
import {Link, useNavigate, useNavigation} from 'react-router-dom'
import {Button} from 'react-bootstrap'

 const Footer = () => {
  const navigation=useNavigate();
  navigation('/');
  return (
    <div>
         <h1>footer</h1>
         
         <Link to="/"><Button>go home</Button></Link>


    </div>
  )
}
export default Footer