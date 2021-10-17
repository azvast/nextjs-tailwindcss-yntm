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
      <Seo templateTitle='Home' />

      <main className='bg-dark'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=TkHLetfj_pg'
          loop={true}
          muted={true}
          playing={false}
        />

        <header className='container sticky top-0 flex justify-between p-3 mx-auto'>
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
        <section>
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
        </section>

        <section id='bid'>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
          <h1>adsfasd</h1>
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
