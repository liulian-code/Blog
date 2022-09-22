import{_ as s,o as n,c as a,a as e}from"../app.7b1888c4.mjs";const p={},t=e(`<h1 id="vue-\u7F51\u7EDC\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#vue-\u7F51\u7EDC\u8BF7\u6C42" aria-hidden="true">#</a> Vue \u7F51\u7EDC\u8BF7\u6C42</h1><h2 id="vue-\u811A\u624B\u67B6\u914D\u7F6E\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#vue-\u811A\u624B\u67B6\u914D\u7F6E\u4EE3\u7406" aria-hidden="true">#</a> Vue \u811A\u624B\u67B6\u914D\u7F6E\u4EE3\u7406</h2><h3 id="\u914D\u7F6E\u5355\u4E2A\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5355\u4E2A\u4EE3\u7406" aria-hidden="true">#</a> \u914D\u7F6E\u5355\u4E2A\u4EE3\u7406</h3><p>\u5728 <code>vue.config.js</code> \u4E2D\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5000&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F18\u70B9\uFF1A\u914D\u7F6E\u7B80\u5355\uFF0C\u8BF7\u6C42\u8D44\u6E90\u65F6\u76F4\u63A5\u53D1\u7ED9\u524D\u7AEF\uFF088080\uFF09\u5373\u53EF\u3002</li><li>\u7F3A\u70B9\uFF1A\u4E0D\u80FD\u914D\u7F6E\u591A\u4E2A\u4EE3\u7406\uFF0C\u4E0D\u80FD\u7075\u6D3B\u7684\u63A7\u5236\u8BF7\u6C42\u662F\u5426\u8D70\u4EE3\u7406\u3002</li><li>\u5DE5\u4F5C\u65B9\u5F0F\uFF1A\u82E5\u6309\u7167\u4E0A\u8FF0\u914D\u7F6E\u4EE3\u7406\uFF0C\u5F53\u8BF7\u6C42\u4E86\u524D\u7AEF\u4E0D\u5B58\u5728\u7684\u8D44\u6E90\u65F6\uFF0C\u90A3\u4E48\u8BE5\u8BF7\u6C42\u4F1A\u8F6C\u53D1\u7ED9\u670D\u52A1\u5668 \uFF08\u4F18\u5148\u5339\u914D\u524D\u7AEF\u8D44\u6E90\uFF09</li></ul><h3 id="\u914D\u7F6E\u591A\u4E2A\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u591A\u4E2A\u4EE3\u7406" aria-hidden="true">#</a> \u914D\u7F6E\u591A\u4E2A\u4EE3\u7406</h3><p>\u7F16\u5199 <code>vue.config.js</code> \u914D\u7F6E\u5177\u4F53\u4EE3\u7406\u89C4\u5219\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api1&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5339\u914D\u6240\u6709\u4EE5 &#39;/api1&#39;\u5F00\u5934\u7684\u8BF7\u6C42\u8DEF\u5F84</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5000&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4EE3\u7406\u76EE\u6807\u7684\u57FA\u7840\u8DEF\u5F84</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// \u628A\u8DEF\u5F84\u7684 /api1 \u66FF\u6362\u4E3A\u7A7A\u4E32</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;^/api1&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;/api2&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5339\u914D\u6240\u6709\u4EE5 &#39;/api2&#39;\u5F00\u5934\u7684\u8BF7\u6C42\u8DEF\u5F84</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5001&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;^/api2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
changeOrigin \u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u670D\u52A1\u5668\u6536\u5230\u7684\u8BF7\u6C42\u5934\u4E2D\u7684 host\uFF1Alocalhost:5000
changeOrigin \u8BBE\u7F6E\u4E3A false \u65F6\uFF0C\u670D\u52A1\u5668\u6536\u5230\u7684\u8BF7\u6C42\u5934\u4E2D\u7684 host\uFF1Alocalhost:8080
changeOrigin \u9ED8\u8BA4\u4E3A true
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F18\u70B9\uFF1A\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A\u4EE3\u7406\uFF0C\u4E14\u53EF\u4EE5\u7075\u6D3B\u7684\u63A7\u5236\u8BF7\u6C42\u662F\u5426\u8D70\u4EE3\u7406\u3002</li><li>\u7F3A\u70B9\uFF1A\u914D\u7F6E\u7565\u5FAE\u7E41\u7410\uFF0C\u8BF7\u6C42\u8D44\u6E90\u65F6\u5FC5\u987B\u52A0\u524D\u7F00</li></ul><h2 id="vue-2-x-\u5168\u5C40\u914D\u7F6E-axios" tabindex="-1"><a class="header-anchor" href="#vue-2-x-\u5168\u5C40\u914D\u7F6E-axios" aria-hidden="true">#</a> vue 2.x \u5168\u5C40\u914D\u7F6E axios</h2><p>\u5B9E\u9645\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u51E0\u4E4E\u6BCF\u4E2A\u7EC4\u4EF6\u4E2D\u90FD\u4F1A\u4F7F\u7528 <code>axios</code> \u53D1\u8D77\u6570\u636E\u8BF7\u6C42\u3002\u6B64\u65F6\u4F1A\u9047\u5230\u5982\u4E0B\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ul><li>\u6BCF\u4E2A\u7EC4\u4EF6\u4E2D\u90FD\u9700\u8981\u5BFC\u5165 <code>axios</code>\uFF08\u4EE3\u7801\u81C3\u80BF\uFF09</li><li>\u6BCF\u6B21\u53D1\u8BF7\u6C42\u90FD\u9700\u8981\u586B\u5199\u5B8C\u6574\u7684\u8BF7\u6C42\u8DEF\u5F84\uFF08\u4E0D\u5229\u4E8E\u540E\u671F\u7684\u7EF4\u62A4\uFF09</li></ul><p>\u5728 <code>main.js</code> \u6587\u4EF6\u4E2D\u8FDB\u884C\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u914D\u7F6E\u8BF7\u6C42\u6839\u8DEF\u5F84</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;http://api.com&#39;</span>

<span class="token comment">// \u628A axios \u6302\u8F7D\u5230 Vue \u539F\u578B\u4E0A</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$http <span class="token operator">=</span> aixos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u70B9\uFF1A\u6BCF\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7 <code>this.$http.get</code> \u76F4\u63A5\u53D1\u8D77\u8BF7\u6C42\uFF0C\u65E0\u9700\u518D\u5BFC\u5165 <code>axios</code> \uFF1B\u82E5\u6839\u8DEF\u5F84\u53D1\u751F\u6539\u53D8\uFF0C\u53EA\u9700\u4FEE\u6539 <code>axios.defaults.baseURL</code> \uFF0C\u6709\u5229\u4E8E\u4EE3\u7801\u7EF4\u62A4\u3002</p><p>\u7F3A\u70B9\uFF1A\u65E0\u6CD5\u5B9E\u73B0 <code>API</code> \u7684\u590D\u7528\u3002\u5373\u591A\u4E2A\u7EC4\u4EF6\u9700\u8981\u5BF9\u540C\u4E00\u4E2A\u63A5\u53E3\u53D1\u8D77\u8BF7\u6C42\uFF0C\u90A3\u4E48\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u9700\u8981\u91CD\u590D\u4E66\u5199 <code>this.$http.get(&#39;/users&#39;)</code> \u7C7B\u4F3C\u7684\u4EE3\u7801\uFF0C\u9020\u6210\u5197\u4F59\u3002\uFF08\u89C6\u9891\u4E0A\u7684\u8BF4\u6CD5\uFF0C\u4E2A\u4EBA\u8BA4\u4E3A\u771F\u6B63\u7684\u7F3A\u70B9\u662F\u5982\u679C\u5B58\u5728\u591A\u4E2A\u6839\u8DEF\u5F84\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u65E0\u6CD5\u89E3\u51B3\uFF0C\u6240\u4EE5\u624D\u4F1A\u6709\u4E0B\u9762\u7684\u6539\u8FDB\u65B9\u5F0F\u3002\uFF09</p><p>\u6539\u8FDB\uFF1A\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u6839\u8DEF\u5F84\uFF0C\u72EC\u7ACB\u5C01\u88C5\u4E00\u4E2A <code>request.js</code> \u6A21\u5757\uFF0C\u7EC4\u4EF6\u5BFC\u5165\u6240\u9700\u6839\u8DEF\u5F84\u5BF9\u5E94\u7684 <code>axios</code> \u8FDB\u884C\u4F7F\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token comment">// \u521B\u5EFA axios \u5B9E\u4F8B</span>
<span class="token keyword">const</span> request <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;http://api.taobao.com&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[t];function i(c,l){return n(),a("div",null,o)}const d=s(p,[["render",i],["__file","vue\u7F51\u7EDC\u8BF7\u6C42.html.vue"]]);export{d as default};
