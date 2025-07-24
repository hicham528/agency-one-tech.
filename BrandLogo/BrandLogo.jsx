// src/components/BrandLogo.jsx

import microsoftLogo from '../../assets/microsoft.png';
import netflixLogo from '../../assets/netflix.png';
import shopifyLogo from '../../assets/shopify.png';
import dellLogo from '../../assets/dell.png';
import intelLogo from '../../assets/intel.png';
import hpLogo from '../../assets/hp.png';

function BrandLogo() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-8 w-full p-4">
      <p className="capitalize xl:text-md text-sm font-semibold text-[#252525]">
        more than 20 companies cooperate with us.
      </p>
      <div className="flex justify-around flex-wrap xl:gap-0 gap-4 items-center w-full">
        <img src={microsoftLogo} alt="Microsoft" style={{ width: '80px' }} />
        <img src={netflixLogo} alt="Netflix" style={{ width: '80px' }} />
        <img src={shopifyLogo} alt="Shopify" style={{ width: '80px' }} />
        <img src={dellLogo} alt="Dell" style={{ width: '80px' }} />
        <img src={intelLogo} alt="Intel" style={{ width: '80px' }} />
        <img src={hpLogo} alt="HP" style={{ width: '80px' }} />
      </div>
    </div>
  );
}

export default BrandLogo;