# guest-book
[Next.js, React, Redux Toolkit]방명록 프로젝트

# 2022-11-21 ~ 2022-11-22
addGuestBook 비동기 액션 생성

더미 데이터 생성 함수를 사용해 폼에서 전송한 데이터를 받아 방명록을 추가

폼에서 데이터 전송 후 useEffect를 사용해 입력값 전부 초기화

# 2022-11-24
방명록 삭제 기능 추가

방명록 등록 시 상단으로 추가되게 코드 수정

방명록 폼 패스워드 입력값 문제 발견(패스워드를 한글로 입력 시 첫 문자는 한글로 그 뒤부터 영어로 입력됨)

# 트러블 슈팅
<details>
<summary>패스워드 입력값 문제</summary>
<div markdown="1">

- Webpack-dev-server 버전을 3.0.0으로 다운그레이드로 해결
- `$ npm install —save-dev webpack-dev-server@3.0.0`

</div>
</details>
