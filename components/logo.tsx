import logoLight from '../public/logo_light.svg';
import logoDark from '../public/logo_dark.svg';

import Image from 'next/image';

export default function Logo() {
  return (
    <picture>
        <source srcSet={logoDark.src} media="(prefers-color-scheme: light)"/>
        <Image src={logoLight} alt="The head of a wrench." width={32} height={32}></Image>
    </picture>
  )
}