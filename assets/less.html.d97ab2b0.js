import{_ as p,o as t,c as l,b as n,d as e,e as s,a as i,r as c}from"../app.7b1888c4.mjs";const o={},u=n("h1",{id:"hello-less",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hello-less","aria-hidden":"true"},"#"),s(" Hello Less")],-1),r=n("blockquote",null,[n("p",null,"It's CSS, with just a little more.")],-1),d={href:"https://less.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},v=s("Learn More"),k=n("h2",{id:"what-is-less",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#what-is-less","aria-hidden":"true"},"#"),s(" What is Less")],-1),b=n("p",null,"Less(Leaner Style Sheets \u7CBE\u7B80\u6837\u5F0F\u8868) \u662F\u4E00\u79CD\u52A8\u6001\u6837\u5F0F\u8BED\u8A00\uFF0C\u5C5E\u4E8E css \u9884\u5904\u7406\u5668\u7684\u8303\u7574\uFF0C\u5B83\u6269\u5C55\u4E86 CSS \u8BED\u8A00\uFF0C\u589E\u52A0\u4E86\u53D8\u91CF\u3001Mixin\u3001\u51FD\u6570\u7B49\u7279\u6027\uFF0C\u4F7F CSS \u66F4\u6613\u7EF4\u62A4\u548C\u6269\u5C55\uFF0CLess \u65E2\u53EF\u4EE5\u5728 \u5BA2\u6237\u7AEF \u4E0A\u8FD0\u884C \uFF0C\u4E5F\u53EF\u4EE5\u501F\u52A9 Node.js \u5728\u670D\u52A1\u7AEF\u8FD0\u884C\u3002",-1),m=n("p",null,"Less \u7F16\u8BD1\u5DE5\u5177\uFF1A",-1),h={href:"http://koala-app.com/index.html",target:"_blank",rel:"noopener noreferrer"},g=s("Koala"),x=n("li",null,"vscode \u7684 Easy LESS \u63D2\u4EF6",-1),y=i(`<h2 id="\u6CE8\u91CA-comments" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA-comments" aria-hidden="true">#</a> \u6CE8\u91CA(Comments)</h2><ul><li>\u591A\u884C\u6CE8\u91CA\u4FDD\u7559</li><li>\u5355\u884C\u6CE8\u91CA\u4E0D\u88AB\u4FDD\u7559\u5728\u7F16\u8BD1\u751F\u6210\u7684 CSS \u4E2D</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">/* 
 * \u4E00\u4E2A\u5757\u6CE8\u91CA
 * style comment! 
*/</span>

<span class="token comment">// \u8FD9\u4E00\u884C\u88AB\u6CE8\u91CA\u6389\u4E86\uFF01</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D8\u91CF-variables" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF-variables" aria-hidden="true">#</a> \u53D8\u91CF(Variables)</h2><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><ul><li>@ \u58F0\u660E\u53D8\u91CF\uFF0C\u4F5C\u4E3A\u666E\u901A\u5C5E\u6027\u503C\u4F7F\u7528</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@width<span class="token punctuation">:</span></span> 50px<span class="token punctuation">;</span>
<span class="token variable">@height<span class="token punctuation">:</span></span> 100px<span class="token punctuation">;</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u63D2\u503C-variable-interpolation" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u63D2\u503C-variable-interpolation" aria-hidden="true">#</a> \u53D8\u91CF\u63D2\u503C(Variable Interpolation)</h3><ul><li>\u53D8\u91CF\u7528\u4E8E\u9009\u62E9\u5668\u540D\u3001\u5C5E\u6027\u540D\u3001URL\u3001<code>@import</code>\u8BED\u53E5</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@my-selector<span class="token punctuation">:</span></span> banner<span class="token punctuation">;</span>

<span class="token comment">// \u9700\u8981\u6DFB\u52A0 {}</span>
<span class="token selector">.@{my-selector}</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@property<span class="token punctuation">:</span></span> color<span class="token punctuation">;</span>

<span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">@{property}</span><span class="token punctuation">:</span> #0ee<span class="token punctuation">;</span>
  <span class="token property">background-@{property}</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// Variables</span>
<span class="token variable">@images<span class="token punctuation">:</span></span> <span class="token string">&#39;../img&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Usage</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;@{images}/white-sand.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// Variables</span>
<span class="token variable">@themes<span class="token punctuation">:</span></span> <span class="token string">&#39;../../src/themes&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Usage</span>
<span class="token atrule">@import &#39;@</span><span class="token punctuation">{</span>themes<span class="token punctuation">}</span><span class="token operator">/</span>tidal<span class="token operator">-</span>wave.less&#39;<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5EF6\u8FDF\u52A0\u8F7D-lazy-evaluation" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u8FDF\u52A0\u8F7D-lazy-evaluation" aria-hidden="true">#</a> \u5EF6\u8FDF\u52A0\u8F7D(Lazy Evaluation)</h3><blockquote><p>When defining a variable twice, the last definition of the variable is used, searching from the current scope upwards.</p></blockquote><p>\u5F53\u4E00\u4E2A\u53D8\u91CF\u88AB\u58F0\u660E\u591A\u6B21\uFF0C\u4F1A\u53D6\u6700\u540E\u4E00\u6B21\u7684\u503C\uFF0C\u5E76\u4ECE\u5F53\u524D\u4F5C\u7528\u57DF\u5F80\u5916\u5BFB\u627E\u53D8\u91CF\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@var<span class="token punctuation">:</span></span> 0<span class="token punctuation">;</span>
<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token variable">@var<span class="token punctuation">:</span></span> 1<span class="token punctuation">;</span>
  <span class="token selector">.brass</span> <span class="token punctuation">{</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 2<span class="token punctuation">;</span>
    <span class="token property">three</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">one</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">one</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class .brass</span> <span class="token punctuation">{</span>
  <span class="token property">three</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C5E\u6027\u540D\u53D8\u91CF-properties-as-variables" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u540D\u53D8\u91CF-properties-as-variables" aria-hidden="true">#</a> \u5C5E\u6027\u540D\u53D8\u91CF(Properties as Variables)</h3><blockquote><p>You can easily treat properties like variables using the $prop syntax</p></blockquote><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5D4C\u5957-nesting" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957-nesting" aria-hidden="true">#</a> \u5D4C\u5957(Nesting)</h2><p>Less \u63D0\u4F9B\u4E86\u4F7F\u7528\u5D4C\u5957(nesting)\u4EE3\u66FF\u5C42\u53E0\u6216\u4E0E\u5C42\u53E0\u7ED3\u5408\u4F7F\u7528\u7684\u80FD\u529B</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector">.navigation</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .navigation</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .logo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7236\u9009\u62E9\u5668-parent-selectors" tabindex="-1"><a class="header-anchor" href="#\u7236\u9009\u62E9\u5668-parent-selectors" aria-hidden="true">#</a> \u7236\u9009\u62E9\u5668 (Parent Selectors)</h2><p>\u5728\u5D4C\u5957\u89C4\u5219\u4E2D\uFF0C <code>&amp;</code> \u8868\u793A\u7236\u9009\u62E9\u5668\uFF0C\u5E38\u7528\u4E8E\u7ED9\u73B0\u6709\u9009\u62E9\u5668\u6DFB\u52A0\u4F2A\u7C7B\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.header a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.header a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6CA1\u6709 <code>&amp;</code>\uFF0C\u4F1A\u88AB\u7F16\u8BD1\u6210\u540E\u4EE3\u9009\u62E9\u5668 <code>a :hover</code>\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C<code>&amp;</code> \u8FD8\u80FD\u7528\u4E8E\u751F\u6210\u91CD\u590D\u7C7B\u540D\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-ok</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;ok.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;-cancel</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;cancel.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-custom</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;custom.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.button-ok</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;ok.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button-cancel</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;cancel.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button-custom</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;custom.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DF7\u5408-mixins" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5408-mixins" aria-hidden="true">#</a> \u6DF7\u5408(Mixins)</h2><p>\u6DF7\u5408(Mixin)\u662F\u4E00\u79CD\u5C06\u4E00\u7EC4\u5C5E\u6027\u4ECE\u4E00\u4E2A\u89C4\u5219\u96C6\u5305\u542B(\u6216\u6DF7\u5165)\u5230\u53E6\u4E00\u4E2A\u89C4\u5219\u96C6\u7684\u65B9\u5F0F\uFF0C\u53EF\u7406\u89E3\u4E3A\u590D\u5236\u7C98\u8D34\u3002</p><h3 id="\u666E\u901A\u6DF7\u5408" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u6DF7\u5408" aria-hidden="true">#</a> \u666E\u901A\u6DF7\u5408</h3><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E26\u53C2\u6570\u7684\u6DF7\u5408-parametric-mixins" tabindex="-1"><a class="header-anchor" href="#\u5E26\u53C2\u6570\u7684\u6DF7\u5408-parametric-mixins" aria-hidden="true">#</a> \u5E26\u53C2\u6570\u7684\u6DF7\u5408(Parametric Mixins)</h3><ol><li>\u6DF7\u5408\u5E26\u53C2\u6570\uFF0C\u53C2\u6570\u9700\u8981\u6309\u987A\u5E8F\u4F20\u9012</li></ol><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.border(<span class="token variable">@width</span>, <span class="token variable">@style</span>, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> solid<span class="token punctuation">,</span> #ccc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u6DF7\u5408\u5E26\u53C2\u6570\u5E76\u6709\u9ED8\u8BA4\u503C</li></ol><ul><li>\u9700\u6CE8\u610F\u7684\u662F\uFF0C\u5C31\u7B97\u6709\u9ED8\u8BA4\u503C\uFF0C\u4E5F\u8981\u6309\u987A\u5E8F\u4F20\u9012</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.border(<span class="token variable">@width</span>, <span class="token variable">@style</span>, <span class="token variable">@color</span>: #ccc)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> solid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F1A\u51FA\u9519</span>
<span class="token selector">.border(<span class="token variable">@width</span>: 1px, <span class="token variable">@style</span>, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>solid<span class="token punctuation">,</span> #ccc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u547D\u540D\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u53C2\u6570" aria-hidden="true">#</a> \u547D\u540D\u53C2\u6570</h3><p>\u53EF\u4EE5\u5728\u5411\u6DF7\u5408\u4F20\u53C2\u662F\u6307\u5B9A\u53C2\u6570\u540D\u79F0\uFF0C\u4ECE\u800C\u4E0D\u9700\u8981\u6309\u987A\u5E8F\u4F20\u5165</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.border(<span class="token variable">@width</span>, <span class="token variable">@style</span>, <span class="token variable">@color</span>: #ccc)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span><span class="token variable">@style<span class="token punctuation">:</span></span> solid<span class="token punctuation">,</span> <span class="token variable">@color<span class="token punctuation">:</span></span> red<span class="token punctuation">,</span> <span class="token variable">@width<span class="token punctuation">:</span></span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arguments-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#arguments-\u53D8\u91CF" aria-hidden="true">#</a> @arguments \u53D8\u91CF</h3><p><code>@arguments</code> \u53D8\u91CF\u5305\u542B\u4E86\u4F20\u5165\u7684\u6240\u6709\u53C2\u6570</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.box-shadow(<span class="token variable">@x</span>: 0, <span class="token variable">@y</span>: 0, <span class="token variable">@blur</span>: 1px, <span class="token variable">@color</span>: #000)</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.big-block</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.box-shadow</span><span class="token punctuation">(</span>2px<span class="token punctuation">,</span> 5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.big-block</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 2px 5px 1px #000<span class="token punctuation">;</span>
  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> 2px 5px 1px #000<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 2px 5px 1px #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5339\u914D\u6A21\u5F0F-pattern-matching" tabindex="-1"><a class="header-anchor" href="#\u5339\u914D\u6A21\u5F0F-pattern-matching" aria-hidden="true">#</a> \u5339\u914D\u6A21\u5F0F(Pattern-matching)</h3><p>\u5728\u591A\u4E2A\u76F8\u540C\u7684\u6DF7\u5408\u4E2D(\u53C2\u6570\u4E2A\u6570\u5FC5\u987B\u76F8\u540C)\uFF0C\u5339\u914D\u7279\u5B9A\u7684\u6DF7\u5408\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.mixin(dark, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mixin(light, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// @_ \u8868\u793A\u5339\u914D\u6240\u6709</span>
<span class="token selector">.mixin(<span class="token variable">@_</span>, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">@switch<span class="token punctuation">:</span></span> light<span class="token punctuation">;</span>

<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span><span class="token variable">@switch</span><span class="token punctuation">,</span> #888<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #a2a2a2<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FD0\u7B97-operations" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97-operations" aria-hidden="true">#</a> \u8FD0\u7B97(Operations)</h2><ul><li>\u8BA1\u7B97\u7ED3\u679C\u4EE5\u64CD\u4F5C\u6570\u6700\u5DE6\u4FA7\u7684\u5355\u4F4D\u7C7B\u578B\u4E3A\u51C6</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@conversion-1<span class="token punctuation">:</span></span> 5cm <span class="token operator">+</span> 10mm<span class="token punctuation">;</span> <span class="token comment">// 6cm</span>
<span class="token variable">@conversion-2<span class="token punctuation">:</span></span> 2 <span class="token operator">-</span> 3cm <span class="token operator">-</span> 5mm<span class="token punctuation">;</span> <span class="token comment">// -1.5cm</span>
<span class="token variable">@conversion-3<span class="token punctuation">:</span></span> 3.1 <span class="token operator">*</span> 2cm<span class="token punctuation">;</span> <span class="token comment">// 6.2cm</span>
<span class="token variable">@conversion-4<span class="token punctuation">:</span></span> 4px <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">// 4px / 2</span>

<span class="token comment">// conversion is impossible</span>
<span class="token variable">@incompatible-units<span class="token punctuation">:</span></span> 1cm <span class="token operator">-</span> 1px<span class="token punctuation">;</span> <span class="token comment">// 0.97354167cm</span>

<span class="token comment">// example with variables</span>
<span class="token variable">@base<span class="token punctuation">:</span></span> 5%<span class="token punctuation">;</span>
<span class="token variable">@filler<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span> <span class="token comment">// 10%</span>
<span class="token variable">@other<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">+</span> <span class="token variable">@filler</span><span class="token punctuation">;</span> <span class="token comment">// 15%</span>

<span class="token variable">@color<span class="token punctuation">:</span></span> #224488 <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">// #112244</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> #112244 <span class="token operator">+</span> #111<span class="token punctuation">;</span> <span class="token comment">// #223355</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EE7\u627F-extend" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F-extend" aria-hidden="true">#</a> \u7EE7\u627F(Extend)</h2><h3 id="extend-syntax" tabindex="-1"><a class="header-anchor" href="#extend-syntax" aria-hidden="true">#</a> Extend Syntax</h3><ul><li>\u7EE7\u627F\u53EF\u8BA9\u591A\u4E2A\u9009\u62E9\u5668\u5E94\u7528\u540C\u4E00\u7EC4\u5C5E\u6027\uFF0C\u6700\u7EC8\u7F16\u8BD1\u4E3A\u5E76\u96C6\u9009\u62E9\u5668</li><li>\u5176\u6027\u80FD\u6BD4\u6DF7\u5408\u9AD8\uFF0C\u4F46\u7075\u6D3B\u6027\u6BD4\u6DF7\u5408\u4F4E</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.inline<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inline</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inline,
nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extend-all" tabindex="-1"><a class="header-anchor" href="#extend-all" aria-hidden="true">#</a> Extend &quot;all&quot;</h3><blockquote><p>When you specify the all keyword last in an extend argument it tells Less to match that selector as part of another selector. The selector will be copied and the matched part of the selector only will then be replaced with the extend, making a new selector.</p><p>You can think of this mode of operation as essentially doing a non-destructive search and replace</p></blockquote><ul><li>\u53EF\u7406\u89E3\u4E3A\u628A <code>all</code> \u524D\u7684\u9009\u62E9\u5668\u51FA\u73B0\u7684\u5730\u65B9\u5168\u90FD\u66FF\u6362\u4E3A <code>extend</code> \u524D\u7684\u9009\u62E9\u5668</li><li>\u5373\u628A <code>.test</code> \u66FF\u6362\u4E3A <code>.replacement</code> \u751F\u6210\u4E00\u4E2A\u65B0\u7684\u9009\u62E9\u5668\u5E94\u7528\u6837\u5F0F\uFF0C\u4E14\u4E0D\u7834\u574F\u539F\u6709\u7684\u9009\u62E9\u5668</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.a.b.test,
.test.c</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.replacement:extend(.test all)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.a.b.test,
.test.c,
.a.b.replacement,
.replacement.c</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test:hover,
.replacement:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u907F\u514D\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u907F\u514D\u7F16\u8BD1" aria-hidden="true">#</a> \u907F\u514D\u7F16\u8BD1</h2><p>\u901A\u8FC7\u52A0\u5F15\u53F7\u53EF\u4EE5\u907F\u514D Less \u7F16\u8BD1\uFF0C\u76F4\u63A5\u628A\u5185\u5BB9\u8F93\u51FA\u5230 CSS \u4E2D</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.banner .inline .header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token string">&#39;100px + 100px&#39;</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px <span class="token operator">+</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.banner .inline .header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token string">&#39;100px + 100px&#39;</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74);function f(w,_){const a=c("ExternalLinkIcon");return t(),l("div",null,[u,r,n("p",null,[n("a",d,[v,e(a)])]),k,b,m,n("ul",null,[n("li",null,[n("a",h,[g,e(a)])]),x]),y])}const L=p(o,[["render",f],["__file","less.html.vue"]]);export{L as default};
