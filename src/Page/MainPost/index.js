import SinglePost from '../../components/SinglePost';
import Sidebar from '../../components/SideBar';
import classNames from 'classnames/bind';
import styles from './MainPost.module.scss';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
function MainPost() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={cx('main-post')}>
            <SinglePost />
            <Sidebar />
        </div>
    );
}

export default MainPost;
