import classNames from 'classnames/bind';
import styles from './LogInPage.module.scss';
import { useRef } from 'react';
const cx = classNames.bind(styles);

function LogInPage() {
    const ref = useRef();
    console.log(ref);
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Login</h1>
            <div className={cx('formValidator')}>
                <form className={cx('regester')}>
                    <div className={cx('email')}>
                        <label className={cx('title-email')}>email</label>
                        <input className={cx('getEmail')} placeholder="Type your Email" ref={ref} />
                        <label className={cx('form-message')}>Vui lòng nhập đúng định dạng email</label>
                    </div>
                    <div className={cx('passWord')}>
                        <label className={cx('title-passWord')}>passWord</label>
                        <input className={cx('getPassWord')} placeholder="Type your PassWord" type="password" />
                        <label className={cx('form-message')}>Vui lòng nhập đúng định dạng mật khẩu</label>
                    </div>
                </form>
            </div>
            <button className={cx('submit-form')}>Login</button>
        </div>
    );
}

export default LogInPage;
