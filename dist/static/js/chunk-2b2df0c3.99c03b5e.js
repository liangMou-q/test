(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b2df0c3"],{1600:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"商品名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.goodsName,callback:function(t){e.$set(e.listQuery,"goodsName",t)},expression:"listQuery.goodsName"}}),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"Type",clearable:""},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.typeOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.value}})})),1),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:e.handleFilter},model:{value:e.listQuery.sort,callback:function(t){e.$set(e.listQuery,"sort",t)},expression:"listQuery.sort"}},e._l(e.sortOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),1),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" 搜索 ")]),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(" 新增 ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" 导出 ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"max-height":"515",border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{label:"ID",prop:"id",sortable:"custom",align:"center",width:"80","class-name":e.getSortClass("id")},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.id))])]}}])}),a("el-table-column",{attrs:{label:"入库日期",width:"160px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e.parseTime(n.inData)))])]}}])}),a("el-table-column",{attrs:{label:"入库编号",width:"160px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.inCode))])]}}])}),a("el-table-column",{attrs:{label:"进货人",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.purchaser))])]}}])}),a("el-table-column",{attrs:{label:"商品编号",width:"210px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.goodsCode))]),a("br"),a("el-tag",[e._v(e._s(n.type))])]}}])}),a("el-table-column",{attrs:{label:"商品名称",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.goodsName))])]}}])}),a("el-table-column",{attrs:{label:"入库数量",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.inQuantity))])]}}])}),a("el-table-column",{attrs:{label:"入库价格",width:"110px"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.inPrice))])]}}])}),a("el-table-column",{attrs:{label:"供应商编码",width:"160px"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.supCode))])]}}])}),a("el-table-column",{attrs:{label:"Actions",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row,l=t.$index;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleDetail(n)}}},[e._v(" 查看 ")]),a("el-popconfirm",{attrs:{title:"确认删除"},on:{onConfirm:function(t){return e.handleDelete(n,l)}}},["deleted"!=n.status?a("el-button",{staticStyle:{"margin-left":"5%"},attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v(" 删除 ")]):e._e()],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getStocklist}}),a("el-drawer",{attrs:{size:"40%",title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("FormDrawer",{ref:"dataForm",attrs:{"drawer-data":e.drawerData,"type-options":e.typeOptions,"search-form":e.searchForm},on:{submit:e.submit}})],1)],1)},l=[],i=a("5530"),r=a("1da1"),o=(a("96cf"),a("a9e3"),a("a434"),a("d3b7"),a("3ca3"),a("ddb0"),a("d43b")),s=a("ee69"),c=a("fdbb"),u={name:"ComplexTable",mixins:[s["a"]],data:function(){return{searchForm:[{type:"input",label:"ID:",prop:"id",placeholder:"请输入ID"},{type:"input",label:"商品编号:",prop:"goodsCode",placeholder:"请编辑内容"},{type:"input",label:"入库数量:",prop:"inQuantity",placeholder:"请编辑内容"},{type:"input",label:"入库价格",prop:"inPrice",placeholder:"请输入日期"},{type:"input",label:"进货人:",prop:"purchaser",placeholder:"请编辑内容"},{type:"input",label:"供应商:",prop:"supCode",placeholder:"请编辑内容"}],tableKey:2,sortOptions:[{label:"升序",key:"+id"},{label:"降序",key:"-id"}],temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogStatus:"",downloadLoading:!1}},created:function(){this.getStocklist()},methods:{getStocklist:function(){this.getList(o["c"])},handleFilter:function(){this.listQuery.page=1,this.getStocklist()},submit:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("create"!==t.dialogStatus||!e){a.next=11;break}return n=Object.assign({inCode:Object(c["a"])("IN"),inData:new Date},Object(i["a"])({},e)),console.log(n),a.next=5,t.getLatestmsg(n.inCode,n.goodsCode,void 0,Number(n.inQuantity));case 5:if(l=a.sent,!l){a.next=9;break}return a.next=9,t.add(o["b"],n);case 9:a.next=12;break;case 11:"detail"===t.dialogStatus&&e&&alert(1);case 12:case"end":return a.stop()}}),a)})))()},handleDelete:_.throttle((function(e,t){this.$notify({title:"Success",message:"删除成功！！",type:"success",duration:2e3}),this.list.splice(t,1)}),5e3),handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-b25b1de2"),a.e("chunk-2125b98f")]).then(a.bind(null,"4bf8")).then((function(t){var a=["ID","售卖日期","销售编号","职员编号","商品编号","商品名称","销售数量","销售价格"],n=["id","createdAt","saleCode","staffCode","goodsCode","goodsName","saleNum","salePrice"],l=e.formatJson(n);t.export_json_to_excel({header:a,data:l,filename:"table-list"}),e.downloadLoading=!1}))}}},d=u,p=a("2877"),f=Object(p["a"])(d,n,l,!1,null,null,null);t["default"]=f.exports},d43b:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return r}));var n=a("b775");function l(e){return Object(n["a"])({url:"/stock/stocknum",method:"get",params:{days:e}})}function i(e){return Object(n["a"])({url:"/stock/getstock",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/stock/insertstock",method:"post",data:e})}}}]);