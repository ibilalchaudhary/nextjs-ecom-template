export default () => (
  <style global jsx>{`
    .filterScreenContainer {
      width: 100%;
      height: 100vh;
      position: relative;
      background-color: #f8f9fd;
    }
    .filterBodyContainer {
      overflow: hidden;
      position: relative;
      /* background-color: aqua; */
      height: 86vh;
      width: 100%;
    }
    .filterHeaderContainer {
      font-weight: 600;
      font-size: 14px;
      letter-spacing: -0.22px;
      line-height: 24px;
      position: relative;
      width: 100%;
      height: 7vh;
      color: #353535;
      display: flex;
      align-items: center;
      background-color: #ffffff;
    }
    .filterClearBtn {
      text-transform: uppercase;
      font-weight: normal;
      margin: 0 2.5vh;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .filterCancelBtn {
      height: 7vh;
      width: 7vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .filterSliderContainer {
      margin-bottom: 2vh;
      background-color: #fff;
      padding: 0 5%;
      height: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      -webkit-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.1);
    }
    .slider {
      height: 60% !important;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .filterSliderLabels {
      height: 35% !important;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      font-size: medium;
      font-weight: 600;
    }
    .filterOtherContainer {
      width: 100%;
      height: 74vh;
      overflow-y: scroll;
     
    }
    .otherItem {
      height: 8vh;
      width: 100%;
      background-color: #fff;
      background-color: white;
      border-bottom: 1px solid #dedede;
    }

    .filterFooterContainer {
      overflow: hidden;
      /* position: relative; */
      /* background-color: blueviolet; */
      height: 7vh;
      width: 96%;
      padding: 0 2%;
      margin: 0;
      z-index: 20;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
      position: sticky;
      position: -webkit-sticky;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .gridList {
      width: 100%;
      padding: 0;
      height: 100%;
      margin: 0 !important;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
    .gridListContainer {
      padding: 0 2% !important;
    }
    .circle {
      height: 1.5vh;
      width: 1.5vh;
      border-radius: 0.75vh;
      background-color: #111;
      margin-right: 5px;
    }
    .circleW {
      height: 1.5vh;
      width: 1.5vh;
      border-radius: 0.75vh;
      background-color: #fff;
      margin-right: 5px;
    }
    .dummy {
      display: none;
    }

    .filterFooterButtonContainer {
      height: 6.5vh;
      width: 75%;
      background-color: #111;
      border-radius: 0.5vh;
      color: #fff;
      font-size: large;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-weight: 600;
    }
    .filterOtherContainer::-webkit-scrollbar {
      display: none;
    }
    .otherItemChilds {
      background-color: #fff;
    }
    .expansionPanelItems {
      width: 50%;
      margin: 1vh 0;
      display: flex;
      align-items: center;
    }
    .expansionPanelItemsS {
      width: 50%;
      margin: 1vh 0;
      display: flex;
      font-weight: 600;
      align-items: center;
    }
    /* ////////////////////////////////////////////////////////////////////////////////////////// */
    .rc-slider {
      position: relative;
      height: 14px;
      padding: 5px 0;
      width: 100%;
      border-radius: 6px;
      -ms-touch-action: none;
      touch-action: none;
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .rc-slider * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .rc-slider-rail {
      position: absolute;
      width: 100%;
      background-color: #e9e9e9;
      height: 2;
      border-radius: 6px;
    }
    .rc-slider-track {
      position: absolute;
      left: 0;
      height: 2;
      border-radius: 6px;
      background-color: #111111;
    }
    .rc-slider-handle {
      cursor: none;
      margin-top: 0;
      width: 3.5vh;
      height: 3.5vh;
      border-color: #fff;
      position: absolute;
      cursor: pointer;
      cursor: -webkit-grab;
      cursor: grab;
      border-radius: 50%;
      border: solid 2px #fff;
      -webkit-box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.4) !important;
      -moz-box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.4) !important;
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.4) !important;
      background-color: #fff;
      -ms-touch-action: pan-x;
      touch-action: pan-x;
    }
    .rc-slider-handle:focus {
      border-color: #000000;
      box-shadow: 0 0 0 5px #111;
      outline: none;
    }
    .rc-slider-handle-click-focused:focus {
      border-color: #111;
      box-shadow: unset;
    }
    .rc-slider-handle:hover {
      border-color: #111;
    }
    .rc-slider-handle:active {
      border-color: #111;
      box-shadow: 0 0 5px #111;
      cursor: -webkit-grabbing;
      cursor: grabbing;
    }
    .rc-slider-mark {
      position: absolute;
      top: 18px;
      left: 0;
      width: 100%;
      font-size: 12px;
    }
    .rc-slider-mark-text {
      position: absolute;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      cursor: pointer;
      color: #999;
    }
    .rc-slider-mark-text-active {
      color: #666;
    }
    .rc-slider-step {
      position: absolute;
      width: 100%;
      height: 4px;
      background: transparent;
    }
    .rc-slider-dot {
      position: absolute;
      bottom: -2px;
      margin-left: -4px;
      width: 8px;
      height: 8px;
      border: 2px solid #e9e9e9;
      background-color: #fff;
      cursor: pointer;
      border-radius: 50%;
      vertical-align: middle;
    }
    .rc-slider-dot-active {
      border-color: #111;
    }
    .rc-slider-dot-reverse {
      margin-left: 0;
      margin-right: -4px;
    }
    .rc-slider-disabled {
      background-color: #e9e9e9;
    }
    .rc-slider-disabled .rc-slider-track {
      background-color: #ccc;
    }
    .rc-slider-disabled .rc-slider-handle,
    .rc-slider-disabled .rc-slider-dot {
      border-color: #ccc;
      box-shadow: none;
      background-color: #fff;
      cursor: not-allowed;
    }
    .rc-slider-disabled .rc-slider-mark-text,
    .rc-slider-disabled .rc-slider-dot {
      cursor: not-allowed !important;
    }
    .rc-slider-vertical {
      width: 14px;
      height: 100%;
      padding: 0 5px;
    }
    .rc-slider-vertical .rc-slider-rail {
      height: 100%;
      width: 4px;
    }
    .rc-slider-vertical .rc-slider-track {
      left: 5px;
      bottom: 0;
      width: 4px;
    }
    .rc-slider-vertical .rc-slider-handle {
      margin-left: -5px;
      -ms-touch-action: pan-y;
      touch-action: pan-y;
    }
    .rc-slider-vertical .rc-slider-mark {
      top: 0;
      left: 18px;
      height: 100%;
    }
    .rc-slider-vertical .rc-slider-step {
      height: 100%;
      width: 4px;
    }
    .rc-slider-vertical .rc-slider-dot {
      left: 2px;
      margin-bottom: -4px;
    }
    .rc-slider-vertical .rc-slider-dot:first-child {
      margin-bottom: -4px;
    }
    .rc-slider-vertical .rc-slider-dot:last-child {
      margin-bottom: -4px;
    }
    .rc-slider-tooltip-zoom-down-enter,
    .rc-slider-tooltip-zoom-down-appear {
      animation-duration: 0.3s;
      animation-fill-mode: both;
      display: block !important;
      animation-play-state: paused;
    }
    .rc-slider-tooltip-zoom-down-leave {
      animation-duration: 0.3s;
      animation-fill-mode: both;
      display: block !important;
      animation-play-state: paused;
    }
    .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
    .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
      animation-name: rcSliderTooltipZoomDownIn;
      animation-play-state: running;
    }
    .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
      animation-name: rcSliderTooltipZoomDownOut;
      animation-play-state: running;
    }
    .rc-slider-tooltip-zoom-down-enter,
    .rc-slider-tooltip-zoom-down-appear {
      transform: scale(0, 0);
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }
    .rc-slider-tooltip-zoom-down-leave {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    @keyframes rcSliderTooltipZoomDownIn {
      0% {
        opacity: 0;
        transform-origin: 50% 100%;
        transform: scale(0, 0);
      }
      100% {
        transform-origin: 50% 100%;
        transform: scale(1, 1);
      }
    }
    @keyframes rcSliderTooltipZoomDownOut {
      0% {
        transform-origin: 50% 100%;
        transform: scale(1, 1);
      }
      100% {
        opacity: 0;
        transform-origin: 50% 100%;
        transform: scale(0, 0);
      }
    }
    .rc-slider-tooltip {
      position: absolute;
      left: -9999px;
      top: -9999px;
      visibility: visible;
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .rc-slider-tooltip * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .rc-slider-tooltip-hidden {
      display: none;
    }
    .rc-slider-tooltip-placement-top {
      padding: 4px 0 8px 0;
    }
    .rc-slider-tooltip-inner {
      padding: 6px 2px;
      min-width: 24px;
      height: 24px;
      font-size: 12px;
      line-height: 1;
      color: #fff;
      text-align: center;
      text-decoration: none;
      background-color: #6c6c6c;
      border-radius: 6px;
      box-shadow: 0 0 4px #d9d9d9;
    }
    .rc-slider-tooltip-arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
    }
    .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
      bottom: 4px;
      left: 50%;
      margin-left: -4px;
      border-width: 4px 4px 0;
      border-top-color: #6c6c6c;
    }
  `}</style>
);
