# guest-book
[Next.js, React, Redux Toolkit]방명록 프로젝트

## 2022-11-21 ~ 2022-11-22
addGuestBook 비동기 액션 생성

더미 데이터 생성 함수를 사용해 폼에서 전송한 데이터를 받아 방명록을 추가

폼에서 데이터 전송 후 useEffect를 사용해 입력값 전부 초기화

### 입력값 폼
![스크린샷 2022-11-22 오후 1 52 43](https://user-images.githubusercontent.com/73627446/203224829-63b8acb7-bee1-47d0-a6e5-301f47daa8be.png)

### 폼 작성
![스크린샷 2022-11-22 오전 10 14 52](https://user-images.githubusercontent.com/73627446/203190556-2bbfb296-ab05-471e-a52a-370ba16fda31.png)

### 폼 전송 후 방명록 등록
![스크린샷 2022-11-22 오전 10 15 05](https://user-images.githubusercontent.com/73627446/203190604-ef54cd90-596e-450f-b73b-b74390ad49c9.png)

## 2022-11-24
방명록 삭제 기능 추가

방명록 등록 시 상단으로 추가되게 코드 수정

방명록 폼 패스워드 입력값 문제 발견(패스워드를 한글로 입력 시 첫 문자는 한글로 그 뒤부터 영어로 입력됨)
