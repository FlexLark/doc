"use strict";(self.webpackChunklark_doc=self.webpackChunklark_doc||[]).push([[711],{9331:(e,r,a)=>{a.r(r),a.d(r,{default:()=>m});a(6540);var t=a(8774),s=a(1312),i=a(1213),n=a(6266),c=a(781),l=a(1107),d=a(4848);function h(e){let{year:r,posts:a}=e;const s=(0,n.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.A,{as:"h3",id:r,children:r}),(0,d.jsx)("ul",{children:a.map((e=>{return(0,d.jsx)("li",{children:(0,d.jsxs)(t.A,{to:e.metadata.permalink,children:[(r=e.metadata.date,s.format(new Date(r)))," - ",e.metadata.title]})},e.metadata.date);var r}))})]})}function o(e){let{years:r}=e;return(0,d.jsx)("section",{className:"margin-vert--lg",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,d.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,d.jsx)(h,{...e})},r)))})})})}function m(e){let{archive:r}=e;const a=(0,s.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),t=(0,s.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),n=function(e){const r=e.reduce(((e,r)=>{const a=r.metadata.date.split("-")[0],t=e.get(a)??[];return e.set(a,[r,...t])}),new Map);return Array.from(r,(e=>{let[r,a]=e;return{year:r,posts:a}}))}(r.blogPosts);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.be,{title:a,description:t}),(0,d.jsxs)(c.A,{children:[(0,d.jsx)("header",{className:"hero hero--primary",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(l.A,{as:"h1",className:"hero__title",children:a}),(0,d.jsx)("p",{className:"hero__subtitle",children:t})]})}),(0,d.jsx)("main",{children:n.length>0&&(0,d.jsx)(o,{years:n})})]})]})}}}]);