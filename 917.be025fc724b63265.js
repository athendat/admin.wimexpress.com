"use strict";(self.webpackChunkwirepharma=self.webpackChunkwirepharma||[]).push([[917],{2917:(M,c,o)=>{o.r(c),o.d(c,{AuthSignInModule:()=>U});var l=o(5357),f=o(442),s=o(3075),p=o(3844),t=o(5e3),d=o(8951),h=o(9808),I=o(2494),m=o(7322),x=o(7531),v=o(7423),A=o(5245),F=o(7446),b=o(773);const y=["signInNgForm"];function Z(e,i){if(1&e&&(t.TgZ(0,"fuse-alert",21),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake","error"===n.alert.type),t.xp6(1),t.hij(" ",n.alert.message," ")}}function C(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El correo electr\xf3nico es obligatorio "),t.qZA())}function S(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Correo electr\xf3nico no v\xe1lido "),t.qZA())}function w(e,i){1&e&&t._UZ(0,"mat-icon",22),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function J(e,i){1&e&&t._UZ(0,"mat-icon",22),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function T(e,i){1&e&&(t.TgZ(0,"span",23),t._uU(1," Iniciar Sesi\xf3n "),t.qZA())}function N(e,i){1&e&&t._UZ(0,"mat-progress-spinner",24),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const Q=[{path:"",component:(()=>{class e{constructor(n,r,a,u){this._activatedRoute=n,this._authService=r,this._formBuilder=a,this._router=u,this.alert={type:"success",message:""},this.showAlert=!1,this.email=null,this.rememberMe=!1}ngOnInit(){this.email=localStorage.getItem("email")||null,this.signInForm=this._formBuilder.group({email:[null,[s.kI.required,s.kI.email]],pwd:[null,s.kI.required],rememberMe:[!1]}),null!==this.email&&(this.signInForm.get("email").setValue(this.email),this.signInForm.get("rememberMe").setValue(!0))}signIn(){this.signInForm.invalid||(this.signInForm.get("rememberMe").value?localStorage.setItem("email",this.signInForm.get("email").value):localStorage.removeItem("email"),this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(()=>{const n=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(n)},()=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Credenciales incorrectas"},this.showAlert=!0}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.gz),t.Y36(d.e),t.Y36(s.qu),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-in"]],viewQuery:function(n,r){if(1&n&&t.Gf(y,5),2&n){let a;t.iGM(a=t.CRH())&&(r.signInNgForm=a.first)}},decls:32,vars:14,consts:[[1,"flex","flex-col","items-center","justify-center","flex-auto","min-w-0","bg-cover",2,"background-image","url('assets/images/bg/auth-bg.jpg')"],[1,"w-full","px-4","py-8","sm:w-auto","sm:p-12","sm:rounded-2xl","sm:shadow","bg-card","bg-opacity-80"],[1,"w-full","mx-auto","max-w-80","sm:w-80","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight","text-mine-200","sm:text-mine-800"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","pwd","matInput","","type","pwd",1,"focus:ring-0",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5 text-mine-500",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","justify-between","w-full","mt-1.5"],[3,"color","formControlName"],["mat-flat-button","",1,"w-full","mt-6","rounded-full","fuse-mat-button-large","bg-gradient-to-l","from-primary-500","to-primary-600",3,"disabled","click"],["class","text-lg font-semibold tracking-wide text-black",4,"ngIf"],["class","text-black",3,"diameter","mode",4,"ngIf"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5","text-mine-500",3,"svgIcon"],[1,"text-lg","font-semibold","tracking-wide","text-black"],[1,"text-black",3,"diameter","mode"]],template:function(n,r){if(1&n){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Iniciar Sesi\xf3n"),t.qZA(),t.YNc(7,Z,2,5,"fuse-alert",6),t.TgZ(8,"form",7,8)(10,"mat-form-field",9)(11,"mat-label"),t._uU(12,"Correo electr\xf3nico"),t.qZA(),t._UZ(13,"input",10),t.YNc(14,C,2,0,"mat-error",11),t.YNc(15,S,2,0,"mat-error",11),t.qZA(),t.TgZ(16,"mat-form-field",9)(17,"mat-label"),t._uU(18,"Contrase\xf1a"),t.qZA(),t._UZ(19,"input",12,13),t.TgZ(21,"button",14),t.NdJ("click",function(){t.CHM(a);const g=t.MAs(20);return g.type="pwd"===g.type?"text":"pwd"}),t.YNc(22,w,1,1,"mat-icon",15),t.YNc(23,J,1,1,"mat-icon",15),t.qZA(),t.TgZ(24,"mat-error"),t._uU(25," La contrase\xf1a es obligatoria "),t.qZA()(),t.TgZ(26,"div",16)(27,"mat-checkbox",17),t._uU(28," Recordar mi usuario "),t.qZA()(),t.TgZ(29,"button",18),t.NdJ("click",function(){return r.signIn()}),t.YNc(30,T,2,0,"span",19),t.YNc(31,N,1,2,"mat-progress-spinner",20),t.qZA()()()()()}if(2&n){const a=t.MAs(20);t.xp6(1),t.Q6J("@fadeInBottom",void 0),t.xp6(6),t.Q6J("ngIf",r.showAlert),t.xp6(1),t.Q6J("formGroup",r.signInForm),t.xp6(5),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",r.signInForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",r.signInForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","pwd"),t.xp6(3),t.Q6J("ngIf","pwd"===a.type),t.xp6(1),t.Q6J("ngIf","text"===a.type),t.xp6(4),t.Q6J("color","primary")("formControlName","rememberMe"),t.xp6(2),t.Q6J("disabled",r.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",!r.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",r.signInForm.disabled)}},directives:[h.O5,I.W,s._Y,s.JL,s.sg,m.KE,m.hX,x.Nt,s.Fj,s.JJ,s.u,m.TO,v.lW,m.R9,A.Hw,F.oG,b.Ou],encapsulation:2,data:{animation:p.L}}),e})()}];let U=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(Q),f.m]]}),e})()}}]);