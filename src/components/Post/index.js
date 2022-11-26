import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Post({ img }) {
    return (
        <div className={cx('post')}>
            <Link to="/post/abc">
                <img className={cx('postImg')} src={img} alt="img" />
            </Link>
            <div className={cx('postInf')}>
                <div className={cx('postCats')}>
                    <span className={cx('postCat')}>
                        <a>Music</a>
                    </span>
                    <span className={cx('postCat')}>
                        <a>Life</a>
                    </span>
                </div>
                <div className={cx('post-title')}>
                    <Link className={cx('link')} to="/post/abc">
                        Lorem is name if take it you wat
                    </Link>
                </div>
                <div className={cx('post-date')}>1 hours</div>
            </div>
            <p className={cx('postDesc')}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt
                deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate
                ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    );
}
export default Post;
