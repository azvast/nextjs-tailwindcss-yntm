import Image from 'next/image';
import React from 'react';
import ReactPlayer from 'react-player/youtube';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo />

      <main>
        <section className='relative'>
          <header className='container flex justify-between p-3 mx-auto'>
            <UnstyledLink href='#'>
              <Image
                src='/images/YNTM-Logo.png'
                alt='You Never Taggeed Me'
                width={231}
                height={47}
              />
            </UnstyledLink>
            <div className='flex items-center gap-5'>
              <CustomLink href='#about'>ABOUT</CustomLink>
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
              <Button className='rounded-full'>Connect Wallet</Button>
            </div>
          </header>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <Image
              src='/images/YNTM.png'
              alt='You Never Taggeed Me'
              width={982}
              height={204}
            />

            <ButtonLink className='mt-6' href='#bid' variant='secondary'>
              Bid now
            </ButtonLink>
          </div>
          <ReactPlayer
            className='absolute top-0 -z-10'
            width='100%'
            height='100%'
            loop={true}
            muted={true}
            playing={true}
            url='https://www.youtube.com/watch?v=TkHLetfj_pg'
          />
        </section>

        <section id='bid'>
          <div className='flex justify-center gap-8 mt-20'>
            <div>
              <Image
                src='/images/asset.jpg'
                alt='Asset'
                width={500}
                height={312}
              />
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='text-gray-500'>Sebastien Micke</h3>
              <h1>You Never Tagged Me</h1>
              <div className='flex mt-4 divide-x'>
                <div className='pr-5'>
                  <div className='font-semibold'>Current Bid</div>
                  <div className='text-2xl font-bold'>{3.75} ETH</div>
                  <div className='font-semibold text-gray-500'>
                    ${'13,448.68'}
                  </div>
                </div>
                <div className='pl-5'>
                  <div className='font-semibold'>Auction ends In</div>
                  <div className='flex gap-3'>
                    <div className='flex flex-col'>
                      <div className='text-2xl font-bold'>{14}</div>
                      <div className='font-semibold text-gray-500'>Hours</div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='text-2xl font-bold'>{9}</div>
                      <div className='font-semibold text-gray-500'>Minutes</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Button className='mt-5 rounded-full' variant='outline'>
                  Bid now
                </Button>
              </div>
            </div>
          </div>
          <div className='flex justify-center my-28'>
            <div>
              <h3 className='mb-2'>Bidding History</h3>
              <table className='text-left'>
                <tr className='text-lg border-b'>
                  <th className='w-48'>Price</th>
                  <th className='w-80'>From</th>
                  <th className='w-48'>Date</th>
                </tr>
                <tr className='text-lg border-b bg-green-50'>
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
                </tr>
              </table>
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
