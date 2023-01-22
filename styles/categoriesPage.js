export default () => (
  <style global jsx>{`
    .header {
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    }
    .bodyContainer {
      overflow: hidden;
      overflow-y: scroll;
      position: relative;
      display: flex;
      flex-direction: row;
      -ms-overflow-style: none;
    }
    .bodyContainer::-webkit-scrollbar,
    .colLeft::-webkit-scrollbar,
    .colRight::-webkit-scrollbar {
      display: none;
    }
    .colLeft {
      height: 100%;
      width: 25%;
      color: #111;
      background-color: #f1f3f6;
      overflow-x: hidden;
      overflow-y: scroll;
      box-shadow: inset -1px 0 4px rgba(0, 0, 0, 0.15);
    }
    .colRight {
      height: 100%;
      width: 75%;
      background-color: #fff;
      overflow-x: hidden;
      overflow-y: scroll;
    }
    .catNameSelected {
      display: table;
      color: #fcb116;
      width: 100%;
      background-color: #fff;
      border-right: 1px solid #fff;
      display: table;
      margin: 0;
      border-bottom: 1px solid #d6d6d6;
      -webkit-box-shadow: inset 9px 9px 14px -13px #000000;
      -moz-box-shadow: inset 9px 9px 14px -12px #000000;
      box-shadow: inset 9px 9px 14px -12px #000000;
    }
    .catName {
      width: 100%;
      border-bottom: 0.5px solid #d6d6d6;
      border-right: 1px solid #d6d6d6;
      display: table;
      margin: 0;
    }
    .catNameInner {
      font-size: small;
      padding: 1.5vh 10%;
      text-align: start;
      display: table-cell;
      vertical-align: middle;
    }
    .catSelectedItem {
      height: 100%;
      margin: 0;
      padding: 0 1%;
    }
    .catItem {
      display: none;
    }
    .categorychild {
      width: 100%;
    }
    .categorychild1 {
      font-weight: 630;
      font-size: small;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1.5vh 0%;
      border-bottom: 0.5px solid #d6d6d6;
    }

    .categorychild2 {
      font-size: small;
      list-style: none;
      padding-inline-start: 0px;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      -ms-box-orient: horizontal;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -moz-flex;
      display: -webkit-flex;
      display: flex;
    }
    .categorychild2 .ItemVisible {
      width: 32%;
      margin: 1% 0.5%;
      height: 14vh;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
    .categoryItemImage {
      width: 8vh;
      height: 8vh;
      border-radius: 4vh;
    }

    /*.categorychild2 {
        font-size: small;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: start;
        align-items: center;
        padding: 1.5vh 0%;
        display: flex;
        flex-wrap: wrap;
      }
      .categorychild2 .ItemVisible {
        width: 32%;
        margin: 1% 0.5%;
        height: 14vh;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
      }
      .categoryItemImage {
        width: 8vh;
        height: 8vh;
        border-radius: 4vh;
      }*/
  `}</style>
);
