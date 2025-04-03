import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{display:'flex', gap:'1rem', justifyContent:'center', margin:'2rem' }}>
        <Link to={'/'} >Home</Link>
        <Link to={'/admin'}>Admin</Link>
    </div>
  )
}

export default Header