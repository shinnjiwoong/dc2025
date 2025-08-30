'use client';

import { useState, useEffect } from 'react';

interface WebsiteFrameProps {
    url: string;
    title: string;
    isShow: boolean;
}

export default function WebsiteFrame({
    url,
    title,
    isShow,
}: WebsiteFrameProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isHttpUrl, setIsHttpUrl] = useState(false);

    useEffect(() => {
        // HTTP URL인지 확인
        setIsHttpUrl(url.startsWith('http://'));
    }, [url]);

    useEffect(() => {
        if (isShow) {
            if (isHttpUrl) {
                // HTTP URL인 경우 새 탭에서 열기
                window.open(url, '_blank', 'noopener,noreferrer');
                return;
            }

            // 페이드 인: 약간의 지연 후 표시
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 50);
            return () => clearTimeout(timer);
        } else {
            // 페이드 아웃: 즉시 숨김
            setIsVisible(false);
        }
    }, [isShow, isHttpUrl, url]);

    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    // HTTP URL인 경우 안내 메시지 표시
    if (isHttpUrl && isShow) {
        return (
            <div className="w-full h-full bg-white flex items-center justify-center hidden">
                <div className="text-center p-8">
                    <p className="text-lg font-kigsans font-ultrabold text-gray-800 mb-4">
                        {title}
                    </p>
                    <p className="text-sm font-kigsans font-ultralight text-gray-600 mb-6">
                        HTTP 사이트는 새 탭에서 열립니다
                    </p>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-blue-600 text-white text-sm font-kigsans font-ultrabold rounded hover:bg-blue-700 transition-colors"
                    >
                        새 탭에서 열기
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`w-full h-full bg-white overflow-hidden z-[99] transition-opacity duration-500 ease-in-out ${
                isVisible
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
            }`}
        >
            {hasError && (
                <div className="flex items-center justify-center h-full">
                    <div className="text-center p-4">
                        <p className="text-sm font-kigsans font-ultrabold text-red-600 mb-2">
                            웹사이트를 불러올 수 없습니다
                        </p>
                        <p className="text-xs font-kigsans font-ultralight text-gray-500 mb-4">
                            HTTPS 사이트에서 HTTP 콘텐츠는 보안상의 이유로
                            차단됩니다
                        </p>
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-kigsans font-ultrabold rounded hover:bg-blue-700 transition-colors"
                        >
                            새 탭에서 열기
                        </a>
                    </div>
                </div>
            )}

            <iframe
                src={url}
                className={`w-full h-full left-0 top-0 fixed z-[99] border-0`}
                title={title}
                onLoad={handleLoad}
                onError={handleError}
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-downloads"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}
