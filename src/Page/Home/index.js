import Topbar from '../../components/Topbar';
import Header from '../../components/Header';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Container from '../../components/Container';
function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="home-main">
            <Header />
            <Container />
        </div>
    );
}

export default Home;
