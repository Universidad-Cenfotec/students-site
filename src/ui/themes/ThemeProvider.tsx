"use client";

import React, { ReactNode } from "react";

const ThemeProvider: React.FC<{ children: ReactNode; }> = ({ children }) => {
    return (
        <div data-theme="custom" className="min-h-screen">
            { children }
        </div>
    );
};

export default ThemeProvider;
