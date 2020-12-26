(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{26:function(e,t,o){},27:function(e,t,o){"use strict";o.r(t);var s=o(1),i=o(0),n=o.n(i),r=o(8),a=o.n(r),c=o(7),d=o(2),l=o(3),p=o(5),h=o(4),u=o(29),m=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){var e;Object(d.a)(this,o);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={newTodo:""},e.handleInputChange=function(t){e.setState({newTodo:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),e.state.newTodo&&e.props.addTodo(e.state.newTodo),e.setState({newTodo:""})},e}return Object(l.a)(o,[{key:"render",value:function(){return Object(s.jsx)("form",{className:"container",onSubmit:this.handleFormSubmit,children:Object(s.jsx)("input",{type:"text",value:this.state.newTodo,onChange:this.handleInputChange})})}}]),o}(n.a.Component),j=o(6),b=o(9),f=o.p+"static/media/icon-cross.6ee81d30.svg",O=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){return Object(d.a)(this,o),t.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var e=this;return Object(s.jsx)(b.b,{draggableId:this.props.id,index:this.props.index,children:function(t){return Object(s.jsxs)("div",Object(j.a)(Object(j.a)(Object(j.a)({id:e.props.id,className:"todo flex ".concat(e.props.getThemeClass("todo")," ").concat(e.props.isCompleted?"todo--completed":void 0,"\n\t\t\t\t\t\t")},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:[Object(s.jsx)("input",{type:"checkbox",id:e.props.id,name:"todo",defaultChecked:e.props.isCompleted,onClick:function(){return e.props.toggleTodo(e.props.id)}}),Object(s.jsx)("label",{htmlFor:e.props.id,children:e.props.value}),Object(s.jsx)("button",{className:"todo--delete",onClick:function(){return e.props.deleteTodo(e.props.id)},children:Object(s.jsx)("img",{src:f,alt:"Delete todo"})})]}))}},this.props.id)}}]),o}(n.a.Component),g=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){var e;Object(d.a)(this,o);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).handleOnDragEnd=function(t){var o=t.destination,s=t.source;o&&e.props.reorderTodos(s.index,o.index)},e}return Object(l.a)(o,[{key:"generateTodos",value:function(){var e=this;return 0===this.props.todos.length?Object(s.jsx)("div",{className:"empty-todo-list ".concat(this.props.getThemeClass("empty-todo-list")),children:Object(s.jsx)("h1",{children:"No Tasks!"})}):this.props.todos.map((function(t,o){var i=t.id,n=t.data,r=t.isCompleted;return Object(s.jsx)(O,{id:i,isCompleted:r,value:n,deleteTodo:e.props.deleteTodo,toggleTodo:e.props.toggleTodo,index:o,getThemeClass:e.props.getThemeClass},i)}))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)(b.a,{onDragEnd:this.handleOnDragEnd,children:[Object(s.jsx)(b.c,{droppableId:"todos",children:function(t){return Object(s.jsxs)("div",Object(j.a)(Object(j.a)({className:"todo-list"},t.droppableProps),{},{ref:t.innerRef,children:[Object(s.jsx)("div",{children:e.generateTodos()}),t.placeholder]}))}}),Object(s.jsxs)("div",{className:"flex todos-left ".concat(this.props.getThemeClass("todos-left")),children:[Object(s.jsxs)("span",{children:[this.props.incompleteItems," items left"]}),Object(s.jsx)("button",{onClick:this.props.clearCompleteTodos,children:"Clear Completed"})]})]})}}]),o}(n.a.Component);var v=function(e){return Object(s.jsxs)("div",{className:"filter-bar flex ".concat(e.getThemeClass("filter-bar")),children:[Object(s.jsx)("button",{className:"all"===e.filterMethod?"active-filter":void 0,onClick:function(){return e.setFilterMethod("all")},children:"All"}),Object(s.jsx)("button",{className:"active"===e.filterMethod?"active-filter":void 0,onClick:function(){return e.setFilterMethod("active")},children:"Active"}),Object(s.jsx)("button",{className:"completed"===e.filterMethod?"active-filter":void 0,onClick:function(){return e.setFilterMethod("completed")},children:"Completed"})]})},T=(o(26),o.p+"static/media/icon-moon.6c03114b.svg"),C=o.p+"static/media/icon-sun.910b1f9a.svg",x=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(){var e;Object(d.a)(this,o);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={todoList:[],incompleteItems:0,filterMethod:"all",isDarkMode:!1},e.addTodo=function(t){e.setState({todoList:[].concat(Object(c.a)(e.state.todoList),[{id:Object(u.a)(),data:t,isCompleted:!1}])}),e.setState({incompleteItems:e.state.incompleteItems+1,filterMethod:"all"})},e.deleteTodo=function(t){var o=e.state.todoList.filter((function(o){var s=o.id,i=o.isCompleted;return s!==t||(i||e.setState({incompleteItems:e.state.incompleteItems-1}),!1)}));e.setState({todoList:o})},e.toggleTodo=function(t){var o,s=e.state.todoList.filter((function(s){return s.id!==t||((o=s).isCompleted=!o.isCompleted,s.isCompleted?e.setState({incompleteItems:e.state.incompleteItems-1}):e.setState({incompleteItems:e.state.incompleteItems+1}),!1)}));o&&s.unshift(o),e.setState({todoList:s})},e.clearCompleteTodos=function(){var t=e.state.todoList.filter((function(e){return!e.isCompleted}));e.setState({todoList:t})},e.getFilteredTodos=function(){return"completed"===e.state.filterMethod?e.getCompletedTodos():"active"===e.state.filterMethod?e.getActiveTodos():e.state.todoList},e.setFilterMethod=function(t){e.setState({filterMethod:t})},e.reorderTodos=function(t,o){console.log("Reordering todos ",t,o);var s=e.getFilteredTodos(),i=Object(c.a)(s);i.splice(t,1),i.splice(o,0,s[t]),"completed"===e.state.filterMethod?e.setState({todoList:[].concat(Object(c.a)(i),Object(c.a)(e.getActiveTodos()))}):e.setState({todoList:[].concat(Object(c.a)(e.getCompletedTodos()),Object(c.a)(i))})},e.toggleDarkMode=function(){e.setState({isDarkMode:!e.state.isDarkMode})},e.getThemeClass=function(t){return e.state.isDarkMode?t+"--dark":t+"--light"},e}return Object(l.a)(o,[{key:"getActiveTodos",value:function(){return this.state.todoList.filter((function(e){return!e.isCompleted}))}},{key:"getCompletedTodos",value:function(){return this.state.todoList.filter((function(e){return e.isCompleted}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"wrapper ".concat(this.getThemeClass("wrapper")),children:[Object(s.jsxs)("header",{className:"".concat(this.getThemeClass("header")),children:[Object(s.jsxs)("nav",{className:"container flex",children:[Object(s.jsx)("h1",{children:"TODO"}),Object(s.jsx)("button",{onClick:this.toggleDarkMode,children:Object(s.jsx)("img",{src:this.state.isDarkMode?C:T,alt:"dark mode"})})]}),Object(s.jsx)(m,{addTodo:this.addTodo})]}),Object(s.jsxs)("main",{className:"container",children:[Object(s.jsx)(g,{todos:this.getFilteredTodos(),toggleTodo:this.toggleTodo,deleteTodo:this.deleteTodo,incompleteItems:this.state.incompleteItems,clearCompleteTodos:this.clearCompleteTodos,reorderTodos:this.reorderTodos,getThemeClass:this.getThemeClass}),Object(s.jsx)(v,{getThemeClass:this.getThemeClass,setFilterMethod:this.setFilterMethod,filterMethod:this.state.filterMethod})]}),Object(s.jsx)("footer",{className:"container",children:Object(s.jsx)("p",{children:"Drag and drop to reorder list"})})]})}}]),o}(n.a.Component);a.a.render(Object(s.jsx)(x,{}),document.querySelector("#root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.04821b56.chunk.js.map