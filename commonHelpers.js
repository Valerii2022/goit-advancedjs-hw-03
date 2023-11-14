import{a as c,S as l,i as u}from"./assets/vendor-a52d55bd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();c.defaults.headers.common["x-api-key"]="live_eHSvO4TLSWTzYqCyrvJFZTIkNtmC5qY8lR5EzJI3CtDw9iWFM8sR8B3RRNgqKKtM";const f=async()=>{const r="https://api.thecatapi.com/v1/breeds";return c.get(r).then(e=>e.data).catch(e=>console.log(e))},m=async r=>{const e=`https://api.thecatapi.com/v1/images/search?breed_ids=${r}`;return c.get(e).then(s=>s.data).catch(s=>console.log(s))},o={select:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info"),loader:document.querySelector(".loader")};o.select.addEventListener("change",h);f().then(r=>g(r)).catch(()=>d());function h(r){o.loader.classList.remove("hidden"),o.catInfo.classList.add("hidden"),m(r.target.value).then(e=>{if(o.catInfo.classList.remove("hidden"),o.loader.classList.add("hidden"),e.length===0)return new Error(error);o.catInfo.innerHTML=p(e)}).catch(()=>d())}function p(r){return r.map(e=>`<img src=${e.url} alt=${e.breeds[0].name} width="400">
  <div class="content">
    <h2>${e.breeds[0].name}</h2>
    <p>${e.breeds[0].description}</p>
    <p><span>Temperament:</span> ${e.breeds[0].temperament}</p>
  </div>`).join("")}function g(r){o.loader.classList.add("hidden"),o.select.classList.remove("hidden");const e=r.map(s=>({text:s.name,value:s.id}));new l({select:".breed-select",data:e,settings:{}})}function d(){o.select.classList.add("hidden"),u.error({title:"Error",message:"Oops! Something went wrong! Try reloading the page!",layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"})}
//# sourceMappingURL=commonHelpers.js.map
