(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),u=a.n(s),i=a(1),l=a(2),c=a(4),o=a(3),m=a(5);var h=function(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},d=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(n.a.Component),v=a(8);var p=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(v.a)(t[a],3),n=r[0],s=r[1],u=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[u])return e[n]}return null};var b=function(e){return e.every(function(e){return null!==e})};var f=function(e,t){return e.map(function(e,a){var r=a?"Go to move #"+a:"Go to game start",s=a?e.player+" claimed Square "+e.claimedSquare+".":"Game Start!";return n.a.createElement("li",{key:a},s,"\xa0\xa0",n.a.createElement("button",{onClick:function(){return t.jumpTo(a)}},r))})},q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={history:[{claimedSquare:null,player:null,squares:Array(9).fill(null)}],isXNext:!0,stepNumber:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();p(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{claimedSquare:e,player:this.state.xIsNext?"X":"O",squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[this.state.stepNumber],s=p(r.squares),u=b(r.squares),i=f(a,this);return e=s?"Winner: "+s+" \ud83c\udfc6":u?"Game Over \ud83d\udc79":"Next player: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(d,{squares:r.squares,onClick:function(e){return t.handleClick(e)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,e),n.a.createElement("ol",null,i)),n.a.createElement("div",{className:"game-actions"},n.a.createElement("button",{type:"button",onClick:function(){return window.location.reload()}},n.a.createElement("strong",null,"Start New Game"))))}}]),t}(n.a.Component);a(15);u.a.render(n.a.createElement(q,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.b1edcba2.chunk.js.map