import { formatEther } from '@ethersproject/units';
import { useEtherBalance, useEthers } from '@usedapp/core';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const finalDate = new Date('Nov 1, 2021 10:00:00').getTime();

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
          <header className='fixed z-50 flex justify-between w-full px-20 py-3'>
            <UnstyledLink href='#'>
              <Image
                src='/images/YNTM-Logo.png'
                alt='You Never Taggeed Me'
                width={180}
                height={39}
              />
            </UnstyledLink>
            <div className='flex items-center gap-5'>
              <UnstyledLink
                href='#about'
                className='font-light hover:text-pink'
              >
                ABOUT
              </UnstyledLink>
              <UnstyledLink href='https://twitter.com/'>
                <Image
                  src='/images/social-twitter.png'
                  alt='Twitter Icon'
                  width={32}
                  height={32}
                />
              </UnstyledLink>
              <UnstyledLink href='https://discord.gg/'>
                <Image
                  src='/images/social-discord.png'
                  alt='Discord Icon'
                  width={32}
                  height={32}
                />
              </UnstyledLink>
              <Button
                className={
                  account
                    ? 'bg-blue-600 border-none rounded-full'
                    : 'border-none rounded-full'
                }
                onClick={() => activateBrowserWallet()}
              >
                {account
                  ? account.slice(0, 6) +
                    '...' +
                    account.slice(-4) +
                    ' ' +
                    '(' +
                    etherBalance +
                    ' ETH)'
                  : 'CONNECT WALLET'}
              </Button>
            </div>
          </header>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <div className='text-center hero-mint'>
              <Image
                src='/images/YNTM.png'
                alt='You Never Taggeed Me'
                width={982}
                height={204}
              />
              <div>
                <ButtonLink className='mt-6' href='#bid' variant='secondary'>
                  BID NOW
                </ButtonLink>
              </div>
            </div>
            <div className='count-down'>
              <Image
                src='/images/YNTM-Logo-short.png'
                alt='YNTM'
                width={211}
                height={202}
              />
              <div className='flex items-center justify-center gap-8 p-6 mt-5 text-black border border-black rounded-xl'>
                <div className='time-box'>
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
                </div>
              </div>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            className='absolute top-0 -z-10'
            width='100%'
            height='100%'
            poster='/video/intro.png'
          >
            <source src='/videos/intro.mp4' />
          </video>
          <audio autoPlay>
            <source src='/music/background.mp3' type='audio/mpeg' />
          </audio>
        </section>
        <section id='bid'>
          <div className='flex justify-center gap-8 mt-80'>
            <div>
              <Image
                src='/images/asset.jpg'
                alt='Asset'
                width={500}
                height={312}
              />
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='font-medium text-lgray'>Sebastien Micke</h3>
              <h1 className='font-bold'>You Never Tagged Me</h1>
              <div className='flex mt-4 divide-x'>
                <div className='pr-5'>
                  <div className='font-semibold'>Current Bid</div>
                  <div className='text-2xl font-bold'>{3.75} ETH</div>
                  <div className='font-bold text-lgray'>${'13,448.68'}</div>
                </div>
                <div className='pl-5'>
                  <div className='font-semibold'>Auction ends In</div>
                  <div className='flex gap-3'>
                    <div className='flex flex-col'>
                      <div className='text-2xl font-bold'>{14}</div>
                      <div className='font-bold text-lgray'>Hours</div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='text-2xl font-bold'>{9}</div>
                      <div className='font-bold text-lgray'>Minutes</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* <Button className='mt-5 rounded-full' variant='outline'>
                  BID NOW
                </Button> */}
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-28 mb-36'>
            <div>
              <h3 className='mb-2 ml-2'>Bidding History</h3>
              <div className='p-2 border rounded-lg'>
                <table className='font-light text-left'>
                  <thead className='text-lg border-b'>
                    <tr>
                      <th className='w-48'>Price</th>
                      <th className='w-80'>From</th>
                      <th className='w-48'>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr className='text-lg border-b bg-green-50'>
                      <td>3.75 Ξ</td>
                      <td>xX49238239482aw32x</td>
                      <td>5 seconds ago</td>
                    </tr>
                    <tr className='text-lg border-b bg-green-50'>
                      <td>2.75 Ξ</td>
                      <td>xX49238239482aw32x</td>
                      <td>10 seconds ago</td>
                    </tr>
                    <tr className='text-lg border-b bg-green-50'>
                      <td>1.75 Ξ</td>
                      <td>xX49238239482aw32x</td>
                      <td>15 seconds ago</td>
                    </tr>
                    <tr className='text-lg border-b bg-green-50'>
                      <td>0.75 Ξ</td>
                      <td>xX49238239482aw32x</td>
                      <td>20 seconds ago</td>
                    </tr> */}
                    <tr>
                      <td
                        colSpan={3}
                        className='p-5 text-lg text-center text-gray-700'
                      >
                        No history
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/**
 * Default info that you should change:
 * components/Seo.tsx
 * next-sitemap.js
 * public/favicon
 *
 * Please refer to the README.md
 */
