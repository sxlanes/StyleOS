
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Demo253 from './pages/Demo253';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import DemosPage from './pages/DemosPage';
import PlanDetails from './pages/PlanDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/demos" element={<DemosPage />} />
                <Route path="/demo/253-barber-club" element={<Demo253 />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/plan/:planId" element={<PlanDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
