import React from 'react';
import close from 'public/assets/icons/close.svg';

function ScrollLock() {
  React.useEffect(() => {
    // Prevent scrolling on the entire page
    document.body.style.overflow = 'hidden';

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return null;
}

interface MenuProps {
  onExit: () => void
}


const Menu = ({ onExit }: MenuProps) => {
  return (
    <div>
      <ScrollLock />
      <div className='fixed overflow-hidden z-[9999] left-[0px] top-[0px] right-[0px] bottom-[0px] w-[100vw] h-[100vh] bg-neutrals-0 menu_open'>
        <div className='px-4 py-3 flex justify-between lg:justify-end lg:flex-row-reverse text-primary-90 font-bold heading-2xxs lg:heading-xs lg:font-bold items-center lg:px-12 lg:py-10'>
          <h1>Realms of Glory</h1>
          <button className='lg:mr-5' onClick={() => onExit()}><img src={close} alt='menu' /></button>
        </div>
      </div>
    </div>
  );
};

export default Menu;