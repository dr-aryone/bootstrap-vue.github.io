(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{517:function(n,t){n.exports='<h1 id="buttons"><span class="bd-content-title">Buttons</span></h1>\n<p class="bd-lead">Use Bootstrap&#39;s custom <code>b-button</code> component for actions in forms, dialogs, and more. Includes\nsupport for a handful of contextual variations, sizes, states, and more.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"danger"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-primary"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button.vue --&gt;</span></pre><h2 id="element-type"><span class="bd-content-title">Element type<a class="anchorjs-link" href="#element-type" aria-label="Anchor"></a></span></h2>\n<p>The <code>&lt;b-button&gt;</code> component generally renders a <code>&lt;button&gt;</code> element. However, you can also render an\n<code>&lt;a&gt;</code> element by providing an <code>href</code> prop value. You may also generate <code>vue-router</code> <code>&lt;router-link&gt;</code>\nwhen providing a value for the <code>to</code> prop (<code>vue-router</code> is required).</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>I am a Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>I am a Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-types.vue --&gt;</span></pre><h2 id="type"><span class="bd-content-title">Type<a class="anchorjs-link" href="#type" aria-label="Anchor"></a></span></h2>\n<p>You can specify the button&#39;s type by setting the prop <code>type</code> to <code>&#39;button&#39;</code>, <code>&#39;submit&#39;</code> or <code>&#39;reset&#39;</code>.\nThe default type is <code>&#39;button&#39;</code>.</p>\n<p>Note the <code>type</code> prop has no effect when either <code>href</code> or <code>to</code> props are set.</p>\n<h2 id="sizing"><span class="bd-content-title">Sizing<a class="anchorjs-link" href="#sizing" aria-label="Anchor"></a></span></h2>\n<p>Fancy larger or smaller buttons? Specify <code>lg</code> or <code>sm</code> via the <code>size</code> prop.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">b-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"pb-2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span>&gt;</span>Small Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"pb-2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Default Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"pb-2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>Large Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-sizes.vue --&gt;</span></pre><h2 id="contextual-variants"><span class="bd-content-title">Contextual variants<a class="anchorjs-link" href="#contextual-variants" aria-label="Anchor"></a></span></h2>\n<p>Use the <code>variant</code> prop to generate the various Bootstrap contextual button variants.</p>\n<p>By default <code>&lt;b-button&gt;</code> will render with the <code>secondary</code> variant.</p>\n<p>The <code>variant</code> prop adds the Bootstrap V4.3 class <code>.btn-&lt;variant&gt;</code> on the rendered button.</p>\n<h3 id="solid-color-variants"><span class="bd-content-title">Solid color variants<a class="anchorjs-link" href="#solid-color-variants" aria-label="Anchor"></a></span></h3>\n<p><code>primary</code>, <code>secondary</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>info</code>, <code>light</code> and <code>dark</code>.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Primary<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"secondary"</span>&gt;</span>Secondary<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"danger"</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"warning"</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"light"</span>&gt;</span>Light<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"dark"</span>&gt;</span>Dark<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-solid.vue --&gt;</span></pre><h3 id="outline-color-variants"><span class="bd-content-title">Outline color variants<a class="anchorjs-link" href="#outline-color-variants" aria-label="Anchor"></a></span></h3>\n<p>In need of a button, but not the hefty background colors they bring? Use the <code>outline-*</code> variants to\nremove all background images and colors on any <code>&lt;b-button&gt;</code>:</p>\n<p><code>outline-primary</code>, <code>outline-secondary</code>, <code>outline-success</code>, <code>outline-danger</code>, <code>outline-warning</code>,\n<code>outline-info</code>, <code>outline-light</code> and <code>outline-dark</code>.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-primary"</span>&gt;</span>Primary<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-secondary"</span>&gt;</span>Secondary<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-success"</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-danger"</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-warning"</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-info"</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-light"</span>&gt;</span>Light<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-dark"</span>&gt;</span>Dark<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-outline.vue --&gt;</span></pre><h3 id="link-variant"><span class="bd-content-title">Link variant<a class="anchorjs-link" href="#link-variant" aria-label="Anchor"></a></span></h3>\n<p>Variant <code>link</code> will render a button with the appearance of a link while maintaining the default\npadding and size of a button.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"link"</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-link.vue --&gt;</span></pre><p><strong>Tip:</strong> remove the hover underline from a link variant button by adding the Bootstrap V4.3 utility\nclass <code>text-decoration-none</code> to <code>&lt;b-button&gt;</code>.</p>\n<h2 id="block-level-buttons"><span class="bd-content-title">Block level buttons<a class="anchorjs-link" href="#block-level-buttons" aria-label="Anchor"></a></span></h2>\n<p>Create block level buttons — those that span the full width of a parent — by setting the <code>block</code>\nprop.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Block Level Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-block.vue --&gt;</span></pre><h2 id="pill-style"><span class="bd-content-title">Pill style<a class="anchorjs-link" href="#pill-style" aria-label="Anchor"></a></span></h2>\n<p><span class="badge badge-info small">NEW in 2.0.0-rc.20</span></p>\n<p>Prefer buttons with a more rounded-pill style? Just set the prop <code>pill</code> to true.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">pill</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">pill</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">pill</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-secondary"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">pill</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">pill</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-danger"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">pill</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-pill.vue --&gt;</span></pre><p>This prop adds the Bootstrap V4.3 utility class <code>.rounded-pill</code> on the rendered button.</p>\n<h2 id="squared-style"><span class="bd-content-title">Squared style<a class="anchorjs-link" href="#squared-style" aria-label="Anchor"></a></span></h2>\n<p><span class="badge badge-info small">NEW in 2.0.0-rc.22</span></p>\n<p>Prefer buttons with a more square corner style? Just set the prop <code>squared</code> to true.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">squared</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">squared</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">squared</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-secondary"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">squared</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">squared</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-danger"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">squared</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-square.vue --&gt;</span></pre><p>The <code>squared</code> prop adds the Bootstrap V4.3 utility class <code>.rounded-0</code> on the rendered button. The\n<code>pill</code> prop takes precedence over the <code>squared</code> prop.</p>\n<h2 id="disabled-state"><span class="bd-content-title">Disabled state<a class="anchorjs-link" href="#disabled-state" aria-label="Anchor"></a></span></h2>\n<p>Set the <code>disabled</code> prop to disable button default functionality. <code>disabled</code> also works with buttons\nrendered as <code>&lt;a&gt;</code> elements and <code>&lt;router-link&gt;</code> (i.e. with the <code>href</code> or <code>to</code> prop set).</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span>&gt;</span>Also Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-disabled.vue --&gt;</span></pre><h2 id="pressed-state-and-toggling"><span class="bd-content-title">Pressed state and toggling<a class="anchorjs-link" href="#pressed-state-and-toggling" aria-label="Anchor"></a></span></h2>\n<p>Buttons will appear pressed (with a darker background, darker border, and inset shadow) when the\nprop <code>pressed</code> is set to <code>true</code>.</p>\n<p>The <code>pressed</code> prop can be set to one of three values:</p>\n<ul>\n<li><code>true</code>: Sets the <code>.active</code> class and adds the attribute <code>aria-pressed=&quot;true&quot;</code>.</li>\n<li><code>false</code>: Clears the <code>.active</code> class and adds the attribute <code>aria-pressed=&quot;false&quot;</code>.</li>\n<li><code>null</code>: (default) Neither the class <code>.active</code> nor the attribute <code>aria-pressed</code> will be set.</li>\n</ul>\n<p>To create a button that can be toggled between active and non-active states, use the <code>.sync</code> prop\nmodifier (available in Vue 2.3+) on the <code>pressed</code> property</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Pressed and un-pressed state<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">:pressed</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>Always Pressed<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">:pressed</span>=<span class="hljs-string">"false"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>Not Pressed<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>Toggleable Button<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">:pressed.sync</span>=<span class="hljs-string">"myToggle"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Toggle Me<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Pressed State: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ myToggle }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>In a button group<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>\n        <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(btn, idx) in buttons"</span>\n        <span class="hljs-attr">:key</span>=<span class="hljs-string">"idx"</span>\n        <span class="hljs-attr">:pressed.sync</span>=<span class="hljs-string">"btn.state"</span>\n        <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>\n      &gt;</span>\n        {{ btn.caption }}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Pressed States: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ btnStates }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">myToggle</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">buttons</span>: [\n          { <span class="hljs-attr">caption</span>: <span class="hljs-string">\'Toggle 1\'</span>, <span class="hljs-attr">state</span>: <span class="hljs-literal">true</span> },\n          { <span class="hljs-attr">caption</span>: <span class="hljs-string">\'Toggle 2\'</span>, <span class="hljs-attr">state</span>: <span class="hljs-literal">false</span> },\n          { <span class="hljs-attr">caption</span>: <span class="hljs-string">\'Toggle 3\'</span>, <span class="hljs-attr">state</span>: <span class="hljs-literal">true</span> },\n          { <span class="hljs-attr">caption</span>: <span class="hljs-string">\'Toggle 4\'</span>, <span class="hljs-attr">state</span>: <span class="hljs-literal">false</span> }\n        ]\n      }\n    },\n    <span class="hljs-attr">computed</span>: {\n      btnStates() {\n        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.buttons.map(<span class="hljs-function"><span class="hljs-params">btn</span> =&gt;</span> btn.state)\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-toggles.vue --&gt;</span></pre><p>If using toggle button style for a radio or checkbox style interface, it is best to use the built-in\n<code>button</code> style support of <a href="/docs/components/form-radio"><code>&lt;b-form-radio-group&gt;</code></a> and\n<a href="/docs/components/form-checkbox"><code>&lt;b-form-checkbox-group&gt;</code></a>.</p>\n<h2 id="router-link-support"><span class="bd-content-title">Router link support<a class="anchorjs-link" href="#router-link-support" aria-label="Anchor"></a></span></h2>\n<p>Refer to the <a href="/docs/reference/router-links"><code>Router support</code></a> reference docs for the various\nsupported <code>&lt;router-link&gt;</code> related props.</p>\n<p>Note the <code>&lt;router-link&gt;</code> prop <code>tag</code> is referred to as <code>router-tag</code> in <code>bootstrap-vue</code>.</p>\n<h2 id="see-also"><span class="bd-content-title">See also<a class="anchorjs-link" href="#see-also" aria-label="Anchor"></a></span></h2>\n<ul>\n<li><a href="/docs/components/button-group"><code>&lt;b-button-group&gt;</code></a></li>\n<li><a href="/docs/components/button-toolbar"><code>&lt;b-button-toolbar&gt;</code></a></li>\n<li><a href="/docs/components/link"><code>&lt;b-link&gt;</code></a></li>\n<li><a href="/docs/reference/router-links">Router Link Support</a></li>\n<li><a href="/docs/reference/color-variants">Color Variants</a></li>\n</ul>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);
//# sourceMappingURL=287b43d73e420110d023.js.map