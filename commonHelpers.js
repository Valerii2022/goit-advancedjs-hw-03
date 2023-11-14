import{a as c,S as l,i as u}from"./assets/vendor-a52d55bd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();c.defaults.headers.common["x-api-key"]="live_eHSvO4TLSWTzYqCyrvJFZTIkNtmC5qY8lR5EzJI3CtDw9iWFM8sR8B3RRNgqKKtM";const f=async()=>{const n="https://api.thecatapi.com/v1/breeds";return c.get(n).then(e=>e.data).catch(e=>console.log(e))},h=async n=>{const e=`https://api.thecatapi.com/v1/images/search?breed_ids=${n}125`;return c.get(e).then(o=>{if(o.data.length===0)throw new error;return o.data}).catch(o=>console.log(o))},s={select:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info"),loader:document.querySelector(".loader")};s.select.addEventListener("change",m);f().then(n=>g(n)).catch(()=>{s.select.classList.add("hidden"),d()});function m(n){s.loader.classList.remove("hidden"),s.catInfo.classList.add("hidden"),h(n.target.value).then(e=>{s.catInfo.classList.remove("hidden"),s.loader.classList.add("hidden"),s.catInfo.innerHTML=p(e)}).catch(()=>d())}function p(n){return n.map(e=>`<img src=${e.url} alt=${e.breeds[0].name} width="400">
  <div class="content">
    <h2>${e.breeds[0].name}</h2>
    <p>${e.breeds[0].description}</p>
    <p><span>Temperament:</span> ${e.breeds[0].temperament}</p>
  </div>`).join("")}function g(n){s.loader.classList.add("hidden"),s.select.classList.remove("hidden");const e=n.map(o=>({text:o.name,value:o.id}));new l({select:".breed-select",data:e,settings:{}})}function d(){u.error({title:"Error",message:"Oops! Something went wrong! Try reloading the page!",layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"})}
//# sourceMappingURL=commonHelpers.js.map
