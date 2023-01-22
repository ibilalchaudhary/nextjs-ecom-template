const main = () => (
  <style global jsx>{`
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
      font: inherit;
      font-size: 100%;
      vertical-align: baseline;
    }

    html {
      line-height: 1;
    }

    ol,
    ul {
      list-style: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    caption,
    td,
    th {
      text-align: left;
      font-weight: 400;
      vertical-align: middle;
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

    a img {
      border: none;
    }

    elements-of-type(html5-block)

    {
      display: block
    ;
    }

    body::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    body::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.4);
      border-radius: 4px
    }

    body::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.08);

    }

    #brand_search label,
    #catalog_filter_options #catalog_filter_color li .label > input,
    #catalog_filter_options #catalog_filter_size_original li .label > input,
    #catalog_filter_options #catalog_filter_size li .label > input,
    #product_container .option_select ul label > input,
    .closed .hoverToggled,
    .inline_form_container label,
    .newsletter_signup_container label,
    .visually_hidden {
      position: absolute !important;
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px !important;
      width: 1px !important;
      margin: -1px;
      padding: 0;
      overflow: hidden;
    }

    #brand_search i,
    #carousel_next,
    #carousel_previous,
    #phoneVerification_popup_close,
    #preloader i,
    #site_logo,
    #size_guide_close,
    #zoomedImage_popup_close,
    .app_store_badge,
    .ar .hero_carousel_container ul.hero_carousel_pager li a,
    .google_play_badge,
    .hero_carousel_container ul.hero_carousel_pager li a,
    .hero_slider ul.slides .image_container,
    .logo_scroller a.arrow i,
    .module .image_container,
    .product_scroller a.arrow i,
    button i.loading,
    i.logo,
    ul.certification li,
    ul.payment_methods li,
    ul.usps_icons > li:before {
      text-indent: 200%;
      white-space: nowrap;
      overflow: hidden;
    }

    .en #newsletter_signup_footer p.title,
    .en #site_footer .primary p.title {
      letter-spacing: 4px;
    }

    #brand_search .ie8 i,
    #preloader .ie8 i,
    .hero_carousel_container ul.hero_carousel_pager li .ie8 a,
    .hero_slider ul.slides .ie8 .image_container,
    .ie8 #brand_search i,
    .ie8 #carousel_next,
    .ie8 #carousel_previous,
    .ie8 #phoneVerification_popup_close,
    .ie8 #preloader i,
    .ie8 #site_logo,
    .ie8 #size_guide_close,
    .ie8 #zoomedImage_popup_close,
    .ie8 .app_store_badge,
    .ie8 .google_play_badge,
    .ie8 .hero_carousel_container ul.hero_carousel_pager li a,
    .ie8 .hero_slider ul.slides .image_container,
    .ie8 .logo_scroller a.arrow i,
    .ie8 .module .image_container,
    .ie8 .product_scroller a.arrow i,
    .ie8 button i.loading,
    .ie8 i.logo,
    .ie8 ul.certification li,
    .ie8 ul.payment_methods li,
    .ie8 ul.usps_icons > li:before,
    .logo_scroller a.arrow .ie8 i,
    .module .ie8 .image_container,
    .product_scroller a.arrow .ie8 i,
    button .ie8 i.loading,
    ul.certification .ie8 li,
    ul.payment_methods .ie8 li {
      text-indent: -9999px;
    }

    #brand_search i,
    #carousel_next,
    #carousel_previous,
    #catalog_container header .option_container a.option_header:after,
    #intro_page .logo,
    #phoneVerification_popup_close,
    #site_header .usps .details:after,
    #site_header .usps .details ul li:before,
    #size_guide_close,
    #zoomedImage_popup_close,
    .control-group.select_container .controls:after,
    .select_container label:after,
    .select_container span:after,
    .site-header .usps .details:after,
    .site-header .usps .details ul li:before,
    ul#catalog_listings
    li.listing
    .catalog_tag_maternity
    .image_container:after,
    ul#catalog_listings
    li.listing
    .catalog_tag_plus_size
    .image_container:after,
    ul.catalog_listings
    li.listing
    .catalog_tag_maternity
    .image_container:after,
    ul.catalog_listings
    li.listing
    .catalog_tag_plus_size
    .image_container:after,
    ul.certification li,
    ul.payment_methods li,
    ul.usps_icons > li:before {
      background-image: url(/web-desktop/a9351533d8d06e40bae3c7c464feaad2.png);
      background-repeat: no-repeat;
      background-size: 226px auto;
    }

    #brand_search .no-backgroundsize i,
    #catalog_container
    header
    .option_container
    .no-backgroundsize
    a.option_header:after,
    #intro_page .no-backgroundsize .logo,
    #site_header .usps .details ul .no-backgroundsize li:before,
    #site_header .usps .no-backgroundsize .details:after,
    .control-group.select_container .no-backgroundsize .controls:after,
    .no-backgroundsize #brand_search i,
    .no-backgroundsize #carousel_next,
    .no-backgroundsize #carousel_previous,
    .no-backgroundsize
    #catalog_container
    header
    .option_container
    a.option_header:after,
    .no-backgroundsize #intro_page .logo,
    .no-backgroundsize #phoneVerification_popup_close,
    .no-backgroundsize #site_header .usps .details:after,
    .no-backgroundsize #site_header .usps .details ul li:before,
    .no-backgroundsize #size_guide_close,
    .no-backgroundsize #zoomedImage_popup_close,
    .no-backgroundsize .control-group.select_container .controls:after,
    .no-backgroundsize .select_container label:after,
    .no-backgroundsize .select_container span:after,
    .no-backgroundsize .site-header .usps .details:after,
    .no-backgroundsize .site-header .usps .details ul li:before,
    .no-backgroundsize
    ul#catalog_listings
    li.listing
    .catalog_tag_maternity
    .image_container:after,
    .no-backgroundsize
    ul#catalog_listings
    li.listing
    .catalog_tag_plus_size
    .image_container:after,
    .no-backgroundsize
    ul.catalog_listings
    li.listing
    .catalog_tag_maternity
    .image_container:after,
    .no-backgroundsize
    ul.catalog_listings
    li.listing
    .catalog_tag_plus_size
    .image_container:after,
    .no-backgroundsize ul.certification li,
    .no-backgroundsize ul.payment_methods li,
    .no-backgroundsize ul.usps_icons > li:before,
    .select_container .no-backgroundsize label:after,
    .select_container .no-backgroundsize span:after,
    .site-header .usps .details ul .no-backgroundsize li:before,
    .site-header .usps .no-backgroundsize .details:after,
    ul#catalog_listings
    li.listing
    .catalog_tag_maternity
    .no-backgroundsize
    .image_container:after,
    ul#catalog_listings
    li.listing
    .catalog_tag_plus_size
    .no-backgroundsize
    .image_container:after,
    ul.catalog_listings
    li.listing
    .catalog_tag_maternity
    .no-backgroundsize
    .image_container:after,
    ul.catalog_listings
    li.listing
    .catalog_tag_plus_size
    .no-backgroundsize
    .image_container:after,
    ul.certification .no-backgroundsize li,
    ul.payment_methods .no-backgroundsize li {
      background-image: url(/web-desktop/647651f46060dc38eff93732b9ea2b6a.png);
    }

    .cta_block_button,
    .cta_text_button {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 15;
      margin: 0 auto 7%;
    }

    #template_gender a.module:hover .arrow_block_button,
    #template_gender a.module:hover .cta_block_button,
    #template_home .module:hover .arrow_block_button,
    #template_home .module:hover .cta_block_button,
    .ar .arrow_block_button:hover:after,
    .ar .cta_block_button:hover:after,
    .arrow_block_button:hover,
    .catalog_banner_top .module:hover span.button,
    .cta_block_button:hover,
    .hero_carousel_container ul.hero_carousel a:hover .arrow_block_button,
    .hero_carousel_container ul.hero_carousel a:hover .cta_block_button {
      background-color: #000;
      color: #fff;
    }

    #template_gender a.module:hover .arrow_block_button:after,
    #template_gender a.module:hover .cta_block_button:after,
    #template_home .module:hover .arrow_block_button:after,
    #template_home .module:hover .cta_block_button:after,
    .ar .arrow_block_button:hover:after,
    .ar .cta_block_button:hover:after,
    .arrow_block_button:hover:after,
    .catalog_banner_top .module:hover span.button:after,
    .cta_block_button:hover:after,
    .hero_carousel_container ul.hero_carousel a:hover .arrow_block_button:after,
    .hero_carousel_container ul.hero_carousel a:hover .cta_block_button:after {
      border-left-color: #fff;
      border-right-color: #fff;
    }

    #template_gender a.module:hover .reversed.arrow_block_button,
    #template_gender a.module:hover .reversed.cta_block_button,
    #template_home .module:hover .reversed.arrow_block_button,
    #template_home .module:hover .reversed.cta_block_button,
    .ar .reversed.arrow_block_button:hover:after,
    .ar .reversed.cta_block_button:hover:after,
    .catalog_banner_top .module:hover span.reversed.button,
    .hero_carousel_container
    ul.hero_carousel
    a:hover
    .reversed.arrow_block_button,
    .hero_carousel_container
    ul.hero_carousel
    a:hover
    .reversed.cta_block_button,
    .reversed.arrow_block_button:hover,
    .reversed.cta_block_button:hover {
      background-color: #fff;
      color: #000;
    }

    #template_gender a.module:hover .reversed.arrow_block_button:after,
    #template_gender a.module:hover .reversed.cta_block_button:after,
    #template_home .module:hover .reversed.arrow_block_button:after,
    #template_home .module:hover .reversed.cta_block_button:after,
    .catalog_banner_top .module:hover span.reversed.button:after,
    .hero_carousel_container
    ul.hero_carousel
    a:hover
    .reversed.arrow_block_button:after,
    .hero_carousel_container
    ul.hero_carousel
    a:hover
    .reversed.cta_block_button:after,
    .reversed.arrow_block_button:hover:after,
    .reversed.cta_block_button:hover:after {
      border-left-color: #000;
      border-right-color: #000;
    }

    #template_gender a.module:hover .cta_text_button span:after,
    #template_home .module:hover .cta_text_button span:after,
    .cta_text_button
    .hero_carousel_container
    ul.hero_carousel
    a:hover
    span:after,
    .cta_text_button span:hover:after,
    .hero_carousel_container
    ul.hero_carousel
    a:hover
    .cta_text_button
    span:after,
    .hero_carousel_container ul.hero_carousel a:hover .text_cta:after,
    .text_cta:hover:after {
      border: none;
    }

    #template_gender a.module:hover .cta_text_button span.reversed,
    #template_home .module:hover .cta_text_button span.reversed,
    .cta_text_button
    .hero_carousel_container
    ul.hero_carousel
    a:hover
    span.reversed,
    .cta_text_button span.reversed:hover,
    .hero_carousel_container
    ul.hero_carousel
    a:hover
    .cta_text_button
    span.reversed,
    .hero_carousel_container ul.hero_carousel a:hover .reversed.text_cta,
    .reversed.text_cta:hover {
      background-color: #fff;
      color: #000;
    }

    #brands_navigation li a.active,
    #brands_navigation li a.active:hover {
      background-color: #8b8b8b;
      background: -owg-linear-gradient(#e8ae31, #8b8b8b);
      background: -webkit-linear-gradient(#e8ae31, #8b8b8b);
      background: -moz-linear-gradient(#e8ae31, #8b8b8b);
      background: -o-linear-gradient(#e8ae31, #8b8b8b);
      -pie-background: -pie-linear-gradient(#e8ae31, #8b8b8b);
      background: linear-gradient(#e8ae31, #8b8b8b);
    }

    #selected_facets ul li a.remove_applied_filter {
      background-color: #d3d3d3;
      background: -owg-linear-gradient(#eee, #d3d3d3);
      background: -webkit-linear-gradient(#eee, #d3d3d3);
      background: -moz-linear-gradient(#eee, #d3d3d3);
      background: -o-linear-gradient(#eee, #d3d3d3);
      -pie-background: -pie-linear-gradient(#eee, #d3d3d3);
      background: linear-gradient(#eee, #d3d3d3);
    }

    #selected_facets ul li a.remove_applied_filter:hover {
      background-color: #eee;
      background: -owg-linear-gradient(#d3d3d3, #eee);
      background: -webkit-linear-gradient(#d3d3d3, #eee);
      background: -moz-linear-gradient(#d3d3d3, #eee);
      background: -o-linear-gradient(#d3d3d3, #eee);
      -pie-background: -pie-linear-gradient(#d3d3d3, #eee);
      background: linear-gradient(#d3d3d3, #eee);
    }

    #brands_navigation li a,
    #template_sem01 ul.brand_logos li a,
    #template_sem02 ul.brand_logos li a,
    .block_button.dark {
      background-color: #161616;
      background: -owg-linear-gradient(#8a8a8a, #161616);
      background: -webkit-linear-gradient(#8a8a8a, #161616);
      background: -moz-linear-gradient(#8a8a8a, #161616);
      background: -o-linear-gradient(#8a8a8a, #161616);
      -pie-background: -pie-linear-gradient(#8a8a8a, #161616);
      background: linear-gradient(#8a8a8a, #161616);
    }

    #template_sem01 ul.brand_logos li a:hover,
    #template_sem02 ul.brand_logos li a:hover {
      background-color: #8a8a8a;
      background: -owg-linear-gradient(#161616, #8a8a8a);
      background: -webkit-linear-gradient(#161616, #8a8a8a);
      background: -moz-linear-gradient(#161616, #8a8a8a);
      background: -o-linear-gradient(#161616, #8a8a8a);
      -pie-background: -pie-linear-gradient(#161616, #8a8a8a);
      background: linear-gradient(#161616, #8a8a8a);
    }

    #site_header ul.site_search_suggestions,
    ul.site_search_suggestions {
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    }

    #site_header .ar ul.site_search_suggestions,
    .ar #site_header ul.site_search_suggestions,
    .ar ul.site_search_suggestions {
      box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.3);
    }

    #cart_review,
    #popup_zoom_image .zoomedImage {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .site-footer__device-switch,
    .site-header__country-switcher,
    .site-header__language-switcher,
    .site-header__usp-link {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .site-footer__links,
    .site-footer__main,
    .site-header__main,
    .site-header__main--container,
    .site-header__usps {
      margin: 0 auto;
    }

    .site-header__account,
    .site-header__cart,
    .site-header__wishlist {
      margin: 8px;
    }

    #wrapper {
      background-color: #fff;
    }

    #content {
      min-height: calc(100vh - 143px);
      padding: 0 5px;
    }

    .site_width_container {
      margin: 0 auto;
    }

    #site_header {
      background-color: #fff;
      color: #000;
    }

    #site_header,
    .ar #site_header {
      padding: 10px 0;
    }

    #site_footer,
    :footer#site_footer {
      color: #000;
    }

    #site_footer .footer_wrapper,
    :footer#site_footer .footer_wrapper {
      background: #f5f5f5;
      width: 100%;
      overflow: hidden;
      padding: 40px 0 20px;
      margin-bottom: 20px;
    }

    #site_footer .footer_wrapper ul li,
    :footer#site_footer .footer_wrapper ul li {
      padding: 5px 0;
    }

    #main-navigation .site_width_container {
      margin: 0 auto;
    }

    :footer,
    :header,
    :section {
      display: block;
    }

    #site_header li {
      text-transform: uppercase;
    }

    #site_header a {
      display: block;
      color: #000;
      font-weight: 700;
    }

    #site_header a:hover {
      color: #8b8b8b;
    }

    #site_logo {
      height: 42px;
      width: 113px;
background-position: center;
      background-repeat: no-repeat;
      display: inline-block;
      background-size: contain;
    }

    #site_header ul.customer_options,
    #site_header ul.site_options {
      position: absolute;
    }

    #site_header ul.customer_options > li,
    #site_header ul.site_options > li {
      display: inline-block;
      margin-left: 20px;
    }

    #site_header ul.customer_options > li:first-child,
    #site_header ul.site_options > li:first-child {
      margin-left: 0;
    }

    #site_header ul.site_options {
      top: 0;
      left: 0;
      float: right;
      position: relative;
    }

    #site_header ul.usps {
      float: left;
      color: #363636;
    }

    #site_header ul.my_account {
      float: right;
      border-right: 1px solid #a8a8a8;
      margin: 3px 20px;
      padding-right: 20px;
    }

    #site_header ul.customer_options {
      top: -5px;
      right: 0;
    }

    #site_header ul.customer_options > li {
      vertical-align: bottom;
    }

    #site_header ul.customer_options > li a {
      font-weight: 700;
      font-size: 14px;
    }

    .ar #site_header ul.customer_options {
      top: 31px;
    }

    .ar #site_header ul.customer_options > li,
    .ar #site_header ul.site_options > li {
      margin-right: 16px;
      margin-left: 0;
    }

    .ar #site_header ul.customer_options > li:first-child,
    .ar #site_header ul.site_options > li:first-child {
      margin-right: 0;
    }

    .ar #site_header ul.site_options {
      right: 0;
      left: auto;
    }

    .ar #site_header ul.customer_options {
      left: 0;
      right: auto;
      bottom: 15px;
      top: auto;
    }

    #language_switch {
      border-left: 1px solid #a8a8a8;
      padding-left: 20px;
    }

    #language_switch a {
      font-family: frutiger, Tahoma, Arial, Sans-serif;
      font-size: 14px;
      font-weight: 700;
    }

    .ar #language_switch {
      border-left: 0;
      padding-left: 0;
      padding-right: 20px;
      border-right: 1px solid #a8a8a8;
    }

    .ar #language_switch a {
      font-family: apercu, Arial, Sans-Serif;
      font-size: 12px;
    }

    #main-navigation {
      zoom: 1;
      z-index: 77;
    }

    #main-navigation:after {
      content: ' ';
      display: block;
      height: 0;
      clear: both;
      overflow: hidden;
      visibility: hidden;
    }

    #main-navigation [data-nm-hover-toggle]:after {
      content: '';
      width: 100vw;
      box-shadow: 0 9999px 0 9995px rgba(0, 0, 0, 0.5);
      display: inline-block;
      position: absolute;
      z-index: 101;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.25s;
      bottom: 4px;
    }

    #main-navigation [data-nm-hover-toggle]:after:after {
      opacity: 1;
      transition-delay: 0.3s;
    }

    #main-navigation a {
      color: #000;
    }

    #main-navigation .sale-item a {
      color: #51c0a9 !important;
    }

    #main-navigation .nav-depth {
      display: flex;
    }

    #main-navigation .nav-depth ul {
      align-items: flex-end;
      display: flex;
      transition: box-shadow 0.3s;
    }

    #main-navigation .nav-depth ul:after {
      width: 100%;
      height: 0;
      position: static;
      transition: box-shadow 0.3s;
      box-shadow: 0 1000px 0 1000px rgba(0, 0, 0, 0.1);
    }

    #main-navigation .nav-depth > ul > li {
      display: inline-flex;
      transition: 300ms ease-in-out;

    }

    #main-navigation .nav-depth > ul > li > a {
      color: var(--omnisell-DesktopHeaderSelectedTextColor);
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      width: 80px;
      border-left: 1px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 500ms ease-in-out;
      height: 35px;
      margin-bottom: 10px;
      border-radius: 120px;
      padding-top: 2px;
    }

    .ar #main-navigation .nav-depth > ul > li > a {
      border-left: 0;
    }

    .en #main-navigation .nav-depth > ul > li:last-child > a {
      border-right: 1px solid #fff;
    }

    .ar #main-navigation .nav-depth > ul > li:last-child > a {
      border-left: 1px solid #fff;
    }

    #main-navigation .nav-depth > ul > li.active > a,
    #main-navigation .nav-depth > ul > li:hover.active > a {
      background: #f53397;
      color: #fff;
    }

    #main-navigation .nav-depth > ul > li:hover > a,
    #main-navigation .nav-depth > ul > li > a:hover {
      background: rgba(221, 30, 38, 0.05);
      color: #000000;
    }

    #main-navigation .nav-depth > ul > li > .nav-depth--background {
      border-top: 1px solid #bdbdbd50;
      border-bottom: 1px solid #bdbdbd50;
      display: none;
      position: absolute;
      bottom: -52px;
      background: #f53397;
      z-index: 7;
      max-width: 100%;
      width: 100vw;
      left: 0;
      transition: top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
    }
    .is-sticky-header{
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      z-index: 999;
      height: 48px !important;
      animation-name: slideDown;
      -webkit-animation-name: slideDown;
      animation-duration: .8s;
      -webkit-animation-duration: .8s;
      animation-timing-function: ease;
      -webkit-animation-timing-function: ease;
      visibility: visible !important;
    }
    @keyframes slideDown {
    0% {
    transform: translateY(-100%);
    }
    50%{
    transform: translateY(8%);
    }
    65%{
    transform: translateY(-4%);
    }
    80%{
     transform: translateY(4%);
    } 
    95%{
    transform: translateY(-2%);
    }
    100% {
    transform: translateY(0%);
    } }
    #main-navigation .nav-depth > ul > li.active > .nav-depth--background {
      display: flex;
      transition: 400ms ease-in-out;
      
    }

    #main-navigation .nav-depth > ul > li > .nav-depth--background > ul {
      width: 1360px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 400ms ease-in-out;
      
    }

    #main-navigation .nav-depth > ul > li > .nav-depth--background > ul > li {
      display: inline-flex;
      transition: 400ms ease-in-out;
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li
    > a {
      color: #ffffff;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      text-transform: capitalize;
      padding: 14px 10px;
      line-height: 1;
      border-bottom: 3px solid transparent;
      padding-top: 18px;
      margin: 0;
      transition: 300ms ease-in-out;

    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li:hover
    > a,
    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li
    > a:hover {
      border-bottom: 3px solid #fcfbfb;
      text-decoration: none;
      border-radius: 3px;
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li
    > a.main-navigation--outlet {
      color: #f67665;
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li:hover
    > a.main-navigation--outlet,
    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li
    > a.main-navigation--outlet:hover {
      border-bottom: 4px solid #f67665;
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li:after {
      content: '';
      width: 100vw;
      box-shadow: 0 9999px 0 9995px rgba(0, 0, 0, 0.5);
      display: inline-block;
      position: absolute;
      z-index: 5;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.4s;
      bottom: 4px;
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li:hover {
      transition: transform 0.1s linear;
      transition-delay: 0.1s;
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li:hover:after {
      opacity: 1;
      transition-delay: 0.1s;
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li.no-shadow:after {
      display: none;
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li
    > .nav-depth--background {
      display: none;
      position: absolute;
      left: 0;
      top: 48px;
      border-top: 1px solid #bdbdbd50;
      background: #fff;
      align-items: flex-start;
      z-index: 7;
      padding: 10px 0;
      width: 1200px;
      left: 50%;
      margin: 0 auto;
      transform: translateX(-50%);
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li:hover
    > .nav-depth--background {
      display: flex;
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li
    > .nav-depth--background
    > ul {
      width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-gap: 20px;
      justify-content: initial;
      align-items: initial;
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li
    > .nav-depth--background
    > ul
    > li {
      position: relative;
      flex: 1;
      margin: 0 10px;
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li
    > .nav-depth--background
    > ul
    > li:last-child,
    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li
    > .nav-depth--background
    > ul
    > li:last-child:after {
      border: 0;
    }

    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li
    > .nav-depth--background
    > ul
    > li:after {
      border: 1px solid #bdbdbd50;
      content: '';
      display: flex;
      position: absolute;
      right: 0;
      bottom: 30px;
      top: 30px;
      justify-content: center;
      align-items: center;
    }

    .ar
    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li
    > .nav-depth--background
    > ul
    > li:after {
      right: auto;
      left: 0;
    }

    #main-navigation .nav-depth .nav-depth--background a {
      display: block;
      margin-bottom: 6px;
      font-size: 13px;
      font-weight: 500;
      text-align: left;
      line-height: 1;
    }

    .ar #main-navigation .nav-depth .nav-depth--background a {
      text-align: right;
    }

    #main-navigation .nav-depth .nav-depth--background a:hover {
      text-decoration: underline;
    }

    #main-navigation
    .nav-depth
    .nav-depth--background
    .main-navigation--heading {
      margin-top: 15px;
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 900;
    }

    #main-navigation
    .nav-depth
    .nav-depth--background
    .main-navigation--heading:hover {
      text-decoration: none;
    }

    #main-navigation
    .nav-depth
    .nav-depth--background
    .main-navigation--heading:empty:after {
      content: '';
      display: block;
      margin-bottom: 50px;
    }

    #main-navigation .nav-depth .nav-depth--row {
      display: flex;
    }

    #main-navigation .nav-depth .nav-depth--row .banner {
      margin-right: 20px;
    }

    .ar #main-navigation .nav-depth .nav-depth--row .banner {
      margin-right: 0;
      margin-left: 20px;
    }

    #main-navigation .nav-depth .nav-depth--row .banner:last-child {
      margin: 0;
    }

    #main-navigation .nav-depth .half {
      flex: 1;
    }

    #country_switch {
      position: relative;
    }

    #country_switch ul.country_options {
      position: absolute;
      top: 18px;
      right: 6px;
      width: 177px;
      text-align: left;
      z-index: 999;
      background-color: #fff;
      padding: 6px 0 2px;
      border: 1px solid #8b8b8b;
    }

    #country_switch ul.country_options li a:before {
      outline: 1px solid #000;
    }

    #country_switch a.country {
      padding: 3px 8px;
      position: relative;
      display: flex;
      align-items: center;
    }

    #country_switch a.country:after {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: #000;
      border-right-width: 0;
      display: block;
      content: '';
      position: absolute;
      top: 8px;
      right: 8px;
    }

    #country_switch a.country:hover {
      color: #8b8b8b;
    }

    #country_switch a.country:hover:after {
      border-left-color: #8b8b8b;
    }

    #country_switch span.country {
      font-weight: 700;
    }

    #country_switch .country {
      display: flex;
      font-weight: 400;
      color: #000;
    }

    #country_switch .country:before {
      background-size: contain;
      width: 24px;
      height: 18px;
      margin-right: 8px;
      display: flex;
      content: '';
      background-color: #fff;
      outline: 1px solid #fff;
    }

    #country_switch .country.ae:before {
      background-image: url(/web-desktop/ae3f33e35dc4c7a93ef6dfd8e0eca708.svg);
    }

    #country_switch .country.sa:before {
      background-image: url(/web-desktop/593aa1c679529be255c8f43f3b7f3090.svg);
    }

    #country_switch .country.kw:before {
      background-image: url(/web-desktop/4b17d717456e22993ad59774168473f2.svg);
    }

    #country_switch .country.bh:before {
      background-image: url(/web-desktop/979918d6326566d1d13405d088570280.svg);
    }

    #country_switch .country.om:before {
      background-image: url(/web-desktop/8bebe063cd9aaa408767108c71a09708.svg);
    }

    #country_switch .country.us:before {
      background-image: url(/web-desktop/19d75bffd43d6b3cb81b98e30fb0fbd1.svg);
    }

    .ar #country_switch ul.country_options {
      right: auto;
      left: 7px;
      text-align: right;
    }

    .ar #country_switch a.country:after {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-right-color: #000;
      border-left-width: 0;
      left: 8px;
      right: auto;
    }

    .ar #country_switch a.country:hover:after {
      border-right-color: #8b8b8b;
    }

    .ar #country_switch .country:before {
      margin-left: 8px;
      margin-right: 0;
      float: right;
    }

    #site_footer a {
      color: #000;
      font-weight: 300;
    }

    #site_footer a:hover {
      color: #8b8b8b;
    }

    #site_footer .secondary li {
      margin-top: 5px;
    }

    #site_footer ul.payment_methods {
      margin-top: 21px;
    }

    #site_footer .device_switch a {
      color: #666;
      font-weight: 500;
    }

    .app_store_badge,
    .google_play_badge {
      background-image: url(/web-desktop/c4f453bdb97dd49042ecf034545a7759.png);
      background-repeat: no-repeat;
      height: 40px;
      display: inline-block;
    }

    .app_store_badge:hover,
    .google_play_badge:hover {
      opacity: 0.8;
    }

    .app_store_badge {
      background-position: 0 0;
      width: 135px;
    }

    .ar .app_store_badge {
      background-position: 0 -40px;
    }

    .google_play_badge {
      width: 135px;
      background-position: -135px 0;
    }

    .ar .google_play_badge {
      background-position: -135px -40px;
    }

    #site_footer .app_store_badge,
    #site_footer .google_play_badge {
      margin: 0 6px;
    }

    ul.breadcrumb {
      overflow: hidden;
      *zoom: 1;
    }

    ul.breadcrumb li {
      float: left;
      font-weight: 400;
    }

    ul.breadcrumb li a {
      color: #000;
    }

    ul.breadcrumb li a:hover {
      text-decoration: underline;
    }

    .ar ul.breadcrumb li {
      float: right;
    }

    #product_container ul.breadcrumb {
      margin-bottom: 17px;
    }

    .pagination_container {
      text-align: center;
      font-size: 0;
      margin-top: 9px;
    }

    .pagination_container a {
      display: inline-block;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background-color: #fff;
      height: 30px;
      line-height: 28px;
      border: 1px solid #bdbdbd;
    }

    .pagination_container a:hover {
      background-color: #bdbdbd;
      color: #fff;
    }

    .pagination_container .arrow {
      font-size: 12px;
      width: 100px;
    }

    .pagination_container .arrow:after,
    .pagination_container .arrow:before {
      vertical-align: middle;
      margin-top: -1px;
    }

    .pagination_container p {
      margin-bottom: 8px;
    }

    #pagination,
    #pagination li {
      display: inline-block;
    }

    #pagination li {
      margin-left: 8px;
    }

    #pagination li:first-child {
      margin-left: 0;
    }

    #pagination li a {
      width: 30px;
      display: block;
    }

    #pagination li a.selected-page {
      background: #d3d3d3;
      color: #fff;
      cursor: default;
    }

    .ar #pagination li {
      margin-left: 0;
      margin-right: 8px;
    }

    .ar #pagination li:first-child {
      margin-right: 0;
    }

    #next_page {
      margin-left: 8px;
    }

    #next_page:after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: #666;
      border-right-width: 0;
      margin-left: 8px;
    }

    .ar #next_page {
      margin-left: 0;
      margin-right: 8px;
    }

    .ar #next_page:after {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-right-color: #666;
      border-left-width: 0;
      margin-left: 0;
      margin-right: 8px;
      margin-top: 2px;
    }

    .ie8.ar #next_page:after {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: #666;
      border-right-width: 0;
    }

    #prev_page {
      margin-right: 8px;
    }

    #prev_page:before {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-right-color: #666;
      border-left-width: 0;
      margin-right: 8px;
    }

    .ar #prev_page {
      margin-right: 0;
      margin-left: 8px;
    }

    .ar #prev_page:before {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: #666;
      border-right-width: 0;
      margin-right: 0;
      margin-left: 8px;
      margin-top: 2px;
    }

    .ie8.ar #prev_page:before {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-right-color: #666;
      border-left-width: 0;
    }

    #listings_grid_switch {
      text-align: center;
      font-size: 0;
    }

    #listings_grid_switch li {
      font-size: 13px;
      font-weight: 700;
      color: #000;
      display: inline-block;
      vertical-align: middle;
      margin-left: 8px;
    }

    #listings_grid_switch li:first-child {
      margin-left: 0;
    }

    #listings_grid_switch li.more {
      border-left: 1px solid #bdbdbd;
      padding-left: 6px;
    }

    #listings_grid_switch a {
      font-size: 0;
      display: block;
    }

    #listings_grid_switch a span {
      width: 10px;
      height: 12px;
      background-color: #9f9f9f;
      display: inline-block;
      margin-left: 2px;
    }

    #listings_grid_switch a:hover span {
      opacity: 0.8;
    }

    #listings_grid_switch a.active span {
      background-color: #666;
    }

    .ar #listings_grid_switch li {
      margin-right: 8px;
      margin-left: 0;
    }

    .ar #listings_grid_switch li:first-child {
      margin-right: 0;
    }

    .ar #listings_grid_switch li.more {
      border-right: 1px solid #bdbdbd;
      border-left: 0;
      padding-right: 6px;
      padding-left: 0;
    }

    .ar #listings_grid_switch a span {
      margin-right: 2px;
      margin-left: 0;
    }

    #template_gender ul.sub_navigation a:hover {
      color: #8b8b8b;
    }

    #template_gender ul.sub_navigation > li {
      margin-top: 20px;
    }

    #template_gender ul.sub_navigation > li:first-child {
      margin-top: 0;
    }

    #template_gender ul.sub_navigation > li > a {
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      color: #000;
    }

    #template_gender ul.sub_navigation ul.level_02 li {
      font-weight: 400;
      padding-top: 4px;
    }

    #brands_navigation {
      overflow: hidden;
      *zoom: 1;
      margin-bottom: 11px;
    }

    #brands_navigation li {
      float: left;
      width: 16.6666%;
      border-left: 1px solid #fff;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    #brands_navigation li:first-child {
      border-left: 0;
    }

    #brands_navigation li a {
      color: #fff;
      display: block;
      font-size: 14px;
      text-transform: uppercase;
      padding: 4px 8px;
      text-align: center;
    }

    #brands_navigation li a:hover {
      background-color: #3da58f;
    }

    .ar #brands_navigation li {
      float: right;
      border-right: 1px solid #fff;
      border-left: 0;
    }

    .ar #brands_navigation li:first-child {
      border-right: 0;
    }

    .ar #brands_navigation li a {
      padding: 8px 8px 6px;
    }

    #template_brands ul.brands_list {
      overflow: hidden;
      *zoom: 1;
    }

    #template_brands ul.brands_list li .brand_letter_title {
      font-size: 14px;
      font-weight: 700;
      border-bottom: 1px solid #bdbdbd;
      margin-bottom: 5px;
    }

    #template_brands ul.brands_list li.brand_letter_section {
      float: left;
      width: 16.6666%;
      padding-right: 20px;
      padding-bottom: 24px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    #template_brands ul.brands_list li.brand_letter_section > ul > li {
      margin-top: 2px;
    }

    #template_brands
    ul.brands_list
    li.brand_letter_section
    > ul
    > li:first-child {
      margin-top: 0;
    }

    #template_brands ul.brands_list li.brands_new_row {
      clear: both;
    }

    #template_brands ul.brands_list a:hover {
      text-decoration: underline;
    }

    .ar #template_brands ul.brands_list li.brand_letter_section {
      float: right;
      padding-right: 0;
      padding-left: 20px;
    }

    #site-header-placeholder {
      min-height: 60px;
      display: none;
    }

    .sticky-header #site-header-placeholder {
      display: block;
    }

    .site-header {
      display: flex;
      flex-direction: column;
      background: #fff;
      position: relative;
    }

    .site-header__usps-bg {
      background-color: #ffffff;
    }

    .home_swiper_image_wrapper {
      width: 100%;
      height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
.home_swiper_image_wrapper:hover .home_swiper_image{
scale: 1.1;
}
    .home_swiper_image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 800ms ease-in-out;
    }

    //.home_swiper_image_wrapper:hover .home_swiper_image{
    //scale: 1.05;
    //}

    .site-header__usps {
      min-height: 30px;
      flex-direction: row;
      display: flex;
      width: 620px;
      margin-right: 0;
    }

    .site-header__usps i {
      width: 20px;
      height: 20px;
      position: relative;
      top: 2px;
    }

    .site-header__usps i.icon-cod {
      background-image: url(/web-desktop/27f14eeaa051d9643909c6fb27954f1d.svg);
      left: -6px;
    }

    .site-header__usps i.icon-brands {
      background-image: url(/web-desktop/de9524509e61567922af9ba7d26d4517.svg);
    }

    .site-header__usps i.icon-exchanges {
      background-image: url(/web-desktop/1c14f5a5334dc51940bc66e469447a11.svg);
    }

    .site-header__usp-link {
      flex-grow: 2;
      font-size: 12px;
      color: #111;
      position: relative;
      cursor: help;
      padding: 6px;
    }

    .site-header__country-switcher {
      flex-grow: 1;
      justify-content: flex-end;
      max-width: 35px;
    }

    .site-header__language-switcher {
      flex-grow: 1;
      font-size: 12px;
      color: #fff;
      position: relative;
      max-width: 70px;
      margin-right: 17px;
    }

    .site-header__main,
    .site-header__main--container {
      display: flex;
      flex-direction: row;
      min-height: 60px;
    }

    .site-header__logo,
    .site-header__main-navigation,
    .site-header__right_container {
      display: flex;
      flex: 1;
    }

    .site-header__topbar {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .site-header__usp-link {
      border-left: 1px solid #525050;
    }

    .site-header__group {
      justify-content: flex-end;
      display: flex;
      min-height: 30px;
      padding: 0 4px;
    }

    .site-header__group,
    .site-header__usp-link:last-child {
      border-right: 1px solid #525050;
    }

    .site-header__usp-link:last-child {
      margin-right: 7px;
    }

    .site-header__logo {
      text-align: center;
      justify-content: center;
      align-items: center;
      max-width: 115px;
      margin-right: 12px;
    }

    .site-header__right_container {
      flex-direction: column;
      align-items: flex-end;
    }

    .site-header__search {
      display: flex;
      flex: 4;
      justify-content: flex-end;
      position: relative;
    }

    .site-header__icons {
      display: flex;
      flex: 1;
      align-items: center;
    }

    .site-header__icon {
      stroke: #000000;
      fill: none;
      width: 25px;
      height: 25px;
      transition: 400ms ease-in-out;
    }

    .site-header__icon#search {
      width: 27px;
      height: 27px;
    }

    //.site-header__cart.active .site-header__icon,
    //.site-header__icon:hover {
    //  fill: rgba(221, 30, 38, 0.10);
    //}

    .site-header__account,
    .site-header__cart,
    .site-header__wishlist {
      position: relative;
      color: #000000;
      cursor: pointer;
    }

    .site-header__account:hover,
    .site-header__cart:hover,
    .site-header__wishlist:hover {
      color: #0c0c0c;
    }

    .site-header__cart-count {
      position: absolute;
      pointer-events: none;
      font-size: 11px;
      top: 10px;
      text-align: center;
      left: 0;
      right: 0;
      color: #0a0a0a;
    }

    .site-header__cart-count .retry {
      background-image: url(/web-desktop/28d078d80bfb10c96d464a9b6c434f13.svg);
      width: 12px;
      height: 12px;
      position: absolute;
      right: 0;
      left: 0;
      background-size: 12px;
      margin: auto;
      color: #fff;
    }

    .site-header__cart.active .site-header__cart-count i,
    .site-header__icon:hover + .site-header__cart-count i {
      color: #000;
    }

    .site-header--sticky .site-header__main {
      min-height: 0;
      position: fixed;
      left: 0;
      right: 0;
      top: -60px;
      z-index: 101;
      justify-content: flex-end;
      background: #000;
      transform: translateY(100%);
      transition: transform 0.5s 0.2s;
      width: 100vw;
    }

    .site-header--sticky .site-header__main--container {
      min-height: 0;
    }

    .site-header--sticky
    #main-navigation
    .nav-depth
    > ul
    > li.active
    > .nav-depth--background,
    .site-header--sticky
    #main-navigation
    .nav-depth
    > ul
    > li
    > .nav-depth--background
    > ul
    > li:after,
    .site-header--sticky .site-header__group {
      display: none;
    }

    .site-header--sticky
    #main-navigation
    .nav-depth
    > ul
    > li:hover.active
    > .nav-depth--background,
    .site-header--sticky
    #main-navigation
    .nav-depth
    > ul
    > li:hover
    > .nav-depth--background {
      display: flex;
    }

    .site-header--sticky #main-navigation .nav-depth > ul > li:after {
      content: '';
      width: 100vw;
      box-shadow: 0 9999px 0 9995px rgba(0, 0, 0, 0.5);
      display: inline-block;
      position: absolute;
      z-index: 5;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.4s;
      bottom: 4px;
    }

    .site-header--sticky #main-navigation .nav-depth > ul > li:hover {
      transition: transform 0.1s linear;
      transition-delay: 0.1s;
    }

    .site-header--sticky #main-navigation .nav-depth > ul > li:hover:after {
      opacity: 1;
      transition-delay: 0.1s;
    }

    .site-header--sticky .site-header__icons {
      pointer-events: all;
      flex: 1;
    }

    .site-header--sticky .site-header__logo {
      display: flex;
    }

    .site-header--sticky .site-header__logo #site_logo {
      height: 35px;
      width: 80px;
    }

    .ar .site-header__language-switcher {
      margin-right: 12px;
      margin-left: 17px;
    }

    .ar .site-header__usps {
      margin-left: 0;
      margin-right: auto;
    }

    .ar .site-header__usp-link {
      border-left: 0;
      border-right: 1px solid #525050;
    }

    .ar .site-header__group,
    .ar .site-header__usp-link:last-child {
      border-left: 1px solid #525050;
    }

    .ar .site-header__group {
      border-right: 0;
    }

    .ar .site-header__usp-link:last-child {
      margin: 0;
    }

    .ar .site-header__usps i.icon-cod {
      right: -10px;
      left: 0;
    }

    .ar .site-header__usps i.icon-brands,
    .ar .site-header__usps i.icon-exchanges {
      right: -6px;
    }

    #content {
      margin-top: 1px;
    }

    #template_text h1,
    .bordered_header {
      border-top: 1px solid #bdbdbd;
      position: relative;
      margin: 32px 0;
      color: #000;
    }

    #template_text h1 span,
    .bordered_header span {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -12px;
      margin-left: -125px;
      background-color: #fff;
      text-transform: uppercase;
      font-size: 18px;
      width: 250px;
      display: block;
      text-align: center;
    }

    .bordered_header.top_picks {
      border-top: 1px solid #000;
    }

    .bordered_header.top_picks span {
      width: 165px;
      left: 55%;
    }

    #login_container h2,
    #registration_container h2 {
      background-color: #eee;
      font-weight: 700;
      padding: 8px 12px;
      font-size: 14px;
    }

    #login_container h3,
    #registration_container h3 {
      font-size: 14px;
    }

    #registration_container h2 {
      padding: 12px 20px;
    }

    #catalog_container h1 {
      margin: 10px 0 17px;
      font-size: 26px;
      line-height: 1;
      text-transform: uppercase;
      color: #000;
      text-align: center;
    }

    #catalog_category_option .refine_by,
    #catalog_category_option h2,
    #catalog_filter_options .refine_by,
    #catalog_filter_options h2 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      color: #000;
      margin-bottom: 9px;
    }

    #product_container h1,
    #product_container h2,
    #product_container h3,
    #product_container h4 {
      color: #000;
    }

    #product_container h1 {
      font-size: 26px;
      line-height: 1;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    #product_container h2 {
      font-size: 12px;
      font-weight: 400;
    }

    #product_container h4 {
      font-size: 13px;
      margin-bottom: 8px;
    }

    .ar #product_container h1 {
      line-height: 2;
    }

    #cart_container h1 {
      font-size: 26px;
      text-align: center;
      color: #000;
      text-transform: uppercase;
      line-height: 1.1;
    }

    #cart_container h1 .count {
      font-size: 16px;
      font-weight: 400;
      display: block;
      text-transform: none;
    }

    #cart_container h3 {
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 5px;
    }

    #cart_empty_container h2 {
      font-size: 14px;
      margin-bottom: 9px;
    }

    #standalone_id_document_container h1 {
      margin-bottom: 20px;
    }

    #template_guide h1,
    #template_text h1 {
      margin-bottom: 17px;
    }

    #template_guide h2,
    #template_text h2 {
      color: #000;
      font-size: 16px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    #template_guide h3,
    #template_guide h4,
    #template_text h3,
    #template_text h4 {
      font-weight: 700;
      margin-top: 13px;
    }

    #template_guide h3,
    #template_text h3 {
      color: #000;
      font-size: 13px;
      margin-bottom: 5px;
    }

    #template_guide h4,
    #template_text h4 {
      color: #666;
      font-size: 12px;
      margin-bottom: 2px;
    }

    #template_sem01 h2 {
      text-align: center;
      color: #000;
      font-size: 26px;
      margin-top: 9px;
      text-transform: uppercase;
    }

    #template_brands h1 {
      margin-bottom: 15px;
    }

    .top_brands_header {
      height: 33px;
      background-color: #000;
      text-align: center;
      line-height: 33px;
      color: #fff;
      text-transform: uppercase;
    }

    .site-footer {
      display: flex;
      background-color: #fff;
      min-height: 300px;
      flex-direction: column;
    }

    .site-footer__main {
      flex-direction: row;
      justify-content: space-between;
      padding: 60px 0;
      display: flex;
    }

    .site-footer__divider {
      border-bottom: 1px solid #bdbdbd50;
      width: 100%;
      height: 1px;
    }

    .site-footer__links {
      flex-direction: row;
      display: flex;
    }

    .site-footer__social-icons {
      display: inline-flex;
      align-items: center;
      flex-direction: row;
    }

    .site-footer__social-icon {
      height: 30px;
      width: 30px;
      margin: 20px;
      margin-left: 0;
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

    .site-footer__newsletter-button {
      height: 30px;
      border-bottom: 1px solid #000;
      font-size: 13px;
      color: #363636;
      background: #fff;
      margin-bottom: 20px;
      cursor: pointer;
      font-weight: 700;
      width: 100%;
      text-align: left;
    }

    .ar .site-footer__newsletter-button {
      text-align: right;
    }

    .site-footer__section {
      margin: 0 10px;
      padding: 10px 0;
      flex: 1;
      position: relative;
      text-align: center;
      will-change: box-shadow;
      transition: box-shadow 0.75s;
    }

    .site-footer__section p.title {
      margin-bottom: 0;
    }

    .site-footer__section ul {
      opacity: 0;
      overflow: hidden;
      width: 100%;
      max-height: 0;
      will-change: max-height;
      transition: max-height 1.2s, opacity 0.5s;
      position: absolute;
      background: #fff;
      left: 0;
      bottom: 39px;
      text-align: left;
      padding: 15px;
      box-sizing: border-box;
      box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      z-index: 100;
    }

    .site-footer__section li {
      font-size: 13px;
    }

    .site-footer__section li a {
      display: block;
      padding: 5px;
      margin: 5px 0;
    }

    .site-footer__section:hover {
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    .site-footer__section:hover ul {
      opacity: 1;
      max-height: 999px;
    }

    .ar .site-footer__section ul {
      text-align: right;
    }

    .site-footer__payments-title {
      font-size: 12px;
    }

    .site-footer__device-switch {
      border-top: 1px solid #bdbdbd50;
      padding: 8px 0;
    }

    .site-footer__device-switch > p {
      margin: 0 10px;
    }

    .ar .site-footer__device-switch {
      flex-direction: row-reverse;
    }

    .site-footer__toggle {
      -webkit-appearance: none;
      appearance: none;
      width: 47px;
      height: 18px;
      display: inline-block;
      position: relative;
      border-radius: 50px;
      overflow: hidden;
      outline: none;
      border: 1px solid #ccc;
      cursor: pointer;
      background-color: #ccc;
      transition: background-color 0.3s ease;
    }

    .site-footer__toggle:focus {
      border: none;
    }

    .site-footer__toggle:before {
      content: '';
      display: block;
      position: absolute;
      z-index: 2;
      width: 10px;
      height: 10px;
      background: #fff;
      left: 5px;
      top: 3px;
      border-radius: 50%;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      transition: all 0.3s cubic-bezier(0.3, 1.5, 0.7, 1);
    }

    .site-footer__toggle:checked:before {
      left: 32px;
    }

    .newsletter-popup {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 199;
    }

    .newsletter-popup--visible {
      display: flex;
    }

    .newsletter-popup__bg {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.8);
    }

    .newsletter-popup__content {
      width: 50%;
      height: 60%;
      background-color: #fff;
      display: flex;
      flex-direction: row;
      min-height: 500px;
      min-width: 700px;
      position: relative;
      z-index: 200;
    }

    .newsletter-popup__image {
      display: flex;
      flex: 1;
      border-right: 1px solid #bdbdbd;
      justify-content: stretch;
    }

    .newsletter-popup__image img {
      max-width: 100%;
      max-height: 100%;
    }

    .newsletter-popup__image__bg {
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
    }

    .newsletter-popup__form {
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    .newsletter-popup__close {
      display: flex;
      align-self: flex-end;
    }

    .newsletter-popup__close:after {
      content: 'D7';
      font-size: 40px;
      margin: 0 10px;
      color: #9f9f9f;
      width: 25px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
    }

    .newsletter-popup__suggestions {
      margin: 10px 0;
    }

    .newsletter-popup__suggestions p.suggestion span {
      margin: 0 5px;
    }

    .newsletter-popup__email {
      padding: 30px;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .newsletter-popup__email input {
      border: 1px solid #bdbdbd50;
      height: 50px;
    }

    .newsletter-popup__email .error-label {
      margin: 10px 0;
    }

    .newsletter-popup__genders {
      padding: 0 30px;
    }

    .newsletter-popup__gender,
    .newsletter-popup__genders {
      flex-direction: row;
      display: flex;
      justify-content: center;
    }

    .newsletter-popup__gender {
      align-items: center;
      min-width: 160px;
    }

    .newsletter-popup__gender:nth-child(2) {
      justify-content: flex-start;
    }

    .newsletter-popup__gender input[type='radio'] {
      margin: 0 10px;
      height: 25px;
      width: 25px;
    }

    .newsletter-popup__gender label {
      font-size: 16px;
      margin: 0;
      width: 100%;
    }

    .newsletter-popup__privacy-policy {
      display: flex;
      padding: 0 30px;
      margin-top: 30px;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 300;
    }

    .newsletter-popup__privacy-policy input[type='checkbox'] {
      flex-basis: 30px;
    }

    .newsletter-popup__privacy-policy a {
      text-decoration: underline;
      margin: 0 5px;
      display: inline-block;
    }

    .newsletter-popup__privacy-policy .nm-checkbox__label-visible {
      margin: 0;
    }

    .ar .newsletter-popup__privacy-policy input[type='checkbox'] {
      margin: 0 15px;
    }

    .newsletter-popup__title {
      text-align: center;
      font-size: 2.5em;
    }

    .newsletter-popup__description {
      text-align: center;
      font-size: 0.9em;
      font-weight: 200;
      padding: 10px;
    }

    .newsletter-popup__subscribe {
      margin-top: 30px;
      padding: 0 30px;
      display: flex;
      justify-content: center;
    }

    .newsletter-popup__subscribe button {
      padding: 15px 70px;
      background: #000;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
    }

    .newsletter-popup__unsubscribe {
      margin-top: 30px;
      padding: 0 30px;
      display: flex;
      justify-content: center;
    }

    .newsletter-popup__unsubscribe button {
      font-size: 14px;
      font-weight: 300;
    }

    @keyframes slideUpCookieAlert {
      0% {
        transform: translate3d(0, 200%, 0);
      }
      to {
        transform: translateZ(0);
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
      bottom: -10px;
      left: 0;
      right: 0;
      background: rgba(71, 66, 82, 0.8);
      color: #fff;
      padding: 10px 0 20px;
      text-align: center;
      font-size: 14px;
      animation: slideUpCookieAlert 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      z-index: 100;
    }

    .cookieAlert a {
      color: #b8b1ff;
      font-weight: inherit;
      text-transform: lowercase;
    }

    .cookieAlert--closed {
      animation: slideDownCookieAlert 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transform: translate3d(0, 200%, 0);
    }

    .cookieAlert__btn {
      background-color: #2560a9;
      color: #fff;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 0 15px;
      outline: none;
      font-size: 20px;
      position: relative;
      bottom: -1px;
    }

    .cookieAlert__btn:hover {
      background-color: # #2560a9;
    }

    .ar .cookieAlert__btn {
      font-family: apercu, Arial, Sans-Serif;
      font-size: 18px;
    }

    a {
      color: #666;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      outline: 0;
      font-weight: 400;
    }

    .pointer,
    a[href],
    button,
    input[type='image'],
    input[type='submit'],
    label[for],
    select {
      cursor: pointer;
    }

    #template_guide li a,
    #template_guide p a,
    #template_text li a,
    #template_text p a {
      text-decoration: underline;
      color: #000;
    }

    #template_guide li a:hover,
    #template_guide p a:hover,
    #template_text li a:hover,
    #template_text p a:hover {
      text-decoration: none;
    }

    .block_button {
      background: var(--omnisell-ButtonColor);
      border-radius: 0;
      color: #fff;
      display: inline-block;
      font-size: 12px;
      text-align: center;
      height: 28px;
      line-height: 28px;
      width: 147px;
      font-weight: 400;
    }

    .block_button:hover {
      opacity: 0.5;
    }

    .block_button.secondary {
      color: #000;
      background: #ebeded;
      height: 24px;
      line-height: 24px;
      width: 143px;
    }

    .block_button.dark:hover,
    .block_button.secondary:hover {
      background: #e4e4e4;
    }

    .block_button.emphasise {
      font-size: 14px;
    }

    .block_button.emphasise,
    .block_button.emphasise.secondary {
      height: 42px;
      line-height: 42px;
      width: 240px;
    }

    .block_button.disabled {
      background-color: #e4e4e4;
      color: #9f9f9f;
    }

    .arrow_block_button,
    .cta_block_button {
      background: #fff;
      color: #000;
      border-radius: 0;
      display: inline-block;
      font-size: 12px;
      text-align: center;
      height: 32px;
      line-height: 33px;
      width: 145px;
      text-transform: uppercase;
      font-weight: 700;
    }

    .arrow_block_button:after,
    .cta_block_button:after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: #000;
      border-right-width: 0;
      margin-left: 8px;
    }

    .arrow_block_button.reversed,
    .reversed.cta_block_button {
      background-color: #000;
      color: #fff;
    }

    .arrow_block_button.reversed:after,
    .reversed.cta_block_button:after {
      border-left-color: #fff;
      border-right-color: #fff;
    }

    .ar .arrow_block_button:after,
    .ar .cta_block_button:after {
      border-right-color: #000;
      border-left-width: 0;
      margin-right: 8px;
      margin-left: 0;
      border-right-width: 5px;
    }

    .cta_text_button span,
    .text_cta {
      background: #fff;
      color: #000;
      border-radius: 0;
      display: inline-block;
      font-size: 14px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      text-decoration: none;
      position: relative;
      height: 12px;
      line-height: 12px;
    }

    .cta_text_button span.reversed,
    .text_cta.reversed {
      background-color: #000;
      color: #fff;
    }

    .cta_text_button span.link,
    .text_cta.link {
      color: #551a8b;
    }

    .cta_text_button span:after,
    .text_cta:after {
      content: '';
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -4px;
      border-width: 0 0 1px;
      border-style: solid;
    }

    .link_cta {
      color: #551a8b;
      text-decoration: underline;
    }

    .link_cta:hover {
      color: #9d64d2;
      text-decoration: none;
    }

    .cta_text_button span.reversed {
      background-color: #000;
      color: #fff;
    }

    .cta_width_one {
      width: 160px;
    }

    .cta_width_two {
      width: 170px;
    }

    .cta_width_three {
      width: 190px;
    }

    .cta_width_four {
      width: 200px;
    }

    .cta_width_five {
      width: 220px;
    }

    #catalog_filter_options .toggle_link_container a {
      color: #000;
      font-weight: 700;
      display: block;
      padding: 8px 0 9px;
    }

    #catalog_filter_options .toggle_link_container a:before {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: #000;
      border-right-width: 0;
      margin-right: 8px;
    }

    #catalog_filter_options .toggle_link_container a:hover {
      color: #8b8b8b;
    }

    #catalog_filter_options .toggle_link_container a:hover:before {
      border-left-color: #8b8b8b;
    }

    #catalog_filter_options .toggle_link_container a.open:before {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-top-color: #000;
      border-bottom-width: 0;
    }

    #catalog_filter_options .toggle_link_container a.open:hover:before {
      border-top-color: #8b8b8b;
    }

    .ar #catalog_filter_options .toggle_link_container a:before {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-right-color: #000;
      border-left-width: 0;
      margin-left: 8px;
      margin-right: 0;
    }

    .ar #catalog_filter_options .toggle_link_container a:hover:before {
      border-right-color: #8b8b8b;
    }

    .ar #catalog_filter_options .toggle_link_container a.open:before {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-top-color: #000;
      border-bottom-width: 0;
    }

    .ar #catalog_filter_options .toggle_link_container a.open:hover:before {
      border-top-color: #8b8b8b;
    }

    #product_info .toggle_link_container a {
      font-size: 13px;
      text-transform: uppercase;
      font-weight: 700;
      color: #000;
      position: relative;
      display: block;
      padding-top: 8px;
    }

    #product_info .toggle_link_container a:after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: #000;
      border-right-width: 0;
      position: absolute;
      top: 12px;
      right: 12px;
    }

    #product_info .toggle_link_container a:hover {
      color: #8b8b8b;
    }

    #product_info .toggle_link_container a:hover:after {
      border-left-color: #8b8b8b;
    }

    #product_info .toggle_link_container a.open:after {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-top-color: #000;
      border-bottom-width: 0;
    }

    #product_info .toggle_link_container a.open:hover:after {
      border-top-color: #8b8b8b;
    }

    .ar #product_info .toggle_link_container a:after {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-right-color: #000;
      border-left-width: 0;
      right: auto;
      left: 12px;
    }

    .ar #product_info .toggle_link_container a:hover:after {
      border-right-color: #8b8b8b;
    }

    .ar #product_info .toggle_link_container a.open:after {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-top-color: #000;
      border-bottom-width: 0;
    }

    .ar #product_info .toggle_link_container a.open:hover:after {
      border-top-color: #8b8b8b;
    }

    #phoneVerification_popup_close,
    #size_guide_close,
    #zoomedImage_popup_close {
      position: absolute;
      top: 12px;
      right: 12px;
      display: block;
      width: 25px;
      height: 25px;
      background-position: -116px -101px;
      z-index: 115;
    }

    #phoneVerification_popup_close:hover,
    #size_guide_close:hover,
    #zoomedImage_popup_close:hover {
      background-position: -141px -101px;
    }

    .ar #phoneVerification_popup_close,
    .ar #size_guide_close,
    .ar #zoomedImage_popup_close {
      right: auto;
      left: 12px;
    }

    #size_guide_close,
    .ar #size_guide_close {
      position: absolute;
      top: 16px;
      left: 50%;
      margin-left: 435px;
    }

    .ar #size_guide_close {
      left: auto;
      right: 50%;
      margin-left: 0;
      margin-right: 435px;
    }

    .hint_helper {
      font-size: 12px;
      color: #000;
      text-decoration: underline;
      display: inline-block;
      margin-left: 8px;
      position: relative;
    }

    .hint_helper:hover {
      text-decoration: none;
    }

    .ar .hint_helper {
      margin-left: 0;
      margin-right: 12px;
    }

    #template_text h1 a,
    h1.bordered_header a {
      color: #000;
    }

    #template_text h1 a:hover,
    h1.bordered_header a:hover {
      color: #8b8b8b;
    }

    .notification_popup .block_button {
      width: 100%;
      height: 44px;
      line-height: 44px;
      font-size: 14px;
    }

    #registration_container a.exit {
      position: absolute;
      top: 12px;
      right: 20px;
      font-size: 12px;
      text-decoration: underline;
      color: #000;
    }

    #registration_container a.exit:hover {
      text-decoration: none;
    }

    .ar #registration_container a.exit {
      right: auto;
      left: 20px;
    }

    #catalog_container header .option_container a {
      font-weight: 400;
      padding: 0 8px;
      line-height: 26px;
    }

    #catalog_container header .option_container a.option_header {
      font-size: 12px;
      display: inline-block;
      border: 1px solid #bdbdbd;
      width: 160px;
      position: relative;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      font-weight: 700;
    }

    #catalog_container header .option_container a.option_header:after {
      content: ' ';
      width: 20px;
      height: 26px;
      position: absolute;
      display: inline-block;
      top: 0;
      right: 0;
      background-position: -166px -101px;
      pointer-events: none;
      border: none;
    }

    #catalog_container header .option_container .sortBy {
      display: inline-block;
      margin-right: 10px;
      font-weight: 400;
    }

    #catalog_container header .option_container.closed a.option_header {
      color: #000;
      font-weight: 700;
    }

    #catalog_sort_option li a {
      display: block;
      color: #000;
    }

    #catalog_sort_option li a:hover {
      background-color: #eee;
    }

    .ar #catalog_container header .option_container a.option_header:after {
      left: 0;
      right: auto;
    }

    ul#catalog_listings li.listing .size_options li a,
    ul.catalog_listings li.listing .size_options li a {
      display: block;
      border: 1px solid #bdbdbd;
      margin-top: 4px;
      padding: 7px 15px 5px;
      font-size: 10px;
      font-weight: 400;
      background-color: #fff;
      color: #000;
    }

    ul#catalog_listings li.listing .size_options li a:hover,
    ul.catalog_listings li.listing .size_options li a:hover {
      background-color: #bdbdbd;
      color: #fff;
    }

    #catalog_return {
      font-size: 12px;
      color: #000;
      float: left;
      margin-right: 32px;
    }

    #catalog_return:before {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-right-color: #000;
      border-left-width: 0;
      content: '';
      margin-right: 8px;
    }

    #catalog_return:hover {
      color: #8b8b8b;
    }

    #catalog_return:hover:before {
      border-right-color: #8b8b8b;
    }

    .ar #catalog_return {
      float: right;
      margin-left: 32px;
      margin-right: 0;
    }

    .ar #catalog_return:before {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: #000;
      border-right-width: 0;
      margin-left: 8px;
      margin-right: 0;
    }

    .ar #catalog_return:hover:before {
      border-left-color: #8b8b8b;
    }

    .ie8 #catalog_return:before {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-right-color: #000;
      border-left-width: 0;
    }

    .ie8 #catalog_return:hover:before {
      border-right-color: #8b8b8b;
    }

    #catalog_category_option li a {
      padding-top: 5px;
      display: block;
      color: #000;
    }

    #catalog_category_option li a:before {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: #000;
      border-right-width: 0;
      content: '';
      margin-right: 8px;
    }

    #catalog_category_option li a:hover {
      color: #8b8b8b;
    }

    #catalog_category_option li a:hover:before {
      border-left-color: #8b8b8b;
    }

    #catalog_category_option li:first-child a {
      padding-top: 0;
    }

    .ar #catalog_category_option li a:before {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-right-color: #000;
      border-left-width: 0;
      margin-left: 8px;
      margin-right: 0;
    }

    .ar #catalog_category_option li a:hover:before {
      border-right-color: #8b8b8b;
    }

    .ie8 #catalog_category_option li a:before {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: #000;
      border-right-width: 0;
    }

    .ie8 #catalog_category_option li a:hover:before {
      border-left-color: #8b8b8b;
    }

    #catalog_filter_options .filter_block a.filter_reset {
      position: absolute;
      top: 5px;
      right: 8px;
      padding: 3px 10px 2px;
    }

    #catalog_filter_options .filter_block a.filter_reset:hover {
      text-decoration: underline;
    }

    .ar #catalog_filter_options .filter_block a.filter_reset {
      left: 8px;
      right: auto;
      padding: 1px 10px 4px;
    }

    .ar #catalog_filter_options .filter_block a.filter_reset:hover {
      text-decoration: underline;
    }

    .filter_reset {
      background: #f5f5f5;
      color: #000;
      font-weight: 400;
      font-size: 10px;
    }

    #selected_facets ul li a.remove_applied_filter {
      color: #666;
      padding: 6px 8px 5px;
      display: inline-block;
      border-radius: 2px;
    }

    #selected_facets ul li.reset_facets a {
      color: #000;
      text-decoration: underline;
      cursor: pointer;
    }

    #selected_facets ul li.reset_facets a:hover {
      text-decoration: none;
    }

    #size_guide_trigger,
    #size_notify_trigger {
      font-size: 12px;
      color: #000;
    }

    #size_guide_trigger:hover,
    #size_notify_trigger:hover {
      color: #8b8b8b;
    }

    #size_guide_trigger {
      display: inline-block;
      margin-top: 6px;
    }

    #product_container header h1 a {
      color: #000;
      font-weight: 500;
    }

    #product_container header h1 a:hover {
      color: #8b8b8b;
    }

    #product_container header a.brand_logo {
      padding: 0 8px;
      margin-top: 3px;
      float: right;
    }

    #product_container header a.brand_logo:hover {
      opacity: 0.8;
    }

    #product_container li.zoom_image a {
      cursor: crosshair;
    }

    #product_container
    .associated_products_container
    ul.catalog_listings
    a.product_listing_link:hover {
      opacity: 0.8;
    }

    .ar #product_container header a.brand_logo {
      float: left;
    }

    #product_color a {
      border: 1px solid #fff;
      display: block;
    }

    #product_color a.selected {
      border-color: #bdbdbd;
    }

    #product_color a:hover {
      opacity: 0.8;
      border-color: #bdbdbd;
    }

    #cart_container .ctas .block_button {
      margin-left: 0;
    }

    #cart_container .table_product_overview a {
      text-decoration: underline;
    }

    #cart_container .table_product_overview a:hover {
      text-decoration: none;
    }

    ul li {
      font-size: 12px;
    }

    ul.bullet_list {
      list-style-type: disc;
      margin-left: 12px;
      text-align: left;
    }

    .ar ul.bullet_list {
      margin-left: 0;
      margin-right: 12px;
      text-align: right;
    }

    #template_guide ul,
    #template_text ul {
      margin-bottom: 9px;
    }

    #template_guide ul.bullet_list li,
    #template_text ul.bullet_list li {
      margin-top: 5px;
    }

    #template_guide ul.bullet_list li:first-child,
    #template_text ul.bullet_list li:first-child {
      margin-top: 0;
    }

    #site_header ul.site_search_suggestions,
    ul.site_search_suggestions {
      background-color: #fff;
      position: absolute;
      top: 32px;
      left: 0;
      width: 100%;
      z-index: 30;
    }

    #site_header ul.site_search_suggestions li,
    ul.site_search_suggestions li {
      border-top: 1px solid #bdbdbd;
      font-size: 14px;
      text-transform: none;
    }

    #site_header ul.site_search_suggestions li a,
    ul.site_search_suggestions li a {
      display: block;
      padding: 8px;
      color: #666;
      cursor: pointer;
      text-align: left;
    }

    #site_header ul.site_search_suggestions li a:hover,
    ul.site_search_suggestions li a:hover {
      background-color: #eee;
    }

    .ar #site_header ul.site_search_suggestions li a,
    .ar ul.site_search_suggestions li a {
      text-align: right;
    }

    ul.usps {
      text-align: center;
    }

    ul.usps > li {
      position: relative;
      display: inline-block;
    }

    ul.usps > li:before {
      content: '.';
      font-weight: 700;
      display: inline-block;
      padding: 0 8px;
    }

    ul.usps > li:first-child:before {
      content: '';
      padding: 0;
    }

    .ar ul.usps {
      text-align: center;
    }

    .ar ul.usps > li {
      font-size: 13px;
    }

    .ar ul.usps > li.cod {
      min-width: 125px;
    }

    ul.usps_icons > li {
      margin-right: 12px;
      text-transform: uppercase;
      display: inline-block;
    }

    ul.usps_icons > li:before {
      width: 30px;
      height: 22px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 8px;
      content: '';
    }

    ul.usps_icons > li.delivery:before {
      background-position: -196px 0;
    }

    ul.usps_icons > li.cod:before {
      background-position: -196px -22px;
    }

    ul.usps_icons > li.brands:before {
      background-position: -196px -44px;
      width: 23px;
    }

    ul.usps_icons > li.exchanges:before {
      background-position: -196px -66px;
      width: 23px;
    }

    ul.usps_icons > li.worldwide:before {
      background-position: -196px -88px;
      width: 22px;
    }

    .ar ul.usps_icons > li {
      margin-right: 0;
      margin-left: 12px;
    }

    .ar ul.usps_icons > li:before {
      margin-right: 0;
      margin-left: 8px;
    }

    ul.payment_methods li {
      display: inline-block;
      height: 20px;
      margin-left: 12px;
      margin-top: 0;
    }

    ul.payment_methods li:first-child {
      margin-left: 0;
    }

    ul.payment_methods li.paypal {
      background-position: 0 -175px;
      width: 58px;
    }

    ul.payment_methods li.visa {
      background-position: -58px -175px;
      width: 38px;
    }

    ul.payment_methods li.mastercard {
      background-position: -96px -175px;
      width: 33px;
    }

    ul.payment_methods li.cash_on_delivery {
      background-position: 0 -195px;
      width: 45px;
    }

    ul.payment_methods li.apple_pay {
      background-position: 0 -375px;
      width: 32px;
      height: 21px;
    }

    .ar ul.payment_methods li {
      margin-left: 0;
      margin-right: 12px;
    }

    .ar ul.payment_methods li:first-child {
      margin-right: 0;
    }

    ul.certification {
      text-align: center;
    }

    ul.certification li {
      display: inline-block;
      height: 36px;
      margin-left: 16px;
    }

    ul.certification li:first-child {
      margin-left: 0;
    }

    ul.certification li.visa_verified {
      width: 64px;
      background-position: 0 -215px;
    }

    ul.certification li.mastercard_securecode {
      width: 86px;
      background-position: -64px -215px;
    }

    .ar ul.certification li {
      margin-left: 0;
      margin-right: 16px;
    }

    .ar ul.certification li:first-child {
      margin-right: 0;
    }

    #site_header .usps li,
    .site-header .usps li {
      cursor: help;
    }

    #site_header .usps .details,
    .site-header .usps .details {
      position: absolute;
      top: 27px;
      left: 50%;
      z-index: 203;
      width: 200px;
      margin-left: -100px;
      padding-top: 6px;
      text-align: left;
    }

    #site_header .usps .details:after,
    .site-header .usps .details:after {
      background-position: -158px -74px;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -7px;
      content: '';
      display: block;
      width: 14px;
      height: 7px;
    }

    #site_header .usps .details ul,
    .site-header .usps .details ul {
      background-color: #fff;
      border: 1px solid #bdbdbd;
      padding: 10px;
    }

    #site_header .usps .details ul li,
    .site-header .usps .details ul li {
      color: #666;
      font-size: 10px;
      text-transform: none;
      padding-left: 14px;
      margin-bottom: 2px;
      position: relative;
      font-weight: 400;
    }

    #site_header .usps .details ul li:before,
    .site-header .usps .details ul li:before {
      background-position: -172px -74px;
      width: 10px;
      height: 8px;
      position: absolute;
      top: 3px;
      left: 0;
      content: '';
    }

    #site_header .usps .details ul li a,
    .site-header .usps .details ul li a {
      color: #000;
      text-decoration: underline;
    }

    .ar #site_header .usps .details,
    .ar .site-header .usps .details {
      text-align: right;
    }

    .ar #site_header .usps .details ul li,
    .ar .site-header .usps .details ul li {
      padding-right: 14px;
      padding-left: auto;
    }

    .ar #site_header .usps .details ul li:before,
    .ar .site-header .usps .details ul li:before {
      right: 0;
      left: auto;
    }

    ul.product_overview li.product {
      overflow: hidden;
      *zoom: 1;
      margin-top: 12px;
    }

    ul.product_overview li.product:first-child {
      margin-top: 0;
    }

    ul.product_overview li.product ul.product_details {
      float: left;
      width: 60%;
      margin: 0 10px;
      color: #000;
    }

    ul.product_overview li.product ul.product_details li {
      font-weight: 400;
      font-size: 14px;
    }

    ul.product_overview li.product ul.product_details li.description {
      font-weight: 700;
    }

    .ar ul.product_overview li.product ul.product_details {
      float: right;
    }

    ul.cost_overview li {
      font-size: 14px;
      overflow: hidden;
      *zoom: 1;
      text-transform: uppercase;
      color: #000;
    }

    ul.cost_overview li span {
      float: right;
      color: #000;
    }

    ul.cost_overview li.total,
    ul.cost_overview li.total_usd {
      border-top: 1px solid #bdbdbd;
      font-size: 22px;
      color: #000;
      padding-top: 6px;
      margin-top: 3px;
    }

    ul.cost_overview li.total_usd {
      margin-top: 7px;
    }

    ul.cost_overview li.shipping span {
      color: #000;
    }

    ul.cost_overview li.duties {
      font-size: 12px;
      font-weight: 400;
      text-transform: none;
      text-align: right;
    }

    .ar ul.cost_overview li {
      margin-bottom: 5px;
    }

    .ar ul.cost_overview li span {
      float: left;
    }

    .ar ul.cost_overview li.duties {
      text-align: left;
    }

    #cart_review ul.cost_overview li.total {
      font-size: 16px;
    }

    ul#catalog_listings,
    ul.catalog_listings {
      position: relative;
      font-size: 0;
    }

    ul#catalog_listings li.listing,
    ul.catalog_listings li.listing {
      display: inline-block;
      width: 23.5%;
      vertical-align: top;
      margin-bottom: 12px;
      position: relative;
      margin-right: 2%;
      border: 1px solid #f6f6f6;
      height: fit-content;

    }

    ul#catalog_listings li.listing:nth-child(4n),
    ul.catalog_listings li.listing:nth-child(4n) {
      margin-right: 0;
    }

    ul#catalog_listings li.listing ul.size_options,
    ul.catalog_listings li.listing ul.size_options {
      text-align: start;
    }

    ul#catalog_listings li.listing ul.size_options.variant,
    ul.catalog_listings li.listing ul.size_options.variant {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 35;
      background-color: hsla(0, 0%, 100%, 0.8);
      padding: 0 2px 4px;
    }

    ul#catalog_listings li.listing ul.size_options li,
    ul.catalog_listings li.listing ul.size_options li {
      display: inline-block;
      margin-left: 2px;
      margin-right: 2px;
      font-family: apercu, Arial, Sans-Serif;
      direction: ltr;
    }

    ul#catalog_listings li.listing ul.size_options li.listingAddToBag,
    ul.catalog_listings li.listing ul.size_options li.listingAddToBag {
      margin-top: 2px;
      margin-bottom: 6px;
      border: 1px solid #bdbdbd;
      padding: 7px 10px 5px;
      font-size: 10px;
      font-weight: 400;
      background-color: #fff;
      color: #000;
      direction: ltr;
      cursor: pointer;
      position: relative;
    }
    
      ul#catalog_listings li.listing ul.size_options .size_listing_no_stock,
    ul.catalog_listings li.listing ul.size_options .size_listing_no_stock{
    color: rgba(0,0,0,0.25);
    position: absolute;
    top:0px;
    left: 2px;
    }
ul#catalog_listings li.listing ul.size_options .size_listing_no_stock svg,
    ul.catalog_listings li.listing ul.size_options .size_listing_no_stock svg{
    width: 24px;
    height: 24px;
    }
    ul#catalog_listings li.listing ul.size_options li.listingAddToBag:hover,
    ul.catalog_listings li.listing ul.size_options li.listingAddToBag:hover {
      background-color: #bdbdbd;
      color: #fff;
    }

    .add-to-cart {
      padding: 8px 14px;
      background: transparent;
      border: .5px solid rgba(0, 0, 0, 0.15);
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
    }

    .quick_view_cta {
      position: relative;
      overflow: hidden;
      outline: none;
      cursor: pointer;
      background: transparent;
      margin-left: 6px;
    }

    .default-btn, .hover-btn {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px;
      font-size: 12px;
      text-transform: uppercase;
      transition: all .3s ease;
      background: transparent;

    }

    .hover-btn {
      position: absolute;
      inset: 0;
      transform: translate(0%, 100%);
    }

    .default-btn span {
      color: hsl(0, 0%, 100%);
    }

    .hover-btn span {
      color: hsl(50deg 100% 50%);
    }

    button:hover .default-btn {
      transform: translate(0%, -100%);
    }

    button:hover .hover-btn {
      transform: translate(0%, 0%);
    }

    .add-to-cart svg {
      width: 17px;
      height: 17px;
      margin-right: 10px;
    }

    .quick_view_container {
      display: flex;
      justify-content: space-between;
      padding: 2em;
      width: 100%
    }

    .quick_view_container_image_wrapper {
      width: 48%;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .quick_view_container_image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .quick_view_container_content {
      width: 50%;
      margin-left: 20px;
    }

    ul#catalog_listings li.listing.last,
    ul.catalog_listings li.listing.last {
      margin-right: 0 !important;
    }

    ul#catalog_listings.less li.listing,
    ul.catalog_listings.less li.listing {
      margin-left: 10px;
      margin-right: 0;
    }

    .ar ul#catalog_listings li.listing,
    .ar ul.catalog_listings li.listing {
      margin-right: 0;
      margin-left: 2%;
    }

    .ar ul#catalog_listings li.listing.last,
    .ar ul.catalog_listings li.listing.last {
      margin-left: 0 !important;
    }

    .ar ul#catalog_listings.less li.listing,
    .ar ul.catalog_listings.less li.listing {
      margin-left: 0;
      margin-right: 10px;
    }

    #catalog_filter_options {
      border-top: 1px solid #bdbdbd;
      padding-top: 9px;
    }

    #catalog_filter_brand_list {
      margin-top: 12px;
    }

    #catalog_filter_color ul,
    #catalog_filter_size_original ul,
    #catalog_filter_size ul {
      overflow: hidden;
      *zoom: 1;
      margin-left: -12px;
      width: 196px;
    }

    #catalog_filter_color ul li,
    #catalog_filter_size_original ul li,
    #catalog_filter_size ul li {
      float: left;
    }

    .ar #catalog_filter_color ul,
    .ar #catalog_filter_size_original ul,
    .ar #catalog_filter_size ul {
      margin-right: -12px;
      margin-left: 0;
    }

    .ar #catalog_filter_color ul li,
    .ar #catalog_filter_size_original ul li,
    .ar #catalog_filter_size ul li {
      float: right;
    }

    #selected_facets ul {
      margin-top: 4px;
      font-size: 0;
    }

    #selected_facets ul li {
      display: inline-block;
      padding-right: 8px;
      margin-right: 8px;
      border-right: 1px solid #bdbdbd;
    }

    #selected_facets ul li.reset_facets {
      padding: 0;
      margin: 0;
      border: 0;
    }

    .ar #selected_facets ul li {
      padding-left: 8px;
      padding-right: 0;
      margin-left: 8px;
      margin-right: 0;
      border-right: 0;
      border-left: 1px solid #bdbdbd;
    }

    .ar #selected_facets ul li.reset_facets {
      padding: 0;
      margin: 0;
      border: 0;
    }

    #catalog_container header .controls #catalog_sort_option {
      position: absolute;
      top: 28px;
      right: 0;
      background-color: #fff;
      width: 158px;
      z-index: 60;
      border: 1px solid #bdbdbd;
      border-top: 0;
    }

    .ar #catalog_container header .controls #catalog_sort_option {
      right: auto;
      left: 0;
    }

    #product_container .info_content ul {
      list-style-type: disc;
      margin-left: 13px;
    }

    #product_container .option_select #size_mapper {
      width: 100%;
      display: block;
      float: left;
      margin-bottom: 10px;
    }

    #product_container .option_select ul {
      font-size: 0;
    }

    #product_container .option_select ul li {
      display: inline-block;
      margin-bottom: 12px;
      margin-right: 12px;
    }

    #product_container .associated_products_container ul.catalog_listings > li {
      width: 14.2857%;
      margin-bottom: 12px;
    }

    #product_container
    .associated_products_container
    ul.catalog_listings
    > li
    .image_container {
      margin-bottom: 0;
    }

    #product_container .also_like_container ul.catalog_listings > li,
    #product_container .recently_viewed_container ul.catalog_listings > li {
      width: 19.99%;
      margin-bottom: 9px;
    }

    .ar #product_container .info_content ul {
      margin-left: 0;
      margin-right: 13px;
    }

    .ar #product_container .option_select #size_mapper {
      float: right;
    }

    .ar #product_container .option_select ul li {
      margin-left: 12px;
      margin-right: 0;
    }

    #product_color {
      padding-bottom: 5px;
    }

    #product_info .existing_reviews {
      list-style-type: none;
      margin: 9px 0 0;
      border-bottom: 1px solid #bdbdbd;
      width: 90%;
      padding-bottom: 8px;
    }

    #product_info .existing_reviews:first-child {
      margin-top: 0;
    }

    #cart_container ul.cost_overview li {
      padding-right: 12px;
      padding-left: 12px;
    }

    #cart_container ul.payment_methods li {
      margin-left: 0;
      margin-right: 10px;
    }

    #cart_container ul.usps_icons > li {
      margin-top: 6px;
    }

    #cart_container ul.usps_icons > li:before {
      width: 30px;
    }

    #cart_container ul.usps_icons > li:first-child {
      margin-top: 0;
    }

    #cart_container ul.certification {
      text-align: left;
    }

    .ar #cart_container ul.certification,
    .ar #cart_container ul.payment_methods {
      text-align: right;
    }

    label.selected {
      border: 1px solid #000;
    }

    label.disabled {
      color: #9f9f9f;
    }

    .listing .wishlist-button {
      background: #fff;
      border-radius: 50%;
      height: unset;
      padding: 7px 7px 5px;
      margin: 10px 10px 0 0;
    }

    .listing .wishlist-button.active .wishlist-icon {
      fill: #2560a9;
    }

    .listing .wishlist-icon {
      stroke: #000;
      width: 20px;
      height: 20px;
    }

    .listing.active .color-tag {
      display: none;
    }

    .catalog-tag {
      bottom: -1px;
      z-index: 20;
      padding: 0.7em;
      background: hsla(0, 0%, 93%, 0.85);
      box-sizing: border-box;
      letter-spacing: 1px;
      color: #000;
    }

    .catalog-tag--bottom {
      color: #c4633d;
      border-radius: 4px;
      border: 1px solid #c4633d;
      padding: 4.5px 6px 2px;
      margin: 5px 0;
      font-size: 10px;
    }

    @keyframes stroke {
      to {
        stroke-dashoffset: 0;
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

    @keyframes fill {
      0% {
        box-shadow: inset 0 0 0 30px #00cba5;
      }
      to {
        box-shadow: inset 0 0 0 30px #fff;
      }
    }

    .checkmark {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: block;
      stroke-width: 5;
      stroke: #00cba5;
      stroke-miterlimit: 10;
      margin: 0 auto 15px;
      box-shadow: inset 0 0 0 #fff;
      animation: fill 0.4s ease-in-out 0.4s forwards,
      scale 0.3s ease-in-out 0.9s both;
    }

    .checkmark__circle {
      stroke-dasharray: 166;
      stroke-dashoffset: 166;
      stroke-width: 2;
      stroke-miterlimit: 10;
      stroke: #fff;
      fill: none;
      animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }

    .checkmark__check {
      transform-origin: 50% 50%;
      stroke-dasharray: 48;
      stroke-dashoffset: 48;
      animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }

    @-webkit-keyframes shake {
      0%,
      to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
      }
      20%,
      40%,
      60%,
      80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
      }
    }

    @keyframes shake {
      0%,
      to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
      }
      20%,
      40%,
      60%,
      80% {
        -webkit-transform: translate3d(10px, 0, 0);
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

    @-webkit-keyframes bounce {
      0%,
      20%,
      53%,
      80%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }
      40%,
      43% {
        -webkit-animation-timing-function: cubic-bezier(0.755,
        0.05,
        0.855,
        0.06);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -30px, 0);
        transform: translate3d(0, -30px, 0);
      }
      70% {
        -webkit-animation-timing-function: cubic-bezier(0.755,
        0.05,
        0.855,
        0.06);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -15px, 0);
        transform: translate3d(0, -15px, 0);
      }
      90% {
        -webkit-transform: translate3d(0, -4px, 0);
        transform: translate3d(0, -4px, 0);
      }
    }

    @keyframes bounce {
      0%,
      20%,
      53%,
      80%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }
      40%,
      43% {
        -webkit-animation-timing-function: cubic-bezier(0.755,
        0.05,
        0.855,
        0.06);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -30px, 0);
        transform: translate3d(0, -30px, 0);
      }
      70% {
        -webkit-animation-timing-function: cubic-bezier(0.755,
        0.05,
        0.855,
        0.06);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -15px, 0);
        transform: translate3d(0, -15px, 0);
      }
      90% {
        -webkit-transform: translate3d(0, -4px, 0);
        transform: translate3d(0, -4px, 0);
      }
    }

    .bounce {
      -webkit-animation-name: bounce;
      animation-name: bounce;
      -webkit-transform-origin: center bottom;
      transform-origin: center bottom;
    }

    [class^='icon-'] {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-size: contain;
      background-repeat: no-repeat;
      vertical-align: middle;
      text-align: center;
    }

    .icon-cart,
    .icon-loader-white {
      width: inherit;
      height: inherit;
    }

    .icon-delivery {
      background-image: url(/web-desktop/18a63ecefc7d8ba6a573b888d210edd1.svg);
    }

    .icon-cod {
      background-image: url(/web-desktop/13412bdc2f26842f525223fa80be3f59.svg);
    }

    .icon-brands {
      background-image: url(/web-desktop/f2e6487890648cb123da333cebe1c71d.svg);
    }

    .icon-exchanges {
      background-image: url(/web-desktop/72699c7d684c2143c333ee5babf52e05.svg);
    }

    .icon-done {
      background-image: url(/web-desktop/6c0f4e3d3b61cb5701bb09c99cb5ab15.svg);
      height: 12px;
      width: 12px;
    }

    .icon-envelope {
      background-image: url(/web-desktop/2e36bce53f225beeb0078bb1755b2783.svg);
      height: 13px;
      width: 13px;
    }

    .icon-success {
      background-image: url(/web-desktop/abb011d2c61ec3f8518c97fc508aa233.svg);
      height: 32px;
      width: 32px;
    }

    .social_icons li {
      display: inline-block;
    }

    .social_icons li a.icon-instagram {
      background-image: url(/web-desktop/1261ec01c2b1e28b788be36c96555187.png);
    }

    .social_icons li a.icon-facebook {
      background-image: url(/web-desktop/2273f6d6b9b2fab92f2cc6e35426b87b.png);
    }

    .social_icons li a.icon-pinterest {
      background-image: url(/web-desktop/94c07217ba2a1cc22267c5ec5c12fd50.png);
    }

    .social_icons li a.icon-twitter {
      background-image: url(/web-desktop/7c51d5c3f7f88cda73978fc624a5eac1.png);
    }

    .social_icons li a.icon-youtube {
      background-image: url(/web-desktop/1f8ad4880ce2d21a0a5afb8f1237d526.png);
    }

    .social_icons li a.icon-googleplus {
      background-image: url(/web-desktop/10a9b4010a342e79f49d51b8b3971040.png);
    }

    .social_icons li a.icon-blog {
      background-image: url(/web-desktop/ff9030530fc9def01617c34760340ae5.png);
    }

    p {
      font-size: 12px;
    }

    strong {
      font-weight: 700;
    }

    p.error,
    p.helper,
    p.success,
    p.warning {
      margin-top: 5px;
      font-size: 11px;
      color: #e00000;
    }

    p.success {
      color: #009b12;
    }

    p.helper {
      color: #666;
    }

    p.helper .warning {
      color: #e00000;
    }

    p.form_support {
      text-align: right;
      margin-top: 20px;
    }

    .pre_reduction {
      color: #999;
      font-weight: 400;
      font-size: 11px;
      text-decoration: line-through;
    }

    .reduction {
      color: #51c0a9;
      font-size: 13px;
      font-weight: 500;
    }

    .download_app_header {
      font-size: 14px;
      line-height: 1.5;
      color: #000;
    }

    .download_app_header span {
      display: block;
      font-weight: 700;
      font-size: 13px;
    }

    #site_header .download_app_header {
      position: absolute;
      bottom: 0;
      left: 0;
      text-transform: uppercase;
      font-weight: 700;
    }

    #site_header .download_app_header span {
      display: inline-block;
      font-weight: 400;
      font-size: 13px;
    }

    .ar #site_header .download_app_header {
      right: 0;
      left: auto;
      bottom: 12px;
    }

    .ar #site_header .download_app_header span {
      text-align: right;
    }

    #site_footer p {
      font-size: 11px;
    }

    #site_footer p.title {
      font-size: 14px;
    }

    #site_footer .primary p.title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    #site_footer .contact_number {
      font-size: 20px;
      font-weight: 400;
    }

    #site_footer .email {
      font-size: 16px;
      font-weight: 400;
    }

    #site_footer .support p {
      display: inline-block;
    }

    #site_footer .support p.copyright {
      font-weight: 400;
    }

    #site_footer .support p.copyright:after {
      content: '|';
      padding: 0 4px;
    }

    #template_guide p,
    #template_text p {
      margin-bottom: 9px;
    }

    #template_guide code,
    #template_text code {
      font-family: Consolas, Liberation Mono, Courier, monospace;
      background-color: #eee;
      color: #000;
    }

    #template_brands p {
      margin-bottom: 9px;
    }

    #newsletter_signup_footer p {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 16px;
    }

    #newsletter_signup_footer p.suggestion span {
      display: block;
    }

    #newsletter_signup_footer p.suggestion span a {
      text-decoration: underline;
      cursor: pointer;
      color: #8b8b8b;
    }

    #newsletter_signup_footer p.title {
      margin-bottom: 20px;
      font-size: 22px;
      font-weight: 500;
    }

    .notification_banner li {
      font-size: 12px;
      font-weight: 700;
      color: #fff;
    }

    #notification_popup p {
      font-size: 14px;
    }

    #notification_popup.checkout_progress p.loader {
      font-size: 12px;
      background: url(/web-desktop/3cd1c72c8ef35ccf976d97d99798d7b7.gif) no-repeat top;
      padding-top: 24px;
      margin-top: 8px;
      font-weight: 400;
    }

    #no_results_container p.emphasise,
    #section_404_container p.emphasise {
      font-size: 22px;
      margin-bottom: 7px;
      color: #000;
      text-transform: uppercase;
    }

    #no_results_container p.list_title,
    #section_404_container p.list_title {
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    .hint_container {
      position: absolute;
      top: 14px;
      left: 0;
      width: 300px;
      border: 1px solid #bdbdbd;
      background-color: #fff;
      padding: 5px 8px 4px;
    }

    .ar .hint_container {
      left: auto;
      right: 0;
    }

    #catalog_container .items {
      font-size: 13px;
      font-weight: 400;
      float: left;
      color: #000;
    }

    #catalog_container .controls .option_container p {
      display: inline-block;
      font-size: 13px;
      font-weight: 700;
      color: #000;
      margin-right: 8px;
    }

    .ar #catalog_container .items {
      float: right;
    }

    .ar #catalog_container .controls .option_container p {
      margin-left: 8px;
      margin-right: 0;
    }

    ul#catalog_listings li.listing .details_container,
    ul.catalog_listings li.listing .details_container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 6px;
      margin-top: 60px;
    }

    ul#catalog_listings li.listing .details_container p.brand,
    ul.catalog_listings li.listing .details_container p.brand {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 2px;
      color: #333;
    }

    ul#catalog_listings li.listing .details_container p.description,
    ul.catalog_listings li.listing .details_container p.description {
      font-weight: 400;
      padding-bottom: 4px;
    }

    ul#catalog_listings li.listing .details_container p.price,
    ul.catalog_listings li.listing .details_container p.price {
      color: #2560a9;
      font-weight: 700;
      font-size: 13px;
    }

    ul#catalog_listings li.listing a:hover .details_container p.brand,
    ul.catalog_listings li.listing a:hover .details_container p.brand {
      color: #8b8b8b;
    }

    #product_container .product_details p.price {
      font-size: 16px;
      font-weight: 700;
      color: #000;
      margin-top: 5px;
    }

    #product_container .product_details p.price .reduction {
      color: #51c0a9;
    }

    #product_container .product_details p.delivery_estimation {
      margin-top: 5px;
      color: #2560a9;
      font-weight: 400;
      text-transform: uppercase;
    }

    #product_container .option_select_messages p {
      margin: 0 0 8px;
    }

    #product_info {
      font-size: 12px;
    }

    #cart_container p.download_app_header {
      float: left;
    }

    p.delivery_notice {
      color: #000;
      float: left;
      font-size: 16px;
      margin-top: 19px;
    }

    p.delivery_notice span {
      color: #8b8b8b;
    }

    p.delivery_warning {
      text-align: center;
      border: 2px solid #000;
      color: #000;
      font-size: 13px;
      margin-top: 16px;
      padding: 6px 0 8px;
      font-weight: 400;
    }

    p.delivery_warning span.attention {
      display: block;
      color: #8b8b8b;
      font-size: 20px;
    }

    p.delivery_warning span {
      text-transform: uppercase;
      font-weight: 700;
    }

    .ar #cart_container p.download_app_header {
      float: right;
    }

    .ar #cart_container p.download_app_header span {
      text-align: right;
    }

    .ar #cart_container p.delivery_notice {
      float: right;
    }

    .toggle_content_container {
      padding-top: 6px;
    }

    #template_guide {
      padding-top: 12px;
      border-bottom: 1px solid #bdbdbd;
    }

    #template_guide .group {
      margin-bottom: 14px;
    }

    #template_column_grid,
    #template_gender,
    #template_home,
    #template_sem01 {
      padding: 0 0 32px;
    }

    #template_sem02 {
      padding: 16px 0 32px;
    }

    #template_text {
      padding: 12px 0 32px;
    }

    #template_text .group {
      margin-bottom: 14px;
    }

    #template_sem01 .group {
      margin-top: 24px;
    }

    #template_sem01 .group:first-child {
      margin-top: 0;
    }

    #template_brands {
      padding: 16px 0 20px;
    }

    #template_home .top_features {
      overflow: hidden;
      *zoom: 1;
    }

    #template_home .editorial {
      padding-top: 20px;
    }

    #template_home .editorial h2 {
      margin-bottom: 10px;
    }

    #template_gender .top_features {
      overflow: hidden;
      *zoom: 1;
    }

    #template_gender .top_features .sub_navigation_container {
      width: 245px;
      height: 500px;
      background-color: #eee;
      padding: 16px 0 0 20px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      float: left;
    }

    #template_gender .top_features .hero_carousel_container {
      position: relative;
      float: left;
      width: 755px;
    }

    .ar #template_gender .top_features .sub_navigation_container {
      padding: 16px 20px 0 0;
      float: right;
    }

    .ar #template_gender .top_features .hero_carousel_container {
      float: right;
    }

    #intro_page {
      background-color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 300;
    }

    #intro_page .content {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      margin-top: -39px;
    }

    #intro_page .logo {
      width: 196px;
      height: 38px;
      background-position: 0 -242px;
      margin: 0 auto;
    }

    #intro_page .loader {
      background: url(/web-desktop/4b3afb84b2b71ef56df09997a350bd04.gif) no-repeat 0 0;
      width: 24px;
      height: 24px;
      margin: 16px auto 0;
    }

    .ar #intro_page .content {
      margin-top: -45px;
    }

    .ar #intro_page .logo {
      width: 158px;
      height: 50px;
      background-position: 0 -280px;
    }

    #site_header .primary_row {
      position: relative;
      margin-top: 32px;
    }

    #site_header .secondary_row {
      *zoom: 1;
      position: relative;
    }

    #site_header .secondary_row:after {
      content: ' ';
      display: block;
      height: 0;
      clear: both;
      overflow: hidden;
      visibility: hidden;
    }

    #site_header .simple_header .primary_row {
      margin-top: 2px;
    }

    .ar #site_header .primary_row .gender_menu {
      float: right;
      left: auto;
      right: 0;
    }

    .ar #site_header .primary_row .gender_menu li {
      display: inline-block;
      padding-right: 0;
      margin-left: 20px;
      padding-left: 20px;
      position: relative;
    }

    .ar #site_header .primary_row .gender_menu li:after {
      content: ' ';
      position: absolute;
      width: 1px;
      left: -20px;
      right: auto;
      background: #8d8d8e;
      height: 12px;
      top: 3px;
    }

    .ar #site_header .primary_row .gender_menu li:last-child:after {
      content: none;
    }

    #cart_review_container {
      position: absolute;
      top: 25px;
      right: 2px;
      z-index: 207;
      padding-top: 10px;
    }

    #cart_review_container:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-bottom-color: #fff;
      border-top-width: 0;
      display: block;
    }

    #cart_review {
      background-color: #fff;
      width: 300px;
      padding: 16px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    #cart_review .product_overview {
      max-height: 250px;
      overflow-y: auto;
      margin-bottom: 16px;
    }

    #cart_review .product_overview li {
      text-transform: none;
    }

    #cart_review .product_overview li.price:after {
      content: '';
      display: block;
      clear: both;
    }

    #cart_review .product_overview li.price > div span {
      display: block;
    }

    #cart_review .product_overview li.price > div,
    #cart_review .product_overview li.price > span {
      float: left;
    }

    #cart_review .cta_container {
      margin-top: 9px;
    }

    #cart_review #proceed_to_checkout {
      color: #fff;
      width: 100%;
      text-transform: none;
      font-weight: 500;
    }

    .ar #cart_review_container {
      left: 2px;
      right: auto;
    }

    .ar #cart_review_container:before {
      left: 0;
      right: auto;
    }

    .ar #cart_review_container li.price > div,
    .ar #cart_review_container li.price > span {
      float: right;
    }

    #site_footer .primary {
      text-align: center;
      color: #000;
      margin-bottom: 55px;
    }

    #site_footer .secondary {
      margin-bottom: 52px;
    }

    #site_footer .support {
      color: #666;
      text-align: center;
    }

    #site_footer .social_media_container {
      margin-bottom: 21px;
    }

    #newsletter_signup_footer {
      text-align: center;
      background-color: #f5f5f5;
      color: #000;
      padding: 45px 0;
      margin-bottom: 27px;
    }

    .notification_banner {
      text-align: center;
      padding: 9px 0 8px;
    }

    .notification_banner.success {
      background-color: #009b12;
    }

    .notification_banner.error,
    .notification_banner.warning {
      background-color: #e00000;
    }

    #notification_popup {
      position: fixed;
      top: 50%;
      left: 50%;
      background-color: #fff;
      border: 1px solid #bdbdbd;
      text-align: center;
      padding: 16px 12px 12px;
      margin-top: -52px;
      margin-left: -200px;
      z-index: 1000;
      width: 400px;
    }

    #notification_popup .field_row {
      font-size: 0;
    }

    #notification_popup .field_row .field_column {
      float: none;
      display: inline-block;
    }

    #notification_popup.checkout_progress {
      width: 600px;
      margin-left: -300px;
      margin-top: -56px;
      background-color: #eee;
      padding: 16px 16px 13px;
    }

    .popup .popup_container {
      position: fixed;
      top: 50%;
      left: 50%;
      background-color: #fff;
      text-align: center;
      margin-top: -220px;
      margin-left: -375px;
      width: 750px;
      height: 440px;
      z-index: 100;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    #maintenance_container {
      background: #b5f8fa;
    }

    #maintenance_container img {
      width: 600px;
      margin: 0 auto;
      display: flex;
    }

    #section_404_container {
      padding: 10px 0 32px;
      text-align: center;
    }

    #login_container,
    #registration_container {
      padding: 16px 0 32px;
    }

    #login_container header,
    #registration_container header {
      position: relative;
    }

    #login_container .panel,
    #registration_container .panel {
      border: 1px solid #bdbdbd;
    }

    #login_container .panel .content_holder,
    #registration_container .panel .content_holder {
      padding: 10px 12px 12px;
    }

    #login_container .row,
    #registration_container .row {
      position: relative;
    }

    #login_container .row .registration,
    #registration_container .row .registration {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
    }

    #login_container .row .registration .panel,
    #registration_container .row .registration .panel {
      position: absolute;
      top: 0;
      left: 4%;
      right: 0;
      bottom: 0;
    }

    .ar #login_container .row .registration {
      left: 0;
      right: auto;
    }

    .ar #login_container .row .registration .panel {
      left: 0;
      right: 4%;
    }

    #registration_container .panel .content_holder {
      padding: 8px 20px 20px;
    }

    #registration_container form {
      width: 66.666%;
    }

    ul.product_overview li.product .image_container {
      padding-bottom: 35.85525%;
      position: relative;
      float: left;
      width: 25%;
      margin-right: 16px;
    }

    .ar ul.product_overview li.product .image_container {
      float: right;
      margin-right: 0;
      margin-left: 16px;
    }

    .cost_overview_container {
      position: relative;
    }

    #catalog_container {
      position: relative;
      padding: 13px 0 60px;
    }

    #catalog_container header {
      position: relative;
      padding-bottom: 14px;
      margin-bottom: 20px;
      border-bottom: 1px solid #bdbdbd;
    }

    #catalog_container header .controls-wrapper {
      width: 100%;
      min-height: 20px;
      position: relative;
    }

    #catalog_container header .details {
      overflow: hidden;
      *zoom: 1;
      position: absolute;
      top: 0;
      left: 0;
    }

    #catalog_container header .controls {
      position: absolute;
      top: 0;
      right: 0;
    }

    #catalog_container header .controls .option_container {
      position: relative;
    }

    #catalog_container header.below_special_banner {
      padding-top: 25px;
      padding-bottom: 0;
    }

    #catalog_container header.below_special_banner h1 {
      font-size: 16px;
      text-align: left;
      margin-top: 0;
    }

    #catalog_container header.below_special_banner .details {
      position: relative;
    }

    #catalog_container header.below_special_banner .controls {
      top: 20px;
      bottom: auto;
    }

    #catalog_container header.below_special_banner #listings_grid_switch {
      text-align: left;
    }

    #catalog_container .return_top_link_container {
      position: fixed;
      bottom: 0;
      margin-bottom: 16px;
    }

    .ar #catalog_container header .details {
      right: 0;
      left: auto;
    }

    .ar #catalog_container header .controls {
      right: auto;
      left: 0;
    }

    .ar #catalog_container header.below_special_banner #listings_grid_switch,
    .ar #catalog_container header.below_special_banner h1 {
      text-align: right;
    }

    ul#catalog_listings li.listing .image_container,
    ul.catalog_listings li.listing .image_container {
      position: relative;
      margin-bottom: 8px;
      border-radius: 5px;
      overflow: hidden;
      height: 350px;
      width: 100%;
    }

    ul#catalog_listings li.listing .image_container img,
    ul.catalog_listings li.listing .image_container img {
      z-index: 20;
    }

    ul#catalog_listings li.listing .size_options_container,
    ul.catalog_listings li.listing .size_options_container {
      position: absolute;
      width: 100%;
      bottom: 100px;
      left: 0;
    }

    ul#catalog_listings
    li.listing
    .size_options_container
    .sizeOptions__wrapper,
    ul.catalog_listings
    li.listing
    .size_options_container
    .sizeOptions__wrapper {
      padding: 10px 0 5px;
      background-color: hsla(0, 0%, 100%, 0.8);
      position: absolute;
      bottom: -50px;
      width: 100%;
      z-index: 21;
    }

    ul#catalog_listings
    li.listing
    .size_options_container
    .sizeOptions__heading,
    ul.catalog_listings
    li.listing
    .size_options_container
    .sizeOptions__heading {
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 14px;
    }


    #catalog_category_option {
      margin-bottom: 28px;
    }

    #catalog_filter_options .scroll_container {
      max-height: 300px;
      overflow-y: auto;
    }

    .scroll_container svg {
      width: 17px;
      height: 17px;
      margin-right: 6px;
      margin-bottom: -4px
    }

    #catalog_filter_options .filter_block {
      position: relative;
      border-top: 1px solid #bdbdbd;
    }

    #catalog_filter_options .filter-color-swatch {
      height: 20px;
      width: 20px;
      background-position: 50%;
      background-size: contain;
      background-repeat: no-repeat;
    }

    #catalog_filter_options .filter-color-item {
      display: flex;
      align-items: center;
      margin-bottom: 13px;
    }

    #catalog_filter_options .label.filter-color-label {
      width: 100%;
      display: flex;
      padding-left: 9px;
      cursor: pointer;
      text-indent: 0;
      margin-bottom: 0;
      font-weight: 400;
    }

    #catalog_filter_options .label.filter-color-label > span {
      flex-grow: 1;
      padding-top: 2px;
    }

    #catalog_filter_options .brand {
      border-top: none;
    }

    #catalog_filter_options .toggle_content_container {
      padding-top: 0;
      margin-bottom: 20px;
    }

    #catalog_filter_options .toggle_content_container.closed {
      display: none;
    }

    #brand_search {
      position: relative;
    }

    #selected_facets {
      margin-bottom: 16px;
    }

    #product_container {
      position: relative;
      padding: 13px 0 20px;
    }

    #product_container .product_carousel_container {
      padding-right: 20px;
    }

    #product_container .associated_products_container {
      border-top: 1px solid #bdbdbd;
      margin-top: 8px;
      padding-top: 12px;
    }

    #product_container header {
      overflow: hidden;
      *zoom: 1;
      padding-bottom: 15px;
    }

    #product_container header .product_details {
      margin-right: 130px;
    }

    #product_container .size_help {
      overflow: hidden;
      *zoom: 1;
      margin-bottom: 10px;
    }

    #product_container .product_cta {
      margin-top: 5px;
    }

    .ar #product_container .product_carousel_container {
      padding-left: 40px;
      padding-right: 0;
    }

    .ar #product_container header .product_details {
      margin-left: 130px;
      margin-right: 0;
    }

    #product_size_mapper {
      float: left;
      width: 125px;
      margin-right: 16px;
    }

    .ar #product_size_mapper {
      float: right;
      margin-left: 16px;
      margin-right: 0;
    }

    #product_info {
      margin-top: 20px;
    }

    #product_info .toggle_section {
      border-top: 1px solid #bdbdbd;
      margin-top: 8px;
    }

    #product_info .toggle_section:first-child {
      margin-top: 0;
    }

    #product_info .toggle_content_container {
      padding-top: 5px;
    }

    #product_info .info_content {
      font-weight: 400;
      color: #000;
      max-height: 100%;
      opacity: 1;
      transition: opacity 0.3s, max-height 0.4s;
    }

    #product_info .reviewRatings {
      max-height: 0;
    }

    .toggle_section .toggle_link_container a:after {
      transition: transform 0.3s;
    }

    .toggle_section.collapse .info_content {
      max-height: 0 !important;
      opacity: 0 !important;
    }

    .toggle_section.collapse .toggle_link_container a:after {
      transform: rotate(-90deg);
    }

    #new_review {
      margin-top: 14px;
    }

    #product_share {
      margin: 12px 0;
    }

    iframe#size_guide {
      position: absolute;
      width: 968px;
      height: 600px;
      top: 0;
      left: 50%;
      margin-left: -484px;
      z-index: 100;
    }

    .easyzoom-flyout {
      width: 490px;
      height: 519px;
      border: 1px solid #bdbdbd;
      background: #fff;
      position: absolute;
      top: 0;
      left: 410px;
      overflow: hidden;
      font-size: 12px;
      line-height: 450px;
      text-align: center;
      z-index: 90;
    }

    .ar .easyzoom-flyout {
      left: auto;
      right: 410px;
    }

    #popup_zoom_image.visually_hidden {
      -webkit-transform: translateZ(0);
    }

    #popup_zoom_image .zoomedImage {
      position: absolute;
      top: 0;
      left: 50%;
      width: 762px;
      margin-left: -381px;
      z-index: 100;
      border: 1px solid #bdbdbd;
    }

    #cart_container {
      margin-bottom: 20px;
      margin-top: 80px;
      min-height: 200px;
    }

    #cart_container :header,
    #cart_container header {
      margin-bottom: 17px;
      position: relative;
    }

    #cart_container .cta_container {
      overflow: hidden;
      *zoom: 1;
    }

    #cart_container .cta_container .ctas {
      float: right;
      width: 100%;
    }

    #cart_container .cta_container.bottom {
      padding-top: 16px;
    }

    #cart_container .cta_container #continue_shopping {
      float: left;
    }

    #cart_container .cta_container #proceed_to_checkout {
      float: right;
    }

    #cart_container .info_row {
      overflow: hidden;
      *zoom: 1;
    }

    #cart_container #coupon_container {
      float: right;
      margin-top: 16px;
      width: 308px;
    }

    #cart_container .info_row.bottom {
      padding-top: 16px;
      margin: 16px 0;
    }

    #cart_container .info_row.bottom .panel {
      overflow: hidden;
      *zoom: 1;
      width: 710px;
      padding: 12px 0;
    }

    #cart_container .info_row.bottom .panel .section {
      width: 30%;
      float: left;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 12px;
      min-height: 72px;
    }

    #cart_container .info_row.bottom .panel .section:first-child {
      border-left: 0;
    }

    #cart_container .info_row.bottom .panel .section.wide {
      width: 40%;
    }

    #cart_container .cost_overview_container {
      width: 308px;
      float: right;
    }

    #cart_container .cart-empty-text {
      padding: 0;
      text-align: center;
      line-height: 1.8;
      font-size: 18px;
      color: #777;
      font-weight: 300;
      margin-bottom: 10px;
    }

    #cart_container .cart-btn {
      margin-top: 25px;
      margin-bottom: 40px;
      display: inline-block;
      padding: 15px;
      color: #fff;
      text-transform: uppercase;
      font-weight: 500;
      border-radius: 4px;
    }

    #cart_container.cart-empty,
    #cart_container.cart-logged-out {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      box-sizing: border-box;
      top: 0;
      bottom: 0;
      margin: 70px 0;
      padding: 0;
    }

    #cart_container .shopping-cart-icon {
      height: 75px;
      width: 75px;
      display: inline-block;
      background-image: url(/web-desktop/9b3a119491d0073d4d4b0a9a2de6fe8c.svg);
      background-size: cover;
    }

    .ar #cart_container .cta_container .ctas {
      float: left;
    }

    .ar #cart_container .cta_container .ctas #continue_shopping {
      float: right;
    }

    .ar #cart_container #coupon_container,
    .ar #cart_container .cta_container .ctas #proceed_to_checkout {
      float: left;
    }

    .ar #cart_container .info_row.bottom .panel .section {
      float: right;
      border-right: 1px solid #bdbdbd;
      border-left: 0;
    }

    .ar #cart_container .info_row.bottom .panel .section:first-child {
      border-right: 0;
    }

    .ar #cart_container .cost_overview_container {
      float: left;
    }

    #cart_empty_container {
      text-align: center;
    }

    #standalone_id_document_container {
      padding: 12px 0 32px;
    }

    #unsubscribe_container {
      padding: 12px 0 20px;
      text-align: center;
    }

    #unsubscribe_container header {
      margin-bottom: 20px;
    }

    .ratio_1000_523 {
      padding-bottom: 52.3%;
      height: 0;
      position: relative;
    }

    .ratio_312_317 {
      padding-bottom: 101.60256%;
    }

    .ratio_1_1,
    .ratio_312_317 {
      height: 0;
      position: relative;
    }

    .ratio_1_1 {
      padding-bottom: 100%;
    }

    .ratio_250_37 {
      padding-bottom: 14.8%;
      height: 0;
      position: relative;
    }

    .ratio_514_522 {
      padding-bottom: 101.55642%;
      height: 0;
      position: relative;
    }

    .ratio_241_245 {
      padding-bottom: 101.65975%;
      height: 0;
      position: relative;
    }

    .ratio_245_241 {
      padding-bottom: 98.36735%;
      height: 0;
      position: relative;
    }

    .ratio_787_148 {
      padding-bottom: 18.80559%;
      height: 0;
      position: relative;
    }

    @keyframes fader {
      0% {
        opacity: 0;
      }
      to {
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
      to {
        transform: scale(1);
      }
    }

    .nmModal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9990;
      display: none;
      justify-content: center;
      align-items: center;
    }

    .nmModal--active {
      display: flex;
      animation: fader 0.3s ease-out, scaler 0.3s ease-out;
    }

    .nmModal__overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    .nmModal__wrapper {
      background: #fff;
      position: relative;
      z-index: 2;
      padding: 15px;
      width: 500px;
      max-height: 500px;
      overflow-y: auto;
      box-sizing: border-box;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .nmModal__wrapper--rounded {
      border-radius: 5px;
    }

    .nmModal__close {
      position: absolute;
      right: 10px;
      top: 5px;
      font-size: 20px;
      color: #666;
      text-decoration: none;
      cursor: pointer;
      z-index: 3;
    }

    .ar .nmModal__close {
      right: auto;
      left: 10px;
    }

    .row {
      *zoom: 1;
      width: 103.1%;
      margin-left: -3.1%;
    }

    .row:after {
      content: ' ';
      display: block;
      height: 0;
      clear: both;
      overflow: hidden;
      visibility: hidden;
    }

    .column {
      float: left;
      padding-left: 3.1%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    .ar .column {
      float: right;
    }

    .column_grid.no_gutter .row {
      width: 100%;
      margin-left: 0;
    }

    .column_grid.no_gutter .column {
      padding-left: 0;
    }

    .column_grid.small_gutter .row {
      width: 100.8%;
      margin-left: -0.8%;
    }

    .column_grid.small_gutter .column {
      padding-left: 0.8%;
    }

    .column_grid.large_gutter .row {
      width: 102%;
      margin-left: -2%;
    }

    .column_grid.large_gutter .column {
      padding-left: 2%;
    }

    .full_width {
      width: 100%;
    }

    .one_half {
      width: 50%;
    }

    .one_third {
      width: 33.333333%;
    }

    .two_thirds {
      width: 66.666666%;
    }

    .one_quarter {
      width: 25%;
    }

    .three_quarters {
      width: 75%;
    }

    .one_fifth {
      width: 20%;
    }

    .two_fifths {
      width: 40%;
    }

    .three_fifths {
      width: 60%;
    }

    .four_fifths {
      width: 80%;
    }

    .fifth_sixths {
      width: 83.333334%;
    }

    .one_sixth {
      width: 16.666666%;
    }

    .module {
      display: block;
      position: relative;
      margin-top: 32px;
    }

    .module img {
      display: block;
      max-width: 100%;
    }

    .module h2,
    .module h3 {
      text-transform: uppercase;
      font-size: 14px;
    }

    .module .cta_container {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.6);
      text-align: center;
      color: #fff;
      padding: 8px;
      z-index: 15;
    }

    .module:hover .cta_container {
      background-color: rgba(0, 0, 0, 0.8);
    }

    .ie8 .module .cta_container {
      background: url(/web-desktop/59f16bee2a44b8044a5893dd39f6acae.png) repeat 0 0;
    }

    .ie8 .module img {
      max-width: none;
    }

    .large_gutter .module {
      margin-top: 20px;
    }

    .small_gutter .module {
      margin-top: 8px;
    }

    .image_container.with_preloader {
      position: relative;
    }

    .image_container.with_preloader .preloader,
    .image_container.with_preloader img.lazyload {
      background-image: url('data:image/gif;base64,R0lGODlhGAAYAPQAAP///wAAAM7Ozvr6+uDg4LCwsOjo6I6OjsjIyJycnNjY2KioqMDAwPLy8nZ2doaGhri4uGhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAHAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAGAAYAAAFriAgjiQAQWVaDgr5POSgkoTDjFE0NoQ8iw8HQZQTDQjDn4jhSABhAAOhoTqSDg7qSUQwxEaEwwFhXHhHgzOA1xshxAnfTzotGRaHglJqkJcaVEqCgyoCBQkJBQKDDXQGDYaIioyOgYSXA36XIgYMBWRzXZoKBQUMmil0lgalLSIClgBpO0g+s26nUWddXyoEDIsACq5SsTMMDIECwUdJPw0Mzsu0qHYkw72bBmozIQAh+QQABwABACwAAAAAGAAYAAAFsCAgjiTAMGVaDgR5HKQwqKNxIKPjjFCk0KNXC6ATKSI7oAhxWIhezwhENTCQEoeGCdWIPEgzESGxEIgGBWstEW4QCGGAIJEoxGmGt5ZkgCRQQHkGd2CESoeIIwoMBQUMP4cNeQQGDYuNj4iSb5WJnmeGng0CDGaBlIQEJziHk3sABidDAHBgagButSKvAAoyuHuUYHgCkAZqebw0AgLBQyyzNKO3byNuoSS8x8OfwIchACH5BAAHAAIALAAAAAAYABgAAAW4ICCOJIAgZVoOBJkkpDKoo5EI43GMjNPSokXCINKJCI4HcCRIQEQvqIOhGhBHhUTDhGo4diOZyFAoKEQDxra2mAEgjghOpCgz3LTBIxJ5kgwMBShACREHZ1V4Kg1rS44pBAgMDAg/Sw0GBAQGDZGTlY+YmpyPpSQDiqYiDQoCliqZBqkGAgKIS5kEjQ21VwCyp76dBHiNvz+MR74AqSOdVwbQuo+abppo10ssjdkAnc0rf8vgl8YqIQAh+QQABwADACwAAAAAGAAYAAAFrCAgjiQgCGVaDgZZFCQxqKNRKGOSjMjR0qLXTyciHA7AkaLACMIAiwOC1iAxCrMToHHYjWQiA4NBEA0Q1RpWxHg4cMXxNDk4OBxNUkPAQAEXDgllKgMzQA1pSYopBgonCj9JEA8REQ8QjY+RQJOVl4ugoYssBJuMpYYjDQSliwasiQOwNakALKqsqbWvIohFm7V6rQAGP6+JQLlFg7KDQLKJrLjBKbvAor3IKiEAIfkEAAcABAAsAAAAABgAGAAABbUgII4koChlmhokw5DEoI4NQ4xFMQoJO4uuhignMiQWvxGBIQC+AJBEUyUcIRiyE6CR0CllW4HABxBURTUw4nC4FcWo5CDBRpQaCoF7VjgsyCUDYDMNZ0mHdwYEBAaGMwwHDg4HDA2KjI4qkJKUiJ6faJkiA4qAKQkRB3E0i6YpAw8RERAjA4tnBoMApCMQDhFTuySKoSKMJAq6rD4GzASiJYtgi6PUcs9Kew0xh7rNJMqIhYchACH5BAAHAAUALAAAAAAYABgAAAW0ICCOJEAQZZo2JIKQxqCOjWCMDDMqxT2LAgELkBMZCoXfyCBQiFwiRsGpku0EshNgUNAtrYPT0GQVNRBWwSKBMp98P24iISgNDAS4ipGA6JUpA2WAhDR4eWM/CAkHBwkIDYcGiTOLjY+FmZkNlCN3eUoLDmwlDW+AAwcODl5bYl8wCVYMDw5UWzBtnAANEQ8kBIM0oAAGPgcREIQnVloAChEOqARjzgAQEbczg8YkWJq8nSUhACH5BAAHAAYALAAAAAAYABgAAAWtICCOJGAYZZoOpKKQqDoORDMKwkgwtiwSBBYAJ2owGL5RgxBziQQMgkwoMkhNqAEDARPSaiMDFdDIiRSFQowMXE8Z6RdpYHWnEAWGPVkajPmARVZMPUkCBQkJBQINgwaFPoeJi4GVlQ2Qc3VJBQcLV0ptfAMJBwdcIl+FYjALQgimoGNWIhAQZA4HXSpLMQ8PIgkOSHxAQhERPw7ASTSFyCMMDqBTJL8tf3y2fCEAIfkEAAcABwAsAAAAABgAGAAABa8gII4k0DRlmg6kYZCoOg5EDBDEaAi2jLO3nEkgkMEIL4BLpBAkVy3hCTAQKGAznM0AFNFGBAbj2cA9jQixcGZAGgECBu/9HnTp+FGjjezJFAwFBQwKe2Z+KoCChHmNjVMqA21nKQwJEJRlbnUFCQlFXlpeCWcGBUACCwlrdw8RKGImBwktdyMQEQciB7oACwcIeA4RVwAODiIGvHQKERAjxyMIB5QlVSTLYLZ0sW8hACH5BAAHAAgALAAAAAAYABgAAAW0ICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWPM5wNiV0UDUIBNkdoepTfMkA7thIECiyRtUAGq8fm2O4jIBgMBA1eAZ6Knx+gHaJR4QwdCMKBxEJRggFDGgQEREPjjAMBQUKIwIRDhBDC2QNDDEKoEkDoiMHDigICGkJBS2dDA6TAAnAEAkCdQ8ORQcHTAkLcQQODLPMIgIJaCWxJMIkPIoAt3EhACH5BAAHAAkALAAAAAAYABgAAAWtICCOJNA0ZZoOpGGQrDoOBCoSxNgQsQzgMZyIlvOJdi+AS2SoyXrK4umWHM5wNiV0UN3xdLiqr+mENcWpM9TIbrsBkEck8oC0DQqBQGGIz+t3eXtob0ZTPgNrIwQJDgtGAgwCWSIMDg4HiiUIDAxFAAoODwxDBWINCEGdSTQkCQcoegADBaQ6MggHjwAFBZUFCm0HB0kJCUy9bAYHCCPGIwqmRq0jySMGmj6yRiEAIfkEAAcACgAsAAAAABgAGAAABbIgII4k0DRlmg6kYZCsOg4EKhLE2BCxDOAxnIiW84l2L4BLZKipBopW8XRLDkeCiAMyMvQAA+uON4JEIo+vqukkKQ6RhLHplVGN+LyKcXA4Dgx5DWwGDXx+gIKENnqNdzIDaiMECwcFRgQCCowiCAcHCZIlCgICVgSfCEMMnA0CXaU2YSQFoQAKUQMMqjoyAglcAAyBAAIMRUYLCUkFlybDeAYJryLNk6xGNCTQXY0juHghACH5BAAHAAsALAAAAAAYABgAAAWzICCOJNA0ZVoOAmkY5KCSSgSNBDE2hDyLjohClBMNij8RJHIQvZwEVOpIekRQJyJs5AMoHA+GMbE1lnm9EcPhOHRnhpwUl3AsknHDm5RN+v8qCAkHBwkIfw1xBAYNgoSGiIqMgJQifZUjBhAJYj95ewIJCQV7KYpzBAkLLQADCHOtOpY5PgNlAAykAEUsQ1wzCgWdCIdeArczBQVbDJ0NAqyeBb64nQAGArBTt8R8mLuyPyEAOwAAAAAAAAAAAA==');
      background-repeat: no-repeat;
      background-position: 50%;
    }

    .image_container.with_preloader .preloader {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #fff;
      z-index: 5;
    }

    .image_container.with_preloader img {
      position: absolute;
      top: 0;
      left: 0;
    }

    .image_container.with_preloader img.loaded {
      z-index: 10;
    }

    .image_container.with_preloader img.sentinel {
      z-index: 4 !important;
      position: static !important;
    }

    .highlight_cta a.module .cta_container {
      background-color: #2560a9;
    }

    .highlight_cta a.module:hover .cta_container {
      background-color: #2560a9;
    }

    a.module .token {
      position: absolute;
      top: 10px;
      right: 10px;
      border-radius: 50%;
      background-color: rgba(224, 0, 0, 0.6);
      height: 48px;
      padding-top: 12px;
      width: 60px;
      color: #fff;
      line-height: 1.1;
      text-align: center;
      text-transform: uppercase;
      font-size: 12px;
    }

    a.module .token strong {
      display: block;
      font-size: 22px;
    }

    a.module .token.large {
      font-size: 16px;
      height: 64px;
      padding-top: 16px;
      width: 80px;
    }

    a.module .token.large strong {
      font-size: 30px;
    }

    a.module:hover .token {
      background-color: #e00000;
    }

    #template_home .module .cta_container {
      padding: 3px 8px;
    }

    #template_home .module p.topic {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      margin-top: 13px;
    }

    #template_home .module h3 {
      font-size: 20px;
      font-weight: 700;
      margin: 4px 0 11px;
    }

    #template_home .module:hover span.block_button {
      background-color: #3da58f;
    }

    #template_home .feature_module {
      float: left;
      width: 50%;
    }

    #template_home .feature_module .module {
      margin-top: 0;
    }

    #template_home .feature_module .module:hover {
      opacity: 0.8;
    }

    #template_home .feature_module img {
      max-width: none;
    }

    #template_home .feature_module .cta_container {
      background: transparent;
      right: auto;
      bottom: auto;
      top: 50%;
      margin-top: -36px;
      padding: 0 32px;
    }

    #template_home .feature_module:first-child .cta_container,
    #template_home .feature_module:first-child img {
      left: auto;
      right: 0;
    }

    #template_home .feature_module h2 {
      font-size: 38px;
      font-weight: 700;
      margin-bottom: 2px;
    }

    #template_home .feature_module span {
      font-weight: 700;
      text-transform: uppercase;
    }

    .ar #template_home .feature_module {
      float: right;
    }

    .ar #template_home .feature_module img {
      left: auto;
      right: 0;
    }

    .ar #template_home .feature_module .cta_container {
      right: 0;
      left: auto;
      margin-top: -36px;
    }

    .ar #template_home .feature_module:first-child .cta_container,
    .ar #template_home .feature_module:first-child img {
      right: auto;
      left: 0;
    }

    #template_gender a.module .cta_container {
      padding: 16px 8px;
    }

    #template_gender a.module h3 {
      font-size: 14px;
      font-weight: 700;
    }

    #template_gender a.module:hover span.block_button {
      background-color: #3da58f;
    }

    #product_carousel {
      position: relative;
    }

    #product_carousel ul {
      width: 277px;
      height: 400px;
      margin: 0 auto;
    }

    #product_carousel ul li {
      z-index: 20 !important;
      display: none;
      width: 100%;
    }

    #product_carousel ul li:first-child {
      display: block;
    }

    #carousel_next,
    #carousel_previous {
      display: block;
      height: 30px;
      width: 15px;
      background-position: -56px -101px;
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -15px;
    }

    #carousel_next:hover,
    #carousel_previous:hover {
      background-position: -86px -101px;
    }

    #carousel_next {
      left: auto;
      right: 0;
      background-position: -71px -101px;
    }

    #carousel_next:hover {
      background-position: -101px -101px;
    }

    #carousel_pager {
      margin-top: 8px;
      text-align: center;
      font-size: 0;
    }

    #carousel_pager li {
      margin: 0 3px 8px 2px;
      border: 1px solid #fff;
      width: 64px;
      display: inline-block;
      transition: 0.2s;
    }

    #carousel_pager li.active {
      border-color: #bdbdbd;
    }

    #carousel_pager li:hover {
      opacity: 0.8;
      border-color: #bdbdbd;
    }

    .ar #carousel_next,
    .ar #carousel_previous {
      background-position: -56px -101px;
      left: 0;
      right: auto;
    }

    .ar #carousel_next:hover,
    .ar #carousel_previous:hover {
      background-position: -86px -101px;
    }

    .ar #carousel_previous {
      left: auto;
      right: 0;
      background-position: -71px -101px;
    }

    .ar #carousel_previous:hover {
      background-position: -101px -101px;
    }

    .hero_carousel_container ul.hero_carousel {
      width: 1000px;
      height: 500px;
    }

    .hero_carousel_container ul.hero_carousel li {
      z-index: 10 !important;
      display: none;
    }

    .hero_carousel_container ul.hero_carousel img,
    .hero_carousel_container ul.hero_carousel li:first-child {
      display: block;
    }

    .hero_carousel_container ul.hero_carousel .cta_container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      text-align: center;
      z-index: 15;
      background: none;
      font-weight: 500;
    }

    .hero_carousel_container ul.hero_carousel .cta_container h2 {
      color: #000;
      font-size: 50px;
      text-transform: uppercase;
      padding: 0 32px;
      margin-bottom: 13px;
      line-height: 1;
      font-weight: 700;
    }

    .hero_carousel_container a.hero_carousel_control {
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 56px;
      height: 56px;
      margin-top: -28px;
      z-index: 20;
    }

    .hero_carousel_container a.hero_carousel_control i {
      width: 15px;
      height: 30px;
      display: block;
      margin-top: 13px;
      margin-left: 18px;
      background-position: 0 -251px;
    }

    .hero_carousel_container a.hero_carousel_control.next {
      left: auto;
      right: 0;
    }

    .hero_carousel_container a.hero_carousel_control.next i {
      background-position: -15px -251px;
      margin-left: 22px;
    }

    .hero_carousel_container a.hero_carousel_control.next:hover i {
      background-position: -45px -251px;
    }

    .hero_carousel_container ul.hero_carousel_pager {
      position: absolute;
      bottom: 20px;
      left: 0;
      width: 100%;
      text-align: center;
      z-index: 20;
    }

    .hero_carousel_container ul.hero_carousel_pager li {
      display: inline-block;
      margin: 0 6px;
    }

    .hero_carousel_container ul.hero_carousel_pager li a {
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #fff;
      opacity: 0.5;
      -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';
    }

    .hero_carousel_container ul.hero_carousel_pager li a:hover {
      background-color: #000;
      opacity: 1;
      -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
    }

    .hero_carousel_container ul.hero_carousel_pager li.active a {
      background-color: #fff;
      opacity: 1;
      -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
    }

    .ar .hero_carousel_container ul.hero_carousel .cta_container h2 {
      line-height: 1.4;
    }

    .ar .hero_carousel_container a.hero_carousel_control.previous {
      right: 0;
      left: auto;
    }

    .ar .hero_carousel_container a.hero_carousel_control.previous i {
      background-position: -15px -251px;
      margin-right: 18px;
      margin-left: 0;
    }

    .ar .hero_carousel_container a.hero_carousel_control.previous:hover i {
      background-position: -45px -251px;
    }

    .ar .hero_carousel_container a.hero_carousel_control.next {
      left: 0;
      right: auto;
    }

    .ar .hero_carousel_container a.hero_carousel_control.next i {
      background-position: 0 -251px;
      margin-right: 22px;
      margin-left: 0;
    }

    .ar .hero_carousel_container a.hero_carousel_control.next:hover i {
      background-position: -30px -251px;
    }

    .ar .hero_carousel_container ul.hero_carousel_pager {
      position: absolute;
      bottom: 20px;
      left: 0;
      width: 100%;
      text-align: center;
      z-index: 20;
    }

    .ar .hero_carousel_container ul.hero_carousel_pager li {
      display: inline-block;
      margin: 0 6px;
    }

    .ar .hero_carousel_container ul.hero_carousel_pager li a {
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #fff;
      opacity: 0.5;
    }

    .ar .hero_carousel_container ul.hero_carousel_pager li a:hover {
      background-color: #000;
      opacity: 1;
    }

    .ar .hero_carousel_container ul.hero_carousel_pager li.active a {
      background-color: #fff;
      opacity: 1;
    }

    .hero_slider {
      position: relative;
    }

    .hero_slider img {
      display: block;
      max-width: 100%;
    }

    .hero_slider ul.slides {
      width: 1000px;
      height: 300px;
    }

    .hero_slider ul.slides > li {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .hero_slider ul.slides > li:first-child {
      z-index: 10;
    }

    .hero_slider ul.slides .cta_container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      text-align: center;
    }

    .hero_slider ul.slides .cta_container h2 {
      color: #000;
      font-size: 38px;
      text-transform: uppercase;
      padding: 0 32px;
      margin-bottom: 10px;
      line-height: 1;
      font-weight: 700;
    }

    .hero_slider ul.pager {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 16px 32px 0 24px;
      z-index: 10;
      background: url(/web-desktop/a7bdb5f640068a6937884fb7c76016cb.png) no-repeat 100% 0;
      pointer-events: none;
    }

    .hero_slider ul.pager a {
      display: block;
      color: #fff;
      padding: 12px 32px 12px 8px;
      border-bottom: 2px solid #fff;
      opacity: 0.8;
      pointer-events: auto;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .hero_slider ul.pager a.active {
      font-weight: 700;
      opacity: 1;
    }

    .ar .hero_slider ul.slides .cta_container h2 {
      margin-bottom: 19px;
      line-height: 1.2;
    }

    .ar .hero_slider ul.pager {
      left: auto;
      right: 0;
      padding: 16px 24px 0 32px;
      background: url(/web-desktop/e633ef9d461aeaa2c5a492b56078b21c.png) no-repeat 0 0;
    }

    .ar .hero_slider ul.pager a {
      padding: 12px 8px 12px 32px;
      letter-spacing: 0;
    }

    .logo_scroller,
    .product_scroller {
      margin-top: 32px;
      position: relative;
      padding: 0 26px;
    }

    .logo_scroller .jcarousel,
    .product_scroller .jcarousel {
      position: relative;
      overflow: hidden;
    }

    .logo_scroller .jcarousel ul,
    .product_scroller .jcarousel ul {
      width: 20000em;
      position: relative;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .logo_scroller ul,
    .product_scroller ul {
      *zoom: 1;
    }

    .logo_scroller ul:after,
    .product_scroller ul:after {
      content: ' ';
      display: block;
      height: 0;
      clear: both;
      overflow: hidden;
      visibility: hidden;
    }

    .logo_scroller ul li,
    .product_scroller ul li {
      float: left;
    }

    .logo_scroller ul li a,
    .logo_scroller ul li i,
    .product_scroller ul li a,
    .product_scroller ul li i {
      display: block;
    }

    .logo_scroller ul li a:hover,
    .product_scroller ul li a:hover {
      opacity: 0.8;
    }

    .logo_scroller a.arrow,
    .product_scroller a.arrow {
      padding: 20px 16px 20px 0;
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -19px;
    }

    .logo_scroller a.arrow i,
    .product_scroller a.arrow i {
      display: inline-block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-right-color: #000;
      border-left-width: 0;
      display: block;
    }

    .logo_scroller a.arrow:hover i,
    .product_scroller a.arrow:hover i {
      border-right-color: #8b8b8b;
    }

    .logo_scroller a.arrow.next,
    .product_scroller a.arrow.next {
      padding: 20px 0 20px 16px;
      right: 0;
      left: auto;
    }

    .logo_scroller a.arrow.next i,
    .product_scroller a.arrow.next i {
      display: inline-block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-left-color: #000;
      border-right-width: 0;
      display: block;
    }

    .logo_scroller a.arrow.next:hover i,
    .product_scroller a.arrow.next:hover i {
      border-left-color: #8b8b8b;
    }

    .ar .logo_scroller h2,
    .ar .product_scroller h2 {
      font-family: frutiger, Tahoma, Arial, Sans-serif;
    }

    .ar .logo_scroller ul li,
    .ar .product_scroller ul li {
      float: right;
    }

    .logo_scroller ul li {
      margin-right: 20px;
    }

    .logo_scroller ul li:last-child {
      margin-right: 0;
    }

    .ar .logo_scroller ul li {
      margin-left: 20px;
      margin-right: 0;
    }

    .ar .logo_scroller ul li:last-child {
      margin-left: 0;
    }

    .product_scroller ul li {
      width: 120px;
      margin-right: 28px;
      font-size: 11px;
    }

    .product_scroller ul .brand,
    .product_scroller ul .price,
    .product_scroller ul img {
      display: block;
      text-align: center;
      color: #000;
      font-weight: 700;
    }

    .product_scroller ul img {
      max-width: 100%;
    }

    .product_scroller ul span.brand {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
      padding-bottom: 1px;
      text-transform: uppercase;
      color: #000;
      padding-top: 10px;
      text-align: center;
    }

    .ar .product_scroller ul li {
      margin-right: 0;
      margin-left: 28px;
    }

    form {
      display: block;
    }

    .label,
    label,
    p.faux_label {
      display: block;
      font-size: 12px;
      margin-bottom: 3px;
      color: #000;
      text-align: left;
    }

    label.sub,
    p.faux_label.sub {
      font-size: 11px;
    }

    .ar .label,
    .ar .size_help,
    .ar label,
    .ar p.faux_label {
      text-align: right;
    }

    .ar p.faux_label {
      float: right;
    }

    input::-moz-focus-inner {
      border: 0;
      padding: 0;
    }

    .error input,
    .error select,
    .error textarea {
      border-color: red;
    }

    input,
    select,
    textarea {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: 1px solid #bdbdbd;
      font-family: apercu, Arial, Sans-Serif;
      font-weight: 400;
      font-size: 12px;
      height: 28px;
      width: 100%;
      margin: 0;
      padding: 0 8px;
      border-radius: 0;
    }

    input {
      border: none;
      transition: all 0.2s;
      border: 1px solid transparent;
    }

    input:focus {
      border: 1px solid #bdbdbd;
      outline: none;
    }

    .ar input,
    .ar textarea {
      font-family: frutiger, Tahoma, Arial, Sans-serif;
    }

    input:focus::-webkit-input-placeholder {
      color: transparent;
    }

    input:focus:-moz-placeholder,
    input:focus::-moz-placeholder {
      color: transparent;
    }

    :input:focus-ms-input-placeholder {
      color: transparent;
    }

    select:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }

    textarea {
      height: 100px;
      padding: 6px 8px;
      resize: none;
    }

    input[type='submit'] {
      border: 0;
      border-radius: 0;
      -webkit-appearance: none;
      -webkit-border-radius: 0;
      padding: 0 12px;
      width: 147px;
      color: #fff;
      background-color: #2560a9;
    }

    input[type='submit']:hover {
      background-color: #3da58f;
    }

    button {
      border: 0;
      padding: 0;
      font-family: apercu, Arial, Sans-Serif;
      font-weight: 700;
    }

    button i.loading {
      background: url(/web-desktop/6e0c3222f7bbefb6c5631ccb6f41f901.gif) no-repeat 0 0;
      display: inline-block;
      height: 16px;
      width: 16px;
      margin-left: 8px;
      vertical-align: middle;
      margin-top: -5px;
    }

    .ar button {
      font-family: frutiger, Tahoma, Arial, Sans-serif;
    }

    .ar button i.loading {
      margin-left: 0;
      margin-right: 8px;
    }

    .help-inline {
      color: #e00000;
      font-size: 11px;
    }

    .select_container {
      overflow: hidden;
      *zoom: 1;
    }

    .select_container label {
      position: relative;
      margin: 0;
      display: block;
      width: 100%;
    }

    .select_container label:after {
      content: '';
      width: 20px;
      height: 26px;
      position: absolute;
      display: inline-block;
      top: 1px;
      right: 1px;
      background-position: -166px -101px;
      pointer-events: none;
    }

    .select_container select {
      padding: 0 0 0 8px;
      float: right;
      -moz-appearance: none;
      -webkit-appearance: none;
      background-color: #fff;
    }

    .select_container span {
      position: relative;
      margin: 0;
      display: block;
      width: 100%;
    }

    .select_container span:after {
      content: '';
      width: 20px;
      height: 26px;
      position: absolute;
      display: inline-block;
      top: 1px;
      right: 1px;
      background-position: -166px -101px;
      pointer-events: none;
    }

    @-moz-document url-prefix() {
      .select_container select {
        padding-top: 5px;
      }
    }

    .ie9 .select_container label:after,
    .ie9 .select_container span:after,
    .no-pointerevents .select_container label:after,
    .no-pointerevents .select_container span:after {
      display: none;
    }

    .ar .select_container label:after {
      right: auto;
      left: 1px;
    }

    .ar .select_container select {
      padding: 3px 8px 0 0;
      float: left;
    }

    .ar .select_container span:after {
      right: auto;
      left: 1px;
    }

    .control-group.select_container label {
      position: static;
      margin: 0 0 3px;
    }

    .control-group.select_container label:after {
      width: 0;
      height: 0;
      display: none;
    }

    .control-group.select_container .controls {
      position: relative;
    }

    .control-group.select_container .controls:after {
      content: '';
      width: 20px;
      height: 26px;
      position: absolute;
      display: inline-block;
      top: 1px;
      right: 1px;
      background-position: -160px -122px;
      pointer-events: none;
    }

    .ie9 .control-group.select_container .controls:after,
    .no-pointerevents .control-group.select_container .controls:after {
      background-image: none;
    }

    .ar .control-group.select_container .controls:after {
      right: auto;
      left: 1px;
    }

    .field_section {
      margin-top: 12px;
    }

    .field_section.submit_field {
      text-align: center;
      margin-top: 20px;
    }

    .field_section.toggle_section {
      margin-top: 20px;
    }

    .field_section.side_align {
      text-align: right;
    }

    .ar .field_section.side_align {
      text-align: left;
    }

    .field_row {
      overflow: hidden;
      *zoom: 1;
    }

    .field_row .field_column {
      float: left;
      padding: 0 4px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    .field_row .field_column:first-child {
      padding-left: 0;
    }

    .field_row .field_column:last-child {
      padding-right: 0;
    }

    .field_row .field_column.one_third {
      width: 33.333%;
    }

    .field_row .field_column.one_quarter {
      width: 25%;
    }

    .field_row .field_column.one_half {
      width: 50%;
    }

    .ar .field_row .field_column {
      float: right;
    }

    .ar .field_row .field_column:first-child {
      padding-left: 4px;
      padding-right: 0;
    }

    .ar .field_row .field_column:last-child {
      padding-right: 4px;
      padding-left: 0;
    }

    .ar .field_row.no_reverse .field_column {
      float: left;
    }

    .ar .field_row.no_reverse .field_column:first-child {
      padding-right: 4px;
      padding-left: 0;
    }

    .ar .field_row.no_reverse .field_column:last-child {
      padding-left: 4px;
      padding-right: 0;
    }

    .inline_checkbox label,
    .inline_radio label {
      display: block;
      padding-left: 18px;
      text-indent: -18px;
    }

    .inline_checkbox label > input,
    .inline_radio label > input {
      width: 13px;
      height: 13px;
      padding: 0;
      margin: 0 5px 0 0;
      vertical-align: bottom;
      position: relative;
      display: inline;
    }

    .ar .inline_checkbox label,
    .ar .inline_radio label {
      padding-left: 0;
      padding-right: 18px;
    }

    .ar .inline_checkbox label > input,
    .ar .inline_radio label > input {
      margin: 0 0 0 5px;
    }

    .inline_radio label {
      font-size: 11px;
    }

    .inline_radio label > input {
      top: -1px;
    }

    .inline_radio input[type='text'] {
      margin-top: 3px;
    }

    .inline_checkbox label {
      font-size: 9px;
      text-transform: uppercase;
      line-height: 13px;
    }

    .inline_checkbox label > input {
      top: 0;
    }

    .inline_form_container {
      position: relative;
    }

    .inline_form_container .submit {
      position: absolute;
      top: 0;
      right: 0;
      width: auto;
    }

    .ar .inline_form_container .submit {
      right: auto;
      left: 0;
    }

    .inline_label_layout .field_container,
    .inline_label_layout label,
    .inline_label_layout p.faux_label {
      display: inline-block;
      vertical-align: top;
    }

    .inline_label_layout label,
    .inline_label_layout p.faux_label {
      width: 120px;
    }

    .inline_label_layout .field_container {
      width: 60%;
    }

    .inline_label_layout label.non_inline,
    .inline_label_layout p.faux_label.non_inline {
      display: block !important;
      width: 100% !important;
    }

    #newsletter_signup_footer form.newsletter_signup {
      width: 400px;
      margin: 0 auto;
    }

    #newsletter_signup_footer .newsletter_signup_email {
      text-align: center;
      height: 44px;
      font-size: 14px;
      margin-bottom: 12px;
      transition: all 0.2s;
    }

    #newsletter_signup_footer .newsletter_female_signup_submit,
    #newsletter_signup_footer .newsletter_male_signup_submit {
      margin: 0 6px;
      border: 2px solid #fff;
      background: #000;
      height: 38px;
      text-transform: uppercase;
      font-weight: 700;
      border: none;
      transition: all 0.2s;
    }

    #newsletter_signup_footer .newsletter_female_signup_submit:hover,
    #newsletter_signup_footer .newsletter_male_signup_submit:hover {
      color: #000;
      background: #fff;
    }

    .site_search {
      transition: all 0.2s;
    }

    .site_search .site_search_term {
      height: 30px;
      border: 1px solid #bdbdbd50;
      background-color: #fff;
      font-size: 12px;
      width: 22px;
      min-width: 500px;
      opacity: 1;
      padding: 16px;
      border-radius: 20px;
      margin-right: 10px;
      transition: none;
    }

    .site_search .site_search_term--with-results {
      border-radius: 15px 15px 0 0;
    }

    .site_search #search {
      fill: #000;
      stroke: #000;
      width: 20px;
      height: 20px;
    }

    .site_search .submit {
      height: 30px;
      right: 20px;
      top: 2px;
      background: transparent;
      padding: 0;
    }

    .site_search .submit i {
      -ms-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      display: block;
      content: '';
      transition: transform 0.2s;
    }

    .site_search .site_search__loader {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 12px;
      height: 12px;
      margin-right: 20px;
      border-width: 0.125rem;
    }

    .ar .site_search .site_search_term {
      margin-left: 10px;
      margin-right: 0;
      width: 35px;
      padding: 0 11px 0 30px;
    }

    .ar .site_search i {
      -ms-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    .ar .site_search .submit {
      left: 15px;
      right: auto;
    }

    .ar .site_search .submit i {
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    .ar .site_search .site_search__loader {
      right: unset;
      left: 0;
      margin-left: 20px;
    }

    #site_header .site_search {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .ar #site_header .site_search {
      left: 0;
      right: auto;
    }

    #password_reminder .term {
      padding-right: 71px;
    }

    #password_reminder .submit {
      width: 63px;
    }

    .ar #password_reminder .term {
      padding-right: 8px;
      padding-left: 71px;
    }

    #product_container .option_select {
      position: relative;
      border-top: 1px solid #bdbdbd;
      padding-top: 15px;
      overflow: hidden;
      *zoom: 1;
    }

    #product_container .option_select p.faux_label {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    #product_container .option_select #size_guide_trigger {
      position: absolute;
      right: 0;
      top: 15px;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0;
      text-decoration: underline;
    }

    #product_container .option_select ul label {
      margin: 0;
      cursor: pointer;
      direction: ltr;
    }

    #product_container .option_select ul label:hover {
      opacity: 0.8;
    }

    .ar #product_container .option_select #size_guide_trigger {
      left: 0;
      right: auto;
    }

    #product_size label {
      height: 27px;
      line-height: 25px;
      border: 1px solid #bdbdbd;
      text-align: center;
      font-family: apercu, Arial, Sans-Serif;
      padding: 0 15px;
      font-size: 10px;
      font-weight: 400;
    }

    #product_size label.selected,
    #product_size label:hover {
      background-color: #bdbdbd;
      color: #fff;
    }

    #product_size label.disabled {
      background: url(/web-desktop/2cf15305df022f5c484938a7378778d6.png) no-repeat 50%;
      background-size: 100% 100%;
      opacity: 0.6;
      cursor: default !important;
    }

    #product_size label.disabled:hover {
      opacity: 0.6 !important;
      border-color: #bdbdbd;
      color: #9f9f9f;
    }

    #add_to_cart {
      text-transform: uppercase;
      margin-right: 20px;
    }

    .ar #add_to_cart {
      margin-left: 20px;
      margin-right: 0;
    }

    #review_product {
      margin-bottom: 20px;
    }

    #review_product .reviewRatings i {
      display: inline-block;
      width: 24px;
      height: 24px;
      text-align: center;
      line-height: 24px;
      border-radius: 50%;
      margin-right: 12px;
      border: 1px solid #bdbdbd;
      cursor: pointer;
    }

    #review_product .reviewRatings i:hover {
      background-color: #8b8b8b;
    }

    #review_product .reviewRatings i.selected {
      background-color: #9f9f9f;
      color: #fff;
    }

    .ar #review_product .reviewRatings i {
      margin-right: 0;
      margin-left: 12px;
      font-family: apercu, Arial, Sans-Serif;
    }

    #brand_search input {
      padding-right: 30px;
      border: 1px solid #bdbdbd;
    }

    #brand_search i {
      display: block;
      width: 14px;
      height: 14px;
      background-position: -158px -82px;
      position: absolute;
      top: 50%;
      right: 8px;
      margin-top: -7px;
      transition: all 0.2s;
    }

    #brand_search input:focus ~ i {
      -ms-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    .ar #brand_search input {
      padding-right: 8px;
      padding-left: 30px;
    }

    .ar #brand_search i {
      right: auto;
      left: 8px;
      background-position: -172px -82px;
    }

    .ar #brand_search input:focus ~ i {
      -ms-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    #catalog_filter_options li .label {
      padding-left: 18px;
      text-indent: -18px;
      line-height: 13px;
      margin-bottom: 12px;
      cursor: pointer;
      display: block;
      font-weight: 400;
      font-size: 12px;
    }

    #catalog_filter_options li .label > input {
      width: 13px;
      height: 13px;
      padding: 0;
      margin: 0 5px 0 0;
      vertical-align: bottom;
      position: relative;
      display: inline;
    }

    #catalog_filter_options li .label:hover {
      text-decoration: underline;
    }

    #catalog_filter_options #catalog_filter_color li .label,
    #catalog_filter_options #catalog_filter_size_original li .label,
    #catalog_filter_options #catalog_filter_size li .label {
      padding: 0;
      margin-left: 12px;
      position: relative;
      direction: ltr;
    }

    #catalog_filter_options #catalog_filter_color li .label.selected,
    #catalog_filter_options #catalog_filter_size_original li .label.selected,
    #catalog_filter_options #catalog_filter_size li .label.selected {
      color: #fff;
      background-color: #bdbdbd;
    }

    #catalog_filter_options #catalog_filter_color li .label i.ticked,
    #catalog_filter_options #catalog_filter_size_original li .label i.ticked,
    #catalog_filter_options #catalog_filter_size li .label i.ticked {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #bdbdbd;
      color: #fff;
    }

    #catalog_filter_options #catalog_filter_color li .label.contrast i.ticked,
    #catalog_filter_options
    #catalog_filter_size_original
    li
    .label.contrast
    i.ticked,
    #catalog_filter_options #catalog_filter_size li .label.contrast i.ticked {
      border-color: #9f9f9f;
    }

    #catalog_filter_options #catalog_filter_color li .label:hover {
      opacity: 0.6;
    }

    #catalog_filter_options #catalog_filter_size_original li .label,
    #catalog_filter_options #catalog_filter_size li .label {
      width: 53.333px;
      height: 27px;
      line-height: 25px;
      border: 1px solid #bdbdbd;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      text-align: center;
      text-indent: 0;
      font-size: 10px !important;
    }

    #catalog_filter_options #catalog_filter_size_original li .label:hover,
    #catalog_filter_options #catalog_filter_size li .label:hover {
      color: #fff;
      text-decoration: none;
      background-color: #bdbdbd;
    }

    #catalog_filter_options #catalog_filter_size_original li .label.selected,
    #catalog_filter_options #catalog_filter_size li .label.selected {
      color: #fff;
      background-color: #bdbdbd;
    }

    #catalog_filter_options #catalog_filter_price li .label {
      font-size: 11px;
    }

    .ar #catalog_filter_options li .label {
      padding-left: 0;
      padding-right: 18px;
    }

    .ar #catalog_filter_options li .label > input {
      margin: 0 0 0 5px;
    }

    .ar #catalog_filter_options #catalog_filter_color li .label,
    .ar #catalog_filter_options #catalog_filter_size_original li .label,
    .ar #catalog_filter_options #catalog_filter_size li .label {
      margin-left: 0;
      margin-right: 12px;
    }

    #unsubscribe_container form {
      display: inline-block;
    }

    #coupon_code {
      padding-right: 70px;
    }

    .ar #coupon_code {
      padding-left: 70px;
      padding-right: 8px;
    }

    #coupon_delete {
      height: auto;
      background: transparent;
      width: auto;
      padding: 0;
      color: #666;
      text-decoration: underline;
    }

    #coupon_delete:hover {
      text-decoration: none;
    }

    #standalone_id_document_container form {
      width: 40%;
      margin: 0 auto;
    }

    #standalone_id_document_container form input.file {
      padding: 8px;
      height: auto;
    }

    #standalone_id_document_container form img {
      max-width: 100%;
    }

    .nm-checkbox,
    .nm-radio-button {
      position: relative;
      margin: 20px 0;
    }

    .nm-checkbox input,
    .nm-radio-button input {
      position: absolute;
      margin: 5px;
      padding: 0;
      visibility: hidden;
    }

    .nm-checkbox__label-visible,
    .nm-radio-button__label-visible {
      margin-left: 2em;
      margin-bottom: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .nm-checkbox__input,
    .nm-radio-button__input {
      position: relative;
      width: 16px;
      height: 16px;
      border: 1px solid #bdbdbd;
      background-color: #fff;
      margin: 0 10px;
    }

    .nm-checkbox__input:after,
    .nm-radio-button__input:after {
      content: '';
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background: #363636;
      transform: translateX(-50%) translateY(-50%);
    }

    .nm-checkbox,
    input[type='checkbox']:checked + span .nm-checkbox__input:after {
      display: block;
    }

    .nm-radio-button__input,
    .nm-radio-button__input:after {
      border-radius: 50%;
    }

    input[type='radio']:checked + span .nm-radio-button__input:after {
      display: block;
    }

    i.logo {
      display: inline-block;
      height: 60px;
      background-image: url(/web-desktop/b0035443a95a6843fb6e933cbd8c3b54.png);
      background-repeat: no-repeat;
      background-position: 0 -999px;
      margin: 0 auto;
    }

    .light i.logo {
      background-image: url(/web-desktop/bd7a43e109817caea8e8ebf0c7772d9b.png);
    }

    i.logo.seven_for_all_mankind {
      width: 110px;
      background-position: 0 0;
    }

    i.logo.michael_michael_kors {
      width: 129px;
      background-position: -111px 0;
    }

    i.logo.lauren_ralph_lauren {
      width: 149px;
      background-position: -240px 0;
    }

    i.logo.dkny {
      width: 135px;
      background-position: -388px 0;
    }

    i.logo.calvin_klein {
      width: 155px;
      background-position: -523px 0;
    }

    i.logo.armani_exchange {
      width: 115px;
      background-position: -677px 0;
    }

    i.logo.lacoste {
      width: 125px;
      background-position: -795px 0;
    }

    i.logo.invicta {
      width: 120px;
      background-position: -920px 0;
    }

    i.logo.nike {
      width: 101px;
      background-position: -1044px 0;
    }

    i.logo.ginger {
      width: 126px;
      background-position: -1148px 0;
    }

    i.logo.puma {
      width: 97px;
      background-position: -1277px 0;
    }

    i.logo.adidas {
      width: 140px;
      background-position: -1376px 0;
    }

    i.logo.ella {
      width: 100px;
      background-position: -1519px 0;
    }

    i.logo.jack_jones {
      width: 158px;
      background-position: -1620px 0;
    }

    i.logo.brave_soul {
      width: 152px;
      background-position: -1780px 0;
    }

    i.logo.club_l {
      width: 35px;
      background-position: -1934px 0;
    }

    i.logo.britishknights {
      width: 80px;
      background-position: -1970px 0;
    }

    i.logo.solid {
      width: 80px;
      background-position: -2052px 0;
    }

    i.logo.vero_moda {
      width: 160px;
      background-position: -2133px 0;
    }

    i.logo.mocks {
      width: 95px;
      background-position: -2296px 0;
    }

    i.logo.threadz {
      width: 56px;
      background-position: -2388px 0;
    }

    i.logo.polo_ralph_lauren {
      width: 109px;
      background-position: -2447px 0;
    }

    i.logo.santa_monica_polo_club {
      width: 65px;
      background-position: -2556px 0;
    }

    i.logo.icon_brand {
      width: 146px;
      background-position: -2626px 0;
    }

    i.logo.quontum {
      width: 46px;
      background-position: -2773px 0;
    }

    i.logo.vila {
      width: 135px;
      background-position: -2823px 0;
    }

    i.logo.glamorous {
      width: 160px;
      background-position: -2959px 0;
    }

    i.logo.only {
      width: 100px;
      background-position: -3119px 0;
    }

    i.logo.bellfield {
      width: 86px;
      background-position: -3219px 0;
    }

    i.logo.jack_jones_premium {
      width: 163px;
      background-position: -3305px 0;
    }

    i.logo.timing {
      width: 115px;
      background-position: -3468px 0;
    }

    i.logo.little_mistress {
      width: 160px;
      background-position: -3583px 0;
    }

    i.logo.rare {
      width: 56px;
      background-position: -3747px 0;
    }

    i.logo.adidas_originals {
      width: 60px;
      background-position: -3808px 0;
    }

    i.logo.baselondon {
      width: 80px;
      background-position: -3873px 0;
    }

    i.logo.humor {
      width: 90px;
      background-position: -3956px 0;
    }

    i.logo.skechers {
      width: 125px;
      background-position: -4049px 0;
    }

    i.logo.clowse {
      width: 105px;
      background-position: -4178px 0;
    }

    i.logo.h_nathalie {
      width: 125px;
      background-position: -4286px 0;
    }

    i.logo.d_struct {
      width: 110px;
      background-position: -4411px 0;
    }

    i.logo.timberland {
      width: 160px;
      background-position: -4525px 0;
    }

    i.logo.native_youth {
      width: 60px;
      background-position: -4686px 0;
    }

    i.logo.hayas_closet {
      width: 83px;
      background-position: -4747px 0;
    }

    i.logo.zack {
      width: 80px;
      background-position: -4833px 0;
    }

    i.logo.jana_imaan {
      width: 106px;
      background-position: -4915px 0;
    }

    i.logo.io_ion {
      width: 105px;
      background-position: -5021px 0;
    }

    i.logo.new_era {
      width: 88px;
      background-position: -5136px 0;
    }

    i.logo.pieces {
      width: 127px;
      background-position: -5225px 0;
    }

    i.logo.carlton_london {
      width: 131px;
      background-position: -5354px 0;
    }

    i.logo.mel {
      width: 93px;
      background-position: -5486px 0;
    }

    i.logo.casio {
      width: 111px;
      background-position: -5579px 0;
    }

    i.logo.reason {
      width: 127px;
      background-position: -5694px 0;
    }

    i.logo.lucleon {
      width: 142px;
      background-position: -5822px 0;
    }

    i.logo.anaya {
      width: 96px;
      background-position: -5968px 0;
    }

    i.logo.jeepers_peepers {
      width: 160px;
      background-position: -6069px 0;
    }

    i.logo.spurr {
      width: 129px;
      background-position: -6229px 0;
    }

    i.logo.converse {
      width: 158px;
      background-position: -6358px 0;
    }

    i.logo.vans {
      width: 100px;
      background-position: -6516px 0;
    }

    i.logo.diesel {
      width: 101px;
      background-position: -6616px 0;
    }

    i.logo.swarovski {
      width: 115px;
      background-position: -6721px 0;
    }

    i.logo.tommy_hilfiger {
      width: 160px;
      background-position: -6837px 0;
    }

    i.logo.seventy_five {
      width: 111px;
      background-position: -7000px 0;
    }

    i.logo.asics {
      width: 120px;
      background-position: -7114px 0;
    }

    i.logo.missguided {
      width: 125px;
      background-position: -7235px 0;
    }

    i.logo.saucony {
      width: 140px;
      background-position: -7363px 0;
    }

    i.logo.reebok_brand {
      width: 145px;
      background-position: -7503px 0;
    }

    i.logo.new_balance {
      width: 100px;
      background-position: -7650px 0;
    }

    i.logo.topshop {
      width: 155px;
      background-position: -7750px 0;
    }

    i.logo.boohoo {
      width: 155px;
      background-position: -7907px 0;
    }

    i.logo.mango {
      width: 130px;
      background-position: -8066px 0;
    }

    #popup {
      display: none;
    }

    #main-navigation .brands .shop-all-brands a {
      height: 40px;
      width: 152px;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    #main-navigation .brands .shop-all-brands a,
    #main-navigation .brands a.logo_container,
    #main-navigation .brands a.text_container {
      border: 1px solid #666;
      text-align: center;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background-color: #fff;
    }

    #main-navigation .brands .shop-all-brands a:hover,
    #main-navigation .brands a.logo_container:hover,
    #main-navigation .brands a.text_container:hover {
      border-color: #8b8b8b;
      color: #8b8b8b;
    }

    .ar #main-navigation .brands ul,
    .ar #main-navigation .brands ul li {
      float: right;
    }

    .ar #main-navigation .brands a.text_container {
      font-family: frutiger, Tahoma, Arial, Sans-serif;
    }

    #main-navigation .brands:after {
      content: '';
      display: block;
      clear: both;
    }

    #main-navigation .brands ul {
      overflow: hidden;
      *zoom: 1;
      margin-left: -8px;
      margin-right: -8px;
      margin-top: -8px;
    }

    #main-navigation .brands ul li {
      float: left;
      margin-left: 8px;
      margin-top: 8px;
    }

    #main-navigation .brands.new a.logo_container {
      background-position: 50%;
      background-size: cover;
    }

    #main-navigation .brands.new a.logo_container:hover {
      opacity: 0.7;
    }

    #main-navigation .brands a.logo_container,
    #main-navigation .brands a.text_container {
      width: 72px;
      height: 40px;
      background-image: url(/web-desktop/8baef6ede7b514c7b57d8bc571bdc6a9.png);
      background-repeat: no-repeat;
    }

    #main-navigation .brands a.text_container {
      font-size: 14px;
      width: 152px;
      padding-top: 10px;
      background-image: none;
    }

    #main-navigation .brands a.logo_container.ginger {
      background-position: 0 0;
    }

    #main-navigation .brands a.logo_container.ginger:hover {
      background-position: 0 -38px;
    }

    #main-navigation .brands a.logo_container.vero_moda {
      background-position: -70px 0;
    }

    #main-navigation .brands a.logo_container.vero_moda:hover {
      background-position: -70px -38px;
    }

    #main-navigation .brands a.logo_container.glamorous {
      background-position: -140px 0;
    }

    #main-navigation .brands a.logo_container.glamorous:hover {
      background-position: -140px -38px;
    }

    #main-navigation .brands a.logo_container.nike {
      background-position: -210px 0;
    }

    #main-navigation .brands a.logo_container.nike:hover {
      background-position: -210px -38px;
    }

    #main-navigation .brands a.logo_container.adidas {
      background-position: -280px 0;
    }

    #main-navigation .brands a.logo_container.adidas:hover {
      background-position: -280px -38px;
    }

    #main-navigation .brands a.logo_container.lacoste {
      background-position: -350px 0;
    }

    #main-navigation .brands a.logo_container.lacoste:hover {
      background-position: -350px -38px;
    }

    #main-navigation .brands a.logo_container.seventy_five {
      background-position: -420px 0;
    }

    #main-navigation .brands a.logo_container.seventy_five:hover {
      background-position: -420px -38px;
    }

    #main-navigation .brands a.logo_container.quontum {
      background-position: -490px 0;
    }

    #main-navigation .brands a.logo_container.quontum:hover {
      background-position: -490px -38px;
    }

    #main-navigation .brands a.logo_container.santa_monica_polo_club {
      background-position: -560px 0;
    }

    #main-navigation .brands a.logo_container.santa_monica_polo_club:hover {
      background-position: -560px -38px;
    }

    #main-navigation .brands a.logo_container.ella {
      background-position: -630px 0;
    }

    #main-navigation .brands a.logo_container.ella:hover {
      background-position: -630px -38px;
    }

    #main-navigation .brands a.logo_container.only {
      background-position: -700px 0;
    }

    #main-navigation .brands a.logo_container.only:hover {
      background-position: -700px -38px;
    }

    #main-navigation .brands a.logo_container.brave_soul {
      background-position: -770px 0;
    }

    #main-navigation .brands a.logo_container.brave_soul:hover {
      background-position: -770px -38px;
    }

    #main-navigation .brands a.logo_container.the_mountain {
      background-position: -840px 0;
    }

    #main-navigation .brands a.logo_container.the_mountain:hover {
      background-position: -840px -38px;
    }

    #main-navigation .brands a.logo_container.jack_jones {
      background-position: -910px 0;
    }

    #main-navigation .brands a.logo_container.jack_jones:hover {
      background-position: -910px -38px;
    }

    #main-navigation .brands a.logo_container.puma {
      background-position: -980px 0;
    }

    #main-navigation .brands a.logo_container.puma:hover {
      background-position: -980px -38px;
    }

    #main-navigation .brands a.logo_container.polo_ralph_lauren {
      background-position: -1050px 0;
    }

    #main-navigation .brands a.logo_container.polo_ralph_lauren:hover {
      background-position: -1050px -38px;
    }

    #main-navigation .brands a.logo_container.voi_jeans {
      background-position: -1120px 0;
    }

    #main-navigation .brands a.logo_container.voi_jeans:hover {
      background-position: -1120px -38px;
    }

    #main-navigation .brands a.logo_container.heys {
      background-position: -1190px 0;
    }

    #main-navigation .brands a.logo_container.heys:hover {
      background-position: -1190px -38px;
    }

    #main-navigation .brands a.logo_container.ea7_emporio_armani {
      background-position: -1260px 0;
    }

    #main-navigation .brands a.logo_container.ea7_emporio_armani:hover {
      background-position: -1260px -38px;
    }

    #main-navigation .brands a.logo_container.adolf_winston {
      background-position: -1330px 0;
    }

    #main-navigation .brands a.logo_container.adolf_winston:hover {
      background-position: -1330px -38px;
    }

    #main-navigation .brands a.logo_container.icon_brand {
      background-position: -1400px 0;
    }

    #main-navigation .brands a.logo_container.icon_brand:hover {
      background-position: -1400px -38px;
    }

    #main-navigation .brands a.logo_container.guess {
      background-position: -1470px 0;
    }

    #main-navigation .brands a.logo_container.guess:hover {
      background-position: -1470px -38px;
    }

    #main-navigation .brands a.logo_container.club_l {
      background-position: -1540px 0;
    }

    #main-navigation .brands a.logo_container.club_l:hover {
      background-position: -1540px -38px;
    }

    #main-navigation .brands a.logo_container.swarovski {
      background-position: -1610px 0;
    }

    #main-navigation .brands a.logo_container.swarovski:hover {
      background-position: -1610px -38px;
    }

    #main-navigation .brands a.logo_container.bellfield {
      background-position: -1679px 0;
    }

    #main-navigation .brands a.logo_container.bellfield:hover {
      background-position: -1679px -38px;
    }

    #main-navigation .brands a.logo_container.calvin_klein {
      background-position: -1750px 0;
    }

    #main-navigation .brands a.logo_container.calvin_klein:hover {
      background-position: -1750px -38px;
    }

    #main-navigation .brands a.logo_container.miss_guided {
      background-position: -1820px 0;
    }

    #main-navigation .brands a.logo_container.miss_guided:hover {
      background-position: -1820px -38px;
    }

    #main-navigation .brands a.logo_container.qupid {
      background-position: -1888px 0;
    }

    #main-navigation .brands a.logo_container.qupid:hover {
      background-position: -1888px -38px;
    }

    #main-navigation .brands a.logo_container.ruby_q {
      background-position: -1958px 0;
    }

    #main-navigation .brands a.logo_container.ruby_q:hover {
      background-position: -1958px -38px;
    }

    #main-navigation .brands a.logo_container.skechers {
      background-position: -2029px 0;
    }

    #main-navigation .brands a.logo_container.skechers:hover {
      background-position: -2029px -38px;
    }

    #main-navigation .brands a.logo_container.vans {
      background-position: -2100px 0;
    }

    #main-navigation .brands a.logo_container.vans:hover {
      background-position: -2100px -38px;
    }

    #main-navigation .brands a.logo_container.velvet_fox {
      background-position: -2170px 0;
    }

    #main-navigation .brands a.logo_container.velvet_fox:hover {
      background-position: -2170px -38px;
    }

    #main-navigation .brands a.logo_container.adidas_originals {
      background-position: -2239px 0;
    }

    #main-navigation .brands a.logo_container.adidas_originals:hover {
      background-position: -2239px -38px;
    }

    #main-navigation .brands a.logo_container.onitsuka_tiger {
      background-position: -2310px 0;
    }

    #main-navigation .brands a.logo_container.onitsuka_tiger:hover {
      background-position: -2310px -38px;
    }

    #main-navigation .brands a.logo_container.diesel {
      background-position: -2379px 0;
    }

    #main-navigation .brands a.logo_container.diesel:hover {
      background-position: -2379px -38px;
    }

    #main-navigation .brands a.logo_container.ivy_park {
      background-position: -3220px 0;
    }

    #main-navigation .brands a.logo_container.ivy_park:hover {
      background-position: -3220px -38px;
    }

    #main-navigation .brands a.logo_container.g_star_raw {
      background-position: -2450px 0;
    }

    #main-navigation .brands a.logo_container.g_star_raw:hover {
      background-position: -2450px -38px;
    }

    #main-navigation .brands a.logo_container.topshop {
      background-position: -2520px 0;
    }

    #main-navigation .brands a.logo_container.topshop:hover {
      background-position: -2520px -38px;
    }

    #main-navigation .brands a.logo_container.timberland {
      background-position: -2590px 0;
    }

    #main-navigation .brands a.logo_container.timberland:hover {
      background-position: -2590px -38px;
    }

    #main-navigation .brands a.logo_container.new_look {
      background-position: -2660px 0;
    }

    #main-navigation .brands a.logo_container.new_look:hover {
      background-position: -2660px -38px;
    }

    #main-navigation .brands a.logo_container.herschel {
      background-position: -2730px 0;
    }

    #main-navigation .brands a.logo_container.herschel:hover {
      background-position: -2730px -38px;
    }

    #main-navigation .brands a.logo_container.suite_blanco {
      background-position: -2800px 0;
    }

    #main-navigation .brands a.logo_container.suite_blanco:hover {
      background-position: -2800px -38px;
    }

    #main-navigation .brands a.logo_container.miss_selfridge {
      background-position: -2870px 0;
    }

    #main-navigation .brands a.logo_container.miss_selfridge:hover {
      background-position: -2870px -38px;
    }

    #main-navigation .brands a.logo_container.mango {
      background-position: -2940px 0;
    }

    #main-navigation .brands a.logo_container.mango:hover {
      background-position: -2940px -38px;
    }

    #main-navigation .brands a.logo_container.dorothy_perkins {
      background-position: -3010px 0;
    }

    #main-navigation .brands a.logo_container.dorothy_perkins:hover {
      background-position: -3010px -38px;
    }

    #main-navigation .brands a.logo_container.dkny {
      background-position: -3149px 0;
    }

    #main-navigation .brands a.logo_container.dkny:hover {
      background-position: -3149px -38px;
    }

    #main-navigation .brands a.logo_container.fossil {
      background-position: -3079px 0;
    }

    #main-navigation .brands a.logo_container.fossil:hover {
      background-position: -3079px -38px;
    }

    #main-navigation .brands a.logo_container.forever_21 {
      background-position: -3306px 0;
    }

    #main-navigation .brands a.logo_container.forever_21:hover {
      background-position: -3306px -38px;
    }

    ul.brand_logos {
      overflow: hidden;
      *zoom: 1;
    }

    ul.brand_logos li {
      float: left;
    }

    ul.brand_logos li a {
      display: block;
      text-align: center;
    }

    .ar ul.brand_logos li {
      float: right;
    }

    #template_sem01 ul.brand_logos,
    #template_sem02 ul.brand_logos {
      margin-top: 16px;
    }

    #template_sem01 ul.brand_logos li,
    #template_sem02 ul.brand_logos li {
      width: 16.666%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border-left: 1px solid #fff;
    }

    #template_sem01 ul.brand_logos li:first-child,
    #template_sem02 ul.brand_logos li:first-child {
      border-left: 0;
    }

    #template_sem01 ul.brand_logos li a,
    #template_sem02 ul.brand_logos li a {
      font-size: 0;
      padding: 5px 0;
    }

    .ar #template_sem01 ul.brand_logos li,
    .ar #template_sem02 ul.brand_logos li {
      border-left: 0;
      border-right: 1px solid #fff;
    }

    .ar #template_sem01 ul.brand_logos li:first-child,
    .ar #template_sem02 ul.brand_logos li:first-child {
      border-right: 0;
    }

    #catalog_banner {
      margin-bottom: 20px;
    }

    .catalog_banner_top {
      overflow: hidden;
      *zoom: 1;
      text-align: center;
      background: #f5f5f5;
    }

    .catalog_banner_top .module {
      background-repeat: no-repeat;
      float: left;
      height: 230px;
      opacity: 1;
      margin: 0;
    }

    .catalog_banner_top .module.module_01 {
      background-position: 0 0;
    }

    .catalog_banner_top span.button {
      color: #000;
      background-color: #fff;
      display: inline-block;
      font-size: 12px;
      font-weight: 700;
      padding: 5px 12px 4px;
      margin-top: 184px;
    }

    .catalog_banner_top span.button:after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: #000;
      border-right-width: 0;
      margin-left: 8px;
    }

    .catalog_banner_top .module:hover {
      opacity: 0.8;
    }

    .catalog_banner_top.b_one,
    .catalog_banner_top.c_one {
      height: 120px;
    }

    .catalog_banner_top.b_one img.brand_logo,
    .catalog_banner_top.c_one img.brand_logo {
      margin: 35px 0;
    }

    .catalog_banner_top.b_one a,
    .catalog_banner_top.c_one a {
      padding: 0 5px;
    }

    .catalog_banner_top.a_one {
      height: 170px;
    }

    .catalog_banner_top.b_two {
      width: 505px;
      height: 180px;
      float: left;
    }

    .catalog_banner_top.b_two img.brand_logo {
      margin-top: 31px;
    }

    .catalog_banner_top.tb_one,
    .catalog_banner_top.tb_three {
      width: 100%;
      text-align: left;
      height: 180px;
      float: left;
    }

    .catalog_banner_top.tb_one p.cat_description,
    .catalog_banner_top.tb_three p.cat_description {
      font-size: 12px;
      width: 62%;
      margin-top: 0;
      padding: 10px 21px;
    }

    .catalog_banner_top.tb_one h2.tb_title,
    .catalog_banner_top.tb_three h2.tb_title {
      text-align: left;
      margin: 26px 21px 0;
      letter-spacing: 0;
      font-size: 29px;
      color: #000;
      text-transform: uppercase;
      font-weight: 300;
    }

    .catalog_banner_top.tb_one h2.tb_title.only_two,
    .catalog_banner_top.tb_three h2.tb_title.only_two {
      margin-top: 70px;
    }

    .catalog_banner_top.tb_one .cta_buttons,
    .catalog_banner_top.tb_three .cta_buttons {
      margin-left: 13px;
      margin-top: 13px;
    }

    .catalog_banner_top.tb_one span.button,
    .catalog_banner_top.tb_three span.button {
      padding: 7px 0;
      margin: 0 8px;
      float: left;
      width: 140px;
      text-align: center;
      text-transform: uppercase;
      background-color: #fff;
    }

    .catalog_banner_top.tb_one a:hover span.button,
    .catalog_banner_top.tb_three a:hover span.button {
      background-color: #ebeded;
    }

    .catalog_banner_top.tb_one.four_line h2.tb_title,
    .catalog_banner_top.tb_one.three_line h2.tb_title,
    .catalog_banner_top.tb_three.four_line h2.tb_title,
    .catalog_banner_top.tb_three.three_line h2.tb_title {
      margin: 18px 21px 0;
    }

    .catalog_banner_top.tb_one.four_line .cta_buttons,
    .catalog_banner_top.tb_three.four_line .cta_buttons {
      margin-top: 0;
    }

    .catalog_banner_top.tb_three {
      height: 130px;
    }

    .catalog_banner_top h2.cat_title {
      margin: 32px 0 15px !important;
      color: #000;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 22px !important;
      letter-spacing: 4.7px;
    }

    .catalog_banner_top p.cat_description {
      color: #000;
      padding: 0 100px 16px;
      font-weight: 300;
      font-size: 12px;
      margin-top: 15px;
    }

    .catalog_banner_top .brand_image {
      display: inline-block;
    }

    .catalog_banner_top span.cat_links {
      color: #000;
      display: inline-block;
      font-size: 13px;
      font-weight: 400;
      padding: 5px;
    }

    .catalog_banner_top a:hover span.cat_links {
      text-decoration: underline;
    }

    .tb_image {
      position: absolute;
      right: 0;
      left: auto;
    }

    .tb_image.logo {
      right: 5%;
      margin-top: 40px;
    }

    .ar .tb_image {
      right: auto;
      left: 0;
    }

    .ar .tb_image.logo {
      left: 5%;
    }

    .ar .catalog_banner_top .module {
      float: right;
    }

    .ar .catalog_banner_top.tb_one,
    .ar .catalog_banner_top.tb_three {
      text-align: right;
      float: right;
    }

    .ar .catalog_banner_top.tb_one h2.tb_title,
    .ar .catalog_banner_top.tb_three h2.tb_title {
      text-align: right;
    }

    .ar .catalog_banner_top.tb_one p.cat_description,
    .ar .catalog_banner_top.tb_three p.cat_description {
      padding: 5px 21px 0;
      line-height: 1.5;
    }

    .ar .catalog_banner_top.tb_one .cta_buttons,
    .ar .catalog_banner_top.tb_three .cta_buttons {
      margin-right: 13px;
    }

    .ar .catalog_banner_top.tb_one span.button,
    .ar .catalog_banner_top.tb_three span.button {
      padding: 7px 0;
      float: right;
    }

    .ar .catalog_banner_top span.button {
      padding: 8px 12px 4px;
    }

    .ar .catalog_banner_top span.button:after {
      border-right-color: #000;
      border-left-width: 0;
      margin-right: 8px;
      margin-left: 0;
      border-right-width: 5px;
    }

    .ar .catalog_banner_top h1.cat_title,
    .ar .catalog_banner_top h2.cat_title {
      letter-spacing: 0;
    }

    .column_02 .module {
      width: 50%;
    }

    .column_02 .module.module_02 {
      background-position: -398px 0;
    }

    .column_03 .module {
      width: 33.333%;
    }

    .column_03 .module.module_02 {
      background-position: -265px 0;
    }

    .column_03 .module.module_03 {
      background-position: -530px 0;
    }

    .column_04 .module {
      width: 25%;
    }

    .column_04 .module.module_02 {
      background-position: -199px 0;
    }

    .column_04 .module.module_03 {
      background-position: -398px 0;
    }

    .column_04 .module.module_04 {
      background-position: -597px 0;
    }

    .column_05 .module {
      width: 20%;
    }

    .column_05 .module.module_02 {
      background-position: -159px 0;
    }

    .column_05 .module.module_03 {
      background-position: -318px 0;
    }

    .column_05 .module.module_04 {
      background-position: -477px 0;
    }

    .column_05 .module.module_05 {
      background-position: -636px 0;
    }

    .column_06 .module {
      width: 16.66666%;
    }

    .column_06 .module.module_02 {
      background-position: -132px 0;
    }

    .column_06 .module.module_03 {
      background-position: -264px 0;
    }

    .column_06 .module.module_04 {
      background-position: -396px 0;
    }

    .column_06 .module.module_05 {
      background-position: -528px 0;
    }

    .column_06 .module.module_06 {
      background-position: -660px 0;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(1turn);
      }
    }

    @keyframes pulse {
      50% {
        background: #999;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .loader {
      height: 24px;
      position: relative;
      margin: 30px 0;
    }

    .loading {
      border-radius: 50%;
      width: 24px;
      height: 24px;
      border: 0.25rem solid hsla(0, 0%, 60%, 0.4);
      border-top-color: #999;
      animation: spin 0.6s infinite linear;
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

    img {
      image-rendering: auto !important;
    }

    #main-navigation li.closed img {
      display: none;
    }

    ul.product_overview li.product .image_container img {
      display: block;
      max-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    ul#catalog_listings li.listing .image_container img,
    ul.catalog_listings li.listing .image_container img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100%;
      margin-top: -40px;
    }

    ul#catalog_listings li.listing .image_container img.loaded,
    ul.catalog_listings li.listing .image_container img.loaded {
      z-index: 20;
    }

    ul#catalog_listings
    li.listing
    .catalog_tag_maternity
    .image_container:after,
    ul#catalog_listings
    li.listing
    .catalog_tag_plus_size
    .image_container:after,
    ul.catalog_listings
    li.listing
    .catalog_tag_maternity
    .image_container:after,
    ul.catalog_listings
    li.listing
    .catalog_tag_plus_size
    .image_container:after {
      content: '';
      z-index: 24;
      width: 21px;
      position: absolute;
      top: 8px;
      right: 0;
    }

    ul#catalog_listings
    li.listing
    .catalog_tag_plus_size
    .image_container:after,
    ul.catalog_listings
    li.listing
    .catalog_tag_plus_size
    .image_container:after {
      height: 66px;
      background-position: -226px -116px;
    }

    ul#catalog_listings
    li.listing
    .catalog_tag_maternity
    .image_container:after,
    ul.catalog_listings
    li.listing
    .catalog_tag_maternity
    .image_container:after {
      height: 70px;
      background-position: -226px -182px;
    }

    .color-tag {
      position: absolute;
      bottom: 5px;
      z-index: 20;
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
      padding: 8px 20px;
      font-size: 12px;
      box-shadow: 6px 3px 7px -4px rgba(0, 0, 0, 0.45);
      display: flex;
      align-items: center;
      z-index: 30;
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
    }

    .color-tag__icon,
    .color-tag__swatch {
      background-size: contain;
      background-position: 50%;
      background-repeat: no-repeat;
    }

    .color-tag__icon {
      background-image: url(/web-desktop/9f6306f507a8d66cf8bf7e2391cbf3b3.svg);
      height: 15px;
      width: 15px;
      margin-right: 5px;
    }

    .ar .color-tag .color-tag__icon {
      margin-left: 5px;
      margin-right: unset;
    }

    .ar .color-tag .color-tag__options-count {
      padding-left: unset;
      padding-right: 10px;
    }

    ul#catalog_listings.less li.listing .image_container img,
    ul.catalog_listings.less li.listing .image_container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .ar
    ul#catalog_listings
    li.listing
    .catalog_tag_maternity
    .image_container:after,
    .ar
    ul#catalog_listings
    li.listing
    .catalog_tag_plus_size
    .image_container:after,
    .ar
    ul.catalog_listings
    li.listing
    .catalog_tag_maternity
    .image_container:after,
    .ar
    ul.catalog_listings
    li.listing
    .catalog_tag_plus_size
    .image_container:after {
      right: auto;
      left: 0;
    }

    .ar
    ul#catalog_listings
    li.listing
    .catalog_tag_plus_size
    .image_container:after,
    .ar
    ul.catalog_listings
    li.listing
    .catalog_tag_plus_size
    .image_container:after {
      height: 203px;
      background-position: -247px -124px;
    }

    .ar
    ul#catalog_listings
    li.listing
    .catalog_tag_maternity
    .image_container:after,
    .ar
    ul.catalog_listings
    li.listing
    .catalog_tag_maternity
    .image_container:after {
      height: 100px;
      background-position: -268px 0;
    }

    #product_container header .brand_logo img {
      display: block;
    }

    #product_container .product_carousel_container img {
      display: block;
      max-width: 100%;
    }

    #product_container
    .product_carousel_container
    #popup_zoom_image
    .zoomedImage
    .image_container
    img {
      position: absolute;
      top: 0;
      left: 0;
    }

    #product_container
    .product_carousel_container
    #popup_zoom_image
    .zoomedImage
    .image_container
    img.loaded {
      z-index: 110;
    }

    #product_color a img {
      display: block;
    }

    .table_product_overview img {
      display: block;
      max-width: 100%;
    }

    #template_brands .banner {
      display: block;
      margin-bottom: 12px;
    }

    .common_loader {
      background: #fff url(/web-desktop/4b3afb84b2b71ef56df09997a350bd04.gif) no-repeat 50%;
      width: 24px;
      height: 24px;
      margin: 0 auto;
    }

    #cart_review .common_loader {
      background-color: #eee;
      background-image: url(/web-desktop/f1aae84c37eea7ec92fa7b3e6e72c6fb.gif);
    }

    ul#catalog_listings li.listing .image_container .preloader,
    ul.catalog_listings li.listing .image_container .preloader {
      background: #fff url(/web-desktop/4b3afb84b2b71ef56df09997a350bd04.gif) no-repeat 50%;
      padding-bottom: 144.4043%;
      position: relative;
      z-index: 10;
    }

    #product_container
    #popup_zoom_image
    .zoomedImage
    .image_container
    .preloader {
      z-index: 100;
      padding-bottom: 144.3569%;
    }

    .invoiceLoader {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: hsla(0, 0%, 100%, 0.6) url(/web-desktop/4b3afb84b2b71ef56df09997a350bd04.gif) no-repeat 50%;
    }

    table {
      font-size: 12px;
      width: 100%;
    }

    .table_product_overview {
      margin: 14px 0 0;
      border-top: 1px solid #bdbdbd;
      display: flex;
      flex-direction: column;
      font-size: 12px;
    }

    .table_product_overview__thead {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      padding: 10px 0 0;
    }

    .table_product_overview__tbody {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin: 10px 0;
    }

    .table_product_overview__th {
      font-weight: 700;
      text-transform: uppercase;
      width: 16%;
      justify-content: space-evenly;
      align-items: center;
      display: flex;
      color: #000;
    }

    .table_product_overview a {
      color: #000;
    }

    .table_product_overview__td {
      padding: 12px;
      width: 16%;
      color: #000;
    }

    .table_product_overview__td.row_container {
      padding: 0;
      width: 100%;
    }

    .table_product_overview .wide {
      width: 20%;
    }

    .table_product_overview .price_column {
      text-align: right;
    }

    .table_product_overview .price_column span {
      display: block;
    }

    .table_product_overview .table_product {
      width: 100%;
      border-bottom: 1px solid #bdbdbd;
      font-size: 12px;
      display: flex;
      flex-direction: column;
    }

    .table_product_overview .table_product--no-border {
      border: none;
    }

    .table_product_overview .table_product__tr {
      display: flex;
      flex-direction: row;
      padding: 15px 0;
    }

    .table_product_overview .table_product__td {
      justify-content: space-between;
      align-items: center;
      display: flex;
      flex-direction: column;
      font-size: 12;
      width: 16%;
      font-weight: 400;
    }

    .table_product_overview .table_product__td.wide {
      width: 20%;
    }

    .table_product_overview .table_product__td .select_container {
      min-width: 120px;
    }

    .ar td,
    .ar th {
      text-align: right;
    }

    .ar table.product_overview .price_column {
      text-align: left;
    }

    #product_info table.product_details td,
    #product_info table.product_details th {
      vertical-align: top;
      padding-top: 4px;
    }

    #product_info table.product_details th {
      padding-right: 12px;
      width: 33.333%;
    }

    #product_info table.product_details tr:first-child td,
    #product_info table.product_details tr:first-child th {
      padding-top: 0;
    }

    #product_info table.review_ratings {
      margin: 6px 0 5px;
    }

    .ar #product_info table.product_details th {
      padding-left: 12px;
      padding-right: 0;
    }

    #overlay,
    #preloader {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 101;
    }

    .ie8 #overlay,
    .ie8 #preloader {
      background: url(/web-desktop/59f16bee2a44b8044a5893dd39f6acae.png) repeat 0 0;
    }

    #preloader {
      z-index: 200;
    }

    #preloader i {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 76px;
      height: 76px;
      margin-top: -38px;
      margin-left: -38px;
      background-color: rgba(0, 0, 0, 0.6);
      background-image: url(/web-desktop/7cae00f57a00bd0ccc32a0d361b1aaf9.gif);
      background-repeat: no-repeat;
      background-position: 50%;
      border-radius: 2px;
    }

    .faux_table {
      height: 100%;
      width: 100%;
      display: table;
    }

    .faux_table_cell {
      display: table-cell;
      vertical-align: middle;
      height: 100%;
      width: 100%;
    }

    .cart-retry {
      text-align: center;
      margin: 70px 0;
    }

    .cart-retry .cart-empty-title {
      font-size: 23px;
      margin: 15px 0;
    }

    .cart-retry .cart-retry-button {
      background-color: #2560a9;
      border-radius: 0;
      color: #fff;
      display: inline-block;
      text-align: center;
      width: 147px;
      font-weight: 400;
      height: 42px;
      line-height: 42px;
      font-size: 14px;
    }

    .nm-zoom {
      position: absolute;
      z-index: 1000;
      left: 50%;
      top: 230px;
      overflow: hidden;
      border-radius: 3px;
      width: 490px;
      height: 519px;
    }

    .zoom img {
      pointer-events: none;
    }

    .nm-zoom-image {
      max-width: 100%;
    }

    .nm-zoom-slides {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 100000000;
    }

    .nm-zoom-slides .carousel-arrow {
      position: absolute;
      display: block;
      height: 65px;
      width: 45px;
    }

    .nm-zoom-slides-wrapper {
      position: relative;
      z-index: 2;
      max-width: 650px;
      margin: 0 auto;
      height: 75%;
      margin-top: 20px;
      box-sizing: border-box;
      animation: fadeIn 0.25s ease-out;
    }

    .nm-zoom-slides-wrapper .prev {
      left: -78px !important;
      background: none;
    }

    .nm-zoom-slides-wrapper .prev:before {
      border: solid #fff;
      border-width: 0 2px 2px 0;
      display: block;
      position: relative;
      top: 14px;
      height: 35px;
      width: 36px;
      left: 14px;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }

    .nm-zoom-slides-wrapper .next {
      right: -78px !important;
      background-position: -101px -102px !important;
      background: none;
    }

    .nm-zoom-slides-wrapper .next:before {
      border: solid #fff;
      border-width: 0 2px 2px 0;
      display: block;
      position: relative;
      top: 14px;
      height: 35px;
      width: 36px;
      left: -10px;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }

    .nm-zoom-slides-wrapper .thumbs {
      bottom: -100px;
    }

    .nm-zoom-slides-wrapper .thumb {
      cursor: pointer;
      height: 74px;
      width: 54px;
      opacity: 0.5;
      margin: 0 10px;
      transition: opacity 0.1s, transform 0.1s ease-out;
      transform: none;
    }

    .nm-zoom-slides-wrapper .thumb.active {
      transform: scale(1.12);
    }

    .nm-zoom-slide-overlay {
      background: rgba(0, 0, 0, 0.83);
      width: 100%;
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      cursor: pointer;
      animation: fadeIn 0.1s ease-out;
    }

    .nm-zoom-slide-image-wrapper {
      text-align: center;
    }

    .nm-zoom-slide-image {
      max-width: 100%;
      max-height: 100%;
    }

    .product_carousel_container .zoom-wrapper.active .zoom {
      cursor: crosshair;
    }

    .ar .nm-zoom {
      left: auto;
      right: 50%;
    }

    .error-label {
      font-size: 12px;
      color: #ff1d05;
      margin-bottom: 12px;
    }

    .heading {
      text-transform: uppercase;
      border-bottom: 1px solid #bdbdbd;
      padding-bottom: 5px;
      margin-bottom: 9px;
      margin-top: 9px;
    }

    .heading a {
      font-weight: 700;
    }

    .banner-title {
      margin-top: 7px;
      display: flex;
      font-size: 14px;
      font-weight: 500;
    }

    .gradient-placeholder {
      animation: shimmer 1s linear infinite forwards;
      background: #f6f7f9;
      background-image: linear-gradient(90deg,
      #f6f7f9 0,
      #e9ebee 20%,
      #f6f7f9 40%,
      #f6f7f9);
      background-repeat: no-repeat;
      background-size: 800px 104px;
      min-height: 104px;
      position: relative;
    }

    @keyframes shimmer {
      0% {
        background-position: -100px 0;
      }
      to {
        background-position: 1200px 0;
      }
    }

    .recommendations {
      position: relative;
      padding: 30px 0;
    }

    .recommendations .header {
      margin-bottom: 20px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 16px;
    }

    .recommendations .header-title {
      font-size: 20px;
      color: #222;
      font-weight: 700;
    }

    .recommendations .recommendations-wrapper {
      position: relative;
      padding: 0 20px;
    }

    .recommendations .slim-slider-wrapper {
      overflow: hidden;
    }

    .recommendations .product-slides {
      position: relative;
      height: auto;
      padding-bottom: 30px;
      overflow: initial;
    }

    .recommendations .price-special {
      margin-left: 5px;
      text-decoration: line-through;
      color: #999;
      font-weight: 400;
    }

    .recommendations .slim-slides {
      height: auto;
    }

    .recommendations .product {
      display: inline-block;
      float: left;
      margin-left: 30px;
      max-width: 17%;
    }

    .recommendations .product:first-child {
      margin-left: 17px;
    }

    .recommendations .product.is-hidden {
      display: none;
    }

    .recommendations .product-link {
      display: block;
      font-size: 12px;
      line-height: 18px;
      padding: 5px;
      width: auto;
    }

    .recommendations .product-image {
      display: block;
      min-height: 230px;
      margin-bottom: 10px;
      width: 100%;
      max-height: 462px;
    }

    .recommendations .product-image img {
      max-width: 100%;
    }

    .recommendations .product-brand {
      display: block;
      color: #000;
      text-transform: uppercase;
      font-weight: 600;
    }

    .recommendations .product-name {
      display: block;
      word-wrap: break-word;
    }

    .recommendations .product-price {
      display: block;
      color: #000;
      font-weight: 600;
    }

    .recommendations .carousel-arrow:before {
      content: ' ' !important;
    }

    .recommendations .is-animating {
      transition: transform 0.4s;
    }

    .recommendations .carousel-arrow {
      display: block;
      height: 30px;
      width: 15px;
      top: 40%;
      margin-top: -15px;
      z-index: 1;
      text-indent: 200px;
      background-color: transparent !important;
      overflow: hidden;
      background-image: url(/web-desktop/a9351533d8d06e40bae3c7c464feaad2.png);
      background-repeat: no-repeat;
      background-size: 226px auto;
      cursor: pointer;
    }

    .recommendations .next {
      right: -20px;
      background-position: -71px -102px;
    }

    .recommendations .prev {
      background-position: -56px -102px;
      left: -20px;
    }

    .recommendations {
      overflow: hidden;
      *zoom: 1;
    }

    .results__recommendations .header,
    .trending__recommendations .header {
      border: none;
      text-align: center;
    }

    .results__recommendations .header-title,
    .trending__recommendations .header-title {
      font-size: 45px;
      text-transform: uppercase;
      font-weight: 900;
      display: inline-block;
      padding: 5px;
      color: #000;
      line-height: 80%;
    }

    .results__recommendations .header-title {
      font-size: 30px;
    }

    .ar .trending__recommendations .header-title {
      font-size: 40px;
      line-height: 150%;
    }

    .product-carousel-wrapper {
      width: 100%;
      display: grid;
    }

    .product-carousel-header {
      margin-bottom: 1%;
    }

    .product-carousel-header,
    .product-carousel-products {
      position: relative;
      text-align: center;
      justify-content: center;
      box-sizing: border-box;
      display: flex;
    }

    .product-carousel-product,
    .product-carousel-title,
    .product-carousel-viewall {
      flex: 1;
    }

    .product-carousel-title,
    .product-carousel-viewall {
      font-size: 20px;
      color: #000;
      font-weight: 400;
    }

    .product-carousel-product img {
      width: 100%;
      height: auto;
    }

    .product-carousel-products .slim-slider-wrapper {
      margin-bottom: 40px;
    }

    .product-carousel-product-info {
      font-size: 12px;
      text-align: left;
      margin: 10px 0;
    }

    .product-carousel-price,
    .product-carousel-product-brand {
      display: block;
      color: #000;
      text-transform: uppercase;
      font-weight: 600;
    }

    .product-carousel-product-name {
      color: #666;
      margin: 3px 0;
    }

    .product-carousel-price-regular {
      color: #000;
    }

    .product-carousel-price-special {
      color: red;
    }

    .product-carousel-products .carousel-buttons {
      margin-top: -10px;
    }

    .product-carousel-viewall span {
      display: inline-block;
    }

    .product-carousel-viewall span:after {
      content: '';
      background: #000;
      display: inline-block;
      height: 1px;
      width: 100%;
      margin-top: 0;
    }

    .product-carousel-header,
    .product-carousel-products,
    .slim-slider-wrapper {
      margin-left: auto;
      margin-right: auto;
    }

    .product-carousel-product a {
      width: 100%;
      display: inline-block;
      box-sizing: border-box;
    }

    .en .product-carousel-product a {
      padding-right: 10px;
    }

    .en .product-carousel-products {
      padding-left: 5px;
    }

    .en .product-carousel-title {
      text-align: left;
    }

    .en .product-carousel-viewall {
      text-align: right;
    }

    .ar .product-carousel-product a {
      padding-left: 10px;
    }

    .ar .product-carousel-products {
      padding-right: 5px;
    }

    .ar .product-carousel-viewall {
      text-align: left;
    }

    .ar .product-carousel-product-info,
    .ar .product-carousel-title {
      text-align: right;
    }

    @keyframes animate-wishlist {
      0% {
        opacity: 0;
        transform: translateY(60px);
      }
      50% {
        opacity: 1;
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes animate-button {
      0% {
        opacity: 1;
        transform: scale(0.7);
      }
      50% {
        opacity: 0.9;
      }
      to {
        opacity: 1;
        transform: none;
      }
    }

    .wishlist {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 50;
      height: 40px;
      width: 40px;
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
      animation-name: animate-button;
      animation-duration: 0.25s;
    }

    .wishlist-icon {
      stroke: rgba(0, 0, 0, 0.34);
      fill: none;
      width: 20px;
      height: 20px;
    }

    .wishlist-fav {
      background-image: url(/web-desktop/99aa310e55f4339585d71eaa8f8cf4e9.png);
      background-size: cover;
      height: 34px;
      width: 34px;
    }

    .topbar-icon {
      display: block;
      float: none;
      margin: 0 auto;
    }

    .topbar-label {
      display: block;
      font-size: 11px;
      position: relative;
      top: 3px;
      font-weight: 700;
    }

    .wishlist-items {
      width: 100%;
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
      display: inline-block;
      color: #484848;
      font-size: 15px;
      font-weight: 500;
      margin-left: 8px;
      position: relative;
      top: -3px;
    }

    .wishlist-undo {
      position: absolute;
      width: 230px;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      text-align: center;
      pointer-events: none;
      opacity: 0;
      z-index: 10;
      transform: scale(0.5);
      height: 332px;
      transition: transform 0.05s ease-out, opacity 0.1s ease-out;
    }

    .wishlist-undo.is-visible {
      transition: transform 0.2s ease-out, opacity 0.15s ease-out;
      transform: none;
    }

    .wishlist-undo.is-visible,
    .wishlist-undo.is-visible .wishlist-undo-wrapper {
      pointer-events: visible;
      opacity: 1;
    }

    .wishlist-undo-wrapper {
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s;
      transition-delay: 0.2s;
    }

    .wishlist-undo-label {
      font-size: 16px;
      margin-bottom: 19px;
      font-weight: 300;
      color: #fff;
    }

    .wishlist-undo-button {
      text-transform: uppercase;
      width: 100% !important;
    }

    .wishlist-item-wrapper {
      width: 23%;
      display: inline-block;
      position: relative;
      margin: 0 20px 3px 0;
    }

    .wishlist-item {
      position: relative;
      margin-bottom: 10px;
      background: #fff;
      opacity: 0;
      will-change: opacity, transform;
      box-sizing: border-box;
      text-align: center;
    }

    .wishlist-item:hover .wishlist-actions {
      opacity: 1;
      pointer-events: visible;
    }

    .wishlist-item.enter {
      animation-name: animate-wishlist;
      animation-duration: 0.35s;
      animation-fill-mode: both;
    }

    .wishlist-loadingmore {
      height: 100px;
      font-size: 17px;
      font-weight: 500;
      color: #777;
    }

    .wishlist-empty,
    .wishlist-loadingmore {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .wishlist-empty {
      flex-direction: column;
      box-sizing: border-box;
      top: 0;
      bottom: 0;
      margin: 70px 0;
    }

    .wishlist-empty-text {
      padding: 0;
      text-align: center;
      line-height: 1.8;
      font-size: 18px;
      color: #777;
      font-weight: 300;
      margin-bottom: 10px;
    }

    .wishlist-wrapper {
      width: 100%;
      overflow-x: hidden;
    }

    .wishlist-item-link {
      display: block;
      max-width: 255px;
      min-height: 465px;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .wishlist-item-image-wrapper {
      flex-shrink: 0;
      position: relative;
    }

    .wishlist-item-image {
      max-width: 100%;
      height: 332px;
      background: linear-gradient(180deg,
      rgba(0, 0, 0, 0.01) 0,
      rgba(0, 0, 0, 0.01) 57%,
      rgba(0, 0, 0, 0.45));
    }

    .wishlist-item-info {
      padding: 0;
      color: #000;
      flex-shrink: 0;
      transform: none;
      transition: opacity 0.15s ease-out, transform 0.15s ease-out;
    }

    .wishlist-item-info.is-hidden {
      opacity: 0;
      transform: translateY(-20px);
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

    .wishlist-currency .reduction {
      margin-left: 10px;
    }

    .wishlist-actions {
      max-width: 255px;
      left: 0;
      top: 30%;
      position: absolute;
      box-sizing: border-box;
      padding: 10px 60px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.12s;
    }

    .wishlist-actions,
    .wishlist-actions-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .wishlist-actions-wrapper {
      position: relative;
      background: hsla(0, 0%, 93%, 0.9);
      border-radius: 5px;
    }

    .wishlist-buttons {
      position: relative;
      z-index: 2;
      box-sizing: border-box;
      padding: 10px;
    }

    .wishlist-action-icon {
      background-color: transparent;
      outline: none;
      border: none;
      background-size: cover;
      height: 25px;
      width: 25px;
      opacity: 0.98;
    }

    .wishlist-action-icon:hover {
      opacity: 1;
    }

    .wishlist-remove-icon {
      height: 27px;
      width: 27px;
      background-image: url(/web-desktop/ffe3b4ed9c9626ae2aad7dd61f291d93.svg);
    }

    .wishlist-share-icon {
      background-image: url(/web-desktop/92112e86c4c8ff0d300248d7c5013153.svg);
      margin-left: 20px;
    }

    .wishlist-remove-button {
      text-transform: uppercase;
      border: none;
      background: transparent;
      font-size: 13px;
      padding: 0 10px;
      border-radius: 2px;
      color: rgba(68, 68, 68, 0.8);
      height: 100%;
      font-weight: 700;
    }

    .wishlist-empty-icon {
      height: 60px;
      width: 60px;
      margin-bottom: 25px;
      opacity: 0.4;
      display: inline-block;
      background-image: url(/web-desktop/99aa310e55f4339585d71eaa8f8cf4e9.png);
      background-size: cover;
    }

    .wishlist-products-page {
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
      margin-bottom: 40px;
    }

    .wishlist-visible .wishlist {
      pointer-events: visible;
      opacity: 1;
    }

    .wishlist-visible .wishlist-button {
      opacity: 1;
      transform: none;
    }

    .wishlist-visible .topbar-actions .wishlist {
      position: static;
    }

    .wishlist-outOfStock {
      margin: 5px 0;
      color: #d32f2f;
      font-size: 11px;
    }

    .wishlist-header {
      margin: 30px 0;
      border-bottom: 1px solid #ddd;
      padding: 10px 0;
    }

    .wishlist-title {
      font-size: 30px;
      text-transform: uppercase;
      font-weight: 900;
      color: #000;
    }

    .button-actions {
      display: flex;
    }

    .save-for-later {
      position: relative;
    }

    .save-for-later .wishlist {
      right: 100px;
    }

    .ar .wishlist {
      left: 0;
      right: auto;
    }

    .ar .save-for-later {
      position: relative;
    }

    .ar .save-for-later .wishlist {
      left: 100px;
      right: auto;
    }

    .detail_wide #select-size-error {
      margin: 10px 0;
    }

    .detail_wide .nm-zoom {
      left: 50%;
      margin-left: 50px;
      right: auto;
      top: 210px;
      height: 600px;
      width: 550px;
    }

    .detail_wide .thumb-link {
      display: block;
    }

    .detail_wide .zoom {
      cursor: crosshair;
      cursor: zoom-in;
    }

    .detail_wide .loader-zoom {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: hsla(0, 0%, 98%, 0.8);
    }

    .detail_wide .nm-zoom-image {
      max-width: none;
      opacity: 0;
      position: absolute;
    }

    .detail_wide .nm-zoom-image.visible {
      position: static;
      opacity: 1;
      transition: opacity 0.2s;
    }

    .detail_wide .product__deliveryestimation {
      margin: 8px 0;
      text-transform: uppercase;
      color: #2560a9;
      font-weight: 400;
      font-size: 14px;
    }

    .detail_wide .product__customDeliveryMsg {
      color: #c4633d;
    }

    .detail_wide .site_width_container {
      width: 1200px;
    }

    .detail_wide .flex-container {
      max-width: 1200px;
      min-width: 1000px;
      margin: 0 auto;
      margin-top: 60px;
    }

    .detail_wide .flex-row {
      display: flex;
    }

    .detail_wide .product {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .detail_wide .product__item {
      justify-content: space-between;
    }

    .detail_wide .product__logo {
      display: inline-block;
      height: 80px;
      float: right;
    }

    .detail_wide .product__logo img {
      height: 100%;
    }

    .detail_wide .product_description {
      flex-shrink: 0;
      overflow: hidden;
      width: 100%;
      margin-top: 10px;
      max-height: 1000px;
      transition: max-height 0.3s ease-out;
    }

    .detail_wide .product_description .info_content {
      margin: 15px 5px;
    }

    .detail_wide .product_description .info_content ul {
      padding-left: 10px;
      list-style-type: disc;
    }

    .detail_wide .product_description .info_content li {
      line-height: 25px;
      font-size: 14px;
      font-weight: 400;
      color: #444;
    }

    .detail_wide .product_description .info_content table {
      color: #444;
    }

    .detail_wide .product_description .product_attributes tr th {
      line-height: 25px;
      font-size: 14px;
      vertical-align: baseline;
    }

    .detail_wide .product_description .product_attributes tr th:first-child {
      width: 200px;
      font-weight: 500;
    }

    .detail_wide .product_description .toggle_section {
      padding-left: 5px;
      width: 100%;
    }

    .detail_wide .product_description .toogle__header {
      color: #555;
      font-size: 13px;
      display: block;
      font-weight: 700;
      padding-top: 7px;
    }

    .detail_wide .product__desc__header {
      color: #222;
      font-size: 18px;
      display: block;
      font-weight: 700;
      padding-top: 10px;
      margin: 0 0 10px;
      padding-bottom: 10px;
    }

    .detail_wide .product__delivery {
      flex-shrink: 0;
      width: 30%;
    }

    .detail_wide .product__colorlist {
      display: flex;
      flex-wrap: wrap;
    }

    .detail_wide .product__colorlist .product__color {
      margin-right: 10px;
      margin-bottom: 10px;
    }

    .detail_wide .product__colorlist .selected img {
      padding: 1px;
      box-shadow: 0 0 0 2px #000;
    }

    .detail_wide .product__colors {
      margin-top: 20px;
      border-top: 1px solid #e2e2e2;
      padding-top: 10px;
    }

    .detail_wide .product__color-label {
      font-size: 14px;
      margin-bottom: 10px;
      font-weight: 500;
      color: #222;
    }

    .detail_wide .product__current-color {
      color: #666;
      font-weight: 300;
      padding-left: 10px;
    }

    .detail_wide .product__color-card.selected {
      padding: 1px;
      box-shadow: 0 0 0 2px #222;
    }

    .detail_wide .product__color-card.selected .product__color-swatch {
      height: 38px;
      width: 38px;
    }

    .detail_wide .product__color-swatch {
      height: 40px;
      width: 40px;
    }

    .detail_wide .product__breadcrumb {
      display: flex;
      border-top: 1px solid #e2e2e2;
      flex-wrap: wrap;
      padding-bottom: 17px;
      padding-top: 10px;
      margin-top: 20px;
    }

    .detail_wide .breadcrumb__link {
      color: #666;
      font-size: 12px;
    }

    .detail_wide .breadcrumb__active {
      color: #000;
      font-size: 12px;
      position: relative;
      top: 1px;
    }

    .detail_wide .breadcrumb__separator {
      font-size: 9px;
      margin: 0 5px 0 3px;
      position: relative;
      top: -1px;
    }

    .detail_wide #product_carousel {
      height: 100%;
      width: 520px;
      padding: 0;
      margin: 0;
    }

    .detail_wide .save-for-later .wishlist {
      right: 10px;
    }

    .detail_wide .save-for-later .wishlist .wishlist-icon {
      width: 23px;
      height: 23px;
    }

    .detail_wide .product__conditions-row {
      padding: 15px 0;
      display: flex;
      border-bottom: 1px solid #e2e2e2;
    }

    .detail_wide .product-condition-tag {
      padding: 10px;
      text-align: center;
      font-weight: 500;
      font-size: 11px;
      color: #666;
      background-color: hsla(0, 0%, 40%, 0.15);
    }

    .detail_wide .product-condition-tag:not(:first-child) {
      margin-left: 10px;
    }

    .detail_wide .product__carousel {
      width: 600px;
      height: 750px;
      padding-left: 80px;
      box-sizing: border-box;
    }

    .detail_wide .product__carousel .carousel-arrow {
      display: none;
    }

    .detail_wide .product__carousel .slim-slide img {
      height: 750px;
    }

    .detail_wide .product__carousel .slim-slider-wrapper {
      position: relative;
    }

    .detail_wide .product__carousel .slim-slide {
      text-align: center;
    }

    .detail_wide .product__carousel .carousel-buttons {
      width: 100%;
    }

    .detail_wide .product__carousel .thumbs {
      flex-direction: column;
      width: 70px;
      height: 100%;
      overflow-y: hidden;
      top: 0;
      left: -90px;
      height: auto;
      justify-content: flex-start;
    }

    .detail_wide .product__carousel .thumb {
      height: 80px;
      width: 55px;
      margin-bottom: 15px;
    }

    .detail_wide .product__options {
      width: 600px;
      padding-left: 30px;
    }

    .detail_wide .product__desc__wrapper.is--collapsed {
      margin-bottom: -80px;
    }

    .detail_wide .product__desc__wrapper.is--collapsed .product_description {
      min-height: 250px;
      max-height: 300px;
      transition: max-height 0.2s ease-out;
    }

    .detail_wide .product__desc__wrapper.is--collapsed .show-less {
      display: none;
    }

    .detail_wide .product__desc__wrapper.is--collapsed .show-more {
      display: inline-block;
    }

    .detail_wide .product__desc__wrapper.is--collapsed .product__showmore {
      transform: translateY(-100px);
      transition: transform 0.05s ease-out;
    }

    .detail_wide .product__showmore {
      height: 100px;
      background: linear-gradient(180deg,
      hsla(0, 0%, 100%, 0.37) 0,
      hsla(0, 0%, 100%, 0.64) 12%,
      hsla(0, 0%, 100%, 0.71) 24%,
      #fff 55%,
      #fff 84%,
      #fff);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: none;
      transition: transform 0.2s ease-out;
    }

    .detail_wide .product__showmore .show-more {
      transform: none;
      display: none;
    }

    .detail_wide .product__showmore__btn {
      text-transform: uppercase;
      height: 45px;
      line-height: 45px;
      padding: 0 72px;
      border: 1px solid rgba(0, 0, 0, 0.32);
      font-size: 13px;
      color: #222;
      background: #fff;
      margin-top: 40px;
      cursor: pointer;
    }

    .detail_wide .product__brandname a {
      font-size: 24px;
      color: #000;
      text-transform: uppercase;
      font-weight: 500;
    }

    .detail_wide .product__name {
      font-size: 16px;
      margin: 6px 0;
      font-weight: 400;
      color: #222;
    }

    .detail_wide .product__price {
      font-size: 24px;
      color: #000;
      margin-top: 10px;
      font-weight: 700;
    }

    .product__deliveryestimation_quick {
      margin: 8px 0px;
      text-transform: uppercase;
      color: rgb(37, 96, 169);
      font-weight: 400;
      font-size: 14px;
    }

    .product-usp-new {

      font-size: 13px;
      position: relative;
      height: 40px;
      line-height: 40px;
      width: 50%;
      flex-shrink: 0;
      box-sizing: border-box;
      margin-bottom: 10px;
      font-weight: 400;
    }

    .product__usps__wrapper__new {
      padding-top: 20px;
      margin-top: 20px;
      border-top: 1px solid rgb(226, 226, 226);
      border-bottom: 1px solid rgb(226, 226, 226);
      font-size: 12px;
      width: 80%;
    }

    .detail_wide .product__price .pre-reduction {
      font-weight: 300;
      text-decoration: line-through;
      font-size: 17px;
      color: #505050;
      margin-right: 5px;
    }

    .detail_wide .product__cta {
      margin-top: 5px;
    }

    .detail_wide .product__cta #add_to_cart {
      margin-right: 0;
      margin-left: 0;
    }

    .detail_wide .product__cta .block_button {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      height: 60px;
      line-height: 50px;
      font-weight: 500;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .detail_wide .product__cta .block_button span {
      line-height: 20px;
    }

    .detail_wide .size__selector {
      margin-top: 20px;
      border-top: 1px solid #e2e2e2;
      padding: 10px 0;
    }

    .detail_wide .size__selector #size_mapper {
      max-width: 200px;
      overflow: hidden;
      *zoom: 1;
    }

    .detail_wide .size__selector #product_size_mapper {
      margin-top: 15px;
      width: 100%;
    }

    .detail_wide .size__selector .select_container select {
      font-size: 14px;
    }

    .detail_wide .product-usp {
      font-size: 13px;
      position: relative;
      height: 40px;
      line-height: 40px;
      width: 50%;
      flex-shrink: 0;
      box-sizing: border-box;
      margin-bottom: 10px;
      font-weight: 400;
    }

    .detail_wide #product_size,
    .detail_wide .product-usps {
      display: flex;
      flex-wrap: wrap;
    }

    .product_wrapper_quick {
      display: flex;
      flex-wrap: wrap;
    }

    .product_wrapper_quick label {
      margin: 0 10px 7px 0;
      cursor: pointer;
      height: 35px;
      line-height: 35px;
      padding: 0 27px;
      font-size: 14px;
      border: 1px solid #666;
      flex-wrap: wrap;
      position: relative;
    }

    .product_wrapper_quick label:before {
      content: ' ';
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      background: #222;
      color: #fff !important;
      opacity: 1;
      transition: opacity 0.18s ease-out;
      opacity: 0;
    }

    .product_wrapper_quick label:not(.disabled):not(.selected):hover {
      background: none;
    }

    .detail_wide
    #product_size
    label:not(.disabled):not(.selected):hover:before {
      opacity: 1;
    }

    .product_wrapper_quick label .size {
      position: relative;
    }

    .product_wrapper_quick label.selected {
      background-color: #222;
      color: #fff;
    }

    .detail_wide #product_size label {
      margin: 0 10px 7px 0;
      cursor: pointer;
      height: 35px;
      line-height: 35px;
      padding: 0 27px;
      font-size: 14px;
      border: 1px solid #666;
      flex-wrap: wrap;
      position: relative;
    }

    .detail_wide #product_size label:before {
      content: ' ';
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      background: #222;
      opacity: 1;
      transition: opacity 0.18s ease-out;
      opacity: 0;
    }

    .detail_wide #product_size label:not(.disabled):not(.selected):hover {
      background: none;
    }

    .detail_wide
    #product_size
    label:not(.disabled):not(.selected):hover:before {
      opacity: 1;
    }

    .detail_wide #product_size label .size {
      position: relative;
    }

    .detail_wide #product_size label.selected {
      background-color: #222;
    }

    .detail_wide .product__usps__wrapper {
      padding-top: 20px;
      margin-top: 20px;
      border-top: 1px solid #e2e2e2;
      border-bottom: 1px solid #e2e2e2;
      font-size: 12px;
    }

    .detail_wide .recommendations {
      padding: 10px 0;
    }

    .detail_wide .size__selector .faux_label {
      font-size: 14px;
      margin-bottom: 10px;
      font-weight: 500;
    }

    .detail_wide.ar .product__options {
      padding-left: 0;
      padding-right: 30px;
    }

    .detail_wide.ar .product__logo {
      float: left;
    }

    .detail_wide.ar #add_to_cart,
    .detail_wide.ar #size_mapper {
      margin-right: 10px;
    }

    .detail_wide.ar .product__colorlabel {
      padding-right: 10px;
    }

    .detail_wide.ar .save-for-later .wishlist {
      right: auto;
      left: 10px;
    }

    .detail_wide.ar .product__carousel {
      padding-right: 80px;
      padding-left: 0;
    }

    .detail_wide.ar .product__carousel .thumbs {
      right: -90px;
      left: auto;
    }

    .detail_wide.ar p.faux_label {
      float: none;
      padding-right: 10px;
    }

    .detail_wide.ar .nm-zoom {
      left: auto;
      right: 50%;
      margin-right: 50px;
      margin-left: 0;
      top: 220px;
    }

    .detail_wide.ar .option_select label {
      direction: ltr;
    }

    .catalog-tag {
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      font-size: 10px;
      height: 30px;
      line-height: 18px;
      background: hsla(0, 0%, 100%, 0.45);
      text-align: center;
      text-transform: uppercase;
      color: #444;
    }

    .includeVAT {
      font-size: 10px;
      color: #bebebe;
      font-weight: 400;
    }

    .outofstock {
      padding: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      position: relative;
    }

    .outofstock__cta {
      margin-top: 15px;
      font-size: 14px;
    }

    .outofstock__heading {
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
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
      margin: 15px 0;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      animation: fader 0.3s ease-out, scaler 0.3s ease-out;
      background-color: #2560a9;
      color: #fff;
    }

    .outofstock__notification .checkmark {
      width: 30px;
      height: 30px;
      margin: 0 10px 0 0;
    }

    .outofstock__icon {
      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      margin-right: 15px;
    }

    .outofstock__list {
      margin: 15px auto;
      max-width: 300px;
      width: 80%;
    }

    .outofstock__item {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      border-bottom: 1px solid #eaeaea;
      font-size: 13px;
      cursor: pointer;
    }

    .outofstock__item:last-child {
      border-bottom: 0;
    }

    .outofstock__item:focus,
    .outofstock__item:hover {
      background-color: #eaeaea;
    }

    .outofstock__item--subscribed {
      color: #2560a9;
      cursor: default;
    }

    .outofstock__item--subscribed:focus,
    .outofstock__item--subscribed:hover {
      background-color: #fff;
    }

    .outofstock__item--single {
      border-top: 1px solid #eaeaea;
    }

    .outofstock__item--single:last-child {
      border-bottom: 1px solid #eaeaea;
    }

    .outofstock__back {
      display: block;
      margin-top: 20px;
    }

    .outofstock__link {
      color: #551a8b;
    }

    .ar .outofstock__cta {
      padding-right: 10px;
    }

    .ar .outofstock__notification .checkmark {
      margin: 0 0 0 10px;
    }

    .ar .outofstock__icon {
      margin-right: 0;
      margin-left: 15px;
    }

    .ar .product_description .info_content ul {
      padding-right: 10px;
    }

    .hidden {
      display: none;
    }

    h3.personalize_form_title {
      color: #000;
      text-align: center;
      margin: 10px 0;
    }

    .personalized_text_input {
      margin: 10px 0;
    }

    .personalized_text_input input {
      border-bottom: 2px solid #000;
    }

    .personalized_text_input input:focus {
      border: none;
      border-bottom: 2px solid #000;
    }

    .personalization_modal_actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .personalization_modal_actions a {
      font-size: 12px;
    }

    .personalization_modal_actions a.personalization_actions_link {
      color: #2560a9;
    }

    .personalization_modal_actions a.personalization_actions_button {
      background: #2560a9;
      padding: 5px 10px;
      color: #fff;
      margin-left: 10px;
    }

    .ar a.personalization_actions_button {
      margin-left: unset;
      margin-right: 10px;
    }

    .personalize_input_group,
    .personalize_options {
      display: flex;
      align-items: center;
    }

    .personalize_input_group {
      margin-right: 20px;
    }

    .personalize_error,
    .personalize_input_error {
      font-size: 10px;
      color: #e00000;
    }

    .personalize_error.is_hidden {
      opacity: 0;
      visibility: hidden;
    }

    .personalization_radio {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      display: inline-block;
      position: relative;
      color: #666;
      height: 20px;
      width: 20px;
      border: 0;
      border-radius: 50px;
      cursor: pointer;
      margin-right: 7px;
      outline: none;
      background-color: #f1f1f1;
    }

    .personalization_radio:checked:before {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #2560a9;
      left: 50%;
      top: 50%;
      content: '';
      transform: translate(-50%, -50%);
    }

    .ar .personalization_radio {
      margin-right: unset;
      margin-left: 7px;
    }

    #personalize_text_input {
      border: 1px solid #000;
    }

    .personalize_btn {
      padding: 10px 20px;
      background: #2560a9;
      color: #fff;
      text-transform: uppercase;
      font-size: 14px;
      margin: 10px 0;
    }

    .personalize_inline_form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    #productPersonalization {
      margin: 20px 0 10px;
      border-top: 1px solid #e2e2e2;
      border-bottom: 1px solid #e2e2e2;
      padding: 10px 0 12px;
    }

    #productPersonalization .faux_label {
      font-size: 14px;
      margin-bottom: 10px;
      font-weight: 500;
    }

    .personalization_info {
      padding: 10px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    p.personalized_initials {
      margin: 0 10px;
    }

    p.personalized_initials .personalize_edit_icon {
      padding: 0 3px;
    }

    .accept_edit_icon,
    .personalize_edit_icon {
      width: 15px;
      height: 12px;
      background-size: contain;
      display: inline-block;
      background-position: 50%;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .personalize_edit_icon {
      background-image: url(/web-desktop/6a99ef70f6334aca2780acd21a5f24c3.svg);
    }

    .accept_edit_icon {
      background-image: url(/web-desktop/ac6d222c1168e3274d095c42469bd5e7.svg);
    }

    input.editable_initials {
      padding: 5px;
    }

    input.editable_initials.activate_edit {
      border-bottom: 1px solid #000;
      padding: 5px;
      margin: 0 5px;
    }

    .product-ratings {
      margin: 10px 0 20px -4px;
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
      background-image: url(/web-desktop/a74464883a41ae8706c87aa901bf670a.svg);
      background-size: contain;
      background-repeat: no-repeat;
      height: 17px;
      width: 17px;
      position: absolute;
      top: 0;
      left: 0;
    }

    .star--half .percentage-bar__star-inner {
      background-image: url(/web-desktop/9b01ee6f5d50b483bdc5214f17175e28.svg);
    }

    .star--full .percentage-bar__star-inner {
      background-image: url(/web-desktop/d6479fd9603d6fd0225a0eac1a075a71.svg);
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
    }

    .ratings {
      border: 1px solid #e2e2e2;
    }

    .ratings__breakdown {
      padding: 20px;
      display: flex;
      border-right: 1px solid #e2e2e2;
    }

    .ratings__input {
      padding: 20px;
    }

    .ratings__input-title {
      color: #333;
    }

    .ratings__input-subtitle {
      color: #666;
      padding: 10px 0;
      font-weight: 300;
    }

    .ratings__input-button {
      background: #000;
      color: #fff;
      padding: 10px 20px;
      margin-top: 10px;
      font-weight: 300;
      outline: none;
    }

    .input-button--success {
      background: #2560a9;
      padding: 0 20px;
      display: flex;
      align-items: center;
      font-size: 13px;
    }

    .ratings-graphs {
      margin-left: 20px;
      align-self: center;
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
      width: 400px;
      height: 8px;
      overflow: hidden;
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
      margin: 3px 0;
    }

    .percentage-bar__stars-count {
      display: flex;
      align-items: center;
      margin-right: 15px;
      justify-content: flex-end;
      width: 30px;
    }

    .percentage-bar__label {
      font-size: 13px;
      color: #333;
      padding-top: 1px;
      margin-right: 3px;
    }

    .ratings__success-icon.checkmark {
      stroke: #2560a9;
      margin: 5px 10px 5px 0;
      width: 20px;
      height: 20px;
    }

    .percentage-bar-stat span {
      font-size: 13px;
      color: #333;
      font-weight: 300;
      margin-left: 15px;
    }

    .percentage-bar-stat span .percentage-bar-stat__text--tiny {
      margin-left: 2px;
      font-size: 9px;
    }

    .percentage-bar__star,
    .percentage-bar__star-inner {
      width: 12px;
      height: 14px;
    }

    .size-selection-bar {
      display: flex;
      justify-content: space-between;
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
      padding: 3px;
      text-align: center;
    }

    .size-chart-row:nth-of-type(2n) {
      background: #f6f6f6;
    }

    .ar .product-ratings__visual {
      padding-left: 10px;
      padding-right: unset;
    }

    .ar .product-ratings__avg,
    .ar .product-ratings__total {
      padding-right: 10px;
      padding-left: unset;
    }

    .ar .product-ratings__total {
      border-left: none;
      border-right: 2px solid #666;
    }

    .ar .ratings__breakdown {
      border-left: 1px solid #e2e2e2;
      border-right: none;
      max-width: 50%;
    }

    .ar .ratings-graphs {
      margin-right: 20px;
      margin-left: unset;
    }

    .ar .percentage-bar__stars-count {
      margin-right: unset;
      margin-left: 15px;
    }

    .ar .percentage-bar__label {
      margin-right: unset;
      margin-left: 3px;
    }

    .ar .percentage-bar-graph__inner,
    .ar .percentage-bar__star-inner {
      left: unset;
      right: 0;
    }

    .ar .percentage-bar-stat span {
      margin-left: unset;
      margin-right: 15px;
    }

    .ar .percentage-bar-stat .percentage-bar-stat__text--tiny {
      margin-left: 2px;
      font-size: 9px;
    }

    .ar .ratings__success-icon.checkmark {
      margin: 5px 0 5px 10px;
    }

    .ar .product-condition-tag:not(:first-child) {
      margin-left: unset;
      margin-right: 10px;
    }

    .skywards_reward_miles {
      height: 30px;
      padding: 0 10px;
      border: 1px solid #ce3451;
      border-radius: 4px;
      color: #ce3451;
      font-size: 12px;
      display: inline-flex;
      margin: 10px 0;
      justify-content: center;
      align-items: center;
    }

    #productGWPTag {
      display: flex;
    }

    .product__gwp-tag {
      margin: 10px 0;
      display: flex;
      align-items: center;
      cursor: pointer;
      background: rgba(214, 102, 49, 0.1);
      padding: 4px 15px;
    }

    .product__gwp-icon {
      background-image: url(/web-desktop/282887cc77b9e1d9ed5c3fa5f38d928f.svg);
      width: 30px;
      height: 26px;
      background-position: 50%;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .product__gwp-message {
      color: #db6b37;
      font-size: 12px;
      font-family: apercu, Arial, Sans-Serif;
      font-weight: 500;
      padding-left: 10px;
    }

    .gwp__modal-title {
      font-size: 14px;
      font-family: apercu, Arial, Sans-Serif;
      text-align: center;
      font-weight: 400;
      color: #333;
      margin: 5px 0 20px;
    }

    .gwp__close-btn {
      width: 30px;
      height: 20px;
      background-image: url(/web-desktop/ea086c3c950c56d8a3c2b1be01004819.svg);
      background-size: cover;
      position: absolute;
      left: 15px;
      cursor: pointer;
    }

    .gwp__close-btn,
    .product__right-icon {
      background-repeat: no-repeat;
      background-position: 50%;
    }

    .product__right-icon {
      background-image: url(/web-desktop/a8555690ca65ee25a02cb1992b2275af.svg);
      width: 11px;
      height: 13px;
      background-size: contain;
      margin-left: 30px;
    }

    .gwp__modal-wrapper {
      padding: 15px 0;
    }

    .gwp__modal-image-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .gwp__modal-image {
      max-width: 100%;
      margin-bottom: 15px;
    }

    .gwp__modal-tnc-condition {
      text-align: center;
      padding: 4px 0;
      color: #666;
      font-weight: 400;
      font-size: 12px;
    }

    .gwp__modal-tnc {
      margin-bottom: 15px;
    }

    .gwp__modal-cta {
      padding: 10px 50px;
      margin: 0 auto;
      display: block;
      border-radius: 5px;
      color: #fff;
      background: #2560a9;
    }

    .ar .gwp__close-btn {
      left: unset;
      right: 15px;
    }

    .ar .product__gwp-message {
      padding-left: unset;
      padding-right: 10px;
    }

    .ar .product__right-icon {
      margin-left: unset;
      margin-right: 30px;
      transform: rotateY(180deg);
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
      padding: 50px;
      overflow-y: scroll;
      z-index: 1000;
      align-items: center;
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
      background: rgba(96, 125, 139, 0.3);
      justify-content: center;
      align-items: center;
      font-size: 35px;
      font-weight: 100;
      color: #666;
      position: absolute;
      right: -25px;
      top: -25px;
      cursor: pointer;
    }

    .offers__heading {
      font-size: 27px;
      text-align: center;
      margin: 0 25px;
      color: rgba(208, 95, 76, 0.85);
    }

    .offers__container-bg {
      padding: 25px;
      background: #f3f3f3 url(/web-desktop/45c37c9a0ec97ae59c891802d18a6e01.png);
      border-radius: 5px;
    }

    .offers__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #f1f1f1;
      border: 3px solid #94adb6;
      border-radius: 5px;
      padding: 15px;
      position: relative;
      min-height: 250px;
      max-width: 450px;
    }

    .offers__ribbon {
      display: inline-block;
      width: 80px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAACDCAYAAACQlAVtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NDRlM2JkOC1kZDhhLTQwN2MtODkwMC0xOGQzMTA1YjkzN2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0IzMDM2QjM2N0NGMTFFODhGQzZDQ0Y1RDQ1M0M1MkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0IzMDM2QjI2N0NGMTFFODhGQzZDQ0Y1RDQ1M0M1MkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MzU0ZTg0Mi0yMTk2LTQ5MGUtYWIyNC1mYjA1MWViMWQyMWIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiMGE2N2EzMC1hNDljLTExN2ItYTU2Yy1hMGY5ZTIwMzk1MzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TWK9xAAAMlklEQVR42uxdDZRVVRU+7ylqTBDDj0SJohk4o0iSYLrE0iJSQ/wtXYlimJaDiBH9sAiDCiii1IDoDyhMh0VGUybZUluESxIZf5HJMNZgIqImZgzCwMy0P+6Z5azH+7ln733vO+++t9fa6641c88+997v7XP22WfvfVIdHR2mQn5SuvIJKuBUqAJOsuhwSeOmuit9f7+jiM8hHmzfdSvxg8R78M+aRfXJBcdzmkD8Q+LqjL+3Ey8knkp8oDKsxU8XES/LAkznO08mbiXNr62AEy/1Im4IcV+K+DkC6JYKOPEQPviTjm1uJ4AmefkykkWohwbB14nnMtrtJj6xdvHKnRoP0dEyqTddPkTcnXhTqmphc8E2WXBIkkFwLBMY0LuJryOeJwSl2s51Y7uOSvT3LbAaCaRXynFYw3s8J5TxCSEw76LLNuJxWb7rB4l30D03lCM4P7W/fgl9QABM51zXo9Bz0r0zygmc4cTXK8jZK2g7hXhIyHtnEkADywGcI4gblWQ9xtSa99nFbljqRnxFOYDzJ0VZP2YAg+/3LKOv2qSDM046iXehJWRGNzIB7c1od2SSwcHE+3slWf80gZ/NVWtOoctNzD63JBWclOI800Z8NWnNHkdgujGHs076Q1LBmWLXDRo0m4B5nNGuQdDnKlqMPpVEcFwto3z0d+I5jOFsDF3OZ/b5OvHNSVzncC2jbNRCfA1pzQFHYKro8mdBv9eT1uxMIji3My2jbDQ17KScQRsEfS4lYBpcf42lQKe4DAcF6D4TuHtch7Mvhl2fZCFsj9/CGSp8J6lllDnmT2QA058uP2H2iW3x8aQ1u5MIToOiLADzqiMwKeGPYx4B8yh3kvWZJJZRJv0i7Poig75P3I/Z5xPE35JYQL6S1DLKHPNvZQxnJ9HlK8w+4eX+HGnN/iSCs0FJzsEx3wRb0S7AYJd4k6DfrxIw/5CuHXwkiWWUSVhocsb8lcSHMft8wASxcSZp4Egso2xj/mzGcHYuXS5l9vkGDA/Smo6kgSO1jLrS2xjzifc7AoNYgIclWk/AbNdyifhEEsvokDGfmDPmrxP0uYKAWaX1MXwCR2IZZRvzFzGGswl0+TCzzxcVvRhegQPL6GklWRjzP49v7QgM/HbLmH2ir2tIa/6bRHBgGR2hJAuxYS8z2q0V9DmfgFmr/VF8AEdiGR0y5hPfyxjOTjSBc5VDzxDPjOLDFBscqWXUlRBtyQ1IH8lst4/4atKafUkEZ52SnINjPvFbzPbcJKrpBMyzUX2cYoIjsYwOGfOJ/yZov5nR5q8m2AA0SQOnj8AyyqSnpWM+/fo3OQIEq+xaateeNHBSdhLVoINjvr1KySV27UYC5t9Rf6higDPLBFE0GjTdyDzHXbUH2xNTQqyPZtC9K+P4UHGDcwLxN5Vkwcr7kapKVy28gy4fJ96Y5d/I/xlL93w3zpV5XAT3e5OSrINjvqsXICRAmOhH0NrnOPPOtsUW+vsLLDOyZdJoulxuZUEZnif+LfGaQp7rOMFZoegF+BLxS5FOjFULt9m1k2GC0pcudxOPzvjXWSZIcXyE7vkM9bOj2MPamcRXKclC2Y17jMdEHx2B9g9mAaYrnW0B6l1McJDu8KiSrO1Wa3wnpIYMCzkHLygmOJoOQcwzb3quNZfZ5wxL46nN0cUAB4UKzlCSBcvsIc+BGWDco0lhKH0sbnCqFeeGzXZN4zMwWFwvtd4PV3pvnODgQZ9QktVqgliAvcZvQpbbp5ht34gTHJQ5GaQkC36zpzzXGqS5zxeIWB0XOFi8zVGShS2FH3gODALt7zLB3hSHZtFapyUOcCBvk5Ks/5lgj6bN8+EMmn26YDibFZcp/XMjL3PSSdjVbPZca7C4/oZARG0+F44mOCNMEPWiQb8j/rXnwOBHuMLwQ3YnF0pB1AIHPjOtwHP4mm4w/hMSh7nFjDYTMAUrhmiBs0bxpaF9//Fca1BP7QsCEaEW5hrgXEJ8ntJ7LzZ6OTlRAQNXyy8FIi4Mm4IoBaennR80CPsc00pgOAMw3HjuvxAw97uYvixqqrsSXoCNSi+M0CTEAuzxXGswlH1aIMKprURzkManVuZEEeiogEFUqGRb/DTXFMQ0U2sQoLFA6b3XK3oUogLmMGs2VzFFLAlb70YEDgGDNpuV3htui/El4AWAR/wjzLaY/Os4DTmag7yX9yi9NIbGf3muNVhcS4IWT+IGH6YdteZUEyTTatAfTeDu8RmY7nY44wbCTJOkIKYdgIH3VSvB6TXDKHNSBMI2wBBm263SedlFc+5TfOmJFiCftQaVQ24SiBguzahOh9QaPOgnld77Z3ZI8xmYPkIvwKUaKYjpEMDAfLxf6b0x+U81/hN+QAOYbdcSMKs1HiKM5mh5m9sMo8xJEbRmgpGlQWqNMPnBIa3BmKtZ5mS958AMosudAhEjSWtaIweHgOlvGLn8OQiumW+XgBcAG3w9mCKWEzCPaz5TOgcw2mVO4NTcb/wmeMRHCd5RfWmQzmPfa5U5gQHwvOdag1OiZglE1ESRgpjOojU1ihYVNs6WeA4MzhL9jeGnp8y06SImUnCsU/NJJdnYanYuc1IEmiswepqJvxPVg2VqDs51OVJJNoI0dniuNUgxnFJML4ALOKOV5P7K6G1fR0I18/tV2+fkEup37oryGdNZFopSgqpPLgEvAKohvp/Z9jEC5u6oHzATHGkoLSwWSZmTuLQGKZCfFYj4aBzPmQnOavuBuQQTfJ3nwAw0shqio6IqRJQXnJpF9S8Zfhgs9shneg5Mys4z3J3cewiYR+J63myLUNTGdC0dgl8SEpxajd+EbfFzmW3xbuPjfNhDwCHtwSYY9m9cjur9mtEL+ohKa4YaWZTPyaQ1bUUFxwKEUiLIOQmTIIvi1nd6DgzWbisEa7g53Aoe6uBYgLYT46jHC01wEsfuDJMbY+9FJqgI67sXAEGLw5htkaYxoxgPncp21Hs2sq4drAvgWn+FgNtLf/N+MUNaA7MX9WxSTBH9SGtej9xbkQWH0CE/BEY7w1AIQ71MsJ3QEgEwPa11xgXmujiAcR7WIqZRdk2Fahy77JAJzy7i2EYq9oP58Dhm20YCZnkxtb5YxfBQj/PijPXGsSY4nR0HeKO4RLVQa64Qmr6jTJEpbnAmhlyoYjLDOZ6DmMAg0F6yj3Qeac3b5QQO8ifvcLh/sAnSGXsyvAAoc8I9trLBFsQz5QION4UCh0+4bmYhRX4M8zmxRLjcF0szLnCQq38msy0C5/uF1BqA+T3Bcw4lrTlQTuCgsPdtgvbdrPFQCBjch1gAbpmTBQRMk/GIoganu/1g0lqiYVb3+AEMZ8qHP9G7ZOGowcFJUkMU5KQKaM1ZRlbmZGiUsQA+goPaY3VKsjbkAaazzAn3XepcTlpPAjh9rDmrQbCg7srzf5jnJzBlo8zJYuMpRQUO6lwOUJJ1hskReEJaA6+4pBjSSOMxRQEOAjwuU5IF7WvMAQwC7SUJThfkKkKXVHAGGYWTZS3BGZqv+A+A6cuUvaZp2mtrjOeUVpYF93wPJXk4Q609h9bcaIJNQC6NMyVAmuBgnXCOkiwUZdiWAxiUdJFkKQ8jrdlfTuAghWK2kqxm4nk5gDncyMqcLCZgnjElQhrgHGV0T/jAKr8jj0ZxK7wju/lmU0KkAc4cwz9jM5MQJrsrh9bA7JUELdaS1rSXEzhIobhV6VmwA1qfA5jOMifcYqdfJmBeNiVGkmJ4CMxYrvgs+YLDYQAMZsrdYiI+MtJHzUEw+DFKzwHH5b4cWnOBkRVDOp20pqNswCGtwdygFbSGYI71OYDpa2Q+uosJmLdMiRKnGB60RctZWCg4HGVO+jNlP0zANJgSJo7mwG3SS6l/ZG7ncmrCoXmJQPb5psTJtRgePABatV1Q0WNrDmCOF07iI0hrWssKHKKxSv3CrL2tgHXG9dEtJWA2mgSQKzgDlfo9NZcXgLTmGMFwVsiTnWhwNI7mwgGm+c4qOFsg++RS8wJogiMdLhpDLFyPZsqeTsC8aBJEruCsMkFpey6FCQ5/lSG32eTwZJcNODWL6ncKrCicFBImOJyTKn9aqXoBtNc5OMnQtbQkSq2ECg6nj4w6zPc6yL6K2rxpEkjO4JD2YNGI0vFhT5KFz8y1WgbS5sOc2v4QAVNvEkos3xoB1EEMZ+SIAnMQTiw83nWeog8OQJGRtizPbShAPsYkmKT7ObDesBM6yc4ViDneZf8+1wLDKusFk5gYLhzEDDxA/IJlFB+/1s4zbUkGJ3Q2dYVKT3MqVAGnAk6FKuBUKCz9X4ABAO3VPyFVXB0OAAAAAElFTkSuQmCC);
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
      font-weight: 300;
    }

    .offers__form-section {
      padding: 0 10px;
      flex: 1;
    }

    .offers__form-section-title {
      display: block;
      margin: 5px 0;
      font-size: 16px;
      font-weight: 400;
    }

    .offers__form-section-error {
      font-size: 12px;
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
    }

    .offers__form-radio-group > label {
      align-items: flex-end;
      justify-content: center;
      display: flex;
      flex-grow: 0.2;
      line-height: 25px;
      font-size: 14px;
    }

    .offers__form-radio-group input[type='radio'] {
      margin: 0 10px;
      width: auto;
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
      text-align-last: center;
    }

    .offers__form-select-label {
      display: block;
      margin: 5px 0;
      font-size: 12px;
      color: #666;
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
      top: 10px;
      pointer-events: none;
    }

    .offers__form-input {
      width: 100%;
      min-height: 30px;
    }

    .offers__form-button-wrapper {
      padding: 15px 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .offers__form-button {
      display: inline-flex;
      width: 200px;
      justify-content: center;
      align-items: center;
      height: 44px;
      font-size: 14px;
      background-color: #2560a9;
      border: 1px solid #2560a9;
      color: #fff;
      cursor: pointer;
    }

    .offers__tc {
      padding: 20px 0 0;
      display: flex;
      justify-content: center;
    }

    .offers__tc a {
      color: #333;
      text-decoration: none;
      font-size: 11px;
    }

    .offers__form-note {
      margin: 5px 0;
      text-align: center;
    }

    .offers__form-note--large {
      font-size: 18px;
    }

    .ar .offers__close {
      right: auto;
      left: -25px;
      font-size: 30px;
      top: -25px;
    }

    .ar .offers__ribbon--top {
      transform: scaleX(-1);
      right: auto;
      left: -20px;
    }

    .ar .offers__ribbon--bottom {
      transform: scaleX(-1) rotate(-10deg);
      left: auto;
      right: -35px;
      bottom: -40px;
    }

    .ar .offers__form-select {
      max-height: 30px;
      padding: 0 10px;
    }

    .ar .offers__form-select--arrow:after {
      right: auto;
      left: 8px;
    }

    .ar .offers input[type='button'],
    .ar .offers input[type='date'],
    .ar .offers input[type='submit'],
    .ar .offers input[type='tel'],
    .ar .offers input[type='text'],
    .ar .offers select,
    .ar .offers textarea {
      font-family: frutiger, Tahoma, Arial, Sans-serif;
    }

    .applepay_wrapper {
      display: flex;
      justify-content: space-between;
    }

    .applepay_wrapper #applePay {
      flex: 1;
      margin-right: 15px;
    }

    .applepay_wrapper #applePay .apple-pay-button {
      width: 100%;
      height: 50px;
    }

    .applepay_wrapper .applepay_button_wrapper {
      width: 100%;
      background: #000;
      padding: 0 1px;
    }

    .applepay_wrapper .cta__addtocart {
      flex: 1;
    }

    .ar #applePay {
      margin-right: 0;
    }

    .ar .apple-pay-button {
      -webkit-locale: 'ar';
    }

    .applepay--cart .applepay_spacer {
      flex-grow: 1;
    }

    .applepay--cart .applepay_button_wrapper {
      margin: 0 10px;
      width: 240px;
    }

    .applepay--cart .applepay_button_wrapper .apple-pay-button {
      width: 100%;
      height: 42px;
    }

    .applepay--cart .applepay_button_wrapper .loader {
      margin: 14px 0;
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
    }

    .applepay-modal__buttons button.applepay-modal__button--primary {
      color: #2560a9;
    }

    .coupon {
      max-width: 240px;
    }

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
      background-color: #000;
      padding: 0 10px;
      border: 1px solid #000;
      height: 30px;
      margin-left: -1px;
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      min-width: 80px;
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

    .BestPromotion__bg {
      margin: 10px 0;
      background-color: transparent;
    }

    .BestPromotion__banner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .BestPromotion__banner,
    .OnBoarding {
      position: relative;
      display: flex;
      justify-content: center;
    }

    .OnBoarding {
      align-items: center;
      padding: 20px 0;
      height: 70vh;
      min-height: 500px;
    }

    .loader-overlay {
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: #fff;
      top: 0;
      left: 0;
      opacity: 0.7;
      z-index: 999;
    }

    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .OB__Step {
      height: 90%;
      min-width: 360px;
    }

    .OB__ready {
      opacity: 1;
      right: 0;
    }

    .OBStep__title {
      color: #000;
      text-align: center;
      font-size: 1.3em;
      margin-bottom: 20px;
    }

    .OBStep__subtitle {
      font-weight: 400;
      text-align: center;
    }

    .OBStep__icon {
      width: 140px;
      margin: 30px auto;
      height: 70px;
      display: flex;
      justify-content: center;
    }

    .OBStep__icon img {
      max-width: 100%;
    }

    .icon--size_shoes img {
      width: 140px;
      height: 55px;
    }

    .icon--gender img {
      width: 70px;
    }

    .icon--birthday img {
      width: 80px;
    }

    .icon--size_bottom img {
      width: 51px;
      height: 82px;
    }

    .icon--size_top img {
      width: 75px;
      height: 84px;
    }

    .OBStep__icon.icon--brand_ids {
      width: 0;
      height: 0;
    }

    .OnBoarding__gender-icon {
      min-width: 50px;
      min-height: 50px;
    }

    .OBCarousel {
      position: relative;
      height: 60vh;
    }

    .OBCarousel__controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 300px;
      width: 250px;
      margin: 0 auto;
      padding: 0 40px;
      position: absolute;
      bottom: 5vh;
      left: 50%;
      transform: translateX(-50%);
    }

    .OBCarousel__indicators {
      display: flex;
      justify-content: space-evenly;
      width: 75%;
    }

    .OBCarousel__indicator {
      border: 1px solid #f8e1dd;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #f8e1dd;
      transition: all 0.3s ease-in-out;
    }

    .OBCarousel__indicator--active {
      background: #e98979;
    }

    .OBCarousel__nav-button {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: url(/web-desktop/f2a29ef001981df06c73957f631a5273.svg) 50% no-repeat,
      -webkit-linear-gradient(45deg, #8b3267, #6d2d70);
      background-size: 50%, 100%;
      transition: all 0.3s ease-in-out;
    }

    .OBCarousel__nav-button:focus {
      outline: none;
    }

    .nav-button--disabled {
      background: url(/web-desktop/f2a29ef001981df06c73957f631a5273.svg) 50% no-repeat,
      #f8e1dd;
      background-size: 50%, 100%;
    }

    .nav-button--hidden {
      visibility: hidden;
      opacity: 0;
    }

    .nav-button--disabled.nav-button--back {
      background: url(/web-desktop/f2a29ef001981df06c73957f631a5273.svg) 50% no-repeat,
      #e98979;
      background-size: 50%, 100%;
    }

    .nav-button--enabled {
      background: url(/web-desktop/f2a29ef001981df06c73957f631a5273.svg) 50% no-repeat,
      #e98979;
      background-size: 50%, 100%;
    }

    .ar .nav-button--disabled,
    .ar .nav-button--enabled,
    .nav-button--disabled.nav-button--back,
    .nav-button--enabled.nav-button--back {
      transform: rotate(180deg);
    }

    .ar .nav-button--disabled.nav-button--back,
    .ar .nav-button--enabled.nav-button--back {
      transform: unset;
    }

    .DOB__form-wrapper,
    .GP__preferences-wrapper {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }

    .GP__gender-icon {
      width: 110px;
      height: 110px;
      margin: 10px 20px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      transition: all 0.2s ease-out;
      cursor: pointer;
      text-transform: capitalize;
    }

    .GP__gender-icon:hover {
      transform: scale(1.05);
    }

    .GP__gender-icon img {
      max-width: 50px;
      max-height: 50px;
    }

    .GP__gender-caption {
      font-weight: 300;
      color: #000;
      font-size: 0.8em;
      padding: 10px 0;
    }

    .gender-icon--selected,
    .GP__gender-icon:hover {
      -webkit-box-shadow: 2px 13px 53px -15px rgba(0, 0, 0, 0.68);
      -moz-box-shadow: 2px 13px 53px -15px rgba(0, 0, 0, 0.68);
      box-shadow: 2px 13px 53px -15px rgba(0, 0, 0, 0.68);
    }

    .gender-icon--selected .GP__gender-caption {
      color: #fff;
    }

    .gender-icon--male {
      background: #e8effa;
    }

    .gender-icon--female {
      background: #ffecf2;
    }

    .DOB__form-wrapper {
      width: 350px;
      margin: 30px 0;
    }

    .PS__form-wrapper,
    .SS__form-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .PS__form-wrapper {
      height: 70%;
      position: relative;
    }

    .PS__form-errors {
      background: #ffffe0;
      width: 100%;
      margin: 10px 0;
      padding: 10px 0;
      text-align: center;
      border-radius: 5px;
      position: absolute;
      bottom: 0;
    }

    .PS__form-errors p {
      color: red;
    }

    .DOB__select-field,
    .PS__select-field,
    .SS__select-field {
      border: none;
      border-radius: 0;
      -webkit-appearance: button;
      border-bottom: 2px solid #000;
      background: transparent;
      background-position: 95% 50%;
      background-repeat: no-repeat;
      background-size: 15px;
      margin: 10px;
      width: 100%;
    }

    .ar .DOB__select-field,
    .ar .PS__select-field,
    .ar .SS__select-field {
      background-position: 5% 50%;
    }

    .DOB__select-field,
    .PS__select-field {
      background-image: url(/web-desktop/f851993d71120ef5adb38460a20875b0.svg);
    }

    .SS__select-field {
      border: 1px solid #666;
      background-image: url(/web-desktop/f851993d71120ef5adb38460a20875b0.svg);
    }

    .SS__size-options {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(5, 1fr);
      width: 100%;
      grid-gap: 5px;
    }

    .SS__size-box {
      border: 1px solid #000;
      padding: 17px 0;
      position: relative;
      cursor: pointer;
    }

    .SS__size-box p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 5px 0;
    }

    .SS__size-box.SS__size--selected {
      background: #000;
      color: #fff;
    }

    .PS__phone-form {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .PS__select-field {
      max-width: 25%;
    }

    .PS__select-field:disabled {
      background: none;
    }

    .PS__iso-field {
      max-width: 25%;
    }

    .PS__iso-field,
    .PS__phone-field {
      border-bottom: 2px solid #000;
      margin: 0 10px;
    }

    .PS__iso-field:focus,
    .PS__phone-field:focus {
      outline: none;
      border: transparent;
      border-bottom: 2px solid #000;
    }

    .PS__field-error {
      border-bottom: 3px solid red;
    }

    .Brands__Wrapper {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      grid-gap: 5px;
      margin: 30px 0;
    }

    .Brands__box {
      border: 1px solid #000;
      padding: 10px;
      border-radius: 5px;
      position: relative;
      min-height: 65px;
    }

    .Brands__box .Brands__box-logo {
      max-width: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .Brands__box-check {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 10;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-out;
      background: url(/web-desktop/46f12e67675dbe144e60d0baa734ea3f.svg) 50% no-repeat;
      background-size: contain;
    }

    .Brands__box--selected {
      border: 1px solid #e98979;
    }

    .Brands__box--selected .Brands__box-check {
      opacity: 1;
      visibility: visible;
    }

    .OB-Button {
      color: #fff;
      padding: 10px;
      border: none;
      min-width: 200;
      font-size: large;
      background: -webkit-linear-gradient(86deg, #872e5b, #5b2667);
      background: linear-gradient(86deg, #872e5b, #5b2667);
    }

    .OB-Modal {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .OB-Modal--overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      background: rgba(0, 0, 0, 0.5);
    }

    .OB-Modal__wrapper {
      min-width: 600px;
      min-height: 500px;
      z-index: 101;
      display: flex;
      flex-direction: column;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
    }

    .OB-Modal__content,
    .OB-Modal__footer,
    .OB-Modal__header {
      display: flex;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50%;
      position: relative;
    }

    .OB-Modal__header {
      height: 20%;
    }

    .OB-Modal__content {
      background: #fff;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 35%;
    }

    .OB-Modal__content > p {
      font-size: 16px;
      max-width: 50%;
      font-weight: 400;
      text-align: center;
      color: #000;
      line-height: 1.5em;
    }

    .OB-Modal__benefits {
      display: flex;
      justify-content: space-evenly;
      margin: 20px 0;
    }

    .OB-Modal__benefit {
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .OB-Modal__benefit img {
      width: 50px;
    }

    .OB-Modal__caption {
      padding: 20px 10px;
      font-size: 14px;
      max-width: 81%;
      text-align: center;
      font-weight: 400;
      color: #000;
    }

    .OB-Modal__footer {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #fff;
      height: 15%;
    }

    .OB-Modal__close-icon {
      position: absolute;
      right: 5px;
      margin: auto;
      top: 5px;
      font-size: 20px;
      cursor: pointer;
      height: 20px;
      width: 20px;
      color: #fff;
    }

    .OB-Modal__status {
      margin-bottom: 20px;
      color: #000;
    }

    .OB-Modal__status-title {
      text-transform: uppercase;
      color: #000;
      font-weight: 500;
      letter-spacing: 0.08em;
    }

    .OB-Modal__highlight {
      color: #2560a9;
    }

    .OC {
      height: 40vh;
      min-width: 500px;
      width: 30vw;
      padding-bottom: 50px;
      justify-content: flex-end;
      min-height: 300px;
      background: url(/web-desktop/6360d1482a52b4dba0e8eef8b294584e.png) top no-repeat,
      #e98979;
      background-size: 30%, 100%;
    }

    .OC,
    .OC__coins-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .OC__coins-info {
      background: url(/web-desktop/c94f7f7a177517195461490ec5a27096.png);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 50px;
    }

    .OC__row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 60%;
    }

    .OC__coins {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background: url(/web-desktop/ba05e563ab369f2642de035812cd81d9.png) 50% no-repeat;
      background-size: contain;
    }

    .OC__desc {
      color: #fff;
      max-width: 90%;
      text-align: center;
      margin: 0 auto;
    }

    .OC__total-coins {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .OC__total-coins p {
      color: #fff;
      font-size: 3em;
      font-weight: 400;
    }

    .OC__cta-btn {
      width: 100%;
      padding: 15px;
      background: #000;
      color: #fff;
    }

    .OC__cta-btn:focus {
      outline: none;
    }

    .OC__cta-btn a {
      color: #fff;
      font-size: inherit;
    }

    .CC__container {
      padding: 15px 0;
    }

    .CC__wrapper {
      background: #e98979;
      padding: 10px;
      border-radius: 40px;
      color: #fff;
      width: 200px;
      margin: 0 auto;
      box-shadow: 7px 16px 62px -14px rgba(0, 0, 0, 0.75);
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

    .ar .OBB-Modal__benefit .OBB-Modal__benefit-caption,
    .ar .OBB-Modal__content p {
      text-align: right;
    }

    .bundle-list__text {
      font-weight: 200;
      color: #333c;
    }

    .bundle-cart__success {
      background: #fbfbfb;
    }

    .bundle-cart__message,
    .bundle-cart__success {
      padding: 5px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #07f;
      font-size: 11px;
      font-weight: 400;
    }

    .bundle-cart__message {
      background-color: #e5f1ff;
      cursor: pointer;
    }

    .bundle-cart__group {
      border: 1px solid #07f;
      position: relative;
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

    .BundleSelection__title {
      font-weight: 500;
      color: #000;
    }

    .BundleSelection__icon,
    .BundleSelection__title {
      display: flex;
      justify-content: center;
      flex-direction: row;
      padding: 10px 0;
    }

    .BundleSelection__buttons {
      display: flex;
      flex-direction: column;
      padding: 15px 15px 0;
    }

    .BundleSelection__button-cart,
    .BundleSelection__button-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 6px 0;
      justify-content: center;
      align-items: center;
      height: 40px;
      border-radius: 5px;
      line-height: unset;
    }

    .BundleSelection__button-list {
      height: 50px;
    }

    .BundleSelection__button-list span {
      font-size: 0.9em;
    }

    .BundleSelection__button-list span.bold {
      font-size: 1.2em;
      margin: 2px 0;
      font-weight: 500;
    }

    .BundleSelection__button-cart {
      background-color: #fff;
      color: #333;
      border: 1px solid #333;
      font-size: 0.9em;
    }

    .BundleSelection__button-cart:hover {
      background-color: #fff;
    }

    .RemoveItemModal__text {
      padding: 25px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      max-width: 300px;
      margin: auto;
      text-align: center;
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
      top: 65px;
      height: 60px;
      width: 333px;
      left: 50%;
      transform: translateX(-150px);
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

    .site-search-results {
      background: #fff;
      margin-right: 10px;
      position: absolute;
      left: 0;
      right: 0;
      z-index: 100;
      border-radius: 0 0 15px 15px;
      box-shadow: 0 10px 40px 0 rgba(49, 87, 117, 0.25);
    }

    .site-search-results__item {
      display: block;
      padding: 5px 10px;
      cursor: pointer;
      font-weight: 300;
    }

    .site-search-results__item strong {
      color: #444;
    }

    .site-search-results__title {
      padding: 5px 10px;
      font-size: 1.1em;
      font-weight: 700;
    }

    .site-search-results__title--bordered {
      border-bottom: 1px solid #404040;
    }

    .site-search-results__clear-btn {
      display: grid;
      width: 15px;
      height: 15px;
      background: #666;
      justify-content: center;
      border-radius: 50%;
      color: #fff;
      align-items: center;
      float: right;
      cursor: pointer;
    }

    .ar .site-search-results {
      margin-right: 0;
      margin-left: 10px;
    }

    .ar .site-search-results__clear-btn {
      float: left;
      font-size: 10px;
    }

    .ratingsComponent {
      display: flex;
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

    .ng-cloak,
    .x-ng-cloak,
    [data-ng-cloak],
    [ng-cloak],
    [ng:cloak

    ]
    ,
    [x-ng-cloak] {
      display: none !important;
    }

    body,
    html {
      background-color: #fff;
      font-size: 100%;
      -webkit-text-size-adjust: 100%;
      line-height: 1.3;
      font-family: apercu, Arial, Sans-Serif;
      font-weight: 500;
      color: #666;
      width: 100%;
      min-width: 1200px;
      height: 100.1%;
      margin: 0 auto;
      text-rendering: optimizeLegibility;
    }

    .ar,
    .ar body {
      font-family: frutiger, Tahoma, Arial, Sans-serif;
    }

    #catalog_filter_brand li:first-child .label {
      margin-top: 0;
    }

    .ie8 .site_search .term {
      padding-top: 8px;
    }

    .ar.ie8 a,
    .ar.ie8 h1,
    .ar.ie8 h2,
    .ar.ie8 h3,
    .ar.ie8 h4,
    .ar.ie8 li,
    .ar.ie8 p,
    .ar.ie8 span,
    .ar.ie8 ul {
      font-style: normal !important;
    }

    .ie8 .select_container select {
      padding: 3px 8px;
      height: auto;
    }

    ::selection {
      background: #ff5d04;
    }

    ::-moz-selection {
      background: #ff5d04;
    }

    #product_carousel {
      height: 450px;
      padding-bottom: 55px;
    }

    .slim-slider-wrapper {
      overflow: hidden;
    }

    .slim-slider {
      position: relative;
    }

    .is-animating {
      transition: transform 0.4s;
    }

    .slim-slide {
      min-width: 100%;
      overflow: hidden;
    }

    .slim-slide.slim-slide-vscroll {
      overflow-y: auto;
    }

    .slim-slides {
      width: 100%;
      height: auto;
      display: flex;
    }

    .carousel-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 35px;
      z-index: 1;
    }

    .carousel-pagination-pointer {
      height: 5px;
      width: 5px;
      border: 1px solid #bbb;
      border-radius: 100%;
      margin-right: 6px;
    }

    .carousel-pagination-pointer.active {
      background: #bbb;
    }

    .thumbs {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 1;
    }

    .thumb {
      height: 93px;
      width: 64px;
      border: 1px solid #bbb;
      margin: 0 2px;
      overflow: hidden;
      opacity: 0.4;
      transition: opacity 0.3s;
    }

    .thumb .thumb-image {
      max-width: 100%;
    }

    .thumb.active {
      background: #bbb;
      border-color: #bbb;
      opacity: 1;
    }

    .carousel-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 100%;
      height: 35px;
      z-index: 100;
      transform: translateY(-50%);
    }

    .next:before,
    .prev:before {
      content: ' ';
    }

    .carousel-arrow {
      position: absolute;
      display: block;
      height: 30px;
      width: 15px;
      top: 40%;
      margin-top: -15px;
      z-index: 1;
      text-indent: 200px;
      background-color: transparent !important;
      overflow: hidden;
      background-image: url(/web-desktop/a9351533d8d06e40bae3c7c464feaad2.png);
      background-repeat: no-repeat;
      background-size: 226px auto;
      cursor: pointer;
    }

    .next {
      right: -20px;
      background-position: -71px -102px;
    }

    .prev {
      background-position: -56px -102px;
      left: -20px;
    }

    .carousel-buttons {
      pointer-events: none;
    }

    .carousel-arrow {
      pointer-events: visible;
    }

    #product_carousel .slim-slide {
      opacity: 0;
      pointer-events: none;
      display: block;
    }

    #product_carousel .slim-slide img {
      margin: 0 auto;
    }

    #product_carousel .slim-slide:first-of-type {
      opacity: 1;
    }

    #product_carousel .slim-slider-wrapper .slim-slide {
      opacity: 1;
      pointer-events: all;
    }

    #product_carousel .carousel-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 90%;
      height: 35px;
      z-index: 1;
      transform: translateY(-50%);
    }

    .lazyloading {
      opacity: 0;
      will-change: opacity;
    }

    .lazyloaded {
      opacity: 1;
      transition: opacity 0.3s;
      will-change: auto;
    }

    .pageLoader {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 9998;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .deliveryPromise__wrapper {
      color: #2560a9;
      margin-top: 5px;
      font-size: 12px;
      line-height: 1.5em;
    }

    .deliveryPromise__wrapper span {
      color: #000;
    }

    .p * {
      color: var(--color, #000);
      font-size: var(--size, 26px);
      line-height: calc(var(--size) + 10px);
      font-weight: var(--weight);
      margin-top: var(--ts);
      margin-bottom: var(--bs);
      box-sizing: border-box;
    }

    .p {
      width: 1200px;
      margin: 0 auto;
      padding: 0;
    }

    .p [class^='f'],
    .p [class^='r'] {
      width: 100%;
      position: relative;
      text-align: center;
    }

    .p [class^='r'] {
      display: flex;
      margin-bottom: var(--bs, 40px);
      margin-left: 0;
      margin-right: 0;
      justify-content: center;
      align-items: flex-start;
    }

    .p [class*='f-a'] {
      position: absolute;
    }

    .p [class*='f-at'] {
      width: auto !important;
    }

    .p [class*='h'] {
      flex: 1;
      position: relative;
    }

    .p [class*='h-a'] [class^='f'] {
      width: 96%;
    }

    .ar .p [class*='h-a']:last-child [class^='f'],
    .en .p [class*='h-a']:first-child [class^='f'] {
      margin-right: 20px;
    }

    .ar .p [class*='h-a']:first-child [class^='f'],
    .en .p [class*='h-a']:last-child [class^='f'] {
      margin-left: 20px;
    }

    .ar .p [class*='h-a']:last-child,
    .en .p [class*='h-a']:first-child {
      text-align: left;
    }

    .ar .p [class*='h-a']:first-child,
    .en .p [class*='h-a']:last-child {
      text-align: right;
    }

    .p [class*='r-b'] {
      margin: 0;
    }

    .p [class*='r-b'] a {
      position: relative;
      margin: 0 20px;
    }

    .p [cc] {
      position: relative;
      margin-top: var(--ts);
      display: inline-block;
    }

    .p [cc]:after {
      content: '';
      background: var(--color);
      height: var(--bar-height);
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
    }

    .slider-slider-container {
      height: 600px;
    }

    #content {
      padding: 0;
      color: #000;
    }

    .site_width_container {
      width: auto;
    }

    .responsive-layout__auto-resize-image {
      width: 100%;
      height: auto;
    }

    .responsive-layout__row {
      margin-bottom: 40px;
      position: relative;
      text-align: center;
      justify-content: center;
      box-sizing: border-box;
      display: flex;
    }

    .responsive-layout__container-wrapper {
      width: 1200px;
      margin: 0 auto;
      position: relative;
    }

    .responsive-layout__single-container {
      width: 100%;
      position: relative;
    }

    .responsive-layout__multi-container {
      flex: 1;
      position: relative;
    }

    .responsive-layout__background-image {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      padding: 265px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
    }

    .responsive-layout__link {
      color: #fff;
      font-size: 40px;
      line-height: 50px;
      font-weight: 600;
    }

    .responsive-layout__link:after {
      content: '';
      background: #fff;
      display: inline-block;
      height: 3px;
      width: 100%;
      margin-top: 0;
    }

    .responsive-layout__black-background:after {
      background: #000;
    }

    .ar .responsive-layout__single-full-width-carousel--content__subtitle,
    .ar .responsive-layout__daily-feeds--subtitle {
      letter-spacing: inherit;
    }

    .responsive-layout__categories--image,
    .responsive-layout__daily-feeds--image {
      width: 100%;
      height: auto;
    }

    .responsive-layout__daily-feeds {
      margin: 0 auto;
      width: 85%;
      text-align: left;
    }

    .ar .responsive-layout__daily-feeds {
      text-align: right;
    }

    .responsive-layout__daily-feeds li a {
      color: #000;
    }

    .responsive-layout__daily-feeds li {
      position: relative;
      text-align: center;
      background: #dad9d9;
      padding: 0;
      margin-bottom: 40px;
      border-radius: 10px;
      display: inline-flex;
      margin-right: 40px;
      overflow: hidden;
      width: 300px;
      height: 260px;
      transition: 300ms ease-in-out;
    }

    .responsive-layout__daily-feeds li:hover .responsive-layout__daily-feeds--image img {
      scale: 1.15;
    }

    .ar .responsive-layout__daily-feeds li {
      margin-left: 40px;
      margin-right: 0;
    }

    .responsive-layout__daily-feeds li:nth-child(3n) {
      margin-right: 0;
    }

    .ar .responsive-layout__daily-feeds li:nth-child(3n) {
      margin-left: 0;
      margin-right: auto;
    }

    .responsive-layout__daily-feeds li .responsive-layout__daily-feeds--image {
      width: 100%;
      height: 100%;
      overflow: hidden;
      transition: 300ms ease-in-out;
    }

    .responsive-layout__daily-feeds--subtitle {
      letter-spacing: 3px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 3px;
    }

    .ar .responsive-layout__daily-feeds--subtitle {
      font-size: 14px;
      font-weight: 400;
    }

    .responsive-layout__daily-feeds--title {
      font-size: 20px;
      font-weight: 500;
    }

    .responsive-layout__daily-feeds--copy {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 15px;
    }

    .responsive-layout__daily-feeds
    li
    .responsive-layout__daily-feeds--image
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 300ms ease-in-out;
    }

    .responsive-layout__daily-feeds--cta {
      font-size: 15px;
      font-weight: 500;
      display: inline-block;
    }

    .responsive-layout__content--cta:after,
    .responsive-layout__daily-feeds--cta:after,
    .responsive-layout__single-full-width-carousel--content__cta:after,
    .responsive-layout__single-full-width-carousel--content__cta--white:after,
    .black-friday-backup-page--cta:after {
      content: '';
      display: inline-flex;
      width: 100%;
      margin-top: 0;
      background: #000;
      height: 3px;
    }

    .responsive-layout__categories {
      margin-bottom: 60px;
      padding: 60px;
    }

    .responsive-layout__heading {
      font-size: 26px;
      font-weight: 400;
      text-align: center;
      margin: 20px 0;
    }

    .shop_by_categories_wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .instagram_posts_wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    .shop_by_categories_entry {
      width: 49.6%;
      height: 1250px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

    }

    .instagram_posts_wrapper_entry {
      width: 33.33%;
      height: 510px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: 400ms ease-in-out;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

    }

    .instagram_posts_wrapper_entry:hover .instagram_posts_wrapper_on_hover {
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
      background: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: 400ms ease-in-out;
    }

    .instagram_posts_wrapper_btn {
      background: transparent;
      border: none;
      cursor: pointer;
      color: #fff;
    }

    .shop_by_categories_medium_entry {
      width: 24.6%;
      height: 670px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: relative;
      overflow: hidden

    }

    .shop_by_categories_entry_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 500ms ease-in-out;
    }

    .shop_by_categories_entry_img_discount {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: 500ms ease-in-out;
    }

    .instagram_posts_wrapper_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 500ms ease-in-out;
    }

    .shop_by_categories_entry:hover .shop_by_categories_entry_img {
      scale: 1.055;
    }

    .shop_by_categories_medium_entry:hover .shop_by_categories_entry_img_discount {
      scale: 1.055;
    }

    .shop_by_categories_entry_btn_container {
      position: absolute;
      bottom: 40px;
    }

    .shop_by_categories_entry_btn {
      position: relative;
      font-size: 17px;
      text-transform: capitalize;
      text-decoration: none;
      padding: .85em 2.5em;
      display: inline-block;
      transition: all .2s;
      border: none;
      font-family: inherit;
      font-weight: 500;
      color: black;
      background-color: white;
    }

    .shop_by_categories_entry_btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .shop_by_categories_entry_btn:active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .shop_by_categories_entry_btn::after {
      content: "";
      display: inline-block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all .4s;
    }

    .shop_by_categories_entry_btn::after {
      background-color: #fff;
    }

    .shop_by_categories_entry_btn:hover::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }

    .responsive-layout__categories .responsive-layout__categories--slides {
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .responsive-layout__categories .responsive-layout__categories--slides a {
      position: relative;
      display: inline-flex;
    }

    .en
    .responsive-layout__categories
    .responsive-layout__categories--slides
    a {
      margin-right: 20px;
    }

    .ar
    .responsive-layout__categories
    .responsive-layout__categories--slides
    a {
      margin-left: 20px;
    }

    .en
    .responsive-layout__categories
    .responsive-layout__categories--slides
    a:last-child {
      margin-right: 0;
    }

    .ar
    .responsive-layout__categories
    .responsive-layout__categories--slides
    a:last-child {
      margin-left: 0;
    }

    .responsive-layout__categories--image img {
      border-radius: 8px;
      width: 100%;
      height: auto;
    }

    .responsive-layout__categories--title {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      font-size: 20px;
      font-weight: 500;
      background: #0000001f;
      color: #fff;
      justify-content: center;
      align-items: center;
      text-align: center;
      display: flex;
      border-radius: 8px;
      cursor: pointer;
      transition: 300ms ease-in-out;
    }

    .responsive-layout__categories--title:hover {
      background: transparent;
    }

    .ar .responsive-layout__categories--title {
      font-weight: 600;
    }

    .responsive-layout__single-full-width-carousel
    .responsive-layout__background-image {
      padding: 250px 0;
    }

    .responsive-layout__single-full-width-carousel--content__subtitle {
      letter-spacing: 7px;
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .ar .responsive-layout__single-full-width-carousel--content__subtitle {
      margin-bottom: 10px;
    }

    .responsive-layout__single-full-width-carousel--content__title {
      font-size: 70px;
      line-height: 70px;
      margin-bottom: 20px;
      font-weight: 900;
    }

    .ar .responsive-layout__single-full-width-carousel--content__title {
      margin-bottom: 30px;
      line-height: 90px;
    }

    .responsive-layout__single-full-width-carousel--content__copy {
      font-size: 26px;
      font-weight: 400;
    }

    .responsive-layout__content--cta,
    .responsive-layout__single-full-width-carousel--content__cta,
    .responsive-layout__single-full-width-carousel--content__cta--white,
    .black-friday-backup-page--cta {
      font-size: 25px;
      font-weight: 500;
      display: inline-block;
      margin-top: 20px;
    }

    .responsive-layout__single-full-width-carousel--content__cta--white:after {
      background: #fff;
    }

    .seo-content {
      background: #f5f5f5;
      padding: 50px;
    }

    .ar .seo-content {
      padding: 50px 80px;
    }

    .seo-content--title {
      font-size: 40px;
      font-weight: 900;
      margin-bottom: 10px;
    }

    .seo-content--copy {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 30px;
    }

    .seo-content--copy:last-child {
      margin: 0;
    }

    .responsive-layout__content--page-title {
      font-size: 46px;
      font-weight: 500;
      text-align: center;
      margin: 40px 0;
      margin-bottom: 10px;
    }

    .responsive-layout__content--copy {
      color: #000;
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 10px;
    }

    .responsive-layout__content--cta {
      color: #000;
      text-decoration: none;
    }

    .responsive-layout__content--cta:after {
      height: 3px;
    }

    .responsive-layout__call-to-action--box {
      font-weight: 700;
      padding: 0;
      display: inline-block;
      font-size: 18px;
      cursor: pointer;
      line-height: 60px;
      color: #fff;
      background: #2d2d2d;
      margin: 10px 5px;
      width: 100%;
      text-align: center;
    }

    .responsive-layout__call-to-action--box-active {
      color: #000;
      background: #f5f5f5;
    }

    .responsive-layout__call-to-action--box:last-child {
      margin-right: 0;
    }

    .responsive-layout__call-to-action--box:first-child {
      margin-left: 0;
    }

    .slick-slider {
      position: relative;
      display: block;
      box-sizing: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -ms-touch-action: pan-y;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
    }

    .slick-list {
      position: relative;
      display: block;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }

    .slick-list:focus {
      outline: none;
    }

    .slick-list.dragging {
      cursor: pointer;
      cursor: hand;
    }

    .slick-slider .slick-track,
    .slick-slider .slick-list {
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    .slick-track {
      position: relative;
      top: 0;
      left: 0;
      display: flex;
      margin-left: auto;
      margin-right: auto;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .slick-track:before,
    .slick-track:after {
      display: flex;
      content: '';
    }

    .slick-track:after {
      clear: both;
    }

    .slick-loading .slick-track {
      visibility: hidden;
    }

    .slick-slide {
      display: none;
      float: left;
      min-height: 1px;
    }

    [dir='rtl'] .slick-slide {
      float: right;
    }

    .slick-slide img {
      display: block;
    }

    .slick-slide.slick-loading img {
      display: none;
    }

    .slick-slide.dragging img {
      pointer-events: none;
    }

    .slick-initialized .slick-slide {
      display: block;
      outline: 0;
    }

    .slick-loading .slick-slide {
      visibility: hidden;
    }

    .slick-vertical .slick-slide {
      display: block;
      height: auto;
      border: 1px solid transparent;
    }

    .slick-arrow.slick-hidden {
      display: none;
    }

    .slick-arrow {
      background: transparent;
      border: solid #000;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 11px;
      outline: 0;
      text-indent: -999999;
      font-size: 0;
      margin: 0 5px;
    }

    .ar .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    .ar .slick-arrow.slick-next,
    .slick-arrow.slick-prev {
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      transform: rotate(135deg);
    }

    .slick-dots {
      display: flex;
      position: absolute;
      bottom: 10px;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    .slick-dots li {
      margin: 3px;
      display: flex;
    }

    .slick-dots li button {
      border-radius: 10px;
      border: 1px solid #eee;
      background: transparent;
      font-size: 0;
      text-indent: -9999;
      width: 15px;
      height: 15px;
      outline: 0;
    }

    .slick-dots li.slick-active button {
      background: #eee;
    }

    [class^='multiple-slide-'] {
      justify-content: center;
      align-items: center;
      display: flex;
    }

    [class^='multiple-slide-'] img {
      width: 100%;
      height: auto;
    }

    [class^='multiple-slide-'] a {
      position: relative;
      display: inline-flex;
    }

    .en [class^='multiple-slide-'] a,
    .en [class^='multiple-slide-'] .responsive-layout__multi-container {
      margin-right: 20px;
    }

    .ar [class^='multiple-slide-'] a,
    .ar [class^='multiple-slide-'] .responsive-layout__multi-container {
      margin-left: 20px;
    }

    .en [class^='multiple-slide-'] a:last-child,
    .en
    [class^='multiple-slide-']
    .responsive-layout__multi-container:last-child {
      margin-right: 0;
    }

    .ar [class^='multiple-slide-'] a:last-child,
    .ar
    [class^='multiple-slide-']
    .responsive-layout__multi-container:last-child {
      margin-left: 0;
    }

    .multiple-slide-highlight-carousel .slick-slide {
      opacity: 0.2;
      transition: all 1s;
    }

    .multiple-slide-highlight-carousel .slick-current {
      opacity: 1;
    }

    .responsive-layout__categories.three-in-one {
      width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }

    .responsive-layout__categories.three-in-one .slick-arrow {
      border-width: 0 4px 4px 0;
      padding: 15px;
    }

    .responsive-layout__categories.three-in-one
    .responsive-layout__categories--slides
    a {
      margin: 0;
      opacity: 1;
      transform: scale(0.8);
    }

    .responsive-layout__categories.three-in-one
    .responsive-layout__categories--slides
    a:last-child {
      margin: 0;
    }

    .responsive-layout__categories.three-in-one
    .responsive-layout__categories--slides
    a.slick-active {
      transform: scale(1.1);
    }

    .responsive-layout__categories.three-in-one
    .responsive-layout__categories--slides
    img {
      border-radius: 0;
    }

    .responsive-layout__categories.three-in-one .slick-list {
      padding-top: 40px !important;
      padding-bottom: 40px !important;
    }

    .responsive-layout__categories.three-in-one
    .three-in-one--content-wrapper:after {
      content: ' ';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 240px;
      background: linear-gradient(180deg,
      hsla(0, 0%, 0%, 0) 0,
      hsla(0, 0%, 0%, 0.4));
    }

    @font-face {
      font-family: 'digital-7regular';
      src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2'),
      url(data:application/font-woff;charset=utf-8;base64,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) format('woff');
      font-weight: 400;
      font-style: normal;
    }

    #timer {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      direction: ltr;
    }

    .responsive-layout__timer {
      margin: 0 !important;
    }

    i#text,
    .responsive-layout__timer--text {
      font-size: 12px;
      margin-top: 21px;
      margin-left: 10px;
    }

    .responsive-layout__timer {
      text-align: center;
      line-height: initial;
      padding: 5px 0 10px;
      font-size: 26px;
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .ar .responsive-layout__timer {
      direction: ltr;
      padding: 0;
    }

    .responsive-layout__timer span {
      font-family: 'digital-7regular';
      font-size: 40px;
      height: 32px;
      display: inline-block;
    }

    .ar .responsive-layout__timer span {
      display: inline-block;
    }

    .responsive-layout__timer {
      background: #000;
    }

    .responsive-layout__timer,
    #timer span,
    #timer #text,
    #timer {
      color: #c42020;
    }

    .responsive-layout__link {
      color: #fff;
      font-size: 40px;
      line-height: 50px;
      position: absolute;
      bottom: 90px;
      font-weight: 600;
    }

    .responsive-layout__banner-title {
      color: #000000;
      font-size: 28px;
      font-weight: 500;
      padding-top: 35px;
      margin-left: -300px;
    }

    .responsive-layout__banner-copy {
      color: #000000;
      font-size: 21px;
      font-weight: 400;
      padding-top: 6px;
      margin-left: -256px;
    }

    .responsive-layout__link:after {
      content: '';
      background: #fff;
      display: inline-block;
      height: 3px;
      width: 100%;
      margin-top: 0;
    }

    .ar .responsive-layout__link:after {
      margin-top: 3px;
    }

    .responsive-layout__info {
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      top: 150px;
      color: #fff;
      z-index: 1;
      font-size: 100px;
      line-height: 70px;
      text-transform: inherit;
      font-weight: 900;
    }

    .ar .responsive-layout__info {
      top: 160px;
      font-size: 60px;
      line-height: 90px;
      font-weight: 600;
    }

    .responsive-layout__content--cta {
      color: #fff;
    }

    .responsive-layout__content--cta:after {
      background: #fff;
    }

    .responsive-layout__content--cta.black {
      color: #1b1464;
      margin: 0;
      display: inline-block;
    }

    .responsive-layout__content--cta.black:after {
      background: #1b1464;
    }

    .responsive-layout__timer {
      background: #000000;
    }

    .responsive-layout__timer,
    #timer span,
    #timer #text,
    #timer {
      color: #ffffff;
    }

    .read-more-wrapper a {
      text-decoration: underline;
      color: #000;
      font-weight: 600;
    }

    #read-more-button {
      font-weight: bold;
      text-decoration: underline;
      color: #222;
      cursor: pointer;
    }

    #read-more-container {
      max-height: 0;
      opacity: 0;
      visibility: hidden;
      transition: all 1s;
      overflow: hidden;
    }

    #read-more-container.read-more-container-animate {
      visibility: visible;
      opacity: 1;
    }

    .responsive-layout__content--cta.white {
      color: #fff;
      margin: 0;
      display: inline-block;
    }

    .responsive-layout__content--cta.white:after {
      background: #fff;
    }

    .responsive-layout__content--cta.blue {
      color: #ffffff;
      margin: 0;
      display: inline-block;
    }

    .slick-dots {
      bottom: 40px;
    }

    .responsive-layout__single-full-width-carousel
    .responsive-layout__background-image {
      padding: 264px 0px;
    }

    @-moz-document url-prefix() {
      .en .mozilla_b {
        margin-top: -156px !important;
      }
      .ar .mozilla_b {
        margin-top: -156px !important;
      }
    }

    .slick-dots li button {
      width: 10px;
      height: 10px;
    }

    .slick-dots {
      bottom: 5px !important;
    }

    .responsive-layout__content--cta.cta:after {
      height: 0;
    }

    .sb9:before {
      content: '';
      width: 0px;
      height: 0px;
      position: absolute;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #fff;
      border-bottom: 10px solid transparent;
      right: 47%;
      bottom: -23px;
    }

    .sb9:after {
      content: '';
      width: 0px;
      height: 0px;
      position: absolute;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 20px solid #000;
      border-bottom: 10px solid transparent;
      right: 34%;
      bottom: -30px;
    }

    .catalog_banner_top.tb_three {
      height: fit-content;
      padding-bottom: 14px;
      padding-top: 10px;
    }

    .catalog_banner_top.tb_three h2.tb_title {
      font-weight: bold;
      text-transform: none;
    }

    .ar .catalog_banner_top.tb_three p.cat_description {
      padding-top: 2%;
    }

    .catalog_banner_top.tb_three h2.tb_title {
      font-weight: 700;
      margin-top: 1.1%;
    }

    .ar .catalog_banner_top.tb_three h2.tb_title {
      margin-top: 1.5%;
    }

    .ar .catalog_banner_top.tb_three p.cat_description {
      padding-top: 1%;
    }

    .catalog_banner_top.tb_three .children {
      margin-top: 0;
      padding: 0 1.5%;
    }

    .ar .catalog_banner_top.tb_three .children {
      margin-top: 1%;
    }

    .ar .catalog_banner_top.tb_three .children span,
    .catalog_banner_top.tb_three .children span {
      width: auto;
      padding: 1% 2%;
      float: none;
      margin-top: 12px;
    }

    .slick-slide {
      margin-right: 20px;
    }

    .home-slider > .slick-list > .slick-track > .slick-slide {
      margin-right: 0 !important;
    }

    .slick-list {
      width: 90%;
      margin: 0 auto;
    }

    .main-carousel .slick-payslide {
      margin-right: 0 !important;
    }

    .main-carousel .slick-list {
      width: 100% !important;
    }

    .slick-prev {
      display: block;
      position: absolute;
      left: 0;
      top: 42%;
    }

    .slick-next {
      display: block;
      position: absolute;
      right: 0;
      bottom: 42%;
    }

    .reduction {
      color: #e95c5b;
    }

    .reduction {
      color: #2560a9;
      font-size: 13px;
      font-weight: 500;
    }

    .pre_reduction {
      margin-right: 5px;
    }

    .reduction_tag {
      font-size: 12px;
      color: #fff;
      background-color: #f53397;
      padding: 3px 5px;
      line-height: 1.5;
      text-align: center;
      left: 0;
      top: 14px;
      margin-left: 14px;
      margin-bottom: 10px;
    }

    .reduction_tag_as_catalog {
      font-size: 12px;
      color: #fff;
      //background-color: rgba(255, 63, 108, .8);
      background-color: #f53397;
      padding: 3px 5px;
      line-height: 1.5;
      text-align: center;
      left: 0;
      top: 14px;
      z-index: 45;
      position: absolute;
    }

    .nmModal__overlay {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .reactimagemagnify {
      width: 85%;
    }

    .deskRow {
      display: flex;
      justify-content: space-between;
    }

    .productContinueShopping {
      padding: 10px;
    }

    .productContinueShopping-subheading {
      text-align: center;
      font-size: 15px;
      margin-bottom: 20px;
    }

    .productContinueShopping-actions {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: space-around;
      -webkit-justify-content: space-around;
      -ms-flex-pack: space-around;
      justify-content: space-around;
      margin: 10px 0;
    }

    .productContinueShopping-actions-link {
      padding: 10px 0;
      margin: 0 5px;
      text-transform: uppercase;
      -webkit-text-decoration: none;
      text-decoration: none;
      color: #2560a9;
    }

    .productContinueShopping-actions-button {
      -webkit-text-decoration: none;
      text-decoration: none;
      background: var(--omnisell-ButtonColor);
      color: #fff;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
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
      background: linear-gradient(90deg,
      hsla(0, 0%, 100%, 0) 0,
      hsla(0, 0%, 100%, 0.5));
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
      width: 152px;
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

    .price-regular {
      text-decoration: line-through;
      color: #a2a2a2;
      font-weight: 100;
    }

    .price-speical {
      margin: 0 3px;
      color: #ff6448;
      font-weight: 700;
    }

    .line-through {
      text-decoration: line-through;
      margin-right: 10px;
    }

    .is-selected a img {
      border: 1px solid #000;
    }

    .product-variation-label {
      text-align: center;
      padding: 5px;
    }

    .animation-text {
      animation-name: example;
      animation-duration: 0.8s;
      animation-iteration-count: infinite;
    }

    @keyframes example {
      from {
       color: #800101;
      }
      to {
       color: #fff;
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

    .pagination_container ul {
      width: 50% !important;
    }

    .pagination_container ul .loader-list {
      width: 100% !important;
      cursor: pointer;
      border: 1px solid;
      background: #fff;
      padding: 4px;
      display: flex;
      justify-content: center;
    }

    .pagination_container ul .loader-list h1 {
      font-size: 18px !important;
      margin: 0 !important;
    }

    .cart-button-label {
      cursor: pointer;
    }

    .catalog_listings .listing {
      position: relative;
    }
  `}</style>
)

export default main;
