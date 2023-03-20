"use strict";(self.webpackChunkholium_docs=self.webpackChunkholium_docs||[]).push([[732],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6207:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_label:"Add a shaper",sidebar_position:5},l="Add shaper",c={unversionedId:"get-started/add-shaper",id:"get-started/add-shaper",isDocsHomePage:!1,title:"Add shaper",description:"Shapers are nodes usually uniquely connected as head nodes, meaning that they receive",source:"@site/docs/get-started/add-shaper.md",sourceDirName:"get-started",slug:"/get-started/add-shaper",permalink:"/docs.holium.org/get-started/add-shaper",editUrl:"https://github.com/polyphene/holium-docs/blob/main/docs/get-started/add-shaper.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Add a shaper",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Add a transformation",permalink:"/docs.holium.org/get-started/add-transformations"},next:{title:"Connect objects",permalink:"/docs.holium.org/get-started/connect-objects"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-shaper"},"Add shaper"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Shapers")," are nodes usually uniquely connected as head nodes, meaning that they receive\ndata inputs but will output no data to another node. Developers can define the structure of output\ndata when creating the source node."),(0,o.kt)("p",null,"We will connect it to our transformation afterwards."),(0,o.kt)("p",null,"To create a new shaper to our project we may use the sub-command ",(0,o.kt)("inlineCode",{parentName:"p"},"holium shaper create"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ holium shaper create sales_results --json-schema \'\n        {\n            "type": "array",\n            "prefixItems": [{\n                "type": "array",\n                "items": {\n                    "type": "array",\n                    "prefixItems": [{\n                        "type": "string"\n                    }, {\n                        "type": "number"\n                    }]\n                }\n            }]\n        }\n        \'\nnew object created: sales_results\n')),(0,o.kt)("p",null,"Once it is done we are able to list all of our shapers with the sub-command ",(0,o.kt)("inlineCode",{parentName:"p"},"holium shaper list"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ holium shaper list\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \n\u2502 NAME          \u2502 JSON Schema                  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 sales_results \u2502 {                            \u2502\n\u2502               \u2502   "type": "array",           \u2502\n\u2502               \u2502   "prefixItems": [           \u2502\n\u2502               \u2502     {                        \u2502\n\u2502               \u2502       "type": "array",       \u2502\n\u2502               \u2502       "items": {             \u2502\n\u2502               \u2502         "type": "array",     \u2502\n\u2502               \u2502         "prefixItems": [     \u2502\n\u2502               \u2502           {                  \u2502\n\u2502               \u2502             "type": "string" \u2502\n\u2502               \u2502           },                 \u2502\n\u2502               \u2502           {                  \u2502\n\u2502               \u2502             "type": "number" \u2502\n\u2502               \u2502           }                  \u2502\n\u2502               \u2502         ]                    \u2502\n\u2502               \u2502    ...                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,o.kt)("p",null,"With this last object created, we have all objects necessary for us to build our pipeline. To finalize the\npipeline build the final step is to connect all previously elements together."))}d.isMDXComponent=!0}}]);