import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PortFolioMainPage } from "../pages/PortFolioMainPage";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ProjectsPage } from "../pages/ProjectsPage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { SkillsPage } from "../pages/SkillsPage";

export const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <section className="main-content">
        <Routes>
          <Route path="/" element={<PortFolioMainPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};
