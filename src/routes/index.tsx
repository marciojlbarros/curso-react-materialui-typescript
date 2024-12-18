import { Routes, Route, Navigate } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<p>Home</p>} />

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}