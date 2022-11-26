import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { HeaderImg } from '../../assets/Images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('header-title')}>
                <p className={cx('header-title_name')}>React & Node</p>
                <h1 className={cx('header-title_blog')}>BLOG</h1>
            </div>
            <div className={cx('header-img')}>
                <img src={HeaderImg} alt="banner" />
            </div>
        </div>
    );
}

export default Header;
