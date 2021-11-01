import { formatEther } from '@ethersproject/units';
import { useEtherBalance, useEthers } from '@usedapp/core';
import Image from 'next/image';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Header() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <header className='fixed top-0 z-50 flex justify-between w-full px-20 py-3'>
      <UnstyledLink href='/home'>
        <Image
          src='/images/YNTM-Logo.png'
          alt='You Never Taggeed Me'
          width={180}
          height={39}
        />
      </UnstyledLink>
      <div className='flex items-center gap-5'>
        <UnstyledLink href='/about' className='font-semibold hover:text-pink'>
          ABOUT
        </UnstyledLink>
        <UnstyledLink href='https://twitter.com/sebastienmicke?lang=en'>
          <Image
            src='/images/twitter.png'
            alt='Twitter Icon'
            width={38}
            height={38}
          />
        </UnstyledLink>
        <UnstyledLink href='https://instagram.com/younevertaggedme?utm_medium=copy_link'>
          <Image
            src='/images/instagram.png'
            alt='Instagram Icon'
            width={38}
            height={38}
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
              formatEther(etherBalance || 0) +
              ' ETH)'
            : 'CONNECT WALLET'}
        </Button>
      </div>
    </header>
  );
}
