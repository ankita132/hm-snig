(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,a){e.exports=a(403)},206:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(7),s=a.n(i),r=(a(205),a(206),a(181)),o=a.n(r)()({basename:"/nehru-hall"}),c=a(412),u=a(24),m=a(25),d=a(28),p=a(26),h=a(27),g=a(409),b=a(29),v=a(89),f=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).passRoute=function(){"admin"===e.state.username&&"admin"===e.state.password?(localStorage.setItem("login",!0),o.push("/admin")):"user123"===e.state.username&&"user123"===e.state.password?(localStorage.setItem("login",!0),o.push("/student")):v.toast.error("Login failed.Try again.")},e.state={username:"",password:""},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"LoginBox"},l.a.createElement("h1",null,"Login"),l.a.createElement(g.a,{placeholder:"Username",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})},style:{width:500,padding:20,margin:10}}),l.a.createElement(g.a,{placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},style:{width:500,padding:20,margin:10},type:"password"}),l.a.createElement(b.a,{type:"primary",onClick:function(){return e.passRoute()}},"Login"))}}]),t}(n.Component),E=a(411),w=a(136),y=a(406),k=a(410),O=a(413),S=a(9),j=E.a.Header,C=E.a.Content,I=E.a.Sider,x=g.a.TextArea,V=["Approved","Pending","Pending","Rejected"],B=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).getStatus=function(t){switch(V[t]){case"Approved":return"Approved";case"Rejected":return"Rejected";case"Pending":return l.a.createElement(b.a,{type:"primary",onClick:function(){return e.showModal2(t)}},"Update Status");default:return}},e.showModal3=function(){e.setState({visible3:!0})},e.showModal=function(t){e.setState({visible:!0,imageIndex:t})},e.showModal2=function(t){e.setState({visible2:!0,index:t})},e.handleOk=function(t){console.log(t),e.setState({visible:!1,visible2:!1,visible3:!1})},e.handleCancel=function(t){console.log(t),e.setState({visible:!1,visible2:!1,visible3:!1})},e.updateStatus=function(t){if(t){var a=Object.assign({},e.state);a.dataSource[e.state.index].status="Approved",e.setState(a),e.handleCancel()}else{var n=Object.assign({},e.state);n.dataSource[e.state.index].status="Rejected",e.setState(n),e.handleCancel()}},e.state={visible:!1,visible2:!1,visible3:!1,imageIndex:0,dataSource:[{key:"0",name:"Mike",vname:"lol",purpose:"no idea",gst:"1234",view:l.a.createElement(b.a,{onClick:function(){return e.showModal(0)}},"View Bill"),status:e.getStatus(0),vstatus:l.a.createElement(b.a,{onClick:function(){return e.showModal3()}},"Verifications")},{key:"1",name:"Mike221212",vname:"lol34",purpose:"no idea",gst:"1234qwq",view:l.a.createElement(b.a,{onClick:function(){return e.showModal(1)}},"View Bill"),status:e.getStatus(1),vstatus:l.a.createElement(b.a,{onClick:function(){return e.showModal3()}},"Verifications")},{key:"2",name:"Kasasa",vname:"lol2",purpose:"no no idea",gst:"123412",view:l.a.createElement(b.a,{onClick:function(){return e.showModal(2)}},"View Bill"),status:e.getStatus(2),vstatus:l.a.createElement(b.a,{onClick:function(){return e.showModal3()}},"Verifications")},{key:"3",name:"sed",vname:"lol3",purpose:"no no no idea",gst:"12",view:l.a.createElement(b.a,{onClick:function(){return e.showModal(3)}},"View Bill"),status:e.getStatus(3),vstatus:l.a.createElement(b.a,{onClick:function(){return e.showModal3()}},"Verifications")}],img:["http://www.uppclonline.com/en_GB/images/innerpages/login/bill_sample.jpg","http://www.uppclonline.com/en_GB/images/innerpages/login/bill_sample.jpg","http://www.uppclonline.com/en_GB/images/innerpages/login/bill_sample.jpg","http://www.uppclonline.com/en_GB/images/innerpages/login/bill_sample.jpg"],columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"VendorName",dataIndex:"vname",key:"vname"},{title:"purpose",dataIndex:"purpose",key:"purpose"},{title:"gst number",dataIndex:"gst",key:"gst"},{title:"View",dataIndex:"view",key:"view"},{title:"Status",dataIndex:"status",key:"status"},{title:"Verification Status",dataIndex:"vstatus",key:"vstatus"}],data:[{name:"Verified by G. Sec Social and Cultural",status:!0},{name:"Verified by the concerned PTI",status:!1},{name:"Hard copy submitted",status:!1},{name:"Verified by the Registrar",status:!0},{name:"Verified by the President TSG",status:!0}],index:0},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"adminBox"},l.a.createElement(E.a,null,l.a.createElement(j,{className:"header"},l.a.createElement("div",{className:"logo"})),l.a.createElement(E.a,null,l.a.createElement(I,{width:200,theme:"dark"},l.a.createElement(w.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},l.a.createElement(w.a.Item,{key:"1",onClick:function(){return e.changeView(!0)}},"View Bills"))),l.a.createElement(E.a,{style:{padding:"24px 24px"}},l.a.createElement(C,{style:{background:"#fff",padding:24,margin:0,minHeight:530}},l.a.createElement(y.a,{dataSource:this.state.dataSource,columns:this.state.columns}),l.a.createElement(k.a,{title:"Image Box",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},l.a.createElement("img",{src:this.state.img[this.state.imageIndex],alt:"billimage",width:"400"})),l.a.createElement(k.a,{title:"Update Status",visible:this.state.visible2,onOk:this.handleOk,onCancel:this.handleCancel},l.a.createElement(x,{rows:4,placeholder:"Type your message"}),l.a.createElement("div",{className:"buttonGroup"},l.a.createElement(b.a,{type:"primary",style:{marginRight:10},onClick:function(){return e.updateStatus(!0)}},"Approve"),l.a.createElement(b.a,{onClick:function(){return e.updateStatus(!1)}},"Reject"))),l.a.createElement(k.a,{title:"Verification Status",visible:this.state.visible3,onOk:this.handleOk,onCancel:this.handleCancel},l.a.createElement(O.a,{dataSource:this.state.data,renderItem:function(e){return l.a.createElement(O.a.Item,{key:e.name},l.a.createElement(O.a.Item.Meta,{title:l.a.createElement("h2",null,e.name)}),l.a.createElement("div",null,e.status?l.a.createElement(S.a,{type:"check-circle",theme:"filled",style:{color:"green"}}):l.a.createElement("div",null,l.a.createElement(b.a,{type:"primary",style:{marginRight:10}},"Verify"))))}})))))))}}]),t}(n.Component),M=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).showModal3=function(){e.setState({visible3:!0})},e.showModal=function(t){e.setState({visible:!0,imageIndex:t})},e.handleOk=function(t){console.log(t),e.setState({visible:!1,visible3:!1})},e.handleCancel=function(t){console.log(t),e.setState({visible:!1,visible3:!1})},e.state={visible:!1,visible3:!1,imageIndex:0,dataSource:[{key:"1",name:"Mike",vname:"lol",purpose:"no idea",gst:"1234",view:l.a.createElement(b.a,{onClick:function(){return e.showModal(0)}},"View Bill"),status:"Approved",vstatus:l.a.createElement(b.a,{onClick:function(){return e.showModal3()}},"Verifications")},{key:"2",name:"Kasasa",vname:"lol2",purpose:"no no idea",gst:"123412",view:l.a.createElement(b.a,{onClick:function(){return e.showModal(1)}},"View Bill"),status:"Declined",vstatus:l.a.createElement(b.a,{onClick:function(){return e.showModal3()}},"Verifications")},{key:"3",name:"sed",vname:"lol3",purpose:"no no no idea",gst:"12",view:l.a.createElement(b.a,{onClick:function(){return e.showModal(2)}},"View Bill"),status:"Pending",vstatus:l.a.createElement(b.a,{onClick:function(){return e.showModal3()}},"Verifications")}],img:["http://www.uppclonline.com/en_GB/images/innerpages/login/bill_sample.jpg","http://www.uppclonline.com/en_GB/images/innerpages/login/bill_sample.jpg","http://www.uppclonline.com/en_GB/images/innerpages/login/bill_sample.jpg"],columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"VendorName",dataIndex:"vname",key:"vname"},{title:"purpose",dataIndex:"purpose",key:"purpose"},{title:"gst number",dataIndex:"gst",key:"gst"},{title:"View",dataIndex:"view",key:"view"},{title:"Status",dataIndex:"status",key:"status"},{title:"Verification Status",dataIndex:"vstatus",key:"vstatus"}],data:[{name:"Verified by G. Sec Social and Cultural",status:!0},{name:"Verified by the concerned PTI",status:!1},{name:"Hard copy submitted",status:!1},{name:"Verified by the Registrar",status:!0},{name:"Verified by the President TSG",status:!0}]},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"studentBox"},l.a.createElement(y.a,{dataSource:this.state.dataSource,columns:this.state.columns}),l.a.createElement(k.a,{title:"Image Box",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},l.a.createElement("img",{src:this.state.img[this.state.imageIndex],alt:"billimage",width:"400"})),l.a.createElement(k.a,{title:"Verification Status",visible:this.state.visible3,onOk:this.handleOk,onCancel:this.handleCancel},l.a.createElement(O.a,{dataSource:this.state.data,renderItem:function(e){return l.a.createElement(O.a.Item,{key:e.name},l.a.createElement(O.a.Item.Meta,{title:l.a.createElement("h2",null,e.name)}),l.a.createElement("div",null,e.status?l.a.createElement(S.a,{type:"check-circle",theme:"filled",style:{color:"green"}}):l.a.createElement(S.a,{type:"exclamation-circle",theme:"filled",style:{color:"orange"}})))}})))}}]),t}(n.Component),N=a(407),G=a(408),_=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).handleFormLayoutChange=function(t){e.setState({formLayout:t.target.value})},e.state={formLayout:"horizontal"},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.formLayout,t="horizontal"===e?{labelCol:{span:4},wrapperCol:{span:14}}:null,a="horizontal"===e?{wrapperCol:{span:14,offset:4}}:null;return l.a.createElement("div",{className:"BillBox"},l.a.createElement(N.a,{layout:e},l.a.createElement(N.a.Item,Object.assign({label:"Vendor Name"},t),l.a.createElement(g.a,{placeholder:"Vendor Name"})),l.a.createElement(N.a.Item,Object.assign({label:"GST Number"},t),l.a.createElement(g.a,{placeholder:"GST Number"})),l.a.createElement(N.a.Item,Object.assign({label:"Name"},t),l.a.createElement(g.a,{placeholder:"Name"})),l.a.createElement(N.a.Item,Object.assign({label:"Purpose"},t),l.a.createElement(g.a,{placeholder:"Purpose"})),l.a.createElement(N.a.Item,Object.assign({label:"Upload"},t),l.a.createElement(G.a,{name:"logo",action:"/upload.do",listType:"picture"},l.a.createElement(b.a,null,l.a.createElement(S.a,{type:"upload"})," Click to upload"))),l.a.createElement(N.a.Item,a,l.a.createElement(b.a,{type:"primary"},"Submit"))))}}]),t}(n.Component),R=E.a.Header,A=E.a.Content,P=E.a.Sider,T=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).changeView=function(t){e.setState({selected:t})},e.state={selected:!0},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"studentBox"},l.a.createElement(E.a,null,l.a.createElement(R,{className:"header"},l.a.createElement("div",{className:"logo"})),l.a.createElement(E.a,null,l.a.createElement(P,{width:200,theme:"dark"},l.a.createElement(w.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},l.a.createElement(w.a.Item,{key:"1",onClick:function(){return e.changeView(!0)}},"View Bills"),l.a.createElement(w.a.Item,{key:"2",onClick:function(){return e.changeView(!1)}},"Add Bills"))),l.a.createElement(E.a,{style:{padding:"24px 24px"}},l.a.createElement(A,{style:{background:"#fff",padding:24,margin:0,minHeight:530}},this.state.selected?l.a.createElement(M,null):l.a.createElement(_,null))))),",")}}]),t}(n.Component),L=(a(401),a(197)),H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).checkAuthentication=function(){return!(!localStorage.getItem("login")||"/"===a.props.location)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.component,n=Object(L.a)(t,["component"]);return l.a.createElement(c.b,Object.assign({},n,{render:function(t){return e.checkAuthentication()?l.a.createElement(a,t):l.a.createElement(c.a,{to:{pathname:"/",state:{from:t.location}}})}}))}}]),t}(n.Component),K=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v.ToastContainer,{autoClose:2e3}),l.a.createElement(c.d,null,l.a.createElement(c.b,{exact:!0,path:"/",component:f}),l.a.createElement(H,{path:"/student",component:T}),l.a.createElement(H,{path:"/admin",component:B})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(c.c,{history:o},l.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[200,1,2]]]);
//# sourceMappingURL=main.d702193b.chunk.js.map