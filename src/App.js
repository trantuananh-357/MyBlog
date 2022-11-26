import Topbar from './components/Topbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './router';
function App() {
    return (
        <Router>
            <Topbar />
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.component} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
