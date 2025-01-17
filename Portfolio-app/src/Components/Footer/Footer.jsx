import React from 'react';
import { ButtonPrimary } from '../Button/Button';

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/codewithsadee-org'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/codewithsadee_'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/codewithsadee'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/codewithsadee'
    }
  ];

const Footer = () => {
    return (
       <footer className='section'>
        <div className="container">
            <div className='lg:grid lg:grid-cols-2'>
                <div className='mb-10'>
                    <h2 className='headLine-1 mb-8 lg:max-w-[12ch]'>
                        Let's &apos; work together today!

                    </h2>
                      <ButtonPrimary
                      href="mailto:hridoysheikh355@gmail.com"
                      label='Start project'
                      icon="chevron_right">
            

                      </ButtonPrimary>

                </div>
                 <div className='grid grid-cols-2 gap-4 lg:pl-20'>
                        <div className=''>
                            <p className='mb-2'> Sitemap


                            </p>

                            <ul>
                                {
                                    sitemap.map(({label,href},key)=>(
                                        <li key={key}>
                                          <a href={href}
                                              className='block text-sm
                                              text-zinc-400 py-1 transition-colors hover:text-zinc-200'>
                                                {
                                                    label
                                                }
                                              </a>
                                        </li>
                                    ))
                                }

                            </ul>

                        </div>
                        <div className=''>
                            <p className='mb-2'> Socials


                            </p>

                            <ul>
                                {
                                    socials.map(({label,href},key)=>(
                                        <li key={key}>
                                          <a href={href}
                                              className='block text-sm
                                              text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                                              target='_blank'>
                                                {
                                                    label
                                                }
                                              </a>
                                        </li>
                                    ))
                                }

                            </ul>

                        </div>


                 </div>

            </div>

            <div className='text-center pt-10 mb-8 '>
                    <p className='text-zinc-500 text-sm'>
                       &copy; 2024 <span className='text-zinc-200'>Abir sheikh</span>
                    </p>
            </div>
        </div>


       </footer>
    );
};

export default Footer;