import{_ as n,o as s,c as e,a as i}from"../app.7b1888c4.mjs";const a={},l=i(`<h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1><h2 id="let-const" tabindex="-1"><a class="header-anchor" href="#let-const" aria-hidden="true">#</a> let &amp; const</h2><p>\u65B0\u589Elet\u548Cconst,\u90FD\u521B\u5EFA\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u53EA\u662Fconst\u4E0D\u80FD\u88AB\u4FEE\u6539</p><h2 id="\u89E3\u6784\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6784\u8D4B\u503C" aria-hidden="true">#</a> \u89E3\u6784\u8D4B\u503C</h2><p>\u89E3\u6784\u8D4B\u503C\uFF0C\u53EA\u80FD\u7528\u4E8E\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\uFF0C\u4E5F\u53EF\u7528\u4E8E\u5D4C\u5957\u89E3\u6784\uFF0C\u4F46\u662F\u7B49\u53F7\u4E24\u8FB9\u7684\u6A21\u5F0F\u5FC5\u987B\u76F8\u7B49\uFF0C\u4E0D\u80FD\u7528\u4E8Enull\u548Cundefined,\u7ED3\u6784\u4E0D\u6210\u529F\u4F1A\u62A5\u9519\uFF1A\u6570\u7EC4 let [a,b,c]=[1,2,3],\u5BF9\u8C61 let {a,b}={a:&#39;a&#39;,b:&#39;b&#39;}\uFF0C\u5BF9\u8C61\u7684\u89E3\u6784\u548C\u6570\u7EC4\u4E0D\u540C\u7684\u662F\uFF0C\u7531\u4E8E\u6570\u7EC4\u7684\u5143\u7D20\u662F\u6309\u7167\u6B21\u5E8F\u6392\u5217\u7684\uFF0C\u53D8\u91CF\u53D6\u503C\u7531\u4F4D\u7F6E\u51B3\u5B9A\uFF0C\u4F46\u662F\u5BF9\u8C61\u7684\u5C5E\u6027\u662F\u6CA1\u6709\u6B21\u5E8F\u7684\uFF0C\u53D8\u91CF\u5FC5\u987B\u4E0E\u5C5E\u6027\u540C\u540D\uFF0C\u624D\u80FD\u53D6\u5230\u6B63\u786E\u7684\u503C\uFF0C\u5982\u679C\u53D8\u91CF\u540D\u548C\u5C5E\u6027\u540D\u4E0D\u4E00\u81F4\uFF0C\u5FC5\u987B\u5199\u6210\uFF1A{a:c}={a:&#39;a&#39;,b:&#39;b&#39;},\u5BF9\u8C61\u7684\u89E3\u6784\u53EF\u4EE5\u6307\u5B9A\u9ED8\u8BA4\u503C\uFF1A{x=3}={}</p><h2 id="\u5B57\u7B26\u4E32\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u6269\u5C55" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u6269\u5C55</h2><ul><li>u\u4FEE\u9970\u7B26\uFF0C\u7528\u4E8E\u5904\u7406\u88AB\u8BEF\u8BA4\u4E3A4\u4E2A\u5B57\u8282\u7684\u5B57\u7B26</li><li>y\u4FEE\u9970\u7B26\uFF0C\u6BCF\u4E00\u6B21\u6267\u884C\u90FD\u4ECE\u5934\u90E8\u5F00\u59CB\u5339\u914D</li><li>\u6A21\u677F\u5B57\u7B26\u4E32\uFF0C\u7528\u53CD\u5F15\u53F7\uFF08\`\uFF09\u6807\u8BC6\u3002\u53EF\u4EE5\u5F53\u505A\u666E\u901A\u5B57\u7B26\u4E32\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u7528\u6765\u5B9A\u4E49\u591A\u884C\u5B57\u7B26\u4E32\uFF0C\u6216\u8005\u5728\u5B57\u7B26\u4E32\u4E2D\u5D4C\u5165\u53D8\u91CF</li><li>contains() \u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u662F\u5426\u627E\u5230\u4E86\u53C2\u6570\u5B57\u7B26\u4E32</li><li>startsWith() \u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u53C2\u6570\u5B57\u7B26\u4E32\u662F\u5426\u5728\u6E90\u5B57\u7B26\u4E32\u5934\u90E8</li><li>endsWith() \u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u53C2\u6570\u5B57\u7B26\u4E32\u662F\u5426\u5728\u6E90\u5B57\u7B26\u4E32\u5C3E\u90E8</li><li>repeat() \u8FD4\u56DE\u4E00\u4E2A\u65B0\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u5C06\u6E90\u5B57\u7B26\u4E32\u91CD\u590Dn\u6B21</li></ul><h2 id="\u6570\u503C\u7684\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6570\u503C\u7684\u6269\u5C55" aria-hidden="true">#</a> \u6570\u503C\u7684\u6269\u5C55</h2><ul><li>Number.isFinite() \u5224\u65AD\u53C2\u6570\u662F\u5426\u4E3A\u65E0\u7A77\u5927 \uFF0C\u4E0EisFinite()\u7684\u4E0D\u540C\u5728\u4E8E\uFF0CisFinite() \u662F\u5148\u8C03\u7528Number()\u5C06\u975E\u6570\u5B57\u8F6C\u4E3A\u6570\u503C\u540E\u518D\u8FDB\u884C\u5224\u65AD\uFF0C\u800C\u65B0\u65B9\u6CD5\u5BF9\u4E8E\u975E\u6570\u503C\u4E00\u5F8B\u8FD4\u56DEfalse</li><li>Number.isNaN() \u5224\u65AD\u53C2\u6570\u662F\u5426\u4E3ANaN\uFF0C\u4E0EisNaN()\u7684\u4E0D\u540C\u5728\u4E8E\uFF0CisNaN() \u662F\u5148\u8C03\u7528Number()\u5C06\u975E\u6570\u5B57\u8F6C\u4E3A\u6570\u503C\u540E\u518D\u8FDB\u884C\u5224\u65AD\uFF0C\u800C\u65B0\u65B9\u6CD5\u5BF9\u4E8E\u975E\u6570\u503C\u4E00\u5F8B\u8FD4\u56DEfalse</li><li>Number.parseInt(), Number.parseFloat() \u5C06\u5B57\u7B26\u4E32\u6216\u8005\u6570\u503C\u8F6C\u4E3A\u6574\u6570/\u6D6E\u70B9\u6570\u5E76\u8FD4\u56DE</li><li>Number.isInteger() \u7528\u6765\u5224\u65AD\u4E00\u4E2A\u503C\u662F\u5426\u4E3A\u6574\u6570\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728javaScript\u5185\u90E8\uFF0C\u6574\u6570\u548C\u6D6E\u70B9\u6570\u4F7F\u7528\u540C\u6837\u7684\u5B58\u50A8\u65B9\u6CD5\uFF0C\u6240\u4EE53\u548C3.0\u88AB\u89C6\u4E3A\u540C\u4E00\u4E2A\u6570</li><li>Number.MAX_SAFE_INTEGER \u6700\u5927\u5E38\u91CF</li><li>Number.MIN_SAFE_INTEGER \u6700\u5C0F\u5E38\u91CF</li><li>Number.isSafeInteger() \u5224\u65AD\u4E00\u4E2A\u6574\u6570\u662F\u5426\u5728javaScript\u80FD\u51C6\u786E\u8868\u8FBE\u7684\u6700\u5927\u5E38\u91CF\u548C\u6700\u5C0F\u5E38\u91CF\u8303\u56F4\u4E4B\u95F4\u3002</li><li>Math.trunc() \u53BB\u9664\u4E00\u4E2A\u6570\u7684\u5C0F\u6570\u90E8\u5206\uFF0C\u8FD4\u56DE\u6574\u6570\u90E8\u5206</li></ul><h2 id="\u6570\u7EC4\u7684\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u6269\u5C55" aria-hidden="true">#</a> \u6570\u7EC4\u7684\u6269\u5C55</h2><ul><li>Array.from() \u7528\u4E8E\u5C06\u7C7B\u4F3C\u6570\u7EC4\u7684\u53D8\u91CF\u548C\u53EF\u904D\u5386\u7684\u5BF9\u8C61\uFF08\u5305\u62ECset\u548Cmap\u7ED3\u6784\uFF09\u8F6C\u6362\u4E3A\u771F\u6B63\u7684\u6570\u7EC4\u3002\u6BD4\u5982\u5C06\u67E5\u8BE2\u5230\u7684dom\u5143\u7D20\u8F6C\u6362\u4E3A\u771F\u6B63\u7684\u6570\u7EC4\u4EE5\u540E\uFF0C\u624D\u80FD\u4F7F\u7528forEach\u65B9\u6CD5\u3002\u53EF\u4EE5\u63A5\u6536\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u7528\u4E8E\u5BF9\u6BCF\u4E2A\u5143\u7D20\u8FDB\u884C\u5904\u7406\uFF0C\u7C7B\u4F3C\u4E8Emap\u65B9\u6CD5\u3002</li><li>Array.of() \u5C06\u4E00\u7EC4\u503C\u8F6C\u6362\u4E3A\u6570\u7EC4\u3002\u6BD4\u5982 Array.of(1,2,3) // [1,2,3]</li><li>\u81EA\u5B9A\u4E49\u6570\u7EC4.find((value,index,array)=&gt;{}) \u8FD4\u56DE\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u5143\u7D20\uFF0C\u5982\u6CA1\u6709\u7B26\u5408\u5143\u7D20\u7684\u8FD4\u56DEundefined</li><li>\u81EA\u5B9A\u4E49\u6570\u7EC4.findIndex((value,index,array)=&gt;{}) \u8FD4\u56DE\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u90FD\u4E0D\u7B26\u5408\u8FD4\u56DE-1</li><li>\u81EA\u5B9A\u4E49\u6570\u7EC4.fill(value,startIndex,endIndex) \u8FD4\u56DE\u4E00\u4E2A\u88ABvalue\u586B\u5145\u7684\u6570\u7EC4\uFF0C\u53EF\u7528\u4E8E\u7A7A\u6570\u7EC4\u7684\u521D\u59CB\u5316\uFF0C\u7B2C\u4E8C\uFF0C\u4E09\u53C2\u6570\u7528\u4E8E\u6307\u5B9A\u586B\u5145\u7684\u5176\u5B9E\u4F4D\u7F6E\u548C\u7ED3\u675F\u4F4D\u7F6E\u3002</li><li>\u81EA\u5B9A\u4E49\u6570\u7EC4.keys() \u8FD4\u56DE\u4E00\u4E2A\u952E\u540D\u7684\u904D\u5386\u6570\u7EC4\uFF0C\u53EF\u4EE5\u7528for(let i of \u6570\u7EC4.keys()){}\u8FDB\u884C\u904D\u5386</li><li>\u81EA\u5B9A\u4E49\u6570\u7EC4.values() \u8FD4\u56DE\u4E00\u4E2A\u952E\u503C\u7684\u904D\u5386\u6570\u7EC4\uFF0C\u53EF\u4EE5\u7528for(let v of \u6570\u7EC4.values()){}\u8FDB\u884C\u904D\u5386</li><li>\u81EA\u5B9A\u4E49\u6570\u7EC4.entries() \u8FD4\u56DE\u4E00\u4E2A\u952E\u503C\u5BF9\u7684\u904D\u5386\u6570\u7EC4\uFF0C\u53EF\u4EE5\u7528for(let [i,v] of \u6570\u7EC4.entries()){}\u8FDB\u884C\u904D\u5386</li><li>\u901A\u8FC7\u73B0\u6709\u6570\u7EC4\u751F\u6210\u65B0\u6570\u7EC4\uFF0C\u79F0\u4E3A\u6570\u7EC4\u63A8\u5BFC\uFF0C\u6BD4\u5982\uFF1Avar \u6570\u7EC42=[for(i of \u6570\u7EC41) i*2] \uFF0C\u5FAA\u73AF\u6570\u7EC41,\u5C06\u6BCF\u4E2A\u5143\u7D20\u4E58\u4EE52\uFF0C\u4F5C\u4E3A\u6570\u7EC42\uFF0Cfor...of\u5FAA\u73AF\u53EF\u4EE5\u9644\u52A0if\u8BED\u53E5\uFF0C\u4E5F\u53EF\u4EE5\u591A\u4E2Afor...of\u5FAA\u73AF\uFF0C\u4F46\u662F\u8FD4\u56DE\u7684\u8868\u8FBE\u5F0F\u5199\u5728\u6700\u540E\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u65B0\u6570\u7EC4\u4F1A\u7ACB\u523B\u5728\u5185\u5B58\u4E2D\u751F\u6210\uFF0C\u5982\u679C\u539F\u6570\u7EC4\u662F\u4E00\u4E2A\u5F88\u5927\u7684\u6570\u7EC4\uFF0C\u5C06\u4F1A\u975E\u5E38\u8017\u8D39\u5185\u5B58\u3002</li><li>Array.observe(arr,callback),Array.unobserve(arr,callback) \u7528\u4E8E\u76D1\u542C\uFF08\u53D6\u6D88\u76D1\u542C\uFF09\u6570\u7EC4\u7684\u53D8\u5316\uFF0C\u6307\u5B9A\u56DE\u8C03\u51FD\u6570\u3002</li></ul><h2 id="\u5BF9\u8C61\u7684\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u6269\u5C55" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u6269\u5C55</h2><ul><li><p>Object.is(\u503C1,\u503C2) \u7528\u4E8E\u5224\u65AD\u4E24\u4E2A\u503C\u662F\u5426\u4E25\u683C\u76F8\u7B49\uFF0C\u5B83\u4E0E\u4E25\u683C\u6BD4\u8F83\u8FD0\u7B97\u7B26\uFF08===\uFF09\u7684\u884C\u4E3A\u57FA\u672C\u4E00\u81F4\uFF0C\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF0C+1\u4E0D\u7B49\u4E8E-0\uFF0CNaN\u7B49\u4E8ENaN</p></li><li><p>Object.assign(\u76EE\u6807\u5BF9\u8C61\uFF0C\u6E90\u5BF9\u8C611,,\u6E90\u5BF9\u8C612...) \u7528\u4E8E\u5C06\u6E90\u5BF9\u8C61\u7684\u6240\u6709\u53EF\u679A\u4E3E\u5C5E\u6027\u590D\u5236\u5230\u76EE\u6807\u5BF9\u8C61\u3002\u6E90\u5BF9\u8C61\u5FC5\u987B\u662F\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5426\u5219\u4F1A\u629B\u51FATypeError\u7684\u9519\u8BEF\u3002\u5982\u679C\u76EE\u6807\u5BF9\u8C61\u548C\u6E90\u5BF9\u8C61\u6709\u540C\u540D\u5C5E\u6027\uFF0C\u5219\u540E\u9762\u7684\u5C5E\u6027\u4F1A\u8986\u76D6\u524D\u9762\u7684\u5C5E\u6027</p></li><li><p>\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F\uFF1AES6\u5141\u8BB8\u5B9A\u4E49\u5BF9\u8C61\u65F6\u7528\u8868\u8FBE\u5F0F\u4F5C\u4E3A\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\uFF0C\u6BD4\u5982a={[\u53D8\u91CF\u540D/\u8868\u8FBE\u5F0F]: &#39;abc&#39;}</p></li><li><p>symbol\u662F\u4E00\u79CD\u65B0\u7684\u539F\u59CB\u6570\u636E\u7C7B\u578B\uFF0C\u4EA7\u751F\u4E00\u4E2A\u72EC\u4E00\u65E0\u4E8C\u7684\u503C\uFF0C\u53EF\u4EE5\u63A5\u6536\u53C2\u6570\u3002\u53EF\u4EE5\u901A\u8FC7name\u5C5E\u6027\u8BFB\u53D6\u3002symbol\u7C7B\u578B\u4F5C\u4E3A\u5C5E\u6027\u540D\uFF0C\u53EF\u4EE5\u88AB\u904D\u5386\uFF0C\u53EF\u4EE5\u901A\u8FC7Object.getOwnPropertySymbols()\u548CObject.getOwnPropertyKeys() \u83B7\u53D6\u8BE5\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> mySymbol <span class="token operator">=</span> <span class="token function">symbol</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
mySymbol<span class="token punctuation">.</span>name <span class="token comment">// test</span>
<span class="token keyword">typeof</span> mySymbol <span class="token comment">//symbol</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Proxy\u53EF\u4EE5\u7406\u89E3\u4E3A\u5728\u76EE\u6807\u5BF9\u8C61\u4E4B\u524D\uFF0C\u67B6\u8BBE\u4E00\u5C42\u62E6\u622A\uFF0C\u5916\u754C\u5BF9\u8BE5\u5BF9\u8C61\u7684\u8BBF\u95EE\uFF0C\u90FD\u5FC5\u987B\u901A\u8FC7\u8FD9\u5C42\u62E6\u622A,\u53EF\u4EE5\u5BF9\u76EE\u6807\u5BF9\u8C61\u8FDB\u884C\u8FC7\u6EE4\u548C\u6539\u5199\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>\u76EE\u6807\u5BF9\u8C61\uFF0C<span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">\u76EE\u6807\u5BF9\u8C61<span class="token punctuation">,</span>\u8BBF\u95EE\u5C5E\u6027</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">35</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
proxy<span class="token punctuation">.</span>name <span class="token comment">//35</span>
proxy<span class="token punctuation">.</span>time <span class="token comment">//35</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>object.observe(\u76D1\u542C\u5BF9\u8C61, callback, [\u4E8B\u4EF6\u79CD\u7C7B(add,update,delete,setPrototype)]),object.unobserve(\u76D1\u542C\u5BF9\u8C61, callback),\u7528\u6765\u76D1\u542C/\u53D6\u6D88\u76D1\u542C\u67D0\u5BF9\u8C61</p></li></ul><h2 id="\u51FD\u6570\u7684\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u6269\u5C55" aria-hidden="true">#</a> \u51FD\u6570\u7684\u6269\u5C55</h2><ul><li><p>ES6\u5141\u8BB8\u4E3A\u51FD\u6570\u7684\u53C2\u6570\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u4EFB\u4F55\u5E26\u6709\u9ED8\u8BA4\u503C\u7684\u53C2\u6570\uFF0C\u90FD\u88AB\u89C6\u4E3A\u53EF\u9009\u53C2\u6570\u3002\u4E0D\u5E26\u9ED8\u8BA4\u503C\u7684\u53C2\u6570\uFF0C\u90FD\u88AB\u89C6\u4E3A\u5FC5\u9700\u53C2\u6570\u3002</p></li><li><p>rest\u53C2\u6570\uFF08...\u53D8\u91CF\u540D\uFF09\uFF0C\u7528\u4E8E\u83B7\u53D6\u51FD\u6570\u7684\u591A\u4F59\u53C2\u6570\uFF0C\u5C06\u5176\u591A\u4F59\u7684\u53C2\u6570\u653E\u5165\u4E00\u4E2A\u6570\u7EC4\u4E2D\u3002\u6CE8\u610F\uFF0Crest\u53C2\u6570\u4E4B\u540E\u4E0D\u80FD\u518D\u6709\u5176\u4ED6\u53C2\u6570\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6269\u5C55\u8FD0\u7B97\u7B26\uFF08...\uFF09\u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u5316\u4E3A\u9017\u53F7\u5206\u9694\u7684\u53C2\u6570\u5E8F\u5217</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//Math.max(1,2,3,4)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
- \u7BAD\u5934\u51FD\u6570

   \`\`\`js 
   \u57FA\u672C\u683C\u5F0F var f=v=&gt;v \u7B49\u540C\u4E8E var f = function (v) {return v}
   \`\`\`  
 - \u4E0D\u9700\u8981\u53C2\u6570\u65F6\u4F7F\u7528\u5706\u62EC\u53F7\u4EE3\u8868\u53C2\u6570\u90E8\u5206\uFF0C\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u53EF\u4EE5\u76F4\u63A5\u5199\u53C2\u6570\uFF0C\u7701\u7565\u5706\u62EC\u53F7
 - \u4EE3\u7801\u5757\u90E8\u5206\u53EA\u6709\u4E00\u6761\u8BED\u53E5\u53EF\u4EE5\u7701\u7565\u5927\u62EC\u53F7\u548Creturn \u76F4\u63A5\u5199\u9700\u8981\u8FD4\u56DE\u7684\u6570\u636E\uFF0C\u591A\u4E8E\u4E00\u53E5\u4EE3\u7801\u5219\u5FC5\u987B\u5199\u5927\u62EC\u53F7\u5E76\u4E14\u4F7F\u7528return \u8BED\u53E5\u8FD4\u56DE\u3002\u5982\u679C\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5FC5\u987B\u5728\u5BF9\u8C61\u5916\u9762\u52A0\u4E0A\u62EC\u53F7\u3002
 - \u51FD\u6570\u4F53\u5185\u7684this\u5BF9\u8C61\uFF0C\u7ED1\u5B9A\u5B9A\u4E49\u65F6\u6240\u5728\u7684\u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528\u65F6\u6240\u5728\u7684\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u7BAD\u5934\u51FD\u6570\uFF0C\u5E76\u5728\u5176\u4EE3\u7801\u5757\uFF08{}\uFF09\u4E2D\u8C03\u7528this,\u6B64\u65F6\u4F1A\u5230\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7684\u4EE3\u7801\u5757\u7684\u7236\u4EE3\u7801\u5757\u4E2D\u5BFB\u627E\u4F60\u9700\u8981\u7684this\u65B9\u6CD5\u6216\u8005\u6570\u636E\u3002
 - \u7531\u4E8Ethis\u5728\u7BAD\u5934\u51FD\u6570\u4E2D\u88AB\u7ED1\u5B9A\uFF0C\u6240\u4EE5\u4E0D\u80FD\u4F7F\u7528call(),apply(),bind()\u8FD9\u4E9B\u65B9\u6CD5\u53BB\u6539\u53D8this\u6307\u5411
 - \u7BAD\u5934\u51FD\u6570\u4E0D\u53EF\u4EE5\u88AB\u5F53\u505A\u6784\u9020\u51FD\u6570\uFF0C\u4E5F\u5C31\u662F\u4E0D\u80FD\u4F7F\u7528new\u547D\u4EE4\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002
 - \u7BAD\u5934\u51FD\u6570\u4E0D\u53EF\u4EE5\u4F7F\u7528arguments\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5728\u51FD\u6570\u4F53\u5185\u4E0D\u5B58\u5728

## Set\u6570\u636E\u7ED3\u6784

- set\u7C7B\u4F3C\u6570\u7EC4\uFF0C\u4F46\u662F\u5176\u6210\u5458\u662F\u552F\u4E00\u7684\uFF0C\u6CA1\u6709\u91CD\u590D\u7684\u503C\u3002\u53EF\u4EE5\u7528\u4E8E\u6570\u7EC4\u53BB\u91CDnew set([1,2,,2,3,4]) // [1,2,3,4]
- \u5411set\u52A0\u5165\u503C\u7684\u65F6\u5019\u4E0D\u4F1A\u53D1\u751F\u7C7B\u578B\u8F6C\u6362\uFF0C\u4E5F\u5C31\u662F\u5728set\u4E2D\uFF0C&#39;5&#39;\u548C5\u662F\u4E0D\u540C\u7684\u503C
- Set\u7ED3\u6784\u6709\u4EE5\u4E0B\u5C5E\u6027
 - Set.prototype.constructor \u6784\u9020\u51FD\u6570
 - Set.prototype.size \u8FD4\u56DESet\u7684\u6210\u5458\u603B\u6570

- Set\u7ED3\u6784\u6709\u4EE5\u4E0B\u65B9\u6CD5
 - add(value) \u6DFB\u52A0\u503C
 - delete(value) \u5220\u9664\u503C
 - has(value) \u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u8BE5\u503C\u662F\u5426\u662FSet\u7684\u6210\u5458
 - clear() \u6E05\u9664\u6240\u6709\u6210\u5458

## Map\u6570\u636E\u7ED3\u6784

- Map\u7ED3\u6784\u7C7B\u4F3C\u5BF9\u8C61\uFF0C\u4E5F\u662F\u5BF9\u952E\u503C\u5BF9\u7684\u96C6\u5408\uFF0C\u8DDF\u5BF9\u8C61\u4E0D\u540C\u7684\u662F\uFF0C\u5BF9\u8C61\u7684\u952E\u53EA\u80FD\u662F\u5B57\u7B26\u4E32\uFF0C\u4F46\u662FMap\u7684\u952E\u4E0D\u9650\u4E8E\u5B57\u7B26\u4E32\uFF0C\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u5F53\u505A\u952E\u3002
- \u53EA\u6709\u5BF9\u540C\u4E00\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\uFF0CMap\u7ED3\u6784\u624D\u5C06\u5176\u89C6\u4E3A\u540C\u4E00\u4E2A\u952E\u3002
- \u57FA\u672C\u5199\u6CD5

   \`\`\`js
   const map = new Map()
   map.set(\u952E\u540D, \u503C)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u9519\u8BEF\u5199\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
- Map\u7ED3\u6784\u6709\u4EE5\u4E0B\u5C5E\u6027\u548C\u65B9\u6CD5
 - size \u8FD4\u56DE\u6210\u5458\u603B\u6570
 - set(key,value) \u8BBE\u7F6E\u4E00\u4E2A\u952E\u503C\u5BF9\uFF0C\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u6570\u7EC4\u8FDB\u884C\u521D\u59CB\u5316
 - get(key) \u8BFB\u53D6\u4E00\u4E2A\u952E
 - has(key) \u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u67D0\u4E2A\u952E\u662F\u5426\u5728Map\u7ED3\u6784\u4E2D
 - delete(key) \u5220\u9664\u67D0\u4E2A\u952E
 - clear() \u6E05\u7A7A\u6240\u6709\u7684\u952E\u503C\u5BF9

- Map\u904D\u5386\u5668
 - map.keys() \u8FD4\u56DE\u4E00\u4E2A\u952E\u540D\u7684\u904D\u5386\u6570\u7EC4\uFF0C\u53EF\u4EE5\u7528for(let i of \u6570\u7EC4.keys()){}\u8FDB\u884C\u904D\u5386
 - map.values() \u8FD4\u56DE\u4E00\u4E2A\u952E\u503C\u7684\u904D\u5386\u6570\u7EC4\uFF0C\u53EF\u4EE5\u7528for(let v of \u6570\u7EC4.values()){}\u8FDB\u884C\u904D\u5386
 - map.entries() \u8FD4\u56DE\u4E00\u4E2A\u952E\u503C\u5BF9\u7684\u904D\u5386\u6570\u7EC4\uFF0C\u53EF\u4EE5\u7528for(let [i,v] of \u6570\u7EC4.entries()){}\u8FDB\u884C\u904D\u5386
 - map.forEach(function(value,key,map){})

- WeakMap\u8BBE\u8BA1\u7684\u76EE\u7684\u5728\u4E8E\uFF0C\u952E\u540D\u662F\u5BF9\u8C61\u7684\u5F31\u5F15\u7528\uFF0C\u6240\u4EE5\u5176\u5BF9\u5E94\u7684\u5BF9\u8C61\u53EF\u80FD\u4F1A\u88AB\u81EA\u52A8\u56DE\u6536\u3002WeakMap\u7684\u4E13\u7528\u573A\u5408\u5C31\u662F\uFF0C\u5B83\u7684\u952E\u5BF9\u5E94\u7684\u5BF9\u8C61\uFF0C\u53EF\u80FD\u4F1A\u5728\u5C06\u6765\u6D88\u5931\u3002WeakMap\u7ED3\u6784\u6709\u52A9\u4E8E\u9632\u6B62\u5185\u5B58\u6CC4\u9732
 - set(key,value) \u8BBE\u7F6E\u4E00\u4E2A\u952E\u503C\u5BF9\uFF0C\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u6570\u7EC4\u8FDB\u884C\u521D\u59CB\u5316
 - get(key) \u8BFB\u53D6\u4E00\u4E2A\u952E
 - has(key) \u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u67D0\u4E2A\u952E\u662F\u5426\u5728Map\u7ED3\u6784\u4E2D
 - delete(key) \u5220\u9664\u67D0\u4E2A\u952E
 - clear() \u6E05\u7A7A\u6240\u6709\u7684\u952E\u503C\u5BF9

## Generator\u51FD\u6570

- Generator\u51FD\u6570\u7684\u7279\u5F81\uFF1A\u4E00\u662Ffunction\u5173\u952E\u5B57\u540E\u6709\u661F\u53F7\uFF0C\u4E8C\u662F\u51FD\u6570\u4F53\u5185\u90E8\u4F7F\u7528yield\u8BED\u53E5\u5B9A\u4E49\u904D\u5386\u5668\u7684\u6BCF\u4E2A\u6210\u5458\u3002

   \`\`\`js
   functionhelloWorld(){
       yield &#39;hello&#39;
       yield &#39;world&#39;
       return &#39;ending&#39;
   }
   var hw = hellWorld()
   \`\`\`  

- \u76F4\u63A5\u8C03\u7528\u51FD\u6570\u662F\u4E0D\u6267\u884C\u7684\uFF0C\u800C\u662F\u8FD4\u56DE\u4E00\u4E2A\u904D\u5386\u5668\uFF0C\u6B64\u65F6\u6682\u505C\u6267\u884C\u3002
- \u4F7F\u7528 \u51FD\u6570\u540D.next\u65B9\u6CD5\u8C03\u7528\uFF0C\u6BCF\u6B21\u8C03\u7528\u90FD\u4ECE\u4E0A\u4E00\u6B21\u505C\u4E0B\u6765\u7684\u5730\u65B9\u5F00\u59CB\u6267\u884C\uFF0C\u76F4\u5230\u9047\u5230\u4E0B\u4E00\u4E2Ayield\u8BED\u53E5\u3002\u8FD4\u56DE\u4E00\u4E2A\u5305\u542Bvalue\u548Cdone\u4E24\u4E2A\u5C5E\u6027\u7684\u5BF9\u8C61\u3002value\u662F\u5F53\u524D\u904D\u5386\u4F4D\u7F6E\u7684\u952E\uFF0Cdone\u662F\u8868\u793A\u904D\u5386\u662F\u5426\u7ED3\u675F\u7684\u5E03\u5C14\u503C\u3002\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u5373\u4F7F\u5DF2\u7ECF\u5B8C\u6210\u6240\u6709\u8BED\u53E5\u7684\u8C03\u7528\uFF0C\u4E0B\u4E00\u6B21\u8C03\u7528\u65F6\u4F9D\u7136\u53EF\u4EE5\u8C03\u7528\u4E0D\u4F1A\u62A5\u9519\uFF0C\u53EA\u662F\u8FD4\u56DEvalue\u4E3Aundefined\u3002

   \`\`\`js
   hw.next() //{value:&#39;hello&#39;, done: true}
   hw.next() //{value:&#39;world&#39;, done: false}
   hw.next() //{value:&#39;ending&#39;, done: true}
   hw.next() //{value:undefined, done: true}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>for...of\u53EF\u4EE5\u76F4\u63A5\u904D\u5386Generator\u51FD\u6570\uFF0C\u4E0D\u9700\u8981\u4F7F\u7528.next\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span>hw <span class="token keyword">of</span> <span class="token function">hellWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hw<span class="token punctuation">)</span> <span class="token comment">//hello</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
- yield \u540E\u9762\u53EF\u4EE5\u8DDF\u904D\u5386\u5668\uFF0C\u9700\u8981\u4F7F\u7528yield*\u8BED\u53E5

## Promise

- Promise\u5BF9\u8C61\u53EF\u4EE5\u5C06\u5F02\u6B65\u64CD\u4F5C\u4EE5\u540C\u6B65\u64CD\u4F5C\u7684\u6D41\u7A0B\u8868\u8FBE\u51FA\u6765\uFF0C\u907F\u514D\u4E86\u5C42\u5C42\u5D4C\u5957\u7684\u56DE\u8C03\u5730\u72F1\u3002\u53EF\u4EE5\u7528\u6765\u5C01\u88C5ajax\u65B9\u6CD5\u3002

   \`\`\`js
   var getInfo = new Promise(function(resolve,reject){
       if(true){
           //\u64CD\u4F5C\u6210\u529F
           resolve(info)
       }else{
           //\u64CD\u4F5C\u5931\u8D25
           reject(msg)
       }
   })
   getInfo.then(function(info){
   //\u5904\u7406\u6210\u529F\u540E\u7684\u6570\u636E
   },function(msg){
   //\u5931\u8D25
   })
   \`\`\`

- \u94FE\u5F0F\u8C03\u7528\uFF0C\u7B2C\u4E00\u4E2Athen\u7ED3\u675F\u4EE5\u540E\uFF0C\u5C06\u8FD4\u56DE\u7684\u7ED3\u679C\uFF0C\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F20\u5165\u7B2C\u4E8C\u4E2Athen\u3002\u5982\u679C\u524D\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u8FD4\u56DE\u7684\u662FPromise\u5BF9\u8C61\uFF0C\u8FD9\u662F\u540E\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u5C31\u4F1A\u7B49\u5F85\u8BE5Promise\u5BF9\u8C61\u6709\u4E86\u8FD0\u884C\u7ED3\u679C\uFF0C\u624D\u8FDB\u4E00\u6B65\u8C03\u7528\u3002

   \`\`\`js
   getInfo.then(function(info){
       return new Promist(function(resolve,reject){
           resolve(&#39;1&#39;)
       })
   }).then(function(value){
       console.log(value) //1
   }).catch(function(error){
       //\u5904\u7406\u524D\u4E24\u4E2A\u56DE\u8C03\u7684\u9519\u8BEF
   }) 
   \`\`\`

## export \u548C import

- \u9010\u4E00\u5BFC\u5165

   \`\`\`js
   //a.js
   export const a=1
   export function fc(){}
   \`\`\`

   \`\`\`js
   //b.js
   import {a,fc} from &#39;a.js&#39;
   \`\`\` 

- \u6574\u4F53\u52A0\u8F7D

   \`\`\`js
   //a.js
   export const a=1
   export function fc(){}
   \`\`\`

   \`\`\`js
   //b.js
    export from &#39;a.js&#39;
    module a from &#39;a.js&#39;
    console.log(a.a)
    console.log(fc())
   \`\`\`

- \u9ED8\u8BA4\u5BFC\u51FA(\u4E00\u4E2A\u6A21\u5757\u53EA\u80FD\u6709\u4E00\u4E2A\u9ED8\u8BA4\u65B9\u6CD5)

   \`\`\`js
   //a.js
   export defaule function fc(){}
   \`\`\`

   \`\`\`js
   //b.js
    import fc from &#39;a.js&#39;
    \`\`\`
 
- \u9009\u62E9\u6027\u5BFC\u51FA

   \`\`\`js
   //a.js
   const a=()=&gt;{},const b=()=&gt;{}
   export {a,b}
   \`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),d=[l];function c(r,v){return s(),e("div",null,d)}const u=n(a,[["render",c],["__file","ES6.html.vue"]]);export{u as default};
