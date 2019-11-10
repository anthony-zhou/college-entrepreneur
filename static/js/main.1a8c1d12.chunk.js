(this["webpackJsonpfun-with-finance"]=this["webpackJsonpfun-with-finance"]||[]).push([[0],{101:function(e,t){},137:function(e,t){},138:function(e,t){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(82),s=a.n(r),l=(a(89),a(83)),i=a(4),c=a(8),h=a(10),u=a(9),m=a(11),d=(a(90),a(91),a(92),a(93),"#E6E0CF"),p=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"debts",value:function(){var e=this;return this.props.debts.map((function(t,a){var n=t.description,r=t.cost,s=t.monthlyPayment,l=new Date(t.year,t.month);return o.a.createElement("tr",{key:a,className:"table-active"},o.a.createElement("th",{style:{backgroundColor:d},scope:"row"},n),o.a.createElement("th",{style:{backgroundColor:d}},"$",parseFloat(100*r/100).toFixed(2)),o.a.createElement("th",{style:{backgroundColor:d}},"$",parseFloat(s).toFixed(2)),o.a.createElement("th",{style:{backgroundColor:d}},l.toLocaleString("default",{month:"long"})+" "+l.getFullYear()),o.a.createElement("th",{style:{backgroundColor:d}},o.a.createElement("button",{onClick:function(){return e.pay(t)},type:"button",className:"btn btn-info"},"Pay")))}))}},{key:"pay",value:function(e){this.props.balance>=e.monthlyPayment&&(this.props.parent.setState({balance:this.props.balance-e.monthlyPayment}),e.cost-=e.monthlyPayment,0===e.cost&&this.props.debts.splice(this.props.debts.indexOf(e),1),e.year>=this.props.parent.state.year&&e.month>=this.props.parent.state.month&&this.props.parent.setState({score:this.props.score+10}))}},{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement("article",{id:"balance",className:"jumbotron"},o.a.createElement("h2",null,this.props.date),o.a.createElement("h1",{className:"display-3"},"$",parseFloat(100*this.props.balance/100).toFixed(2)),o.a.createElement("h2",null,"Max Income Per Month"),o.a.createElement("h1",{className:"display-3"},"$",this.props.income)),o.a.createElement("article",{id:"credit",className:"jumbotron"},o.a.createElement("h2",null,"Credit Score"),o.a.createElement("h1",{className:"display-3"},this.props.score),o.a.createElement("h2",null,"Max Credit Per Month"),o.a.createElement("h1",{className:"display-3"},parseFloat(this.props.balance/2*this.props.score/1e3).toFixed(2))),o.a.createElement("article",{id:"debt",className:"jumbotron"},o.a.createElement("h2",null,"Outstanding Debts"),o.a.createElement("table",{className:"table-striped",cellPadding:"10"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{style:{backgroundColor:d},scope:"col"},"Description"),o.a.createElement("th",{style:{backgroundColor:d},scope:"col"},"Total"),o.a.createElement("th",{style:{backgroundColor:d},scope:"col"},"Monthly amount"),o.a.createElement("th",{style:{backgroundColor:d},scope:"col"},"Due"))),o.a.createElement("tbody",null,this.debts()))))}}]),t}(o.a.Component),b=(a(94),function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"type",value:function(){var e,t=this.props.health;return e=t>50?"bg-success":t>25?"bg-warning":"bg-danger","progress-bar progress-bar-striped progress-bar-animated "+e}},{key:"render",value:function(){return o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:this.type(),role:"progressbar",style:{width:this.props.health+"%"}}))}}]),t}(o.a.Component)),y=(a(95),["PhoneMe Ultimate Extra OLED S Max","SingingSam Galaxy Foldable","Democratic Republic of Gamers 240hz Monitor","Lazer LifeAdder Gaming Mouse","Most Overpriced keyboard, the one and only HHKB keyboard","very nice mug","very nice fountain pen","sketchy adapter","avacado toast","AlienWear Smart Laptop with Alexo Included","Saturn V Lego Set","amazing pikachonk plushie","Bithub Backpack","really expsensive cup of coffee","book on how to code reactjs","secret to the universe","one banana","love of your cat","Planck 40% Ortholinear Keyboard","Blueberry Pie, a great microcomputer","advertisement spot for a popular UsTuber","Bell XPS 13","Boogle Pixel","book on how to learn financial literacy","philosopher's stone","HAMY Safari Fountain Pen","superpower to nap at anytime anywhere","canned air","bottled air","best bud, a dog","cute co-woker, a cat","superpower of not getting coding errors","LogicTech G305 Gaming Mouse","Nintech Swap with HappyCons","GameStation 4","tickets to that one movie","bundle or oranges","very nice mechanical pencil","MolaritySkin Notebook","knockoff version of a Swiss watch","limited edition cereal that disappointingly tastes the same","overpriced printer ink","bottle of coffee","oolong milk tea with bubbles (or boba), no sugar, and no ice","set of Minor League Hacking stickers","kit for gel electrophoresis","kit to make your own geodes","premium currency for a free to play app","branded tote bag","fashionable fanny pack","latest and greatest hoodie","tenth shot of espresso of today","guide on how to read kanji","vitamin gummies","new game, Live Stranding","desk that can adjust its height","batcave","cure for unoriginality","OakStory Orange Mushroom plushie","OakStory Ghost Ship Exorcist Badge","OakStory Rock Spirit plushie","giant bean bag","world's smallest violin","book on How to Sruggle: Chopin Edition","book on How to Struggle: Pagini Edition","new Portable Monsters game: PortaMon Trebuchet"]),f=function(){function e(){Object(i.a)(this,e),this.description="",this.valYes=0,this.valNo=0,this.cost=0}return Object(c.a)(e,null,[{key:"generate",value:function(){return this.valYes=this.pullValue(),this.valNo=-1*this.pullValue(),this.cost=this.pullCost(),this.description=this.pullDescription(),{description:this.description,valYes:this.valYes,valNo:this.valNo,cost:this.cost}}},{key:"pullDescription",value:function(){var e=Math.floor(Math.random()*y.length);return e==y.length&&(e-=1),"You want to purchase the "+y[e]+" for $"+this.cost+"?"}},{key:"pullValue",value:function(){return Math.floor(10*Math.random()+10)}},{key:"pullCost",value:function(){return Math.floor(200*Math.random()+1)}}]),e}(),g=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"buy",value:function(e){this.props.parent.state.balance>=e.cost&&(this.props.parent.setState({health:this.props.parent.state.health+1}),this.props.parent.setState({balance:this.props.parent.state.balance-e.cost}))}},{key:"render",value:function(){var e=this,t=f.generate();return o.a.createElement("div",{className:"modal-dialog modal-lg",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-body"},o.a.createElement("h2",null,t.description)),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",className:"btn btn-primary btn-danger","data-dismiss":"modal"},"No"),o.a.createElement("button",{onClick:function(){return e.buy(t)},type:"button",className:"btn btn-primary btn-success"},"Yes"))))}}]),t}(o.a.Component),v=function e(t,a,n,o){Object(i.a)(this,e),this.description=t,this.cost=a,this.year=n,this.month=o,this.monthlyPayment=a},E=.01,k=function(e){function t(e,a,n,o){var r;return Object(i.a)(this,t),(r=Object(h.a)(this,Object(u.a)(t).call(this,e,a,n,o))).monthlyPayment=E*r.cost/(1-Math.pow(1+E,-12)),r}return Object(m.a)(t,e),t}(v);function w(){document.getElementById("intro").classList.add("hidden")}var O=function(e){function t(e){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"intro",className:"fullscreen visible"},o.a.createElement("h1",null,"You are not a loan."),o.a.createElement("p",null,"This is a game to help improve your financial literacy. First, take this ",o.a.createElement("a",{target:"_blank",href:"https://www.surveymonkey.com/r/L3TLBXH"},"financial literacy survey"),". Then, learn about personal finance by playing the game. You can win by gaining an account balance of more than $50000, and lose by getting a credit score of less than 350 or a health level below zero. "),o.a.createElement("p",null,"Here are some terms you might want to know:"),o.a.createElement("ul",{class:"leftAlign"},o.a.createElement("li",null,o.a.createElement("b",null,"Interest:")," the fee you pay a money lender for borrowing money. In the game, interest is automatically compounded at a fixed Annual Percentage Rate (APR) of 1%."),o.a.createElement("li",null,o.a.createElement("b",null,"Credit:")," an arrangement where goods, services, or money are exchanged for a promise of repayment at a later date."),o.a.createElement("li",null,o.a.createElement("b",null,"Credit Score:")," for money lenders, this is a measure of how trustworthy an individual is, based on how well the individual has payed back loans and credit in the past. You will need a good credit score to take out loans."),o.a.createElement("li",null,o.a.createElement("b",null,"Maximum credit:")," the amount you are allowed to take from a credit card, which may be greater than your account balance, though this will incur debt.")),o.a.createElement("p",null,o.a.createElement("a",{href:"#",onClick:w},"Enter the game ->"))),o.a.createElement("div",{id:"lose",className:"fullscreen hidden"},o.a.createElement("h1",null,"You lost!"),o.a.createElement("p",null,"Thanks for playing the game. We hoped you learned a lot. Please take this ",o.a.createElement("a",{target:"_blank",href:"https://www.surveymonkey.com/r/LP2FLTR"},"post-game survey")," to help us promote financial literacy. Then, ",o.a.createElement("a",{href:"/"},"play again!"))),o.a.createElement("div",{id:"win",className:"fullscreen hidden"},o.a.createElement("h1",null,"You won!"),o.a.createElement("p",null,"Congrats on your awesome money-management skills! Please take this ",o.a.createElement("a",{target:"_blank",href:"https://www.surveymonkey.com/r/LP2FLTR"},"post-game survey")," to help us promote financial literacy. Then, ",o.a.createElement("a",{href:"/"},"play again!"))))}}],[{key:"lose",value:function(){document.getElementById("lose").classList.remove("hidden"),document.getElementById("lose").classList.add("visible"),console.log("HELLO")}},{key:"win",value:function(){document.getElementById("win").classList.add("visible")}}]),t}(o.a.Component),j=(a(96),"#F0E9D8"),S=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(h.a)(this,Object(u.a)(t).call(this,e));var n=new Date;return a.state={balance:0,income:5e3,score:500,debts:[new k("Student Loans",6e4,n.getFullYear()+10,n.getMonth())],month:n.getMonth(),year:n.getFullYear(),health:100},document.body.style="background: "+j,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"advance",value:function(){var e=this,t=this.state.month+1,a=this.state.year;12===t&&(t=0,a++),this.setState({month:t,year:a});var n=Math.sqrt(this.state.health/100)*this.state.income;this.setState({balance:this.state.balance+n}),this.state.debts.forEach((function(t){12*e.state.year+e.state.month>=12*t.year+t.month&&(t.cost*=1.01,k.prototype.isPrototypeOf(t)&&(t.monthlyPayment=(1.01-1)*t.cost/(1-Math.pow(1.01,-12))),e.setState({score:e.state.score-10}))})),this.setState({health:this.state.health-10}),(this.state.score<400||this.state.health<=0)&&O.lose(),this.state.balance>5e4&&O.win()}},{key:"invest",value:function(){var e=10*this.state.income;if(e-this.state.balance<=this.state.balance/2*this.state.score/1e3){var t=this.state.month+3,a=this.state.year;t>=12&&(t%=12,a++),this.setState({debts:[].concat(Object(l.a)(this.state.debts),[new v("Business investment",e,a,t)])}),this.setState({income:2*this.state.income})}}},{key:"date",value:function(){var e=new Date(this.state.year,this.state.month);return e.toLocaleString("default",{month:"long"})+" "+e.getFullYear()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"content"},o.a.createElement(O,null),o.a.createElement(b,{health:this.state.health}),o.a.createElement(p,{parent:this,income:this.state.income,balance:this.state.balance,score:this.state.score,date:this.date(),debts:this.state.debts}),o.a.createElement(g,{parent:this}),o.a.createElement("div",{id:"buttons"},o.a.createElement("button",{onClick:function(){return e.advance()},type:"button",className:"btn btn-info"},"Next Month"),"\xa0\xa0",o.a.createElement("button",{onClick:function(){return e.invest()},type:"button",className:"btn btn-info"},"Invest ($",10*this.state.income,")")))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},84:function(e,t,a){e.exports=a(180)},89:function(e,t,a){},90:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},99:function(e,t){}},[[84,1,2]]]);
//# sourceMappingURL=main.1a8c1d12.chunk.js.map