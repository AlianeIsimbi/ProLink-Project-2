import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Stats } from "./components/Stats";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { StudentRegistration } from "./pages/StudentRegistration";
import { GraduateRegistration } from "./pages/GraduateRegistration";
import { InstitutionRegistration } from "./pages/InstitutionRegistration";
import { CompanyRegistration } from "./pages/CompanyRegistration";
import { StudentDashboard } from "./pages/StudentDashboard";
import { GraduateDashboard } from "./pages/GraduateDashboard";
import { InstitutionDashboard } from "./pages/InstitutionDashboard";
import { CompanyDashboard } from "./pages/CompanyDashboard";

function HomePage() {
  return (
    <div className="min-h-screen bg-blur-pattern relative">
      <Header />
      <main className="relative pt-16">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="impact">
          <Stats />
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register/student" element={<StudentRegistration />} />
            <Route path="/register/graduate" element={<GraduateRegistration />} />
            <Route path="/register/institution" element={<InstitutionRegistration />} />
            <Route path="/register/company" element={<CompanyRegistration />} />
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            <Route path="/dashboard/graduate" element={<GraduateDashboard />} />
            <Route path="/dashboard/institution" element={<InstitutionDashboard />} />
            <Route path="/dashboard/company" element={<CompanyDashboard />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
