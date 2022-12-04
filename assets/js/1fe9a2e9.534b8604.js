"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[3409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return r?a.createElement(g,s(s({ref:t},p),{},{components:r})):a.createElement(g,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={slug:"popular-nodejs-pattern-and-tools-to-reconsider",date:"2022-08-02T10:00",hide_table_of_contents:!0,title:"Popular Node.js patterns and tools to re-consider",authors:["goldbergyoni"],tags:["node.js","express","nestjs","fastify","passport","dotenv","supertest","practica","testing"]},s="Popular Node.js tools and patterns to re-consider",i={permalink:"/blog/popular-nodejs-pattern-and-tools-to-reconsider",editUrl:"https://github.com/practicajs/practica/tree/main/docs/blog/pattern-to-reconsider/index.md",source:"@site/blog/pattern-to-reconsider/index.md",title:"Popular Node.js patterns and tools to re-consider",description:"Node.js is maturing. Many patterns and frameworks were embraced - it's my belief that developers' productivity dramatically increased in the past years. One downside of maturity is habits - we now reuse existing techniques more often. How is this a problem?",date:"2022-08-02T10:00:00.000Z",formattedDate:"August 2, 2022",tags:[{label:"node.js",permalink:"/blog/tags/node-js"},{label:"express",permalink:"/blog/tags/express"},{label:"nestjs",permalink:"/blog/tags/nestjs"},{label:"fastify",permalink:"/blog/tags/fastify"},{label:"passport",permalink:"/blog/tags/passport"},{label:"dotenv",permalink:"/blog/tags/dotenv"},{label:"supertest",permalink:"/blog/tags/supertest"},{label:"practica",permalink:"/blog/tags/practica"},{label:"testing",permalink:"/blog/tags/testing"}],readingTime:21.09,hasTruncateMarker:!0,authors:[{name:"Yoni Goldberg",title:"Practica.js core maintainer",url:"https://github.com/goldbergyoni",imageURL:"https://github.com/goldbergyoni.png",key:"goldbergyoni"}],frontMatter:{slug:"popular-nodejs-pattern-and-tools-to-reconsider",date:"2022-08-02T10:00",hide_table_of_contents:!0,title:"Popular Node.js patterns and tools to re-consider",authors:["goldbergyoni"],tags:["node.js","express","nestjs","fastify","passport","dotenv","supertest","practica","testing"]},prevItem:{title:"Is Prisma better than your casual ORM?",permalink:"/blog/is-prisma-better-than-your-casual-orm"},nextItem:{title:"Practica.js v0.0.1 is alive",permalink:"/blog/practica-is-alive"}},l={authorsImageUrls:[void 0]},c=[{value:"TOC - Patterns to reconsider",id:"toc---patterns-to-reconsider",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Node.js is maturing. Many patterns and frameworks were embraced - it's my belief that developers' productivity dramatically increased in the past years. One downside of maturity is habits - we now reuse existing techniques more often. How is this a problem?"),(0,o.kt)("p",null,"In his novel book 'Atomic Habits' the author James Clear states that:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Mastery is created by habits. However, sometimes when we\'re on auto-pilot performing habits, we tend to slip up... Just being we are gaining experience through performing the habits does not mean that we are improving. We actually go backwards on the improvement scale with most habits that turn into auto-pilot". In other words, practice makes perfect, and bad practices make things worst')),(0,o.kt)("p",null,"We copy-paste mentally and physically things that we are used to, but these things are not necessarily right anymore. Like animals who shed their shells or skin to adapt to a new reality, so the Node.js community should constantly gauge its existing patterns, discuss and change"),(0,o.kt)("p",null,"Luckily, unlike other languages that are more committed to specific design paradigms (Java, Ruby) - Node is a house of many ideas. In this community, I feel safe to question some of our good-old tooling and patterns. The list below contains my personal beliefs, which are brought with reasoning and examples. "),(0,o.kt)("p",null,"Are those disruptive thoughts surely correct? I'm not sure. There is one things I'm sure about though - For Node.js to live longer, we need to encourage critics, focus our loyalty on innovation, and keep the discussion going. The outcome of this discussion is not \"don't use this tool!\" but rather becoming familiar with other techniques that, ",(0,o.kt)("em",{parentName:"p"},"under some circumstances")," might be a better fit"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Animals and frameworks shed their skin",src:r(1233).Z,width:"600",height:"400"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The True Crab's exoskeleton is hard and inflexible, he must shed his restrictive exoskeleton to grow and reveal the new roomier shell")),(0,o.kt)("h2",{id:"toc---patterns-to-reconsider"},"TOC - Patterns to reconsider"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Dotenv"),(0,o.kt)("li",{parentName:"ol"},"Calling a service from a controller"),(0,o.kt)("li",{parentName:"ol"},"Nest.js dependency injection for all classes"),(0,o.kt)("li",{parentName:"ol"},"Passport.js"),(0,o.kt)("li",{parentName:"ol"},"Supertest"),(0,o.kt)("li",{parentName:"ol"},"Fastify utility decoration"),(0,o.kt)("li",{parentName:"ol"},"Logging from a catch clause"),(0,o.kt)("li",{parentName:"ol"},"Morgan logger"),(0,o.kt)("li",{parentName:"ol"},"NODE_ENV")))}u.isMDXComponent=!0},1233:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/crab-161f2b8e5ab129c2a175920691a845c0.webp"}}]);