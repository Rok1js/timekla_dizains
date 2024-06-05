/* eslint-disable react/jsx-key */
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import Sun from '/sun.svg';
import Moon from '/moon.svg';
import Home from '/Home.svg';
import { useEffect, useState } from 'react';
import useDeviceType from './useDeviceType';
import classNames from 'classnames';

const AdminNavigationMap = [
    { url: '/', icon: Home },
    { name: '1', url: '/sekcija1' },
    { name: '2', url: '/sekcija2' },
    { name: '3', url: '/sekcija3' },
    { name: '4', url: '/sekcija4' },
    { name: '5', url: '/sekcija5' },
    { name: '6', url: '/sekcija6' },
    { name: '7', url: '/sekcija7' },
]

const renderChildren = (
    elements,
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
                >
                {element.name}
                </div>
            </Link>
        </div>
        )
      })
    );
  };


export const NavBar = () => {
    const location = useLocation();
    const [theme, setTheme] = useState('light');
    const isMobile = useDeviceType();

    const setThemeHandler = () => {
        if (theme === 'dark') {
            setTheme("light");
        } else {
            setTheme("dark");
        }
        
    }

    useEffect(()=> {
        if (theme === 'dark') {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        
    },[theme])



    if (isMobile) {
    return (
        <div className='fixed top-0 left-0 right-0 border-b-[2px] border-text z-10'>
            <nav className="bg-primary h-[75px] flex ">
                <div>
                    <Dropdown elements={AdminNavigationMap} pathname={location.pathname} />
                </div>
                <div className='flex h-[75px] ml-auto mr-[30px]'>
                    <button onClick={setThemeHandler}>
                        {theme === 'light' ? (
                            <img src={Sun} alt="" width='25px'/>
                        ) : (
                            <img src={Moon} alt="" width='25px'/>
                        )}
                    </button>
                </div>
            </nav>
        </div>
      );
    }

    return (
        <div className='fixed top-1/4'>
            <nav className="bg-primary flex">
                <div>
                    <div className="bg-secondary w-[70px]">
                        {renderChildren(AdminNavigationMap, location.pathname)}
                        <div className='cursor-pointer h-[60px] flex items-center justify-center' onClick={setThemeHandler}>
                            <button>
                                {theme === 'light' ? (
                                    <img src={Sun} alt="" width='35px'/>
                                ) : (
                                    <img src={Moon} alt="" width='35px'/>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
  };
  