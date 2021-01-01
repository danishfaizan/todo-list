(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(2),c=n(0),r=n(6),i=n.n(r),a=n(4),d=n(3),s=n(7),l=n(31);function u(e){return{type:"ADD_TODO",payload:{id:Object(l.a)(),value:e,isCompleted:!1}}}var O=Object(d.b)(null,{addTodoAction:u})((function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],i=n[1];return Object(o.jsx)("form",{className:"container",onSubmit:function(t){t.preventDefault();var n=e.addTodoAction,o=e.filterType,c=e.setFilterType;r&&n(r),i(""),"COMPLETED"===o&&c("ALL")},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){i(e.target.value)}})})})),b=n(5),j=n(9),p=n.p+"static/media/icon-cross.6ee81d30.svg";function f(e,t){return"".concat(e,t?"--dark":"--light")}function m(e){var t=window.localStorage.getItem(e);if(t)return JSON.parse(t)}function v(e,t){return window.localStorage.setItem(e,JSON.stringify(t)),t}var x=Object(d.b)((function(e){return{isDarkMode:e.isDarkMode}}),{toggleTodoAction:function(e){return{type:"TOGGLE_TODO",payload:{id:e}}},deleteTodoAction:function(e){return{type:"DELETE_TODO",payload:{id:e}}},updateTodoAction:function(e,t){return{type:"UPDATE_TODO",payload:{id:e,value:t}}}})((function(e){var t=e.id,n=e.index,r=e.value,i=e.isCompleted,a=e.toggleTodoAction,d=e.deleteTodoAction,l=e.isDarkMode,u=e.updateTodoAction,O=Object(c.useState)(r),m=Object(s.a)(O,2),v=m[0],x=m[1],T=function(e){x(e.target.value),u(t,e.target.value)},D=function(e){"Enter"===e.key&&e.target.blur()};return Object(o.jsx)(j.b,{draggableId:t,index:n,children:function(e){return Object(o.jsxs)("div",Object(b.a)(Object(b.a)(Object(b.a)({id:t,className:"todo flex ".concat(f("todo",l)," ").concat(i?"todo--completed":void 0)},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:[Object(o.jsx)("input",{type:"checkbox",id:t,name:"todo",defaultChecked:i,onClick:function(){return a(t)}}),Object(o.jsx)("textarea",{className:"todo-text ".concat(f("todo-text",l)),type:"text",value:v,onChange:T,onKeyPress:D}),Object(o.jsx)("button",{type:"button",className:"todo--delete",onClick:function(){return d(t)},children:Object(o.jsx)("img",{src:p,alt:"Delete todo"})})]}))}},t)}));var T=Object(d.b)((function(e,t){var n,o=e.todos,c=e.isDarkMode,r=t.filterType,i=o.reduce((function(e,t){return t.isCompleted?e:e+1}),0),a=o.length-i;switch(r){case"COMPLETED":n=o.filter((function(e){return e.isCompleted}));break;case"INCOMPLETE":n=o.filter((function(e){return!e.isCompleted}));break;default:n=o}return{todos:n,incompleteItemsCount:i,completeItemsCount:a,isDarkMode:c}}),{addTodoAction:u,clearCompletedTodosAction:function(){return{type:"CLEAR_COMPLETED_TODOS"}},reorderTodosAction:function(e,t){return{type:"REORDER_TODOS",payload:{sourceIndex:e,destinationIndex:t}}}})((function(e){var t=e.filterType,n=e.incompleteItemsCount,c=e.completeItemsCount,r=e.clearCompletedTodosAction,i=e.isDarkMode,a=e.reorderTodosAction,d=e.todos;return Object(o.jsxs)(j.a,{onDragEnd:function(e){var n=e.destination,o=e.source;n&&("INCOMPLETE"===t&&c?a(o.index+c,n.index+c):a(o.index,n.index))},children:[Object(o.jsx)(j.c,{droppableId:"todos",children:function(e){return Object(o.jsxs)("div",Object(b.a)(Object(b.a)({className:"todo-list"},e.droppableProps),{},{ref:e.innerRef,children:[Object(o.jsx)("div",{children:0===d.length?Object(o.jsx)("div",{className:"empty-todo-list ".concat(f("empty-todo-list",i)),children:Object(o.jsx)("h1",{children:"No Tasks!"})}):d.map((function(e,t){var n=e.id,c=e.value,r=e.isCompleted;return Object(o.jsx)(x,{id:n,isCompleted:r,value:c,index:t},n)}))}),e.placeholder]}))}}),Object(o.jsxs)("div",{className:"flex todos-left ".concat(f("todos-left",i)),children:[Object(o.jsxs)("span",{children:[n," ","items left"]}),Object(o.jsx)("button",{type:"button",onClick:r,children:"Clear Completed"})]})]})}));var D=Object(d.b)((function(e){return{isDarkMode:e.isDarkMode}}))((function(e){var t=e.setFilterType,n=e.filterType,c=e.isDarkMode,r=function(e){return e===n};return Object(o.jsxs)("div",{className:"filter-bar flex ".concat(f("filter-bar",c)),children:[Object(o.jsx)("button",{type:"button",className:"".concat(r("all")?"active-filter":void 0," ").concat(f("button",c)),onClick:function(){return t("all")},children:"All"}),Object(o.jsx)("button",{type:"button",className:"".concat(r("active")?"active-filter":void 0," ").concat(f("button",c)),onClick:function(){return t("INCOMPLETE")},children:"Active"}),Object(o.jsx)("button",{type:"button",className:"".concat(r("completed")?"active-filter":void 0," ").concat(f("button",c)),onClick:function(){return t("COMPLETED")},children:"Completed"})]})})),h=(n(28),n.p+"static/media/icon-moon.6c03114b.svg"),y=n.p+"static/media/icon-sun.910b1f9a.svg";var C=Object(d.b)((function(e){return{isDarkMode:e.isDarkMode}}),{toggleDarkModeAction:function(){return{type:"TOGGLE_DARK_MODE"}}})((function(e){var t=e.isDarkMode,n=e.toggleDarkModeAction,r=Object(c.useState)("ALL"),i=Object(s.a)(r,2),a=i[0],d=i[1];return Object(o.jsxs)("div",{className:"wrapper ".concat(f("wrapper",t)),children:[Object(o.jsxs)("header",{className:"".concat(f("header",t)),children:[Object(o.jsxs)("nav",{className:"container flex",children:[Object(o.jsx)("h1",{children:"TODO"}),Object(o.jsx)("button",{type:"button",onClick:n,children:Object(o.jsx)("img",{src:t?y:h,alt:"dark mode"})})]}),Object(o.jsx)(O,{filterType:a,setFilterType:d})]}),Object(o.jsxs)("main",{className:"container main",children:[Object(o.jsx)(T,{filterType:a}),Object(o.jsx)(D,{setFilterType:d,filterType:a})]}),Object(o.jsx)("footer",{className:"container",children:Object(o.jsx)("p",{children:"Drag and drop to reorder list"})})]})})),E=n(11);function g(e,t){var n,o=e.find((function(e,o){return n=o,e.id===t}));o.isCompleted=!o.isCompleted;var c=Object(E.a)(e);return c.splice(n,1),c.push(o),c}function k(e,t,n){var o=Object(E.a)(e);return o.splice(t,1),o.splice(n,0,e[t]),o}var A=Object(a.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m("todos")||[],t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case"ADD_TODO":return v("todos",[o].concat(Object(E.a)(e)));case"DELETE_TODO":return v("todos",e.filter((function(e){return e.id!==o.id})));case"UPDATE_TODO":return v("todos",e.map((function(e){return e.id===o.id?Object(b.a)(Object(b.a)({},e),{},{value:o.value}):e})));case"TOGGLE_TODO":return v("todos",g(e,o.id));case"CLEAR_COMPLETED_TODOS":return v("todos",e.filter((function(e){return!1===e.isCompleted})));case"REORDER_TODOS":return v("todos",k(e,o.sourceIndex,o.destinationIndex));default:return e}},isDarkMode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m("isDarkMode")||!1,t=arguments.length>1?arguments[1]:void 0;return"TOGGLE_DARK_MODE"===t.type?v("isDarkMode",!e):e}});i.a.render(Object(o.jsx)(d.a,{store:Object(a.e)(A),children:Object(o.jsx)(C,{})}),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8df578c9.chunk.js.map