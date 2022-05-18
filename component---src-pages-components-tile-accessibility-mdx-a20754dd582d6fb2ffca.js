"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[16963],{28399:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(67294),n=a(88650),i=a.n(n),s=a(1597),l=a(64905),o=a(81151),c=a(75900),m=a.n(c);var d=e=>{let{title:t,theme:a,tabs:n=[]}=e;return r.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:o}=a||n,c=`${i}/edit/${o}${l}/src/pages${t}`;return i?r.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"cds--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(56328),h=a(51721);let w=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===n,o=new RegExp(`${n}/?(#.*)?$`),c=a.replace(o,t);return r.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},r.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},r.createElement("nav",{"aria-label":e},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(r.Component);var b=w,k=a(17680),g=a(75387),A=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?r.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(A.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var y=e=>{let{pageContext:t,children:a,location:n,Title:c}=e;const{frontmatter:m={},relativePagePath:h,titleType:w}=t,{tabs:A,title:y,theme:C,description:N,keywords:v,date:E}=m,{interiorTheme:T}=(0,g.Z)(),{site:{pathPrefix:x}}=(0,s.useStaticQuery)("2456312558"),L=x?n.pathname.replace(x,""):n.pathname,W=A?L.split("/").filter(Boolean).slice(-1)[0]||i()(A[0],{lower:!0}):"",S=C||T;return r.createElement(o.Z,{tabs:A,homepage:!1,theme:S,pageTitle:y,pageDescription:N,pageKeywords:v,titleType:w},r.createElement(d,{title:c?r.createElement(c,null):y,label:"label",tabs:A,theme:S}),A&&r.createElement(b,{title:y,slug:L,tabs:A,currentTab:W}),r.createElement(k.Z,{padded:!0},a,r.createElement(u,{relativePagePath:h}),r.createElement(f,{date:E})),r.createElement(p.Z,{pageContext:t,location:n,slug:L,tabs:A,currentTab:W}),r.createElement(l.Z,null))}},84204:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return k}});var r=a(45987),n=(a(67294),a(64983)),i=a(28399),s=a(60652);const l=["components"],o={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=c("PageDescription"),d=c("AnchorLinks"),u=c("AnchorLink"),p=c("Row"),h=c("Column"),w={_frontmatter:o},b=i.Z;function k(e){let{components:t}=e,a=(0,r.Z)(e,l);return(0,n.kt)(b,Object.assign({},w,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(m,{mdxType:"PageDescription"},(0,n.kt)("p",null,"The tile React Carbon component has been tested against the latest\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"W3C Web Content Accessibility Guidelines (WCAG) 2.1 Level A and AA success criteria"),"\nand violations have been identified as high priority issues. This document will\nbe updated when these accessibility issues are resolved.")),(0,n.kt)(d,{mdxType:"AnchorLinks"},(0,n.kt)(u,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Resources"),(0,n.kt)(u,{mdxType:"AnchorLink"},"Accessibility testing")),(0,n.kt)("h2",null,"Accessibility considerations"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Labels should be clear and concise."),(0,n.kt)("li",{parentName:"ol"},"Users should be warned if selecting a tile will cause a change in context."),(0,n.kt)("li",{parentName:"ol"},"Carbon components should be used to create the content that displays within\neach tile.")),(0,n.kt)("h2",null,"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/examples/checkbox/checkbox-1/checkbox-1.html"},"W3C WAI-ARIA Authoring Practices Checkbox Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard interactions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/GL/wiki/Using_aria-expanded_to_indicate_the_state_of_a_collapsible_element"},"W3C WAI-ARIA: Using aria-expanded to indicate the state of a collapsible element")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_3_1"},"1.3.1 Info and Relationships"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},"1.3.1"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_1_1"},"2.1.1 Keyboard"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard"},"2.1.1"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_4_3"},"2.4.3 Focus Order"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order"},"2.4.3"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_4_6"},"2.4.6 Headings and Labels"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels"},"2.4.6"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#2_4_7"},"2.4.7 Focus Visible"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible"},"2.4.7"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#4_1_2"},"4.1.2 Name, Role, Value"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html"},"4.1.2"),")")))),(0,n.kt)("h2",null,"Accessibility testing"),(0,n.kt)("p",null,"Automated, manual and screen reader accessibility verification test has been\nperformed on the tile React Carbon component.\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"WCAG 2.1 Level A and AA success criteria")," issues\nhave been identified and the list of open accessibility violations is available\nin the Carbon Component GitHub repository."),(0,n.kt)("h3",null,"Automated test"),(0,n.kt)(p,{mdxType:"Row"},(0,n.kt)(h,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(s.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(s.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(s.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,n.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(s.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(s.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"DAP test:"),(0,n.kt)("br",null),"- No violations")))))))}k.isMDXComponent=!0}}]);