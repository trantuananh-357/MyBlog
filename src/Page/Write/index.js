import Topbar from '../../components/Topbar';
import classNames from 'classnames/bind';
import styles from './Write.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
function Write() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('write-img')}
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="ảnh"
            />
            <div className={cx('write-form')}>
                <div className={cx('write-form-group')}>
                    <label htmlFor="fileInput" className={cx('fileInput')}>
                        <FontAwesomeIcon icon={faPlusCircle} className={cx('chooseIcon')} />
                        <input type="file" id="fileInput" className={cx('chooseFile')} />
                        <input type="text" placeholder="Title" className={cx('write-title')} />
                    </label>
                </div>
                <div className={cx('write-form-group')}>
                    <textarea className={cx('writeContent')} placeholder="Tell Your Story...."></textarea>
                </div>
            </div>
        </div>
    );
}

export default Write;
