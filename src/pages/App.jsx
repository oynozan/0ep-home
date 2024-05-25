import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './Home';

export default function App() {
    return (
        <div id="app">
            {/* Main Route */}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}