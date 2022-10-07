# wanted-pre-onboarding-challenge-fe-3

원티드 프리온보딩 프론트앤드 챌린지(Next.js) 과제로 작성한 코드입니다. [원티드 프리온보딩 챌린지](https://www.wanted.co.kr/events/pre_challenge_fe_3)

## 1️⃣ 사전과제

## 2️⃣ 2022-10-04
React와 History API 사용하여 SPA Router 기능 구현하기

 <details>
  <summary>과제 설명</summary>
  <br/>

  **1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

  - `/` → `root` 페이지
  - `/about` → `about` 페이지

  **2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

  - 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

  **3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

  ```
  ReactDOM.createRoot(container).render(
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
  ```

  **4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

  ```
  const { push } = useRouter();
  ```

 </details>


 <details>
  <summary>구현 시 어려웠던 점</summary>
  <br/>

  1) 브라우저 pathname 변경 후, match되는 페이지로 이동하도록 구현하는 과정을 생각하는 과정이 쉽지 않았습니다.
  2) context API와 History API를 처음 사용하다보니 용법이 익숙하지 않아서 헤맸습니다.
  3) TypeScript에서 타입 지정하는 것이 어려웠습니다. 

 </details>

