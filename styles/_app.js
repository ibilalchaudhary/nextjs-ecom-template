export default () => (
  <style global jsx>{`
    :root {
      --main-height: 100vh;
      --main-landscape-width: 56.25vh;
      --main-portrait-width: 100vw;
    }
    body {
      margin: 0;
      height: var(--main-height);
      display: flex;
      justify-content: center;
     
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-user-select: none;
      -webkit-tounch-callout: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: #ddd;
    }
  body > #__next {
      background-color: #fff;
      width:var(--main-portrait-width)
      height: var(--main-height);
      
    }
    .bodyContainer::-webkit-scrollbar
   {
      display: none;
    }
    .tabedPageBodyContainer {
      width: 100%;
      height: 85.5vh;
    }
    .pageContainer {
      background-color: #f1f3f6;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      position: relative;
    }
    @media (min-width: 769px) and (orientation: landscape) {
      body > #__next  {
        width:var(--main-landscape-width);
      }
    }
    @media (max-width: 768px) and (orientation: portrait) {
      body > #__next  {
        width:var(--main-portrait-width);
      }
    }
    @keyframes zoomIn {
      0% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      50% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      /* from {
          transform: scale3d(0.4, 0.4, 0.4);
        }
        to {
          transform: scale3d(1, 1, 1);
        } */
    }
    .itemImage {
      max-width: 100%;
      max-height: 100%;
      background-color: #ffffff;
    }
    .reactimagemagnify {
  width: 40%;
}
`}</style>
)
