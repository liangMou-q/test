(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b4e8"],{bee4:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"商品名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.goodsName,callback:function(t){e.$set(e.listQuery,"goodsName",t)},expression:"listQuery.goodsName"}}),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"Type",clearable:""},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.typeOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.value}})})),1),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:e.handleFilter},model:{value:e.listQuery.sort,callback:function(t){e.$set(e.listQuery,"sort",t)},expression:"listQuery.sort"}},e._l(e.sortOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),1),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" 搜索 ")]),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" 导出 ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"max-height":"515",border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{label:"ID",prop:"id",sortable:"custom",align:"center",width:"80","class-name":e.getSortClass("id")},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.id))])]}}])}),a("el-table-column",{attrs:{label:"盘点日期",width:"160px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(e.parseTime(l.createdAt)))])]}}])}),a("el-table-column",{attrs:{label:"盘点编号",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.inventoryCode))])]}}])}),a("el-table-column",{attrs:{label:"商品编号",width:"140px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.goodsCode))]),a("el-tag",[e._v(e._s(l.type))])]}}])}),a("el-table-column",{attrs:{label:"商品名称",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.goodsName))])]}}])}),a("el-table-column",{attrs:{label:"入库数量",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.inQuantity))])]}}])}),a("el-table-column",{attrs:{label:"月初数量",width:"110px"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.monthBegin))])]}}])}),a("el-table-column",{attrs:{label:"销售数量",align:"center",width:"110px"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.sales))])]}}])}),a("el-table-column",{attrs:{label:"退货","class-name":"status-col",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(" "+e._s(l.back))])]}}])}),a("el-table-column",{attrs:{label:"月末数量",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",[e._v(e._s(l.monthEnd))])]}}])}),a("el-table-column",{attrs:{label:"Actions",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row,n=t.$index;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleDetail(l)}}},[e._v(" 查看 ")]),a("el-popconfirm",{attrs:{title:"确认删除"},on:{onConfirm:function(t){return e.handleDelete(l,n)}}},["deleted"!=l.status?a("el-button",{staticStyle:{"margin-left":"5%"},attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v(" 删除 ")]):e._e()],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getInventoryList}}),a("el-drawer",{attrs:{size:"40%",title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("FormDrawer",{ref:"dataForm",attrs:{"drawer-data":e.drawerData,"is-handle":e.isHandle,isdisabled:e.disabled,"type-options":e.typeOptions,"search-form":e.searchForm}})],1)],1)},n=[],i=(a("a434"),a("d3b7"),a("3ca3"),a("ddb0"),a("f3a3")),o=a("ee69"),s=[{value:"衣服",label:"衣服"},{value:"裤子",label:"裤子"},{value:"鞋子",label:"鞋子"},{value:"袜子",label:"袜子"}],r={name:"ComplexTable",mixins:[o["a"]],data:function(){return{searchForm:[{type:"input",label:"ID:",prop:"id",placeholder:"请输入ID"},{type:"input",label:"职员编号:",prop:"inventoryCode",placeholder:"请编辑内容"},{type:"input",label:"商品编号:",prop:"goodsCode",placeholder:"请编辑内容"},{type:"input",label:"入库数量:",prop:"inQuantity",placeholder:"请编辑内容"},{type:"input",label:"月初数量:",prop:"monthBegin",placeholder:"请编辑内容"},{type:"input",label:"售卖数量:",prop:"sales",placeholder:"请编辑内容"},{type:"input",label:"退货数量:",prop:"back",placeholder:"请编辑内容"},{type:"input",label:"月末数量:",prop:"monthEnd",placeholder:"请编辑内容"},{type:"dateTime",label:"盘点日期",prop:"createdAt",placeholder:"请输入日期"},{type:"select",label:"类型:",prop:"type",options:this.typeOptions,change:this.actionChange,placeholder:"请选择类型"}],tableKey:0,disabled:!0,isHandle:!1,typeOptions:s,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",downloadLoading:!1}},created:function(){this.getInventoryList()},methods:{getInventoryList:function(){this.getList(i["c"])},handleFilter:function(){this.listQuery.page=1,this.getInventoryList()},handleDelete:_.throttle((function(e,t){this.$notify({title:"Success",message:"删除成功！！",type:"success",duration:2e3}),this.list.splice(t,1)}),5e3),handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-b25b1de2"),a.e("chunk-2125b98f")]).then(a.bind(null,"4bf8")).then((function(t){var a=["ID","盘点人编码","商品编码","商品名称","类型","入库数量","月初数量","售卖数量","退货数量","月末数量"],l=["id","inventoryCode","goodsCode","goodsName","type","inQuantity","monthBegin","sales","back","monthEnd"],n=e.formatJson(l);t.export_json_to_excel({header:a,data:n,filename:"table-list"}),e.downloadLoading=!1}))}}},d=r,c=a("2877"),p=Object(c["a"])(d,l,n,!1,null,null,null);t["default"]=p.exports}}]);