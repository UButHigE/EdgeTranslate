(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d="\u00d6vers\u00e4tt",e=this||self;function f(a,w){a=a.split(".");var b=e;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===w?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=w};var g={0:d,1:"Avbryt",2:"St\u00e4ng",3:function(a){return"Google har \u00f6versatt den h\u00e4r sidan automatiskt till: "+a},4:function(a){return"\u00d6versatt till: "+a},5:"Fel: Servern kunde inte slutf\u00f6ra din beg\u00e4ran. F\u00f6rs\u00f6k igen senare.",6:"L\u00e4s mer",7:function(a){return"Drivs av "+a},8:d,9:"\u00d6vers\u00e4ttning p\u00e5g\u00e5r",10:function(a){return"Vill du \u00f6vers\u00e4tta den h\u00e4r sidan till: "+(a+" med Google \u00d6vers\u00e4tt?")},11:function(a){return"Visa sidan p\u00e5: "+
a},12:"Visa originalet",13:"N\u00e4r inneh\u00e5llet i den h\u00e4r lokala filen skickas till Google f\u00f6r \u00f6vers\u00e4ttning anv\u00e4nds en s\u00e4ker anslutning.",14:"N\u00e4r inneh\u00e5llet p\u00e5 den h\u00e4r s\u00e4kra sidan skickas till Google f\u00f6r \u00f6vers\u00e4ttning anv\u00e4nds en s\u00e4ker anslutning.",15:"N\u00e4r inneh\u00e5llet p\u00e5 den h\u00e4r intran\u00e4tsidan skickas till Google f\u00f6r \u00f6vers\u00e4ttning anv\u00e4nds en s\u00e4ker anslutning.",16:"V\u00e4lj spr\u00e5k",
17:function(a){return"Inaktivera \u00f6vers\u00e4ttning av "+a},18:function(a){return"Inaktivera f\u00f6r: "+a},19:"D\u00f6lj alltid",20:"K\u00e4lltext:",21:"Bidra med en b\u00e4ttre \u00f6vers\u00e4ttning",22:"Bidra",23:"\u00d6vers\u00e4tt alla",24:"\u00c5terst\u00e4ll alla",25:"Avbryt alla",26:"\u00d6vers\u00e4tt avsnitten till mitt spr\u00e5k",27:function(a){return"\u00d6vers\u00e4tt allt till "+a},28:"Visa originalspr\u00e5k",29:"Alternativ",30:"Inaktivera \u00f6vers\u00e4ttning f\u00f6r den h\u00e4r webbplatsen",
31:null,32:"Visa alternativa \u00f6vers\u00e4ttningar",33:"Klicka p\u00e5 orden om du vill visa alternativa \u00f6vers\u00e4ttningar",34:"Anv\u00e4nd",35:"H\u00e5ll ned Skift-tangenten och dra om du vill \u00e4ndra ordning",36:"Klicka om du vill visa alternativa \u00f6vers\u00e4ttningar",37:"Om du vill \u00e4ndra ordning p\u00e5 orden ovan h\u00e5ller du ned Skift-tangenten samtidigt som du klickar p\u00e5 orden och drar runt dem.",38:"Tack f\u00f6r att du bidrar med ditt \u00f6vers\u00e4ttningsf\u00f6rslag till Google Translate.",
39:"Hantera \u00f6vers\u00e4ttning f\u00f6r den h\u00e4r webbplatsen",40:"Klicka p\u00e5 ett ord om du vill visa alternativa \u00f6vers\u00e4ttningar, eller dubbelklicka f\u00f6r att redigera direkt",41:"K\u00e4lltext",42:d,43:d,44:"Din \u00e4ndring har skickats in.",45:"Fel: Webbsidans spr\u00e5k st\u00f6ds inte.",46:"\u00d6vers\u00e4ttningswidget f\u00f6r spr\u00e5kmenyn"};var h=window.google&&google.translate&&google.translate._const;
if(h){var k;a:{for(var l=[],m=[""],n=0;n<m.length;++n){var p=m[n].split(","),q=p[0];if(q){var r=Number(p[1]);if(!(!r||.1<r||0>r)){var t=Number(p[2]),u=new Date,v=1E4*u.getFullYear()+100*(u.getMonth()+1)+u.getDate();!t||t<v||l.push({version:q,ratio:r,a:t})}}}var x=0,y=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),z=Number(y&&y[1])||Math.random();for(n=0;n<l.length;++n){var A=l[n];x+=A.ratio;if(1<=x)break;if(z<x){k=A.version;break a}}k="TE_20200210_00"}var B="/element/%s/e/js/element/element_main.js".replace("%s",
k);if("0"==k){var C=" element %s e js element element_main.js".split(" ");C[C.length-1]="main_sv.js";B=C.join("/").replace("%s",k)}if(h._cjlc)h._cjlc(this.EDGE_TRANSLATE_URL + "google/element_main.js");else{var D=this.EDGE_TRANSLATE_URL + "google/element_main.js",E=document.createElement("script");E.type="text/javascript";E.charset="UTF-8";E.src=D;var F=document.getElementsByTagName("head")[0];F||(F=document.body.parentNode.appendChild(document.createElement("head")));F.appendChild(E)}f("google.translate.m",g);f("google.translate.v",k)};}).call(window)
