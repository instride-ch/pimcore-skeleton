(self.webpackChunk_instride_pimcore_skeleton=self.webpackChunk_instride_pimcore_skeleton||[]).push([[44],{8500:(t,i,s)=>{"use strict";var h={};s.r(h),s.d(h,{Close:()=>r.uO,Drop:()=>p.c,Dropdown:()=>p.c,Grid:()=>d.c,HeightViewport:()=>l.c,Icon:()=>r.cp,Margin:()=>m.c,Nav:()=>u.c,Navbar:()=>w.c,NavbarToggleIcon:()=>r.gF,Offcanvas:()=>g.c,Spinner:()=>r.c8,Sticky:()=>x.c,Toggle:()=>k.c});var e=s(7972),o=s(5180),a=s(5072),n=s(5468),c=s.n(n),p=s(3740),d=s(2868),l=s(9796),r=s(2228),m=s(904),u=s(9120),w=s(3736),g=s(3012),x=s(9780),k=s(2120),M=s(9533);(0,a.__)(h,((t,i)=>e.c.component(i,t))),(0,o.c)(e.c),e.c.version="3.18.1",(0,a.__)(M,((t,i)=>e.c.component(i,t))),e.c.use(c());const b=e.c;function f(t,i,s,h,e,o){this.opts=t,this.ctx=i,this.tick=s,this.baseRad=h,this.dieX=e,this.dieY=o,this.reset()}const y={mixins:[s(7612).c],data:{w:window.innerWidth,h:window.innerHeight,tick:0,lines:[],baseRad:Math.PI*(2/6),opts:{len:20,count:50,baseTime:10,addedTime:10,dieChance:.05,spawnChance:1,sparkChance:.1,sparkDist:10,sparkSize:2,color:"hsl(hue,100%,light%)",baseLight:50,addedLight:10,shadowToTimePropMult:6,baseLightInputMultiplier:.01,addedLightInputMultiplier:.02,cx:window.innerWidth/2,cy:window.innerHeight/2,repaintAlpha:.04,hueChange:.1}},connected(){this.c=this.$el,this.ctx=this.c.getContext("2d"),this.c.width=this.w,this.c.height=this.h,this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.w,this.h),this.dieX=this.w/2/this.opts.len,this.dieY=this.h/2/this.opts.len,this.loop(),console.warn("⚠️ Don't forget to remove this component as it only serves as an example!")},events:[{name:"resize",el:()=>window,handler(){this.w=window.innerWidth,this.h=window.innerHeight,this.c.width=this.w,this.c.height=this.h,this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.w,this.h),this.opts.cx=this.w/2,this.opts.cy=this.h/2,this.dieX=this.w/2/this.opts.len,this.dieY=this.h/2/this.opts.len}}],methods:{loop(){window.requestAnimationFrame(this.loop),this.tick+=1,this.ctx.globalCompositeOperation="source-over",this.ctx.shadowBlur=0,this.ctx.fillStyle="rgba(0,0,0,alp)".replace("alp",this.opts.repaintAlpha),this.ctx.fillRect(0,0,this.w,this.h),this.ctx.globalCompositeOperation="lighter",this.lines.length<this.opts.count&&Math.random()<this.opts.spawnChance&&this.lines.push(new f(this.opts,this.ctx,this.tick,this.baseRad,this.dieX,this.dieY)),this.lines.forEach((t=>{t.step()}))}}};f.prototype.reset=function(){this.x=0,this.y=0,this.addedX=0,this.addedY=0,this.rad=0,this.lightInputMultiplier=this.opts.baseLightInputMultiplier+this.opts.addedLightInputMultiplier*Math.random(),this.color=this.opts.color.replace("hue",this.tick*this.opts.hueChange),this.cumulativeTime=0,this.beginPhase()},f.prototype.beginPhase=function(){this.x+=this.addedX,this.y+=this.addedY,this.time=0,this.targetTime=this.opts.baseTime+this.opts.addedTime*Math.random()||0,this.rad+=this.baseRad*(Math.random()<.5?1:-1),this.addedX=Math.cos(this.rad),this.addedY=Math.sin(this.rad),(Math.random()<this.opts.dieChance||this.x>this.dieX||this.x<-this.dieX||this.y>this.dieY||this.y<-this.dieY)&&this.reset()},f.prototype.step=function(){this.time+=1,this.cumulativeTime+=1,this.time>=this.targetTime&&this.beginPhase();const t=this.time/this.targetTime,i=Math.sin(t*(Math.PI/2)),s=this.addedX*i,h=this.addedY*i;this.ctx.shadowBlur=t*this.opts.shadowToTimePropMult,this.ctx.fillStyle=this.color.replace("light",this.opts.baseLight+this.opts.addedLight*Math.sin(this.cumulativeTime*this.lightInputMultiplier)),this.ctx.shadowColor=this.ctx.fillStyle,this.ctx.fillRect(this.opts.cx+(this.x+s)*this.opts.len,this.opts.cy+(this.y+h)*this.opts.len,2,2),Math.random()<this.opts.sparkChance&&this.ctx.fillRect(this.opts.cx+(this.x+s)*this.opts.len+Math.random()*this.opts.sparkDist*(Math.random()<.5?1:-1)-this.opts.sparkSize/2,this.opts.cy+(this.y+h)*this.opts.len+Math.random()*this.opts.sparkDist*(Math.random()<.5?1:-1)-this.opts.sparkSize/2,this.opts.sparkSize,this.opts.sparkSize)};Promise.all([]).then((()=>{s.g.UIkit=b,b.component("example",y)}))},9533:()=>{}},t=>{t.O(0,[560],(()=>{return i=8500,t(t.s=i);var i}));t.O()}]);