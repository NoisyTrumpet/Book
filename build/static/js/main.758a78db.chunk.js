(this.dfw_webpack=this.dfw_webpack||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(5),r=n(8),o=n(7),s=n(0),c=n.n(s),d=n(1),u=n.n(d),l=n(6),h=n.n(l),m=n.p+"static/media/circle.cfac717f.svg",p=(n(3),function(){return u.a.createElement("div",{className:"pageControls"},u.a.createElement("img",{className:"prev navigation previous-button",src:m,onClick:function(){return c()(".magazine-2").turn("previous")},alt:"Previous Page"}),u.a.createElement("img",{className:"next navigation",src:m,onClick:function(){return c()(".magazine-2").turn("next")},alt:"Next Page"}))});window.addEventListener("load",v),window.addEventListener("resize",v),document.body.addEventListener("touchmove",(function(e){e.preventDefault()}));function v(){c()(".magazine-2").width="1688",c()(".magazine-2").height="825";var e=document.body.clientWidth,t=Math.round(e/2.04606061);Math.round(e/1.0230303),Math.round(.9*document.body.clientHeight);return c()(".page").width=e+"px",c()(".page").height=t+"px",{width:e,height:t}}window.addEventListener("load",(function(e){var t=v();c()(".magazine-2").turn("size",t.width,t.height)})),window.addEventListener("resize",(function(e){var t=v();c()(".magazine-2").turn("size",t.width,t.height)}));n(14);var g=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).handleKeyDown=function(e){37===e.keyCode&&c()(i.el).turn("previous"),39===e.keyCode&&c()(i.el).turn("next")},i.state={context:e.context,clicked:!0},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.el&&c()(this.el).turn(Object.assign({},this.props.options)),document.addEventListener("keydown",this.handleKeyDown,!1)}},{key:"componentWillUnmount",value:function(){this.el&&c()(this.el).turn("destroy").remove(),document.removeEventListener("keydown",this.handleKeyDown,!1)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:this.props.className,style:Object.assign({},this.props.style),ref:function(t){return e.el=t}},this.props.children)}}]),n}(d.Component);g.defaultProps={style:{},className:"",options:{}};for(var f={width:1688,height:825,autoCenter:!0,display:"single",acceleration:!0,elevation:50,gradients:!0,page:1,pages:30,next:!0},w=new Array,y=1;y<30;y++)w.push("https://bookoffree.com/wp-content/themes/dt-the7-child/turn-js/pagesDFW2021/"+y+".jpg");var E=function(){return u.a.createElement("div",{id:"new-root"},u.a.createElement(p,null),u.a.createElement(g,{options:f,className:"magazine-2"},w.map((function(e,t){return u.a.createElement("div",{key:t,className:"page"},u.a.createElement("img",{src:e,alt:"Book of Free See Inside"}))}))))},k=document.getElementById("new-root");h.a.render(u.a.createElement(E,null),k)}},[[15,1,2]]]);
//# sourceMappingURL=main.758a78db.chunk.js.map