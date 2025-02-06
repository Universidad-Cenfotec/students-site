"use client";

import { Box, CssBaseline } from "@mui/material";
import ThemeProvider from "@/ui/themes/ThemeProvider";
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function ClientLayout ({ children }: { children: React.ReactNode; }) {
    return (
        <ThemeProvider>
            <CssBaseline />
            <Box sx={ { display: "flex", flexDirection: "column", minHeight: "100vh" } }>
                <Box sx={ { position: "sticky", top: 0, zIndex: 1100, width: "100%" } }>
                    <Navbar />
                </Box>
                <Box component="main" sx={ { flexGrow: 1 } }>{ children }</Box>
                <Footer />
            </Box>
        </ThemeProvider>
    );
}
