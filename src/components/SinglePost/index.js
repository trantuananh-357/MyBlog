import classNames from 'classnames/bind';
import styles from './Single.module.scss';
import { HomeImg } from '../../assets/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);
function SinglePost() {
    // Nhận API
    return (
        <div className={cx('wrapper')}>
            <img className={cx('singlePost-img')} src={HomeImg} alt="ảnh" />
            <div className={cx('singlePost-title')}>
                <h1 className={cx('title')}>Lorem ipsum dolor</h1>
                <div className={cx('edit')}>
                    <FontAwesomeIcon icon={faPenToSquare} className={cx('editIcon')} />
                    <FontAwesomeIcon icon={faTrashCan} className={cx('removeIcon')} />
                </div>
            </div>
            <div className={cx('singlePost-Inf')}>
                <a className={cx('author')}>Author: ITA</a>
                <h2 className={cx('postedTime')}>1 days ago</h2>
            </div>
            <p className={cx('singlePost-Pas')}>
                <span className={cx('bold-pas')}>L</span>orem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum
                beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
                eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
                eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
                eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
                eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
                eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
                eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
                eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
            </p>
        </div>
    );
}

export default SinglePost;
