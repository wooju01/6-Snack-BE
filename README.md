# 고급 프로젝트 - 스낵(Snack)
<img width="1107" height="380" alt="스크린샷 2025-08-18 130003" src="https://github.com/user-attachments/assets/1b33e7da-435f-47bd-bb99-1a0faf7e91b3" />

## 📑 프로젝트 소개

- Snack은 여러 플랫폼에서 구매한 간식 내역을 한곳에 모아 관리할 수 있는 원스톱 간식 관리 서비스입니다.

<br></br>
### :link: 팀 문서 
- :green_book: [Notion 링크 바로가기](https://www.notion.so/3-Snack-2156e9d243fd81cd90e7e05503fe930b)  

### 백엔드 Git 저장소  
- :wrench: [GitHub Repository 보러가기](https://github.com/De-cal/6-Snack-BE)

### API 명세서
- :receipt: [Swagger API 보러가기](https://api.5nack.site/api-docs)

## 📋 API 명세서

[<img width="381" height="352" alt="image" src="https://github.com/user-attachments/assets/5122a8ee-a292-4392-b8a6-be5aeb2f3f3b" />](https://api.5nack.site/api-docs)

- [https://api.5nack.site/api-docs](https://api.5nack.site/api-docs)

## 🏗️ 프로젝트 구조

<details>
  <summary>프로젝트 구조 열기</summary>
  
```
src/
├── controllers/          # 요청 처리 및 응답 반환
├── services/            # 비즈니스 로직 처리
├── repositories/        # 데이터 접근 계층 (Prisma)
├── routes/              # API 라우팅 정의
├── middlewares/         # 미들웨어 (인증, 에러 처리 등)
├── dtos/                # 데이터 전송 객체
├── types/               # TypeScript 타입 정의
├── config/              # 설정 파일 (Swagger 등)
├── utils/               # 유틸리티 함수 (S3, 날짜 처리 등)
├── cron/                # 정기 작업 스케줄러 (월별 예산 자동 생성)
├── lib/                 # 외부 라이브러리 설정 (Prisma 등)
├── test/                # 단위 테스트
└── integration-test/    # 통합 테스트
```
  
</details>

## 📱 기능 구현 영상
- GIF 움짤을 추가하세요
- 유튜브 공유 링크를 추가하세요

## 👨‍👩‍👧‍👦 Team Members
<table align="center">
  <tbody>
    <tr>
      <th>Team Leader</th>
      <th>Deputy Team Leader</th>
      <th>Team Member</th>
      <th>Team Member</th>
      <th>Team Member</th>
      <th>Team Member</th>
    </tr>
    <tr>
      <td align="center">
        <a href="https://github.com/De-cal">
          <img src="https://avatars.githubusercontent.com/u/194280696?v=4" width="100px" alt="이태빈 GitHub"/>
          <br />
          <sub><b>이태빈</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/Jam1eL1">
          <img src="https://avatars.githubusercontent.com/u/53666518?v=4" width="100px" alt="이지수 GitHub"/>
          <br />
          <sub><b>이지수</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/wooju01">
          <img src="https://github.com/wooju01.png?size=100" width="100px" alt="김우주 GitHub"/>
          <br />
          <sub><b>김우주</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/rakaso598">
          <img src="https://avatars.githubusercontent.com/u/112613372?v=4" width="100px" alt="김홍 GitHub"/>
          <br />
          <sub><b>김홍섭</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/xdnjs7">
          <img src="https://github.com/xdnjs7.png?size=100" width="100px" alt="장원빈 GitHub"/>
          <br />
          <sub><b>장원빈</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/JJOBO">
          <img src="https://avatars.githubusercontent.com/u/194863819?v=4" width="100px" alt="조성빈 GitHub"/>
          <br />
          <sub><b>조성빈</b></sub>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 🚧 시스템 아키텍쳐

<img width="556" height="620" alt="image" src="https://github.com/user-attachments/assets/fc8a6d51-ea1c-48b5-9485-9b10d3a4584f" />

## ⚙️ 기술 스택

<details>
  <summary>BE 기술 스택 한눈에 보기</summary>
  
<img width="1076" height="565" alt="image" src="https://github.com/user-attachments/assets/d2a8c502-9d99-4c6f-a6e5-8bef6e336e11" />
  
</details>

#### **Backend Framework & Language**
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/ko/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5A67D8?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-404D59?style=for-the-badge&logo=nodemailer&logoColor=white)](https://nodemailer.com/)
[![Multer](https://img.shields.io/badge/Multer-white?style=for-the-badge)](https://github.com/expressjs/multer)
[![Multer-S3](https://img.shields.io/badge/Multer--S3-orange?style=for-the-badge)](https://www.npmjs.com/package/multer-s3)

#### **Database & Caching**
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![Date-fns](https://img.shields.io/badge/date--fns-gray?style=for-the-badge)](https://date-fns.org/)
[![Date-fns-tz](https://img.shields.io/badge/date--fns--tz-gray?style=for-the-badge)](https://www.npmjs.com/package/date-fns-tz)

#### **Authentication & Security**
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)
[![Bcrypt](https://img.shields.io/badge/Bcrypt-white?style=for-the-badge)](https://www.npmjs.com/package/bcrypt)
[![Helmet](https://img.shields.io/badge/Helmet-white?style=for-the-badge)](https://www.npmjs.com/package/helmet)
[![CORS](https://img.shields.io/badge/CORS-white?style=for-the-badge)](https://www.npmjs.com/package/cors)
[![Cookie Parser](https://img.shields.io/badge/Cookie--Parser-white?style=for-the-badge)](https://www.npmjs.com/package/cookie-parser)

#### **API Documentation**
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-6BA542?style=for-the-badge&logo=openapi-initiative&logoColor=white)](https://openapis.org/)

#### **Testing & Quality**
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![Supertest](https://img.shields.io/badge/Supertest-blue?style=for-the-badge)](https://www.npmjs.com/package/supertest)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)
[![ts-jest](https://img.shields.io/badge/ts--jest-white?style=for-the-badge)](https://kulshekhar.github.io/ts-jest/)
[![ts-node](https://img.shields.io/badge/ts--node-white?style=for-the-badge)](https://www.npmjs.com/package/ts-node)
[![ts-node-dev](https://img.shields.io/badge/ts--node--dev-white?style=for-the-badge)](https://www.npmjs.com/package/ts-node-dev)
[![Nodemon](https://img.shields.io/badge/Nodemon-76D398?style=for-the-badge&logo=nodemon&logoColor=white)](https://nodemon.io/)

#### **Deployment & Monitoring**
[![AWS S3](https://img.shields.io/badge/AWS%20S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white)](https://aws.amazon.com/s3/)
[![Sentry](https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=sentry&logoColor=white)](https://sentry.io/)
[![Node-cron](https://img.shields.io/badge/Node--cron-white?style=for-the-badge)](https://www.npmjs.com/package/node-cron)
[![Morgan](https://img.shields.io/badge/Morgan-yellowgreen?style=for-the-badge)](https://www.npmjs.com/package/morgan)
[![Axios](https://img.shields.io/badge/Axios-black?style=for-the-badge)](https://axios-http.com/)
[![Dotenv-cli](https://img.shields.io/badge/Dotenv--cli-white?style=for-the-badge)](https://www.npmjs.com/package/dotenv-cli)

## 🕹️ 프로젝트 기능

- 사용자 인증 및 권한 관리 (JWT 기반)
- 기업별 예산 관리 및 지출 추적
- 상품 카테고리 관리 및 검색
- 장바구니 및 주문 시스템
- 즐겨찾기 및 추천 시스템
- 결제 연동 및 주문 처리
- 이메일 서비스 (주문 확인, 초대장, 비밀번호 재설정)
- 관리자 대시보드 및 통계

## 💣 트러블 슈팅
- 트러블 슈팅 작성
