import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { LoginComponent } from '../components/auth/LoginComponent';
import { SignInComponent } from "../components/auth/SignInComponent";
import AuthenticatedRoute from "../components/common/AuthenticatedRoute";
import { MainLayout } from "../layout/MainLayout";
import TransactionComponet from "../components/dashboard/TransactionComponet";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route
                path="/auth"
                element={
                    <AuthenticatedRoute>
                        <AuthLayout />
                    </AuthenticatedRoute>
                }
            >
                <Route path="" element={<LoginComponent />} />
                <Route path="signin" element={<SignInComponent />} />
            </Route>
            <Route
                path="/dashboard"
                element={
                    <AuthenticatedRoute isPrivate={true}>
                        <MainLayout />
                    </AuthenticatedRoute>
                }
            >
                <Route path="" element={<TransactionComponet />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes