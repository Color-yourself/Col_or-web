(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0920bb32"],{2564:function(t,e,i){"use strict";i("2892")},2892:function(t,e,i){},"630b":function(t,e,i){"use strict";i("f2c6")},eca7:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail-panel"},[i("color-panel",{class:t.isBigScreen?"big-panel":"",attrs:{id:"h5Panel",visible:t.visible,"allow-drag-to-max":!1,"data-dark-inherit-background-color":""},on:{"update:visible":function(e){t.visible=e},"before-close":t.beforeClose,closed:t.closed}},[i("color-title-bar",{attrs:{slot:"header",title:t.$t("aboutVersion"),align:"center"},slot:"header"}),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"detail-inner",attrs:{"loading-text":t.$t("loading")}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t.otaDetail.secondContents&&t.otaDetail.secondContents.length?i("div",{staticClass:"version-panel__content",on:{touchmove:function(t){t.stopPropagation()}}},[t._l(t.otaDetail.secondContents,(function(e,a){return[i("div",{key:e.title+"-"+a,staticClass:"update-item"},[i("div",{staticClass:"update-item__title"},[t._v(t._s(e.title))]),i("div",{staticClass:"update-item__info"},[t._v(t._s(e.content))]),e.link?i("div",{staticClass:"update-item__link",domProps:{innerHTML:t._s(e.link)}}):t._e()])]}))],2):i("color-empty-tip",{staticClass:"empty-tip",staticStyle:{height:"200px"},attrs:{title:t.$t("networkError"),subtitle:t.$t("tryAgainLater"),type:"connection"}})],1)])],1)],1)},n=[],o=i("5530"),s=(i("d3b7"),i("2f62")),l=i("c14d"),c=i("a8d4");function d(t){return Object(c["b"])("/descriptionInfo",t)}var r={props:{checking:{type:Boolean,default:!1}},data:function(){return{visible:!1,loading:!1,otaDetail:{}}},computed:Object(o["a"])(Object(o["a"])({},Object(s["e"])(["otaData"])),{},{isBigScreen:function(){return this.otaData&&this.otaData.isLargeScreen}}),watch:{checking:function(t){var e=this;if(this.visible=t,this.otaDetail={},t){this.loading=!0;var i={params:JSON.stringify({mode:this.otaData.mode})};d(i).then((function(t){if(200===t.responseCode&&t.body)try{e.otaDetail=JSON.parse(t.body)}catch(i){console.log(i)}})).catch((function(t){console.log(t)})).finally((function(){e.loading=!1}))}}},mounted:function(){window.handleClosePanel=this.handleClosePanel},methods:{beforeClose:function(){l["a"].callMethod("JSCommandMethod","showAppBar",null)},closed:function(){this.$emit("update:checking",!1),l["a"].callMethod("JSCommandMethod","showStatus",null)},handleClosePanel:function(){this.beforeClose(),this.$emit("update:checking",!1),setTimeout((function(){l["a"].callMethod("JSCommandMethod","showStatus",null)}),500)}}},u=r,h=(i("630b"),i("2564"),i("2877")),f=Object(h["a"])(u,a,n,!1,null,"5b8aff5a",null);e["default"]=f.exports},f2c6:function(t,e,i){}}]);