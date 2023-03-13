import React from 'react'
import Googleimg from '../assets/image118.png'
import Googleimg1 from '../assets/image119.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import css from './footer.module.css';

const Footer = () => {
  return (
    <div className={css.footers}>
        <div className={css.footer}>
        <div>
        <ul>
            <h3>Company</h3>
            <li>About us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact Us</li>
        </ul>
        </div>
        <div>
        <ul>
            <h3>Support</h3>
            <li>Help center</li>
            <li>Safety center</li>
            <li>Community Guidelines</li>
        </ul>
        </div>
        <div>
        <ul>
            <h3>Legal</h3>
            <li>Cookies Policy</li>
            <li>Terms of Service</li>
            <li>Law Enforcement</li>
        </ul>
        </div>
        <div>
        <ul>
            <h3>Install Apps</h3>
            <div>
            <img src={Googleimg} alt=""  width={100}/>
            </div>
            <div>
            <img src={Googleimg1} alt="" width={100}/>
            </div>
        </ul>
        </div>
        </div>
        <hr />

        <div class={css.lower}>
            <div>
                &copy; 2023 Landify .All right reserved
                </div>
               <div>
                <div className={css.lowered}>
                    <LinkedInIcon />
                    <YouTubeIcon />
                    <InstagramIcon/>
                    <TwitterIcon/>
                </div>
               </div>
              </div>
    </div>
  )
}

export default Footer