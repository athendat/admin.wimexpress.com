"use strict";(self.webpackChunkwimexpress=self.webpackChunkwimexpress||[]).push([[250],{5250:(w,c,o)=>{o.r(c),o.d(c,{AuthSignOutModule:()=>Z});var u=o(9116),r=o(4859),m=o(5804),l=o(3786),d=o(7579),g=o(2805),h=o(8746),x=o(2529),f=o(2722),p=o(8505),t=o(4650),v=o(8951),a=o(6895);function A(n,i){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"i18nPlural"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.hij(" Redireccionando en ",t.xi3(2,1,e.countdown,e.countdownMapping)," ")}}function S(n,i){1&n&&(t.ynx(0),t._uU(1," Esta siendo redireccionado al inicio de sesi\xf3n. "),t.BQk())}const O=function(){return["/sign-in"]},y=[{path:"",component:(()=>{class n{constructor(e,s){this._authService=e,this._router=s,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new d.x}ngOnInit(){this._authService.signOut(),(0,g.H)(1e3,1e3).pipe((0,h.x)(()=>{this._router.navigate(["sign-in"])}),(0,x.o)(()=>this.countdown>0),(0,f.R)(this._unsubscribeAll),(0,p.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(v.e),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["auth-sign-out"]],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0","bg-cover",2,"background-image","url('assets/images/bg/auth-bg.jpg')"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card","bg-opacity-80"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12","mx-auto"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight","text-center","text-mine-200","sm:text-mine-800"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","font-medium","text-center","text-md","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Ha cerrado sesi\xf3n correctamente."),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,A,3,4,"ng-container",7),t.YNc(9,S,2,0,"ng-container",7),t.qZA(),t.TgZ(10,"div",8)(11,"span"),t._uU(12,"Ir a"),t.qZA(),t.TgZ(13,"a",9),t._uU(14,"Iniciar Sesi\xf3n "),t.qZA()()()()()),2&e&&(t.xp6(8),t.Q6J("ngIf",s.countdown>0),t.xp6(1),t.Q6J("ngIf",0===s.countdown),t.xp6(4),t.Q6J("routerLink",t.DdM(3,O)))},dependencies:[u.yS,a.O5,a.Gx],encapsulation:2}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(y),r.ot,m.J,l.m]}),n})()}}]);