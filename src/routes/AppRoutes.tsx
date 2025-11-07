import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { LoginComponent } from '../components/auth/LoginComponent';
import { SignInComponent } from "../components/auth/SignInComponent";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Rutas públicas */}
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="" element={<LoginComponent />} />
                <Route path="signin" element={<SignInComponent />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes