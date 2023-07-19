import React from 'react';
import { Tooglebut } from './Navcss';
const Moblienav = ({ toggle }) => {
  const { isVisible } = toggle;

  return (
    <Tooglebut>
      {isVisible && (
        <ul>
          <li><p>Best Sellers</p></li>
          <li><p>Skin Care </p></li>
          <li><p>Sets & Kits </p></li>
          <li><p>Shop All</p></li>
          <li><p>This is bliss</p></li>
        </ul>
      )}
    </Tooglebut>
  );
};

export default Moblienav;
