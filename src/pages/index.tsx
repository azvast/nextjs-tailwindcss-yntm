import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Seo from '@/components/Seo';

export default function IndexPage() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const finalDate = new Date('Nov 5, 2021 20:00:00 PST').getTime();

    const intervalId = setInterval(() => {
      const distance = finalDate - Date.now();
      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Seo />

      <main>
        <section className='relative'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <div className='text-center hero-mint'>
              <Image
                src='/images/YNTM.png'
                alt='You Never Taggeed Me'
                width={982}
                height={204}
              />
            </div>
            <div className='count-down'>
              <Image
                src='/images/YNTM-Logo-short.png'
                alt='YNTM'
                width={125}
                height={120}
              />
              <div className='p-5 mt-16 mb-12 text-black border border-black time-container rounded-xl'>
                <div className='flex items-center justify-center gap-6'>
                  {/* <div className='time-box'>
                    <p className='time-value'>{time.days}</p>
                    <p className='time-desc'>DAYS</p>
                  </div>
                  <div className='time-box'>
                    <p className='time-value'>{time.hours}</p>
                    <p className='time-desc'>HOURS</p>
                  </div>
                  <div className='time-box'>
                    <p className='time-value'>{time.minutes}</p>
                    <p className='time-desc'>MINUTES</p>
                  </div>
                  <div className='time-box'>
                    <p className='time-value'>{time.seconds}</p>
                    <p className='time-desc'>SECONDS</p>
                  </div> */}
                  {/* <div className=''> */}
                  <p className='time-value'>COMING SOON</p>
                  {/* </div> */}
                </div>
                <p className='text-xl'>
                  Thank you for your patience, our drop is taking longer than
                  expected. Stay tuned for our release date
                </p>
              </div>
              <Image
                className='almost-live-image'
                src='/images/almost-live.png'
                alt='alimost live'
                width={394}
                height={50}
              />
              <p className='absolute left-0 right-0 block text-center text-black bottom-3 md:hidden'>
                For best results view on desktop.
              </p>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            className='absolute top-0 hidden object-cover h-full opacity-0 -z-10 intro-video md:block'
            width='100%'
            height='100%'
          >
            <source src='/video/intro.mp4' />
          </video>
          <audio autoPlay>
            <source src='/music/background.mp3' type='audio/mpeg' />
          </audio>
        </section>
      </main>
    </>
  );
}
