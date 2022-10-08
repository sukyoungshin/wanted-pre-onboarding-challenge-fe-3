# wanted-pre-onboarding-challenge-fe-3

원티드 프리온보딩 프론트앤드 챌린지(Next.js) 과제로 작성한 코드입니다. [원티드 프리온보딩 챌린지](https://www.wanted.co.kr/events/pre_challenge_fe_3)

## 1️⃣ 사전과제

## 2️⃣ 2022-10-04
React와 History API 사용하여 SPA Router 기능 구현하기 [코드](https://github.com/sukyoungshin/wanted-pre-onboarding-challenge-fe-3), [배포링크](https://wanted-pre-onboarding-challenge-fe-3-three.vercel.app/)

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

## 3️⃣ 2022-10-08

Next.js로 마크다운으로 작성한 블로그를 정적 페이지(SSG)로 작성하기 [코드](https://github.com/sukyoungshin/blog)

<details>
 <summary>과제 설명</summary>
 <br/>
 
 **:: 폴더 구조 및 라우팅**

- 사용자는 루트 경로의 `__posts` 폴더에 작성된 마크다운 파일(`.md`)를 작성할 수 있어야 합니다. 해당 파일은 마크다운 본문과 게시물에 대한 meta data를 담을 수 있어야 합니다. 아래는 마크다운에 jekyll에서 만든 `frontmatter`라는 문법([링크](https://jekyllrb.com/docs/front-matter/))을 적용한 예시입니다.
    
    ```markdown
    ---
    categories:
      - Development
      - VIM
    date: "2012-04-06"
    description: 설명을 적는 곳입니다
    slug: spf13-vim-3-0-release-and-new-website
    tags:
      - .vimrc
      - plugins
      - spf13-vim
      - vim
    title: hello
    ---
    
    ## 예시입니다
    - 예시입니다
    ```
    
- 블로그에 작성된 게시물을 렌더링하는 `목록 페이지`와 개별 게시물을 렌더링하는 `상세 페이지`로 나누어 작성해주세요.
    - `/` - 목록 페이지
    - `/[id]` - 상세 페이지
    - 마크다운을 JavaScript로 변환해주는 도구는 `remark`(마크다운 Parser), `remark-html`(remark로 파싱한 데이터를 html로 변환) 을 참고
    - 각 마크다운의 meta data는 `gray-matter`, `frontmatter` 참고
    - 마크다운을 React에 삽입할 때는 `dangerouslySetInnerHTML` 을 사용 ([참고 링크](https://ko.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml))
    - (추가 구현) 코드 하이라이터는 `highlight.js`, `prism.js` 를 참고

**:: Next.js에서 지원하는 Prefetching 메서드를 적절히 사용해주세요.**

- 정적 페이지를 생성할 때 필요한 데이터 생성 → `getStaticProps`
- 각 포스트를 그려줄 상세 페이지 경로를 생성  → `getStaticPaths`

**:: 참고 사항**

- 가급적 TypeScript로 진행하시는 걸 추천드립니다.
- 과제의 목적이 디자인에 있지는 않기 때문에 UI 관련 라이브러리는 자유롭게 사용하셔도 좋습니다. 단, 라이브러리의 종류와 Next.js 간 호환이 잘 맞지 않아 에러가 발생하는 경우가 있을 수 있으니 유의하여 사용해주세요.
- CSS-in-JS 라이브러리 사용 시 `_document.js`에 각 라이브러리(`styled-components`, `emotion`, …)에 알맞은 세팅을 추가해주세요.
- [Vercel](https://vercel.com/)이나 [Netlify](https://www.netlify.com/)를 활용하면 정적 페이지를 간단하게 배포할 수 있습니다.
- 과제 완료 후 과제 제출 페이지에 해당 프로젝트의 github 링크로 제출해주세요. 프로젝트에 대한 간단한 소개가 README에 작성되어 있으면 좋습니다.
- 이 외에 추가 구현하고 싶은 기능이 있으면 자유롭게 구현해주세요.

</details>
