(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{285:function(t,e,n){"use strict";var o=n(18);e.a={data:function(){return{scrollTimout:null}},computed:{content:function(){return this.$route.params.slug&&this._content[this.$route.params.slug]||{}}},head:function(){return{title:(this.meta&&this.meta.title||"Docs")+" - BootstrapVue"}},mounted:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll(),this.$root.$emit("setTOC",this.readme)},updated:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll()},beforeDestroy:function(){this.$root.$emit("setTOC","")},methods:{focusScroll:function(){var t=this,e=this.$route.hash;this.$nextTick(function(){var n=void 0;e&&(n=t.$el.querySelector('[id="'+e.replace("#","")+'"]'),t.scrollIntoView(n)),n||(n=t.$el.querySelector("h1")),n&&(n.tabIndex=-1,n.focus())})},scrollIntoView:function(t){var e=this;if(t){var n=document.scrollingElement||document.documentElement||document.body;this.scrollTimeout=setTimeout(function(){Object(o.d)(n,Object(o.c)(t)-70,100),e.scrollTimeout=null},100)}}}}},302:function(t,e,n){var o={"./changelog/README.md":[332,66],"./contributing/README.md":[331,65]};function r(t){var e=o[t];return e?n.e(e[1]).then(function(){var t=n(e[0]);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})}):Promise.resolve().then(function(){var e=new Error('Cannot find module "'+t+'".');throw e.code="MODULE_NOT_FOUND",e})}r.keys=function(){return Object.keys(o)},r.id=302,t.exports=r},512:function(t,e,n){"use strict";n.r(e);var o=n(4),r=n.n(o),s=n(9),i=n.n(s),u=n(39),c={mixins:[n(285).a],layout:"docs",validate:function(t){var e=t.params;return Boolean(u.c[e.slug])},asyncData:function(){var t=i()(r.a.mark(function t(e){var o,s,i=e.params;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e=i.slug,n(302)("./"+e+"/README.md");case 2:return o=t.sent,s=u.c[i.slug],t.abrupt("return",{readme:o.default,meta:s});case 5:case"end":return t.stop()}var e},t,this)}));return function(e){return t.apply(this,arguments)}}()},a=n(7),l=Object(a.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"bd-content",domProps:{innerHTML:this._s(this.readme)}})])},[],!1,null,null,null);e.default=l.exports}}]);