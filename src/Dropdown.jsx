/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '/hamburger.svg';

const renderChildren = (
  elements,
  setIsOpen,
  pathname,
) => {
  return (
    elements.map((element) => {
      if(!element.name) {
        return (
          <div className="">
          <Link to={element.url}>
            <div
              className={classNames(
                'p-[15px] border-[#09100C] relative text-nowrap text-center border-b-[1px] title-mobile-headline flex justify-center items-center',
                {'bg-accent text-background': pathname === element.url}
              )}
              onClick={() => setIsOpen(false)}
            >
               <img className='w-[25px]' src={element.icon} alt="" />
            </div>
          </Link>
        </div>
        );
      }

      return (
        <div className="">
        <Link to={element.url}>
          <div
            className={classNames(
              'p-[15px] border-[#09100C] relative text-nowrap text-center border-b-[1px] title-mobile-headline',
              {'bg-accent text-background': pathname === element.url}
            )}
            onClick={() => setIsOpen(false)}
          >
            {element.name}
          </div>
        </Link>
      </div>
      );
    })
  );
};

export const Dropdown = ({ elements, pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current !== null) {
        if (!(menuRef.current).contains(e.target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div ref={menuRef} className="flex flex-col relative self-center cursor-pointer">
      <div className="ml-[30px]" onClick={() => setIsOpen((prev) => !prev)}>
      <div className='flex h-[75px]'>
            <button>
                <img src={Hamburger} alt="" width='25px'/>
            </button>
        </div>
      </div>
      <div className={classNames(
        'absolute transition-all duration-200 ease-in top-[75px] w-screen',
        { 'opacity-100 visible translate-y-0 ': isOpen },
        { 'opacity-0 invisible translate-y-[-15px]': !isOpen },
      )}
      >
        <div className="relative">
          <div className="absolute bottom-0 left-[15px] tringle-up w-[10px]" />
        </div>
        <div className="bg-secondary w-full">
          {renderChildren(elements, setIsOpen, pathname)}
        </div>
      </div>
    </div>
  );
};
