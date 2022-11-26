import styles from './Posts.module.scss';
import classNames from 'classnames/bind';
import Post from '../Post';
import { HomeImg, item1, item2 } from '../../assets/Images';
const cx = classNames.bind(styles);

function Posts() {
    return (
        <div className={cx('posts-list')}>
            <Post img={HomeImg} />
            <Post img={item1} />
            <Post img={item2} />
            <Post img={HomeImg} />
            <Post img={HomeImg} />
        </div>
    );
}

export default Posts;
