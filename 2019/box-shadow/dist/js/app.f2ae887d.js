(function(e){function t(t){for(var a,l,i=t[0],s=t[1],c=t[2],d=0,h=[];d<i.length;d++)l=i[d],n[l]&&h.push(n[l][0]),n[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],a=!0,i=1;i<o.length;i++){var s=o[i];0!==n[s]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=o[0]))}return e}var a={},n={app:0},r=[];function l(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=a,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(o,a,function(t){return e[t]}.bind(null,a));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("f291")},"3cbd":function(e,t,o){},bcd5:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-container",[o("el-main",[o("el-row",[o("el-col",{attrs:{span:10}},[o("div",{staticClass:"settings"},[o("el-form",{attrs:{"label-width":"150px"}},[o("slider",{attrs:{label:"box-width",max:1e3},model:{value:e.box.width,callback:function(t){e.$set(e.box,"width",t)},expression:"box.width"}}),o("slider",{attrs:{label:"box-height",max:1e3},model:{value:e.box.height,callback:function(t){e.$set(e.box,"height",t)},expression:"box.height"}}),o("form-item",{attrs:{label:"box 颜色选择"}},[o("el-color-picker",{model:{value:e.box.backgroundColor,callback:function(t){e.$set(e.box,"backgroundColor",t)},expression:"box.backgroundColor"}})],1),o("slider",{attrs:{label:"h-shadow",max:50,required:!0},model:{value:e.shadowSetting.hShadow,callback:function(t){e.$set(e.shadowSetting,"hShadow",t)},expression:"shadowSetting.hShadow"}}),o("slider",{attrs:{label:"v-shadow",max:50,required:!0},model:{value:e.shadowSetting.vShadow,callback:function(t){e.$set(e.shadowSetting,"vShadow",t)},expression:"shadowSetting.vShadow"}}),o("slider",{attrs:{label:"blur",max:50},model:{value:e.shadowSetting.blur,callback:function(t){e.$set(e.shadowSetting,"blur",t)},expression:"shadowSetting.blur"}}),o("slider",{attrs:{label:"spread",max:50},model:{value:e.shadowSetting.spread,callback:function(t){e.$set(e.shadowSetting,"spread",t)},expression:"shadowSetting.spread"}}),o("form-item",{attrs:{label:"shadow 颜色选择"}},[o("el-color-picker",{attrs:{"show-alpha":""},model:{value:e.shadowSetting.color,callback:function(t){e.$set(e.shadowSetting,"color",t)},expression:"shadowSetting.color"}})],1),o("form-item",{attrs:{label:"设置 inset"}},[o("el-switch",{attrs:{"active-text":"inset","inactive-text":"default"},model:{value:e.shadowSetting.isInset,callback:function(t){e.$set(e.shadowSetting,"isInset",t)},expression:"shadowSetting.isInset"}})],1)],1)],1)]),o("el-col",{attrs:{span:14}},[o("div",{staticClass:"box",style:[e.boxBaseStyle,e.boxShadowStyle]})])],1)],1)],1)},n=[],r=o("3de4"),l=o("ade7"),i=o.n(l),s=(o("0a7c"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form-item",{attrs:{label:e.label,required:e.required}},[o("el-slider",{attrs:{value:e.value,max:e.max,"show-input":""},on:{input:e.handleChange}})],1)}),c=[],u=(o("608d"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form-item",{attrs:{label:e.label,required:e.required}},[e._t("default")],2)}),d=[],h={props:{label:String,required:Boolean}},b=h,p=o("7ee3"),f=Object(p["a"])(b,u,d,!1,null,null,null),w=f.exports,x={props:{max:{type:Number},value:{type:Number},label:{type:String},required:{type:Boolean}},methods:{handleChange:function(e){this.$emit("input",e)}},components:{FormItem:w}},g=x,m=Object(p["a"])(g,s,c,!1,null,null,null),v=m.exports;r["default"].use(i.a);var S={data:function(){return{box:{width:200,height:200,backgroundColor:"#409EFF"},shadowSetting:{hShadow:10,vShadow:10,blur:5,spread:5,color:"rgba(0, 0, 0, 1)",isInset:!1}}},computed:{boxBaseStyle:function(){var e=this.box,t=e.width,o=e.height,a=e.backgroundColor;return{width:t+"px",height:o+"px",backgroundColor:a}},boxShadowStyle:function(){var e=this.shadowSetting,t=e.hShadow,o=e.vShadow,a=e.blur,n=e.spread,r=e.color,l=e.isInset;return{boxShadow:"".concat(t,"px ").concat(o,"px ").concat(a,"px ").concat(n,"px ").concat(r," ").concat(l?"inset":"")}}},components:{Slider:v,FormItem:w}},y=S,k=(o("e5cd"),Object(p["a"])(y,a,n,!1,null,null,null));t["a"]=k.exports},e5cd:function(e,t,o){"use strict";var a=o("3cbd"),n=o.n(a);n.a}});
//# sourceMappingURL=app.f2ae887d.js.map