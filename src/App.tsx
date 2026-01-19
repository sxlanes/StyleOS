
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Demo253 from './pages/Demo253';

import Login from './pages/Login';
import DemosPage from './pages/DemosPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/demos" element={<DemosPage />} />
                <Route path="/demo/253-barber-club" element={<Demo253 />} />
            </Routes>
        </Router>
    );
}

export default App;
