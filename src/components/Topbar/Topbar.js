import styles from './Topbar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Tippy from 'tippy.js';
import { createContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
function Topbar() {
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('top-left')}>
                <FontAwesomeIcon className={cx('social-icon')} icon={faFacebookF} />
                <FontAwesomeIcon className={cx('social-icon')} icon={faTwitter} />
                <FontAwesomeIcon className={cx('social-icon')} icon={faInstagram} />
            </div>
            <div className={cx('top-center')}>
                <ul className={cx('menu')}>
                    <li className={cx('menu-items')}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={cx('menu-items')}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={cx('menu-items')}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className={cx('menu-items')}>
                        <Link to="/write">Write</Link>
                    </li>
                    <li className={cx('menu-items')}>
                        <Link to="/logout">LogOut</Link>
                    </li>
                </ul>
            </div>

            <div className={cx('top-right')}>
                <Link to="/login">
                    <img
                        className={cx('topImg')}
                        src="https://images.unsplash.com/photo-1668934807819-536c2ca08a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt="img"
                    />
                </Link>
                <FontAwesomeIcon icon={faSearch} className={cx('search')} />
            </div>
        </div>
    );
}

export default Topbar;
