# 🔥 원티드 프리온보딩 인턴십 프론트엔드 사전과제

<br>

## ⚠️ 주의사항

> - Create React App을 이용하여 과제를 구현할 것.
> - 함수 컴포넌트를 이용해서 진행할 것.
> - UI는 평가에 영향이 없으나 자연스러운 형태를 구현할 것.
> - README.md 작성 필수 ! (프로젝트의 실행 방법, 데모 영상 or 배포 링크 기제)
> - 기능 구현에 직접적으로 연관된 라이브러리 사용 X
> - 사용 가능 라이브러리
>   - React Router
>   - HTTP Client라이브러리(Axios 등)
>   - 스타일링 관련 라이브러리
>   - UI 관련 라이브러리
>   - 설정관련 라이브러리

<br>

## 📝 구현할 기능 목록

<br>

- **💻 1. 로그인/회원가입 페이지**

  > `/` 경로에 로그인 / 회원가입 기능을 개발.
  >
  > - 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 번트이 포함된 형태로 구성해주세요.
  > - 로그인, 회원가입을 별도의 경로로 분리해도 무방

  - [x] `/` 경로에는 로그인 폼만 생성.(한 페이제 다른 폼 존재 방지를 위해)

    - [x] 이메일, 비밀번호 입력칸 생성
    - [x] 로그인 폼을 통해 회원 정보가 없을 시, `/signup/`로 갈 수 있는 `button`생성

<br>

- [x] `/signup/` 경로에는 회원가입 폼 생성.

  - [x] 이메일과 비밀번호을 입력받음
  - [x] 비밀번호 확인(재입력) 생성 후 Validate 진행
  - [x] Validate 성공 시, 버튼 활성화

<br>
    
  - [x] 유효성 검사기능 구현(Assignment 1)

    - [x] 1. 이메일 조건 : `@`포함
    - [x] 2. 비밀번호 조건 : 8자 이상
    - [x] 3. 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화

<br>

- [x] 로그인 성공 후(Assignment 2)

  - [x] 올바른 응답을 받았을 때(Response Body에 JWT를 포함), `/todo`경로로 이동.
  - [x] 응답받은 JWT는 `로컬스토리지`에 저장.

<br>

- [x] 로그인 여부에 따른 리다이렉트 (Assignment 3)
  - [x] 로컬 스토리지에 토큰⭕ + `/`페이지에 접속한다면 `/todo`로 리다이렉트
  - [x] 로컬 스토리지에 토큰❌ + `/todo`페이지에 접속한다면 `/`로 리다이렉트
