import React from "react";
import HomePage from "./layout/homePage";
import Layout from "./layout";
import NotFound from "./layout/notFound";
import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<Layout />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
