var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function l(){return d(" ")}function f(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function g(t){m=t}const $=[],b=[],y=[],v=[],x=Promise.resolve();let w=!1;function _(t){y.push(t)}let k=!1;const A=new Set;function C(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];g(e),R(e.$$)}for(g(null),$.length=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];A.has(e)||(A.add(e),e())}y.length=0}while($.length);for(;v.length;)v.pop()();w=!1,k=!1,A.clear()}}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const E=new Set;let D;function O(t,e){t&&t.i&&(E.delete(t),t.i(e))}function T(t,e,n,r){if(t&&t.o){if(E.has(t))return;E.add(t),D.c.push((()=>{E.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function j(t,n,c){const{fragment:i,on_mount:s,on_destroy:a,after_update:u}=t.$$;i&&i.m(n,c),_((()=>{const n=s.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(_)}function B(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&($.push(t),w||(w=!0,x.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,o,c,i,s,u,d=[-1]){const l=m;g(e);const f=o.props||{},p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let h=!1;if(p.ctx=c?c(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&L(e,t)),n})):[],p.update(),h=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();o.intro&&O(e.$$.fragment),j(e,o.target,o.anchor),C()}g(l)}class N{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class P{static currentAudioPermission(){return navigator.permissions.query({name:"microphone"}).then((t=>t.state))}constructor(){this.buffer=null,this.stream=null,this.mediaRecorder=null,this.context=new AudioContext}async init(){this.stream=await navigator.mediaDevices.getUserMedia({audio:!0}),this.mediaRecorder=new MediaRecorder(this.stream);const t=this;this.mediaRecorder.ondataavailable=async e=>{const n=new Blob([e.data],{type:"audio/ogg; codecs=opus"}),r=await n.arrayBuffer(),o=await this.context.decodeAudioData(r);for(let t=0;t<o.numberOfChannels;t++)Array.prototype.reverse.call(o.getChannelData(t));this.buffer=o,t.play()}}record(){this.mediaRecorder.start()}stop(){this.mediaRecorder.stop()}play(){const t=this.context.createBufferSource();t.buffer=this.buffer,t.connect(this.context.destination),t.start(0)}destroy(){this.stream.getTracks().forEach((t=>t.stop()))}}function q(e){let n,r,o;return{c(){n=u("button"),n.textContent="▶️"},m(t,c){s(t,n,c),r||(o=f(n,"click",e[4]),r=!0)},p:t,d(t){t&&a(n),r=!1,o()}}}function S(e){let n,o,c,m,g,$,b=e[1]&&q(e);return{c(){n=u("button"),o=d(e[0]),c=l(),b&&b.c(),m=d(""),p(n,"class","no-select svelte-ar3ejk")},m(t,r){s(t,n,r),i(n,o),s(t,c,r),b&&b.m(t,r),s(t,m,r),g||($=[f(n,"mousedown",e[2]),f(n,"touchstart",e[2],{passive:!0}),f(n,"mouseup",e[3]),f(n,"touchend",e[3],{passive:!0})],g=!0)},p(t,[e]){1&e&&h(o,t[0]),t[1]?b?b.p(t,e):(b=q(t),b.c(),b.m(m.parentNode,m)):b&&(b.d(1),b=null)},i:t,o:t,d(t){t&&a(n),t&&a(c),b&&b.d(t),t&&a(m),g=!1,r($)}}}const U="Press & hold to record";function Y(t,e,n){let{recorder:r}=e,o=U,c=!1;return t.$$set=t=>{"recorder"in t&&n(5,r=t.recorder)},[o,c,async function(){r||(n(5,r=new P),await r.init()),r.record(),n(0,o="Release to play back")},function(){n(0,o=U),r.stop(),n(1,c=!0)},function(){r.play()},r]}class H extends N{constructor(t){super(),M(this,t,Y,S,c,{recorder:5})}}function z(t){let e,n;return e=new H({props:{recorder:t[2]}}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,r){j(e,t,r),n=!0},p(t,n){const r={};4&n&&(r.recorder=t[2]),e.$set(r)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function F(e){let n;return{c(){n=u("div"),n.innerHTML="You have denied this page access to the microphone.<br/>\n      Depending on your browser, You can change that configuration in page settings or the URL bar.<br/>\n      Reload the page afterwards for the changes to take effect.",p(n,"class","warning svelte-18v3cb3")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}function G(e){let n,r,o,c,d,p,h,m;return{c(){n=u("p"),n.textContent="The recoreded audio data will be processed locally and not leave your browser.",r=l(),o=u("p"),o.textContent="Access to your microphone is required.",c=l(),d=u("p"),p=u("button"),p.textContent="Ok, ask me for microphone usage permission!"},m(t,a){s(t,n,a),s(t,r,a),s(t,o,a),s(t,c,a),s(t,d,a),i(d,p),h||(m=f(p,"click",e[3]),h=!0)},p:t,i:t,o:t,d(t){t&&a(n),t&&a(r),t&&a(o),t&&a(c),t&&a(d),h=!1,m()}}}function I(e){let n,r;return{c(){n=u("div"),r=d(e[0]),p(n,"class","error svelte-18v3cb3")},m(t,e){s(t,n,e),i(n,r)},p(t,e){1&e&&h(r,t[0])},i:t,o:t,d(t){t&&a(n)}}}function J(t){let e,n,o,c,d,f,h,m,g;const $=[I,G,F,z],b=[];function y(t,e){return t[0]?0:"prompt"===t[1]?1:"denied"===t[1]?2:"granted"===t[1]?3:-1}return~(d=y(t))&&(f=b[d]=$[d](t)),{c(){e=u("main"),n=u("div"),o=u("h1"),o.textContent="Reverse Audio",c=l(),f&&f.c(),h=l(),m=u("div"),p(o,"class","svelte-18v3cb3"),p(n,"id","info"),p(e,"class","svelte-18v3cb3")},m(t,r){s(t,e,r),i(e,n),i(n,o),i(n,c),~d&&b[d].m(n,null),i(e,h),i(e,m),g=!0},p(t,[e]){let o=d;d=y(t),d===o?~d&&b[d].p(t,e):(f&&(D={r:0,c:[],p:D},T(b[o],1,1,(()=>{b[o]=null})),D.r||r(D.c),D=D.p),~d?(f=b[d],f?f.p(t,e):(f=b[d]=$[d](t),f.c()),O(f,1),f.m(n,null)):f=null)},i(t){g||(O(f),g=!0)},o(t){T(f),g=!1},d(t){t&&a(e),~d&&b[d].d()}}}function K(t,e,n){let r,o,c;return P.currentAudioPermission().then((t=>{n(1,o=t)})),[r,o,c,function(){n(2,c=new P),c.init().then((()=>n(1,o="granted"))).catch((t=>{n(0,r=t)}))}]}window.oncontextmenu=t=>t.preventDefault();return new class extends N{constructor(t){super(),M(this,t,K,J,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map