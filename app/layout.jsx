import './globals.css'
import Navigation from "@/components/Navigation/Navigation";

export const metadata = {
    title: 'Watches - Final project',
    description: 'It is my final project for the NextJS course',
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <header>
                    <Navigation/>
                </header>
                {children}
                <div id="modal"></div>
            </body>
        </html>
    );
}
