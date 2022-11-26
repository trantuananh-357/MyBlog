import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { item2 } from '../../assets/Images';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sideBar')}>
            <div className={cx('sideBar-item_about')}>
                <span className={cx('sideBar-item_title')}>ABOUT ME</span>
                <img src={item2} alt="" />
                <p className={cx('sideBar-item_desc')}>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud
                    id quis proident.
                </p>
            </div>
            <div className={cx('sideBar-item_caterogies')}>
                <span className={cx('sideBar-item_title')}>CATEGORIES</span>
                <ul className={cx('siderBar-item_list')}>
                    <li className={cx('siderBar-item_listItem')}>Life</li>
                    <li className={cx('siderBar-item_listItem')}>Music</li>
                    <li className={cx('siderBar-item_listItem')}>Sport</li>
                    <li className={cx('siderBar-item_listItem')}>Style</li>
                    <li className={cx('siderBar-item_listItem')}>Tech</li>
                    <li className={cx('siderBar-item_listItem')}>Cinema</li>
                </ul>
            </div>

            <div className={cx('sideBar-itemFol')}>
                <span className={cx('sideBar-item_title')}>FOLLOW US</span>
                <div className={cx('sideBar-item_contact')}>
                    <FontAwesomeIcon className={cx('social-icon')} icon={faFacebookF} />
                    <FontAwesomeIcon className={cx('social-icon')} icon={faTwitter} />
                    <FontAwesomeIcon className={cx('social-icon')} icon={faInstagram} />
                </div>
                <div className={cx('sourseDev')}>
                    <FontAwesomeIcon icon={faCopyright} />
                    <p>CopyRight by ITA</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
