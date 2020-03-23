(this["webpackJsonpmovies-series"]=this["webpackJsonpmovies-series"]||[]).push([[0],{51:function(e,t){e.exports={APIKey:"abbb376d"}},58:function(e,t,a){e.exports=a(88)},63:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),i=(a(63),a(9)),l=a(10),m=a(12),s=a(11),u=a(13),p=a(92),d=(n.Component,a(16)),v=a(93),b=a(22),h=a.n(b),E=a(51),f=(h.a.create({baseURL:"http://www.omdbapi.com/?apikey=".concat(E.APIKey,"&s=")}),function(){return{type:"LOADING"}}),g=a(90);function O(){return r.a.createElement("div",null,r.a.createElement(g.a,{animation:"border",variant:"primary"}),r.a.createElement(g.a,{animation:"border",variant:"secondary"}),r.a.createElement(g.a,{animation:"border",variant:"success"}),r.a.createElement(g.a,{animation:"border",variant:"danger"}),r.a.createElement(g.a,{animation:"border",variant:"warning"}),r.a.createElement(g.a,{animation:"border",variant:"info"}),r.a.createElement(g.a,{animation:"border",variant:"light"}),r.a.createElement(g.a,{animation:"border",variant:"dark"}),r.a.createElement(g.a,{animation:"grow",variant:"primary"}),r.a.createElement(g.a,{animation:"grow",variant:"secondary"}),r.a.createElement(g.a,{animation:"grow",variant:"success"}),r.a.createElement(g.a,{animation:"grow",variant:"danger"}),r.a.createElement(g.a,{animation:"grow",variant:"warning"}),r.a.createElement(g.a,{animation:"grow",variant:"info"}),r.a.createElement(g.a,{animation:"grow",variant:"light"}),r.a.createElement(g.a,{animation:"grow",variant:"dark"}))}var y=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading(),console.log("props:",this.props)}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.movie,n=r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:a.Poster}),r.a.createElement(v.a,null,r.a.createElement(v.a.Item,null,a.Title),r.a.createElement(v.a.Item,null,a.Released),r.a.createElement(v.a.Item,null,a.Actors),r.a.createElement(v.a.Item,null,a.imdbRating),r.a.createElement(v.a.Item,null,a.Plot),r.a.createElement(v.a.Item,null,a.Production))),o=t?r.a.createElement(O,null):n;return r.a.createElement("div",{className:"container"},o)}}]),t}(n.Component),j=Object(d.b)((function(e){return{movie:e.movies.movie}}),{fetchMovie:function(e){return function(t){h.a.get("http://www.omdbapi.com/?apikey=".concat("abbb376d","&i=").concat(e)).then((function(e){return t({type:"FETCH_MOVIE",payload:e.data})})).catch((function(e){return console.log("Fetching error",e)}))}},setLoading:f})(y),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){a.props.searchMovie(e.target.value)},a.onSubmit=function(e){e.preventDefault(),a.props.fetchMovies(a.props.text),a.props.setLoading()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid mt-5 text-center"},r.a.createElement("h1",{className:"display-4 mb-3"},r.a.createElement("i",{className:"fa fa-search"})," Search for movies"),r.a.createElement("form",{id:"searchFrom",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Search Movies",onChange:this.onChange})))}}]),t}(r.a.Component),I=Object(d.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:"SEARCH_MOVIE",payload:e})}},fetchMovies:function(e){return function(t){h.a.get("http://www.omdbapi.com/?apikey=".concat("abbb376d","&s=").concat(e)).then((function(e){return t({type:"FETCH_MOVIES",payload:e.data})})).catch((function(e){return console.log("Fetching error:",e)}))}},setLoading:f})(w),k=a(91),C=a(94),M=a(27),x=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.movie;return(r.a.createElement(k.a,null,r.a.createElement(C.a,null,r.a.createElement(M.b,{to:"/movie/".concat(e.imdbID)},r.a.createElement(C.a.Img,{variant:"top",src:e.Poster}),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,null,e.Title," - ",e.Year)),r.a.createElement(C.a.Footer,null,r.a.createElement("small",{className:"text-muted"}))))))}}]),t}(n.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props.movies;return console.log("movies:",t),e="True"==t.Response?t.Search.map((function(e,t){return r.a.createElement(x,{key:t,movie:e})})):r.a.createElement("div",{style:{color:"red"}}," ",t.Error," "),r.a.createElement("div",{className:"row"},e)}}]),t}(n.Component),S=Object(d.b)((function(e){return{movies:e.movies.movies}}))(N),T=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.loading;return r.a.createElement("div",{className:"container"},r.a.createElement(I,null),e?r.a.createElement(O,null):r.a.createElement(S,null))}}]),t}(n.Component),F=Object(d.b)((function(e){return{loading:e.movies.loading}}))(T),A=a(18),L=(a(87),a(17)),R=a(56),D=a(57),H=a(24),P={text:"",movies:[],loading:!1,movie:[]},V=Object(L.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIE":return Object(H.a)({},e,{text:t.payload,loading:!1});case"FETCH_MOVIES":return Object(H.a)({},e,{movies:t.payload,loading:!1});case"FETCH_MOVIE":return Object(H.a)({},e,{movie:t.payload,loading:!1});case"LOADING":return Object(H.a)({},e,{loading:!0});default:return e}}}),_=[R.a],B=Object(L.createStore)(V,{},Object(D.composeWithDevTools)(L.applyMiddleware.apply(void 0,_)));var W=function(){return r.a.createElement(d.a,{store:B},r.a.createElement(M.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(A.c,null,r.a.createElement(A.a,{path:"/",exact:!0,component:F}),r.a.createElement(A.a,{path:"/movie/:id",component:j})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.3510b549.chunk.js.map