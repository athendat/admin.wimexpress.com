"use strict";(self.webpackChunkwimexpress=self.webpackChunkwimexpress||[]).push([[520],{3520:(X,g,n)=>{n.r(g),n.d(g,{BeneficiariesModule:()=>P});var m=n(9116),B=n(3786),a=n(4006),h=n(8739),l=n(6308),y=n(9646),A=n(7579),C=n(6451),p=n(2722),T=n(8372),u=n(3900),c=n(9653);const v=t=>t.beneficiaries,I=((0,c.P1)(v,t=>t.beneficiary),(0,c.P1)(v,t=>t.beneficiaries));var S=n(6428),F=n(3844),e=n(4650),x=n(529),U=n(8505),L=n(9436),Q=n(5714);const w=n(2340).N.API_URL;let b=(()=>{class t{constructor(i,s){this._httpClient=i,this.store=s}getBeneficiaries(i=0,s=10,o="name",d="asc",H=""){const W=(new x.LE).append("page",i.toString()).append("size",s.toString()).append("sort",o).append("order",d).append("search",H);return this._httpClient.get(`${w}/beneficiaries/`,{params:W}).pipe((0,U.b)(({pagination:K,beneficiaries:V})=>{this.store.dispatch((0,Q.Jr)({pagination:K})),this.store.dispatch((0,L.hQ)({beneficiaries:V}))}))}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(x.eN),e.LFG(c.yh))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var z=n(1927),f=n(6895),N=n(7392),Z=n(9549),J=n(4144);const Y=["htmlOrderList"];function O(t,r){if(1&t&&(e.ynx(0),e.TgZ(1,"div",27)(2,"div",28),e._uU(3),e.qZA(),e.TgZ(4,"div",29),e._uU(5),e.qZA(),e.TgZ(6,"div",28),e._uU(7),e.qZA(),e.TgZ(8,"div",30),e._uU(9),e.qZA(),e.TgZ(10,"div",24),e._uU(11),e.qZA(),e.TgZ(12,"div",24),e._uU(13),e.qZA(),e.TgZ(14,"div",24),e._uU(15),e.qZA()(),e.BQk()),2&t){const i=r.$implicit;e.xp6(3),e.lnq(" ",i.name," ",i.lastname1," ",i.lastname2," "),e.xp6(2),e.hij(" ",i.idNumber," "),e.xp6(2),e.hij(" ",i.email," "),e.xp6(2),e.hij(" ",i.phone," "),e.xp6(2),e.hij(" ",i.country," "),e.xp6(2),e.hij(" ",i.state," "),e.xp6(2),e.hij(" ",i.city," ")}}function E(t,r){if(1&t&&(e.ynx(0),e.YNc(1,O,16,9,"ng-container",26),e.BQk()),2&t){const i=r.ngIf,s=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",i)("ngForTrackBy",s.trackByFn)}}const j=function(t){return{"pointer-events-none":t}},M=function(){return[5,10,25,100]};function G(t,r){if(1&t&&(e.ynx(0),e.TgZ(1,"div",19)(2,"div",20)(3,"div",21),e._uU(4," Nombre "),e.qZA(),e.TgZ(5,"div",22),e._uU(6," Identificaci\xf3n "),e.qZA(),e.TgZ(7,"div",23),e._uU(8," Correo electr\xf3nico "),e.qZA(),e.TgZ(9,"div",22),e._uU(10," Tel\xe9fono "),e.qZA(),e.TgZ(11,"div",24),e._uU(12," Pa\xeds "),e.qZA(),e.TgZ(13,"div",24),e._uU(14," Estado "),e.qZA(),e.TgZ(15,"div",24),e._uU(16," Ciudad "),e.qZA()(),e.YNc(17,E,2,2,"ng-container",16),e.ALo(18,"async"),e.qZA(),e._UZ(19,"mat-paginator",25),e.BQk()),2&t){const i=e.oxw(2);e.xp6(3),e.Q6J("mat-sort-header","name"),e.xp6(14),e.Q6J("ngIf",e.lcZ(18,8,i.beneficiaries$)),e.xp6(2),e.Q6J("ngClass",e.VKq(10,j,i.isLoading))("length",i.pagination.length)("pageIndex",i.pagination.page)("pageSize",i.pagination.size)("pageSizeOptions",e.DdM(12,M))("showFirstLastButtons",!0)}}function k(t,r){if(1&t&&(e.ynx(0),e.YNc(1,G,20,13,"ng-container",18),e.BQk()),2&t){const i=r.ngIf;e.oxw();const s=e.MAs(23);e.xp6(1),e.Q6J("ngIf",i.length>0)("ngIfElse",s)}}function D(t,r){1&t&&(e.TgZ(0,"div",31),e._uU(1,"\xa1No se ha registrado ning\xfan beneficiario!"),e.qZA())}const $=[{path:"",component:(()=>{class t{constructor(i,s,o,d){this._changeDetectorRef=i,this._beneficiariesService=s,this._fileSaverService=o,this.store=d,this.isLoading=!1,this.beneficiaries=[],this.beneficiaries$=(0,y.of)([]),this.searchInputControl=new a.p4,this._unsubscribeAll=new A.x}ngOnInit(){this.store.select(S.B).pipe((0,p.R)(this._unsubscribeAll)).subscribe(i=>{this.pagination=i,this._changeDetectorRef.markForCheck()}),this.beneficiaries$=this.store.select(I),this.beneficiaries$.subscribe(i=>this.beneficiaries=i),this.searchInputControl.valueChanges.pipe((0,p.R)(this._unsubscribeAll),(0,T.b)(900),(0,u.w)(i=>this._beneficiariesService.getBeneficiaries(0,10,"orderNo","asc",i))).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,p.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,C.T)(this._sort.sortChange,this._paginator.page).pipe((0,u.w)(()=>this._beneficiariesService.getBeneficiaries(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}exportAsExcelFile(){this._fileSaverService.exportAsExcelFile(this.beneficiaries,"beneficiaries")}exportAsCsvFile(){this._fileSaverService.exportAsCsvFile(this.beneficiaries,"beneficiaries")}trackByFn(i,s){return s.id||i}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.sBO),e.Y36(b),e.Y36(z.m),e.Y36(c.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ath-beneficiaries"]],viewQuery:function(i,s){if(1&i&&(e.Gf(Y,5),e.Gf(h.NW,5),e.Gf(l.YE,5)),2&i){let o;e.iGM(o=e.CRH())&&(s.htmlOrderList=o.first),e.iGM(o=e.CRH())&&(s._paginator=o.first),e.iGM(o=e.CRH())&&(s._sort=o.first)}},decls:24,vars:8,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/home",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-no-subscript","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf"],["noBeneficiaries",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","beneficiaries-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"",3,"mat-sort-header"],[1,"hidden","text-center","sm:block"],[1,"text-center"],[1,"hidden","text-center","lg:block"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","beneficiaries-grid","md:px-8"],[1,"truncate"],[1,"hidden","sm:block"],[1,"hidden","truncate","sm:block"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(i,s){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"Inicio"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"mat-icon",6),e.TgZ(9,"a",7),e._uU(10,"Beneficiarios"),e.qZA()()(),e.TgZ(11,"div",8)(12,"h2",9),e._uU(13," Beneficiarios "),e.qZA()()(),e.TgZ(14,"div",10)(15,"mat-form-field",11),e._UZ(16,"mat-icon",12)(17,"input",13),e.qZA()()(),e.TgZ(18,"div",14)(19,"div",15),e.YNc(20,k,2,2,"ng-container",16),e.ALo(21,"async"),e.YNc(22,D,2,0,"ng-template",null,17,e.W1O),e.qZA()()()),2&i&&(e.xp6(8),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(8),e.Q6J("svgIcon","heroicons_solid:search"),e.xp6(1),e.Q6J("formControl",s.searchInputControl)("autocomplete","off")("placeholder","Buscar beneficiarios"),e.xp6(3),e.Q6J("ngIf",e.lcZ(21,6,s.beneficiaries$)))},dependencies:[m.yS,f.mk,f.sg,f.O5,a.Fj,a.JJ,a.oH,N.Hw,Z.KE,Z.qo,J.Nt,h.NW,l.YE,l.nU,f.Ov],styles:[".beneficiaries-grid{grid-template-columns:auto 150px}@media (min-width: 600px){.beneficiaries-grid{grid-template-columns:auto 120px 150px 120px}}@media (min-width: 960px){.beneficiaries-grid{grid-template-columns:auto 120px 150px 120px}}@media (min-width: 1280px){.beneficiaries-grid{grid-template-columns:auto 120px 150px 120px 96px 96px 72px 72px}}\n"],encapsulation:2,data:{animation:F.L},changeDetection:0}),t})(),resolve:{customers:(()=>{class t{constructor(i){this._beneficiariesService=i}resolve(i,s){return this._beneficiariesService.getBeneficiaries()}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(b))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];let P=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild($),B.m]}),t})()}}]);