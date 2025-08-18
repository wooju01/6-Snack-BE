# 고급 프로젝트 - 스낵(Snack)
<img width="1107" height="380" alt="스크린샷 2025-08-18 130003" src="https://github.com/user-attachments/assets/1b33e7da-435f-47bd-bb99-1a0faf7e91b3" />

## 📑 프로젝트 소개

- Snack은 여러 플랫폼에서 구매한 간식 내역을 한곳에 모아 관리할 수 있는 원스톱 간식 관리 서비스입니다.

### :link: 팀 문서 
- :green_book: [Notion 링크 바로가기](https://www.notion.so/3-Snack-2156e9d243fd81cd90e7e05503fe930b)  

### 프론트엔드 Git 저장소  
- :wrench: [GitHub Repository 보러가기](https://github.com/De-cal/6-Snack-FE)

### API 명세서
- :receipt: [Swagger API 보러가기](https://api.5nack.site/api-docs)

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

## ✨ 주요 기능

<details>
  <summary>1. 인증 및 사용자 관리</summary>

  - 회원가입, 로그인, 로그아웃, 토큰 갱신
  - JWT 기반 인증, 쿠키 사용, 비밀번호 암호화, 권한(ADMIN, USER, SUPER_ADMIN) 관리
  - 유저 정보 조회/수정/삭제
  - 프로필 조회, 비밀번호 변경, 소프트 삭제(탈퇴), 권한 변경, 회사별 유저 목록 조회
  
</details>

<details>
  <summary>2. 회사(Company) 관리</summary>

  - 회사 정보 관리
  - 회사 정보(이름 등) 수정, 회사별 유저 관리, 최고관리자 권한에서만 접근 가능
  
</details>

<details>
  <summary>3. 예산(Budget) 관리</summary>

  - 월별 예산 및 지출 현황 조회/수정
  - 회사별 월 예산, 이번달/저번달/올해/작년 지출액 등 통계 제공
  - 최고관리자/관리자 권한에 따라 예산 수정 가능
  - 매월 자동 예산 생성(크론 작업)
  
</details>

<details>
  <summary>4. 상품(Product) 관리</summary>

  - 상품 등록/수정/삭제/조회
  - 상품 카테고리(대분류/소분류) 관리, 이미지 업로드, 인기순/최신순/가격순 정렬
  - 상품 상세 조회, 내 상품 목록, 전체 상품 목록, 소프트 삭제 및 강제 삭제(관리자)
  - 찜하기(즐겨찾기)
  - 상품 찜/찜 해제, 내 찜 목록 조회
  
</details>

<details>
  <summary>5. 장바구니(Cart) 기능</summary>

  - 장바구니 담기/삭제/조회
  - 여러 상품을 장바구니에 담고, 주문 전까지 관리
  
</details>

<details>
  <summary>6. 주문(Order) 및 결제(Payment)</summary>

  - 주문 요청/승인/반려/조회
  - 장바구니 상품 주문, 관리자/최고관리자 승인/반려, 주문 내역 및 상세 조회
  - 결제 처리 및 취소
  - 외부 결제 API 연동(예: Toss Payments), 결제 승인/취소, 결제 내역 관리
  
</details>

<details>
  <summary>7. 초대(Invite) 및 권한 관리</summary>

  - 유저 초대 및 권한 부여
  - 이메일 초대, 만료/사용 여부 관리, 초대 수락 시 권한 자동 부여
  
</details>

<details>
  <summary>8. 기타</summary>

  - Swagger API 문서 제공
  - `/api-docs`에서 전체 API 문서 확인 가능
  - Redis 캐시 및 무효화
  - 상품/예산 등 주요 데이터 캐싱, 변경 시 캐시 무효화
  - 테스트 및 시드 데이터
  - Jest 기반 테스트, Prisma 시드 스크립트로 더미 데이터 생성
  
</details>


## 💣 트러블 슈팅(Backend)

<img width="1106" height="589" alt="image" src="https://github.com/user-attachments/assets/5f50ef9d-1a3d-40ad-9236-d74e04c8c873" />

### **주문 상품 데이터 무결성 문제 해결**

<details>
  <summary>1. 문제점 (Problem)</summary>

  초기 시스템은 **`cartItem`** (장바구니)과 **`orderedItem`** (주문 상품) 테이블로 구성되어 있었습니다. 이 구조는 `orderedItem`이 상품 정보(예: 상품 가격, 이름)를 직접 저장하지 않고, `cartItem` 또는 상품 테이블에 의존하는 방식이었습니다.

  문제는 **결제 후 상품 정보가 변경될 경우**였습니다.
  예를 들어, 상품의 가격이 인상되면 이미 결제가 완료된 `orderedItem`의 가격 정보도 함께 변경되어, 실제 결제 금액과 영수증에 기록되어야 할 금액이 일치하지 않는 데이터 무결성 오류가 발생했습니다. 이는 영수증의 신뢰성을 떨어뜨리는 심각한 논리적 오류였습니다.
  
</details>

<details>
  <summary>2. 해결 과정 (Solution)</summary>

  이러한 데이터 무결성 문제를 해결하기 위해 **`orderedItem` 테이블을 제거하고 `receipt` (영수증) 테이블을 새로 도입**했습니다.
  
  새로운 **`receipt`** 테이블은 결제 시점의 모든 상품 정보를 **`JSON` 또는 문자열 데이터 타입**으로 직접 저장하는 방식으로 설계했습니다.
  
  * **`orderedItem` 테이블 삭제**: 영수증과 주문 상품 정보의 논리적 오류를 유발했던 기존 테이블을 제거하여 문제를 원천적으로 차단했습니다.
  * **`receipt` 테이블 생성**: 결제 시점의 '스냅샷'을 보존하기 위한 테이블을 새로 만들었습니다.
  * **상품 정보 직접 저장**: `receipt` 테이블에 상품의 이름, 가격, 수량 등 결제 당시의 모든 정보를 **데이터 형식 그대로 저장**하여, 원본 상품 정보가 변경되더라도 영수증 데이터에는 영향을 주지 않도록 했습니다.
  
</details>

<details>
  <summary>3. 결과 및 배운 점 (Result & Learnings)</summary>

  **결과**: 새로운 `receipt` 테이블 도입을 통해 **데이터의 무결성(Integrity)** 문제를 성공적으로 해결했습니다. 이제 영수증은 결제 시점의 정확한 정보를 안전하게 보존하며, 원본 상품 데이터의 변경으로부터 독립적인 구조를 갖게 되었습니다.
  
  **배운 점**:
  * 영수증과 같이 **시간에 따라 변하지 않아야 하는 데이터**는 외부 테이블에 의존하기보다, 해당 시점의 정보를 **직접 저장**하는 것이 중요합니다.
  * 데이터베이스 스키마 설계 시, 비즈니스 로직의 **'스냅샷'**을 보존해야 하는 요구사항을 미리 파악하는 것이 데이터 무결성 오류를 예방하는 데 필수적입니다.
  * 이번 경험을 통해 **결제 시스템의 핵심**은 영수증 데이터의 불변성을 보장하는 데 있다는 것을 깨달았고, 향후 이와 유사한 설계를 진행할 때 이 원칙을 적용할 것입니다.
  
</details>

