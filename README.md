# 1. 프로젝트 소개
사이트 방문자가 방명록을 남길 수 있도록 하기 위한 방명록 페이지를 제작

# 2. 사용 기술
* React
* Next.js
* Redux Toolkit
* CSS
* HTML

# 3. 트러블 슈팅
<details>
<summary>styled-components가 제대로 적용되지 않는 문제 발견</summary>
<div>

  Next.js는 Server Side Rendering으로 페이지를 그려준다.
  이는 서버에서 HTML을 먼저 보내주고 javascript를 적용한다.
  그렇기 때문에 styled-components같은 CSS-in-JS을 사용하면 HTML로딩이 끝난 후 JS가 적용된다.
  이 과정에서 바로 CSS가 적용되지 않는 상황이 발생했다.
  
  Next.js에서 HTML을 커스텀할 때 _document.js 파일을 사용한다.
  _document.js에서 CSS를 불러와 주입해주면 문제를 해결할 수 있다.
  
  renderPage 함수를 사용해 _document.js에서 CSS-in-JS를 불러올 수 있다.

</div>
</details>

<details>
<summary>방명록 패스워드 한글 입력 시 영어로 입력되지 않고 첫 문자가 한글로 저장되는 문제 발견</summary>
<div>
</div>
</details>
