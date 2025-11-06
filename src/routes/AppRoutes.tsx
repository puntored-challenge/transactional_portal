import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { MainLayout } from "../layout/MainLayout";
import { LoginComponent } from '../components/auth/LoginComponent';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Rutas públicas */}
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="" element={<LoginComponent />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes