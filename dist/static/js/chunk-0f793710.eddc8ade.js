(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f793710"],{"0e6e":function(e,a,t){"use strict";t("ba1e")},"2fa6":function(e,a,t){"use strict";t("cfee")},3523:function(e,a,t){"use strict";t("9c16")},3667:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("br"),t("FormDrawer",{ref:"searchForm",attrs:{size:"medium",rules:e.rules,"is-handle":!0,"search-data":e.searchData,"search-form":e.searchForm,"search-handle":e.searchHandle}}),t("el-row",{attrs:{gutter:20}},e._l(e.goodsData,(function(a){return t("el-col",{key:a.id,attrs:{sm:12,md:8,lg:4}},[t("card-menu",{staticClass:"card_menu",staticStyle:{height:"20rem"},nativeOn:{click:function(t){return e.goodsDailog(a)}},scopedSlots:e._u([{key:"card_fun",fn:function(){return[t("div",{staticClass:"goods"},[t("div",{staticClass:"title"},[t("h3",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(a.goodsName))]),t("p",[e._v(e._s(a.goodsCode))]),t("p",[t("span",{staticStyle:{color:"tomato"}},[e._v(e._s(a.goodsPrice))])])]),t("div",{staticClass:"demo-image__lazy"},[t("el-image",{attrs:{src:a.goodsImg,fit:e.fit,lazy:""}},[t("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[t("i",{staticClass:"el-icon-picture-outline"})])])],1)])]},proxy:!0}],null,!0)})],1)})),1),t("el-dialog",{attrs:{title:"商品信息",visible:e.dialogVisible,width:"60%","before-close":e.handleClose,"custom-class":"goods_dialog"},on:{"update:visible":function(a){e.dialogVisible=a}}},[[t("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"基本信息",name:"first"}},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{sm:24,md:16,lg:15}},[t("goods-form",{ref:"goodsDate",attrs:{"drawer-data":e.fromData,isdisabled:e.isdisabled}})],1),t("el-col",{attrs:{sm:24,md:7,lg:8}},[t("img-upload",{attrs:{"image-url":e.imgurl}})],1)],1)],1),t("el-tab-pane",{attrs:{label:"库存与成本",name:"second"}},[t("goods-table",{attrs:{columns:e.columns,"table-data":e.tableData,width:140}})],1),t("el-tab-pane",{attrs:{label:"历史销售",name:"third"}},[t("goods-table",{attrs:{columns:e.saleColumns,"table-data":e.saleTableData,width:140}})],1),t("el-tab-pane",{attrs:{label:"历史采购",name:"fourth"}},[t("goods-table",{attrs:{columns:e.instockColumns,"table-data":e.instockTableData,width:140}})],1)],1),t("el-divider"),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-row",{attrs:{gutter:12}},["first"===e.activeName?[t("el-button",{on:{click:function(a){e.dialogVisible=!1}}},[e._v("取 消")]),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isdisabled,expression:"isdisabled"}],attrs:{type:"primary"},on:{click:function(a){return e.edit()}}},[e._v("修改")]),t("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isdisabled,expression:"!isdisabled"}],attrs:{type:"primary"},on:{click:function(a){return e.editSubmit()}}},[e._v("提交")])]:e._e()],2)],1)]],2)],1)},l=[],o=t("5530"),s=t("1da1"),n=(t("96cf"),t("b0c0"),t("b775"));function i(){return Object(n["a"])({url:"/goods/goodslist",method:"get"})}var c=function(e){var a=new FormData;return a.append("file",e.raw,e.name),Object(n["a"])({url:"upload/uploadimg",method:"post",dataType:"form-data",data:a})},d=t("39ec"),u=t("a95f"),p=t("9cb0"),m=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("FormDrawer",{ref:"validateForm",attrs:{size:"medium","label-width":"90px",rules:e.rules,"is-handle":e.isHandle,"search-data":e.searchData,"search-form":e.searchForm,"search-handle":e.searchHandle,isdisabled:e.isdisabled}})],1)},h=[],f={components:{FormDrawer:d["a"]},props:{isdisabled:{type:Boolean,default:!0},drawerData:{type:Object,default:function(){}},typeOptions:{type:Array,default:function(){return[]}}},data:function(){var e=this;return{searchData:{},isHandle:!1,searchForm:[{type:"input",label:"ID:",prop:"id",placeholder:"请输入ID"},{type:"input",label:"商品编号:",prop:"goodsCode",placeholder:"请编辑内容"},{type:"input",label:"商品名称:",prop:"goodsName",placeholder:"请编辑内容"},{type:"input",label:"基础定价:",prop:"goodsPrice",placeholder:"请编辑内容"},{type:"dateTime",label:"创建日期",prop:"createdAt",placeholder:"请输入日期"}],searchHandle:[{label:"提交",type:"primary",handle:function(){return e.searchHandleForm()}},{label:"重置",type:"primary",handle:function(){return e.reset()}}],rules:{id:[{required:!0,message:"请输入ID",trigger:"blur"}],goodsCode:[{required:!0,message:"请输入商品编号",trigger:"blur"}],goodsName:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goodsPrice:[{required:!0,message:"请输入基础定价",trigger:"blur"}],createdAt:[{required:!0,message:"请输入创建日期",trigger:"blur"}]}}},watch:{drawerData:{immediate:!0,handler:function(){this.searchData=Object.assign({},Object(o["a"])({},this.drawerData))}}},methods:{actionChange:function(){console.log("change事件")},searchHandleForm:function(){return this.$refs["validateForm"].submitForm()},reset:function(){this.searchData={},this.$refs["validateForm"].resetForm()},clearValidate:function(){this.$refs["validateForm"].clear()}}},b=f,g=t("2877"),v=Object(g["a"])(b,m,h,!1,null,null,null),y=v.exports,D=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h4",{staticStyle:{margin:"0"}},[e._v("图片修改：")]),t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","auto-upload":!1,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-change":e.upload}},[e.img?t("img",{staticClass:"avatar",attrs:{src:e.img}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)},_=[],w=(t("d3b7"),t("3ca3"),t("ddb0"),t("2b3d"),t("9861"),{props:{imageUrl:{type:String,default:""}},data:function(){return{img:this.imageUrl}},watch:{imageUrl:{immediate:!0,handler:function(){this.img=this.imageUrl}}},methods:{handleAvatarSuccess:function(e,a){this.imageUrl=URL.createObjectURL(a.raw)},beforeAvatarUpload:function(e){return console.log(e),e},upload:function(e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("文件",e.width),t.next=3,c(e);case 3:r=t.sent,console.log(r),a.img=r.url;case 6:case"end":return t.stop()}}),t)})))()}}}),x=w,k=(t("2fa6"),Object(g["a"])(x,D,_,!1,null,null,null)),O=k.exports,F={components:{CardMenu:p["a"],GoodsTable:u["a"],GoodsForm:y,ImgUpload:O,FormDrawer:d["a"]},data:function(){var e=this;return{dialogVisible:!1,activeName:"first",fromData:{},imgurl:"",searchData:{name:"",age:"",date:""},searchForm:[{type:"input",label:"姓名：",prop:"name",placeholder:"请输入姓名"},{type:"input",label:"年龄:",prop:"age",placeholder:"请输入年龄"},{type:"date",label:"日期:",prop:"date",placeholder:"请选择日期"}],searchHandle:[{label:"查询",type:"primary",handle:function(){return e.searchHandleForm()}},{label:"重置",type:"primary",handle:function(){return e.reset()}},{label:"新增",type:"primary",handle:function(){return e.add()}}],rules:{name:[{message:"请输入姓名",trigger:"blur"},{min:2,max:4,message:"长度在 2 到 4 个字符",trigger:"blur"}]},isdisabled:!0,goodsData:[],columns:[{prop:"index",lable:"序号"},{prop:"color",lable:"颜色"},{prop:"size",lable:"尺码"},{prop:"inventory",lable:"库存数"},{prop:"price",lable:"库存成本价"},{prop:"turnover",lable:"库存流水"}],tableData:[{index:1,color:"黄黑色",inventory:"310",price:"100.1",turnover:"查看",size:"m"},{index:2,color:"黄色",inventory:"310",price:"100.1",turnover:"查看",size:"m"}],saleColumns:[{prop:"index",lable:"序号"},{prop:"goodsCode",lable:"商品编号"},{prop:"saleNum",lable:"销售数量"},{prop:"salePrice",lable:"价格"},{prop:"date",lable:"日期"}],saleTableData:[{index:1,goodsCode:"GOOODS2016_011",saleNum:"10",salePrice:"499",date:"2021-11-26 02:55:50"},{index:2,goodsCode:"GOOODS2016_011",saleNum:"10",salePrice:"499",date:"2021-11-26 02:55:50"}],instockColumns:[{prop:"index",lable:"序号"},{prop:"goodsCode",lable:"商品编号"},{prop:"intockNum",lable:"采购数量"},{prop:"salePrice",lable:"价格"},{prop:"date",lable:"日期"}],instockTableData:[{index:1,goodsCode:"GOOODS2016_011",intockNum:"10",salePrice:"499",date:"2021-11-26 02:55:50"},{index:2,goodsCode:"GOOODS2016_011",intockNum:"10",salePrice:"499",date:"2021-11-26 02:55:50"}]}},watch:{dialogVisible:{immediate:!0,handler:function(){this.isdisabled=this.dialogVisible}}},created:function(){this.getGoodslist()},methods:{getGoodslist:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,i();case 2:t=a.sent,console.log("%%%",t),e.goodsData=t.data;case 5:case"end":return a.stop()}}),a)})))()},searchHandleForm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log("查询"),a.next=3,e.$refs["searchForm"].submitForm();case 3:t=a.sent,console.log(t);case 5:case"end":return a.stop()}}),a)})))()},reset:function(){console.log("重置")},handleClose:function(e){e()},handleClick:function(e,a){console.log(e,a)},goodsDailog:function(e){this.dialogVisible=!0,console.log("item数据",e),this.fromData=e,this.imgurl=e.goodsImg},edit:function(e){this.isdisabled=!this.isdisabled,this.fromData=Object(o["a"])(Object(o["a"])({},this.fromData),{},{createdAt:new Date})},editSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$refs["goodsDate"].searchHandleForm();case 2:t=a.sent,console.log(t),t&&(e.$nextTick((function(){e.$refs["goodsDate"].clearValidate()})),e.dialogVisible=!1);case 5:case"end":return a.stop()}}),a)})))()},add:function(){console.log("新增")}}},C=F,$=(t("0e6e"),Object(g["a"])(C,r,l,!1,null,"2d7c87e2",null));a["default"]=$.exports},"39ec":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-form",{ref:"ruleForm",staticClass:"form",attrs:{model:e.searchData,rules:e.rules,size:e.size,inline:e.isInline,"label-width":e.labelWidth}},[e._l(e.searchForm,(function(a){return t("el-form-item",{key:a.prop,attrs:{label:a.label,prop:a.prop}},["input"===a.type?t("el-input",{attrs:{disabled:e.isdisabled,clearable:"",placeholder:a.placeholder},model:{value:e.searchData[a.prop],callback:function(t){e.$set(e.searchData,a.prop,t)},expression:"searchData[item.prop]"}}):e._e(),"textarea"===a.type?t("el-input",{attrs:{type:a.type,autosize:{minRows:2,maxRows:4},clearable:"",placeholder:a.placeholder},model:{value:e.searchData[a.prop],callback:function(t){e.$set(e.searchData,a.prop,t)},expression:"searchData[item.prop]"}}):e._e(),"select"===a.type?t("el-select",{attrs:{disabled:e.isdisabled,clearable:"",placeholder:a.placeholder},on:{change:function(t){return a.change(e.searchData[a.prop])}},model:{value:e.searchData[a.prop],callback:function(t){e.$set(e.searchData,a.prop,t)},expression:"searchData[item.prop]"}},e._l(a.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e(),"radio"===a.type?t("el-radio-group",{model:{value:e.searchData[a.prop],callback:function(t){e.$set(e.searchData,a.prop,t)},expression:"searchData[item.prop]"}},e._l(a.radios,(function(a){return t("el-radio",{key:a.value,attrs:{label:a.value}},[e._v(e._s(a.label))])})),1):e._e(),"radioButton"===a.type?t("el-radio-group",{on:{change:function(t){a.change&&a.change(e.searchData[a.prop])}},model:{value:e.searchData[a.prop],callback:function(t){e.$set(e.searchData,a.prop,t)},expression:"searchData[item.prop]"}},e._l(a.radios,(function(a){return t("el-radio-button",{key:a.value,attrs:{label:a.value}},[e._v(e._s(a.label))])})),1):e._e(),"checkbox"===a.type?t("el-checkbox-group",{model:{value:e.searchData[a.prop],callback:function(t){e.$set(e.searchData,a.prop,t)},expression:"searchData[item.prop]"}},e._l(a.checkboxs,(function(a){return t("el-checkbox",{key:a.value,attrs:{label:a.value}},[e._v(e._s(a.label))])})),1):e._e(),"date"===a.type?t("el-date-picker",{attrs:{disabled:"",placeholder:a.placeholder},model:{value:e.searchData[a.prop],callback:function(t){e.$set(e.searchData,a.prop,t)},expression:"searchData[item.prop]"}}):e._e(),"time"===a.type?t("el-time-select",{attrs:{type:""},model:{value:e.searchData[a.prop],callback:function(t){e.$set(e.searchData,a.prop,t)},expression:"searchData[item.prop]"}}):e._e(),"dateTime"===a.type?t("el-date-picker",{attrs:{type:"datetime",disabled:""},model:{value:e.searchData[a.prop],callback:function(t){e.$set(e.searchData,a.prop,t)},expression:"searchData[item.prop]"}}):e._e(),"switch"===a.type?t("el-switch",{model:{value:e.searchData[a.prop],callback:function(t){e.$set(e.searchData,a.prop,t)},expression:"searchData[item.prop]"}}):e._e()],1)})),e.isHandle?t("div",{staticStyle:{display:"inline-block"}},[t("el-form-item",e._l(e.searchHandle,(function(a){return t("el-button",{key:a.label,attrs:{type:a.type,size:a.size||e.size},on:{click:function(e){return a.handle()}}},[e._v(e._s(a.label))])})),1)],1):e._e()],2)},l=[],o=(t("d3b7"),{props:{isdisabled:{type:Boolean,default:!1},isHandle:{type:Boolean,default:!0},labelWidth:{type:String,default:"60px"},size:{type:String,default:"medium"},isInline:{type:Boolean,default:!0},searchForm:{type:Array,default:function(){return[]}},searchHandle:{type:Array,default:function(){return[]}},searchData:{type:Object,default:function(){}},rules:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{submitForm:function(){var e=this;return new Promise((function(a,t){e.$refs["ruleForm"].validate((function(t){t?a(e.searchData):(console.log("error submit!!"),a(!1))}))}))},resetForm:function(){this.$refs["ruleForm"].resetFields()},clear:function(){this.$refs["ruleForm"].clearValidate()}}}),s=o,n=(t("94cd"),t("2877")),i=Object(n["a"])(s,r,l,!1,null,null,null);a["a"]=i.exports},"94cd":function(e,a,t){"use strict";t("acfe")},"9c16":function(e,a,t){},"9cb0":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-card",{staticStyle:{height:"100%",margin:".1rem .2rem"},attrs:{shadow:e.shadow,"body-style":{padding:"1% 10px",cursor:"pointer"}},scopedSlots:e._u([""!==e.header?{key:"header",fn:function(){return[t("div",{staticClass:"clearfix"},[t("span",[e._v(e._s(e.header))]),t("el-button",{staticClass:"button",attrs:{type:"text"}},[e._v(e._s(e.button))])],1)]},proxy:!0}:null],null,!0)},[e._t("card_fun")],2)},l=[],o={props:{shadow:{type:String,default:"hover"},header:{type:String,default:""},button:{type:String,default:""}}},s=o,n=(t("3523"),t("2877")),i=Object(n["a"])(s,r,l,!1,null,"42dfd4f9",null);a["a"]=i.exports},a95f:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,size:e.size,height:"252"}},e._l(e.columns,(function(a){var r=a.prop,l=a.lable;return t("el-table-column",{key:l,attrs:{fixed:"index"===r,prop:r,label:l,width:e.width}})})),1)},l=[],o=(t("a9e3"),{props:{size:{type:String,default:"small"},width:{type:Number,default:120},columns:{type:Array,default:function(){return[]}},tableData:{type:Array,default:function(){return[]}}},data:function(){return{}}}),s=o,n=t("2877"),i=Object(n["a"])(s,r,l,!1,null,"63bb4546",null);a["a"]=i.exports},acfe:function(e,a,t){},ba1e:function(e,a,t){},cfee:function(e,a,t){}}]);