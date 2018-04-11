webpackJsonp([0xebf0cf2e579a],{659:function(e,t){e.exports={data:{markdownRemark:{html:'<p>This release is the result of several months of hard work from members of the team and the community. While there are no groundbreaking changes in core, we’ve worked hard to improve performance and memory usage. We’ve also worked hard to make sure we are being consistent in our usage of DOM properties.</p>\n<p>The biggest change you’ll notice as a developer is that we no longer support <code class="gatsby-code-text">class</code> in JSX as a way to provide CSS classes. Since this prop was being converted to <code class="gatsby-code-text">className</code> at the transform step, it caused some confusion when trying to access it in composite components. As a result we decided to make our DOM properties mirror their counterparts in the JS DOM API. There are <a href="https://github.com/facebook/react/blob/master/src/dom/DefaultDOMPropertyConfig.js#L156">a few exceptions</a> where we deviate slightly in an attempt to be consistent internally.</p>\n<p>The other major change in v0.5 is that we’ve added an additional build - <code class="gatsby-code-text">react-with-addons</code> - which adds support for some extras that we’ve been working on including animations and two-way binding. <a href="/docs/addons.html">Read more about these addons in the docs</a>.</p>\n<h2 id="thanks-to-our-community"><a href="#thanks-to-our-community" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thanks to Our Community</h2>\n<p>We added <em>22 new people</em> to the list of authors since we launched React v0.4.1 nearly 3 months ago. With a total of 48 names in our <code class="gatsby-code-text">AUTHORS</code> file, that means we’ve nearly doubled the number of contributors in that time period. We’ve seen the number of people contributing to discussion on IRC, mailing lists, Stack Overflow, and GitHub continue rising. We’ve also had people tell us about talks they’ve given in their local community about React.</p>\n<p>It’s been awesome to see the things that people are building with React, and we can’t wait to see what you come up with next!</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react"><a href="#react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React</h3>\n<ul>\n<li>Memory usage improvements - reduced allocations in core which will help with GC pauses</li>\n<li>Performance improvements - in addition to speeding things up, we made some tweaks to stay out of slow path code in V8 and Nitro.</li>\n<li>Standardized prop -> DOM attribute process. This previously resulting in additional type checking and overhead as well as confusing cases for users. Now we will always convert your value to a string before inserting it into the DOM.</li>\n<li>Support for Selection events.</li>\n<li>Support for <a href="https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent">Composition events</a>.</li>\n<li>Support for additional DOM properties (<code class="gatsby-code-text">charSet</code>, <code class="gatsby-code-text">content</code>, <code class="gatsby-code-text">form</code>, <code class="gatsby-code-text">httpEquiv</code>, <code class="gatsby-code-text">rowSpan</code>, <code class="gatsby-code-text">autoCapitalize</code>).</li>\n<li>Support for additional SVG properties (<code class="gatsby-code-text">rx</code>, <code class="gatsby-code-text">ry</code>).</li>\n<li>Support for using <code class="gatsby-code-text">getInitialState</code> and <code class="gatsby-code-text">getDefaultProps</code> in mixins.</li>\n<li>Support mounting into iframes.</li>\n<li>Bug fixes for controlled form components.</li>\n<li>Bug fixes for SVG element creation.</li>\n<li>Added <code class="gatsby-code-text">React.version</code>.</li>\n<li>Added <code class="gatsby-code-text">React.isValidClass</code> - Used to determine if a value is a valid component constructor.</li>\n<li>Removed <code class="gatsby-code-text">React.autoBind</code> - This was deprecated in v0.4 and now properly removed.</li>\n<li>Renamed  <code class="gatsby-code-text">React.unmountAndReleaseReactRootNode</code> to <code class="gatsby-code-text">React.unmountComponentAtNode</code>.</li>\n<li>Began laying down work for refined performance analysis.</li>\n<li>Better support for server-side rendering - <a href="https://github.com/facebook/react-page">react-page</a> has helped improve the stability for server-side rendering.</li>\n<li>Made it possible to use React in environments enforcing a strict <a href="https://developer.mozilla.org/en-US/docs/Security/CSP/Introducing_Content_Security_Policy">Content Security Policy</a>. This also makes it possible to use React to build Chrome extensions.</li>\n</ul>\n<h3 id="react-with-addons-new"><a href="#react-with-addons-new" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React with Addons (New!)</h3>\n<ul>\n<li>Introduced a separate build with several “addons” which we think can help improve the React experience. We plan to deprecate this in the long-term, instead shipping each as standalone pieces. <a href="/docs/addons.html">Read more in the docs</a>.</li>\n</ul>\n<h3 id="jsx"><a href="#jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX</h3>\n<ul>\n<li>No longer transform <code class="gatsby-code-text">class</code> to <code class="gatsby-code-text">className</code> as part of the transform! This is a breaking change - if you were using <code class="gatsby-code-text">class</code>, you <em>must</em> change this to <code class="gatsby-code-text">className</code> or your components will be visually broken.</li>\n<li>Added warnings to the in-browser transformer to make it clear it is not intended for production use.</li>\n<li>Improved compatibility for Windows</li>\n<li>Improved support for maintaining line numbers when transforming.</li>\n</ul>',excerpt:"This release is the result of several months of hard work from members of the team and the community. While there are no groundbreaking changes in core, we’ve worked hard to improve performance and memory usage. We’ve also worked hard to make sure we are being consistent in our usage of DOM properties. The biggest change you’ll notice as a developer is that we no longer support   in JSX as a way to provide CSS classes. Since this prop was being converted to   at the transform step, it caused…",frontmatter:{title:"React v0.5",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"October 15, 2013",path:"blog/2013-10-16-react-v0.5.0.md",slug:"/blog/2013/10/16/react-v0.5.0.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2013/10/16/react-v0.5.0.html"}}}});
//# sourceMappingURL=path---blog-2013-10-16-react-v-0-5-0-html-796240d83c055b869f37.js.map