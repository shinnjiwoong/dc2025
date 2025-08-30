'use client';

import { useState } from 'react';
import WebsiteButton from '@/components/WebsiteButton';
import WebsiteFrame from '@/components/WebsiteFrame';
import HeaderSingleText from '@/components/HeaderSingleText';

const websites = [
    {
        id: 1,
        title: '민진찬의 상호작용',
        url: 'http://example.com',
        fontSize: '5.5dvw',
        hoverColor: '#FF6B6B', // 빨간색
    },
    {
        id: 2,
        title: '오이고수',
        url: 'http://httpbin.org',
        fontSize: '6dvw',
        hoverColor: '#4ECDC4', // 청록색
    },
    {
        id: 3,
        title: '사바사',
        url: 'http://jsonplaceholder.typicode.com',
        fontSize: '8dvw',
        hoverColor: '#45B7D1', // 파란색
    },
    {
        id: 4,
        title: '후라이 사운드',
        url: 'http://nikji.kr/flyingsound',
        fontSize: '7dvw',
        hoverColor: '#96CEB4', // 연두색
    },
];

export default function Home() {
    const [selectedWebsite, setSelectedWebsite] = useState(websites[0]);
    const [isFrameVisible, setIsFrameVisible] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // 기본 흰색

    const handleWebsiteSelect = (website: (typeof websites)[0]) => {
        if (selectedWebsite.id !== website.id) {
            // 다른 웹사이트를 선택한 경우
            setIsFrameVisible(false);

            // 페이드 아웃 후 웹사이트 변경
            setTimeout(() => {
                setSelectedWebsite(website);
                setIsFrameVisible(true);
            }, 250);
        } else {
            // 같은 웹사이트를 선택한 경우에도 보여주기
            setIsFrameVisible(true);
        }
    };

    const handleMouseEnter = (website: (typeof websites)[0]) => {
        setBackgroundColor(website.hoverColor);
    };

    const handleMouseLeave = () => {
        setBackgroundColor('#FFFFFF'); // 기본 흰색으로 복귀
    };

    return (
        <div
            className="min-h-screen grid grid-cols-[1fr_6fr] p-[16px] gap-[16px] transition-colors duration-500 ease-in-out"
            style={{ backgroundColor }}
        >
            {/* 헤더 */}
            <header className="bg-transparent flex flex-col items-center justify-between gap-[16px]">
                <HeaderSingleText text="일" delay={0} />
                <HeaderSingleText text="상" delay={100} />
                <HeaderSingleText text="의" delay={200} />
                <HeaderSingleText text="실" delay={300} />
                <HeaderSingleText text="천" delay={400} />
            </header>

            {/* 메인 컨텐츠 */}
            <main className="relative">
                {/* 버튼 그룹 */}
                <div className="mb-8 absolute top-0 left-0 right-0 h-full">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                        {websites.map((website, index) => (
                            <WebsiteButton
                                key={website.id}
                                index={index}
                                title={website.title}
                                url={website.url}
                                onClick={() => handleWebsiteSelect(website)}
                                isActive={selectedWebsite.id === website.id}
                                fontSize={website.fontSize}
                                onMouseEnter={() => handleMouseEnter(website)}
                                onMouseLeave={handleMouseLeave}
                            />
                        ))}
                    </div>
                </div>

                {/* iFrame 영역 */}
                <div className="bg-transparent h-full">
                    <div className="h-full">
                        <WebsiteFrame
                            url={selectedWebsite.url}
                            title={selectedWebsite.title}
                            isShow={isFrameVisible}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
