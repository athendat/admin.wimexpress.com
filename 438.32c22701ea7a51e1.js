"use strict";(self.webpackChunkwimexpress=self.webpackChunkwimexpress||[]).push([[438],{3438:(vt,T,n)=>{n.r(T),n.d(T,{FreightsModule:()=>_t});var x=n(9116),S=n(3786),c=n(4006),I=n(8739),F=n(6308),k=n(9646),R=n(7579),w=n(6451),l=n(2722),d=n(3900),N=n(7489),E=n(4787),_=n(9653);const Q=i=>i.freights,v=((0,_.P1)(Q,i=>i.freight),(0,_.P1)(Q,i=>i.freights));var M=n(6428),Y=n(3844),t=n(4650),L=n(1927),U=n(529),b=n(5698),f=n(8505),m=n(3730),B=n(5714);const p=n(2340).N.API_URL;let J=(()=>{class i{constructor(e,r){this._httpClient=e,this.store=r}createFreight(e){return this.store.select(v).pipe((0,b.q)(1),(0,d.w)(r=>this._httpClient.post(`${p}/freights`,e).pipe((0,f.b)(o=>{const a=[...r];this.store.dispatch((0,m.eX)({freights:[o.freight,...a]}))}))))}getFreights(e=0,r=10,o="createdAt",a="desc"){const g=(new U.LE).append("page",e.toString()).append("size",r.toString()).append("sort",o).append("order",a);return this._httpClient.get(`${p}/freights/`,{params:g}).pipe((0,f.b)(({pagination:u,freights:y})=>{this.store.dispatch((0,B.Jr)({pagination:u})),this.store.dispatch((0,m.eX)({freights:y}))}))}getFreightById(e){if(null!==e)return this._httpClient.get(`${p}/freights/${e}`).pipe((0,f.b)(({freight:r})=>{this.store.dispatch((0,m.$0)({freight:r}))}))}updateFreight(e){return this.store.select(v).pipe((0,b.q)(1),(0,d.w)(r=>this._httpClient.patch(`${p}/freights/${e._id}`,e).pipe((0,f.b)(o=>{const a=[...r],g=a.findIndex(u=>u._id===e._id);a[g]=o.freight,this.store.dispatch((0,m.eX)({freights:a}))}))))}deleteFreight(e){return this.store.select(v).pipe((0,b.q)(1),(0,d.w)(r=>this._httpClient.delete(`${p}/freights/${e}`).pipe((0,f.b)(()=>{const o=[...r],a=o.findIndex(g=>g._id===e);o.splice(a,1),this.store.dispatch((0,m.eX)({freights:o}))}))))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(U.eN),t.LFG(_.yh))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var z=n(1683),h=n(6895),D=n(4098),q=n(3238),G=n(4859),Z=n(148),O=n(7392),C=n(9549),V=n(4144),A=n(5655),j=n(4385),H=n(266),K=n(1066);const P=["htmlFreightList"];function W(i,s){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," El costo es obligatorio. "),t.qZA())}function X(i,s){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," El tipo de flete es obligatorio. "),t.qZA())}function tt(i,s){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," La fecha del flete es obligatoria. "),t.qZA())}function et(i,s){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",34),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.saveFreight())}),t._UZ(2,"mat-icon",35),t.TgZ(3,"span",36),t._uU(4,"Guardar"),t.qZA()(),t.BQk()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("disabled",e.freightForm.invalid),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:save")}}function it(i,s){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",34),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateFreight())}),t._UZ(2,"mat-icon",35),t.TgZ(3,"span",36),t._uU(4,"Actualizar"),t.qZA()(),t.BQk()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("disabled",e.freightForm.invalid),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:save")}}function rt(i,s){if(1&i&&(t.ynx(0),t._UZ(1,"mat-icon",51),t.BQk()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("svgIcon","mat_solid:directions_boat")("matTooltip",e.type)}}function nt(i,s){if(1&i&&(t.ynx(0),t._UZ(1,"mat-icon",51),t.BQk()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("svgIcon","mat_solid:flight_takeoff")("matTooltip",e.type)}}function ot(i,s){1&i&&(t.ynx(0),t._UZ(1,"mat-icon",52),t.BQk()),2&i&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check"))}function st(i,s){1&i&&(t.ynx(0),t._UZ(1,"mat-icon",53),t.BQk()),2&i&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x"))}function at(i,s){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",46),t._UZ(2,"div"),t.TgZ(3,"div",47),t._uU(4),t.ALo(5,"number"),t.qZA(),t.TgZ(6,"div",48),t.YNc(7,rt,2,2,"ng-container",17),t.YNc(8,nt,2,2,"ng-container",17),t.qZA(),t.TgZ(9,"div",42),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"div",42),t.YNc(13,ot,2,1,"ng-container",17),t.YNc(14,st,2,1,"ng-container",17),t.qZA(),t.TgZ(15,"div",49)(16,"button",50),t.NdJ("click",function(){const a=t.CHM(e).$implicit,g=t.oxw(4);return t.KtG(g.editFreight(a))}),t._UZ(17,"mat-icon",29),t.qZA(),t.TgZ(18,"button",50),t.NdJ("click",function(){const a=t.CHM(e).$implicit,g=t.oxw(4);return t.KtG(g.deleteFreight(a))}),t._UZ(19,"mat-icon",29),t.qZA()()(),t.BQk()}if(2&i){const e=s.$implicit;t.xp6(4),t.hij(" ",t.xi3(5,8,e.cost,"1.2-2")," USD/kg "),t.xp6(3),t.Q6J("ngIf","Mar\xedtimo"===e.type),t.xp6(1),t.Q6J("ngIf","A\xe9reo"===e.type),t.xp6(2),t.hij(" ",t.xi3(11,11,e.date,"dd/MM/yyyy")," "),t.xp6(3),t.Q6J("ngIf",e.active),t.xp6(1),t.Q6J("ngIf",!e.active),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:pencil"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:trash")}}function ct(i,s){if(1&i&&(t.ynx(0),t.YNc(1,at,20,14,"ng-container",45),t.BQk()),2&i){const e=s.ngIf,r=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",e)("ngForTrackBy",r.trackByFn)}}const gt=function(i){return{"pointer-events-none":i}},lt=function(){return[5,10,25,100]};function ht(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"div",38)(2,"div",39),t._UZ(3,"div"),t.TgZ(4,"div",40),t._uU(5," Costo "),t.qZA(),t.TgZ(6,"div",41),t._uU(7," Tipo "),t.qZA(),t.TgZ(8,"div",42),t._uU(9," Fecha "),t.qZA(),t.TgZ(10,"div",42),t._uU(11," Activo "),t.qZA(),t.TgZ(12,"div",43),t._uU(13," Acciones "),t.qZA()(),t.YNc(14,ct,2,2,"ng-container",17),t.ALo(15,"async"),t._UZ(16,"mat-paginator",44),t.qZA(),t.BQk()),2&i){const e=t.oxw(2);t.xp6(4),t.Q6J("mat-sort-header","name"),t.xp6(10),t.Q6J("ngIf",t.lcZ(15,8,e.freights$)),t.xp6(2),t.Q6J("ngClass",t.VKq(10,gt,e.isLoading))("length",e.pagination.length)("pageIndex",e.pagination.page)("pageSize",e.pagination.size)("pageSizeOptions",t.DdM(12,lt))("showFirstLastButtons",!0)}}function ft(i,s){if(1&i&&(t.ynx(0),t.YNc(1,ht,17,13,"ng-container",37),t.BQk()),2&i){const e=s.ngIf;t.oxw();const r=t.MAs(59);t.xp6(1),t.Q6J("ngIf",e.length>0)("ngIfElse",r)}}function mt(i,s){1&i&&(t.TgZ(0,"div",54),t._uU(1,"\xa1No hay Fletes registrados!"),t.qZA())}const dt=[{path:"",component:(()=>{class i{constructor(e,r,o,a,g,u,y){this._activatedRoute=e,this._changeDetectorRef=r,this._fileSaverService=o,this._formBuilder=a,this._freightsService=g,this._fuseConfirmationService=u,this.store=y,this.freight=null,this.freights=[],this.freights$=(0,k.of)([]),this.isUpdate=!1,this.user$=(0,k.of)(null),this._unsubscribeAll=new R.x}ngOnInit(){this.user$=this.store.select(E.rk),this.user$.pipe((0,l.R)(this._unsubscribeAll)).subscribe(e=>{this.user=e,this._changeDetectorRef.markForCheck()}),this.freights$=this.store.select(v),this.freights$.subscribe(e=>this.freights=e),this.store.select(M.B).pipe((0,l.R)(this._unsubscribeAll)).subscribe(e=>{this.pagination=e,this._changeDetectorRef.markForCheck()}),this.freightForm=this._formBuilder.group({_id:[null],userId:[this.user._id,[c.kI.required]],active:[!0,[c.kI.required]],cost:[null,[c.kI.required,c.kI.min(0),c.kI.max(99999999),c.kI.maxLength(8)]],type:[null,[c.kI.required]],date:[null,[c.kI.required]]})}ngAfterViewInit(){this._sort&&this._paginator&&(this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,l.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,w.T)(this._sort.sortChange,this._paginator.page).pipe((0,d.w)(()=>this._freightsService.getFreights(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}exportAsExcelFile(){this._fileSaverService.exportAsExcelFile(this.freights,"freights")}exportAsCsvFile(){this._fileSaverService.exportAsCsvFile(this.freights,"freights")}saveFreight(){let e=this.freightForm.getRawValue();e=(0,N.omit)(e,["_id"]),this._fuseConfirmationService.open({title:"Crear flete",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,l.R)(this._unsubscribeAll)).subscribe(o=>{"confirmed"===o&&this._freightsService.createFreight(e).pipe((0,l.R)(this._unsubscribeAll)).subscribe(()=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:"Flete creado correctamente",icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.freightForm.reset(),this.freightForm.get("userId").setValue(this.user._id),this.freightForm.get("active").setValue(!0),this._changeDetectorRef.markForCheck()})}),this._changeDetectorRef.markForCheck()}editFreight(e){this.isUpdate=!0,this.freightForm.patchValue(e)}updateFreight(){const e=this.freightForm.getRawValue();this._fuseConfirmationService.open({title:"Actualizar flete",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,l.R)(this._unsubscribeAll)).subscribe(o=>{"confirmed"===o&&this._freightsService.updateFreight(e).pipe((0,l.R)(this._unsubscribeAll)).subscribe(()=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:"Flete actualizado correctamente",icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.isUpdate=!1,this.freightForm.reset(),this.freightForm.get("userId").setValue(this.user._id),this.freightForm.get("active").setValue(!0),this._changeDetectorRef.markForCheck()})}),this._changeDetectorRef.markForCheck()}deleteFreight(e){this._fuseConfirmationService.open({title:"Cuidado",message:"\xbfEst\xe1 seguro que desea eliminar este flete?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"warning"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,l.R)(this._unsubscribeAll)).subscribe(o=>{"confirmed"===o&&this._freightsService.deleteFreight(e._id).pipe((0,l.R)(this._unsubscribeAll)).subscribe(a=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`${a.message}`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck()})})}trackByFn(e,r){return r.id||e}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x.gz),t.Y36(t.sBO),t.Y36(L.m),t.Y36(c.QS),t.Y36(J),t.Y36(z.R),t.Y36(_.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ath-freights"]],viewQuery:function(e,r){if(1&e&&(t.Gf(P,5),t.Gf(I.NW,5),t.Gf(F.YE,5)),2&e){let o;t.iGM(o=t.CRH())&&(r.htmlFreightList=o.first),t.iGM(o=t.CRH())&&(r._paginator=o.first),t.iGM(o=t.CRH())&&(r._sort=o.first)}},decls:60,vars:27,consts:[["cdkScrollable","","fuseScrollbar","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","pb-22","sm:pt-12","sm:pb-28","sm:px-10","bg-default","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"whitespace-nowrap","text-primary-500",3,"routerLink"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","flex-wrap","items-center","justify-center","gap-5","mt-6",3,"formGroup","autocomplete"],[1,"fuse-mat-dense","fuse-mat-no-subscript","min-w-60"],["matInput","","type","number","min","0","required","",3,"formControlName","placeholder"],["matSuffix",""],[4,"ngIf"],["required","",3,"formControlName","placeholder"],[3,"value"],["matInput","","required","",3,"matDatepicker","formControlName","placeholder"],["matSuffix","",3,"for"],["picker",""],[1,"flex-auto","p-6","-mt-16","bg-gray-200","shadow","sm:p-10","rounded-t-2xl"],[1,"w-full","p-16","overflow-auto","shadow","rounded-2xl","bg-card","print:w-auto","print:rounded-none","print:shadow-none","print:bg-transparent"],[1,"flex","items-center","justify-between","mb-5"],[1,"text-2xl","font-semibold","leading-tight"],[1,"-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],[1,"icon-size-5",3,"svgIcon"],["xPosition","before"],["listCard01Menu","matMenu"],["mat-menu-item","",3,"click"],["noFreights",""],["mat-button","",1,"rounded-md","bg-primary-500",3,"disabled","click"],[1,"text-white",3,"svgIcon"],[1,"ml-2","mr-1","text-white"],[4,"ngIf","ngIfElse"],["fuseScrollbar","",1,"grid","overflow-auto"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","freight-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[3,"mat-sort-header"],[1,"hidden","md:block"],[1,"hidden","text-center","md:block"],[1,"text-center"],[1,"z-10","border-b","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","freight-grid","md:px-8"],[1,"truncate"],[1,"hidden","truncate","md:block"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"icon-size-5",3,"svgIcon","matTooltip"],[1,"text-green-400","icon-size-5",3,"svgIcon"],[1,"text-gray-400","icon-size-5",3,"svgIcon"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div")(6,"a",4),t._uU(7,"Inicio"),t.qZA()(),t.TgZ(8,"div",5),t._UZ(9,"mat-icon",6),t.TgZ(10,"a",7),t._uU(11,"Fletes"),t.qZA()()(),t.TgZ(12,"div",8)(13,"a",9),t._UZ(14,"mat-icon",6),t.TgZ(15,"span",10),t._uU(16,"Regresar"),t.qZA()()()(),t.TgZ(17,"div",11)(18,"h2",12),t._uU(19," Listado de precios de Fletes "),t.qZA()()(),t.TgZ(20,"form",13)(21,"mat-form-field",14),t._UZ(22,"input",15),t.TgZ(23,"span",16),t._uU(24,"USD/kg"),t.qZA(),t.YNc(25,W,2,0,"mat-error",17),t.qZA(),t.TgZ(26,"mat-form-field",14)(27,"mat-select",18),t._UZ(28,"mat-option",19),t.TgZ(29,"mat-option",19),t._uU(30,"A\xe9reo"),t.qZA(),t.TgZ(31,"mat-option",19),t._uU(32,"Mar\xedtimo"),t.qZA()(),t.YNc(33,X,2,0,"mat-error",17),t.qZA(),t.TgZ(34,"mat-form-field",14),t._UZ(35,"input",20)(36,"mat-datepicker-toggle",21)(37,"mat-datepicker",null,22),t.YNc(39,tt,2,0,"mat-error",17),t.qZA(),t.YNc(40,et,5,2,"ng-container",17),t.YNc(41,it,5,2,"ng-container",17),t.qZA()(),t.TgZ(42,"div",23)(43,"div",24)(44,"div",25)(45,"div",26),t._uU(46,"Listado de Fletes"),t.qZA(),t.TgZ(47,"div",27)(48,"button",28),t._UZ(49,"mat-icon",29),t.qZA(),t.TgZ(50,"mat-menu",30,31)(52,"button",32),t.NdJ("click",function(){return r.exportAsExcelFile()}),t._uU(53,"Exportar a Excel"),t.qZA(),t.TgZ(54,"button",32),t.NdJ("click",function(){return r.exportAsCsvFile()}),t._uU(55,"Exportar a CSV"),t.qZA()()()(),t.YNc(56,ft,2,2,"ng-container",17),t.ALo(57,"async"),t.YNc(58,mt,2,0,"ng-template",null,33,t.W1O),t.qZA()()()),2&e){const o=t.MAs(38),a=t.MAs(51);t.xp6(6),t.Q6J("routerLink","/home"),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(4),t.Q6J("routerLink","./.."),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-left"),t.xp6(6),t.Q6J("formGroup",r.freightForm)("autocomplete","off"),t.xp6(2),t.Q6J("formControlName","cost")("placeholder","Costo"),t.xp6(3),t.Q6J("ngIf",r.freightForm.get("cost").hasError("required")&&r.freightForm.get("cost").touched),t.xp6(2),t.Q6J("formControlName","type")("placeholder","Tipo de flete"),t.xp6(1),t.Q6J("value",""),t.xp6(1),t.Q6J("value","A\xe9reo"),t.xp6(2),t.Q6J("value","Mar\xedtimo"),t.xp6(2),t.Q6J("ngIf",r.freightForm.get("type").hasError("required")&&r.freightForm.get("type").touched),t.xp6(2),t.Q6J("matDatepicker",o)("formControlName","date")("placeholder","Fecha"),t.xp6(1),t.Q6J("for",o),t.xp6(3),t.Q6J("ngIf",r.freightForm.get("date").hasError("required")&&r.freightForm.get("date").touched),t.xp6(1),t.Q6J("ngIf",!r.isUpdate),t.xp6(1),t.Q6J("ngIf",r.isUpdate),t.xp6(7),t.Q6J("matMenuTriggerFor",a),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(7),t.Q6J("ngIf",t.lcZ(57,25,r.freights$))}},dependencies:[x.yS,h.mk,h.sg,h.O5,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.Q7,c.qQ,c.sg,c.u,D.PQ,q.ey,G.lW,Z.Mq,Z.hl,Z.nW,O.Hw,C.TO,C.KE,C.R9,V.Nt,A.VK,A.OP,A.p6,I.NW,j.gD,F.YE,F.nU,H.gM,K.H,h.Ov,h.JJ,h.uU],encapsulation:2,data:{animation:Y.L},changeDetection:0}),i})(),resolve:{freights:(()=>{class i{constructor(e){this._freightsService=e}resolve(e,r){return this._freightsService.getFreights()}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(J))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}];let _t=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[x.Bz.forChild(dt),S.m]}),i})()}}]);