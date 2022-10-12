import{_ as e,o as a,c as r,a as i}from"../app.58d8321c.mjs";const d="/Blog/assets/grid.5a6278bf.png",t={},h=i('<h1 id="grid\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#grid\u5E03\u5C40" aria-hidden="true">#</a> grid\u5E03\u5C40</h1><p><img src="'+d+'" alt="grid\u793A\u610F\u56FE"></p><h2 id="grid-template-columns" tabindex="-1"><a class="header-anchor" href="#grid-template-columns" aria-hidden="true">#</a> <code>grid-template-columns</code></h2><ul><li>\u5B9A\u4E49\u5217\uFF0C\u5C5E\u6027\u503C\u7684\u4E2A\u6570\u8868\u793A\u7F51\u683C\u7684\u5217\u6570\uFF0C\u6BCF\u4E2A\u503C\u8868\u793A\u76F8\u5E94\u5217\u7684\u5BBD\u5EA6\uFF0C\u5982\uFF1A100px 100px \u8868\u793A\u4E24\u5217\uFF0C\u6BCF\u4E00\u5217\u5BBD\u5EA6\u4E3A100px</li><li>\u5C5E\u6027\u503C\u53EF\u7528\u7684\u5355\u4F4D\u6709auto,px,%,fr(\u8BBE\u7F6E\u5217\u6216\u884C\u5360\u5269\u4F59\u7A7A\u95F4\u7684\u6BD4\u4F8B),\uFF08minmax(50px,200px) \u8868\u793A\u5217/\u884C\u7684\u6700\u5927\u5BBD/\u9AD8\u4E3A50px\u548C200px\uFF09 \u53EF\u4F7F\u7528repeat\u6307\u5B9A\u91CD\u590D\u7684\u884C\u6570\u6216\u5217\u6570\uFF0C\u5982\uFF1Agrid-template-columns:repeat(10,50px) 10px\u6216repeat(2,10px 15px) 20px</li><li>repeat(auto-fill,minmax(60px,1fr))\u521B\u5EFA\u5F39\u6027\u5E03\u5C40\uFF0C\u6839\u636E\u5BB9\u5668\u5927\u5C0F\uFF0C\u5C3D\u53EF\u80FD\u591A\u7684\u653E\u5165\u6307\u70B9\u4E2A\u5927\u5C0F\u7684\u884C\u6216\u5217\u3002</li><li>repeat(auto-fit,minmax(60px,1fr))\u521B\u5EFA\u5F39\u6027\u5E03\u5C40\uFF0C\u6839\u636E\u5BB9\u5668\u5927\u5C0F\uFF0C\u5C3D\u53EF\u80FD\u591A\u7684\u653E\u5165\u6307\u70B9\u4E2A\u5927\u5C0F\u7684\u884C\u6216\u5217,\u4E0D\u540C\u4E8Eauto-fill\u5728\u884C/\u5217\u591A\u4F59\u65F6\u653E\u5165\u7A7A\u5355\u5143\u683C\uFF0Cauto-fit\u4F1A\u62C9\u4F38\u5355\u5143\u683C\u4EE5\u586B\u6EE1\u884C/\u5217\u3002</li></ul><h2 id="grid-columns-gap" tabindex="-1"><a class="header-anchor" href="#grid-columns-gap" aria-hidden="true">#</a> <code>grid-columns-gap</code></h2><p>\u8BBE\u7F6E\u5217\u4E0E\u5217\u4E4B\u95F4\u7684\u95F4\u8DDD</p><h2 id="grid-template-rows" tabindex="-1"><a class="header-anchor" href="#grid-template-rows" aria-hidden="true">#</a> <code>grid-template-rows</code></h2><p>\u5B9A\u4E49\u884C\uFF0C\u5C5E\u6027\u503C\u7684\u4E2A\u6570\u8868\u793A\u7F51\u683C\u7684\u884C\u6570\uFF0C\u6BCF\u4E2A\u503C\u8868\u793A\u76F8\u5E94\u884C\u7684\u9AD8\u5EA6</p><h2 id="grid-row-gap" tabindex="-1"><a class="header-anchor" href="#grid-row-gap" aria-hidden="true">#</a> <code>grid-row-gap</code></h2><p>\u8BBE\u7F6E\u884C\u4E0E\u884C\u4E4B\u95F4\u7684\u95F4\u8DDD</p><h2 id="grid-gap" tabindex="-1"><a class="header-anchor" href="#grid-gap" aria-hidden="true">#</a> <code>grid-gap</code></h2><p>\u540C\u65F6\u8BBE\u7F6E\u884C\u4E0E\u884C\uFF0C\u5217\u4E0E\u5217\u7684\u95F4\u8DDD\uFF0C\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u503C\uFF08\u540C\u65F6\u8BBE\u7F6E\u884C\u3001\u5217\u95F4\u8DDD\uFF09\u6216\u4E24\u4E2A\u503C\uFF08\u5206\u522B\u8BBE\u7F6E\u884C\u3001\u5217\u95F4\u8DDD\uFF09</p><h2 id="grid-column" tabindex="-1"><a class="header-anchor" href="#grid-column" aria-hidden="true">#</a> <code>grid-column</code></h2><p>\u5B50\u5143\u7D20\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u5F53\u524D\u5B50\u5143\u7D20\u5360\u7528\u7F51\u683C\u591A\u5217\u7684\u5217\u7EBF\u5F00\u59CB\u548C\u5217\u7EBF\u7ED3\u675F\u4F4D\u7F6E\uFF0C\u5982grid-column:2/4</p><h2 id="grid-row" tabindex="-1"><a class="header-anchor" href="#grid-row" aria-hidden="true">#</a> <code>grid-row</code></h2><p>\u5B50\u5143\u7D20\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u5F53\u524D\u5B50\u5143\u7D20\u5360\u7528\u7F51\u683C\u591A\u884C\u7684\u884C\u7EBF\u5F00\u59CB\u548C\u884C\u7EBF\u7ED3\u675F\u4F4D\u7F6E</p><h2 id="justify-self" tabindex="-1"><a class="header-anchor" href="#justify-self" aria-hidden="true">#</a> <code>justify-self</code></h2><p>\u5B50\u5143\u7D20\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u5F53\u524D\u5B50\u5143\u7D20\u5728\u5355\u5143\u683C\u6C34\u5E73\u65B9\u5411\u7684\u5BF9\u9F50\u65B9\u5F0F</p><ul><li>start \u5DE6\u5BF9\u9F50</li><li>center \u5C45\u4E2D</li><li>end \u53F3\u5BF9\u9F50</li><li>stretch \u9ED8\u8BA4\u503C\uFF0C\u4F1A\u4F7F\u5185\u5BB9\u5360\u6EE1\u5355\u5143\u683C\u5BBD\u5EA6</li></ul><h2 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> <code>align-self</code></h2><p>\u5B50\u5143\u7D20\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u5F53\u524D\u5B50\u5143\u7D20\u5728\u5355\u5143\u683C\u5782\u76F4\u65B9\u5411\u7684\u5BF9\u9F50\u65B9\u5F0F</p><h2 id="justify-items" tabindex="-1"><a class="header-anchor" href="#justify-items" aria-hidden="true">#</a> <code>justify-items</code></h2><p>\u7F51\u683C\u5BB9\u5668\u5143\u7D20\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u6240\u6709\u7684\u7F51\u683C\u9879\u7684\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</p><h2 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> <code>align-items</code></h2><p>\u7F51\u683C\u5BB9\u5668\u5143\u7D20\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u6240\u6709\u7684\u7F51\u683C\u9879\u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F</p><h2 id="grid-template-areas" tabindex="-1"><a class="header-anchor" href="#grid-template-areas" aria-hidden="true">#</a> <code>grid-template-areas</code></h2><p>\u7F51\u683C\u5BB9\u5668\u5C5E\u6027\uFF0C\u5B9A\u4E49\u7F51\u683C\u7684\u533A\u57DF\uFF0C\u5E76\u6307\u5B9A\u540D\u79F0\uFF0C\u6CE8\u610F\uFF0C\u4E00\u4E2A\u7F51\u683C\u4E00\u4E2A\u540D\u79F0\uFF0C\u5FC5\u987B\u4E0E\u7F51\u683C\u7684\u884C\u5217\u6570\u76F8\u540C</p><h2 id="grid-areas" tabindex="-1"><a class="header-anchor" href="#grid-areas" aria-hidden="true">#</a> <code>grid-areas</code></h2><p>\u5B50\u5143\u7D20\u5C5E\u6027,\u914D\u5408grid-template-areas\u4F7F\u7528\uFF0C\u8BBE\u7F6E\u5F53\u524D\u7684\u7F51\u683C\u5360\u7528\u6307\u5B9A\u7684\u7F51\u683C\u540D\u79F0\u533A\u57DF,\u4E5F\u53EF\u4EE5\u4F7F\u7528\u884C\u6570\u548C\u5217\u6570\u6307\u5B9A\uFF0C\u5982\uFF1A\u5F00\u59CB\u884C\u6570/\u5F00\u59CB\u5217\u6570/\u7ED3\u675F\u884C\u6570/\u7ED3\u675F\u5217\u6570</p>',29),c=[h];function s(o,l){return a(),r("div",null,c)}const p=e(t,[["render",s],["__file","grid\u5E03\u5C40.html.vue"]]);export{p as default};
