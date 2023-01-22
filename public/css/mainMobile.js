const mainMobile = () => (
  <style global jsx>{`
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }

    body {
      line-height: 1;
    }

    ol,
    ul {
      list-style: none;
    }

    blockquote,
    q {
      quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    input,
    input:-webkit-search-decoration,
    input:-webkit-search-cancel-button {
      -webkit-appearance: none;
      border-radius: 0;
    }

    [class^='icon-'] {
      display: inline-block;
      width: 30px;
      height: 30px;
      background-size: contain;
      background-repeat: no-repeat;
      vertical-align: middle;
      text-align: center;
    }

    .icon-error {
      background: url('//a.namshicdn.com/login/assets/error_icon.svg') no-repeat;
      height: 24px;
      width: 24px;
    }
    .sizeOptions__heading-mobile {
      font-size: 11px;
      font-weight: 600;
      color: #000 !important;
      text-transform: uppercase;
      margin-bottom: 6px;
      margin-top: 6px;
    }
    .size_options-mobile {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      margin-left: 4px;
    }
    .size_listing-mobile {
      padding: 7px;
      border: 0.5px solid rgba(0, 0, 0, 0.15);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 4px;
      margin-top: 4px;
      position: relative;
    }

    .add-to-cart-mobile {
      padding: 7px 14px;
      background: transparent;
      border: 0.5px solid rgba(0, 0, 0, 0.15);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .add-to-cart-mobile svg {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes pulse {
      50% {
        background: #999;
      }
    }

    .userAuth__icon--loading {
      border-radius: 50%;
      width: 24px;
      height: 24px;
      border: 0.25rem solid rgba(153, 153, 153, 0.4);
      border-top-color: #999;
      animation: spin 1s infinite linear;
    }

    a {
      color: var(--omnisell-CartTextColor);
    }

    p {
      margin: 10px 0;
    }

    @keyframes fader {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes scaler {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.01);
      }
      100% {
        transform: scale(1);
      }
    }

    .userAuth {
      background-color: #fff;
      width: 100%;
      height: 100vh;
      overflow-x: hidden;
    }
    .userAuth a {
      text-decoration: none;
    }
    .userAuth__heading {
      margin-bottom: 5px;
      color: #363636;
      padding: 15px;
      font-weight: 600;
      font-size: 16px;
    }
    .userAuth__viewport {
      position: relative;
      transition: transform 0.3s ease-in;
    }
    .userAuth__viewport.login {
      transform: translate3d(0, 0, 0);
    }
    .userAuth__viewport.register {
      transform: translate3d(-100%, 0, 0);
    }
    .userAuth__viewport #login {
      transform: translate3d(0, 0, 0);
    }
    .userAuth__viewport #register {
      transform: translate3d(0, 0, 0);
    }
    .userAuth__viewport #resetpassword {
      animation: fader 0.3s ease-out, scaler 0.3s ease-out;
    }
    .userAuth__view {
      margin: 0 auto;
    }
    .userAuth__animate {
      position: absolute;
      padding: 15px;
      box-sizing: border-box;
      width: 100%;
      display: none;
    }
    .userAuth__animate--active {
      display: block;
    }
    .userAuth__separator {
      margin: 25px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      background: radial-gradient(circle, white 0%, #37e6da 50%, white 100%);
      height: 1px;
    }
    .userAuth__separator div {
      background: #fff;
      padding: 0 10px;
      text-transform: uppercase;
      color: #999;
      font-size: 12px;
    }
    .userAuth__btn {
      padding: 0;
      border: 0;
      margin-bottom: 10px;
      width: 100%;
      height: 42px;
      text-align: center;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      background: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      outline: none;
    }
    .userAuth__btn--fb {
      background: #464497;
      background: linear-gradient(90deg, #464497 0%, #346fb9 100%);
      color: #fff;
    }
    .userAuth__btn--google {
      background: #f02a0f;
      background: linear-gradient(90deg, #f02a0f 0%, #e96f5f 100%);
      color: #fff;
    }
    .userAuth__icon {
      display: inline-block;
      margin-right: 10px;
    }
    .userAuth__icon--fb {
      background: url('//a.namshicdn.com/login/assets/fb.png') no-repeat;
      height: 20px;
      width: 20px;
      margin-bottom: 3px;
    }
    .userAuth__icon--google {
      background: url('//a.namshicdn.com/login/assets/google.png') no-repeat;
      height: 20px;
      width: 20px;
      margin-bottom: 3px;
    }
    .userAuth__icon--loading {
      width: 10px;
      height: 10px;
      margin-left: 5px;
    }
    .userAuth__footer {
      margin-top: 20px;
      margin-bottom: 15px;
      color: #363636;
    }
    .userAuth--attached .userAuth__heading {
      padding: 0 0 15px 0;
    }
    .userAuth--attached .userAuth__animate {
      padding: 0;
    }
    .userAuth--centered {
      text-align: center;
    }

    .uaForm label {
      display: block;
      margin-bottom: 10px;
    }

    .uaForm__input {
      display: block;
      width: 100%;
      height: 35px;
      border: 1px solid #ebeded;
      padding: 8px 12px;
      border-radius: 0;
      font-family: 'Gotham SSm A', 'Gotham SSm B', Arial, Sans-Serif;
    }
    .uaForm__input--select {
      background-color: #fff;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
    }
    .uaForm__input--invalid {
      border: 1px solid #e00000;
    }

    .uaForm__selectWrapper:after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 6px 4px 0 4px;
      border-color: #666 transparent transparent transparent;
      position: absolute;
      display: inline-block;
      top: 15px;
      right: 7.5px;
      pointer-events: none;
    }

    .uaForm__group {
      position: relative;
      margin-bottom: 10px;
      text-align: left;
    }

    .uaForm .uaForm__label--inline {
      display: inline-flex;
      align-items: center;
      text-transform: uppercase;
      font-size: 10px;
      margin: 0;
    }
    .uaForm .uaForm__label--inline input {
      margin-right: 5px;
    }

    .uaForm__errormsg {
      color: #e00000;
      font-size: 10px;
      margin-top: 5px;
    }

    .uaForm__submit {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 42px;
      border: 0;
      outline: 0;
      font-weight: 700;
      text-transform: uppercase;
      background-color: #2560a9;
      color: #fff;
      will-change: background-color;
      transition: background-color 0.3s ease-out;
    }
    .uaForm__submit:disabled {
      background-color: #80d8c6;
    }
    .uaForm__submit--submitting {
      background-color: #80d8c6;
    }
    .uaForm__submit--enabled {
      animation: scaler 0.3s ease-out;
    }

    .uaForm__passwordreset {
      display: block;
      margin: 15px auto 0;
      color: #848f99;
      outline: none;
    }

    .alert {
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 10px;
      font-size: 10px;
      animation: fader 0.3s ease-out, scaler 0.3s ease-out;
      display: flex;
      align-items: center;
    }
    .alert--errors {
      color: #fff;
      background-color: #ec6666;
    }
    .alert--success {
      color: #fff;
      background-color: green;
    }
    .alert__icon {
      margin-right: 5px;
    }

    .passwordmeter {
      font-size: 12px;
    }
    .passwordmeter .passwordmeter__strength {
      background: #4f4f4f;
      text-align: center;
      height: 3px;
      position: relative;
    }
    .passwordmeter .passwordmeter__score {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      transition: transform 0.5s;
      transform-origin: left;
      width: 100%;
      transform: scaleX(0);
    }
    .passwordmeter .passwordmeter__score--0,
    .passwordmeter .passwordmeter__score--1 {
      background: #ff4040;
      transform: scaleX(0.25);
    }
    .passwordmeter .passwordmeter__score--2,
    .passwordmeter .passwordmeter__score--3 {
      background: #e6e646;
      transform: scaleX(0.66);
    }
    .passwordmeter .passwordmeter__score--4,
    .passwordmeter .passwordmeter__score--5 {
      background: #02d202;
      transform: scaleX(1);
    }

    .userAuth.ar {
      direction: rtl;
    }
    .userAuth.ar .userAuth__icon {
      margin-right: 0;
      margin-left: 10px;
    }
    .userAuth.ar .userAuth__icon--loading {
      margin-left: 0;
      margin-right: 5px;
    }
    .userAuth.ar .uaForm__group {
      text-align: right;
    }
    .userAuth.ar .uaForm__selectWrapper:after {
      right: auto;
      left: 7.5px;
    }
    .userAuth.ar .uaForm .userAuth.ar .uaForm__label--inline input {
      margin-right: 0;
      margin-left: 5px;
    }
    .userAuth.ar .uaForm__loadingIcon {
      margin-left: 0;
      margin-right: 5px;
    }
    .userAuth.ar .alert__icon {
      margin-right: 0;
      margin-left: 5px;
    }
    .userAuth.ar .passwordmeter .passwordmeter__score {
      left: auto;
      right: 0;
      transform-origin: right;
    }

    * {
      box-sizing: border-box;
      font-size: 12px;
    }

    body {
      margin: 0;
      padding: 0;
      background: #f5f5f5;
      font-size: 12px;
      color: #222;
      font-weight: normal;
      font-family: 'Gotham SSm A', 'Gotham SSm B', Arial, Sans-Serif;
    }
    a,
    abbr,
    acronym,
    address,
    applet,
    article,
    aside,
    audio,
    b,
    big,
    blockquote,
    body,
    canvas,
    caption,
    center,
    cite,
    code,
    dd,
    del,
    details,
    dfn,
    div,
    dl,
    dt,
    em,
    embed,
    fieldset,
    figcaption,
    figure,
    footer,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    header,
    hgroup,
    html,
    i,
    iframe,
    img,
    ins,
    kbd,
    label,
    legend,
    li,
    mark,
    menu,
    nav,
    object,
    ol,
    output,
    p,
    pre,
    q,
    ruby,
    s,
    samp,
    section,
    small,
    span,
    strike,
    strong,
    sub,
    summary,
    sup,
    table,
    tbody,
    td,
    tfoot,
    th,
    thead,
    time,
    tr,
    tt,
    u,
    ul,
    var,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:after,
    blockquote:before,
    q:after,
    q:before {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    input,
    input:-webkit-search-cancel-button,
    input:-webkit-search-decoration {
      -webkit-appearance: none;
      border-radius: 0;
    }
    .module-grid {
      display: flex;
      width: 100%;
      flex-direction: column;
    }
    .module-grid img {
      width: 100%;
      height: auto;
    }
    .grid {
      display: flex;
    }
    .grid img {
      width: 100%;
      height: auto;
    }
    .row {
      width: 100%;
      display: flex;
    }
    .spacer {
      height: 1%;
      background: #fff;
    }
    .full,
    .spacer {
      width: 100%;
    }
    .half {
      width: 50%;
    }
    .cart,
    .categoryTree,
    .filtering,
    .gender-tabs,
    .list-product,
    .message,
    .navigation-tabs,
    .options-list-header-wrapper,
    .pagination-list,
    .product,
    .product-attr,
    .refine-header-wrapper,
    .search-options,
    .search-trending,
    .sidebar,
    .sorting,
    .topbar {
      box-sizing: border-box;
    }
    .cart,
    .categoryTree,
    .filtering,
    .gender-tabs,
    .message,
    .navigation-tabs,
    .options-list-header-wrapper,
    .pagination-list,
    .product,
    .product-attr,
    .refine-header-wrapper,
    .search-options,
    .search-trending,
    .sidebar,
    .sorting,
    .topbar {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      width: 100%;
      padding: 5px;
      background: #fff;
    }
    .carousel-module-product-image,
    .list-product-image,
    .product-overview-link-image {
      max-width: 100%;
    }
    .footer-badge,
    .mastercard,
    .topbar-logo,
    .trustwave,
    .visa {
      text-indent: -99999px;
    }
    .filter-title,
    .list-product-brand,
    .list-product-name,
    .refine-style-name {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .cart-button-label,
    .cart-loader,
    .modal.is-hidden,
    .option-icon-done,
    .options-list,
    .options-sub-categories,
    .overlay,
    .product-details.show-all .is-expand,
    .product-show-detail.is-collapse,
    .refine-remove,
    .search-overlay,
    .search-trending.is-hidden,
    .search-view-wrapper,
    .toast,
    .wishlist {
      opacity: 0;
      pointer-events: none;
    }
    .cart-button-label.is-visible,
    .cart-loader.is-visible,
    .option-icon-done.is-visible,
    .options-list.is-visible,
    .options-sub-categories.is-visible,
    .product-details.show-all .is-collapse,
    .refine-remove.is-visible,
    .refine-sort.is-visible-sort,
    .refine.is-visible,
    .search-overlay.is-visible,
    .search-view-wrapper.is-visible,
    .sort-bar.is-visible-sort,
    .toast-bottom.is-visible,
    .wishlist-visible .wishlist {
      opacity: 1;
      pointer-events: all;
    }
    .carousel-module-scrollable,
    .categories-scrollable,
    .product-variations-scrollable {
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    [class^='icon-'] {
      display: inline-block;
      width: 30px;
      height: 30px;
      background-size: contain;
      background-repeat: no-repeat;
      vertical-align: middle;
      text-align: center;
    }
    .icon-burger {
      background-image: url(/web-mobile/5d556408b5e131eeadb98a6fac492cf6.png);
    }
    .icon-search {
      background-image: url(/web-mobile/5be10c57f451ef52afb67c09621a6237.png);
    }
    .icon-trending {
      background-image: url(/web-mobile/f4f7fe495744e81dd0988e0cf39f8ac7.png);
    }
    .icon-trending-red[class^='icon-'] {
      background-image: url(/web-mobile/d9e97f6edc6e5fea11ccb216b0945491.png);
      display: inline-block;
      width: 17px;
      height: 17px;
      background-size: contain;
      background-repeat: no-repeat;
      vertical-align: middle;
      text-align: center;
      margin-right: 5px;
    }
    .icon-history {
      background-image: url(/web-mobile/f456070bf480d551025d906687f6a5d6.png);
      width: 17px;
      height: 17px;
    }
    .icon-results {
      background-image: url(/web-mobile/c1f6b516f8c7a5f630cd414e35a57a51.svg);
    }
    .icon-pin {
      background-image: url(/web-mobile/205efedeeea1b989223829a5bb9ee318.svg);
    }
    .icon-bag {
      width: 24px;
      height: 20px;
      padding-top: 8px;
      line-height: 18px;
      background-image: url(/web-mobile/51e1481d113230bf2a924cef465f421d.png);
    }
    .icon-bag .retry {
      background-image: url(/web-mobile/28d078d80bfb10c96d464a9b6c434f13.svg);
      width: 15px;
      height: 15px;
      position: absolute;
      top: 15px;
      right: 4px;
    }
    .icon-share {
      width: 32px;
      height: 32px;
      background-image: url(/web-mobile/5cf17a483f570c544a6a2253e6023bef.svg);
    }
    .icon-cart {
      width: 22px;
      height: 22px;
      margin: -6px 3px 0;
      line-height: 20px;
      background-image: url(/web-mobile/4d8c2a47c582b4f4bc963ac651317419.png);
    }
    .icon-arrow {
      width: 12px;
      height: 12px;
      background-image: url(/web-mobile/d359821f4b50f4dc7ce50f80a4dae0ef.png);
    }
    .icon-sort {
      width: 14px;
      height: 14px;
      background-image: url(/web-mobile/04f401c4256a2384995eb7b0ff98d961.png);
    }
    .icon-filter {
      vertical-align: bottom;
      background-image: url(/web-mobile/1fc80b2e8942c7915489ea14f7ae26f9.png);
      width: 30px;
      height: 25px;
    }
    .icon-back {
      background-size: 100%;
      background-position: 0;
      background-image: url(/web-mobile/623cc1b7655a4e238a13f0a6f609c820.png);
    }
    .icon-wishlist {
      background-image: url(/web-mobile/99aa310e55f4339585d71eaa8f8cf4e9.png);
    }
    .icon-close {
      width: 20px;
      height: 20px;
      background-image: url(/web-mobile/f8836c7917cd31aab1cf38bca0123eca.png);
    }
    .icon-arrow-down {
      opacity: 0.3;
    }
    .icon-arrow-down,
    .icon-arrow-go {
      background: url(/web-mobile/3a44a58a726a3b4ea96d5f914e4784ad.png);
      background-size: contain;
      width: 23px;
      height: 23px;
    }
    .icon-arrow-go {
      transform: rotate(-90deg);
    }
    .icon-new {
      background: url(/web-mobile/f04c5dad4f10c5f23cc1132dab1506d9.svg);
    }
    .icon-popularity {
      background: url(/web-mobile/48292e4d9f77eb36b1e25cbda441e8ee.svg);
    }
    .icon-discount {
      background: url(/web-mobile/bc0ef1f3a6abe7865e1e520a8c14a580.svg);
    }
    .icon-price_asc {
      background: url(/web-mobile/ff48ebf9d75e2fdb9326cecda82d8502.svg);
    }
    .icon-price_desc {
      background: url(/web-mobile/fe7dd528e118f091d9f4ab81fe607fdd.svg);
    }
    .icon-done {
      background-image: url(/web-mobile/6c0f4e3d3b61cb5701bb09c99cb5ab15.svg);
      height: 12px;
      width: 12px;
    }
    .icon-envelope {
      background-image: url(/web-mobile/2e36bce53f225beeb0078bb1755b2783.svg);
      height: 13px;
      width: 13px;
    }
    .icon-loader {
      background-image: url(/web-mobile/690ce1f598dd9290879e269d36eef24a.svg);
      height: 12px;
      width: 12px;
    }
    .icon-category {
      background: url(/web-mobile/3ded9edfdbd0080f545d0b98f0e7d40b.png);
      background-size: contain;
      height: 23px;
      width: 23px;
    }
    .icon-notification {
      width: 50px;
      height: 50px;
      background-image: url(/web-mobile/aaf444888eb5caa74eeeea598ebd872d.svg);
    }
    [data-type='/men-shoes/'] {
      background-image: url(/web-mobile/4087a3ef827ad0bc98bc2c8594311641.png);
    }
    [data-type='/women-shoes/'] {
      background-image: url(/web-mobile/9d1cf83839451bcd6ecf11658930ab5e.png);
    }
    [data-type='/kids-shoes/'] {
      background-image: url(/web-mobile/eeab93974324ed3941b76bd2594fe596.png);
    }
    [data-type='/kids-clothing/'],
    [data-type='/men-clothing/'],
    [data-type='/women-clothing/'] {
      background-image: url(/web-mobile/4250ac18b2b8a9596bb782f4b2c7253f.png);
    }
    [data-type='/kids-accessories/'],
    [data-type='/men-accessories/'],
    [data-type='/women-accessories/'] {
      background-image: url(/web-mobile/42dc16df886317421dbe58625b028602.png);
    }
    [data-type='/men-beauty-products/'],
    [data-type='/women-beauty-products/'] {
      background-image: url(/web-mobile/32e517c3f110f554e8c30b91fe0e5268.png);
    }
    [data-type='/men-bags/'] {
      background-image: url(/web-mobile/be865616fab722d5a0e4604189df739b.png);
    }
    [data-type='/women-bags/'] {
      background-image: url(/web-mobile/9c805b5cf42c45f9e896e838490aecc7.png);
    }
    [data-type='/kids-bags/'] {
      background-image: url(/web-mobile/8f386f27aa30803b8919421eaa778525.png);
    }
    [data-type='/men/premium_shop/'],
    [data-type='/women/premium_shop/'] {
      background-image: url(/web-mobile/3d43400496474406668c373d1fdc595d.png);
    }
    [data-type='/men-lifestyle/'],
    [data-type='/women-lifestyle/'] {
      background-image: url(/web-mobile/332f4382bc605b4e7b6cfbe4e3edb2ea.png);
    }
    [data-type='/kids/top-brands/'],
    [data-type='/men/top-brands/'],
    [data-type='/women/top-brands/'] {
      background-image: url(/web-mobile/c5cb86e616b9a10e7307fd3a7fafdf65.png);
    }
    [data-type='/kids/new-products/'],
    [data-type='/men/new-products/'],
    [data-type='/women/new-products/'] {
      background-image: url(/web-mobile/ccd50485545d1f8defdcc0dfb83f9d1a.png);
    }
    [data-type='/kids/special-price/'],
    [data-type='/men/special-price/'],
    [data-type='/women/special-price/'] {
      background-image: url(/web-mobile/e2d166e7cf5911279c670875f93efeeb.png);
    }
    [data-type='/kids/all-products/'],
    [data-type='/men/all-products/'],
    [data-type='/women/all-products/'] {
      background-image: url(/web-mobile/fe1ae116a8bef24fe4aca0b05522b0a1.png);
    }
    .icon-plp-sort {
      background-image: url(/web-mobile/629a0d4a07e954c52b22449e2df3da15.svg);
      height: 15px;
      width: 15px;
    }
    .icon-plp-filter {
      background-image: url(/web-mobile/24d6b14b892a09b3d41249b8c5ccfc32.svg);
      height: 15px;
      width: 15px;
    }
    @-webkit-keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(1turn);
      }
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(1turn);
      }
    }
    @-webkit-keyframes pulse {
      50% {
        background: #999;
      }
    }
    .loading {
      border-radius: 50%;
      width: 24px;
      height: 24px;
      border: 0.25rem solid hsla(0, 0%, 60%, 0.4);
      border-top-color: #999;
      -webkit-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite;
    }
    .loading.is-white {
      border: 0.25rem solid hsla(0, 0%, 100%, 0.4);
      border-top-color: #fff;
    }
    .loading.is-double {
      border-style: double;
      border-width: 0.5rem;
    }
    .loading.is-center {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
    }
    @-webkit-keyframes stroke {
      to {
        stroke-dashoffset: 0;
      }
    }
    @keyframes stroke {
      to {
        stroke-dashoffset: 0;
      }
    }
    @-webkit-keyframes scale {
      0%,
      to {
        transform: none;
      }
      50% {
        transform: scale3d(1.1, 1.1, 1);
      }
    }
    @keyframes scale {
      0%,
      to {
        transform: none;
      }
      50% {
        transform: scale3d(1.1, 1.1, 1);
      }
    }
    @-webkit-keyframes fill {
      to {
        box-shadow: inset 0 0 0 30px #00cba5;
      }
    }
    @keyframes fill {
      to {
        box-shadow: inset 0 0 0 30px #00cba5;
      }
    }
    .checkmark {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: block;
      stroke-width: 2;
      stroke: #fff;
      stroke-miterlimit: 10;
      margin: 0 auto 15px;
      box-shadow: inset 0 0 0 #00cba5;
      -webkit-animation: fill 0.4s ease-in-out 0.4s forwards,
        scale 0.3s ease-in-out 0.9s both;
      animation: fill 0.4s ease-in-out 0.4s forwards,
        scale 0.3s ease-in-out 0.9s both;
    }
    .checkmark__circle {
      stroke-dasharray: 166;
      stroke-dashoffset: 166;
      stroke-width: 2;
      stroke-miterlimit: 10;
      stroke: #00cba5;
      fill: none;
      -webkit-animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
      animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }
    .checkmark__check {
      transform-origin: 50% 50%;
      stroke-dasharray: 48;
      stroke-dashoffset: 48;
      -webkit-animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s
        forwards;
      animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }
    @-webkit-keyframes slidein {
      0% {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
    @keyframes slidein {
      0% {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
    .animate__slidein {
      -webkit-animation: slidein 0.5s;
      animation: slidein 0.5s;
    }
    @-webkit-keyframes slideout {
      0% {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
    @keyframes slideout {
      0% {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
    .animate__slideout {
      position: relative;
    }
    .animate__slideout,
    .ar .animate__slidein {
      -webkit-animation: slideout 0.5s;
      animation: slideout 0.5s;
    }
    .ar .animate__slideout {
      -webkit-animation: slidein 0.5s;
      animation: slidein 0.5s;
    }
    @-webkit-keyframes slideInDown {
      0% {
        transform: translate3d(0, -100%, 0);
        visibility: visible;
      }
      to {
        transform: translateZ(0);
      }
    }
    @keyframes slideInDown {
      0% {
        transform: translate3d(0, -100%, 0);
        visibility: visible;
      }
      to {
        transform: translateZ(0);
      }
    }
    .animate__slideInDown {
      -webkit-animation-name: slideInDown;
      animation-name: slideInDown;
    }
    @-webkit-keyframes slideOutUp {
      0% {
        transform: translateZ(0);
      }
      to {
        visibility: hidden;
        transform: translate3d(0, -100%, 0);
      }
    }
    @keyframes slideOutUp {
      0% {
        transform: translateZ(0);
      }
      to {
        visibility: hidden;
        transform: translate3d(0, -100%, 0);
      }
    }
    .animate__slideOutUp {
      -webkit-animation-name: slideOutUp;
      animation-name: slideOutUp;
    }
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      to {
        transform: scale(1);
      }
    }
    .animate__pulse {
      -webkit-animation: pulse 0.3s;
      animation: pulse 0.3s;
    }
    @-webkit-keyframes shake {
      0%,
      to {
        transform: translateZ(0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        transform: translate3d(-10px, 0, 0);
      }
      20%,
      40%,
      60%,
      80% {
        transform: translate3d(10px, 0, 0);
      }
    }
    @keyframes shake {
      0%,
      to {
        transform: translateZ(0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        transform: translate3d(-10px, 0, 0);
      }
      20%,
      40%,
      60%,
      80% {
        transform: translate3d(10px, 0, 0);
      }
    }
    .shake {
      -webkit-animation-name: shake;
      animation-name: shake;
    }
    .animated {
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .animated.fast {
      -webkit-animation-duration: 0.8s;
      animation-duration: 0.8s;
    }
    .animated.faster {
      -webkit-animation-duration: 0.5s;
      animation-duration: 0.5s;
    }
    .gradient-placeholder {
      -webkit-animation: shimmer 1s linear infinite forwards;
      animation: shimmer 1s linear infinite forwards;
      background: #efefef;
      background-image: linear-gradient(
        95deg,
        #efefef,
        hsla(0, 0%, 100%, 0.5) 20%,
        #efefef 40%,
        #efefef
      );
      background-repeat: no-repeat;
      flex: 1;
      position: relative;
    }
    @-webkit-keyframes shimmer {
      0% {
        background-position: -100px 0;
      }
      to {
        background-position: 500px 0;
      }
    }
    @keyframes shimmer {
      0% {
        background-position: -100px 0;
      }
      to {
        background-position: 500px 0;
      }
    }
    #app-links {
      justify-content: space-between;
      background: #f7f7f7;
      color: #2f2f2f;
      box-sizing: border-box;
      border-bottom: 1px solid #e0e0e0;
      position: relative;
      height: 80px;
    }
    #app-links,
    #app-links .details {
      display: flex;
      align-items: center;
    }
    #app-links .details {
      font-size: 14px;
      padding: 0 10px;
      margin-left: 20px;
    }
    #app-links .details p {
      line-height: 1.3em;
    }
    #app-links .details .info {
      padding: 0 5px;
    }
    #app-links .link {
      display: block;
      outline: none;
      font-size: 18px;
      text-decoration: none;
      text-transform: uppercase;
      margin-right: 10px;
      padding: 10px;
    }
    #app-links .close {
      text-decoration: none;
      color: #999;
      position: absolute;
      top: 0;
      left: 10px;
      font-size: 22px;
      height: 100%;
      display: flex;
      align-items: center;
    }
    @-webkit-keyframes fadeInScaled {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      to {
        transform: none;
        opacity: 1;
      }
    }
    @keyframes fadeInScaled {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      to {
        transform: none;
        opacity: 1;
      }
    }
    .topbar {
      position: sticky;
      position: -webkit-sticky;
      z-index: 2;
      top: 0;
      width: 100%;
      display: flex;
      height: 50px;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.23);
    }
    .topbar.has-siblings {
      box-shadow: none;
    }
    .topbar-menu-link {
      margin: 0 10px;
      position: relative;
      z-index: 3;
    }
    .topbar-language {
      margin-right: auto;
    }
    .topbar-language-switcher {
      font-weight: 700;
      color: #000;
      text-decoration: none;
    }
    .topbar-logo {
      margin-right: auto;
      margin-left: 0;
      width: 234px;
      height: 39px;
      background-position: 3px 1px;
      background-repeat: no-repeat;
      background-size: 157px auto;
      justify-content: flex-end;
    }
    .topbar-brand {
      margin-right: auto;
      color: #000;
      margin-left: auto;
      font-size: 16px;
      text-decoration: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      padding: 0 90px;
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      box-sizing: border-box;
      height: 100%;
      line-height: 50px;
      text-align: center;
    }
    .topbar-actions {
      display: flex;
      position: relative;
      z-index: 2;
      align-items: center;
    }
    .topbar-actions .wishlist {
      position: static;
      width: 30px;
      flex-shrink: 0;
    }
    .topbar-actions .wishlist-icon {
      stroke: #000;
    }
    .topbar-actions .topbar-actions-cart {
      margin: 0 5px;
      text-align: center;
      text-decoration: none;
      color: #000;
      font-size: 12px;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
    }
    .topbar-actions-filter {
      margin: 0 3px;
      align-self: center;
      display: block;
    }
    .topbar-actions-filter,
    .topbar-actions-share {
      -webkit-animation: fadeInScaled 0.3s ease-out;
      animation: fadeInScaled 0.3s ease-out;
    }
    .topbar-actions-share {
      display: flex;
      align-items: center;
      margin: 0 5px;
      height: 100%;
    }
    .topbar-actions-search {
      margin: 0 10px;
    }
    .topbar-actions-search .icon-search {
      width: 22px;
      height: 22px;
    }
    .site-header__account {
      position: relative;
    }
    .site-header__icon {
      stroke: #000;
      fill: none;
      width: 28px;
      height: 28px;
    }
    .site-header__icon:hover {
      fill: #000;
    }
    ul.breadcrumb {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 15px 10px;
    }
    ul.breadcrumb li {
      padding: 5px;
    }
    ul.breadcrumb li a {
      color: #666;
      text-decoration: none;
    }
    .sidebar {
      position: fixed;
      z-index: 10000000;
      top: 0;
      bottom: 0;
      left: 0;
      padding: 0;
      background: transparent;
      pointer-events: none;
    }
    .sidebar-wrapper {
      position: absolute;
      width: 80%;
      overflow: hidden;
      background: #fafafa;
      z-index: 10;
      left: 0;
      top: 0;
      transition: transform 0.2s ease-out;
      height: 100%;
      box-shadow: 1px 1px 10px;
      pointer-events: visible;
      transform: translateX(-105%);
      pointer-events: none;
    }
    .sidebar-wrapper.is-visible {
      transition: transform 0.4s ease-out;
      transform: translateX(0);
      pointer-events: visible;
    }
    .sidebar-profile {
      background: #fff;
      border-bottom: 3px solid #e4e4e4;
      margin: 0;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      min-height: 50px;
      justify-content: flex-start;
    }
    .profile-pic {
      width: 58px;
      height: 19px;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .profile-user {
      margin-left: 10px;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .profile-user-name {
      color: #222;
      text-decoration: none;
      margin-bottom: 5px;
      font-weight: 700;
      font-size: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .profile-user-logout {
      color: #222;
      text-decoration: none;
      font-size: 12px;
    }
    .profile-languageSwitcher {
      margin-right: 0;
      margin-left: auto;
      color: #222;
      text-decoration: none;
    }
    .sidebar-list {
      overflow-y: scroll;
      max-height: 90%;
    }
    .nested-list-item,
    .sidebar-list-item {
      border-bottom: 1px solid #efefef;
    }
    .sidebar-list-item-link {
      font-size: 14px;
      line-height: 24px;
      display: block;
      color: #333;
      text-decoration: none;
      padding: 15px;
    }
    .sidebar-list-item-link:before {
      content: ' ';
      width: 24px;
      height: 24px;
      display: inline-block;
      margin-right: 24px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 0;
      vertical-align: middle;
    }
    .list-select-country:before {
      background-image: url(/web-mobile/8e290ac3f61bc65719b1c685364ea31f.png);
    }
    .list-account:before {
      background-image: url(/web-mobile/8f2afdd80c115c40797641dc5ab819c0.png);
    }
    .list-customerservice:before {
      background-image: url(https://a.namshicdn.com/web-mobile/47db33c2998c2d2e79512d6745329676.png);
    }
    .list-aboutus:before {
      background-image: url(/web-mobile/info.png);
    }
    .list-search:before {
      background-image: url(/web-mobile/5be10c57f451ef52afb67c09621a6237.png);
    }
    .list-men:before {
      background-image: url(/web-mobile/d5b534b1ed754446f139c9c01f0daff6.png);
    }
    .list-miniso:before {
      background-image: url(/web-mobile/miniso.png);
    }
    .list-women:before {
      background-image: url(/web-mobile/ced094b1100b3b608ad9919b3b60b074.svg);
    }
    .list-kids:before {
      background-image: url(/web-mobile/cc4de94fe16237b2da817268f4b2ab6b.svg);
    }
    .list-wishlist:before {
      background-image: url(/web-mobile/99aa310e55f4339585d71eaa8f8cf4e9.png);
    }
    .list-logout:before {
      background-image: url(/images/logout.png);
    }
    .toggle-content {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: #fafafa;
      transform: translate(100%);
      transition: opacity 0.2s, transform 0.3s;
    }
    .toggle-content.is-active {
      transform: translate(0);
      opacity: 1;
      overflow-y: scroll;
    }
    .hide-content-link {
      display: flex;
      font-size: 14px;
      color: #505050;
      text-decoration: none;
      font-weight: 700;
      padding: 10px;
      min-height: 50px;
      align-items: center;
      background: #fff;
      border-bottom: 3px solid #e4e4e4;
    }
    .hide-content-text {
      vertical-align: middle;
      margin-left: 5px;
    }
    .nested-list-item-link {
      display: flex;
      color: #222;
      line-height: 24px;
      font-size: 14px;
      text-decoration: none;
      padding: 15px 20px;
    }
    .nested-list-item-link:focus,
    .nested-list-item-link:hover {
      background: #fff;
    }
    .nested-list-item-link.is-selected {
      background: #eaeaea;
    }
    .nested-list-item-link.is-selected .icon-done {
      display: block;
    }
    .nested-list-item-link .icon-category {
      vertical-align: top;
    }
    .nested-list-item-link .icon-done {
      display: none;
      margin-left: auto;
      align-self: center;
    }
    .country-link:before {
      content: ' ';
      width: 24px;
      height: 24px;
      display: inline-block;
      margin-right: 24px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 0;
      vertical-align: middle;
    }
    .ae:before {
      background-image: url(/web-mobile/8e290ac3f61bc65719b1c685364ea31f.png);
    }
    .sa:before {
      background-image: url(/web-mobile/2d03446b91f96feb9c1e5d3594490d3c.png);
    }
    .bh:before {
      background-image: url(/web-mobile/2832a6669357252f49fc58e597ceeaf1.png);
    }
    .kw:before {
      background-image: url(/web-mobile/062353b0973c8f1e67ee0aa03fb26bfe.png);
    }
    .om:before {
      background-image: url(/web-mobile/02642c3fac25386ca00ad84754130fd5.png);
    }
    .us:before {
      background-image: url(/web-mobile/16f8728b5a863a2ced70fef8cebb213c.png);
    }
    .footer-badges {
      padding: 15px 20px;
      background: #fafafa;
    }
    .footer-badges-wrapper {
      display: flex;
      margin: 0 auto;
      width: 216px;
    }
    .footer-badge {
      display: block;
      width: 105px;
      height: 35px;
      margin-right: 10px;
    }
    .footer-badge:last-child {
      margin-right: 0;
    }
    .footer-badge.is-google-play {
      background: url(/web-mobile/3217afc1a1b6dd83fa28e730f3ef6905.png) 50% /
        contain no-repeat;
    }
    .footer-badge.is-apple {
      background: url(/web-mobile/d73b7d97107dd7eca1825523c2cedd85.svg) 50% /
        contain no-repeat;
    }
    .footer-title {
      font-size: 12px;
      margin-bottom: 10px;
    }
    .desktop-version {
      font-size: 10px;
      font-weight: 700;
      color: #fff;
      margin-top: 10px;
      width: 120px;
      background: #222;
      padding: 0 10px;
      height: 36px;
      line-height: 36px;
      box-sizing: border-box;
      border-radius: 4px;
      text-decoration: none;
    }
    .footer-copyright {
      color: #222;
      display: flex;
      justify-content: center;
      font-size: 10px;
      margin-top: 20px;
    }
    .native-carousel,
    .slider-module {
      position: relative;
      width: 100%;
    }
    #refine,
    .refine {
      width: 100%;
    }
    .refine {
      position: fixed;
      height: 100%;
      background: #fff;
      top: 0;
      z-index: 100;
      transition: transform 0.2s ease-out;
      transform: translateX(100%);
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      will-change: transform;
      display: flex;
      flex-direction: column;
      pointer-events: none;
    }
    .refine.is-visible {
      transform: none;
      pointer-events: all;
    }
    .refine-header {
      justify-content: space-between;
    }
    .refine-header,
    .refine-header-close {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .refine-header-close {
      width: 40px;
      justify-content: center;
      position: relative;
      z-index: 2;
    }
    .options-list-header-wrapper,
    .refine-header-wrapper {
      flex-shrink: 0;
      display: block;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      height: 47px;
      padding: 0 3px;
      box-shadow: none;
      background: #fff;
      position: relative;
    }
    .options-list-header-wrapper {
      z-index: 1000;
    }
    .refine-header-title {
      color: #000;
      font-size: 16px;
      text-decoration: none;
      font-weight: 500;
      text-transform: uppercase;
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 0;
    }
    .refine-header-close {
      color: #444;
    }
    .refine-header-actions {
      position: relative;
      z-index: 3;
      display: flex;
      align-items: center;
      height: 100%;
    }
    .refine-header-action {
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      display: flex;
      align-items: center;
      height: 100%;
      text-transform: uppercase;
      padding: 0 10px;
    }
    .refine-header-reset {
      color: #c03;
    }
    .refine-header-save {
      color: #444;
      opacity: 0.5;
    }
    .refine-header-save.is-active {
      opacity: 1;
    }
    .refine-styleForm-overlay {
      background: rgba(0, 0, 0, 0.7);
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }
    .refine-styleForm {
      position: fixed;
      height: 100%;
      width: 100%;
      pointer-events: none;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .refine-styleForm.is-visible {
      pointer-events: visible;
    }
    .refine-styleForm.is-visible .refine-styleForm-overlay {
      opacity: 1;
    }
    .refine-styleForm.is-visible .refine-styleForm-wrapper {
      opacity: 1;
      transform: none;
      pointer-events: visible;
    }
    .refine-styleEmpty-icon {
      background-image: url(/web-mobile/317aa6519c51e151effa18b92063b2ea.svg);
      background-size: cover;
      height: 100px;
      width: 100px;
      display: block;
      background-repeat: no-repeat;
      margin: 0 auto 38px;
      opacity: 0.5;
    }
    .refine-styleForm-wrapper {
      background: #fff;
      max-width: 300px;
      position: relative;
      border-radius: 4px;
      width: 100%;
      padding: 12px;
      box-sizing: border-box;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.18),
        0 2px 20px 4px rgba(0, 0, 0, 0.15);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-100%);
      transition: opacity 0.2s,
        transform 0.3s cubic-bezier(0.55, 0.02, 0.29, 1.04);
    }
    .refine-styleForm-footer {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
    .refine-styleForm-btn {
      height: 40px;
      border-radius: 2px;
      border: none;
      padding: 0 35px;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
    }
    .refine-styleForm-closeBtn {
      background: transparent;
      color: #666;
    }
    .refine-styleForm-saveBtn {
      background: #2560a9;
      color: #fff;
    }
    .refine-styleForm-input {
      background: #eee;
      width: 100%;
      height: 40px;
      border: none;
      padding: 0 10px;
      font-size: 14px;
      box-sizing: border-box;
    }
    .refine-styleForm-input:focus {
      outline: none;
      border: 1px solid #ddd;
      background: #fff;
    }
    .refine-styleForm-title {
      text-align: center;
      margin: 20px 0;
      font-weight: 500;
      font-size: 13px;
    }
    .refine-styleForm-content.has-error .refine-styleForm-input {
      border: 1px solid #ef5855;
    }
    .refine-styleForm-content.has-error .error {
      display: block;
    }
    .refine-sorting {
      width: 100%;
      display: flex;
      flex-shrink: 0;
      border-top: 1px solid #eee;
    }
    .refine-filtering {
      display: flex;
      overflow-y: auto;
      flex-direction: column;
      margin-bottom: 60px;
    }
    .filtering {
      margin: 0;
      padding: 0;
      box-shadow: none;
    }
    .filtering-loading {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      top: 0;
      background: hsla(0, 0%, 100%, 0.8);
      z-index: 100;
    }
    .filtering-head {
      text-transform: uppercase;
      font-weight: 500;
      color: #9a9a9a;
      font-size: 13px;
      padding: 7px 20px;
      background: #f8f8f8;
      border-bottom: 1px solid #eee;
    }
    .filtering-list {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      margin-top: 5px;
      padding: 0 15px;
    }
    .filtering-list.refine-styles-list {
      padding: 5px 15px;
    }
    .filtering-list-option {
      margin: 3px 0;
      padding: 3px 0;
      width: 100%;
      border-bottom: 1px solid #f1f1f1;
    }
    .filtering-list-option:last-child {
      border-bottom: none;
    }
    .filtering-list-option.is-active {
      opacity: 1;
    }
    .filter-style-options {
      margin: 3px 0;
      padding: 3px 0;
      width: 100%;
      border-bottom: 1px solid #f1f1f1;
    }
    .filter-style-options:last-child {
      border-bottom: none;
    }
    .filter-style-options.is-active {
      opacity: 1;
    }
    .option-title {
      color: #555;
      margin-bottom: 5px;
    }
    .option-selected,
    .option-title {
      font-size: 13px;
      text-transform: capitalize;
    }
    .option-selected {
      color: #ccc;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 1.5;
      margin-bottom: 3px;
    }
    .option-list-item {
      max-height: 60px;
      overflow: hidden;
    }
    .option-selected.active {
      color: #111;
      font-weight: 500;
    }
    .options-list {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: #fff;
      display: none;
      flex-direction: column;
      transform: translateX(100%);
      transition: opacity 0.1s, transform 0.2s ease-out;
      z-index: 3;
      will-change: transform, opacity;
    }
    .options-list.is-visible {
      transform: none;
    }
    .is-visible .options-list {
      display: flex;
    }
    .options-list-title {
      color: #000;
      font-size: 18px;
      text-decoration: none;
      font-weight: 500;
      text-transform: uppercase;
      margin: 0 auto;
    }
    .options-list__actions-all {
      border: 1px solid #000;
      border-radius: 3px;
      margin-right: 4px;
      padding: 6px 8px 4px;
      font-size: 0.9em;
    }
    .options-list-option.selected {
      color: var(--omnisell-CartTextColor);
      font-weight: 500;
    }
    .options-list-header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      box-shadow: none;
      height: 100%;
    }
    .options-search-form {
      background: #ededed;
      padding: 7px 10px;
      height: 50px;
      flex-shrink: 0;
      box-sizing: border-box;
      position: relative;
    }
    .options-search-icon {
      position: absolute;
      width: 20px;
      height: 20px;
      left: 20px;
      top: 15px;
      opacity: 0.2;
    }
    .options-search-input {
      background: #fff;
      width: 100%;
      border: none;
      font-size: 13px;
      font-family: inherit;
      height: 100%;
      border-radius: 4px;
      padding: 0 10px 0 40px;
    }
    .options-search-input:focus {
      outline: none;
    }
    .options-list-select {
      overflow-y: auto;
      height: 100%;
      width: 100%;
      overflow-x: hidden;
      display: block;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      -webkit-overflow-scrolling: touch;
    }
    .options-list-select.is-editing {
      pointer-events: none;
    }
    .options-list-select.is-editing .option-icon-delete.is-visible {
      pointer-events: all;
    }
    .options-list-letter {
      padding: 7px 19px;
      font-size: 14px;
      font-weight: 500;
      position: relative;
      color: #666;
      background: #fafafa;
    }
    .options-list-sub .options-list-option:first-child {
      border-top: 1px solid #f8f8f8;
    }
    .options-list-option {
      padding: 0 20px;
      font-size: 14px;
      border-bottom: 1px solid #f8f8f8;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
    .options-list-option:last-child {
      border-bottom: none;
    }
    .option-icon-done {
      height: 12px;
      width: 12px;
      background-size: contain;
      background-repeat: no-repeat;
      transform: translateX(10px);
      transition: opacity 0.1s, transform 0.15s ease-out;
    }
    .option-icon-done.is-visible {
      transform: none;
    }
    .option-list-wrapper {
      display: flex;
    }
    .options-list-count {
      margin: 0 4px;
    }
    .options-color {
      padding-left: 45px;
    }
    .color-filter {
      position: absolute;
      width: 20px;
      height: 20px;
      left: 10px;
      top: 10px;
    }
    .options-search {
      height: 40px;
    }
    .category-tabs {
      display: flex;
    }
    .category-tab {
      flex-grow: 1;
      display: none;
    }
    .category-tab.has-children {
      display: block;
    }
    .category-tab.is-single .category-tab-header {
      display: none;
    }
    .category-tab.is-single .category-tab-content {
      top: 47px;
    }
    .category-tab-header {
      width: 100%;
      display: flex;
      height: 45px;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      text-transform: uppercase;
      position: relative;
      z-index: 100;
      border-bottom: 1px solid rgba(0, 0, 0, 0.13);
      box-shadow: 0 2px 3px -3px rgba(0, 0, 0, 0.4);
      background: #fff;
      box-sizing: border-box;
      font-size: 13px;
    }
    .category-tab-header.active {
      color: var(--omnisell-CartTextColor);
      border-bottom: 3px solid var(--omnisell-CartTextColor);
    }
    .category-tab-content {
      position: absolute;
      width: 100%;
      left: 0;
      top: 95px;
      bottom: 0;
      display: none;
      overflow-x: hidden;
      overflow-y: scroll;
      padding-bottom: 10px;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      z-index: 10;
    }
    .category-tab-content.is-visible {
      z-index: 30;
      display: block;
    }
    .options-sub-categories {
      padding-left: 20px;
      position: fixed;
      top: 0;
    }
    .options-sub-categories.is-visible {
      position: relative;
    }
    .options-list-option-category {
      position: relative;
      z-index: 3;
      text-transform: capitalize;
      height: 60px;
    }
    .options-list-option-category.is-parent {
      font-weight: 500;
      background: #fff;
    }
    .options-list-option-category.is-selected {
      color: var(--omnisell-CartTextColor);
      font-weight: 500;
    }
    .options-list-select-category {
      position: relative;
      overflow: hidden;
    }
    .options-list-select-category:before {
      content: ' ';
      height: 100%;
      position: absolute;
      width: 200%;
      top: 0;
      background: #fcfcfc;
      left: -160px;
    }
    .category-transition-end .options-list-select {
      display: block;
    }
    .options-category-title {
      display: flex;
      flex-wrap: wrap;
    }
    .options-categories-selected {
      display: block;
      position: relative;
      color: #777;
    }
    .options-categories-selected.active {
      color: var(--omnisell-CartTextColor);
    }
    .options-categories-selected:first-child {
      padding: 0;
    }
    .option-breadcrumbs-arrow {
      transform: rotate(180deg);
      width: 14px;
      height: 14px;
      margin: 0 5px;
    }
    .icon-arrow {
      transform: none;
      transition: transform 0.15s;
    }
    .icon-arrow.is-category-expanded {
      transform: rotate(180deg);
    }
    .sorting {
      padding: 0;
      box-shadow: none;
    }
    .sorting-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3px 15px 15px;
    }
    .sorting-list-option {
      margin: 5px;
      opacity: 0.35;
      width: 20%;
      text-align: center;
      font-size: 12px;
      white-space: nowrap;
      font-weight: 500;
    }
    .sorting-list-option.is-active {
      opacity: 1;
    }
    .sorting-icons {
      display: block;
      height: 20px;
      width: 20px;
      background-size: contain;
      background-repeat: no-repeat;
      margin: 10px auto;
    }
    .refine-apply-wrapper {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 60px;
      background: #fff;
      box-shadow: 0 -10px 20px #fff;
    }
    .refine-apply,
    .refine-apply-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .refine-apply {
      margin: auto 10px 10px;
      text-decoration: none;
      color: #000;
      font-size: 14px;
      text-transform: uppercase;
      height: 40px;
      border: 1px solid #ddd;
      background: #efefef;
    }
    .refine-apply.active {
      color: #fff;
      background: var(--omnisell-CartTextColor);
      border: none;
    }
    .option-toggle-checkbox-wrapper {
      display: block;
      position: relative;
      width: 36px;
      float: right;
    }
    .option-toggle-slider {
      background: #ddd;
      height: 15px;
      width: 100%;
      position: relative;
      border-radius: 40px;
      box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.04);
    }
    .option-toggle-slider.is-active {
      background: rgba(81, 192, 169, 0.6);
    }
    .option-toggle-checkbox {
      position: absolute;
      height: 25px;
      width: 25px;
      border-radius: 100%;
      background: #bbb;
      top: -5px;
      left: 0;
      transform: translateX(-5px);
      transition: transform 0.15s;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
    }
    .option-toggle-checkbox.is-active {
      left: auto;
      right: 0;
      transform: translateX(5px);
      background: var(--omnisell-CartTextColor);
    }
    .options-special-price {
      display: flex;
      justify-content: space-between;
      height: 35px;
      align-items: center;
    }
    .apply-badge {
      display: inline-block;
      margin-left: 6px;
      background: rgba(0, 0, 0, 0.25);
      padding: 5px 7px;
      font-size: 12px;
      border-radius: 13px;
    }
    .refine-styles-wrapper {
      padding: 0 15px;
    }
    .refine-style-name {
      text-transform: capitalize;
      max-width: 300px;
      display: inline-block;
    }
    .option-icon-delete.icon-delete {
      width: 25px;
      height: 25px;
      margin: 0 auto;
      display: inline-block;
      background-image: url(/web-mobile/45f7a95c48b2a001a9a7e18e80945289.svg);
    }
    .refine-remove {
      transform: translateX(10px);
      position: absolute;
      transition: opacity 0.1s, transform 0.15s ease-out;
      right: 0;
      height: 100%;
      width: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .refine-remove.is-visible {
      transform: none;
    }
    .refine-header-edit {
      font-size: 13px;
      text-transform: uppercase;
      color: #c03;
      background: transparent;
      border: none;
      color: #004a86;
      font-weight: 500;
    }
    .refine-empty-style {
      text-align: center;
      max-width: 345px;
      padding: 2em 1em;
      margin: 100px auto 0;
      font-size: 1.12em;
      line-height: 1.5;
      color: #666;
    }
    .filter-title {
      display: inline-block;
      max-width: 300px;
    }
    .page-wrapper.list {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .categories {
      position: sticky;
      position: -webkit-sticky;
      top: 50px;
      left: 0;
      width: 100%;
      height: 45px;
      z-index: 2;
      align-items: center;
      justify-content: space-around;
      overflow: hidden;
      background: #fff;
      padding: 20px 0 5px;
    }
    .categories.is-hidden {
      display: none;
    }
    .categories:after {
      content: ' ';
      top: 0;
      right: 0;
      height: 100%;
      position: absolute;
      width: 1px;
      background: #fff;
      box-shadow: -1px 0 24px 30px #fff;
    }
    .categories-scrollable {
      width: 100%;
      height: 100%;
      bottom: 0;
      padding-bottom: 100px;
      overflow-y: hidden;
      padding-left: 10px;
    }
    .categories-list {
      transform: translateX(0);
      display: flex;
      height: 100%;
      align-items: center;
    }
    .categories-list-category {
      white-space: nowrap;
      flex-shrink: 0;
      margin-right: 10px;
    }
    .categories-list-category:last-child {
      padding-right: 40px;
    }
    .category-link {
      text-decoration: none;
      color: #777;
      padding: 0 8px;
      display: flex;
      align-items: center;
      font-size: 14px;
      border: 1px solid #dadada;
      border-radius: 4px;
      height: calc(100% - 2px);
    }
    .category-link.is-selected {
      color: var(--omnisell-CartTextColor);
      box-sizing: border-box;
      font-weight: 700;
      border-color: var(--omnisell-CartTextColor);
      background-color: rgba(81, 192, 169, 0.05);
    }
    .category-link:active,
    .category-link:hover {
      -webkit-tap-highlight-color: transparent;
      color: var(--omnisell-CartTextColor);
    }
    .product-list {
      width: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 10px 0;
      background: #fff;
    }
    @media screen and (min-width: 500px) {
      .product-list {
        padding: 0 2px;
      }
    }
    .product-list__title {
      padding: 15px 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-size: 16px;
      background: #fff;
    }
    .product-list__title > a {
      color: #333;
      margin: 0 5px;
    }
    .list-product {
      width: 50%;
      padding: 6px;
      position: relative;
    }
    .list-product:nth-child(odd) {
      padding-right: 3px;
    }
    .list-product:nth-child(2n) {
      padding-left: 3px;
    }
    @media screen and (min-width: 500px) {
      .list-product {
        width: 33.3%;
        padding: 6px 4px;
      }
      .list-product:nth-child(odd) {
        padding-left: 4px;
      }
      .list-product:nth-child(2n) {
        padding-right: 4px;
      }
    }
    .list-product-link {
      display: block;
      text-decoration: none;
      text-align: center;
    }
    .list-product-imageWrapper {
      padding-top: 160px;
      position: relative;
      width: 160px;
      margin: 0 auto;
    }
    .list-product-image {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: 0 auto;
    }
    .lazyloading {
      opacity: 0;
      will-change: opacity;
    }
    .lazyloading.lazyload--no-fade {
      opacity: 1 !important;
      will-change: none;
    }
    .lazyloaded {
      opacity: 1;
      transition: opacity 0.3s;
      will-change: auto;
    }
    .lazyloaded.lazyload--no-fade {
      transition: none;
    }
    .list-product-price {
      display: inline-block;
      color: #333;
      font-weight: 700;
      font-size: 12px;
    }
    .list-catalog-tag {
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      font-size: 10px;
      height: 30px;
      line-height: 30px;
      background: hsla(0, 0%, 100%, 0.45);
      text-align: center;
      text-transform: uppercase;
      color: #444;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 0 5px;
      box-sizing: border-box;
    }
    .is-special .price-regular {
      text-decoration: line-through;
      color: #a2a2a2;
      font-weight: 100;
    }
    .price-speical {
      margin: 0 3px;
      color: #ff6448;
      font-weight: 700;
    }
    .list-product-brand {
      margin-top: 5px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      width: 100%;
      line-height: 15px;
    }
    .list-product-name {
      color: #444;
      width: 100%;
      margin: 7px 0;
      font-size: 12px;
    }
    .has-special {
      font-size: 12px;
    }
    .has-special .price-regular {
      text-decoration: line-through;
    }
    .price-special {
      font-size: 12px;
      color: #e00000;
      font-weight: 900;
      margin-left: 3px;
    }
    .ab_percentageDiscountTag .price-special {
      color: #e95c5b;
      margin: 0 5px;
    }
    .color-tag {
      align-items: flex-end;
      margin: 3px 0;
    }
    .color-tag__tagline {
      font-weight: 700;
    }
    .color-tag__icon {
      background-image: url(/web-mobile/9f6306f507a8d66cf8bf7e2391cbf3b3.svg);
      height: 15px;
      width: 15px;
      background-size: contain;
      background-position: 50%;
      background-repeat: no-repeat;
      margin-right: 5px;
      margin-left: unset;
    }
    .shadow-product {
      position: fixed;
      opacity: 0;
      width: 100%;
      pointer-events: none;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      background: #f5f5f5;
      transition: opacity 0.2s;
    }
    .shadow-product .shadow-product-wrapper {
      display: flex;
    }
    .shadow-product .product-image {
      overflow: hidden;
      text-align: center;
    }
    .shadow-product.is-transitional {
      opacity: 1;
    }
    .shadow-product .product-image-shot {
      height: 100%;
    }
    @media screen and (min-device-height: 500px) {
      .shadow-product .product-image-shot {
        width: 100%;
        height: auto;
      }
    }
    .pagination {
      width: 100%;
      display: flex;
      padding: 10px;
      box-sizing: border-box;
      margin: 0px 0 58px 0;
    }
    .pagination-list {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 13px 10px;
      border-radius: 3px;
    }
    .pagination-description {
      text-transform: uppercase;
      font-size: 14px;
    }
    .pagination-link.is-selected {
      font-weight: 700;
      font-size: 16px;
      color: #000;
    }
    .pagination-link {
      text-decoration: none;
      font-size: 13px;
      color: #333;
      padding: 10px;
      fill: #c3c3c3;
      text-transform: uppercase;
      font-weight: 500;
    }
    .no-result-search {
      width: 100%;
      margin: 25px 16px 19px;
    }
    .search-tips {
      border-bottom: 1px solid #f0f0f0;
      padding-bottom: 20px;
    }
    .search-tips-result {
      text-align: center;
      padding: 22px 0;
      font-size: 14px;
      color: #444;
      font-weight: 700;
    }
    .search-tips-title {
      padding: 0 17px;
      font-weight: 500;
      font-size: 13px;
    }
    .search-tips-list {
      padding: 10px 30px;
      list-style-type: square;
      line-height: 1.6;
    }
    .search-tips-list-option {
      font-size: 12px;
    }
    .brand-info,
    .text-module {
      padding: 10px;
      background-color: #fff;
      margin: 10px;
      text-align: center;
      color: #666;
    }
    .brand-info a,
    .text-module a {
      color: #666;
    }
    .brand-info > h2,
    .text-module > h2 {
      text-transform: uppercase;
      font-weight: 700;
      display: block;
      margin: 5px 0;
      color: #333;
    }
    .brand-info > p,
    .text-module > p {
      line-height: 20px;
    }
    .text-module a {
      font-weight: 500;
      text-decoration: underline;
      color: #333;
    }
    .sort-filter-bar {
      display: flex;
      position: -webkit-sticky;
      position: sticky;
      top: 50px;
      left: 0;
      width: 100%;
      height: 45px;
      z-index: 1;
      align-items: center;
      justify-content: space-around;
      background: #fff;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      color: grey;
    }
    .sort-filter-bar__sort-button {
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
    .sort-filter-bar__filter-button,
    .sort-filter-bar__sort-button {
      display: flex;
      align-items: center;
      height: 75%;
      width: 50%;
      justify-content: center;
      cursor: pointer;
    }
    .sort-button-tag {
      margin-right: 5px;
    }
    .filter-button-tag {
      margin: 0 5px;
    }
    .sort-filter-bar-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    .is-visible-sort {
      transform: none;
      pointer-events: all;
      bottom: 0;
      top: auto;
    }
    .refine-sort {
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      bottom: 0;
      z-index: 10;
      transform: translateY(100%);
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      will-change: transform;
      display: flex;
      flex-direction: column;
      pointer-events: none;
    }
    .refine-sort.is-visible-sort {
      transform: none;
      pointer-events: all;
    }
    .sort-bar {
      position: absolute;
      width: 100%;
      transition: transform 0.1s ease-in-out;
      transform: translateY(210px);
    }
    .sort-bar.is-visible-sort {
      transition: 0.1s ease-in-out;
      transform: none;
      pointer-events: all;
    }
    .refine-apply-wrapper-sort {
      position: relative;
    }
    .refine-sorting-options {
      margin-bottom: -10px;
    }
    .product-list {
      padding: 5px;
    }
    .list-product-image {
      border-radius: 5px;
    }
    .list-product-details {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
    .list-product-brand {
      text-transform: capitalize;
      color: #333;
      margin-top: 10px;
      font-size: 14px;
    }
    .list-product-name {
      color: #666;
      margin: 5px 0;
      line-height: 15px;
    }
    .list-product-price {
      color: var(--omnisell-CartTextColor);
      margin-top: 2px;
      line-height: 15px;
    }
    .price-regular {
      font-size: 13px;
    }
    .is-discounted {
      color: #666;
      font-weight: 200;
      font-size: 11px;
    }
    .price-special {
      color: var(--omnisell-CartTextColor);
      font-size: 13px;
    }
    .color-tag {
      justify-content: flex-start;
      margin-top: 5px;
    }
    .list-product-catalog-tag {
      margin-top: 5px;
      color: #c4633d;
      border: 1px solid #c4633d;
      display: flex;
      padding: 3px;
      border-radius: 4px;
      font-size: 10px;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
    }
    .color-tag {
      position: absolute;
      bottom: 5px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .color-tag__tagline {
      position: relative;
      color: #000;
      background: #fff;
      margin: 5px 0;
      border-radius: 25px;
      padding: 4px 9px;
      font-size: 12px;
      box-shadow: 6px 3px 7px -4px rgba(0, 0, 0, 0.25);
      color: #666;
      display: flex;
      align-items: center;
    }
    .color-tag__options-count {
      padding-left: 10px;
      padding-top: 3px;
    }
    .color-tag__swatch {
      height: 13px;
      width: 13px;
      border-radius: 50%;
      margin-right: -4px;
      background-size: contain;
      background-position: 50%;
      background-repeat: no-repeat;
    }
    @media (max-width: 500px) {
      .list-product {
        padding: 8px;
        border-bottom: thin solid #f6f6f6;
      }
      .list-product:nth-child(odd) {
        border-right: thin solid #f6f6f6;
      }
      .pushNotification ~ .list-product:nth-child(odd) {
        border-right: none;
      }
      .pushNotification ~ .list-product:nth-child(2n) {
        border-right: thin solid #f6f6f6;
      }
      .list-product:last-child,
      .list-product:nth-last-child(2) {
        border-bottom: none;
      }
    }
    .product-list .list-product {
      padding: 5px;
    }
    .product-list .wishlist-button {
      background: #fff;
      height: 25px;
      width: 25px;
      border-radius: 100%;
      position: relative;
    }
    .product-list .wishlist-icon {
      stroke: #222;
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      margin: auto;
      transform: translateY(-50%);
      height: 16px;
      width: 16px;
    }
    .product-list .wishlist-button.active .wishlist-icon {
      stroke: none;
    }
    .product-list .wishlist {
      top: auto;
    }
    .product-list .list-product:nth-child(odd) .wishlist {
      right: 6px;
    }
    .details-topbar {
      position: fixed;
      top: 10px;
      left: 0;
      right: 0;
      z-index: 101;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      transition: background-color 0.3s;
      padding: 0 20px;
    }
    .details-topbar .topbar-menu-link {
      width: 42px;
      height: 42px;
      margin: 0;
      background: #fff;
      border-radius: 30px;
      box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .details-topbar .topbar-menu-link .icon-back {
      width: 24px;
      height: 24px;
    }
    .details-topbar .wishlist {
      position: static;
      width: 42px;
      height: 42px;
      background: #fff;
      border-radius: 30px;
      box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
    }
    .details-topbar .wishlist .wishlist-icon {
      stroke: #000;
      stroke-width: 1.2px;
      width: 22px;
      height: 22px;
    }
    .details-topbar .topbar-meta {
      text-align: center;
      display: none;
    }
    .details-topbar .topbar-meta .topbar-brand-name {
      font-size: 14px;
      font-weight: 700;
      color: #666;
      margin-bottom: 3px;
    }
    .details-topbar .topbar-meta .topbar-brief-name {
      color: #999;
    }
    .details-topbar.withBG {
      background: #fff;
      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1);
      top: 0 !important;
      height: 62px;
    }
    .details-topbar.withBG .topbar-meta {
      display: block;
    }
    .details-topbar.withBG .topbar-menu-link,
    .details-topbar.withBG .wishlist {
      box-shadow: none;
    }
    .detail.page-wrapper {
      margin-top: 0;
    }
    .product {
      margin: 0;
      padding: 0;
      overflow: hidden;
      position: relative;
      box-shadow: none;
    }
    .is-animating {
      transition: transform 0.4s;
    }
    .product-image-wrapper {
      height: 400px;
      position: relative;
    }
    .product-conditions-row {
      padding: 15px 10px;
      display: flex;
      justify-content: space-evenly;
      border-bottom: 1px solid #ececec;
    }
    .product-condition-tag {
      padding: 10px;
      border-radius: 6px;
      text-align: center;
      font-weight: 500;
      font-size: 11px;
      color: #666;
      background-color: hsla(0, 0%, 40%, 0.15);
    }
    .product-condition-tag:not(:first-child) {
      margin-left: 10px;
    }
    .tag--non-returnable {
      flex: 2;
    }
    .tag--non-discountable {
      flex: 1;
    }
    .product-usps {
      display: flex;
      flex-wrap: wrap;
      font-weight: 500;
      margin: 10px 0 5px;
      border-bottom: 1px solid #ececec;
    }
    .product-usp {
      width: 50%;
      padding-top: 10px;
      flex-shrink: 0;
      box-sizing: border-box;
      padding-left: 48px;
      line-height: 1.4;
      font-size: 10px;
      position: relative;
      opacity: 0.9;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .delivery:before,
    .exdelivery:before {
      content: ' ';
      position: absolute;
      background-image: url(/web-mobile/18a63ecefc7d8ba6a573b888d210edd1.svg);
      background-size: contain;
      background-repeat: no-repeat;
      width: 41px;
      height: 50px;
      left: 0;
      top: -5px;
      opacity: 1;
    }
    .product-usp.delivery {
      padding-right: 60px;
    }
    .product-usp.delivery:before {
      right: 10px;
    }
    .product-section {
      width: 100%;
    }
    .product-share {
      padding: 5px;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid #ececec;
    }
    .product-share .share-btn {
      text-decoration: none;
      color: #000;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    .product-share .share-btn .icon-share {
      width: 28px;
      height: 30px;
    }
    .product-share .wishlist-wrap {
      font-size: 12px;
      display: none;
    }
    .product-share .wishlist-wrap .wishlist {
      position: static;
      width: auto;
    }
    .product-share .wishlist-wrap .wishlist-button {
      display: flex;
      align-items: center;
      font-size: 12px;
    }
    .product-share .wishlist-wrap .wishlist-icon {
      stroke: #000;
    }
    .product-share .wishlist-wrap .wishlist-btn-txt {
      margin: 0 5px;
    }
    .wishlist-visible .product-share {
      padding: 0;
    }
    .wishlist-visible .product-share .wishlist-wrap {
      display: flex;
    }
    .cod:before {
      background-image: url(/web-mobile/bcd009f57e14f59cbf081852b0bfa751.svg);
      width: 28px;
      height: 26px;
      left: 10px;
      top: 5px;
    }
    .brands:before,
    .cod:before {
      content: ' ';
      position: absolute;
      background-size: contain;
      background-repeat: no-repeat;
      opacity: 1;
    }
    .brands:before {
      background-image: url(/web-mobile/866f85b0bfccdc2acd97d9f0457e09d9.svg);
      width: 35px;
      height: 35px;
      left: 7px;
      top: 1px;
    }
    .exchanges {
      padding-top: 5px;
    }
    .exchanges:before {
      content: ' ';
      position: absolute;
      background-image: url(/web-mobile/72699c7d684c2143c333ee5babf52e05.svg);
      background-size: contain;
      background-repeat: no-repeat;
      width: 30px;
      height: 30px;
      left: 14px;
      top: 5px;
      opacity: 1;
    }
    .details-remaining-stock {
      font-size: 0.89em;
      text-transform: uppercase;
      color: #555;
      margin-top: 15px;
    }
    @media screen and (min-device-height: 480px) {
      .product-image-wrapper {
        height: 240px;
      }
    }
    @media screen and (min-device-height: 534px) {
      .product-image-wrapper {
        height: 230px;
      }
    }
    @media screen and (min-device-height: 568px) {
      .product-image-wrapper {
        height: 240px;
      }
    }
    @media screen and (min-device-height: 592px) {
      .product-image-wrapper {
        height: 310px;
      }
    }
    @media screen and (min-device-height: 640px) {
      .product-image-wrapper {
        height: 320px;
      }
    }
    @media screen and (min-device-height: 667px) {
      .product-image-wrapper {
        height: 375px;
      }
    }
    @media screen and (min-device-height: 732px) {
      .product-image-wrapper {
        height: 433px;
      }
    }
    @media screen and (min-device-height: 736px) {
      .product-image-wrapper {
        height: 440px;
      }
    }
    @media screen and (min-device-height: 768px) {
      .product-image-wrapper {
        height: 460px;
      }
    }
    @media screen and (min-device-height: 906px) {
      .product-image-wrapper {
        height: 500px;
      }
    }
    @media screen and (min-device-height: 166vw) {
      .product-image-wrapper {
        height: 400px;
      }
    }
    .product-carousel {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      opacity: 0;
    }
    .product-carousel.is-visible {
      opacity: 1;
    }
    .product-carousel-slides {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .slim-slider-wrapper {
      overflow: hidden;
      width: 100%;
      height: auto;
    }
    .slim-slides {
      width: 100%;
      display: flex;
    }
    .product-carousel-item {
      min-width: 100% !important;
    }
    .product-carousel-slides {
      display: flex;
      position: absolute;
      background: #fff;
    }
    .product-cache-image {
      overflow: hidden;
      margin: 0 auto;
      text-align: center;
    }
    .product-cache-image,
    .product-carousel-wrapper {
      width: 100%;
      height: 100%;
    }
    .product-carousel-item {
      opacity: 1;
      height: 100%;
      position: relative;
      overflow: hidden;
      text-align: center;
    }
    .product-carousel-image-shot {
      height: 100%;
      background-color: #fff;
    }
    @media screen and (min-device-height: 166vw) {
      .product-carousel-image-shot {
        width: 100%;
        height: auto;
      }
    }
    .product-carousel-image-shot.lazyloading {
      opacity: 0.5;
    }
    .product-carousel-image-shot.lazyloaded + .loading {
      display: none;
    }
    .carousel-pagination {
      pointer-events: none;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 35px;
    }
    .carousel-pagination-pointer {
      height: 5px;
      width: 5px;
      border: 1px solid #eee;
      border-radius: 100%;
      margin-right: 6px;
    }
    .carousel-pagination-pointer.active {
      background: #fff;
    }
    .product-brief {
      margin: 16px 0 0;
      padding: 0 10px 10px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ececec;
    }
    .product-brand-name {
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 5px;
      padding-right: 5px;
      line-height: 1.3;
    }
    .product-brand-name a {
      color: #222;
      text-decoration: none;
    }
    .product-brief-name {
      font-size: 13px;
      padding-right: 5px;
      line-height: 1.3;
      color: #222;
    }
    .product-brief-brand {
      font-size: 12px;
      color: #9a9a9a;
      text-transform: uppercase;
      margin: 5px 0;
    }
    .product-brief-price {
      font-size: 16px;
      margin-bottom: 8px;
      display: inline-block;
      font-weight: 700;
    }
    .line-through {
      text-decoration: line-through;
    }
    .product-brief-special-price {
      margin: 0 3px;
      color: #e00000;
    }
    .ab_percentageDiscountTag .product-brief-special-price {
      color: #e95c5b;
    }
    .product-size-button {
      flex-shrink: 0;
    }
    .product-size-selector {
      text-decoration: none;
      font-size: 16px;
      color: #4c4c4c;
      border: 1px solid #ccc;
      padding: 0 10px;
      border-radius: 3px;
      height: 35px;
      align-items: center;
      display: flex;
      justify-content: center;
      text-transform: capitalize;
      white-space: nowrap;
    }
    .product-size-selector.shake {
      border: 1px solid red;
    }
    .product-size-selector .icon-container {
      display: flex;
      align-items: center;
      flex-direction: row;
      flex: 1;
      white-space: nowrap;
      justify-content: space-around;
    }
    .product-size-selector .icon-arrow {
      display: inline-block;
      margin-left: 10px;
    }
    .product-sizes {
      padding: 5px 15px;
      flex-direction: column;
    }
    .product-sizes,
    .product-sizes h4 {
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
    .product-sizes h4 {
      color: #000;
      font-weight: 500;
      font-size: 1.05em;
    }
    .product-sizes-list {
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0 0;
      justify-content: flex-start;
    }
    .product-sizes-size {
      padding: 14px 12px 12px;
      cursor: pointer;
      color: #666;
      min-width: 18px;
      margin: 5px 10px 5px 0;
      display: flex;
      justify-content: center;
      font-weight: 700;
      background-color: #efefef;
      border: 1px solid #ccc;
      border-radius: 2px;
      position: relative;
    }
    .size_listing-mobile_no_stock{
    color: rgba(0,0,0,0.20);
    position: absolute;
    top:1px;
    left: 1px;
    }
    .size_listing-mobile_no_stock_detail{
    color: rgba(0,0,0,0.20);
    position: absolute;
        top: 6px;
    left: 4px;
    }
    .size_listing-mobile_no_stock_detail svg{
    width: 28px;
    height: 28px;
    }
    .product-sizes-size.is-selected {
      background-color: #666;
      color: #fff;
      border-color: #666;
    }
    .product-sizes-size.is-disabled {
      position: relative;
      color: #ccc;
      background-color: #fff;
      border-color: #ddd;
      padding: 14px 12px 12px;
    }
    .product-sizes-size.is-last-item {
      position: relative;
    }
    .product-sizes-size.is-last-item:before {
      content: '';
      display: block;
      border: 5px solid #ed141e;
      width: 0;
      height: 0;
      position: absolute;
      top: -1px;
      right: -1px;
      border-radius: 0 2px 0 10px;
    }
    .product-variation-image {
      width: 75px;
    }
    .product-variation-link {
      display: flex;
      flex-direction: column;
      text-decoration: none;
    }
    .product-sizes-runs {
      margin: 5px 0;
      min-width: 200px;
      border: 1px solid #ccc;
      border-radius: 3px;
      cursor: pointer;
    }
    .product-sizes-run,
    .product-sizes-runs {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .product-sizes-run {
      padding: 5px 10px;
      color: #999;
      flex-grow: 1;
      border-right: 1px solid #ccc;
    }
    .product-sizes-run:last-child {
      border: none;
    }
    .product-sizes-run.is-selected {
      color: #000;
      background-color: #ccc;
    }
    .product-variations-wrapper {
      margin: 0;
      position: relative;
      border-bottom: 1px solid #ececec;
      overflow: hidden;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    .product-variations-scrollable {
      width: 100%;
      height: auto;
      bottom: 0;
      overflow-y: hidden;
      padding: 10px;
      box-sizing: border-box;
    }
    .product-variations-heading {
      color: #333;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 5px;
      position: sticky;
      position: -webkit-sticky;
      left: 0;
    }
    .product-variations {
      display: flex;
    }
    .product-variations-swatch,
    .product-variations-variation {
      margin: 6px;
      overflow: hidden;
      white-space: pre-line;
      display: flex;
      flex-shrink: 0;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    .product-variations-swatch .is-selected img,
    .product-variations-variation .is-selected img {
      border: 1px solid var(--omnisell-CartTextColor);
    }
    .product-variations-swatch:first-child,
    .product-variations-variation:first-child {
      margin-left: 0;
    }
    .product-variations-swatch:last-child,
    .product-variations-variation:last-child {
      margin-right: 0;
    }
    .product-variations-swatch {
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
      border-radius: 5px;
    }
    .current-selected-variation {
      border: 1px solid var(--omnisell-CartTextColor);
    }
    .product-variation-color {
      width: 100px;
      height: 75px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .product-variation-label-wrapper {
      background: #fff;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .product-variation-label {
      color: #666;
      max-width: 65px;
      margin-top: 10px;
    }
    .product-variations-swatch .product-variation-label {
      margin-top: 0;
      max-width: 90px;
      padding: 0 5px;
      text-align: center;
    }
    .product-details {
      width: 100%;
      border-bottom: 1px solid #ececec;
    }
    .product-details.show-all .is-collapse {
      margin-top: 0;
    }
    .product-attr-list {
      padding: 0 12px;
    }
    .product-attr {
      padding: 10px;
      overflow: hidden;
      height: 200px;
      transition: height 0.3s ease-out;
    }
    .product-show-detail {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      position: relative;
      box-sizing: border-box;
      height: 75px;
      margin-top: -75px;
      background: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0) 0,
        hsla(0, 0%, 100%, 0.18) 11%,
        hsla(0, 0%, 100%, 0.73) 20%,
        hsla(0, 0%, 100%, 0.66) 25%,
        hsla(0, 0%, 100%, 0.84) 45%,
        #fff 64%,
        #fff 76%,
        #fff 90%,
        #fff 94%,
        #fff
      );
    }
    .product-show-detail .product-expand-btn {
      height: 36px;
      font-size: 12px;
      text-transform: uppercase;
      display: inline-block;
      line-height: 50px;
      padding: 0 45px;
      box-sizing: border-box;
      font-weight: 700;
      color: #555;
    }
    .product-show-detail.is-collapse {
      height: 40px;
    }
    .product-attr-title {
      font-size: 12px;
      font-weight: 700;
      color: #666;
      text-transform: uppercase;
      margin: 15px 0;
    }
    .product-description {
      color: #565555;
      margin: 15px 5px 25px;
    }
    .product-description ul {
      padding: 0 22px;
      line-height: 1.5;
      list-style: square;
    }
    .product-description ul li {
      margin-bottom: 10px;
    }
    .product-attr-list-item {
      font-size: 13px;
      color: #6d6d6d;
      line-height: 42px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: inherit;
      border-bottom: 1px solid hsla(0, 0%, 92.5%, 0.72);
    }
    .product-attr-list-item:last-child {
      border: none;
    }
    .atrribute-key {
      text-transform: uppercase;
      width: 140px;
      color: #555;
      font-size: 12px;
      font-weight: 500;
      line-height: 23px;
      margin: 5px 0 5px 10px;
      word-break: break-word;
      flex: 50%;
    }
    .atrribute-value {
      line-height: 20px;
      font-size: 13px;
      margin: 5px 5px 5px 10px;
      font-weight: 400;
      flex: 50%;
    }
    #addToCartButton {
      flex: 1;
      display: contents;
    }
    .product-Addtocart {
      position: -moz-sticky;
      position: -ms-sticky;
      position: -o-sticky;
      position: sticky;
      width: 100vw;
      height: 55px;
      box-shadow: 0 6px 29px 0 rgba(0, 0, 0, 0.3);
      bottom: 0;
      right: 0;
      z-index: 100;
      align-items: center;
      justify-content: center;
      transform: translateY(100px);
      transition: transform 0.5s ease-out;
      background: var(--omnisell-CartTextColor);
    }
    .product-Addtocart.is-visible {
      display: flex;
      transform: translateY(0);
    }
    .product-Addtocart.supported .applepay_wrapper {
      padding: 10px;
    }
    .product-Addtocart.supported .product-Addtocart-btn {
      height: 41px;
      border-radius: 4px;
      text-transform: capitalize;
      font-size: 1em;
    }
    .product-Addtocart-btn,
    .product-Buynow-btn {
      flex: 1;
      text-decoration: none;
      background: var(--omnisell-CartTextColor);
      color: #fff;
      width: 100%;
      height: 100%;
      border-radius: 0;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      text-transform: uppercase;
      position: relative;
    }
    .product-Buynow-btn {
      display: none;
      background-color: var(--omnisell-CartTextColor);
    }
    .product-Buynow-btn--small {
      max-height: 50px;
      text-transform: capitalize;
      font-size: 15px;
    }
    #expCheckoutButton {
      flex: 1;
      display: none;
    }
    .pra_supported #expCheckoutButton,
    .pra_supported .product-Buynow-btn {
      display: flex;
    }
    .pra_supported .product-Addtocart-btn,
    .pra_supported .product-Buynow-btn {
      font-size: 15px;
    }
    .pra_supported .applepay-modal__message {
      line-height: 1.5em;
      text-transform: capitalize;
      color: #333;
    }
    .productContinueShopping {
      padding: 10px;
    }
    .productContinueShopping-heading {
      font-weight: 700;
      text-align: center;
      margin: 10px;
      font-size: 20px;
    }
    .productContinueShopping-subheading {
      text-align: center;
      font-size: 15px;
      margin-bottom: 20px;
    }
    .productContinueShopping-actions {
      display: flex;
      justify-content: space-around;
      margin: 10px 0;
    }
    .productContinueShopping-actions-link {
      padding: 10px 0;
      margin: 0 5px;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--omnisell-CartTextColor);
    }
    .productContinueShopping-actions-button {
      text-decoration: none;
      background: var(--omnisell-CartTextColor);
      color: #fff;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      text-transform: uppercase;
      padding: 0 10px;
    }
    .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 1000;
      transition: opacity 0.4s;
    }
    .modal.is-bottom {
      justify-content: flex-end;
    }
    .model-shadow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .modal-content {
      background-color: #fff;
      width: 100%;
      box-shadow: 0 0 15px #333;
      border-radius: 6px 6px 0 0;
      transition: 0.3s;
    }
    .modal-content.is-center {
      margin: 10px;
      border-radius: 6px;
      width: auto;
    }
    .modal-content.is-flex {
      display: flex;
      flex-direction: column;
    }
    .modal-close {
      font-size: 1.5em;
      display: flex;
      align-self: flex-end;
      padding: 5px;
      width: 15px;
      justify-content: center;
      align-items: center;
    }
    .modal-fadeIn {
      transition: opacity 0.4s;
    }
    .modal-slideUp {
      transition: transform 0.4s;
    }
    .modal.is-hidden {
      transition: opacity 0.4s;
    }
    .modal.is-hidden .modal-fadeIn {
      transition: opacity 0.4s;
      opacity: 0;
    }
    .modal.is-hidden .modal-slideUp {
      transition: transform 0.4s;
      transform: translateY(999px);
    }
    .product-recos {
      width: 100%;
    }
    .product-recos-static .carousel-module,
    .product-recos .carousel-module {
      margin: 0;
    }
    .product-recos-static .carousel-module-title {
      padding: 33px 10px 0;
      font-size: 17px;
      text-align: center;
    }
    .catalog-tag {
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      background: hsla(0, 0%, 100%, 0.45);
      text-align: center;
      text-transform: uppercase;
      color: #444;
      z-index: 2;
    }
    .catalog-tag + .slim-slider-wrapper + .carousel-pagination {
      bottom: 30px;
    }
    .includeVAT {
      font-size: 11px;
      color: #bebebe;
      font-weight: 400;
    }
    .outofstock {
      padding: 10px 0;
      flex-direction: column;
      width: 100%;
      position: relative;
    }
    .outofstock,
    .outofstock__heading {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .outofstock__heading {
      height: 30px;
      color: #000;
    }
    .outofstock__footer {
      margin: 5px 0 10px;
    }
    .outofstock__container {
      width: 100%;
    }
    .outofstock__loader {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: hsla(0, 0%, 100%, 0.8);
    }
    .outofstock__notification {
      margin: 15px 0 30px;
      font-size: 13px;
      max-width: 300px;
      line-height: 16px;
      text-align: center;
    }
    .outofstock__icon {
      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      margin-right: 15px;
    }
    .outofstock__list {
      margin: 5px auto 15px;
      max-width: 300px;
      width: 65%;
    }
    .outofstock__item {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      border-bottom: 1px solid #eaeaea;
    }
    .outofstock__item:last-child {
      border-bottom: 0;
    }
    .outofstock__item:focus,
    .outofstock__item:hover {
      background-color: #eaeaea;
    }
    .outofstock__item--subscribed {
      color: #00cba5;
    }
    .outofstock__item--single {
      border-top: 1px solid #eaeaea;
    }
    .outofstock__item--single:last-child {
      border-bottom: 1px solid #eaeaea;
    }
    .outofstock__link {
      color: #551a8b;
    }
    .outofstock__txtBtn {
      display: inline-block;
      padding: 5px;
    }
    #deliveryPromise {
      width: 100%;
    }
    .hidden {
      display: none;
    }
    .deliveryPromise {
      background: #fff;
      padding: 20px 10px;
      margin: 0;
      border-bottom: 1px solid #ececec;
      font-size: 14px;
      position: relative;
      z-index: 1;
    }
    .deliveryPromise__cta {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      line-height: 1.5;
    }
    .deliveryPromise__info {
      margin-top: 10px;
    }
    .deliveryPromise__info.disabled {
      color: #444;
    }
    .deliveryPromise__info strong {
      color: var(--omnisell-CartTextColor);
      font-weight: 700;
      display: inline-block;
    }
    .deliveryPromise .counter {
      font-weight: 700;
      width: 82px;
      display: inline-block;
    }
    .deliveryPromise .counter.hurry {
      color: #c33;
    }
    .deliveryPromise .counter.hurry.disabled {
      color: #444;
    }
    .deliveryPromise__loader {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      background-color: hsla(0, 0%, 100%, 0.75);
    }
    .citiesSelector .icon-pin {
      width: 20px;
      height: 20px;
      margin: 0 -3px;
    }
    .citiesSelector select {
      background: transparent;
      font-weight: 700;
      border: none;
      border-bottom: 2px solid #ddd;
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: url(/web-mobile/3a44a58a726a3b4ea96d5f914e4784ad.png) 100%/17px
        no-repeat;
      padding-right: 15px;
      font-size: 14px;
    }
    .citiesSelector select::-ms-expand {
      display: none;
    }
    .customDelivery {
      background: #fff;
      border-bottom: 1px solid #ececec;
      width: 100%;
      padding: 10px;
      font-size: 14px;
      color: #c4633d;
    }
    .ProductRow__price,
    .ProductRow__special-price {
      font-weight: 700;
      font-size: 1.2em;
      color: var(--omnisell-CartTextColor);
      margin-right: 5px;
    }
    .ProductRow {
      margin: 15px;
      display: flex;
    }
    .ProductRow__img-wrapper {
      height: 70px;
    }
    .ProductRow__img-wrapper > img {
      max-height: 100%;
      max-width: 100%;
    }
    .ProductRow__details {
      flex: 2;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .ProductRow__subtitle {
      color: #666;
      margin-bottom: 15px;
    }
    .ProductRow__title {
      font-size: 1.1em;
      font-weight: 700;
    }
    .ProductRow__price-wrapper {
      display: flex;
      flex-direction: row;
      align-items: baseline;
    }
    .ProductRow__price--striked {
      text-decoration: line-through;
      color: #999;
      font-size: 0.9em;
      font-weight: 400;
    }
    .ProductRow__special-price {
      margin-left: 10px;
    }
    .ProductRow__vat-notice {
      font-size: 0.75em;
      color: #666;
    }
    .ProductRow__coins {
      font-size: 0.9em;
      color: #fb9285;
    }
    .ProductRow__close {
      flex-basis: 20px;
      justify-content: center;
      display: flex;
      font-size: 30px;
      align-items: flex-start;
      margin-top: -9px;
      font-weight: 100;
      max-height: 30px;
      cursor: pointer;
    }
    .SelectSize__msg-wrapper {
      padding: 10px 0;
      width: 100%;
      height: 12px;
      max-height: 32px;
      font-weight: 700;
    }
    .SelectSize__msg-wrapper .msg-lowstock {
      color: #ed141e;
    }
    .SelectSize__msg-wrapper .msg-subscribed {
      color: #188c0e;
    }
    .SelectSize__btn-wrapper {
      margin: 0 0 10px;
      display: flex;
      align-self: stretch;
    }
    .SelectSize__btn {
      flex-grow: 1;
      padding: 12px;
      display: flex;
      justify-content: center;
      font-size: 1.5em;
      border-radius: 2px;
      background-color: var(--omnisell-CartTextColor);
      border: none;
      color: #fff;
      font-family: apercu, Arial, Helvetica, sans-serif;
      font-weight: 700;
      cursor: pointer;
    }
    .SelectSize__btn--disabled {
      background-color: #ddd;
      color: #fff;
      cursor: not-allowed;
    }
    .Size__mail-icon {
      margin-left: 3px;
      background-image: url(/web-mobile/7b2bb3159a918c7f41d5a7c2f0bf2f3a.svg);
      height: 9px;
      width: 12px;
    }
    .Size__mail-icon--tick {
      background-image: url(/web-mobile/fb2af13246dcbc24746a900c029c08d5.svg);
      height: 14px;
      width: 17px;
      margin-left: 3px;
      margin-top: -5px;
    }
    .SizeSelection__loading {
      position: absolute;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      background-color: hsla(0, 0%, 100%, 0.7);
      z-index: 1;
    }
    .personalization__options {
      margin: 20px 0;
    }
    .personalization__options li {
      padding: 20px 0;
      font-size: 16px;
      text-align: center;
    }
    .personalized-text-input {
      display: flex;
      justify-content: center;
    }
    .personalized-input-field {
      width: 80%;
      font-size: 18px;
      border: none;
      border-bottom: 1px solid #000;
    }
    .personalizationModal-error {
      color: red;
      font-size: 12px;
    }
    #productRatingsBreakdown {
      background: #fff;
      margin: 10px 0;
      border: none;
      padding: 12px;
    }
    #productRatingsBreakdown .star {
      margin: 0 5px;
    }
    .product-ratings {
      margin: 10px 0;
      display: flex;
      align-items: center;
    }
    .product-ratings__visual {
      padding-right: 10px;
    }
    .product-ratings__stars-row,
    .product-ratings__visual {
      display: flex;
      align-items: center;
    }
    .percentage-bar__star {
      width: 22px;
      height: 22px;
      position: relative;
    }
    .percentage-bar__star-inner {
      background-image: url(/web-mobile/a74464883a41ae8706c87aa901bf670a.svg);
      background-size: contain;
      background-repeat: no-repeat;
      height: 17px;
      width: 17px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .star--half .percentage-bar__star-inner {
      background-image: url(/web-mobile/9b01ee6f5d50b483bdc5214f17175e28.svg);
    }
    .star--full .percentage-bar__star-inner {
      background-image: url(/web-mobile/d6479fd9603d6fd0225a0eac1a075a71.svg);
    }
    .product-ratings__avg {
      font-weight: 500;
      color: #000;
      font-family: apercu, Arial, Sans-Serif;
      font-size: 14px;
      padding-left: 10px;
      padding-top: 1px;
    }
    .product-ratings__total {
      border-left: 2px solid #666;
      padding-left: 10px;
      padding-top: 1px;
    }
    .ratings {
      border: 1px solid #e2e2e2;
    }
    .ratings__breakdown {
      padding: 20px 12px;
      display: flex;
      border-bottom: 1px solid #e2e2e2;
    }
    .ratings__input .starComponent {
      margin: 0 4px;
    }
    .ratings__input {
      padding: 20px;
    }
    .ratings__input-title {
      color: #333;
      text-align: center;
    }
    .ratings__input-subtitle {
      color: #666;
      padding: 10px 0;
      font-weight: 300;
      text-align: center;
    }
    .ratings__input-button {
      background: #000;
      color: #fff;
      padding: 10px 20px;
      margin-top: 20px;
      font-weight: 300;
      width: 100%;
      border: none;
    }
    .ratings-graphs {
      margin-left: 15px;
    }
    .ratings-stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .ratings-stat__avg-rating {
      color: #333;
      font-weight: 500;
      font-size: 46px;
      display: block;
    }
    .ratings-stat__total-ratings {
      color: #666;
      font-size: 13px;
    }
    .percentage-bar-graph {
      position: relative;
      background-color: #eee;
      border-radius: 4px;
      width: 155px;
      height: 8px;
      overflow: hidden;
      max-width: 34vw;
    }
    .percentage-bar-graph__inner {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background-color: #ffcd00;
    }
    .percentage-bar {
      display: flex;
      align-items: center;
      margin: 4px 0;
    }
    .percentage-bar__stars-count {
      display: flex;
      align-items: center;
      margin-right: 12px;
      justify-content: flex-end;
      width: 30px;
    }
    .percentage-bar__label {
      font-size: 13px;
      color: #333;
      padding-top: 1px;
      margin-right: 3px;
    }
    .percentage-bar-stat span {
      font-size: 13px;
      color: #333;
      font-weight: 300;
      margin-left: 9px;
    }
    .percentage-bar__star,
    .percentage-bar__star-inner {
      width: 12px;
      height: 14px;
    }
    .percentage-bar-stat__text--tiny {
      margin-left: 2px !important;
      font-size: 9px;
    }
    .checkmark.ratings__success-icon {
      width: 28px;
      height: 28px;
      margin: 20px auto 0;
    }
    .back-button-arrow {
      transform: rotate(90deg);
      margin-right: 10px;
    }
    .close-modal-button {
      flex-basis: 20px;
      justify-content: center;
      display: flex;
      font-size: 30px;
      align-items: flex-start;
      margin-top: -9px;
      font-weight: 100;
      max-height: 30px;
      cursor: pointer;
    }
    .back-to-sizes-button {
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
    .product-size-selection-bar {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .product-size-chart-button {
      text-decoration: none;
    }
    .size-chart {
      display: flex;
      flex-direction: column;
      margin: 15px;
    }
    .size-chart__action-bar {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      margin-bottom: 20px;
    }
    .size-chart__size-runs {
      margin-bottom: 5px;
      padding-bottom: 5px;
      border-bottom: 1px solid #eee;
      font-weight: 900;
    }
    .size-chart__sizes {
      font-weight: 400;
    }
    .size-chart-row {
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-flow: column;
      padding: 5px;
      text-align: center;
    }
    .size-chart__sizes .size-chart-row:nth-of-type(2n) {
      background: #f6f6f6;
    }
    .skywards_reward_miles {
      min-height: 30px;
      padding: 0 10px;
      border: 1px solid #ce3451;
      border-radius: 4px;
      color: #ce3451;
      font-size: 12px;
      display: flex;
      margin: 10px auto;
      justify-content: center;
      align-items: center;
      max-width: 210px;
    }
    .init-carousel-zoom {
      height: 100vh;
      z-index: 999;
    }
    .init-carousel-zoom img {
      height: 100vh;
      width: auto;
    }
    .stop-scrolling {
      height: 100%;
      overflow: hidden;
    }
    .close-fullscreen-btn {
      display: none;
      width: 42px;
      height: 42px;
      margin: 0;
      background: #fff;
      border-radius: 30px;
      box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
      justify-content: center;
      align-items: center;
      z-index: 1000;
      position: absolute;
      left: 20px;
      top: 10px;
    }
    .btn-show {
      display: flex;
    }
    .ab_percentageDiscountTag .product-brief .reduction_tag {
      font-size: 12px;
    }
    .ab_percentageDiscountTag .reduction_tag_wrapper {
      margin: 5px 0;
    }
    .ab_percentageDiscountTag .reduction_message {
      font-weight: 300;
      color: #666;
    }
    #productGWPTag {
      position: relative;
      top: -1px;
    }
    .gwp-modal {
      max-height: 70vh;
      overflow-y: scroll;
    }
    .product-gwp-tag {
      padding: 15px 0 15px 15px;
      display: flex;
      align-items: center;
      border-top: 6px solid #f9f9f9;
      border-bottom: 6px solid #f9f9f9;
    }
    .product-gwp-message {
      color: #db6b37;
      font-size: 15px;
      font-family: apercu, Arial, Sans-Serif;
      font-weight: 500;
      padding-left: 10px;
    }
    .product-gwp-icon {
      background-image: url(/web-mobile/ce287f5a516b17a7c8425eee26d2545e.svg);
      width: 35px;
      height: 30px;
    }
    .product-gwp-icon,
    .product-gwp-right-icon {
      background-position: 50%;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .product-gwp-right-icon {
      background-image: url(/web-mobile/10cb42dbe537aea0de7c895b54aeef75.svg);
      height: 15px;
      width: 15px;
      position: absolute;
      right: 10px;
    }
    .gwp-modal__title-bar {
      margin: 20px 0;
      position: relative;
    }
    .gwp-modal__close-btn {
      width: 30px;
      height: 15px;
      background-image: url(/web-mobile/ea086c3c950c56d8a3c2b1be01004819.svg);
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
      position: absolute;
      left: 15px;
    }
    .gwp-modal__title {
      font-size: 14px;
      font-family: apercu, Arial, Sans-Serif;
      text-align: center;
      font-weight: 400;
      color: #333;
      margin: 5px 0 20px;
    }
    .gwp-modal__tnc {
      margin: 20px 0;
    }
    .gwp-modal__image-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .gwp-modal__image {
      max-width: 100%;
    }
    .gwp-modal__tnc-condition {
      list-style-type: decimal;
      list-style-position: inside;
    }
    .gwp-modal__tnc-condition li {
      padding: 5px 0;
      text-align: center;
    }
    .page-wrapper.static {
      background: #fff;
      display: block;
    }
    #site_footer a {
      display: block;
      font-size: 12px;
    }
    #site_footer .contact_container li a,
    ul#footer_menu a,
    ul.footer_menu a {
      font-size: 10px;
      font-weight: 100;
      color: #222;
    }
    #site_footer .contact_container li {
      padding: 10px 0;
      display: inline-block;
    }
    .sidebar-list .footer-badges-container__icons {
      display: flex;
      width: 200px;
      margin: 0 auto 16px;
    }
    .sidebar-list .footer-badges-container__icons a {
      flex: 1;
      margin-right: 10px;
    }
    .ar .sidebar-list .footer-badges-container__icons a {
      margin-right: 0;
      margin-left: 10px;
    }
    .sidebar-list .footer-badges-container__icons img,
    .sidebar-list .footer-badges-container__icons svg {
      width: 100%;
      height: auto;
    }
    ul#footer_menu li,
    ul.footer_menu li {
      display: inline-block;
    }
    ul#footer_menu li.logout a:before,
    ul.footer_menu li.logout a:before {
      border: 0;
    }
    ul#footer_menu a,
    ul.footer_menu a {
      padding: 4px;
      position: relative;
    }
    ul#footer_menu a:before,
    ul.footer_menu a:before {
      content: '';
      border-right: 1px solid #222;
      padding: 5px 0;
      position: absolute;
      left: -3px;
      top: 6px;
    }
    .ar ul#footer_menu a:before,
    .ar ul.footer_menu a:before {
      left: auto;
      right: -3px;
    }
    ul#footer_menu li:first-child a:before,
    ul.footer_menu li:first-child a:before {
      border: 0;
    }
    .ar #site_footer .contact_container li a:before {
      margin-left: 6px;
      margin-right: 0;
    }
    #site_footer a.device_switch {
      font-weight: 500;
      margin-top: 7px;
    }
    .ar #site_footer a.device_switch {
      margin-top: 15px;
    }
    .cart {
      margin: 5px;
      padding: 10px;
      line-height: 16px;
    }
    .cart-error {
      color: red;
      text-align: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.5s;
    }
    .cart-error.is-visible {
      padding: 20px 10px;
      border: 1px solid red;
      opacity: 1;
      transition: opacity 0.5s;
    }
    .cart-empty-title {
      text-align: center;
      font-size: 15px;
      padding: 20px 0;
      color: #666;
    }
    .cart-overview {
      position: relative;
      min-height: 150px;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    .cart-overview__item .product-overview {
      margin-top: 0;
      padding: 10px;
    }
    .cart-button-label,
    .cart-loader {
      position: absolute;
      display: flex;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
    .cart-button-label {
      transform: scale(1.4);
      transition: transform 0.3s ease-out, opacity 0.2s ease-out;
    }
    .cart-button-label.is-visible {
      transform: none;
    }
    .product-overview {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-bottom: 15px;
      border-bottom: 1px dotted #ebeded;
      margin-top: 15px;
      position: relative;
    }
    .product-overview:last-child {
      border: none;
    }
    .product-overview.is-loading:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: hsla(0, 0%, 100%, 0.75);
    }
    .product-overview.is-loading .loading {
      z-index: 1;
    }
    .product-overview-link {
      width: 40%;
      text-align: center;
      position: relative;
    }
    .product-overview-link-image {
      max-height: 100%;
      height: 100px;
    }
    .product-overview-link-image:before {
      content: ' ';
      position: absolute;
      height: 100%;
      width: 100%;
      background: #eee;
      left: 0;
      top: 0;
    }
    .product-overview-details {
      margin-left: 20px;
      width: 60%;
    }
    .details-brand,
    .details-description,
    .details-personalization-text,
    .details-price,
    .details-size,
    .overview-cod_fees,
    .overview-shipping,
    .overview-subtotal,
    .overview-total {
      text-transform: uppercase;
      color: #666;
      font-size: 12px;
      margin-bottom: 5px;
    }
    .details-brand {
      font-weight: 700;
      color: #000;
    }
    .details-edit-initials {
      background-image: url(/web-mobile/29ffe03eb14bf7c01b848caded589df7.svg);
      width: 15px;
      height: 15px;
      margin-left: 5px;
      background-position: 50%;
      background-size: contain;
      background-repeat: no-repeat;
      display: inline-block;
    }
    .price-value.is-reduced {
      text-decoration: line-through;
      margin-right: 5px;
    }
    .details-actions {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 10px;
    }
    .details-actions-quantity {
      border: 1px solid #a2a2a2;
      font-size: 14px;
      color: #4c4c4c;
      width: 40px;
      padding-left: 10px;
      line-height: 30px;
      text-decoration: none;
      overflow: hidden;
      height: 30px;
      position: relative;
    }
    .details-actions-quantity select {
      position: absolute;
      left: 0;
      border: none;
      right: 0;
      width: 100%;
      height: 30px;
      text-indent: 5px;
      background: #fff;
      -webkit-appearance: none;
    }
    .details-actions-quantity:after {
      content: ' ';
      width: 12px;
      height: 12px;
      display: inline-block;
      background: url(/web-mobile/92c530b28e96b2c30e1c1199bb44ab60.png);
      background-size: contain;
      background-repeat: no-repeat;
      vertical-align: middle;
      position: absolute;
      right: 7px;
      top: 10px;
      pointer-events: none;
    }
    .details-actions-delete {
      border: 1px solid #a2a2a2;
      padding: 7px 10px;
      font-size: 14px;
      height: 16px;
      color: #4c4c4c;
      transition: all 0.2s;
      float: left;
      margin: 0 10px;
    }
    .cost-overview {
      margin-top: 20px;
      padding-top: 10px;
      border-top: 1px solid #ebeded;
    }
    .overview-cod_fees,
    .overview-shipping,
    .overview-subtotal,
    .overview-total {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
    }
    .overview-shipping {
      font-weight: 900;
      color: #2560a9;
    }
    .overview-total {
      border-bottom: 1px solid #ebeded;
      padding-bottom: 10px;
    }
    .overview-duties {
      display: flex;
      justify-content: flex-end;
      text-transform: uppercase;
      font-size: 11px;
    }
    .cart-addToCart,
    .cart-blockBtn {
      margin: 10px 0;
      text-decoration: none;
      background: var(--omnisell-ButtonColor);
      color: #fff;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
    }
    .cart-returnToCatalog {
      margin-top: 15px;
      padding: 5px;
      color: #551a8b;
      display: inline-block;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
    }
    .cart-retry-button {
      margin: 10px 0;
      text-decoration: none;
      background: #444;
      color: #fff;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      border-radius: 4px;
      border: none;
    }
    .cart-certification {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .mastercard,
    .trustwave,
    .visa {
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50%;
      margin: 0 6%;
      width: 33.3%;
      height: 50px;
    }
    .visa {
      background-image: url(/web-mobile/e5664491aba102b39cf6c60e4c58bcf9.png);
    }
    .mastercard {
      background-image: url(/web-mobile/5261e0e8c0c8ecb43a474374ff5d8929.png);
    }
    .trustwave {
      background-image: url(/web-mobile/b36d904468e0dfdb4b6c7fde923171a2.png);
    }
    .icon-delete {
      background-image: url(/web-mobile/5290a108b8b22e678dbee02b36bb9b15.png);
      width: 15px;
      height: 15px;
    }
    p.delivery_warning {
      text-align: center;
      border: 2px solid #222;
      color: #222;
      font-size: 12px;
      margin: 12px 0;
      padding: 8px 12px;
    }
    p.delivery_warning span.attention {
      display: block;
      color: #d08c03;
      font-size: 16px;
    }
    p.delivery_warning span {
      text-transform: uppercase;
      font-weight: 700;
    }
    .cartSlider {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 9998;
      pointer-events: none;
    }
    .cartSlider-wrapper {
      padding: 15px 10px;
      overflow-y: scroll;
      pointer-events: visible;
      transform: translate(150vw);
      background: #fff;
      box-shadow: 0 0 33px rgba(0, 0, 0, 0.4);
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
      width: 80vw;
      transition: transform 0.5s;
      z-index: 200;
    }
    .cartSlider-wrapper--fullwidth {
      width: 92vw;
    }
    .cartSlider-wrapper .cart {
      box-shadow: none;
      margin: 0;
      padding: 0;
    }
    .cartSlider-wrapper .cart-overview {
      max-height: 40vh;
      overflow: scroll;
    }
    .cartSlider-wrapper .cost-overview {
      position: relative;
      z-index: 3;
    }
    .cartSlider-wrapper .cost-overview:before {
      content: ' ';
      right: 0;
      z-index: -1;
      width: 100%;
      position: absolute;
      height: 1px;
      background: #fff;
      box-shadow: 0 -13px 34px 33px #fff;
    }
    .cart-empty {
      padding: 10px;
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      width: 100%;
    }
    .cart-icon {
      opacity: 0.5;
      margin: 10px 0;
      height: 40px;
      width: 40px;
    }
    .cart-retry {
      margin-top: 60px;
    }
    .cartSlider-header {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;
      justify-content: flex-start;
      padding-bottom: 10px;
      font-weight: 500;
    }
    .cartSlider-header-close {
      opacity: 0.7;
    }
    .cartSlider-header-title {
      text-align: center;
      width: 100%;
      font-size: 14px;
      text-transform: uppercase;
    }
    .cart-is-open .cartSlider-wrapper {
      transform: translate(0);
    }
    .cart-is-open .overlay {
      opacity: 1;
      z-index: 100;
      pointer-events: auto;
    }
    .cartDeliveryPromise {
      padding: 10px 0;
      text-align: center;
      font-size: 14px;
      position: relative;
      z-index: 1;
    }
    .cartDeliveryPromise p {
      line-height: 1.5em;
    }
    .cartDeliveryPromise__main {
      font-size: 15px;
    }
    .cartDeliveryPromise__main strong {
      color: #2560a9;
      font-weight: 700;
      display: inline-block;
    }
    .home {
      min-height: 100%;
      width: 100%;
    }
    .home-wrapper {
      min-height: 60%;
      width: 100%;
      position: relative;
    }
    .home-bgImage {
      max-width: 100%;
    }
    .home-wrapper__usps {
      padding: 15px 0;
      text-align: center;
      font-size: 20px;
      color: #fff;
      background: #000;
      font-weight: 600;
    }
    .home-wrapper__usps .slim-slide {
      min-width: 100% !important;
      line-height: 30px;
    }
    .home-wrapper__usps .carousel-buttons,
    .home-wrapper__usps .carousel-pagination {
      display: none;
    }
    #site_footer {
      text-align: center;
      background-color: #fff;
      border-top: 1px solid #ebeded;
      padding: 25px 0;
    }
    .footer-badges-container h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .footer-badges-container__icons {
      display: flex;
      width: 330px;
      margin: 0 auto 16px;
    }
    .footer-badges-container__icons a {
      flex: 1;
      margin-right: 10px;
    }
    .footer-badges-container__icons img,
    .footer-badges-container__icons svg {
      width: 100%;
      height: auto;
    }
    .msg_container {
      padding-top: 12px;
    }
    .msg_container span {
      height: 54px;
      width: 100px;
      display: inline-block;
      background-position: 0 0;
      background-repeat: no-repeat;
      background-image: url(/web-mobile/9e399ba9ad6659848a7df37c93b37ad1.jpg);
      background-size: 343px auto;
      padding: 0 10px;
    }
    .msg_container span.shopOnTheGo {
      background-position: -118px 0;
    }
    .msg_container span.secureShopping {
      background-position: -237px 0;
    }
    .contact_container {
      padding-top: 12px;
    }
    .contact_container h3 {
      margin-bottom: 4px;
      color: #222;
      font-weight: 900;
      font-size: 12px;
      text-transform: uppercase;
    }
    .footer_menu {
      padding-top: 12px;
    }
    .footer_menu li {
      padding: 10px 0;
      display: inline-block;
    }
    .footer_menu li a {
      display: block;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 100;
      color: #222;
      text-decoration: none;
    }
    #site_footer a.device_switch,
    .copyright {
      font-size: 16px;
      font-weight: 600;
      color: #222;
    }
    #site_footer a.device_switch {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
    @-webkit-keyframes slideUpCookieAlert {
      0% {
        transform: translate3d(0, 200%, 0);
      }
      to {
        transform: translateZ(0);
      }
    }
    @keyframes slideUpCookieAlert {
      0% {
        transform: translate3d(0, 200%, 0);
      }
      to {
        transform: translateZ(0);
      }
    }
    @-webkit-keyframes slideDownCookieAlert {
      0% {
        transform: translateZ(0);
      }
      to {
        transform: translate3d(0, 200%, 0);
      }
    }
    @keyframes slideDownCookieAlert {
      0% {
        transform: translateZ(0);
      }
      to {
        transform: translate3d(0, 200%, 0);
      }
    }
    .cookieAlert {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #474252;
      color: #fff;
      padding: 10px 20px;
      font-size: 14px;
      -webkit-animation: slideUpCookieAlert 0.75s linear;
      animation: slideUpCookieAlert 0.75s linear;
      z-index: 999999;
      line-height: 1.3em;
      display: flex;
      align-items: center;
    }
    .cookieAlert a {
      color: #b8b1ff;
      font-weight: inherit;
      text-transform: lowercase;
      text-decoration: none;
    }
    .cookieAlert--closed {
      -webkit-animation: slideDownCookieAlert 0.75s linear;
      animation: slideDownCookieAlert 0.75s linear;
      transform: translate3d(0, 200%, 0);
    }
    .cookieAlert__btn {
      background-color: #2560a9;
      color: #fff;
      width: 25px;
      height: 25px;
      border: 0;
      border-radius: 50%;
      margin: 0 15px;
      padding: 0;
      outline: none;
      font-size: 20px;
      position: relative;
      bottom: -1px;
    }
    .cookieAlert__btn:hover {
      background-color: #3da58f;
    }
    .site-footer {
      display: flex;
      background-color: #fff;
      min-height: 300px;
      flex-direction: column;
    }
    .site-footer__social-icons {
      display: inline-flex;
      align-items: center;
      flex-direction: row;
      margin-bottom: 20px;
    }
    .site-footer__social-icon {
      height: 30px;
      width: 30px;
      margin: 0 30px 0 0;
      cursor: pointer;
    }
    .ar .site-footer__social-icon {
      margin-left: 20px;
      margin-right: 0;
    }
    .site-footer__social-icon.instagram {
      height: 25px;
      width: 25px;
    }
    .site-footer__social-icon.twitter {
      height: 35px;
      width: 35px;
    }
    .site-footer__social-icon.youtube {
      height: 40px;
      width: 40px;
    }
    .gender-tabs {
      position: fixed;
      top: 50px;
      height: 50px;
      z-index: 2;
      justify-content: space-around;
      border-top: 1px solid rgba(0, 0, 0, 0.07);
    }
    .gender-tabs,
    .gender-tabs-gender {
      width: 100%;
      display: flex;
      align-items: center;
    }
    .gender-tabs-gender {
      justify-content: center;
      height: 100%;
      border-bottom: 3px solid transparent;
      margin-bottom: -8px;
    }
    .gender-tabs-gender.is-selected {
      border-bottom: 3px solid #2560a9;
    }
    .gender-tabs-gender-link {
      text-transform: uppercase;
      text-decoration: none;
      color: #000;
      font-size: 14px;
    }
    .categoryTree {
      min-width: 100%;
    }
    .categoryTree-category {
      display: block;
    }
    .categoryTree-category:last-of-type .categoryTree-category-link {
      border: none;
    }
    .categoryTree-category-link {
      color: #000;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;
      display: block;
      padding: 12px 20px;
      font-size: 13px;
      border-bottom: 1px solid #f1f1f1;
      position: relative;
      display: flex;
      align-items: center;
    }
    .icon-category {
      margin-right: 10px;
    }
    .arrow {
      margin-left: auto;
      transition: transform 0.1s;
    }
    .is-open .arrow {
      transform: rotate(180deg);
    }
    .submenu {
      overflow: hidden;
      transition: height 0.3s;
    }
    .submenu-item-link {
      display: block;
      border-bottom: 1px solid #f1f1f2;
      text-decoration: none;
      color: #000;
      padding: 12px 20px 12px 54px;
    }
    .page-wrapper .navigation {
      height: 50px;
      position: sticky;
      position: -webkit-sticky;
      top: 50px;
      width: 100%;
      z-index: 10;
    }
    .navigation-tabs {
      height: 50px;
      z-index: 2;
      justify-content: space-around;
      border-top: 1px solid rgba(0, 0, 0, 0.07);
    }
    .navigation-tab,
    .navigation-tabs {
      width: 100%;
      display: flex;
      align-items: center;
    }
    .navigation-tab {
      justify-content: center;
      height: 100%;
      border-bottom: 3px solid transparent;
      margin-bottom: -8px;
    }
    .navigation-tab.is-selected {
      border-bottom: 3px solid #2560a9;
    }
    .navigation-link {
      text-transform: uppercase;
      text-decoration: none;
      color: #000;
      font-size: 15px;
    }
    .message {
      margin: 10px;
      padding: 15px 10px;
    }
    .message-error {
      text-align: center;
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .error-image {
      background: url(/web-mobile/7de18eae4d271de20e96c86ec48fe52a.png);
      width: 200px;
      height: 200px;
    }
    .error-title {
      font-size: 24px;
      margin: 10px 0;
      color: #a2a2a2;
      line-height: 31px;
    }
    .error-text {
      font-size: 14px;
    }
    .no-results .no-results-title {
      font-size: 14px;
      font-weight: 500;
      margin: 20px;
      text-align: center;
    }
    .no-results .column {
      display: flex;
    }
    .no-results .full_width {
      width: 100%;
    }
    .no-results .one_half {
      width: 50%;
    }
    .no-results img {
      max-width: 100%;
      height: auto;
    }
    .page_500 .maintain-image {
      background: url(/web-mobile/d2b560b38d2edb2db89dd0a59e8def47.jpg);
      width: 320px;
      height: 480px;
      align-self: center;
    }
    .error-search-products {
      width: 100%;
    }
    .error-search-products .search-options {
      box-shadow: none;
    }
    .search {
      width: 100%;
      padding: 0;
      position: relative;
      border: 1px solid rgba(0, 0, 0, 0.12);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
      background: #fff;
      border-radius: 3px;
    }
    .search .icon-search {
      position: absolute;
      width: 22px;
      opacity: 0.4;
      top: 12px;
      right: 18px;
    }
    .search-wrapper {
      width: 100%;
      box-sizing: border-box;
    }
    .search-options-wrapper {
      margin-top: 10px;
    }
    .search-options {
      padding: 8px 5px;
    }
    .search-options a {
      padding-bottom: 5px;
    }
    .search-options .row:last-child a {
      padding-bottom: 0;
    }
    .search-view {
      justify-content: center;
      padding: 10px;
    }
    .search-text {
      width: 100%;
    }
    .search-overlay {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      background: #fafafa;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transform: translateY(80px);
      transition: opacity 0.1s, transform 0.3s;
    }
    .search-overlay.is-visible {
      transform: none;
    }
    .search-view-wrapper {
      transition: opacity 0.2s, transform 0.2s;
      transform: translateY(-70px);
    }
    .search-view-wrapper.is-visible {
      transform: none;
    }
    .search-view-trending {
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }
    .search-header {
      background: #fff;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);
      position: relative;
      z-index: 2;
      flex-shrink: 0;
      height: 50px;
    }
    .search-header,
    .search-header-wrapper {
      align-items: center;
      width: 100%;
      display: flex;
    }
    .search-header-wrapper {
      height: 100%;
    }
    .search-content {
      overflow-y: auto;
      overflow-x: hidden;
      width: 100%;
    }
    .search-box {
      height: 100%;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 15px;
    }
    .search-box-input {
      height: 100%;
      border: none;
      width: 100%;
      font-size: 16px;
      text-indent: 2px;
      font-family: inherit;
    }
    .search-box-input:focus {
      outline: 0;
    }
    .search-box-input:focus::-webkit-input-placeholder {
      color: #222;
    }
    .search-box-input:focus:-moz-placeholder,
    .search-box-input:focus::-moz-placeholder {
      color: #222;
      opacity: 1;
    }
    .search-box-input:focus:-ms-input-placeholder {
      color: #222;
    }
    .search-close {
      height: 100%;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .search-input {
      width: calc(100% - 32px);
      height: 45px;
      border: none;
      font-size: 17px;
      box-shadow: 0 3px 5px transparent;
      transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
      -webkit-appearance: none;
      background: transparent;
      padding: 0 15px;
      font-family: inherit;
    }
    .search-input:focus {
      outline: 0;
    }
    .search-input:focus::-webkit-input-placeholder {
      color: #222;
    }
    .search-input:focus:-moz-placeholder,
    .search-input:focus::-moz-placeholder {
      color: #222;
      opacity: 1;
    }
    .search-input:focus:-ms-input-placeholder {
      color: #222;
    }
    .search-suggestions {
      display: flex;
      flex-direction: column;
      color: #a9a9a9;
    }
    .fl-search__list-item {
      color: #a9a9a9;
    }
    .fl-search__list-item strong,
    .search-suggestions strong {
      font-weight: 700;
      color: #444;
    }
    .search-suggestions-item {
      padding: 15px 10px;
      background-color: #fff;
      cursor: pointer;
      border-bottom: 1px solid #f1f1f1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 40px;
    }
    .search-suggestions-item:first-child {
      border-top: 1px solid #e2e2e2;
    }
    .search-suggestions-item .icon-results {
      margin: 0 10px;
      opacity: 0.2;
    }
    .search-suggestions-item a {
      text-decoration: none;
      color: #a9a9a9;
      font-size: 13px;
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
    }
    .search-trending {
      display: flex;
      flex-direction: column;
      padding-top: 14px;
      width: 100%;
      margin-top: 15px;
    }
    .search-trending.is-hidden {
      position: absolute;
    }
    .search-trending .search-trending-title {
      text-indent: 6px;
      padding: 10px;
      font-weight: 500;
      font-size: 15px;
      color: #4c4c4c;
    }
    .search-trending-list-item {
      display: block;
      font-size: 14px;
    }
    .search-trending-list-item:last-child {
      border-bottom: none;
    }
    .search-trending-list-link {
      text-decoration: none;
      color: #333;
      padding: 15px;
      display: block;
    }
    .search-trending-list-trend {
      text-indent: 10px;
      display: inline-block;
    }
    .no-result-search .search-text {
      padding-bottom: 0;
    }
    .search-loading {
      position: absolute;
      height: 30px;
      width: 30px;
      right: 0;
      background-color: #fff;
      top: 10px;
      background-size: contain;
    }
    .fl-search-modal.overlay {
      z-index: 100;
    }
    .fl-search-modal__content {
      z-index: 1;
      background: #fff;
      margin: 10px 15px;
      position: relative;
      top: 40px;
      font-size: 15px;
      pointer-events: none;
      transform: translateX(100vw);
      transition: transform 0.5s;
    }
    .fl-search-modal__content--visible {
      pointer-events: all;
      transform: translateX(0);
      transition: transform 0.5s;
      box-shadow: 0 5px 10px #333;
    }
    .fl-search__text-wrapper {
      position: relative;
      display: flex;
      padding: 10px;
      background-color: #ccc;
    }
    .fl-search__text {
      flex-grow: 1;
      padding: 10px;
      border: none;
      border-radius: 10px;
    }
    .fl-search__text:focus {
      outline: none;
    }
    .fl-search__text-btns {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      bottom: 0;
      right: 20px;
    }
    .fl-search__text-btns .loader {
      padding: 0 10px;
    }
    .fl-search__text-btns .loading {
      width: 15px;
      height: 15px;
    }
    .fl-search__result-wrapper {
      margin: 5px 0;
    }
    .fl-search__list-title {
      padding: 10px 15px;
      text-transform: uppercase;
      color: #888;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .fl-search__list {
      overflow-y: scroll;
      max-height: calc(100vh - 120px);
    }
    .fl-search__list::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    .fl-search__list-item {
      padding: 10px 15px;
      border-bottom: 1px solid #eee;
    }
    .fl-search__list-clear {
      display: inline-flex;
      width: 15px;
      height: 15px;
      background: #ddd;
      justify-content: center;
      border-radius: 50%;
      color: #fff;
      align-items: center;
    }
    .ar .fl-search-modal__content {
      transform: translateX(-100vw);
    }
    .ar .fl-search-modal__content--visible {
      transform: translateX(0);
    }
    .ar .fl-search__text-btns {
      right: auto;
      left: 20px;
    }
    @-webkit-keyframes animate-wishlist {
      0% {
        opacity: 0;
        transform: translateY(100%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes animate-wishlist {
      0% {
        opacity: 0;
        transform: translateY(100%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @-webkit-keyframes animate-wishlist-remove {
      0% {
        opacity: 1;
        transform: translateX(0);
      }
      20% {
        opacity: 0.5;
      }
      to {
        opacity: 0;
        transform: translateX(100%);
      }
    }
    @keyframes animate-wishlist-remove {
      0% {
        opacity: 1;
        transform: translateX(0);
      }
      20% {
        opacity: 0.5;
      }
      to {
        opacity: 0;
        transform: translateX(100%);
      }
    }
    @-webkit-keyframes animate-wishlist-renter {
      0% {
        opacity: 0;
        transform: translateX(100%);
      }
      60% {
        opacity: 0.2;
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes animate-wishlist-renter {
      0% {
        opacity: 0;
        transform: translateX(100%);
      }
      60% {
        opacity: 0.2;
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .wishlist {
      position: absolute;
      right: 6px;
      top: 6px;
      z-index: 1;
      height: 45px;
      width: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .list-product:nth-child(odd) .wishlist {
      right: 3px;
    }
    .wishlist-button {
      background-color: transparent;
      border: none;
      height: 100%;
      transition: opacity 0.3s, transform 0.3s ease-out;
      transform: scale(0);
      opacity: 0;
    }
    .wishlist-button:active,
    .wishlist-button:focus {
      outline: none;
    }
    .wishlist-button.active .wishlist-icon {
      fill: #2560a9;
      stroke: none;
    }
    .wishlist-icon {
      fill: transparent;
      stroke: rgba(0, 0, 0, 0.3);
    }
    .wishlist-items {
      width: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      padding: 7px 10px;
      box-sizing: border-box;
      transform: none;
      transition: transform 0.3s;
      transition-delay: 1s;
    }
    .wishlist-items.remove {
      transform: translateY(-180px);
    }
    .wishlist-count {
      text-align: center;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #777;
      font-size: 13px;
      font-weight: 500;
    }
    .wishlist-item {
      position: relative;
      min-height: 100px;
      margin-bottom: 10px;
      background: #fff;
      padding: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
      opacity: 0;
      will-change: opacity, transform;
    }
    .wishlist-item.enter {
      -webkit-animation-name: animate-wishlist;
      animation-name: animate-wishlist;
      -webkit-animation-duration: 0.5s;
      animation-duration: 0.5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .wishlist-item.re-enter {
      -webkit-animation-name: animate-wishlist-renter;
      animation-name: animate-wishlist-renter;
      -webkit-animation-duration: 0.4s;
      animation-duration: 0.4s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-delay: 0s !important;
      animation-delay: 0s !important;
    }
    .wishlist-item.leave {
      -webkit-animation-name: animate-wishlist-remove;
      animation-name: animate-wishlist-remove;
      -webkit-animation-duration: 0.3s;
      animation-duration: 0.3s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-delay: 0s !important;
      animation-delay: 0s !important;
    }
    .wishlist-loadingmore {
      height: 70px;
      font-size: 12px;
      font-weight: 500;
      color: #777;
      position: fixed;
      left: 0;
      background: #f5f5f5;
      z-index: 10;
    }
    .wishlist-empty,
    .wishlist-loadingmore {
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      width: 100%;
    }
    .wishlist-empty {
      flex-direction: column;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      overflow-x: hidden;
    }
    .wishlist-empty-text {
      padding: 0 20px;
      text-align: center;
      line-height: 1.5;
      font-size: 14px;
      color: #777;
    }
    .wishlist-wrapper {
      width: 100%;
      overflow-x: hidden;
    }
    .wishlist-item-link {
      display: flex;
      text-decoration: none;
    }
    .wishlist-item-image-wrapper {
      width: 22%;
      flex-shrink: 0;
      align-self: center;
    }
    .wishlist-item-image {
      max-width: 100%;
    }
    .wishlist-item-info {
      padding: 0 15px;
      color: #000;
    }
    .wishlist-item-brand {
      font-size: 15px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 3px;
      margin-top: 11px;
      line-height: 1.5;
    }
    .wishlist-item-name {
      text-transform: uppercase;
      color: #555;
      font-size: 11px;
      line-height: 1.5;
    }
    .wishlist-currency {
      font-size: 16px;
      font-weight: 700;
      margin-top: 7px;
    }
    .wishlist-catalog-tag {
      padding: 4px 3px;
      border: 1px solid #ccc;
      color: #000;
      font-size: 9px;
      margin: 10px 0;
      display: inline-block;
    }
    .wishlist-actions {
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: absolute;
      height: 50px;
    }
    .ar .wishlist-actions {
      right: unset;
      left: 0;
    }
    .wishlist-remove-button {
      border: 1px solid #a2a2a2;
      padding: 5px;
      font-size: 8px;
      height: 16px;
      color: #4c4c4c;
      margin: 0 5px;
    }
    .wishlist-empty-icon {
      height: 60px;
      width: 60px;
      margin-bottom: 25px;
      opacity: 0.4;
      display: inline-block;
      background-image: url(/web-mobile/99aa310e55f4339585d71eaa8f8cf4e9.png);
      background-size: cover;
    }
    .shopping-cart-icon {
      height: 60px;
      width: 60px;
      margin-bottom: 25px;
      opacity: 0.4;
      display: inline-block;
      background-image: url(/web-mobile/emptyCart.png);
      background-size: cover;
    }
    .wishlist-products-page {
      background: var(--omnisell-ButtonColor);
      display: inline-block;
      padding: 15px;
      color: #fff;
      margin-top: 40px;
      text-transform: uppercase;
      font-weight: 500;
      border-radius: 4px;
    }
    .wishlist-login {
      margin-top: 0;
      margin-bottom: 30px;
      text-decoration: none;
      text-transform: none;
      font-size: 14px;
    }
    .wishlist-returnToCatalog {
      padding: 5px;
      color: #551a8b;
      display: inline-block;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
    }
    .wishlist-visible .wishlist-button {
      opacity: 1;
      transform: none;
      position: absolute;
      top: 0;
    }
    .wishlist-visible .topbar-actions .wishlist {
      position: static;
    }
    .wishlist-outOfStock {
      margin: 5px 0;
      color: #d32f2f;
      font-size: 11px;
    }
    .offers-empty {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      bottom: 0;
    }
    .offers-wrapper {
      width: 100%;
      overflow-x: hidden;
    }
    .offers {
      position: fixed;
      display: flex;
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
      justify-content: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 20px;
      overflow-y: scroll;
      z-index: 100;
      align-items: center;
      min-height: calc(100vh - 100px);
    }
    .offers--inline {
      position: relative;
      z-index: auto;
      padding: 50px 30px;
    }
    .offers input[type='button'],
    .offers input[type='date'],
    .offers input[type='submit'],
    .offers input[type='tel'],
    .offers input[type='text'],
    .offers select,
    .offers textarea {
      -webkit-appearance: none;
      border-radius: 0;
      font-family: apercu, Arial, Sans-Serif;
    }
    .offers__close {
      display: flex;
      width: 23px;
      height: 23px;
      z-index: 101;
      justify-content: center;
      align-items: center;
      font-size: 35px;
      font-weight: 100;
      color: #fff;
      position: absolute;
      right: 10px;
      top: 10px;
    }
    .offers__heading {
      font-size: 27px;
      text-align: center;
      margin: 25px 0 0;
      color: rgba(208, 95, 76, 0.85);
    }
    .offers__container-bg {
      width: 260px;
      height: 300px;
      padding: 25px;
      position: relative;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .offers__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #f1f1f1;
      border: 3px solid #94adb6;
      border-radius: 5px;
      padding: 20px;
      position: relative;
      min-height: 250px;
    }
    .offers__ribbon {
      display: inline-block;
      width: 80px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAACDCAYAAACQlAVtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NDRlM2JkOC1kZDhhLTQwN2MtODkwMC0xOGQzMTA1YjkzN2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0IzMDM2QjM2N0NGMTFFODhGQzZDQ0Y1RDQ1M0M1MkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0IzMDM2QjI2N0NGMTFFODhGQzZDQ0Y1RDQ1M0M1MkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MzU0ZTg0Mi0yMTk2LTQ5MGUtYWIyNC1mYjA1MWViMWQyMWIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiMGE2N2EzMC1hNDljLTExN2ItYTU2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);
      height: 80px;
      position: absolute;
      background-size: 80px 80px;
      background-repeat: no-repeat;
    }
    .offers__ribbon--top {
      top: -56px;
      right: -15px;
    }
    .offers__ribbon--bottom {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAC9CAYAAABbGugAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NDRlM2JkOC1kZDhhLTQwN2MtODkwMC0xOGQzMTA1YjkzN2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0IzMDM2Qjc2N0NGMTFFODhGQzZDQ0Y1RDQ1M0M1MkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0IzMDM2QjY2N0NGMTFFODhGQzZDQ0Y1RDQ1M0M1MkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MzU0ZTg0Mi0yMTk2LTQ5MGUtYWIyNC1mYjA1MWViMWQyMWIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiMGE2N2EzMC1hNDljLTExN2ItYTU2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);
      left: -42px;
      bottom: -34px;
      transform: rotate(-10deg);
    }
    .offers__form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 14px;
    }
    .offers__form-section {
      padding: 5px 10px;
      flex: 1;
    }
    .offers__form-section-title {
      display: block;
      margin: 10px 0;
      font-size: 16px;
    }
    .offers__form-section-error {
      font-size: 11px;
      padding: 5px 0 0;
      color: red;
    }
    .offers__form-group-horizontal {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
    .offers__form-radio-group,
    .offers__form-select-group {
      display: flex;
      justify-content: space-between;
    }
    .offers__form-radio-group {
      justify-content: flex-start;
      margin-bottom: 8px;
    }
    .offers__form-radio-group > label {
      align-items: flex-end;
      justify-content: center;
      display: flex;
      flex-grow: 0.2;
      padding: 5px 0 0;
    }
    .offers__form-radio-group input[type='radio'] {
      margin: 0 10px;
      -webkit-appearance: radio;
    }
    .offers__form-input,
    .offers__form-select {
      padding: 6px;
      border: 1px solid #ccc;
      background-color: #fff;
    }
    .offers__form-input--invalid,
    .offers__form-select--invalid {
      border: 1px solid red;
    }
    .offers__form-select-wrapper {
      flex-grow: 0.3;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0 2px;
    }
    .offers__form-select {
      border-radius: 0;
      flex-grow: 1;
      max-height: 30px;
      width: 100%;
      padding: 9px;
      -moz-text-align-last: center;
      text-align-last: center;
    }
    .offers__form-select-label {
      display: block;
      margin: 5px 0;
      font-size: 11px;
      color: #999;
      white-space: nowrap;
    }
    .offers__form-select--arrow {
      position: relative;
    }
    .offers__form-select--arrow:after {
      content: '';
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 6px solid #666;
      position: absolute;
      right: 8px;
      top: 12px;
      pointer-events: none;
    }
    .offers__form-input {
      width: 100%;
      min-height: 30px;
    }
    .offers__form-button-wrapper {
      padding: 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .offers__form-button {
      display: inline-flex;
      padding: 10px;
      background-color: #2560a9;
      border: 1px solid #46a591;
      color: #fff;
      cursor: pointer;
    }
    .offers__tc {
      padding: 10px 0;
      display: flex;
      justify-content: center;
    }
    .offers__tc a {
      color: #333;
      text-decoration: none;
    }
    .offers__form-note {
      margin: 20px 10px 0;
      text-align: center;
    }
    .offers__form-note--large {
      font-size: 18px;
    }
    .toast {
      position: fixed;
      background: transparent;
      width: 100%;
      z-index: 9999999999;
    }
    .toast-bottom {
      left: 0;
      bottom: 50px;
      transform: translateY(5px);
      transition: opacity 0.25s, transform 0.3s ease-out;
    }
    .toast-bottom.is-visible {
      transform: none;
    }
    .toast-message {
      max-width: 92vw;
      margin: 0 auto;
      font-size: 12px;
      font-weight: 400;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .toast-message.is-visible {
      pointer-events: auto;
    }
    .toast-android {
      background: rgba(50, 50, 50, 0.92);
    }
    .toast-rounded {
      border-radius: 35px;
    }
    .toast-close {
      color: #d3e23f;
      text-transform: uppercase;
      font-size: 11px;
      display: flex;
      height: 45px;
      box-sizing: border-box;
      align-items: center;
      padding: 3px;
      margin-left: 10px;
    }
    .toast-message-text {
      padding: 12px 5px;
      line-height: 1.5;
    }
    .pushNotification {
      width: 100%;
    }
    .pushNotification_dialog {
      flex: 1;
      background-color: #fff;
      margin: 0 10px;
      display: flex;
      flex-direction: column;
      font-weight: 400;
      font-size: 12px;
    }
    .pushNotification_wrapper {
      padding: 50px 0;
      display: flex;
    }
    .pushNotification_icon {
      flex: 0.25;
      display: flex;
      align-self: center;
      justify-content: center;
    }
    .pushNotification_icon-bg {
      background: hsla(0, 0%, 93.3%, 0.44);
      border-radius: 50%;
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .pushNotification_prompt {
      flex: 0.75;
    }
    .pushNotification_message {
      flex: 0.8;
      align-items: center;
      font-size: 1.2em;
      line-height: 1.5em;
      margin-bottom: 15px;
    }
    .pushNotification_actions,
    .pushNotification_message {
      display: flex;
      justify-content: center;
    }
    .pushNotification_actions-decline {
      padding: 0 10px;
      font-size: 24px;
      text-transform: uppercase;
      text-decoration: none;
      color: #2560a9;
      position: relative;
      top: -5px;
    }
    .pushNotification_actions-accept {
      text-decoration: none;
      background: #2560a9;
      color: #fff;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      text-transform: uppercase;
      padding: 10px 20px;
    }
    .pushNotification-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .tabbar {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 1;
      border-top: 1px solid #ccc;
      background: #fff;
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    }
    .tabbar [class^='icon-'] {
      width: 26px;
      height: 26px;
    }
    .tabbar .icon-feed,
    .tabbar .icon-home {
      width: 28px;
      height: 28px;
      position: relative;
      top: 1px;
      background-image: url(/web-mobile/befec9b66b94bfaac6c11c5a28254da2.svg);
    }
    .tabbar .icon-home {
      background-image: url(/web-mobile/0dbaaeaeb5659709d27d90c35e013cd0.svg);
    }
    .tabbar .icon-search {
      background-image: url(/web-mobile/eaeb010be823021c0fdc6e0b50a3dedf.svg);
    }
    .tabbar .icon-categories {
      background-image: url(/web-mobile/610bf956b128cdefdd06b187a2fe6c6f.svg);
    }
    .tabbar .icon-favorites {
      top: 3px;
      background-image: url(/web-mobile/39239510a897230d9beb4a7dc85a8768.svg);
    }
    .tabbar .icon-favorites .tabbar__tip {
      top: -8px;
    }
    .tabbar .icon-bag {
      padding-top: 0;
      background-image: url(/web-mobile/54970c8e49f752b0c54d7d0d0c9c55c0.svg);
    }
    .tabbar .icon-bag .retry {
      top: 9px;
      right: 6px;
    }
    .tabbar .icon-my-account {
      width: 28px;
      height: 28px;
      background-image: url(/web-mobile/dfd232d49211c03c25006cfafc363043.svg);
    }
    .tabbar__tabslist {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .tabbar__tabslist li {
      padding: 6px;
      flex: 1;
    }
    .tabbar__tabslist li a {
      display: block;
      position: relative;
      outline: none;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .tabbar__tabslist li a i {
      position: relative;
    }
    .tabbar__tabslist li a span {
      display: block;
      color: #000;
      margin-top: 5px;
    }
    .tabbar__tabslist li a:active,
    .tabbar__tabslist li a:hover {
      -webkit-animation: scale 0.3s ease-in-out;
      animation: scale 0.3s ease-in-out;
    }
    .tabbar__tabslist li#active .icon-feed {
      background-image: url(/web-mobile/dd7ac076fdd3c48f5190fd9d96e3cb09.svg);
    }
    .tabbar__tabslist li#active .icon-home {
      background-image: url(/web-mobile/286239bcc1b508decb0ad310e4ba8dcb.svg);
    }
    .tabbar__tabslist li#active .icon-search {
      background-image: url(/web-mobile/06517d3dc3b9affd958a68f3fd851d81.svg);
    }
    .tabbar__tabslist li#active .icon-categories {
      background-image: url(/web-mobile/919bc202ee2b0c9d771bab071e300928.svg);
    }
    .tabbar__tabslist li#active .icon-favorites {
      background-image: url(/web-mobile/b1ebbc0e321fd0cb428dd4f8d1954b31.svg);
    }
    .tabbar__tabslist li#active .icon-bag {
      background-image: url(/web-mobile/120fd047b82864aabf16e6d5a69d9757.svg);
    }
    .tabbar__tabslist li#active .icon-my-account {
      background-image: url(/web-mobile/2d2899473202b16e70b90a4815bbcd51.svg);
    }
    .tabbar__tabslist li#active span {
      color: #dd1e26;
    }
    .tabbar__tabslist li#active {
      border-radius: 1vh;
      background-color: #d9ebff;
    }
    .tabbar__placeholder {
      height: 50px;
    }
    .tabbar .tabbar__tip {
      position: absolute;
      right: -10px;
      top: -5px;
      background: #a71717;
      background: linear-gradient(0deg, #a71717, #f80);
      color: #fff;
      border-radius: 50%;
      width: 19px;
      height: 19px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
    }
    .tabbar .tabbar__tip.animated {
      -webkit-animation: scale 0.3s ease-in-out;
      animation: scale 0.3s ease-in-out;
    }
    .applepay_wrapper {
      display: flex;
      align-items: center;
      flex: 1;
    }
    .applepay_wrapper .applepay_button_wrapper {
      flex-grow: 1;
    }
    .applepay_wrapper #applePay {
      flex: 1;
      margin-right: 10px;
    }
    .applepay_wrapper #applePay .apple-pay-button {
      width: 100%;
      height: 40px;
    }
    .applepay_wrapper .cta__addtocart {
      flex: 1;
    }
    .applepay--cart .applepay-cart-btnWrapper {
      flex: 1;
      margin-right: 10px;
    }
    .applepay--cart .apple-pay-button {
      width: 100%;
      height: 50px;
    }
    .applepay--cart .apple-pay-button .loader {
      margin: 14px 0;
    }
    .applepay--cart .cart-addToCart {
      flex: 1;
      border-radius: 4px;
    }
    .applepay--pdp {
      height: 100%;
    }
    .ar #applePay {
      margin-right: 0;
      margin-left: 10px;
    }
    .ar .apple-pay-button {
      -webkit-locale: 'ar';
    }
    .ar .applepay-cart-btnWrapper {
      margin-right: 0;
      margin-left: 10px;
    }
    [data-apple-pay-button] {
      display: none;
    }
    @supports (-webkit-appearance: -apple-pay-button) {
      .apple-pay-button {
        display: inline-block;
        -webkit-appearance: -apple-pay-button;
      }
      .apple-pay-button--setup {
        -apple-pay-button-type: set-up;
      }
      .apple-pay-button--loading {
        -webkit-appearance: none;
        background: #000;
        border-radius: 5px;
        position: relative;
        pointer-events: none;
        opacity: 0.6;
      }
      .apple-pay-button .loader {
        height: 10px;
        margin: 20px 0;
      }
      .apple-pay-button-black {
        -apple-pay-button-style: #000;
      }
      .apple-pay-button-white {
        -apple-pay-button-style: #fff;
      }
      .apple-pay-button-white-with-line {
        -apple-pay-button-style: white-outline;
      }
    }
    @supports not (-webkit-appearance: -apple-pay-button) {
      .apple-pay-button {
        display: inline-block;
        background-size: 100% 60%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        border-radius: 5px;
        padding: 0;
        box-sizing: border-box;
        min-width: 200px;
        min-height: 32px;
        max-height: 64px;
      }
      .apple-pay-button-black {
        background-image: -webkit-named-image(apple-pay-logo-white);
        background-color: #000;
      }
      .apple-pay-button-white,
      .apple-pay-button-white-with-line {
        background-image: -webkit-named-image(apple-pay-logo-black);
        background-color: #fff;
      }
      .apple-pay-button-white-with-line {
        border: 0.5px solid #000;
      }
    }
    .applepay-modal {
      position: fixed;
      background: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .applepay-modal__content {
      max-width: 300px;
      border: 1px solid #888;
      padding: 15px;
      box-shadow: 0 8px 12px #555;
      background: #fff;
    }
    .applepay-modal__message {
      text-align: center;
      font-size: 13px;
      font-weight: 400;
    }
    .applepay-modal__buttons {
      padding: 15px 0 0;
      display: flex;
      justify-content: space-around;
      position: relative;
    }
    .applepay-modal__buttons .loader {
      margin: 10px 0;
    }
    .applepay-modal__buttons button {
      padding: 8px;
      background: #fff;
      min-width: 80px;
      text-transform: uppercase;
      font-size: 13px;
      color: #888;
      border: none;
    }
    .applepay-modal__buttons button.applepay-modal__button--primary {
      color: #2560a9;
    }
    [data-cta-block] .applepay-modal {
      top: -100vh;
    }
    .ratingsComponent {
      display: flex;
      justify-content: center;
    }
    .star--yellow {
      color: #ffda44;
    }
    .star {
      position: relative;
      width: 21px;
      height: 21px;
      cursor: pointer;
    }
    .star__inner {
      width: 19px;
      height: 19px;
    }
    .star__foreground {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      overflow: hidden;
    }
    .ar .star__foreground {
      right: 0;
      left: unset;
    }
    .star__rating-icon path {
      fill: currentColor;
    }
    .star__background {
      color: #d1d7d7;
    }
    .coupon {
      padding: 15px 0;
      justify-content: center;
    }
    .coupon,
    .coupon__container {
      display: flex;
    }
    .coupon__text {
      border: 1px solid #bbb;
      height: 30px;
      flex: 3;
    }
    .coupon__btn {
      flex-basis: 1;
      background-color: #222;
      padding: 0 10px;
      border: 1px solid #222;
      height: 30px;
      margin-left: -2px;
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      min-width: 80px;
      position: relative;
    }
    .coupon__btn .loader {
      margin: 0;
    }
    .coupon__btn .loader .loading {
      width: 10px;
      height: 10px;
    }
    .ar .coupon__btn {
      margin-right: -1px;
      margin-left: 0;
    }
    div#couponCountdown {
      position: fixed;
      top: 0;
      z-index: 999;
      left: 50%;
      transform: translateX(-50%);
    }
    .CC__wrapper {
      background: #e98979;
      padding: 10px;
      border-radius: 40px;
      color: #fff;
      width: 200px;
      margin: 11px auto;
      box-shadow: 0 19px 30px -6px rgba(0, 0, 0, 0.26);
      font-size: 12px;
      cursor: pointer;
    }
    .CC__content {
      text-align: center;
    }
    .CC__coupon-code {
      position: relative;
    }
    .CC__expiry-info {
      font-weight: 400;
    }
    .ar .CC__wrapper {
      width: 240px;
    }
    .BestPromotion__bg {
      margin: 10px 0;
      background-color: none;
    }
    .BestPromotion__banner {
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: center;
    }
    .BestPromotion__placeholder {
      display: flex;
      height: 180px;
    }
    .carousel-module-container {
      width: 100%;
    }
    .carousel-module-container .carousel-module {
      margin: 0;
      box-shadow: none;
    }
    .carousel-module-container .carousel-module-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 10px 0;
    }
    .carousel-module-container .carousel-module-header .carousel-module-title {
      padding: 0;
    }
    .carousel-module-container .carousel-module-viewall {
      text-transform: uppercase;
      color: #333;
    }
    .carousel-module {
      margin: 15px 10px;
      background: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }
    .carousel-module .price-special {
      font-size: 13px;
    }
    .carousel-module-title {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      color: #333;
      padding: 20px 10px 0;
    }
    .carousel-module-wrapper {
      width: 100%;
      overflow: hidden;
      position: relative;
      height: 300px;
      padding: 20px 0;
    }
    .carousel-module-wrapper:after {
      content: ' ';
      position: absolute;
      right: 0;
      top: 10px;
      width: 50px;
      height: 288px;
      z-index: 1;
      background: linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0) 0,
        hsla(0, 0%, 100%, 0.5)
      );
    }
    .carousel-module-wrapper--no-padding {
      padding: 0;
    }
    .carousel-module-scrollable {
      overflow-y: hidden;
      position: absolute;
      padding-bottom: 20px;
      height: 100%;
      width: 100%;
    }
    .carousel-module-products {
      display: flex;
      margin: 10px;
    }
    .carousel-module-products:after {
      content: '\\00a0';
      display: block;
      padding-right: 50px;
      color: hsla(0, 0%, 100%, 0);
      width: 70px;
    }
    .carousel-module-product {
      flex-shrink: 0;
      margin-right: 10px;
      display: flex;
      align-items: center;
    }
    .carousel-module-product-link {
      display: block;
      background: #fff;
      width: 106px;
      text-decoration: none;
    }
    .carousel-module-product-image {
      width: auto !important;
      position: relative;
    }
    .carousel-module-product-info {
      position: relative;
    }
    .carousel-module-product-name {
      margin-top: 5px;
    }
    .carousel-module-container.multi .carousel-module-products {
      margin: 0;
    }
    .carousel-module-container.multi .carousel-module-products:after {
      content: none;
    }
    .carousel-module-container.multi
      .carousel-module-products.single
      .carousel-module-product {
      width: 94%;
    }
    .carousel-module-container.multi
      .carousel-module-products.double
      .carousel-module-product {
      width: 47%;
    }
    .carousel-module-container.multi
      .carousel-module-products.triple
      .carousel-module-product {
      width: 31.3%;
    }
    .carousel-module-container.multi .carousel-module-product {
      margin: 0;
    }
    .carousel-module-container.multi .carousel-module-product-link {
      width: 100%;
    }
    .carousel-module-container.multi .carousel-module-wrapper {
      height: auto;
    }
    .carousel-module-container.multi .carousel-module-wrapper:after {
      content: none;
    }
    .carousel-module-container.multi .carousel-module-scrollable {
      position: static;
      height: auto;
      margin-bottom: -30px;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;
    }
    .carousel-module-container.multi
      .carousel-module-scrollable::-webkit-scrollbar {
      display: none;
    }
    .split-categories {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      height: calc(100% - 150px);
    }
    .split-section {
      display: flex;
      flex: 1;
      flex-direction: column;
      background-color: #fff;
      overflow: scroll;
    }
    .split-section--grey-bg {
      background-color: #f1f1f1;
    }
    .categories-item {
      padding: 15px;
    }
    .categories-item.is-selected {
      background-color: #fff;
    }
    .categories-item__content {
      display: none;
    }
    .categories-item__content .full,
    .categories-item__content.is-selected {
      display: initial;
    }
    .navigation-tab__content {
      display: none;
    }
    .navigation-tab__content.is-selected {
      display: flex;
      overflow: hidden;
    }
    .navigation-tab__content.is-column {
      flex-direction: column;
      flex-grow: 1;
    }
    .popover__content {
      display: none;
    }
    .popover__content--visible {
      display: flex;
      box-shadow: 0 0 15px 0 #999;
      z-index: 1;
      position: absolute;
      top: 168px;
    }
    .popover__content--visible:before {
      position: fixed;
      content: '';
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
    }
    .popover--fade {
      opacity: 0.2;
    }
    .popover--active {
      opacity: 1;
      position: relative;
    }
    .popover--active:after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      background: transparent;
      margin: auto;
      border-bottom: 15px solid #fff;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
      border-top: transparent;
      z-index: 10;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -10px;
    }
    .mod-blog-product {
      width: 100%;
      background-color: #fff;
      text-align: center;
    }
    .mod-blog-product__title {
      padding: 15px 10px 5px;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 5px;
    }
    .mod-blog-product__subtitle {
      font-size: 15px;
      letter-spacing: 5px;
    }
    .mod-blog-product__images {
      position: relative;
      min-height: 206px;
    }
    .mod-blog-product__images .carousel-module-scrollable {
      padding-bottom: 0;
    }
    .mod-blog-product__images .carousel-module-product-link {
      width: 125px;
    }
    .mod-blog-product__images .carousel-module-product-image {
      height: 180px !important;
      min-height: 180px;
    }
    .mod-blog-product__name {
      font-size: 25px;
      font-weight: 700;
      padding: 10px 10px 0;
      letter-spacing: 2px;
      word-spacing: 3px;
    }
    .mod-blog-product__desc {
      font-size: 18px;
      word-spacing: 5px;
      padding: 10px;
    }
    .mod-blog-product__cta {
      display: block;
      text-decoration: underline;
      font-size: 18px;
      word-spacing: 5px;
      padding: 10px 10px 20px;
    }
    .bundle-list__text {
      display: flex;
      justify-content: center;
      padding: 5px 0;
      color: #6b6b6b;
      font-size: 11px;
      font-weight: 500;
    }
    .bundle-cart__success {
      background: #fbfbfb;
      justify-content: flex-start;
    }
    .bundle-cart__message,
    .bundle-cart__success {
      padding: 5px;
      display: flex;
      align-items: center;
      color: #07f;
      font-size: 11px;
      font-weight: 400;
    }
    .bundle-cart__message {
      background-color: #e5f1ff;
      justify-content: flex-end;
      cursor: pointer;
    }
    .bundle-cart__group {
      border: 1px solid #07f;
      position: relative;
      margin-bottom: 10px;
    }
    .bundle-cart__group-label {
      position: absolute;
      top: 0;
      right: 0;
      background-color: #07f;
      color: #fff;
      padding: 5px;
      border-radius: 0 0 0 5px;
      font-weight: 300;
    }
    .ar .bundle-cart__group-label {
      right: auto;
      left: 0;
      border-radius: 0 0 5px 0;
    }
    .RemoveItemModal {
      z-index: 10001;
    }
    .RemoveItemModal__text {
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      max-width: 300px;
      margin: auto;
      text-align: center;
      font-size: 16px;
    }
    .RemoveItemModal__buttons {
      display: flex;
      padding: 20px;
      align-items: center;
      justify-content: space-evenly;
    }
    .RemoveItemModal__btn {
      height: 40px;
      width: 113px;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      cursor: pointer;
    }
    .RemoveItemModal__btn--cancel {
      border: 1px solid #000;
      background-color: #000;
      color: #fff;
    }
    .RemoveItemModal__btn--remove {
      border: 1px solid #f83f3f;
      background-color: #fff;
      color: #f83f3f;
    }
    .RemoveItemModal .nmModal__wrapper {
      width: 400px;
    }
    .CompleteBundleToast {
      position: fixed;
      pointer-events: none;
      bottom: 75px;
      height: 60px;
      width: 333px;
      left: 50%;
      transform: translateX(-166px);
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      font-weight: 400;
      box-shadow: 0 10px 40px 0 rgba(49, 87, 117, 0.25);
      border-radius: 6px;
      z-index: 1001;
    }
    .CompleteBundleToast__ribbon {
      padding: 10px;
      position: relative;
    }
    .CompleteBundleToast__count {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 0;
      right: 0;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
    }
    .CompleteBundleToast__message {
      font-weight: 500;
      color: #333;
    }
    .CircularProgress {
      transform: rotate(-90deg);
    }
    .CircularProgress__meter,
    .CircularProgress__value {
      fill: none;
    }
    .CircularProgress__meter {
      stroke: #bee2fd;
    }
    .CircularProgress__value {
      stroke: #0871e9;
      stroke-linecap: round;
    }
    .NewsletterSubscribeLink {
      text-decoration: underline;
    }
    .NewsletterFormModal {
      font-size: 16px;
    }
    .NewsletterFormModal .modal-content {
      padding: 20px;
      max-width: 500px;
      align-self: center;
    }
    .NewsletterForm__desc {
      font-size: 0.83em;
      margin: 10px 0;
      line-height: 17px;
    }
    .NewsletterForm__desc > span {
      margin: 2px;
    }
    .NewsletterForm__title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 1em;
      font-weight: 700;
    }
    .NewsletterForm__email {
      padding: 10px;
      border: 1px solid #999;
      margin: 10px 0;
      width: 100%;
    }
    .NewsletterForm__email--invalid {
      border: 1px solid red;
    }
    .NewsletterForm__buttons,
    .NewsletterForm__privacy {
      margin: 15px 0;
    }
    .NewsletterForm__privacy {
      font-size: 0.8em;
    }
    .NewsletterForm__privacy a {
      color: #333;
    }
    .NewsletterForm__buttons {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
    .NewsletterForm__gender {
      height: 40px;
      border-radius: 3px;
      border: 1px solid #dadada;
      background-color: #fff;
      color: #666;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-size: 0.8em;
    }
    .NewsletterForm__gender--selected {
      color: #fff;
      background-color: #666;
    }
    .NewsletterForm__gender:first-child {
      margin-right: 10px;
    }
    .NewsletterForm__welcome {
      margin: 30px;
      justify-content: center;
      display: flex;
      font-weight: 700;
      font-size: 20px;
    }
    .NewsletterForm__button {
      position: relative;
      background: #2560a9;
      color: #fff;
      display: flex;
      padding: 15px 10px;
      margin: 10px 0;
      justify-content: center;
      align-items: center;
      text-transform: capitalize;
      min-height: 20px;
      border-radius: 5px;
      cursor: pointer;
    }
    .NewsletterForm__button .loading {
      border: 0.25rem solid hsla(0, 0%, 100%, 0.2);
      border-top-color: #fff;
    }
    .NewsletterForm__error {
      display: flex;
      font-size: 0.8em;
      color: red;
      padding: 5px 0;
    }
    .NewsletterForm__error--center {
      justify-content: center;
    }
    .nm-checkbox {
      position: relative;
      margin: 20px 0;
    }
    .nm-checkbox input {
      position: absolute;
      margin: 5px;
      padding: 0;
      visibility: hidden;
    }
    .nm-checkbox__label-visible {
      margin-bottom: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .nm-checkbox__input {
      position: relative;
      width: 16px;
      height: 16px;
      border: 1px solid #dadada;
      background-color: #fff;
      margin: 0 10px;
    }
    .nm-checkbox__input:after {
      content: '';
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background: #222;
      transform: translateX(-50%) translateY(-50%);
    }
    .nm-checkbox,
    input[type='checkbox']:checked + span .nm-checkbox__input:after {
      display: block;
    }
    .ar .NewsletterForm__gender:first-child {
      margin-right: auto;
      margin-left: 10px;
    }
    .ab_search_improvements .fl-search-modal__content {
      top: 0;
      margin: 0;
      height: 100vh;
    }
    .ab_search_improvements .fl-search__text-wrapper {
      background-color: transparent;
    }
    .ab_search_improvements .fl-search__text {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: thin solid #f9f9f9;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    .ab_search_improvements .fl-search__list {
      display: flex;
      flex-direction: row;
      padding: 0 10px;
      flex-flow: wrap;
    }
    .ab_search_improvements .fl-search__list-item {
      width: 100%;
    }
    .ab_search_improvements .fl-search__list-item-recent {
      background: #f6f6f6;
      padding: 10px;
      border-radius: 5px;
      min-width: -webkit-fit-content;
      min-width: -moz-fit-content;
      min-width: fit-content;
      border-bottom: none;
      margin: 5px;
      list-style: none;
    }
    .ab_search_improvements .fl-search__text-clear {
      background-color: #cfcfcf;
      padding: 2px 5px;
      color: #fff;
      border-radius: 50%;
    }
    .ab_search_improvements .search-close-btn {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
    .ab_search_improvements .alt-modal {
      background: #fff;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 10;
      transition: all 0.3s;
      transform: translateX(100vw);
    }
    .ab_search_improvements .alt-modal.is-visible {
      pointer-events: visible;
      transform: translateX(0);
    }
    .ab_search_improvements .search-button-wrapper {
      display: flex;
      justify-content: center;
    }
    .ab_search_improvements .search-button-wrapper div {
      display: flex;
      align-items: center;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
      border: thin solid rgba(0, 0, 0, 0.12);
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
      width: 100%;
    }
    .ab_search_improvements .search-button-wrapper i {
      height: 20px;
    }
    .ab_percentageDiscountTag .reduction_tag {
      color: #e95c5b;
      background-color: rgba(242, 83, 82, 0.1);
      border-radius: 4px;
      padding: 3px 5px;
      text-align: center;
      display: inline-block;
      font-size: 11px;
    }
    body {
      margin: 0;
      padding: 0;
      background: #f5f5f5;
      font-size: 12px;
      color: #222;
      font-weight: 400;
      direction: ltr;
      font-family: apercu, Arial, Sans-Serif;
    }
    body.modal-open {
      left: 0;
      width: 100%;
      height: 100%;
      position: fixed;
    }
    .page-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .overlay {
      background: rgba(0, 0, 0, 0.4);
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
      transition: opacity 0.3s;
    }
    .overlay.is-visible {
      pointer-events: visible;
      opacity: 1;
    }
    .is-hidden {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
    .error,
    .visually_hidden {
      display: none;
    }
    .error {
      margin: 6px 0;
      text-align: center;
      font-size: 12px;
      color: #ef5350;
    }
    .home-seo-content {
      margin: 10px;
      padding: 10px;
      background: #fff;
      text-align: center;
    }
    .home-seo-content #read-more-button {
      font-weight: 700;
      cursor: pointer;
    }
    .home-seo-content #read-more-container {
      overflow: hidden;
      max-height: 0;
    }
    .home-seo-content #read-more-container.read-more__expand {
      max-height: none;
    }
    .home-seo-content p {
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 300;
      color: #222;
      line-height: 24px;
    }
    .home-seo-content p a {
      color: #222;
    }
    .deliveryPromise__wrapper {
      color: #569689;
      margin-top: 5px;
      font-size: 12px;
      line-height: 1.5em;
    }
    .deliveryPromise__wrapper span {
      color: #000;
    }
    .animation-text {
      animation-name: example;
      animation-duration: 0.6s;
      animation-iteration-count: infinite;
    }
    @keyframes example {
      from {
        color: #000;
      }
      to {
        color: red;
      }
    }
    @keyframes ldio-1zdu0w8lql2 {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

    .ldio-1zdu0w8lql2 div {
      position: absolute;
      width: 53px;
      height: 53px;
      border: 5px solid #1d0e0b;
      border-top-color: transparent;
      border-radius: 50%;
    }

    .ldio-1zdu0w8lql2 div {
      animation: ldio-1zdu0w8lql2 1.5384615384615383s linear infinite;
      top: 50px;
      left: 50px;
    }

    .loadingio-spinner-rolling-lt42rzgi1vi {
      width: 44px;
      height: 44px;
      display: inline-block;
      overflow: hidden;
      background: none;
    }

    .ldio-1zdu0w8lql2 {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateZ(0) scale(0.44);
      backface-visibility: hidden;
      transform-origin: 0 0; /* see note above */
    }

    .ldio-1zdu0w8lql2 div {
      box-sizing: content-box;
    }
    .pagination {
      justify-content: center;
    }
    .pagination > div {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .pagination ul {
      width: 50% !important;
      box-shadow: unset !important;
      background-color: transparent;
    }
    .pagination ul .loader-list {
      width: 100% !important;
      cursor: pointer;
      border: 1px solid;
      background: #fff;
      padding: 10px;
      display: flex;
      justify-content: center;
    }
    .pagination ul .loader-list h1 {
      font-size: 18px !important;
      margin: 0 !important;
    }
    .list-reduction_tag {
      font-size: 12px;
      color: #fff;
      background-color: #dd1e26;
      padding: 3px 5px;
      line-height: 1.5;
      text-align: center;
      position: absolute;
      left: 0;
      top: 4px;
    }
    .shop_by_categories_wrapper_mobile {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .shop_by_kids_wrapper_mobile {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
    .instagram_wrapper_mobile {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
    .shop_by_categories_entry_mobile {
      width: 49.5%;
      height: 280px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .shop_by_kids_wrapper_entry_mobile {
      width: 49.5%;
      height: 280px;
      margin-bottom: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .instagram_entry_mobile {
      width: 33.33%;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .shop_by_categories_entry_img_mobile {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: 500ms ease-in-out;
    }
    .shop_by_categories_entry_mobile:hover
      .shop_by_categories_entry_img_mobile {
      scale: 1.05;
    }
    .shop_by_kids_wrapper_entry_mobile:hover
      .shop_by_categories_entry_img_mobile {
      scale: 1.05;
    }
    .shop_by_categories_entry_btn_container {
      position: absolute;
      bottom: 20px;
    }

    .shop_by_categories_entry_btn_mobile {
      position: relative;
      font-size: 15px;
      text-transform: capitalize;
      text-decoration: none;
      padding: 0.7em 2em;
      display: inline-block;
      transition: all 0.2s;
      border: none;
      font-family: inherit;
      font-weight: 500;
      color: black;
      background-color: white;
    }

    .shop_by_categories_entry_btn_mobile:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .shop_by_categories_entry_btn_mobile:active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .shop_by_categories_entry_btn_mobile::after {
      content: '';
      display: inline-block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all 0.4s;
    }

    .shop_by_categories_entry_btn_mobile::after {
      background-color: #fff;
    }

    .shop_by_categories_entry_btn_mobile:hover::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
    .instagram_posts_wrapper_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 500ms ease-in-out;
    }
    .instagram_entry_mobile:hover .instagram_posts_wrapper_on_hover {
      opacity: 1;
    }
    .instagram_posts_wrapper_on_hover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: 400ms ease-in-out;
    }
    .instagram_posts_wrapper_btn {
      background: transparent;
      border: none;
      cursor: pointer;
      color: #fff;
    }
  `}</style>
)

export default mainMobile
