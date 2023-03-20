"use strict";(self.webpackChunkholium_docs=self.webpackChunkholium_docs||[]).push([[945],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2906:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_label:"Design principles",sidebar_position:2},l="Design principles",c={unversionedId:"about-holium/design-principles",id:"about-holium/design-principles",isDocsHomePage:!1,title:"Design principles",description:"To turn its vision a reality, Holium has few but strong design principles:",source:"@site/docs/about-holium/design-principles.md",sourceDirName:"about-holium",slug:"/about-holium/design-principles",permalink:"/docs.holium.org/about-holium/design-principles",editUrl:"https://github.com/polyphene/holium-docs/blob/main/docs/about-holium/design-principles.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Design principles",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is Holium",permalink:"/docs.holium.org/about-holium/what-is-holium"},next:{title:"Design",permalink:"/docs.holium.org/about-holium/design"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-principles"},"Design principles"),(0,o.kt)("p",null,"To turn its vision a reality, Holium has few but strong ",(0,o.kt)("strong",{parentName:"p"},"design principles"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data-first")," approach \u2013 Data is and will increasingly be at the heart of our best AI and decision-making. Only if it\nis backed by the most appropriate tools may we make the most of it. That is why data deserves a framework fully\ndedicated to its manipulation, freed from event handling and their side effects. In Holium, data is treated as a\nfirst-class citizen, and functions that manipulate it are pure functions which strictly ingest and transform data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unified")," approach \u2013 Data and assets used for their transformation are adequate and sufficient to represent\nthemselves. The Holium framework never introduces any element dependent on an owner nor a location, but in the end\nonly relies on data self-description. This is the best way to achieve a vision in which data is described solely in\nterms of its content and relations to other data, never to external metadata.")),(0,o.kt)("p",null,"These design principles translate to and are complemented by ",(0,o.kt)("strong",{parentName:"p"},"development principles"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Free")," and ",(0,o.kt)("strong",{parentName:"li"},"open")," protocol \u2013 It can be transformative to move towards a model where what matters is no longer who\nhas the data, but what we do with it. To enable such a shift, ",(0,o.kt)("em",{parentName:"li"},"how")," we do it should not be restrained. That is why\nHolium fully subscribes to the FOSS principles, and supports the development of a protocol rather than locked-in\nplatforms."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modular")," \u2013 Holium adopts a layered architecture with a clear division of concerns. The protocol is primarily made,\nat its core, by minimal future-proof specifications on how to represent data and transformations, how they are\nconnected and how to uniquely identify these components. On top of this technologically neutral core, additional\nlayers should easily interconnect and provide features they are liable for: orchestration, logging, tracing,\nmonitoring, security and compliance, discovery, economic incentive,\u2026"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unified")," \u2013 Unifying representations and uses with a protocol is generally ",(0,o.kt)("em",{parentName:"li"},"a priori")," not in the hand of its\narchitects. They will not decide if a protocol ultimately fosters unification, but its design can help. That is why\nHolium always promotes content-based and deterministic identifiers, keeping in good sight a future of Web3-enabled\ndata manipulations and trustless frameworks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data-as-code")," \u2013 Manipulating data at scale requires elements of rigor, so that the development of the framework\nshould always ensure its consistency with the DaC principles."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Think big")," \u2013 The best chances of designing a future-proof solution will only be met by, at relevant times, thinking\nbig. Some primary design consideration ",(0,o.kt)("em",{parentName:"li"},"de facto")," chronologically places Holium in the present and the future.\nTherefore, in situations of choice, too much effort should not be put on enforcing compatibility with obsolete\ntechnologies, and guiding principles should always favor compatibility with Web3-native components.")))}d.isMDXComponent=!0}}]);