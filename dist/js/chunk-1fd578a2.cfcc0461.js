(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fd578a2"],{"35a8":function(t,e,i){"use strict";var n=i("87ee"),s=i.n(n);s.a},7471:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("flex-column",[t.loading?[i("fluro-page-preloader",{attrs:{contain:""}})]:i("tabset",{attrs:{justified:!0},scopedSlots:t._u([{key:"menuprefix",fn:function(){return["edit"==t.context&&t.$vuetify.breakpoint.mdAndUp?void 0:t._e()]},proxy:!0}])},[i("tab",{attrs:{heading:"Card Details"}},[t._t("default",[i("flex-row",[i("v-flex",{staticClass:"main",attrs:{xs12:"",sm8:""}},[i("flex-column-body",{staticStyle:{background:"#fafafa"}},[i("v-container",[i("constrain",{attrs:{sm:""}},[t.reference?[i("fluro-panel",[i("fluro-panel-title",{staticClass:"border-bottom"},[i("v-layout",{attrs:{"align-center":""}},[i("v-flex",[i("h5",[t._v(t._s(t.title))])]),i("v-flex",{attrs:{shrink:""}},[t.$fluro.access.canViewItem(t.reference)?i("v-btn",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"ma-0",attrs:{small:"",content:"View",icon:""},on:{click:function(e){return t.$fluro.global.view(t.reference,!0)}}},[i("fluro-icon",{attrs:{icon:"external-link"}})],1):t._e(),t.$fluro.access.canEditItem(t.reference)?i("v-btn",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"ma-0",attrs:{small:"",content:"Edit",icon:""},on:{click:function(e){return t.$fluro.global.edit(t.reference,!0)}}},[i("fluro-icon",{attrs:{icon:"pencil"}})],1):t._e()],1)],1)],1),i("fluro-panel-body",{staticStyle:{padding:"0"}},[i("flex-column-body",{staticStyle:{"max-height":"50vh"}},[i("fluro-content-view",{attrs:{id:t.reference,definition:t.reference.definition,type:t.reference._type}})],1)],1)],1)]:[i("h3",{attrs:{margin:""}},[t._v(t._s(t.title))]),i("fluro-content-form-field",{attrs:{"form-fields":t.formFields,outline:t.showOutline,options:t.options,field:t.referenceItemField},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],t.definition&&t.definition.fields.length?[i("fluro-content-form",{attrs:{options:t.options,fields:t.definition.fields},model:{value:t.model.data,callback:function(e){t.$set(t.model,"data",e)},expression:"model.data"}})]:t._e(),t.model.forms&&t.model.forms.length?[t.receivedForms&&t.receivedForms.length?i("v-input",{staticClass:"no-flex"},[i("v-label",[t._v("Received "+t._s(t.receivedForms.length)+" Form Responses")]),i("p",{staticClass:"help-block"},[t._v("These forms have not yet been submitted")]),i("list-group",t._l(t.receivedForms,function(e){return i("list-group-item",[i("strong",[i("fluro-icon",{attrs:{type:"form"}}),t._v(" "+t._s(e.form.title)+"\n                                                    ")],1),i("div",{staticClass:"sm"},[i("span",{staticClass:"status-label active"},[i("fluro-icon",{attrs:{icon:"check"}}),t._v(" Received ")],1),t._v(" "+t._s(t._f("formatDate")(e.received,"h:mma ddd MMM YYYY"))+" "),i("span",{staticClass:"muted"},[t._v(t._s(t._f("timeago")(e.received)))])])])}),1)],1):t._e(),t.awaitingForms&&t.awaitingForms.length?i("v-input",{staticClass:"no-flex"},[i("v-label",[t._v("Awaiting "+t._s(t.awaitingForms.length)+" Form Responses")]),i("p",{staticClass:"help-block"},[t._v("These forms have not yet been submitted")]),i("list-group",t._l(t.awaitingForms,function(e){return i("list-group-item",{scopedSlots:t._u([{key:"right",fn:function(){return[i("v-btn",{attrs:{small:"",color:"primary",loading:t.resending[e.form._id]},on:{click:function(i){return t.resend(e)}}},[t._v("\n                                                            Resend\n                                                            "),i("fluro-icon",{attrs:{right:"",icon:"paper-plane"}})],1)]},proxy:!0}],null,!0)},[i("strong",[i("fluro-icon",{attrs:{type:"form"}}),t._v(" "+t._s(e.form.title)+"\n                                                    ")],1),i("div",{staticClass:"sm"},[t._v("\n                                                        Sent "+t._s(t._f("timeago")(e.sent))+" - "),i("span",{staticClass:"status-label draft"},[i("fluro-icon",{attrs:{icon:"clock"}}),t._v(" Awaiting form response")],1)])])}),1)],1):t._e()]:t._e(),[t._l(t.model.taskLists,function(e,n){return i("fluro-task-list",{attrs:{state:t.model.state,definition:t.definition},on:{remove:function(e){return t.removeTaskList(n)},input:t.dispatchUpdate},model:{value:t.model.taskLists[n],callback:function(e){t.$set(t.model.taskLists,n,e)},expression:"model.taskLists[index]"}})}),i("span",{staticClass:"horizontal-rule"}),i("v-btn",{staticClass:"ml-0",on:{click:function(e){return t.addTaskList()}}},[t._v("\n                                            Add Task List\n                                            "),i("fluro-icon",{attrs:{right:"",icon:"plus"}})],1)]],2)],1)],1)],1),i("v-flex",{staticClass:"sidebar",attrs:{xs12:"",sm4:""}},[i("flex-column-body",[i("v-container",[i("fluro-content-form-field",{attrs:{"form-fields":t.formFields,outline:t.showOutline,options:t.options,field:t.fieldHash.dueDate},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}}),i("fluro-content-form-field",{attrs:{"form-fields":t.formFields,outline:t.showOutline,options:t.options,field:t.stateField},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}}),i("v-input",{staticClass:"no-flex"},[i("v-label",[t._v("Key Contacts")]),i("p",{staticClass:"help-block"},[t._v("This card does not reference a contact, Here you can specify who should be sent Automated SMS and Mailouts as this card progresses")]),i("fluro-content-form-field",{attrs:{"form-fields":t.formFields,showLabel:!1,outline:t.showOutline,options:t.options,field:t.fieldHash.contacts},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),i("v-input",{staticClass:"no-flex"},[i("v-label",[t._v("Assigned To")]),i("p",{staticClass:"help-block"},[t._v("Assign who is in charge of this card")]),i("fluro-content-form-field",{attrs:{"form-fields":t.formFields,showLabel:!1,outline:t.showOutline,options:t.options,field:t.fieldHash.assignedTo},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1)],1)],1)],1)],1)])],2)],1)],2)},s=[],o=i("7af4"),a=o["a"],r=(i("35a8"),i("2877")),l=i("6544"),c=i.n(l),d=i("8336"),u=i("a523"),f=i("0e8f"),m=i("b675"),p=i("24c9"),v=i("a722"),h=Object(r["a"])(a,n,s,!1,null,"030b1035",null);e["default"]=h.exports;c()(h,{VBtn:d["a"],VContainer:u["a"],VFlex:f["a"],VInput:m["a"],VLabel:p["a"],VLayout:v["a"]})},"7af4":function(t,e,i){"use strict";(function(t){var n=i("cebc"),s=(i("7514"),i("8e8f")),o=i("a82a"),a=i("7776"),r=i("5935");e["a"]={props:{fields:{type:Array,default:function(){var t=[];function e(e,i){i.key=e,t.push(i)}return e("title",{title:"Title",minimum:1,maximum:1,type:"string",placeholder:""}),e("contacts",{title:"Key Contacts",minimum:0,maximum:0,type:"reference",params:{restrictType:"contact"}}),e("dueDate",{title:"Due Date",minimum:0,maximum:1,type:"date",directive:"datetime-select",params:{}}),e("assignedTo",{title:"Assigned To",minimum:0,maximum:0,type:"reference",params:{restrictType:"contact"}}),t}}},created:function(){this.model.data||(this.model.data={})},mixins:[s["a"]],components:{FluroContentView:o["a"],FluroTaskList:a["a"]},methods:{removeTaskList:function(t){var e=this,i=e.model.taskLists;e.$delete(i,t),e.$set(e.model,"taskLists",i.slice()),e.dispatchUpdate()},addTaskList:function(){var e=this;e.model.taskLists||e.$set(e.model,"taskLists",[]);var i,n={autofocus:!0,tasks:[]},s=e.currentState;s&&s.title&&(i="".concat(s.title," tasks"),n.state=s.key);var o=t.find(e.model.taskLists,{title:i});i&&i.length&&!o||(i="".concat(e.user.firstName,"'s tasks"));o=t.find(e.model.taskLists,{title:i});o&&(i="Additional Tasks"),n.title=i,e.model.taskLists.push(n),e.dispatchUpdate()},resend:function(t){var e=this,i=e.$fluro.utils.getStringID(e.model),n=e.$fluro.utils.getStringID(t.form);return e.$set(e.resending,n,!0),e.$fluro.api.put("/process/resend/".concat(i,"/").concat(n)).then(function(t){e.$fluro.notify("Form was resent"),e.$set(e.resending,n,!1)}).catch(function(t){e.$fluro.error(t),e.$set(e.resending,n,!1)})},dispatchUpdate:function(t){this.update(this.model)}},asyncComputed:{},computed:Object(n["a"])({},Object(r["b"])("fluro",["application","user"]),{referenceItemField:function(){var e=this;t.chain(this.definition).get("data.processTypes").map(function(t){return{name:e.$fluro.types.readable(t),value:t}}).value();return{key:"item",title:"Referenced Item",description:"Select an item to add to this process",minimum:0,maximum:1,type:"reference"}},currentStateName:function(){return this.model.state},currentState:function(){return t.find(this.states,{key:this.currentStateName})},reference:function(){return this.model.item},stateField:function(){var e=this;return{title:"Current State",minimum:0,maximum:1,key:"state",type:"string",directive:"select",options:t.map(e.states,function(t){return{name:t.title,value:t.key}})}},title:function(){if(this.model){if(this.model.title&&this.model.title.length)return this.model.title;if(this.model.item&&this.model.item.title)return this.model.item.title}return"New Card"},states:function(){return t.get(this.definition,"data.states")},awaitingForms:function(){var e=this;return t.filter(e.model.forms,function(t){return!t.interaction})},receivedForms:function(){var e=this;return t.filter(e.model.forms,function(t){return t.interaction})},showOutline:function(){return!1}}),data:function(){return{resending:{}}}}}).call(this,i("2ef0"))},"87ee":function(t,e,i){},"8e8f":function(t,e,i){"use strict";var n=i("5dc9"),s=i("ee8a"),o=i("cbec");e["a"]={props:{config:{type:Object,require:!0},context:{type:String,default:"new"}},data(){return{loading:!1}},extends:n["default"],components:{FluroContentForm:n["default"],FluroContentFormField:s["default"]},mixins:[o["a"]],computed:{itemID(){return this.model._id},definition(){return this.config.definition}},methods:{}}}}]);
//# sourceMappingURL=chunk-1fd578a2.cfcc0461.js.map