"use strict";(self.webpackChunkholium_docs=self.webpackChunkholium_docs||[]).push([[901],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5550:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:1},l="Install",c={unversionedId:"reference/sdk/rust-sdk/install",id:"reference/sdk/rust-sdk/install",isDocsHomePage:!1,title:"Install",description:"The Rust SDK is the Rust implementation of the SDK specifications.",source:"@site/docs/reference/sdk/rust-sdk/install.md",sourceDirName:"reference/sdk/rust-sdk",slug:"/reference/sdk/rust-sdk/install",permalink:"/reference/sdk/rust-sdk/install",editUrl:"https://github.com/polyphene/holium-docs/blob/main/docs/reference/sdk/rust-sdk/install.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Specifications",permalink:"/reference/sdk/specifications"},next:{title:"Usage",permalink:"/reference/sdk/rust-sdk/usage"}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install"},"Install"),(0,i.kt)("p",null,"The Rust SDK is the Rust implementation of the ",(0,i.kt)("a",{parentName:"p",href:"/reference/sdk/specifications"},"SDK specifications"),"."),(0,i.kt)("p",null,"It leverages ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/reference/procedural-macros.html"},"procedural macros")," to be embedded\nas seamlessly as possible in a codebase."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Rust target")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add rust compilation target for ",(0,i.kt)("inlineCode",{parentName:"li"},"wasm32-unknown-unknown"),".")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Cargo file")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure Cargo.toml with ",(0,i.kt)("inlineCode",{parentName:"li"},'crate-type = ["cdylib"]')),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"holium-rs-sdk")," as a dependency.")))}f.isMDXComponent=!0}}]);