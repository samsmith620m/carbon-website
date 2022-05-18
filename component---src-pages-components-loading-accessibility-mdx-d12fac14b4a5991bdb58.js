"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[93938],{28399:function(e,t,r){r.d(t,{Z:function(){return b}});var s=r(67294),n=r(88650),i=r.n(n),a=r(1597),l=r(64905),d=r(81151),u=r(75900),o=r.n(u);var c=e=>{let{title:t,theme:r,tabs:n=[]}=e;return s.createElement("div",{className:o()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===r})},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12"},s.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:r}=e;const{site:{siteMetadata:{repository:n}}}=(0,a.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:d}=r||n,u=`${i}/edit/${d}${l}/src/pages${t}`;return i?s.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},s.createElement("div",{className:"cds--col"},s.createElement("a",{className:"EditLink-module--link--IDrl1",href:u},"Edit this page on GitHub"))):null},p=r(56328),k=r(51721);let L=function(e){function t(){return e.apply(this,arguments)||this}return(0,k.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:r}=this.props,n=r.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===n,d=new RegExp(`${n}/?(#.*)?$`),u=r.replace(d,t);return s.createElement("li",{key:e,className:o()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},s.createElement(a.Link,{className:"PageTabs-module--link--Kz-7R",to:`${u}`},e))}));return s.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},s.createElement("nav",{"aria-label":e},s.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(s.Component);var y=L,S=r(17680),h=r(75387),g=r(50041);var T=e=>{let{date:t}=e;const r=new Date(t);return t?s.createElement(g.X2,{className:"last-modified-date-module--row--XJoYQ"},s.createElement(g.sg,null,s.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var b=e=>{let{pageContext:t,children:r,location:n,Title:u}=e;const{frontmatter:o={},relativePagePath:k,titleType:L}=t,{tabs:g,title:b,theme:w,description:C,keywords:x,date:v}=o,{interiorTheme:f}=(0,h.Z)(),{site:{pathPrefix:A}}=(0,a.useStaticQuery)("2456312558"),E=A?n.pathname.replace(A,""):n.pathname,R=g?E.split("/").filter(Boolean).slice(-1)[0]||i()(g[0],{lower:!0}):"",N=w||f;return s.createElement(d.Z,{tabs:g,homepage:!1,theme:N,pageTitle:b,pageDescription:C,pageKeywords:x,titleType:L},s.createElement(c,{title:u?s.createElement(u,null):b,label:"label",tabs:g,theme:N}),g&&s.createElement(y,{title:b,slug:E,tabs:g,currentTab:R}),s.createElement(S.Z,{padded:!0},r,s.createElement(m,{relativePagePath:k}),s.createElement(T,{date:v})),s.createElement(p.Z,{pageContext:t,location:n,slug:E,tabs:g,currentTab:R}),s.createElement(l.Z,null))}},2034:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return d},default:function(){return y}});var s=r(45987),n=(r(67294),r(64983)),i=r(28399),a=r(60652);const l=["components"],d={},u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},o=u("AnchorLinks"),c=u("AnchorLink"),m=u("Row"),p=u("Column"),k={_frontmatter:d},L=i.Z;function y(e){let{components:t}=e,r=(0,s.Z)(e,l);return(0,n.kt)(L,Object.assign({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o,{mdxType:"AnchorLinks"},(0,n.kt)(c,{mdxType:"AnchorLink"},"How it works"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Resources"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Accessibility testing")),(0,n.kt)("h2",null,"How it works"),(0,n.kt)("p",null,"The Carbon inline loading component is used to notify user’s that the page\ncontent is loading. W3C WAI-ARIA ",(0,n.kt)("inlineCode",{parentName:"p"},'role="alert"')," and ",(0,n.kt)("inlineCode",{parentName:"p"},'aria-live="assertive"')," are\nused to ensure screen reader users are also provided the same information."),(0,n.kt)("h2",null,"Accessibility considerations"),(0,n.kt)("p",null,"This component has been validated to meet the\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG20/"},"WCAG 2.0 AA")," and\n",(0,n.kt)("a",{parentName:"p",href:"http://www.section508.gov/"},"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If the inline loading message is changed, be sure it is clear and concise.")),(0,n.kt)("h2",null,"Resources"),(0,n.kt)("h4",null,"Helpful resources for creating customized accessible implementations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#4_1_3"},"IBM Accessibility Checklist - Checkpoint 4.1.3 Status Message"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"},"4.1.3"),")")),(0,n.kt)("h2",null,"Accessibility testing"),(0,n.kt)("p",null,"Accessibility issues are tracked in the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues?q=is%3Aopen+label%3A%22type%3A+a11y+%E2%99%BF%22+label%3A%22component%3A+loading%22+"},"Carbon Component GitHub repository"),"."),(0,n.kt)("h3",null,"Automated test"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(a.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(a.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(a.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(a.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(a.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Dynamic Assessment Plugin version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"DAP test"),(0,n.kt)("br",null),"- No violations")))))),(0,n.kt)("h3",null,"macOS Screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(a.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(a.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(a.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(a.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(a.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver(VO) test:"),(0,n.kt)(a.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(a.ListItem,{mdxType:"ListItem"},'On page load. VO announces "Active Loading Indicator".')))))))),(0,n.kt)("h3",null,"Windows screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(a.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(a.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(a.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment"),(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(a.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(a.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,n.kt)("br",null),"- Firefox version 68",(0,n.kt)("br",null),"- JAWS 18",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"JAWS test:"),(0,n.kt)(a.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(a.ListItem,{mdxType:"ListItem"},'On page load. JAWS announces "Active Loading Indicator".')))))))),(0,n.kt)("h3",null,"iOS screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(a.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(a.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results")),(0,n.kt)(a.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(a.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",(0,n.kt)("br",null),"- Safari version 13.1.3",(0,n.kt)("br",null),"- Carbon 10 - React"),(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver test:"),(0,n.kt)(a.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(a.ListItem,{mdxType:"ListItem"},'On page load. VO announces "Active Loading Indicator".')))))))))}y.isMDXComponent=!0}}]);