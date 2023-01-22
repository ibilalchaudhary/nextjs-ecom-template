//--main-height: 100vh;
//--main-landscape-width: 56.25vh;
//--main-portrait-width: 100vw;
export default () => (
  <style global jsx>{`
    .productListScreenContainer {
      width: 100%;
      overflow-x: hidden;
      height: 100vh;
      background-color: #f1f3f6;
      position: relative;
    }
    #bodyContainerForList {
      width: 100%;
      height: 89vh;
      margin: 0;
    }
    .productListbodyContainer {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow-x: hidden;
      overflow-y: scroll;
    }
    .gridListTopSpacer {
      height: 0.5vh;
      width: 100%;
    }
    .gridList {
      width: 100%;
      padding: 0;
      margin: 0 !important;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      box-sizing: border-box;
    }
    .listItem {
      background-color: #ffffff;
      height: 35vh;
      width: 47.75vw;
      box-sizing: border-box;
    }
    .listItemEven {
      margin: 0 1.5vw 1.5vw 1.5vw;
    }
    .listItemOdd {
      margin: 0 1.5vw 1.5vw 0;
    }
    @media (min-width: 769px) and (orientation: landscape) {
      .listItem {
        width: 26.625vh;
      }
      .listItemEven {
        margin: 0 0.5vh 1vh 1vh;
      }
      .listItemOdd {
        margin: 0 1vh 1vh 0.5vh;
      }
    }
    @media (max-width: 768px) and (orientation: portrait) {
      .listItem {
        width: 47.75vw;
      }
      .listItemEven {
        margin: 0 1.5vw 1.5vw 1.5vw;
      }
      .listItemOdd {
        margin: 0 1.5vw 1.5vw 0;
      }
    }
    .sortFilterBar {
      overflow: hidden;
      background-color: #ffffff;
      width: 100%;
      height: 4vh;
      display: flex;
      font-size: smaller;
      font-weight: 600;
    }
    .sortFilterBar--hidden {
      top: 0vh;
    }
    .gridList::-webkit-scrollbar,
    .productListbodyContainer::-webkit-scrollbar,
    .productListScreenContainer::-webkit-scrollbar,
    .productListbodyContainer div::-webkit-scrollbar {
      display: none;
    }
    .listImageContainer {
      margin: 0;
      width: 100%;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    .listItem .ItemDetailContainer {
      overflow: hidden;
      width: 100%;
      height: 20%;
      padding: 8;
    }
    .ItemDetailContainer > div {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ItemDetailContainer1 div {
      padding: 0 2%;
      font-size: smaller;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .ItemDetailContainer2 .itemPrice {
      font-weight: 600;
      font-size: smaller;
    }
    .listImageContainer .itemPricePer {
      position: absolute;
      right: 0;
      z-index:4;
      top: 5px;
      color: #FFF;
      background-color:#f44336;
      font-size: small;
      width: 21%;
      height: 10%; display: flex;
      justify-content: center;
      align-items: center;
      border-bottom-left-radius:3vh;
      border-top-left-radius:3vh;
    }
    .ItemDetailContainer2 .itemMRP {
      color: #888;
      font-size: x-small;
      margin-left: 0.5vh;
      margin-right: 0.5vh;
      text-decoration: red line-through;
    }
    .sortFilterBar > div > img {
      width: 1.5vh;
      height: 1.5vh;
      margin-right: 0.5vh;
    }
    .SortBar {
      border-right: 1px solid #eaeaea;
      display: flex;
      width: 50%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .FilterBar {
      border-left: 1px solid #eaeaea;
      display: flex;
      width: 50%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  `}</style>
);
