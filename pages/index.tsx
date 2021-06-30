import Head from 'next/head'
import Image from 'next/image'

import LowResImageSrc from "../utils/low-res-image";

import { FaGithub, FaAngellist,FaTwitter,FaLinkedin,FaFacebook,FaInstagram} from "react-icons/fa";


const social = [
  {
    url: 'https://github.com/elwood-technology',
    icon: <FaGithub />,
    name: 'GitHub',
    eventArgs: ['Footer', 'github']
  },
  {
    url: 'https://twitter.com/hello_elwood',
    icon: <FaTwitter />,
    name: 'Twitter',
    eventArgs: ['Footer', 'twitter']
  },
  {
    url: 'https://www.facebook.com/elwood.technology',
    icon: <FaFacebook />,
    name: 'Facebook',
    eventArgs: ['Footer', 'facebook']
  },
  {
    url: 'https://angel.co/elwood-technology',
    icon: <FaAngellist />,
    name: 'AngelList',
    eventArgs: ['Footer', 'angellist']
  },
  {
    url: 'https://www.instagram.com/hello_elwood',
    icon: <FaInstagram />,
    name: 'Instagram',
    eventArgs: ['Footer', 'instagram']
  },
  {
    url: 'https://www.linkedin.com/company/elwood-technology',
    icon: <FaLinkedin />,
    name: 'LinkedIn',
    eventArgs: ['Footer', 'linkedIn']
  }
]

export default function Home() {
  return (
    <main className="c-home">
      <header
        className="c-home-header"
        style={{ backgroundImage: `url("${LowResImageSrc}")` }}
      >
        <span className="c-home-header-img" />
        <div className="c-home-main">
          <h1>
            Elwood Technology
          </h1>
          <h2>Software &amp; Digital Product Development Consultancy</h2>
          <h3>
            We help our clients build great products &amp; grow great teams.
          </h3>
          <a
            className="btn btn-lg"
            href="mailto:hello@elwood.technology"
          >

            <span>hello@elwood.technology</span>
          </a>
        </div>
      </header>
      <footer className="c-footer">
        <ul className="list-unstyled">
          <li>&copy; {new Date().getFullYear()}, Elwood Technology, LLC</li>
          <li>Box 5661, Santa Monica, CA 90409</li>
        </ul>
        <div>
          {social.map(({ url, icon, name, eventArgs }) => (
            <a rel="noopener noreferrer" target="_blank" href={url} key={`Footer-${url}`}>
              {icon}
              <span className="sr-only">{name}</span>
            </a>
          ))}
        </div>
      </footer>
    </main>
  )
}
