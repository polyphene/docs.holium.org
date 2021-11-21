"use strict";(self.webpackChunkholium_docs=self.webpackChunkholium_docs||[]).push([[791],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5128:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Setting up",sidebar_position:1},s="Setting up",p={unversionedId:"get-started/setting-up",id:"get-started/setting-up",isDocsHomePage:!1,title:"Setting up",description:"In this tutorial, we will go through the creation of a Holium project that is tested, documented and deployed.",source:"@site/docs/get-started/setting-up.md",sourceDirName:"get-started",slug:"/get-started/setting-up",permalink:"/get-started/setting-up",editUrl:"https://github.com/polyphene/holium-docs/blob/main/docs/get-started/setting-up.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Setting up",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Design",permalink:"/about-holium/design"},next:{title:"Create a project",permalink:"/get-started/create-a-project"}},u=[{value:"Tutorial repository",id:"tutorial-repository",children:[]},{value:"Install",id:"install",children:[]},{value:"Embedded help",id:"embedded-help",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up"},"Setting up"),(0,a.kt)("p",null,"In this tutorial, we will go through the creation of a Holium project that is tested, documented and deployed."),(0,a.kt)("h2",{id:"tutorial-repository"},"Tutorial repository"),(0,a.kt)("p",null,"This tutorial is geared towards first-time users who want detailed instructions on how to go from scratch to\na working Holium project. As we aim to get used to all facets of the Holium CLI we choose a simple use case."),(0,a.kt)("p",null,"The sources are available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polyphene/getting-started"},"GitHub")," and you may get started\nby cloning it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/polyphene/getting-started.git\n$ cd getting-started\n")),(0,a.kt)("p",null,"The tutorial data are sourced from ",(0,a.kt)("a",{parentName:"p",href:"https://www.kaggle.com/neuromusic/avocado-prices"},"Kaggle"),". They represent figures on\navocado sales in the United States. The goal of our transformation pipeline is to create a data\npipeline to get numbers of avocado type sales for a given year."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"To be able to follow this tutorial you will first need to install Rust on your machine.\nNewcomers to the Rust toolchain may find ",(0,a.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"instructions")," for its\ninstallation through a one-line script."),(0,a.kt)("p",null,"Once Rust is installed we will be able to leverage ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/"},(0,a.kt)("inlineCode",{parentName:"a"},"cargo"))," to\ninstall the Holium CLI. Execute the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cargo install holium\n")),(0,a.kt)("p",null,"Check the version to verify installation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ holium -V\nHolium 1.0.0\n")),(0,a.kt)("p",null,"You will also need ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),". It will prove useful to version our Holium project and the different pipelines\nwe build in it. You can find about installation procedure ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com"},"here"),"."),(0,a.kt)("h2",{id:"embedded-help"},"Embedded help"),(0,a.kt)("p",null,"For all commands and subcommands of the CLI, the ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," argument will provide\ndetailed help information about their usage."),(0,a.kt)("p",null,"Tab-completion scripts are also available for multiple shells (",(0,a.kt)("em",{parentName:"p"},"bash"),", ",(0,a.kt)("em",{parentName:"p"},"powershell"),", ",(0,a.kt)("em",{parentName:"p"},"zsh"),",\u2026)\nand can be printed with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"generate-shell-completions")," or its alias ",(0,a.kt)("inlineCode",{parentName:"p"},"gsc"),".\nJust evaluate the script for your favorite shell as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'eval "$(holium gsc bash)"\n')),(0,a.kt)("p",null,"At this point, everything is in place to start operating the protocol."))}d.isMDXComponent=!0}}]);