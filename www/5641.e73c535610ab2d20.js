"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5641],{5641:(C,p,r)=>{r.r(p),r.d(p,{ManejarPageModule:()=>b});var f=r(6814),h=r(95),a=r(6728),d=r(6809),s=r(5861),e=r(6242),m=r(1675),v=r(2014);const M=()=>["/tab4/administar-vehiculos"];function Z(n,i){if(1&n&&(e.TgZ(0,"ion-item")(1,"ion-card")(2,"div",5),e._UZ(3,"ion-input",8)(4,"ion-input",9)(5,"ion-input",10),e.TgZ(6,"div"),e._UZ(7,"br"),e.TgZ(8,"a",7),e._UZ(9,"ion-icon",11),e._uU(10," Editar Vehiculo"),e.qZA()()()()()),2&n){const l=i.$implicit;e.xp6(3),e.s9C("placeholder",l.patente),e.xp6(1),e.s9C("placeholder",l.marca),e.xp6(1),e.s9C("placeholder",l.modelo),e.xp6(3),e.Q6J("routerLink",e.DdM(4,M))}}const P=()=>["/tabs/tab1"],j=()=>["/tabs/tab4/agregar-vehiculo"],x=[{path:"",component:(()=>{var n;class i{constructor(t,o,c){this.router=t,this.apiService=o,this.storage=c}ngOnInit(){var t=this;this.storage.get("user_id").then(function(){var o=(0,s.Z)(function*(c){null!==c&&t.apiService.getVehiculoById(c).subscribe(function(){var u=(0,s.Z)(function*(g){t.vehiculos=g});return function(g){return u.apply(this,arguments)}}(),u=>{console.error(u)})});return function(c){return o.apply(this,arguments)}}(),o=>{})}onFileSelected(t){const o=t.target.files[0];o&&console.log("Archivo seleccionado:",o.name)}sincronizar(){var t=this;return(0,s.Z)(function*(){t.storage.get("user_id").then(function(){var o=(0,s.Z)(function*(c){null!==c&&t.apiService.getVehiculoById(c).subscribe(function(){var u=(0,s.Z)(function*(g){t.vehiculos=g});return function(g){return u.apply(this,arguments)}}(),u=>{console.error(u)})});return function(c){return o.apply(this,arguments)}}(),o=>{})})()}}return(n=i).\u0275fac=function(t){return new(t||n)(e.Y36(d.F0),e.Y36(m.M),e.Y36(v.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-manejar"]],decls:16,vars:7,consts:[[3,"translucent"],[1,"linkBack",3,"routerLink"],["name","arrow-back-outline"],[3,"fullscreen"],[4,"ngFor","ngForOf"],[1,"CardVehiculo"],["name","add-circle-outline"],[3,"routerLink"],["label","Patente","fill","outline","disabled","true",3,"placeholder"],["label","Marca","fill","outline","disabled","true",3,"placeholder"],["label","Modelo","fill","outline","disabled","true",3,"placeholder"],["name","create-outline"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-item")(3,"a",1)(4,"h4"),e._UZ(5,"ion-icon",2),e._uU(6," Volver"),e.qZA()()()()(),e.TgZ(7,"ion-content",3),e.YNc(8,Z,11,5,"ion-item",4),e.TgZ(9,"ion-item")(10,"ion-card")(11,"div",5),e._UZ(12,"ion-icon",6),e.TgZ(13,"h3")(14,"a",7),e._uU(15,"Agregar nuevo vehiculo"),e.qZA()()()()()()),2&t&&(e.Q6J("translucent",!0),e.xp6(3),e.Q6J("routerLink",e.DdM(5,P)),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngForOf",o.vehiculos),e.xp6(6),e.Q6J("routerLink",e.DdM(6,j)))},dependencies:[f.sg,a.PM,a.W2,a.Gu,a.gu,a.pK,a.Ie,a.sr,a.j9,a.Fo,d.rH],styles:[".botonDetalles[_ngcontent-%COMP%]{font-size:80%;margin:10px;padding:10px;float:right}.CardVehiculo[_ngcontent-%COMP%]{margin:auto;padding:5px}a[_ngcontent-%COMP%]{text-decoration:none;color:#ffb800}"]}),i})()}];let y=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(x),d.Bz]}),i})(),b=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.ez,h.u5,a.Pc,y]}),i})()}}]);