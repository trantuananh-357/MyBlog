import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Posts from '../Posts';
import Sidebar from '../SideBar';
const cx = classNames.bind(styles);
function Container() {
    return (
        <div className={cx('home')}>
            <Posts />
            <Sidebar />
        </div>
    );
}

export default Container;
