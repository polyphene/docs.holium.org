"use strict";(self.webpackChunkholium_docs=self.webpackChunkholium_docs||[]).push([[273],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(o),h=r,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return o?n.createElement(d,a(a({ref:t},u),{},{components:o})):n.createElement(d,a({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1756:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],s={sidebar_label:"What is Holium",sidebar_position:1},l="What is Holium",c={unversionedId:"about-holium/what-is-holium",id:"about-holium/what-is-holium",isDocsHomePage:!1,title:"What is Holium",description:"Holium is an open source protocol dedicated to the management of data massively connected through atomic",source:"@site/docs/about-holium/what-is-holium.md",sourceDirName:"about-holium",slug:"/about-holium/what-is-holium",permalink:"/docs.holium.org/about-holium/what-is-holium",editUrl:"https://github.com/polyphene/holium-docs/blob/main/docs/about-holium/what-is-holium.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"What is Holium",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/docs.holium.org/"},next:{title:"Design principles",permalink:"/docs.holium.org/about-holium/design-principles"}},u=[],p={toc:u};function m(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-holium"},"What is Holium"),(0,i.kt)("p",null,"Holium is an open source protocol dedicated to the management of data massively connected through atomic\ntransformations."),(0,i.kt)("p",null,"Whether you are working on data lineage challenges, want to share your data pre-processing workload in a robust way, or\ncollaborate on ETL/ELT flows, ",(0,i.kt)("strong",{parentName:"p"},"it is often more flexible to consider data not on the basis of its content, but on the\nbasis of the conditions of its generation and its connections to others.")),(0,i.kt)("p",null,"Data itself, while it may be the effective purpose of any data flow, reveals little information about its history and\nits relationship to other data. This limitation often forces it to be supplemented by metadata systems whose complex\nmanagement rapidly absorbs ever greater efforts. With the diversification and increasing volume of data being exploited,\nalong with our growing need for collaboration, these models now constitute an effective limit to our ability to\nunderstand and leverage data."),(0,i.kt)("p",null,"Beyond the performance gains achieved at various points in our infrastructures, only a radically different approach can\nmake it possible to overcome this problem in the long term. Historically, the computer science community has continually\ndevised ways not only to represent data, but simultaneously and above all to represent their connections, progressively\nevolving from relational databases to increasingly complex graph structures. But while up to now the focus has always\nbeen on adding connections between datasets after they have been created, a second approach consists in considering the\ndata primarily in terms of its relations to others and the conditions of its generation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Born in the wake of the new Web3 protocols, Holium fully implements this approach. This protocol acknowledges the fact\nthat all data transformation graphs precede the actual computation of transformations. By considering the connection of\ndata as the rule and no longer the exception, it makes it possible to think of any data in terms of its relationship to\nothers and no longer solely in terms of its content.")))}m.isMDXComponent=!0}}]);