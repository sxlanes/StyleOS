import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Demo253 from './pages/Demo253';
import DemoCarolAnn from './pages/DemoCarolAnn';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import DashboardDemoPage from './pages/DashboardDemoPage';
import MarketingDashboardDemoPage from './pages/MarketingDashboardDemoPage';
import DemosPage from './pages/DemosPage';
import PlanDetails from './pages/PlanDetails';
import LegalMentions from './pages/LegalMentions';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReviewsDemo from './pages/ReviewsDemo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/demos" element={<DemosPage />} />
                <Route path="/reviews-demo" element={<ReviewsDemo />} />
                <Route path="/demo/253-barber-club" element={<Demo253 />} />
                <Route path="/demo/carol-ann" element={<DemoCarolAnn />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard-demo" element={<DashboardDemoPage />} />
                <Route path="/marketing-demo" element={<MarketingDashboardDemoPage />} />
                <Route path="/plan/:planId" element={<PlanDetails />} />

                {/* Legal Routes */}
                <Route path="/legal" element={<LegalMentions />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
        </Router>
    );
}

export default App;
