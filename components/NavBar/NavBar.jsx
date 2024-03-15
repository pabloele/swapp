import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Style from './NavBar.module.css';
import { Modal, TokenList } from '../../components';
import { GiHorseHead } from 'react-icons/gi';
import { MdSearch } from 'react-icons/md';
import { FaEthereum } from 'react-icons/fa';
export const NavBar = () => {
  const menuItems = [
    {
      name: 'Swap',
      link: '/',
    },
    {
      name: 'Tokens',
      link: '/',
    },
    {
      name: 'Pools',
      link: '/',
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        {/* Left */}
        <div className={Style.NavBar_box_left}>
          <div className={Style.NavBar_box_left}>
            <GiHorseHead size={50} />
          </div>
          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link
                key={i + 1}
                href={{ pathname: `${el.name}`, query: `${el.link}` }}
              >
                <p className={Style.Navbar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* Middle */}
        <div className={Style.Navbar_box_middle}>
          <div className={Style.NavBar_box_middle_box}>
            <div className={Style.NavBar_box_middle_search}>
              <MdSearch size={15} />
              <input type="text" placeholder="Search Tokens"></input>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
              <FaEthereum size={30} />
            </div>
            <p>Network Name</p>

            {openModal && (
              <Modal setOpenModal={setOpenModal} connectWallet="Connect" />
            )}
          </div>
          <button>Address</button>
        </div>
        {/* TokenListComponent */}
        {openTokenBox && (
          <TokenList tokenDate="hey" setOpenTokenBox={setOpenTokenBox} />
        )}
      </div>
    </div>
  );
};
