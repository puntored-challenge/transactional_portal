import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { LoginComponent } from '../components/auth/LoginComponent';
import { SignInComponent } from "../components/auth/SignInComponent";
import { MainLayout } from "../layout/MainLayout";
import TransactionComponet from "../components/dashboard/TransactionComponet";
import ListTransactionComponent from "../components/dashboard/ListTransactionComponent";
import AuthenticatedRouteComponent from "../components/common/AuthenticatedRouteComponent";

/**
 * AppRoutes
 *
 * Componente de React que define todas las rutas de la aplicación.
 * Normalmente incluye rutas públicas, privadas y layouts asociados
 * a cada sección de la aplicación.
 */
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
                path="/auth"
                element={
                    <AuthenticatedRouteComponent>
                        <AuthLayout />
                    </AuthenticatedRouteComponent>
                }
            >
                <Route path="" element={<LoginComponent />} />
                <Route path="signin" element={<SignInComponent />} />
            </Route>
            <Route
                path="/dashboard"
                element={
                    <AuthenticatedRouteComponent isPrivate={true}>
                        <MainLayout />
                    </AuthenticatedRouteComponent>
                }
            >
                <Route path="" element={<ListTransactionComponent />} />
                <Route path="buy" element={<TransactionComponet />} />
            </Route>
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    );
};

export default AppRoutes