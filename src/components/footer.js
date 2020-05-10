import React from "react"
import { Link } from "gatsby"
import logo from "../../static/logo.png"

const iconGitHub = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjAwMDQgMi4yOTY0N0MyMy4xMjc1IDIuNzMzNzcgMjIuMTQ2IDIuOTUyNjEgMjEuMTY0MSAzLjA2MTg0QzIyLjE0NiAyLjQwNTcgMjIuOTA5NSAxLjUzMTExIDIzLjM0NTggMC4zMjgwNjhDMjIuMzYzOSAwLjg3NDk3NSAyMS4zODIgMS4zMTIyNyAyMC4xODIyIDEuNTMwNzNDMTkuMzA5MyAwLjU0NjUyNCAxOC4wMDA1IDAgMTYuNTgyMyAwQzEzLjg1NSAwIDExLjY3MzMgMi4xODY4NiAxMS42NzMzIDQuOTIwNjNDMTEuNjczMyA1LjM1NzkzIDExLjY3MzMgNS42ODU5OSAxMS43ODIyIDYuMDE0MDZDNy43NDU3MyA1Ljc5NTIyIDQuMTQ1ODcgMy44MjcyIDEuNjM2ODYgMC44NzQ1OTFDMS4yMDA1OSAxLjYzOTk1IDAuOTgyMjY4IDIuNDA1MzIgMC45ODIyNjggMy4zODk1MkMwLjk4MjI2OCA1LjEzOTA5IDEuODU1MTggNi41NjA1OSAzLjE2Mzk4IDcuNDM1NTZDMi40MDA0MiA3LjQzNTU2IDEuNjM2ODYgNy4yMTY3MiAwLjk4MjI2OCA2Ljc3OTQyVjYuODg4NjVDMC45ODIyNjggOS4yOTQzNiAyLjYxODc0IDExLjI2MjggNC45MDk0MyAxMS43MDAxQzQuNDczMTYgMTEuODA5MyA0LjAzNjUxIDExLjkxODkgMy42MDAyNSAxMS45MTg5QzMuMjcyOTUgMTEuOTE4OSAyLjk0NTY2IDExLjkxODkgMi43MjczMyAxMS44MDk3QzMuMzgxOTIgMTMuNzc4MSA1LjEyNzM3IDE1LjE5OTYgNy4zMDkwOCAxNS4xOTk2QzUuNjcyNjEgMTYuNTExOCAzLjQ5MDkgMTcuMjc3MiAxLjE5OTgzIDE3LjI3NzJDMC43NjM1NjIgMTcuMjc3MiAwLjQzNjI2NiAxNy4yNzcyIDAgMTcuMTY4QzIuMTgxNzEgMTguNTg5NSA0LjY5MTEgMTkuMzU0OCA3LjUyNzQxIDE5LjM1NDhDMTYuNTgxOSAxOS4zNTQ4IDIxLjQ5MSAxMS45MTkzIDIxLjQ5MSA1LjM1ODMxVjQuNzAyMTdDMjIuNTgyMiA0LjE1NTI3IDIzLjM0NTggMy4yODA2OCAyNC4wMDA0IDIuMjk2NDdaIiBmaWxsPSIjODk1M0I3Ii8+Cjwvc3ZnPgo='

export default props => (
  <footer className="site-footer">
    <div className={"grid grid-cols-4 lg:grid-cols-5"}>
      
      <div className="col-span-4 sm:col-span-2 mx-5">
        <div className={"mx-auto my-4"}>
          <Link to="/" title="Agriplus">
            <img width="150" alt={"Logo"} src={logo}/>
          </Link>
        </div>
        <div className={"text-gray-600 text-base"}>
          <p className="text-justify">
            Véritable accélérateur de projets agricoles à l'ère du digital,
            Agriplus vous accompagne les particulier et les pro avec des solutions sur mesure.
          </p>
        </div>
      </div>

      <div className={"footer-bloc col-span-2 sm:col-span-1"}>
        <h4 className="title">Agriplus</h4>          
        <ul>
          <li><Link to="/about" title={"About Us"}>A porpos</Link></li>
          <li><a href={"https://agriplus.ga/blog"}>Blog</a></li>
          <li><a className={"links__special"} href={"https://feedback.agriplus.ga/"} target={"_blank"} rel="noopener noreferrer" title={"We look forward to receiving your great feedback"}>Feedback</a></li>
        </ul>
      </div>

      <div className={"footer-bloc col-span-2 sm:col-span-1"}>
        <h4 className="title">Support</h4>
        <ul>
          <li><Link to="/contact" title={"Contact Us"}>Contact</Link></li>
          <li><Link to="/privacy" title={"Privacy Policy"}>Privacy</Link></li>
          <li><Link to="/terms" title={"Terms Of Use"}>Terms Of Use</Link></li>
        </ul>
      </div>

      <div className="footer-bloc col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-1">
        <h4 className="title">Suivez-nous</h4>
        <div className={"grid grid-cols-4 mx-auto"}>
          <a href="https://twitter.com/agriplus" target={"_blank"} rel="noopener noreferrer"  title={"Twitter"}><img alt={"Twitter"} src={iconGitHub}/></a>
          <a href="https://www.linkedin.com/company/agriplus/" target={"_blank"} rel="noopener noreferrer"  title={"LinkedIn"}><img alt={"LinkedIn"} src={iconGitHub}/></a>
          <a href="https://github.com/agriplus" target={"_blank"} rel="noopener noreferrer"  title={"GitHub"}><img alt={"GitHub"} src={iconGitHub}/></a>
          <a href="https://www.instagram.com/agriplus/" target={"_blank"} rel="noopener noreferrer"  title={"Instagram"}><img alt={"Instagram"} src={iconGitHub}/></a>
        </div>
      </div>
  </div>

  <div className={"copyright"}>
    <p className="text-gray-500 text-base">Copyright &copy; Agriplus {new Date().getFullYear()}</p>
  </div>
  </footer>
)