import React from 'react';

import { Centered } from './Centered';
import { Container } from './Container';
import { CryptoAddresses } from './CryptoAddresses';
import { Logo } from './Logo';
import { Social } from './Social';

export const Footer = () => (
  <footer role="contentinfo" className="bg-grey-primary text-sm px-4">
    <Container className="py-10 md:flex md:items-center">
      <div className="flex-1">
        <p>
          <strong>Podporte nás!</strong>
          <br />
          Budeme vďační za akúkoľvek podporu. Prijímame:
        </p>

        <CryptoAddresses />
        <Social />

        <p>
          designed by <a href="https://www.matusdesign.com">matusdesign.com</a>
        </p>
      </div>

      <Centered>
        <Logo />
      </Centered>
    </Container>
  </footer>
);
