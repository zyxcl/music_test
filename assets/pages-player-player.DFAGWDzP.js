import{g as l,h as a,T as s,U as e,k as r,l as o,o as c,t as n,a as i,w as t,b as f,m as u,P as d,c as p,F as A,x as g,p as v,A as m,i as S,V as b,y as w,W as y,n as k,X as T,Y as h}from"./index-CQbW9TwN.js";import{_ as D}from"./uni-icons.BCPeFVnA.js";import{_ as F}from"./comment.Ci4b-fKj.js";import{_ as J}from"./playlistCard.Cyj65URB.js";import{u as K}from"./music.DHv6TU_z.js";import{_ as R}from"./plugin-vueexport-helper.BCo6x5W8.js";import"./uni-section.Bg_GJpQ_.js";const B=R(l({__name:"player",setup(l){const R=K(),B=a(!1),H=a(!1),G=a([]),C=a(!1),P=a(0);s((()=>R.currentTime),(()=>{G.value.forEach(((l,a)=>{R.currentTime>=l[0]&&R.currentTime<G.value[a+1][0]&&(P.value=a)}))}));s((()=>R.curSongDetail),(()=>{var l;R.curSongDetail.id&&((async()=>{const l=(await h(R.curSongDetail.id)).lrc.lyric.split(/\n/).map((l=>{let[a,s]=l.split("]"),[e,r]=a.slice(1).split(":");return a=60*e+1*r,[a,s]}));G.value=l})(),T({title:R.curSongDetail.name+" - "+(null==(l=R.curSongDetail.ar)?void 0:l.map((l=>l.name)).join("/"))}))}),{immediate:!0});const Y=e((()=>R.isPlay?"../../static/icon/zanting.png":"../../static/icon/bofang.png")),j=l=>{var a;return`${Math.floor(l/60)}:${(a=parseInt(l%60))>=10?a:"0"+a}`};return(l,a)=>{const s=S,e=b,T=w,h=r(o("uni-icons"),D),K=y,L=r(o("comment"),F),M=r(o("playlistCard"),J);return c(),n(A,null,[i(s,{class:"bg"},{default:t((()=>{var l;return[i(s,{class:"blur-image",style:f({backgroundImage:`url(${null==(l=u(R).curSongDetail.al)?void 0:l.picUrl})`})},null,8,["style"])]})),_:1}),i(s,{class:"player-wrap"},{default:t((()=>[d("div",{class:"center",onClick:a[0]||(a[0]=l=>C.value=!C.value)},[C.value?(c(),p(e,{key:0,"scroll-y":"","scroll-top":30*P.value,class:"lyric"},{default:t((()=>[(c(!0),n(A,null,g(G.value,((l,a)=>(c(),p(s,{key:a,class:k(["lyric-row",{active:P.value===a}])},{default:t((()=>[v(m(l[1]),1)])),_:2},1032,["class"])))),128))])),_:1},8,["scroll-top"])):(c(),p(s,{key:1,class:"song-disc"},{default:t((()=>[i(T,{class:"needle-ab nobg",src:"/assets/needle-ab-rkdmo8lr.png",mode:"widthFix"}),i(s,{class:"song-circle"},{default:t((()=>{var l;return[i(T,{class:"circle-bg nobg",src:"/assets/disc-BpXxhfCl.png",mode:"widthFix"}),i(T,{class:"nobg",src:null==(l=u(R).curSongDetail.al)?void 0:l.picUrl,mode:"widthFix"},null,8,["src"])]})),_:1})])),_:1}))]),i(s,{class:"control"},{default:t((()=>[i(s,{class:"icons-bar"},{default:t((()=>[i(h,{type:"heart",size:"40",color:"#ffffff"}),i(h,{type:"chat",size:"40",color:"#ffffff",onClick:a[1]||(a[1]=l=>H.value=!0)})])),_:1}),i(s,{class:"progress"},{default:t((()=>[i(s,{class:"time"},{default:t((()=>[v(m(j(u(R).currentTime)),1)])),_:1}),i(K,{value:u(R).currentTime/u(R).duration*100,onChange:a[2]||(a[2]=l=>u(R).changeCurrent(l.detail.value)),activeColor:"#10AEFF",backgroundColor:"#ffffff","block-color":"#ffffff","block-size":"10"},null,8,["value"]),i(s,{class:"time"},{default:t((()=>[v(m(j(u(R).duration)),1)])),_:1})])),_:1}),i(s,{class:"play-bar"},{default:t((()=>[u(R).isRandom?(c(),p(T,{key:0,class:"icon",src:"data:image/png;base64,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",mode:"widthFix",onClick:a[3]||(a[3]=l=>u(R).isRandom=!1)})):(c(),p(h,{key:1,class:"icon",type:"loop",color:"#ffffff",onClick:a[4]||(a[4]=l=>u(R).isRandom=!0)})),i(h,{class:"icon",type:"arrow-left",color:"#ffffff",onClick:a[5]||(a[5]=l=>u(R).changeMusic(u(R).currentIndex-1))}),i(T,{class:"icon nobg",src:Y.value,mode:"widthFix",onClick:a[6]||(a[6]=l=>u(R).play())},null,8,["src"]),i(h,{class:"icon",type:"arrow-right",color:"#ffffff",onClick:a[7]||(a[7]=l=>u(R).changeMusic(u(R).currentIndex+1))}),i(h,{class:"icon",type:"list",color:"#ffffff",onClick:a[8]||(a[8]=l=>B.value=!0)})])),_:1})])),_:1})])),_:1}),i(L,{visible:H.value,"onUpdate:visible":a[9]||(a[9]=l=>H.value=l),type:"music",id:u(R).curSongDetail.id},null,8,["visible","id"]),i(M,{visible:B.value,"onUpdate:visible":a[10]||(a[10]=l=>B.value=l)},null,8,["visible"])],64)}}}),[["__scopeId","data-v-f222ebe6"]]);export{B as default};
