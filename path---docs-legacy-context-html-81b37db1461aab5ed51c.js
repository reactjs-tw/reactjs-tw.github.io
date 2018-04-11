webpackJsonp([0xbf7341c6a7c1],{833:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note:</p>\n<p>The legacy context API will be removed in a future major version.\nUse the <a href="/docs/context.html">new context API</a> introduced with version 16.3.\nThe legacy API will continue working for all 16.x releases.</p>\n</blockquote>\n<h2 id="how-to-use-context"><a href="#how-to-use-context" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How To Use Context</h2>\n<blockquote>\n<p>This section documents a legacy API. See the <a href="/docs/context.html">new API</a>.</p>\n</blockquote>\n<p>Suppose you have a structure like:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>background<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Message</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Delete<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MessageList</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token string">"purple"</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Message</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>message<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>In this example, we manually thread through a <code class="gatsby-code-text">color</code> prop in order to style the <code class="gatsby-code-text">Button</code> and <code class="gatsby-code-text">Message</code> components appropriately. Using context, we can pass this through the tree automatically:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>background<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</span>        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="gatsby-highlight-code-line">Button<span class="token punctuation">.</span>contextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">  color<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n</span><span class="gatsby-highlight-code-line"><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span>\n<span class="token keyword">class</span> <span class="token class-name">Message</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Delete<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n</span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MessageList</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token function">getChildContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token punctuation">{</span>color<span class="token punctuation">:</span> <span class="token string">"purple"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Message</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>message<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="gatsby-highlight-code-line">MessageList<span class="token punctuation">.</span>childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">  color<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n</span><span class="gatsby-highlight-code-line"><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></code></pre>\n      </div>\n<p>By adding <code class="gatsby-code-text">childContextTypes</code> and <code class="gatsby-code-text">getChildContext</code> to <code class="gatsby-code-text">MessageList</code> (the context provider), React passes the information down automatically and any component in the subtree (in this case, <code class="gatsby-code-text">Button</code>) can access it by defining <code class="gatsby-code-text">contextTypes</code>.</p>\n<p>If <code class="gatsby-code-text">contextTypes</code> is not defined, then <code class="gatsby-code-text">context</code> will be an empty object.</p>\n<blockquote>\n<p>Note:</p>\n<p><code class="gatsby-code-text">React.PropTypes</code> has moved into a different package since React v15.5. Please use <a href="https://www.npmjs.com/package/prop-types">the <code class="gatsby-code-text">prop-types</code> library instead</a> to define <code class="gatsby-code-text">contextTypes</code>.</p>\n<p>We provide <a href="/blog/2017/04/07/react-v15.5.0.html#migrating-from-react.proptypes">a codemod script</a> to automate the conversion.</p>\n</blockquote>\n<h3 id="parent-child-coupling"><a href="#parent-child-coupling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Parent-Child Coupling</h3>\n<blockquote>\n<p>This section documents a legacy API. See the <a href="/docs/context.html">new API</a>.</p>\n</blockquote>\n<p>Context can also let you build an API where parents and children communicate. For example, one library that works this way is <a href="https://reacttraining.com/react-router">React Router V4</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">BasicExample</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Router</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/topics<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Topics<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/topics<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Topics<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Router</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>By passing down some information from the <code class="gatsby-code-text">Router</code> component, each <code class="gatsby-code-text">Link</code> and <code class="gatsby-code-text">Route</code> can communicate back to the containing <code class="gatsby-code-text">Router</code>.</p>\n<p>Before you build components with an API similar to this, consider if there are cleaner alternatives. For example, you can pass entire React components as props if you’d like to.</p>\n<h3 id="referencing-context-in-lifecycle-methods"><a href="#referencing-context-in-lifecycle-methods" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Referencing Context in Lifecycle Methods</h3>\n<blockquote>\n<p>This section documents a legacy API. See the <a href="/docs/context.html">new API</a>.</p>\n</blockquote>\n<p>If <code class="gatsby-code-text">contextTypes</code> is defined within a component, the following <a href="/docs/react-component.html#the-component-lifecycle">lifecycle methods</a> will receive an additional parameter, the <code class="gatsby-code-text">context</code> object:</p>\n<ul>\n<li><a href="/docs/react-component.html#constructor"><code class="gatsby-code-text">constructor(props, context)</code></a></li>\n<li><a href="/docs/react-component.html#componentwillreceiveprops"><code class="gatsby-code-text">componentWillReceiveProps(nextProps, nextContext)</code></a></li>\n<li><a href="/docs/react-component.html#shouldcomponentupdate"><code class="gatsby-code-text">shouldComponentUpdate(nextProps, nextState, nextContext)</code></a></li>\n<li><a href="/docs/react-component.html#componentwillupdate"><code class="gatsby-code-text">componentWillUpdate(nextProps, nextState, nextContext)</code></a></li>\n</ul>\n<blockquote>\n<p>Note:</p>\n<p>As of React 16, <code class="gatsby-code-text">componentDidUpdate</code> no longer receives <code class="gatsby-code-text">prevContext</code>.</p>\n</blockquote>\n<h3 id="referencing-context-in-stateless-functional-components"><a href="#referencing-context-in-stateless-functional-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Referencing Context in Stateless Functional Components</h3>\n<blockquote>\n<p>This section documents a legacy API. See the <a href="/docs/context.html">new API</a>.</p>\n</blockquote>\n<p>Stateless functional components are also able to reference <code class="gatsby-code-text">context</code> if <code class="gatsby-code-text">contextTypes</code> is defined as a property of the function. The following code shows a <code class="gatsby-code-text">Button</code> component written as a stateless functional component.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token operator">=></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>background<span class="token punctuation">:</span> context<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span>children<span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n\nButton<span class="token punctuation">.</span>contextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>color<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="updating-context"><a href="#updating-context" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Updating Context</h3>\n<blockquote>\n<p>This section documents a legacy API. See the <a href="/docs/context.html">new API</a>.</p>\n</blockquote>\n<p>Don’t do it.</p>\n<p>React has an API to update context, but it is fundamentally broken and you should not use it.</p>\n<p>The <code class="gatsby-code-text">getChildContext</code> function will be called when the state or props changes. In order to update data in the context, trigger a local state update with <code class="gatsby-code-text">this.setState</code>. This will trigger a new context and changes will be received by the children.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MediaQuery</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>type<span class="token punctuation">:</span><span class="token string">\'desktop\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">getChildContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>type<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">checkMediaQuery</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> type <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token string">"(min-width: 1025px)"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>matches <span class="token operator">?</span> <span class="token string">\'desktop\'</span> <span class="token punctuation">:</span> <span class="token string">\'mobile\'</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'resize\'</span><span class="token punctuation">,</span> checkMediaQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">checkMediaQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nMediaQuery<span class="token punctuation">.</span>childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  type<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The problem is, if a context value provided by component changes, descendants that use that value won’t update if an intermediate parent returns <code class="gatsby-code-text">false</code> from <code class="gatsby-code-text">shouldComponentUpdate</code>. This is totally out of control of the components using context, so there’s basically no way to reliably update the context. <a href="https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076">This blog post</a> has a good explanation of why this is a problem and how you might get around it.</p>',
frontmatter:{title:"Legacy Context",next:null,prev:null},fields:{path:"docs/legacy-context.md",slug:"docs/legacy-context.html"}}},pathContext:{slug:"docs/legacy-context.html"}}}});
//# sourceMappingURL=path---docs-legacy-context-html-81b37db1461aab5ed51c.js.map