(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(8),o=n(6),r=n(2),s=n(9),c=n(0),u=n.n(c),l=n(1),d=n.n(l),h=n(7),m=n.n(h),g=n(3),p=n.n(g);n(16);function v(){u()(".prev").click(function(){u()(".magazine").turn("previous")})}function f(){u()(".next").click(function(){u()(".magazine").turn("next")})}window.addEventListener("load",k),window.addEventListener("resize",k),document.body.addEventListener("touchmove",function(e){e.preventDefault()});var w=3.53,y=1.77;function k(){u()(".magazine").width="762",u()(".magazine").height="431";var e=document.body.clientWidth,t=Math.round(e/w),n=Math.round(e/y),a=Math.round(.9*document.body.clientHeight);return e<=762&&(u()(".magazine").turn("display","single"),t=n,u()(".page img").css("height","auto")),console.log(n),t>a&&(t=a,e=Math.round(t*w),u()("magazine").css("margin-top","22.25% auto")),u()(".page").width=e+"px",u()(".page").height=t+"px",{width:e,height:t}}window.addEventListener("load",function(e){var t=k();u()(".magazine").turn("size",t.width,t.height)}),window.addEventListener("resize",function(e){var t=k();u()(".magazine").turn("size",t.width,t.height)});n(17);var E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleKeyDown=function(e){37===e.keyCode&&u()(n.el).turn("previous"),39===e.keyCode&&u()(n.el).turn("next")},n.state={context:e.context,clicked:!0},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.el&&u()(this.el).turn(Object.assign({},this.props.options)),document.addEventListener("keydown",this.handleKeyDown,!1)}}]),Object(r.a)(t,[{key:"componentWillUnmount",value:function(){this.el&&u()(this.el).turn("destroy").remove(),document.removeEventListener("keydown",this.handleKeyDown,!1)}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:this.props.className,style:Object.assign({},this.props.style),ref:function(t){return e.el=t}},this.props.children)}}]),t}(l.Component);E.defaultProps={style:{},className:"",options:{}};for(var b={width:1524,height:431,autoCenter:!0,display:"double",acceleration:!0,elevation:50,gradients:!0,next:!0,when:{turned:function(e,t){console.log("Current view: ",u()(this).turn("view"))}}},z=new Array,x=1;x<240;x++)z.push("https://bookoffree.com/wp-content/themes/dt-the7-child/turn-js/pages/"+x+".jpg");var j=function(){return d.a.createElement(l.Fragment,null,d.a.createElement(E,{options:b,className:"magazine"},z.map(function(e,t){return d.a.createElement("div",{key:t,className:"page"},d.a.createElement("img",{src:e,alt:"Book of Free See Inside Page:"+t}))})),d.a.createElement(l.Fragment,null,d.a.createElement("img",{className:"prev navigation",src:p.a,onClick:v,alt:"Previous Page"}),d.a.createElement("img",{className:"next navigation",src:p.a,onClick:f,alt:"Next Page"})))},N=document.getElementById("root");m.a.render(d.a.createElement(j,null),N)},3:function(e,t,n){e.exports=n.p+"static/media/circle.1f60fab9.svg"}},[[10,2,1]]]);
//# sourceMappingURL=main.60ff75f5.chunk.js.map