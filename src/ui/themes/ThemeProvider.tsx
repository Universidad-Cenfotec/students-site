"use client";

import React, { ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline, createTheme } from "@mui/material";
import theme from './theme';

const ThemeProvider: React.FC<{ children: ReactNode; }> = ({ children }) => {
    return (
        <MuiThemeProvider theme={ theme }>
            <CssBaseline />
            { children }
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
