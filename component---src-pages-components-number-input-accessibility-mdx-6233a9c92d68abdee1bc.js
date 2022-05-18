"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[89796],{28399:function(e,t,r){r.d(t,{Z:function(){return y}});var a=r(67294),n=r(88650),i=r.n(n),s=r(1597),l=r(64905),o=r(81151),c=r(75900),u=r.n(c);var m=e=>{let{title:t,theme:r,tabs:n=[]}=e;return a.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===r})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:r}=e;const{site:{siteMetadata:{repository:n}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:o}=r||n,c=`${i}/edit/${o}${l}/src/pages${t}`;return i?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=r(56328),h=r(51721);let w=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:r}=this.props,n=r.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===n,o=new RegExp(`${n}/?(#.*)?$`),c=r.replace(o,t);return a.createElement("li",{key:e,className:u()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},a.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(a.Component);var k=w,b=r(17680),g=r(75387),f=r(50041);var N=e=>{let{date:t}=e;const r=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var y=e=>{let{pageContext:t,children:r,location:n,Title:c}=e;const{frontmatter:u={},relativePagePath:h,titleType:w}=t,{tabs:f,title:y,theme:v,description:A,keywords:C,date:T}=u,{interiorTheme:E}=(0,g.Z)(),{site:{pathPrefix:L}}=(0,s.useStaticQuery)("2456312558"),S=L?n.pathname.replace(L,""):n.pathname,W=f?S.split("/").filter(Boolean).slice(-1)[0]||i()(f[0],{lower:!0}):"",x=v||E;return a.createElement(o.Z,{tabs:f,homepage:!1,theme:x,pageTitle:y,pageDescription:A,pageKeywords:C,titleType:w},a.createElement(m,{title:c?a.createElement(c,null):y,label:"label",tabs:f,theme:x}),f&&a.createElement(k,{title:y,slug:S,tabs:f,currentTab:W}),a.createElement(b.Z,{padded:!0},r,a.createElement(d,{relativePagePath:h}),a.createElement(N,{date:T})),a.createElement(p.Z,{pageContext:t,location:n,slug:S,tabs:f,currentTab:W}),a.createElement(l.Z,null))}},75896:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return o},default:function(){return b}});var a=r(45987),n=(r(67294),r(64983)),i=r(28399),s=r(60652);const l=["components"],o={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=c("PageDescription"),m=c("AnchorLinks"),d=c("AnchorLink"),p=c("Row"),h=c("Column"),w={_frontmatter:o},k=i.Z;function b(e){let{components:t}=e,r=(0,a.Z)(e,l);return(0,n.kt)(k,Object.assign({},w,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(u,{mdxType:"PageDescription"},(0,n.kt)("p",null,"The number input React Carbon component has been tested against the latest\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"W3C Web Content Accessibility Guidelines (WCAG) 2.1 Level A and AA success criteria"),"\nand violations have been identified as high priority issues. This document will\nbe updated when these accessibility issues are resolved.")),(0,n.kt)(m,{mdxType:"AnchorLinks"},(0,n.kt)(d,{mdxType:"AnchorLink"},"How it works"),(0,n.kt)(d,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,n.kt)(d,{mdxType:"AnchorLink"},"Resources"),(0,n.kt)(d,{mdxType:"AnchorLink"},"Accessibility testing")),(0,n.kt)("h2",null,"How it works"),(0,n.kt)("p",null,"The number input components are form fields that are provided for user input of\nnumerical data. The validation message should be included to advise the user of\nnumbers that are input incorrectly or a required field that is missing. The\noptional helper text should be used to provide instructions to help users\nunderstand how to complete the numeric field as well as indicate any required\nand optional input, data formats, and other relevant information."),(0,n.kt)("h2",null,"Accessibility considerations"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Provide labels and instructions that are clear and concise."),(0,n.kt)("li",{parentName:"ol"},"Provide ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/forms/instructions/"},"instructions"),"\nfor completing the field. For example, Passwords must contain at least 8\nletters and/or numbers."),(0,n.kt)("li",{parentName:"ol"},"If the number input is a required field include the\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html"},"aria-required property")," and\nindicate that it is a required field and use the validation message for input\nerrors.")),(0,n.kt)("h2",null,"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/forms/labels/"},"W3C Web Tutorial: Labeling Controls"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/forms/instructions/"},"W3C Web Tutorial: Form Instructions"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_3_1"},"1.3.1 Info and Relationships"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},"1.3.1"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_3_1"},"3.3.1 Error Identification"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html"},"3.3.1"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_3_2"},"3.3.2 Labels and Instructions"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"},"3.3.2"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_3_3"},"3.3.3 Error Suggestion"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html"},"3.3.3"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#4_1_2"},"4.1.2 Name, Role, Value"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html"},"4.1.2"),")")))),(0,n.kt)("h2",null,"Accessibility testing"),(0,n.kt)("p",null,"Automated, manual and screen reader accessibility verification test has been\nperformed on the number input React Carbon component.\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"WCAG 2.1 Level A and AA success criteria")," issues\nhave been identified and the list of open accessibility violations is available\nin the Carbon Component GitHub repository."),(0,n.kt)("h3",null,"Automated test"),(0,n.kt)(p,{mdxType:"Row"},(0,n.kt)(h,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(s.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(s.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(s.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,n.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(s.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(s.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.2 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"DAP test:"),(0,n.kt)("br",null),"- No violations")))))))}b.isMDXComponent=!0}}]);