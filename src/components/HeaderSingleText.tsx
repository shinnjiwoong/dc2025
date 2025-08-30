'use client';

import { useState, useEffect } from 'react';

interface HeaderSingleTextProps {
    text: string;
    delay?: number; // 딜레이 시간 (밀리초)
}

export default function HeaderSingleText({
    text,
    delay = 0,
}: HeaderSingleTextProps) {
    const [currentText, setCurrentText] = useState(text);
    const [isStarted, setIsStarted] = useState(false);

    // 각 글자별로 다른 글자들 정의
    const getAlternateTexts = (originalText: string) => {
        const alternateMap: { [key: string]: string[] } = {
            일: ['디'],
            상: ['자'],
            의: ['인'],
            실: ['캠'],
            천: ['프'],
        };
        return alternateMap[originalText] || ['가', '나', '다', '라'];
    };

    useEffect(() => {
        // 딜레이 후 애니메이션 시작
        const startTimer = setTimeout(() => {
            setIsStarted(true);
        }, delay);

        return () => clearTimeout(startTimer);
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;

        const alternateTexts = getAlternateTexts(text);
        let currentIndex = 0;
        let isReversing = false;

        const interval = setInterval(() => {
            if (!isReversing) {
                // 순차적으로 다른 글자로 변경
                if (currentIndex < alternateTexts.length) {
                    setCurrentText(alternateTexts[currentIndex]);
                    currentIndex++;
                } else {
                    // 모든 글자를 보여준 후 잠시 대기
                    setTimeout(() => {
                        isReversing = true;
                        currentIndex = alternateTexts.length - 1;
                    }, 1000);
                }
            } else {
                // 역순으로 원래 글자로 돌아가기
                if (currentIndex > 0) {
                    currentIndex--;
                    setCurrentText(alternateTexts[currentIndex]);
                } else {
                    // 원래 글자로 돌아가기
                    setCurrentText(text);
                    isReversing = false;
                    currentIndex = 0;
                }
            }
        }, 1000); // 1초마다 변경

        return () => clearInterval(interval);
    }, [text, isStarted]);

    return (
        <div className="flex text-[7.5dvw] font-kigsans font-ultrabold text-black leading-[1] grow items-center justify-between w-full">
            <img
                className="h-full w-auto"
                src="/images/paren_left.svg"
                alt=""
            />
            <p>{currentText}</p>
            <img
                className="h-full w-auto"
                src="/images/paren_right.svg"
                alt=""
            />
        </div>
    );
}
