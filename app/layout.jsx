import './globals.css'
import Navigation from "@/components/Navigation/Navigation";
import CartContextProvider from "@/store/shopping-cart-context";

export const metadata = {
    title: 'Watches - Final project',
    description: 'It is my final project for the NextJS course',
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <CartContextProvider>
                    <header>
                        <Navigation/>
                    </header>
                    {children}
                    <div id="modal"></div>
                </CartContextProvider>
            </body>
        </html>
    );
}
