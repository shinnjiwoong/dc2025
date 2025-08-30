import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
    title: 'DESIGN CAMP 2025 - 일상의실천',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className="font-kigsans">
                <CustomCursor />
                {children}
            </body>
        </html>
    );
}
