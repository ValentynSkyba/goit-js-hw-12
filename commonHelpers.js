import{a as p,S as M,i as v}from"./assets/vendor-da186403.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();p.defaults.baseURL="https://pixabay.com/api/";async function h(e,o,s){console.log(e,o,s);const{data:i}=await p.get("",{params:{key:"42801322-2062a11e10d8e6d4e2ccea576",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s}});return i}const E=new M(".gallery a",{captionsData:"alt",captionDelay:250}),y=document.querySelector(".js-gallery");function L(e){const o=C(e);y.insertAdjacentHTML("beforeend",o),E.refresh()}function C(e){return e.map(P).join(`
`)}function P({webformatURL:e,largeImageURL:o,tags:s,likes:i,views:t,comments:r,downloads:l}){return` <li class="gallery-item">
      <a href="${o}" class="gallery-link">
        <img src="${e}" alt="${s}" class="gallery-image" />
        <ul class="description">
          <li class="desc-item">
            <p class="des-p">Likes</p> ${i}
          </li>
          <li class="desc-item">
            <p class="des-p">Views</p> ${t}
          </li>
          <li class="desc-item">
            <p class="des-p">Comments</p> ${r}
          </li>
          <li class="desc-item">
            <p class="des-p">Downloads</p> ${l}
          </li>
        </ul>
      </a>
    </li>`}function g(){y.innerHTML=""}const $=document.querySelector(".js-gallery"),j=document.querySelector(".js-search-form"),b=document.querySelector(".loader"),m=document.querySelector(".js-load-more"),q="Sorry, there are no images matching your search query. Please try again!",O="Error, empty field",x="We're sorry, but you've reached the end of search results.";let c,a,d=15,w;j.addEventListener("submit",H);m.addEventListener("click",k);async function H(e){if(e.preventDefault(),B(),g(),f(),a=1,c=e.target.elements.data.value.trim().split(" ").filter(s=>s).join("+"),!c){g(),u(O),n();return}console.log(a);try{const s=await h(c,a,d);s.hits.length===0?(n(),u(q)):(L(s.hits),D()),n(),s.totalHits<=d&&f(),w=Math.ceil(s.totalHits/d),S()}catch(s){console.log(s),n()}e.target.reset()}async function k(){B(),a+=1;try{const e=await h(c,a,d);L(e.hits),z(),S(),n()}catch(e){console.log(e),n()}}function S(){a===w&&(f(),u(x))}function B(e){b.classList.remove("is-hide")}function n(e){b.classList.add("is-hide")}function u(e){const o={message:e,messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message"};v.show(o)}function D(){m.classList.remove("is-hidden")}function f(){m.classList.add("is-hidden")}function z(){const e=$.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({behavior:"smooth",top:e})}
//# sourceMappingURL=commonHelpers.js.map
