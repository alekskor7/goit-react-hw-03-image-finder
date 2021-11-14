(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3nTqi",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__NR0aK"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__16YOY",Modal:"Modal_Modal__bAGxV"}},13:function(e,t,a){e.exports={App:"App_App__3Va1B",Loader:"App_Loader__3cMKN"}},20:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1Dglp"}},21:function(e,t,a){e.exports={Button:"Button_Button__1skPp"}},27:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),s=(a(27),a(14)),i=a(3),l=a(4),h=a(6),u=a(5),m=a(18),d=a.n(m),p=a(22),b=a(7),j=a.n(b),g=a(1),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.query.trim();a&&e.props.onSubmit(a),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:j.a.Searchbar,children:Object(g.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(g.jsx)("span",{className:j.a.SearchFormButtonLabel,children:Object(g.jsx)(p.a,{size:"25px"})})}),Object(g.jsx)("input",{className:j.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(n.Component),v=f,y=a(11),O=a.n(y);var S=function(e){var t=e.item,a=e.onClick;return Object(g.jsx)("li",{className:O.a.ImageGalleryItem,onClick:a,children:Object(g.jsx)("img",{src:t.webformatURL,alt:t.tags,className:O.a.ImageGalleryItemImage})})},_=a(12),x=a.n(_),w=a(19),I=a.n(w),k=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(g.jsx)(I.a,{isOpen:this.props.onClose,onRequestClose:this.props.onClose,className:x.a.Modal,overlayClassName:x.a.Overlay,ariaHideApp:!1,children:Object(g.jsx)("div",{onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{children:this.props.children})})})}}]),a}(n.Component),C=k,M=a(20),F=a.n(M),A=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageIndex:null,showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"handleClick",value:function(e){this.setState({imageIndex:e,showModal:!0})}},{key:"render",value:function(){var e=this;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("ul",{className:F.a.ImageGallery,children:this.props.items.map((function(t,a){return Object(g.jsx)(S,{item:t,onClick:function(){e.handleClick(a)}},a)}))}),this.state.showModal&&Object(g.jsx)(C,{onClose:this.toggleModal,children:Object(g.jsx)("img",{src:this.props.items[this.state.imageIndex].largeImageURL,alt:this.props.items[this.state.imageIndex].tags})})]})}}]),a}(n.Component),B=A,N="23523272-7e7e55898992c75b8603edf48";var L=a(21),G=a.n(L);var q=function(e){return Object(g.jsx)("button",{type:"button",onClick:e.onClick,className:G.a.Button,children:e.children})},D=a(13),E=a.n(D),U="pending",K="resolved",T="rejected",R="needLoading",H=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",images:[],page:1,isMoreAvailable:!1,error:null,status:null},e.handleSearchSubmit=function(t){e.setState({images:[],query:t,page:1,status:R})},e.handleLoadMore=function(){e.setState((function(){return{page:e.state.page+1,status:R}}))},e.checkAvailability=function(e){return!(e<12)},e}return Object(l.a)(a,[{key:"getSnapshotBeforeUpdate",value:function(e,t){return window.scrollY}},{key:"componentDidUpdate",value:function(e,t,a){var n=this,r=this.state,o=r.query,c=r.page,i=r.images;this.state.status===R&&(this.setState({status:U}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(N,"&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Can't get images for ".concat(e)))}))}(o,c).then((function(e){var t=e.hits.length;if(0!==t){var a=n.checkAvailability(t);n.setState({images:[].concat(Object(s.a)(i),Object(s.a)(e.hits)),isMoreAvailable:a,status:K})}else n.setState({error:new Error("No search results for ".concat(o)),status:T})})).then((function(){1!==c&&window.scrollTo({top:a+window.innerHeight-140,left:0,behavior:"smooth"})})).catch((function(e){n.setState({error:e,status:T})})))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.status,n=e.isMoreAvailable,r=e.images;return Object(g.jsxs)("div",{className:E.a.App,children:[Object(g.jsx)(v,{onSubmit:this.handleSearchSubmit}),a===T&&Object(g.jsx)("div",{children:t.message}),Object(g.jsx)(B,{items:r}),a===U&&Object(g.jsx)("div",{className:E.a.Loader,children:Object(g.jsx)(d.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})}),a===K&&n&&Object(g.jsx)(q,{onClick:this.handleLoadMore,children:"Load more"})]})}}]),a}(n.Component),Y=H;c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(Y,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1iCvf",SearchForm:"Searchbar_SearchForm__3w0tg",SearchFormButton:"Searchbar_SearchFormButton__36Tfe",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3l4at",SearchFormInput:"Searchbar_SearchFormInput__MUnnH"}}},[[58,1,2]]]);
//# sourceMappingURL=main.58b4f44b.chunk.js.map