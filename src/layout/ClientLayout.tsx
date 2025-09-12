"use client";

import ThemeProvider from "@/ui/themes/ThemeProvider";
import { Navbar } from '@/components/Landing/components/Navbar';
import { Footer } from '@/components/Landing/components/Footer';

export default function ClientLayout ({ children }: { children: React.ReactNode; }) {
    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen">
                <div className="sticky top-0 z-50 w-full">
                    <Navbar />
                </div>
                <main className="flex-grow">{ children }</main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
