"use strict";(self.webpackChunkwirepharma=self.webpackChunkwirepharma||[]).push([[736],{4736:(Pe,k,i)=>{i.r(k),i.d(k,{UsersModule:()=>ze});var _=i(5357),R=i(3637),c=i(3075),v=i(9646),b=i(7579),d=i(2722),h=i(5119),Y=i(4787),M=i(1910),I=i(8765),U=i(3844);const F={_id:null,userId:null,merchantId:null,active:!0,name:null,lastname:null,email:null,pwd:null,roles:null};var e=i(5e3),Z=i(1683),f=i(7495),J=i(1349),Q=i(5620),D=i(393),w=i(5245),u=i(9808),C=i(7423),x=i(288),p=i(7322),N=i(7531),S=i(4107),$=i(508),O=i(2368);function L(o,s){1&o&&(e.ynx(0),e.TgZ(1,"a",36),e._uU(2,"Nuevo"),e.qZA(),e.BQk())}function z(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"a",36),e._uU(2),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(2),e.AsE("",t.selectedUser.name," ",t.selectedUser.lastname,"")}}function B(o,s){1&o&&(e.ynx(0),e._uU(1," Nuevo "),e.BQk())}function P(o,s){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.AsE(" ",t.selectedUser.name," ",t.selectedUser.lastname," ")}}const H=function(o){return{"cursor-not-allowed":o}};function j(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){return e.CHM(t),e.oxw().createUser()}),e._UZ(1,"mat-icon",38),e.TgZ(2,"span",39),e._uU(3,"Guardar"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("ngClass",e.VKq(3,H,t.userForm.invalid))("disabled",t.userForm.invalid),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:save")}}function V(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"button",40),e.NdJ("click",function(){return e.CHM(t),e.oxw().updateUser()}),e._UZ(1,"mat-icon",38),e.TgZ(2,"span",39),e._uU(3,"Actualizar"),e.qZA()()}2&o&&(e.xp6(1),e.Q6J("svgIcon","heroicons_outline:refresh"))}function G(o,s){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El nombre es obligatorio. "),e.qZA())}function W(o,s){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Los apellidos son obligatorios. "),e.qZA())}function K(o,s){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El correo electr\xf3nico es obligatorio. "),e.qZA())}function X(o,s){if(1&o&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.Q6J("value",t._id),e.xp6(1),e.hij(" ",t.name," ")}}function ee(o,s){1&o&&e._UZ(0,"mat-icon",49),2&o&&e.Q6J("svgIcon","mat_solid:visibility")}function te(o,s){1&o&&e._UZ(0,"mat-icon",49),2&o&&e.Q6J("svgIcon","mat_solid:visibility_off")}function oe(o,s){1&o&&(e.TgZ(0,"mat-error",50),e._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: !" ? $ % ^ &. '),e.qZA())}function re(o,s){1&o&&(e.TgZ(0,"mat-error",50),e._uU(1," La contrase\xf1a es obligatoria "),e.qZA())}function ne(o,s){if(1&o&&(e.TgZ(0,"mat-error",50),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.userForm.get("pwd").getError("pwd")," ")}}function se(o,s){1&o&&e._UZ(0,"mat-icon",49),2&o&&e.Q6J("svgIcon","mat_solid:visibility")}function ie(o,s){1&o&&e._UZ(0,"mat-icon",49),2&o&&e.Q6J("svgIcon","mat_solid:visibility_off")}function ae(o,s){1&o&&(e.TgZ(0,"mat-error",50),e._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: !" ? $ % ^ &. '),e.qZA())}function ce(o,s){1&o&&(e.TgZ(0,"mat-error",50),e._uU(1," La contrase\xf1a es obligatoria "),e.qZA())}function le(o,s){if(1&o&&(e.TgZ(0,"mat-error",50),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.userForm.get("pwd2").getError("pwd")," ")}}function me(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"mat-expansion-panel")(1,"mat-expansion-panel-header",21)(2,"mat-panel-title",22)(3,"div",23),e._uU(4," Contrase\xf1a "),e.qZA()()(),e.TgZ(5,"div",41)(6,"div",25)(7,"mat-form-field",26)(8,"mat-label"),e._uU(9,"Contrase\xf1a"),e.qZA(),e._UZ(10,"input",42,43),e.TgZ(12,"button",44),e.NdJ("click",function(){e.CHM(t);const n=e.MAs(11);return n.type="password"===n.type?"text":"password"}),e.YNc(13,ee,1,1,"mat-icon",45),e.YNc(14,te,1,1,"mat-icon",45),e.qZA(),e.YNc(15,oe,2,0,"mat-error",46),e.YNc(16,re,2,0,"mat-error",46),e.YNc(17,ne,2,1,"mat-error",46),e.qZA()(),e.TgZ(18,"div",25)(19,"mat-form-field",26)(20,"mat-label"),e._uU(21,"Confirmar contrase\xf1a"),e.qZA(),e._UZ(22,"input",47,48),e.TgZ(24,"button",44),e.NdJ("click",function(){e.CHM(t);const n=e.MAs(23);return n.type="password"===n.type?"text":"password"}),e.YNc(25,se,1,1,"mat-icon",45),e.YNc(26,ie,1,1,"mat-icon",45),e.qZA(),e.YNc(27,ae,2,0,"mat-error",46),e.YNc(28,ce,2,0,"mat-error",46),e.YNc(29,le,2,1,"mat-error",46),e.qZA()()()()}if(2&o){const t=e.MAs(11),r=e.MAs(23),n=e.oxw();e.xp6(1),e.Q6J("collapsedHeight","56px"),e.xp6(9),e.Q6J("formControlName","pwd"),e.xp6(3),e.Q6J("ngIf","password"===t.type),e.xp6(1),e.Q6J("ngIf","text"===t.type),e.xp6(1),e.Q6J("ngIf",n.userForm.get("pwd").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",n.userForm.get("pwd").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.userForm.get("pwd").hasError("pwd")),e.xp6(5),e.Q6J("formControlName","pwd2"),e.xp6(3),e.Q6J("ngIf","password"===r.type),e.xp6(1),e.Q6J("ngIf","text"===r.type),e.xp6(1),e.Q6J("ngIf",n.userForm.get("pwd2").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",n.userForm.get("pwd2").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.userForm.get("pwd2").hasError("pwd"))}}let ue=(()=>{class o{constructor(t,r,n,a,l,m,g,Be){this._activatedRoute=t,this._fuseConfirmationService=r,this._changeDetectorRef=n,this._formBuilder=a,this._router=l,this._userService=m,this._roleService=g,this.store=Be,this.dialogMode="view",this.editMode=!1,this.formSubmitted=!1,this.isValid=!1,this.selectedUser=F,this.showAlert=!1,this.userId=null,this.userRoles=[],this.roles=[],this.user$=(0,v.of)(null),this.merchants$=(0,v.of)([]),this._unsubscribeAll=new b.x}ngOnInit(){this.user$=this.store.select(Y.rk),this.user$.pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.merchants$=this.store.select(M.UV),this.userForm=this._formBuilder.group({_id:[null],active:[!0],userId:[this.user._id,[c.kI.required]],merchantId:[null,[c.kI.required]],name:[null,[c.kI.required]],lastname:[null,[c.kI.required]],email:[null,[c.kI.email,c.kI.required]],pwd:[null,[c.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],pwd2:[null,[c.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]},{validators:this.mustMatch("pwd","pwd2")}),this._activatedRoute.params.pipe((0,d.R)(this._unsubscribeAll)).subscribe(({userId:t})=>{this.userId=t,"new"!==this.userId&&(this.editMode=!0,this.store.select(I.dy).pipe((0,d.R)(this._unsubscribeAll)).subscribe(r=>{this.selectedUser=r}),this.userForm.patchValue(this.selectedUser)),this._changeDetectorRef.markForCheck()}),this.userPasswordForm=this._formBuilder.group({userId:[null,[c.kI.required]],pwd:[null,[c.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],pwd2:[null,[c.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]},{validators:this.mustMatch("pwd","pwd2")}),this.editMode||this._roleService.roles$.pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.roles=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createUser(){let t=this.userForm.getRawValue();t=(0,h.Z)(t,["_id"]),this._fuseConfirmationService.open({title:"Crear usuario",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,d.R)(this._unsubscribeAll)).subscribe(n=>{"confirmed"===n&&this._userService.createUser(t).pipe((0,d.R)(this._unsubscribeAll)).subscribe(a=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`Usuario ${a.user.name} ${a.user.lastname} creado correctamente`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._router.navigateByUrl("/users"),this._changeDetectorRef.markForCheck()})}),this._changeDetectorRef.markForCheck()}updateUser(){let t=this.userForm.getRawValue();t=(0,h.Z)(t,["pwd, pwd2"]),this._fuseConfirmationService.open({title:"Actualizar datos del usuario",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&this._userService.update(t).subscribe(a=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`Usuario ${a.user.name} ${a.user.lastname} actualizado correctamente`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._router.navigateByUrl("/users"),this._changeDetectorRef.markForCheck()})}),this._changeDetectorRef.markForCheck()}updateUserPassword(){let t=this.userPasswordForm.getRawValue();t=(0,h.Z)(t,"pwd"),this._fuseConfirmationService.open({title:"Actualizar contrase\xf1a",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&this._userService.resetUserPassword(t).subscribe(a=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`${a.message}`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck()})}),this._changeDetectorRef.markForCheck()}trackByFn(t,r){return r.id||t}mustMatch(t,r){return n=>{const a=n.get(t),l=n.get(r);if(!a||!l||(l.hasError("mustMatch")&&(delete l.errors.mustMatch,l.updateValueAndValidity()),this._isEmptyInputValue(l.value)||a.value===l.value))return null;const m={mustMatch:"Las contrase\xf1a no coinciden"};return l.setErrors(m),m}}manageRoles(t,r){r.checked?(this.userRoles.push(t),this._changeDetectorRef.markForCheck()):(this.userRoles.splice(this.userRoles.findIndex(n=>n===t),1),this._changeDetectorRef.markForCheck())}_isEmptyInputValue(t){return null==t||0===t.length}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(_.gz),e.Y36(Z.R),e.Y36(e.sBO),e.Y36(c.qu),e.Y36(_.F0),e.Y36(f.K),e.Y36(J.N),e.Y36(Q.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ath-user-detail"]],decls:72,vars:36,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","sm:flex-row","flex-0","sm:items-center","sm:justify-between","sm:pt-12","sm:px-10","bg-mine-50","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","text-primary-700",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[4,"ngIf"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"mt-2"],[1,"mt-2","text-3xl","font-extrabold","leading-tight","tracking-tight","sm:text-3xl"],[1,"flex","items-center","flex-shrink-0","mt-6","sm:mt-0","sm:ml-4"],["mat-raised-button","","class","ml-4 text-white bg-primary-500 hover:shadow-lg","mat-button","",3,"ngClass","disabled","click",4,"ngIf"],["mat-raised-button","","class","ml-4 text-white bg-primary-500 hover:shadow-lg","mat-button","",3,"click",4,"ngIf"],[1,"flex-auto","p-6","shadow","bg-mine-200","sm:p-10","rounded-t-2xl"],[1,"flex","flex-col","flex-auto","min-w-0"],[3,"formGroup","autocomplete"],[1,"w-full"],[3,"expanded"],[3,"collapsedHeight"],[1,"flex","items-center"],[1,"text-2xl","font-extrabold","leading-tight","tracking-tight","sm:text-2xl"],[1,"grid","w-full","gap-6","p-8","mb-6","border-t-2","sm:grid-cols-4"],[1,"sm:col-span-2"],[1,"w-full","fuse-mat-no-subscript"],["matInput","","required","",3,"type","formControlName","placeholder"],["matInput","","required","",3,"type","formControlName"],[3,"formControlName","placeholder"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","sm:col-span-2"],[1,"flex","flex-col","w-1/4"],[1,"items-start","font-medium"],[3,"formControlName","color"],[1,"ml-1","text-primary-700"],["mat-raised-button","","mat-button","",1,"ml-4","text-white","bg-primary-500","hover:shadow-lg",3,"ngClass","disabled","click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],["mat-raised-button","","mat-button","",1,"ml-4","text-white","bg-primary-500","hover:shadow-lg",3,"click"],[1,"grid","w-full","gap-6","p-8","mb-6","border-t-2","sm:grid-cols-2","md:grid-cols-4"],["type","password","matInput","","placeholder","Contrase\xf1a","required","",3,"formControlName"],["passwordField1",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["class","pb-5",4,"ngIf"],["type","password","matInput","","placeholder","Repita la contrase\xf1a","required","",3,"formControlName"],["passwordField2",""],[1,"icon-size-5",3,"svgIcon"],[1,"pb-5"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",5),e._uU(11,"Usuarios"),e.qZA()(),e.TgZ(12,"div",4),e._UZ(13,"mat-icon",6),e.YNc(14,L,3,0,"ng-container",7),e.YNc(15,z,3,2,"ng-container",7),e.qZA()(),e.TgZ(16,"div",8)(17,"a",9),e._UZ(18,"mat-icon",6),e.TgZ(19,"span",10),e._uU(20,"Regresar"),e.qZA()()()(),e.TgZ(21,"div",11)(22,"div",12),e.YNc(23,B,2,0,"ng-container",7),e.YNc(24,P,2,2,"ng-container",7),e.qZA()()(),e.TgZ(25,"div",13),e.YNc(26,j,4,5,"button",14),e.YNc(27,V,4,1,"button",15),e.qZA()(),e.TgZ(28,"div",16)(29,"div",17)(30,"form",18)(31,"mat-accordion",19)(32,"mat-expansion-panel",20)(33,"mat-expansion-panel-header",21)(34,"mat-panel-title",22)(35,"div",23),e._uU(36," Informaci\xf3n General "),e.qZA()()(),e.TgZ(37,"div",24)(38,"div",25)(39,"mat-form-field",26)(40,"mat-label"),e._uU(41,"Nombre"),e.qZA(),e._UZ(42,"input",27),e.YNc(43,G,2,0,"mat-error",7),e.qZA()(),e.TgZ(44,"div",25)(45,"mat-form-field",26)(46,"mat-label"),e._uU(47,"Apellidos"),e.qZA(),e._UZ(48,"input",28),e.YNc(49,W,2,0,"mat-error",7),e.qZA()(),e.TgZ(50,"div",25)(51,"mat-form-field",26)(52,"mat-label"),e._uU(53,"Correo electr\xf3nico"),e.qZA(),e._UZ(54,"input",27),e.YNc(55,K,2,0,"mat-error",7),e.qZA()(),e.TgZ(56,"div",25)(57,"mat-form-field",26)(58,"mat-label"),e._uU(59,"Asignar negocio"),e.qZA(),e.TgZ(60,"mat-select",29)(61,"mat-option",30),e._uU(62,"Seleccione el negocio"),e.qZA(),e.YNc(63,X,2,2,"mat-option",31),e.ALo(64,"async"),e.qZA()()(),e.TgZ(65,"div",32)(66,"div",33)(67,"span",34),e._uU(68,"Estado"),e.qZA(),e.TgZ(69,"mat-slide-toggle",35),e._uU(70),e.qZA()()()()(),e.YNc(71,me,30,13,"mat-expansion-panel",7),e.qZA()()()()()),2&t&&(e.xp6(6),e.Q6J("routerLink","/home"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(1),e.Q6J("routerLink","/users"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(1),e.Q6J("ngIf","new"===r.userId),e.xp6(1),e.Q6J("ngIf","new"!==r.userId),e.xp6(2),e.Q6J("routerLink","./.."),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:chevron-left"),e.xp6(5),e.Q6J("ngIf","new"===r.userId),e.xp6(1),e.Q6J("ngIf","new"!==r.userId),e.xp6(2),e.Q6J("ngIf","new"===r.userId),e.xp6(1),e.Q6J("ngIf","new"!==r.userId),e.xp6(3),e.Q6J("formGroup",r.userForm)("autocomplete","off"),e.xp6(2),e.Q6J("expanded",!0),e.xp6(1),e.Q6J("collapsedHeight","56px"),e.xp6(9),e.Q6J("type","text")("formControlName","name")("placeholder","Nombre"),e.xp6(1),e.Q6J("ngIf",r.userForm.get("name").hasError("required")),e.xp6(5),e.Q6J("type","text")("formControlName","lastname"),e.xp6(1),e.Q6J("ngIf",r.userForm.get("lastname").hasError("required")),e.xp6(5),e.Q6J("type","email")("formControlName","email")("placeholder","Correo electr\xf3nico"),e.xp6(1),e.Q6J("ngIf",r.userForm.get("email").hasError("required")),e.xp6(5),e.Q6J("formControlName","merchantId")("placeholder","Seleccione el negocio"),e.xp6(3),e.Q6J("ngForOf",e.lcZ(64,34,r.merchants$)),e.xp6(6),e.Q6J("formControlName","active")("color","primary"),e.xp6(1),e.hij(" ",!0===r.userForm.get("active").value?"Activo":"Inactivo"," "),e.xp6(1),e.Q6J("ngIf",!r.editMode))},directives:[D.PQ,_.yS,w.Hw,u.O5,C.lW,u.mk,c._Y,c.JL,c.sg,x.pp,x.ib,x.yz,x.yK,p.KE,p.hX,N.Nt,c.Fj,c.Q7,c.JJ,c.u,p.TO,S.gD,$.ey,u.sg,O.Rr,p.R9],pipes:[u.Ov],encapsulation:2,data:{animation:U.L},changeDetection:0}),o})();var pe=i(6087),A=i(4847),y=i(8966),de=i(7446),q=i(7238);const _e=["imageFileInput"];function fe(o,s){1&o&&e._UZ(0,"mat-icon",28),2&o&&e.Q6J("svgIcon","mat_solid:visibility")}function ge(o,s){1&o&&e._UZ(0,"mat-icon",28),2&o&&e.Q6J("svgIcon","mat_solid:visibility_off")}function he(o,s){1&o&&(e.TgZ(0,"mat-error",29),e._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: !" ? $ % ^ &. '),e.qZA())}function xe(o,s){1&o&&(e.TgZ(0,"mat-error",29),e._uU(1," La contrase\xf1a es obligatoria "),e.qZA())}function ve(o,s){if(1&o&&(e.TgZ(0,"mat-error",29),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.userPasswordForm.get("password").getError("password")," ")}}function be(o,s){1&o&&e._UZ(0,"mat-icon",28),2&o&&e.Q6J("svgIcon","mat_solid:visibility")}function Ue(o,s){1&o&&e._UZ(0,"mat-icon",28),2&o&&e.Q6J("svgIcon","mat_solid:visibility_off")}function Ze(o,s){1&o&&(e.TgZ(0,"mat-error",29),e._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: !" ? $ % ^ &. '),e.qZA())}function we(o,s){1&o&&(e.TgZ(0,"mat-error",29),e._uU(1," La contrase\xf1a es obligatoria "),e.qZA())}function Ce(o,s){if(1&o&&(e.TgZ(0,"mat-error",29),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.userPasswordForm.get("password2").getError("password")," ")}}function Ae(o,s){if(1&o){const t=e.EpF();e.ynx(0)(1),e.TgZ(2,"div",14)(3,"div",15)(4,"div",16)(5,"form",17)(6,"div",18)(7,"div",19)(8,"mat-form-field",20)(9,"mat-label"),e._uU(10,"Contrase\xf1a"),e.qZA(),e._UZ(11,"input",21,22),e.TgZ(13,"button",23),e.NdJ("click",function(){e.CHM(t);const n=e.MAs(12);return n.type="password"===n.type?"text":"password"}),e.YNc(14,fe,1,1,"mat-icon",24),e.YNc(15,ge,1,1,"mat-icon",24),e.qZA(),e.YNc(16,he,2,0,"mat-error",25),e.YNc(17,xe,2,0,"mat-error",25),e.YNc(18,ve,2,1,"mat-error",25),e.qZA()(),e.TgZ(19,"div",19)(20,"mat-form-field",20)(21,"mat-label"),e._uU(22,"Confirmar contrase\xf1a "),e.qZA(),e._UZ(23,"input",26,27),e.TgZ(25,"button",23),e.NdJ("click",function(){e.CHM(t);const n=e.MAs(24);return n.type="password"===n.type?"text":"password"}),e.YNc(26,be,1,1,"mat-icon",24),e.YNc(27,Ue,1,1,"mat-icon",24),e.qZA(),e.YNc(28,Ze,2,0,"mat-error",25),e.YNc(29,we,2,0,"mat-error",25),e.YNc(30,Ce,2,1,"mat-error",25),e.qZA()()()()()()(),e.BQk()()}if(2&o){const t=e.MAs(12),r=e.MAs(24),n=e.oxw();e.xp6(5),e.Q6J("formGroup",n.userPasswordForm)("autocomplete","off"),e.xp6(6),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===t.type),e.xp6(1),e.Q6J("ngIf","text"===t.type),e.xp6(1),e.Q6J("ngIf",n.userPasswordForm.get("password").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",n.userPasswordForm.get("password").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.userPasswordForm.get("password").hasError("password")),e.xp6(5),e.Q6J("formControlName","password2"),e.xp6(3),e.Q6J("ngIf","password"===r.type),e.xp6(1),e.Q6J("ngIf","text"===r.type),e.xp6(1),e.Q6J("ngIf",n.userPasswordForm.get("password2").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",n.userPasswordForm.get("password2").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.userPasswordForm.get("password2").hasError("password"))}}function ye(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"mat-checkbox",41),e.NdJ("change",function(n){e.CHM(t);const a=e.oxw().$implicit;return e.oxw(2).manageRoles(a._id,n)}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("color","primary")("checked",t.checked)}}function Te(o,s){1&o&&e._UZ(0,"mat-icon",42),2&o&&e.Q6J("color","primary")}function ke(o,s){if(1&o&&(e.TgZ(0,"div",34)(1,"div",35),e.YNc(2,ye,1,2,"mat-checkbox",36),e.YNc(3,Te,1,1,"mat-icon",37),e.qZA(),e.TgZ(4,"div",38)(5,"span",39),e._uU(6),e.qZA(),e.TgZ(7,"span",40),e._uU(8),e.qZA()()()),2&o){const t=s.$implicit;e.xp6(2),e.Q6J("ngIf",!t.isCoreRole),e.xp6(1),e.Q6J("ngIf",t.isCoreRole),e.xp6(3),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",t.description," ")}}function Ie(o,s){if(1&o&&(e.ynx(0)(1),e.TgZ(2,"div",14)(3,"div",15)(4,"div",30)(5,"div",31)(6,"div",32),e.YNc(7,ke,9,4,"div",33),e.qZA()()()()(),e.BQk()()),2&o){const t=e.oxw();e.xp6(7),e.Q6J("ngForOf",t.roles)}}function Fe(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"button",43),e.NdJ("click",function(){return e.CHM(t),e.oxw().updateUser()}),e._uU(1," Actualizar "),e.qZA()}2&o&&e.Q6J("matTooltip","Actualizar")}function Je(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){return e.CHM(t),e.oxw().updateUserPassword()}),e._uU(1," Actualizar contrase\xf1a "),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.userPasswordForm.invalid)("matTooltip","Actualizar")}}let Qe=(()=>{class o{constructor(t,r,n,a,l,m,g){this.data=t,this._dialogRef=r,this._changeDetectorRef=n,this._formBuilder=a,this._fuseConfirmationService=l,this._userService=m,this._roleService=g,this.dialogMode="edit",this.formSubmitted=!1,this.isValid=!1,this.roles=[],this.showAlert=!1,this.titles=[],this.userRoles=[],this._unsubscribeAll=new b.x,this.dialogMode=t.dialogMode,this.selectedUser=t.user}ngOnInit(){"editPass"===this.dialogMode&&(this.userPasswordForm=this._formBuilder.group({userId:[this.selectedUser._id,[c.kI.required]],password:[null,[c.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],password2:[null,[c.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]},{validators:this.mustMatch("password","password2")}))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}updateUser(){this._fuseConfirmationService.open({title:"Actualizar roles de usuario",message:"\xbfEsta seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(r=>{"confirmed"===r&&this._userService.updateUserRoles(this.selectedUser._id,this.userRoles).subscribe(n=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`Roles del usuario ${n.name} ${n.lastName} actualizados correctamente`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.closeDialog(),this._changeDetectorRef.markForCheck()})}),this._changeDetectorRef.markForCheck()}updateUserPassword(){let t=this.userPasswordForm.getRawValue();t=(0,h.Z)(t,"password2"),this._fuseConfirmationService.open({title:"Actualizar contrase\xf1a",message:"\xbfEst\xe1 seguro que todos los datos son correctos?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&this._userService.resetUserPassword(t).subscribe(a=>{this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`${a.message}`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.closeDialog(),this._changeDetectorRef.markForCheck()})}),this._changeDetectorRef.markForCheck()}trackByFn(t,r){return r.id||t}manageRoles(t,r){r.checked?(this.userRoles.push(t),this._changeDetectorRef.markForCheck()):(this.userRoles.splice(this.userRoles.findIndex(n=>n===t),1),this._changeDetectorRef.markForCheck())}mustMatch(t,r){return n=>{const a=n.get(t),l=n.get(r);if(!a||!l||(l.hasError("mustMatch")&&(delete l.errors.mustMatch,l.updateValueAndValidity()),this._isEmptyInputValue(l.value)||a.value===l.value))return null;const m={mustMatch:"Las contrase\xf1a no coinciden"};return l.setErrors(m),m}}_isEmptyInputValue(t){return null==t||0===t.length}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y.WI),e.Y36(y.so),e.Y36(e.sBO),e.Y36(c.qu),e.Y36(Z.R),e.Y36(f.K),e.Y36(J.N))},o.\u0275cmp=e.Xpm({type:o,selectors:[["user-role-dialog"]],viewQuery:function(t,r){if(1&t&&e.Gf(_e,5),2&t){let n;e.iGM(n=e.CRH())&&(r._imageFileInput=n.first)}},decls:19,vars:10,consts:[[1,"relative","flex","flex-col","w-full","max-h-screen"],[1,"flex","flex-col","items-center","flex-auto","w-full"],[1,"w-full","py-5","px-12"],[1,"flex","w-full"],[1,"flex","flex-col","justify-end","w-4/5","my-2"],[1,"text-2xl","font-bold","truncate","sm:text-2xl"],[1,"flex","text-xl","font-normal","text-red-900","truncate","cursor-pointer","hover:underline"],[1,"mr-2.5","text-mine-900",3,"svgIcon"],["target","_blank",1,"text-mine-900","hover:text-primary-700",3,"href"],[4,"ngIf"],[1,"flex","items-center","justify-between","w-full","px-8","py-4","sm:px-12","bg-gray-50","dark:bg-transparent"],["mat-button","",1,"rounded-sm",3,"matTooltip","click"],["mat-flat-button","","class","rounded-sm text-mine-900 bg-primary-700",3,"matTooltip","click",4,"ngIf"],["mat-button","","class","rounded-sm text-mine-900 bg-primary-700",3,"disabled","matTooltip","click",4,"ngIf"],[1,"flex","flex-col","border-t","gap-y-5"],[1,"flex","flex-col","w-full","gap-8","md:flex-row"],[1,"flex","flex-col","w-full","space-y-4"],[1,"flex","flex-col",3,"formGroup","autocomplete"],[1,"flex","flex-col","w-full","gap-4","mt-5","mb-2"],[1,"w-full"],[1,"w-full","fuse-mat-no-subscript"],["type","password","matInput","","placeholder","Contrase\xf1a","required","",3,"formControlName"],["passwordUpdateField1",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["class","pb-5",4,"ngIf"],["type","password","matInput","","placeholder","Repita la contrase\xf1a","required","",3,"formControlName"],["passwordUpdateField2",""],[1,"icon-size-5",3,"svgIcon"],[1,"pb-5"],[1,"flex","flex-col","w-full","pt-6","space-y-4","sm:mt-4","sm:space-y-8"],[1,"flex","flex-col","mb-10"],[1,"w-full","gap-4","grid","grid-cols-2"],["class","rounded-sm border border-dashed border-primary-700 p-3 ",4,"ngFor","ngForOf"],[1,"rounded-sm","border","border-dashed","border-primary-700","p-3"],[1,"h-6"],[3,"color","checked","change",4,"ngIf"],["svgIcon","heroicons_solid:lock-closed",3,"color",4,"ngIf"],[1,"flex","flex-col"],[1,"font-medium"],[1,"text-md","text-hint"],[3,"color","checked","change"],["svgIcon","heroicons_solid:lock-closed",3,"color"],["mat-flat-button","",1,"rounded-sm","text-mine-900","bg-primary-700",3,"matTooltip","click"],["mat-button","",1,"rounded-sm","text-mine-900","bg-primary-700",3,"disabled","matTooltip","click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5),e._uU(6),e.qZA(),e.TgZ(7,"span",6),e._UZ(8,"mat-icon",7),e.TgZ(9,"a",8),e._uU(10),e.qZA()()()(),e.YNc(11,Ae,31,14,"ng-container",9),e.YNc(12,Ie,8,1,"ng-container",9),e.qZA(),e.ynx(13),e.TgZ(14,"div",10)(15,"button",11),e.NdJ("click",function(){return r.closeDialog()}),e._uU(16," Cancelar "),e.qZA(),e.YNc(17,Fe,2,1,"button",12),e.YNc(18,Je,2,2,"button",13),e.qZA(),e.BQk(),e.qZA()()),2&t&&(e.xp6(6),e.AsE(" ",r.selectedUser.name," ",r.selectedUser.lastname," "),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:mail"),e.xp6(1),e.Q6J("href","mailto:"+r.selectedUser.email,e.LSH),e.xp6(1),e.Oqu(r.selectedUser.email),e.xp6(1),e.Q6J("ngIf","editPass"===r.dialogMode),e.xp6(1),e.Q6J("ngIf","edit"===r.dialogMode),e.xp6(3),e.Q6J("matTooltip","Cancelar"),e.xp6(2),e.Q6J("ngIf","edit"===r.data.dialogMode),e.xp6(1),e.Q6J("ngIf","editPass"===r.data.dialogMode))},directives:[w.Hw,u.O5,c._Y,c.JL,c.sg,p.KE,p.hX,N.Nt,c.Fj,c.Q7,c.JJ,c.u,C.lW,p.R9,p.TO,u.sg,de.oG,q.gM],encapsulation:2,data:{animation:U.L},changeDetection:0}),o})();var De=i(1927),T=i(2181);function Ne(o,s){1&o&&(e.ynx(0),e._UZ(1,"mat-icon",43),e.BQk()),2&o&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:check"))}function qe(o,s){1&o&&(e.ynx(0),e._UZ(1,"mat-icon",44),e.BQk()),2&o&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:x"))}function Ee(o,s){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",36)(2,"div",37),e._uU(3),e.qZA(),e.TgZ(4,"div",31),e._uU(5),e.qZA(),e.TgZ(6,"div",32),e.YNc(7,Ne,2,1,"ng-container",34),e.YNc(8,qe,2,1,"ng-container",34),e.qZA(),e.TgZ(9,"div",38)(10,"button",39),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(3).createOrEditUser(a._id)}),e._UZ(11,"mat-icon",25),e.qZA(),e.TgZ(12,"button",40),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(3).openDialog(a,"editPass","720px")}),e._UZ(13,"mat-icon",25),e.qZA(),e.TgZ(14,"button",41),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(3).openDialog(a,"edit","720px")}),e._UZ(15,"mat-icon",25),e.qZA(),e.TgZ(16,"button",42),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(3).deleteUser(a)}),e._UZ(17,"mat-icon",25),e.qZA()()(),e.BQk()}if(2&o){const t=s.$implicit;e.xp6(3),e.AsE(" ",t.name," ",t.lastname," "),e.xp6(2),e.hij(" ",t.email," "),e.xp6(2),e.Q6J("ngIf",t.active),e.xp6(1),e.Q6J("ngIf",!t.active),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:pencil"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:key"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:shield-check"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:trash")}}function Re(o,s){if(1&o&&(e.ynx(0),e.YNc(1,Ee,18,9,"ng-container",35),e.BQk()),2&o){const t=s.ngIf,r=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",r.trackByFn)}}function Ye(o,s){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",21)(2,"div",22),e._uU(3,"Listado de usuarios"),e.qZA(),e.TgZ(4,"div",23)(5,"button",24),e._UZ(6,"mat-icon",25),e.qZA(),e.TgZ(7,"mat-menu",null,26)(9,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw().exportAsExcelFile()}),e._uU(10,"Exportar a excel"),e.qZA(),e.TgZ(11,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw().exportAsCsvFile()}),e._uU(12,"Exportar a csv"),e.qZA()()()(),e.TgZ(13,"div",28)(14,"div",29)(15,"div",30),e._uU(16," Nombre y Apellidos "),e.qZA(),e.TgZ(17,"div",31),e._uU(18," Correo electr\xf3nico "),e.qZA(),e.TgZ(19,"div",32),e._uU(20," Activo "),e.qZA(),e.TgZ(21,"div",33),e._uU(22," Acciones "),e.qZA()(),e.YNc(23,Re,2,2,"ng-container",34),e.ALo(24,"async"),e.qZA(),e.BQk()}if(2&o){const t=e.MAs(8),r=e.oxw();e.xp6(5),e.Q6J("matMenuTriggerFor",t),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:dots-vertical"),e.xp6(9),e.Q6J("mat-sort-header","name"),e.xp6(8),e.Q6J("ngIf",e.lcZ(24,4,r.users$))}}function Me(o,s){1&o&&(e.TgZ(0,"div",45),e._uU(1,"A\xfan no hay usuarios para esta aplicaci\xf3n! "),e.qZA())}let Se=(()=>{class o{constructor(t,r,n,a,l,m,g){this._changeDetectorRef=t,this._fuseConfirmationService=r,this._fileSaverService=n,this._router=a,this._userDialog=l,this._userService=m,this.store=g,this.emptyUser=F,this.searchInputControl=new c.NI,this.selectedUser=null,this.users=[],this.users$=(0,v.of)([]),this._unsubscribeAll=new b.x}ngOnInit(){this.users$=this.store.select(I.YN),this.users$.pipe((0,d.R)(this._unsubscribeAll)).subscribe(t=>{this.users=t,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createOrEditUser(t="new"){this._router.navigateByUrl(`/users/${t}`)}deleteUser(t){this._fuseConfirmationService.open({title:"Eliminar Usuario",message:`\xbfEst\xe1 seguro que desea eliminar el usuario ${t.name} ${t.lastname}?`,icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(n=>{"confirmed"===n&&this._userService.deleteUser(t._id).subscribe(a=>{!a||(this._fuseConfirmationService.open({title:"Confirmaci\xf3n",message:`Usuario ${t.name} ${t.lastname} eliminado correctamente`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck())})}),this._changeDetectorRef.markForCheck()}exportAsExcelFile(){this._fileSaverService.exportAsExcelFile(this.users,"users")}exportAsCsvFile(){this._fileSaverService.exportAsCsvFile(this.users,"users")}trackByFn(t,r){return r.id||t}getAccountName(t){}openDialog(t,r,n){this._userDialog.open(Qe,{data:{user:t,dialogMode:r},width:n,panelClass:"ath-dialog-panel"})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO),e.Y36(Z.R),e.Y36(De.m),e.Y36(_.F0),e.Y36(y.uw),e.Y36(f.K),e.Y36(Q.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ath-users"]],viewQuery:function(t,r){if(1&t&&(e.Gf(pe.NW,5),e.Gf(A.YE,5)),2&t){let n;e.iGM(n=e.CRH())&&(r._paginator=n.first),e.iGM(n=e.CRH())&&(r._sort=n.first)}},decls:31,vars:9,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","sm:flex-row","flex-0","sm:items-center","sm:justify-between","pb-22","sm:pt-12","sm:pb-28","sm:px-10","bg-mine-50","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","text-primary-700",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-700"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","flex-shrink-0","mt-6","sm:mt-0","sm:ml-4"],["mat-raised-button","","mat-button","",1,"ml-4","text-white","bg-primary-500",3,"click"],[3,"svgIcon"],[1,"hidden","ml-2","mr-1","text-white","sm:block"],[1,"flex-auto","p-6","-mt-16","shadow","bg-mine-200","sm:p-10","rounded-t-2xl"],[1,"w-full","p-16","shadow","rounded-2xl","bg-card","print:w-auto","print:rounded-none","print:shadow-none","print:bg-transparent"],[4,"ngIf","ngIfElse"],["noUsers",""],[1,"flex","items-center","justify-between","mb-5"],[1,"text-2xl","font-semibold","leading-tight"],[1,"-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],[1,"icon-size-5",3,"svgIcon"],["listUsersMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","users-grid","md:px-8","text-md","text-secondary","bg-mine-50","dark:bg-black","dark:bg-opacity-5"],[3,"mat-sort-header"],[1,"hidden","truncate","md:block"],[1,"hidden","text-center","lg:block"],[1,"text-center"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","users-grid","md:px-8"],[1,"flex","truncate"],[1,"flex","flex-col","justify-center","gap-1","sm:flex-row"],["mat-stroked-button","","matTooltip","Editar",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Cambiar contrase\xf1a",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Asignar Roles",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Eliminar",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"text-green-400","icon-size-5",3,"svgIcon"],[1,"text-red-400","icon-size-5",3,"svgIcon"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","sm:p-16"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4)(6,"a",5),e._uU(7,"Inicio"),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"mat-icon",6),e.TgZ(10,"a",7),e._uU(11,"Usuarios"),e.qZA()(),e.TgZ(12,"div",8)(13,"a",9),e._UZ(14,"mat-icon",6),e.TgZ(15,"span",10),e._uU(16,"Regresar"),e.qZA()()()()(),e.TgZ(17,"div",11)(18,"h2",12),e._uU(19," Listado de usuarios "),e.qZA()()(),e.TgZ(20,"div",13)(21,"button",14),e.NdJ("click",function(){return r.createOrEditUser()}),e._UZ(22,"mat-icon",15),e.TgZ(23,"span",16),e._uU(24,"Nuevo"),e.qZA()()()(),e.TgZ(25,"div",17)(26,"div",18),e.YNc(27,Ye,25,6,"ng-container",19),e.ALo(28,"async"),e.YNc(29,Me,2,0,"ng-template",null,20,e.W1O),e.qZA()()()),2&t){const n=e.MAs(30);e.xp6(6),e.Q6J("routerLink","/home"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:chevron-right"),e.xp6(4),e.Q6J("routerLink","./.."),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:chevron-left"),e.xp6(8),e.Q6J("svgIcon","heroicons_outline:plus"),e.xp6(5),e.Q6J("ngIf",e.lcZ(28,7,r.users$).length>0)("ngIfElse",n)}},directives:[D.PQ,_.yS,w.Hw,C.lW,u.O5,T.p6,T.VK,T.OP,A.YE,A.nU,u.sg,q.gM],pipes:[u.Ov],styles:[".users-grid{grid-template-columns:45% 45%}@media (min-width: 960px){.users-grid{grid-template-columns:30% 40% 30%}}\n"],encapsulation:2,data:{animation:U.L},changeDetection:0}),o})();var $e=i(2911);let E=(()=>{class o{constructor(t){this._userService=t}resolve(t,r){return this._userService.getUsers()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(f.K))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const Le=[{path:"",component:Se,resolve:{users:E}},{path:":userId",component:ue,resolve:{merchants:$e.K,users:E,user:(()=>{class o{constructor(t){this._userService=t}resolve(t,r){const n=t.params.userId;if("new"!==n)return this._userService.getUserById(n)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(f.K))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}];let ze=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[_.Bz.forChild(Le),R.m]]}),o})()}}]);