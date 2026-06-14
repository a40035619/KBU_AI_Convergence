import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layout/Layout"; 
import MainPage from "./pages/MainPage"; 
import Information from "./pages/Information";
import StudentCouncil from "./pages/StudentCouncil";
import Notice from "./pages/Notice";
import NoticeDetail from "./pages/NoticeDetail";
import Professor from "./pages/Professor";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
};

const AppRoute = () => {
    return (
        <>
            <ScrollToTop />
            <Layout
                body={
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/information" element={<Information />} />
                        <Route path="/student-council" element={<StudentCouncil />} />
                        <Route path="/notice" element={<Notice />} />
                        <Route path="/notice/:id" element={<NoticeDetail />} />
                        <Route path="/professor" element={<Professor />} />
                    </Routes>
                }
            />
        </>
    );
};

export default AppRoute;