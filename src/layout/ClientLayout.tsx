"use client";

import ThemeProvider from "@/ui/themes/ThemeProvider";
import CustomBubbleMenu from '@/components/Landing/components/CustomBubbleMenu';
import { Footer } from '@/components/Landing/components/Footer';

export default function ClientLayout ({ children }: { children: React.ReactNode; }) {
    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen">
                <CustomBubbleMenu
                    logo={ <img src='/images/logo.png' alt="CENFOTEC Logo" className="h-8 w-auto" /> }
                    menuAriaLabel="Toggle navigation"
                    menuBg="#ffffff"
                    menuContentColor="#111111"
                    useFixedPosition={ true }
                />
                <main className="flex-grow">{ children }</main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
