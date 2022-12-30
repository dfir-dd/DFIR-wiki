"use strict";(self.webpackChunkdfir_playbooks_and_wiki=self.webpackChunkdfir_playbooks_and_wiki||[]).push([[2466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Incident Response Playbooks Collection",l={unversionedId:"playbooks/README",id:"playbooks/README",title:"Incident Response Playbooks Collection",description:"This collection aims to help organizations and individuals by preparing or handling certain known types of security incidents. All playbooks will follow the same structure which will be outline below. Feel free to use, modify and share this work as well as help increase and enhance it. Every support is welcome!",source:"@site/docs/playbooks/README.md",sourceDirName:"playbooks",slug:"/playbooks/",permalink:"/docs/playbooks/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/playbooks/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Impress",permalink:"/docs/misc/impress"},next:{title:"Incident Response Playbook - Business Mail Compromise",permalink:"/docs/playbooks/BEC/business-mail-compromise"}},s={},p=[{value:"Structure",id:"structure",level:2},{value:"Formats",id:"formats",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"incident-response-playbooks-collection"},"Incident Response Playbooks Collection"),(0,r.kt)("p",null,"This collection aims to help organizations and individuals by preparing or handling certain known types of security incidents. All playbooks will follow the same structure which will be outline below. Feel free to use, modify and share this work as well as help increase and enhance it. Every support is welcome!"),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"All playbooks follow this structure. Please always bear in mind that this is not necessary in a chronological order. More often steps have to be done in parallel to react accordingly. Always use the information shared only as a baseline and tweak your response plan accordingly."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Metadata"),"\nThis section will include all necessary metadata fields to map and classify the playbook.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ID")),(0,r.kt)("td",{parentName:"tr",align:null},"IR-",(0,r.kt)("inlineCode",{parentName:"td"},"language code>"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"<incrementing ID>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Title")),(0,r.kt)("td",{parentName:"tr",align:null},"Title of the playbook")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Last Modified")),(0,r.kt)("td",{parentName:"tr",align:null},"Date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Status")),(0,r.kt)("td",{parentName:"tr",align:null},"Placeholder/Draft/Final")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Created")),(0,r.kt)("td",{parentName:"tr",align:null},"Date")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Description"),"\nShort description of the attack type and common information that is good to know.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Safeguards"),"\nThis step will contain measures to prevent or slow the attack which need to be implemented beforehand")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Preparation"),"\nThis step will include all necessary actions that help to prepare or even defend against a certain incident. Including preventive tasks, best practices, log sources, documentation and much more. This information will be specific to the described incident case and will not include general tasks like building your incident team etc. since this will be equal in every incident case.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Detection / Discovery"),"\nThe detection step describes known hard indicators to verify the incident and give it the proper attention. This includes actions to verify the scope of the incident.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Containment / Mitigation"),"\nContainment is about reducing the scope or impact of the security incident as an immediate action while preserving information that may be needed later on during investigation of the incident or legislative steps.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Analysis"),"\nThe analysis step focuses on actions to investigate the incident and better understand the overall impact, the attack chain and other crucial information needed for proper remediation efforts. These steps will often require properly trained personnel that might even need to be pulled in from a third party.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Remediation"),"\nWhile remediation the aim is to remove the incident causing circumstances and implement measures to decrease the overall residual risk for the society and the organization.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Recovery"),"\nDuring recovery all efforts will be summed up to re-create the original state of the affected systems and data and to re-enable the critical business path as well as regular business in corresponding time frames.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Post Morten"),"\nThis step includes tips to learn and improve the incident handling process for the future."))),(0,r.kt)("h2",{id:"formats"},"Formats"),(0,r.kt)("p",null,"It is planned to design the playbooks according to multiple standards and formats wherefore the structure may be changed to match the target framework. (E.g. Hive templates). Anyway will the structure  be used throughout every human-readable format."),(0,r.kt)("p",null,"Focus lays in PDF and Markdown Playbooks but other sources may be included."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Currently planned:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-admonish",metastring:'info title="Planned output formats for Playbook"',info:!0,title:'"Planned',output:!0,formats:!0,for:!0,'Playbook"':!0},"* PDF\n* Markdown\n* Hive Template\n* COPS\n")))}d.isMDXComponent=!0}}]);