import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
    title: 'iFrame 웹사이트 뷰어',
    description: '4개의 외부 웹사이트를 iFrame으로 볼 수 있는 웹사이트',
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
