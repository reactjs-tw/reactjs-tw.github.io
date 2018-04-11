webpackJsonp([0x723faa08e0d5],{803:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note:</p>\n<p><code class="gatsby-code-text">React.addons</code> entry point is deprecated as of React v15.5. We now have first class support for fragments which you can read about <a href="/docs/fragments.html">here</a>.</p>\n</blockquote>\n<h2 id="importing"><a href="#importing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Importing</h2>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> createFragment <span class="token keyword">from</span> <span class="token string">\'react-addons-create-fragment\'</span><span class="token punctuation">;</span> <span class="token comment">// ES6</span>\n<span class="token keyword">var</span> createFragment <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-addons-create-fragment\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ES5 with npm</span></code></pre>\n      </div>\n<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p>In most cases, you can use the <code class="gatsby-code-text">key</code> prop to specify keys on the elements you’re returning from <code class="gatsby-code-text">render</code>. However, this breaks down in one situation: if you have two sets of children that you need to reorder, there’s no way to put a key on each set without adding a wrapper element.</p>\n<p>That is, if you have a component such as:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">Swapper</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> children<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>swapped<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    children <span class="token operator">=</span> <span class="token punctuation">[</span>props<span class="token punctuation">.</span>rightChildren<span class="token punctuation">,</span> props<span class="token punctuation">.</span>leftChildren<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    children <span class="token operator">=</span> <span class="token punctuation">[</span>props<span class="token punctuation">.</span>leftChildren<span class="token punctuation">,</span> props<span class="token punctuation">.</span>rightChildren<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The children will unmount and remount as you change the <code class="gatsby-code-text">swapped</code> prop because there aren’t any keys marked on the two sets of children.</p>\n<p>To solve this problem, you can use the <code class="gatsby-code-text">createFragment</code> add-on to give keys to the sets of children.</p>\n<h4 id="arrayreactnode-createfragmentobject-children"><a href="#arrayreactnode-createfragmentobject-children" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">Array&lt;ReactNode&gt; createFragment(object children)</code></h4>\n<p>Instead of creating arrays, we write:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> createFragment <span class="token keyword">from</span> <span class="token string">\'react-addons-create-fragment\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Swapper</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> children<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>swapped<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    children <span class="token operator">=</span> <span class="token function">createFragment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      right<span class="token punctuation">:</span> props<span class="token punctuation">.</span>rightChildren<span class="token punctuation">,</span>\n      left<span class="token punctuation">:</span> props<span class="token punctuation">.</span>leftChildren\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    children <span class="token operator">=</span> <span class="token function">createFragment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      left<span class="token punctuation">:</span> props<span class="token punctuation">.</span>leftChildren<span class="token punctuation">,</span>\n      right<span class="token punctuation">:</span> props<span class="token punctuation">.</span>rightChildren\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The keys of the passed object (that is, <code class="gatsby-code-text">left</code> and <code class="gatsby-code-text">right</code>) are used as keys for the entire set of children, and the order of the object’s keys is used to determine the order of the rendered children. With this change, the two sets of children will be properly reordered in the DOM without unmounting.</p>\n<p>The return value of <code class="gatsby-code-text">createFragment</code> should be treated as an opaque object; you can use the <a href="/docs/react-api.html#react.children"><code class="gatsby-code-text">React.Children</code></a> helpers to loop through a fragment but should not access it directly. Note also that we’re relying on the JavaScript engine preserving object enumeration order here, which is not guaranteed by the spec but is implemented by all major browsers and VMs for objects with non-numeric keys.</p>',frontmatter:{title:"Keyed Fragments",next:null,prev:null},fields:{path:"docs/addons-create-fragment.md",slug:"docs/create-fragment.html"}}},pathContext:{slug:"docs/create-fragment.html"}}}});
//# sourceMappingURL=path---docs-create-fragment-html-dc06d908f7ef9d3932d0.js.map