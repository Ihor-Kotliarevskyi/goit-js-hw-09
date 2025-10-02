import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const l=document.querySelector(".form-container");l.innerHTML=`<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
`;let e={email:"",message:""};const a="feedback-form-state",r=document.querySelector(".feedback-form"),o=r.querySelector("input"),m=r.querySelector("textarea");i();r.addEventListener("submit",s);r.addEventListener("input",n);function s(t){if(t.preventDefault(),e.email&&e.message)console.log(e.email,e.message);else{alert("Fill please all fields");return}t.currentTarget.reset(),localStorage.removeItem(a),e.email="",e.message=""}function n(t){t.target.nodeName==="INPUT"?e.email=t.target.value:e.message=t.target.value,localStorage.setItem(a,JSON.stringify(e))}function i(){JSON.parse(localStorage.getItem(a))&&(e.email=o.value=JSON.parse(localStorage.getItem(a)).email,e.message=m.value=JSON.parse(localStorage.getItem(a)).message)}
//# sourceMappingURL=2-form.js.map
