import clsx from 'clsx';

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

enum ButtonVariant {
  'dark',
  'light',
  'primary',
  'secondary',
}

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

export default function ButtonLink({
  children,
  className = '',
  variant = 'dark',
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'py-2.5 px-6 inline-block rounded-full font-bold hover:text-pink-600 uppercase shadow-sm',
        {
          'bg-dark text-white': variant === 'dark',
          'bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark border-gray-400':
            variant === 'light',
          'bg-primary-400 text-black hover:bg-primary-400/90 hover:text-black border-primary-500 focus-visible:text-dark':
            variant === 'primary',
          'bg-pink-600 text-white hover:bg-white border border-pink-600 hover:border':
            variant === 'secondary',
        },
        className
      )}
      style={
        variant === 'primary'
          ? ({
              '--clr-primary-400': 'white',
              '--clr-primary-500': 'white',
            } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </UnstyledLink>
  );
}
