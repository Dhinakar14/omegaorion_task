import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import TopBar from "./components/TopBar.jsx";
import People from "./pages/People.jsx";
import Timesheet from "./pages/Timesheet.jsx";

function AppLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-100">
      <Sidebar currentPath={location.pathname} isOpen={sidebarOpen} onToggle={setSidebarOpen} />
      <div className="flex-1 flex flex-col lg:ml-[272px]">
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 pt-4 sm:pt-6 pb-6 sm:pb-8 px-2 sm:px-4 bg-white mx-2 sm:mx-4 rounded-xl sm:rounded-2xl">
          <Routes>
            <Route path="/people" element={<People />} />
            <Route path="/team-management/timesheet" element={<Timesheet />} />
            <Route path="*" element={<Navigate to="/people" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return <AppLayout />;
}

