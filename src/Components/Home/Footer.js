import React from 'react';

import facebook from '../../Assets/fa-brands_facebook-square.png';
import insta from '../../Assets/fa-brands_instagram.png';
import youtube from '../../Assets/fa-brands_youtube.png';
import twitter from '../../Assets/fa-brands_twitter.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <section className='h-72 w-full flex items-center justify-center'>
        <div className='grid content-center text-center'>
          <div className='flex my-3 justify-center'> {/* Updated this line */}
            <Link className=''>
              <img src={facebook} alt='facebook-icon' className='mx-5 h-6 w-6' />
            </Link>

            <Link className=''>
              <img src={insta} alt='instagram-icon' className='mx-5 h-6 w-6' />
            </Link>

            <Link className=''>
              <img src={twitter} alt='twitter-icon ' className='mx-5 h-6 w-6' />
            </Link>

            <Link className=''>
              <img src={youtube} alt='youtube-icon' className='mx-5 h-6 w-6' />
            </Link>
          </div>
          <div className='flex my-3 font-medium'>
            <p className='px-3'>Conditions of Use</p>
            <p className='px-3'>Privacy & Policy</p>
            <p className='px-3'>Press Room</p>
          </div>
          <div className='my-3'>
            <p className='text-gray-500 font-medium'>&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
