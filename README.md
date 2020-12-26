# React：用 SPA 架構實作一個部落格

這是使用 React 實作的一個簡易部落格系統。

[Blog DEMO](https://heidiliu2020.github.io/react-blog-test/#/)

## 核心功能

- 簡易會員系統：部落格串接的 [API Server](https://github.com/Lidemy/lidemy-student-json-api-server) 僅供測試用，密碼是以明文儲存，因此統一在後端把所有 user 的密碼改成 `Lidemy`
- 文章列表：顯示分頁功能、單篇文章頁面
- 管理文章功能：可輸入標題和內文發布文章，user 有權限修改本人的文章
- 回到頂部功能：點擊回到頂部按鈕、或是 URL 改變時均會回到網頁頂部

![](https://i.imgur.com/2qkNfak.png)

## 使用套件

- 使用 styled-components 以 JSX 語法撰寫 CSS 樣式
- 使用 react-router-dom 提供的 HashRouter 建立路由，以及使用 Link, NavLink component 撰寫 Navbar 連結
- 使用 react-spinners 套上 Loading 的效果
- 使用 styled-reset 進行 CSS Reset
- 使用 PropTypes 進行型別檢查
- 使用 Prettier 套件統一程式碼格是
- 使用 ESLint 套件檢查語法，統一 coding style

![](https://i.imgur.com/Wj5HqFa.png)

## 學習筆記

- [[week 22] React：用 SPA 架構實作一個部落格（一）- Router](https://heidiliu2020.github.io/2020/12/16/fe302-react-router/)
- [[week 22] React：用 SPA 架構實作一個部落格（二）- 身分驗證](https://heidiliu2020.github.io/2020/12/17/fe302-react-usecontext-usehistory/)
- [[week 22] React：用 SPA 架構實作一個部落格（三）- 淺談測試](https://heidiliu2020.github.io/2020/12/17/fe302-react-test/)
- [[week 22] React：用 SPA 架構實作一個部落格（四）- 優化篇](https://heidiliu2020.github.io/2020/12/18/fe302-react-optimization/)
