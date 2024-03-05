import {
  FaGithub,
  FaAngellist,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

import {Background} from './background';

const social = [
  {
    url: 'https://github.com/elwood-technology',
    icon: <FaGithub />,
    name: 'GitHub',
    eventArgs: ['Footer', 'github'],
  },
  {
    url: 'https://twitter.com/hello_elwood',
    icon: <FaTwitter />,
    name: 'Twitter',
    eventArgs: ['Footer', 'twitter'],
  },
  {
    url: 'https://www.facebook.com/elwood.technology',
    icon: <FaFacebook />,
    name: 'Facebook',
    eventArgs: ['Footer', 'facebook'],
  },
  {
    url: 'https://angel.co/elwood-technology',
    icon: <FaAngellist />,
    name: 'AngelList',
    eventArgs: ['Footer', 'angellist'],
  },
  {
    url: 'https://www.instagram.com/hello_elwood',
    icon: <FaInstagram />,
    name: 'Instagram',
    eventArgs: ['Footer', 'instagram'],
  },
  {
    url: 'https://www.linkedin.com/company/elwood-technology',
    icon: <FaLinkedin />,
    name: 'LinkedIn',
    eventArgs: ['Footer', 'linkedIn'],
  },
];

export default function Page() {
  return (
    <>
      <main className="w-screen h-screen flex flex-col">
        <header className="md:h-[70vh] flex items-center justify-center relative">
          <Background />
          <div className="w-full max-w-4xl mx-auto z-10 p-12 md:p-0">
            <h1 className="text-5xl font-extrabold">Elwood Technology</h1>
            <h2 className="text-3xl md:text-7xl font-light mt-6 animate-fadeIn">
              Software &amp; Digital Product Development Consultancy
            </h2>
            <h3 className="text-2xl font-light mt-3 animate-fadeIn">
              <span className="opacity-60">
                We help our clients build great products & grow great teams.
              </span>
            </h3>
          </div>
        </header>
        <section className="p-8 flex-grow flex flex-col justify-center items-center text-muted animate-fadeIn">
          <a
            className="transition-all duration-300 hover:text-black"
            href="mailto:hello@elwood.technology">
            hello@elwood.technology
          </a>

          <div className="flex space-x-2 pt-2 text-lg">
            {social.map(({url, icon, name}) => (
              <a
                className="transition-all duration-300 hover:text-black hover:scale-110"
                rel="noopener noreferrer"
                target="_blank"
                href={url}
                key={`Footer-${url}`}>
                {icon}
                <span className="sr-only">{name}</span>
              </a>
            ))}
          </div>
        </section>
        <footer className="flex items-center justify-center text-xs text-[#ddd] py-2 space-x-1 animate-fadeIn">
          <p>&copy; {new Date().getFullYear()}, Elwood Technology, LLC</p>
          <p>&#8226;</p>
          <p>PO Box 1649, Venice, CA 90294</p>
        </footer>
      </main>
    </>
  );
}
