import React, {
  memo, useEffect, useRef, useState,
} from 'react';
import { Link } from 'react-router-dom';

import useWeb3 from 'hooks/useWeb3';

import img from 'assets/img/Untitled-3.webp';
import logoMetaMask from 'assets/img/MetaMask-Logo.png';
import iconMenu from 'assets/icons/menu.png';

import './Header.scss';

function Header() {
  const { wallet, connect } = useWeb3();

  const [scrollDirection, setScrollDirection] = useState('up');
  const [modal, setModal] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const menuRef = useRef();
  const dropdownRef = useRef(null);

  const onToggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const onClickModal = () => {
    setModal(!modal);
  };

  const handleConnectMetaMask = () => {
    connect();
    setModal(false);
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      setShowDropdown(true);
    };

    const handleMouseLeave = () => {
      setShowDropdown(false);
    };

    if (dropdownRef.current) {
      dropdownRef.current.addEventListener('mouseenter', handleMouseEnter);
      dropdownRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (dropdownRef.current) {
        dropdownRef.current.removeEventListener('mouseenter', handleMouseEnter);
        dropdownRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [dropdownRef, wallet]);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection
        && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsShowMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuRef]);

  return (
    <div className="headerContainer">
      <div className={`header ${scrollDirection === 'up' ? 'header-show' : 'header-hide'}`}>
        <div className="header__nav">
          <div className="header__nav--left">
            <Link to="/esg" className="nav-link">ESG</Link>

            <Link to="/about" className="nav-link">ABOUT</Link>
          </div>

          <div className="header__nav--home">
            <Link to="/" className="nav-link">
              AEINDRI
            </Link>
          </div>

          <div className="header__nav--right">
            <Link to="/create-brand" className="nav-link">CREATE</Link>

            {wallet.address
              ? (
                <span
                  ref={dropdownRef}
                  className={`nav-link dropdown ${showDropdown ? 'showDropDown' : ''}`}
                >
                  {`${wallet.address.slice(0, 5)}...${wallet.address.slice(38, 42)}`}

                  {showDropdown && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/profile">
                          Profile
                        </Link>
                      </li>

                      <li>
                        <Link to="/top-up">
                          Top-up
                        </Link>
                      </li>
                    </ul>
                  )}
                </span>
              )
              : (
                <button
                  type="button"
                  onClick={onClickModal}
                  className="nav-link"
                >
                  CONNECT WALLET
                </button>
              )}
          </div>
        </div>

        <div className="header__section" />
      </div>

      {/* header mobi */}
      <div className="header__mobile">
        <div className="header__nav--home">
          <Link to="/" className="nav-link">
            AEINDRI
          </Link>
        </div>

        <button type="button" ref={menuRef} onClick={onToggleMenu} className="icon-menu">
          <img
            src={iconMenu}
            alt="icon menu"
          />
        </button>

        <div className={`header__mobile--dropdown ${!wallet.address && isShowMenu ? 'changeHeight' : ''}  ${isShowMenu ? 'header__mobile--active' : ''}`}>
          <Link to="/esg" className="nav-link">ESG</Link>

          <Link to="/about" className="nav-link">ABOUT</Link>

          <Link to="/create-brand" className="nav-link">CREATE</Link>

          {wallet.address
            ? (
              <>
                <span className="nav-link">
                  {`${wallet.address.slice(0, 5)}...${wallet.address.slice(38, 42)}`}
                </span>

                <ul className="dropdown-menu">
                  <li>
                    <Link to="/profile" className="nav-link">
                      Profile
                    </Link>
                  </li>

                  <li>
                    <Link to="/top-up" className="nav-link">
                      Top-up
                    </Link>
                  </li>
                </ul>
              </>
            )
            : (
              <button
                type="button"
                onClick={onClickModal}
                className="nav-link"
              >
                CONNECT WALLET
              </button>
            )}
        </div>
      </div>

      <div className={`modal ${modal && 'modal-show'}`}>
        <div
          className="modal__overlay"
          onClick={onClickModal}
          role="button"
          tabIndex={0}
          aria-label="Modal Overlay"
          onKeyDown={() => null}
        />

        <div className="modal__content">
          <div className="modal__content--btn">
            <i
              className="fa-solid fa-x"
              onClick={onClickModal}
              role="button"
              tabIndex={0}
              aria-label="Modal Close"
              onKeyDown={() => null}
            />
          </div>

          <div className="modal__content--btn-connect">
            <img src={img} alt="" className="bg-img" />

            <span className="bg-text">
              If you don&apos;t have a wallet yet,
              you can select below and create one now.
            </span>

            <div
              onClick={handleConnectMetaMask}
              role="button"
              tabIndex={0}
              onKeyDown={() => null}
              className="btn-connect__content"
            >
              <img src={logoMetaMask} alt="" className="wallet-logo" />

              <span className="wallet-text">MetaMask</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
};

export default memo(Header);
