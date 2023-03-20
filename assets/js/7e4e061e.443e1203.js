"use strict";(self.webpackChunkholium_docs=self.webpackChunkholium_docs||[]).push([[882],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9083:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={sidebar_position:2},l="Usage",s={unversionedId:"reference/sdk/rust-sdk/usage",id:"reference/sdk/rust-sdk/usage",isDocsHomePage:!1,title:"Usage",description:"Build a module",source:"@site/docs/reference/sdk/rust-sdk/usage.md",sourceDirName:"reference/sdk/rust-sdk",slug:"/reference/sdk/rust-sdk/usage",permalink:"/docs.holium.org/reference/sdk/rust-sdk/usage",editUrl:"https://github.com/polyphene/holium-docs/blob/main/docs/reference/sdk/rust-sdk/usage.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/docs.holium.org/reference/sdk/rust-sdk/install"},next:{title:"Limitations",permalink:"/docs.holium.org/reference/sdk/rust-sdk/constraints"}},c=[{value:"Build a module",id:"build-a-module",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]}],d={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("h2",{id:"build-a-module"},"Build a module"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"#[holium_bindgen]")," procedural macro on every public functions and structures that should be exported."),(0,a.kt)("li",{parentName:"ul"},"Compile using ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo build --target wasm32-unknown-unknown --release")),(0,a.kt)("li",{parentName:"ul"},"Wasm bytecode can be found in ",(0,a.kt)("inlineCode",{parentName:"li"},"<crate_root>/target/wasm32-unknown-unknown/release/<crate_name>.wasm"))),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adds ",(0,a.kt)("inlineCode",{parentName:"li"},"Serialize")," & ",(0,a.kt)("inlineCode",{parentName:"li"},"Deserialize")," derive code for exported structure"),(0,a.kt)("li",{parentName:"ul"},"Implements ",(0,a.kt)("inlineCode",{parentName:"li"},"GenerateNode")," trait to all exported structures"),(0,a.kt)("li",{parentName:"ul"},"Generates wrapper function around exported function that will handle input payload and output payload")),(0,a.kt)("p",null,"In execution :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Receive data node as CBOR serialized from the host"),(0,a.kt)("li",{parentName:"ul"},"Deserialize data node and fuse it with key node to generate input payload"),(0,a.kt)("li",{parentName:"ul"},"Run client function with corresponding arguments"),(0,a.kt)("li",{parentName:"ul"},"Convert return value to data node"),(0,a.kt)("li",{parentName:"ul"},"Serialize data node as CBOR and send it to the host")))}p.isMDXComponent=!0}}]);