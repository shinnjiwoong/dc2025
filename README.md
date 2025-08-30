# iFrame 웹사이트 뷰어

4개의 외부 웹사이트를 iFrame으로 안전하게 볼 수 있는 Next.js 웹 애플리케이션입니다.

## 기능

- 4개의 외부 웹사이트를 버튼으로 선택
- 선택한 웹사이트를 iFrame으로 안전하게 표시
- 반응형 디자인으로 다양한 화면 크기 지원
- Tailwind CSS를 사용한 모던한 UI

## 포함된 웹사이트

1. Google (https://www.google.com)
2. GitHub (https://github.com)
3. Stack Overflow (https://stackoverflow.com)
4. MDN Web Docs (https://developer.mozilla.org)

## 설치 및 실행

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 브라우저에서 http://localhost:3000 접속

## 기술 스택

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## 보안

iFrame에는 sandbox 속성이 적용되어 안전한 외부 웹사이트 탐색이 가능합니다.
