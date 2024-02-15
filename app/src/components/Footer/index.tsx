import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'
import { NavLink } from 'react-router-dom'
import { githubUrl } from 'assets/constants';

const Footer = () => {
  return (
    <footer className="flex items-center justify-evenly p-8 w-96 text-white absolute bottom-0 right-10">
      <NavLink to={githubUrl} className="ml-2">
        <GitHubIcon />
      </NavLink>
      <p>&copy; 2024 Louie Knolle</p>
    </footer>
  )
}

export default Footer