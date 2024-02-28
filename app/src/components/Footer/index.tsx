import GitHubIcon from '@mui/icons-material/GitHub'
import { githubUrl } from 'assets/constants'

const Footer = () => {
  return (
    <footer className="flex items-center justify-evenly p-2 pb-8 w-96 text-white absolute bottom-0">
      <a href={githubUrl} target='_blank'>
        <GitHubIcon />
      </a>
      <p>&copy; 2024 Louie Knolle</p>
    </footer>
  )
}

export default Footer