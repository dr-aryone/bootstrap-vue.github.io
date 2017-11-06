webpackJsonp([42],{k4zi:function(s,a){s.exports="<h1 id=textual-and-value-inputs>Textual and Value inputs</h1> <blockquote> <p>Create various text style inputs such as: <code>text</code>, <code>password</code>, <code>number</code>, <code>url</code>, <code>email</code>, <code>search</code>, and more.</p> </blockquote> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>&quot;text1&quot;</span>\n                  <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;text&quot;</span>\n                  <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Enter your name&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>p</span>&gt;</span>Value: {{ text1 }}<span class=hljs-tag>&lt;/<span class=hljs-name>p</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    <span class=hljs-attr>data</span>: {\n      <span class=hljs-attr>text1</span>: <span class=hljs-string>&apos;&apos;</span>\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- form-input-1.vue --&gt;</span>\n</pre> <h2 id=input-type>Input type</h2> <p><code>&lt;b-form-input&gt;</code> defaults to a <code>text</code> input, but you can set the <code>type</code> prop to one of the supported types: <code>text</code>, <code>password</code>, <code>email</code>, <code>number</code>, <code>url</code>, <code>tel</code>, <code>search</code>, <code>date</code>, <code>datetime</code>, <code>datetime-local</code>, <code>month</code>, <code>week</code>, <code>time</code>,<code>range</code>, or <code>color</code>.</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-container</span> <span class=hljs-attr>fluid</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-row</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;my-1&quot;</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>&quot;type in types&quot;</span> <span class=hljs-attr>:key</span>=<span class=hljs-string>&quot;type&quot;</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;3&quot;</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>:for</span>=<span class=hljs-string>&quot;`type-${type}`&quot;</span>&gt;</span>Type {{ type }}:<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;9&quot;</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>:id</span>=<span class=hljs-string>&quot;`type-${type}`&quot;</span> <span class=hljs-attr>:type</span>=<span class=hljs-string>&quot;type&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-container</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n<span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    <span class=hljs-attr>data</span>: {\n        <span class=hljs-attr>types</span>: [\n            <span class=hljs-string>&apos;text&apos;</span>, <span class=hljs-string>&apos;password&apos;</span>, <span class=hljs-string>&apos;email&apos;</span>, <span class=hljs-string>&apos;number&apos;</span>, <span class=hljs-string>&apos;url&apos;</span>,\n            <span class=hljs-string>&apos;tel&apos;</span>, <span class=hljs-string>&apos;date&apos;</span>, <span class=hljs-string>`time`</span>, <span class=hljs-string>&apos;range&apos;</span>, <span class=hljs-string>&apos;color&apos;</span>\n        ]\n    }\n}\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- form-input-types.vue --&gt;</span>\n</pre> <p>If prop <code>type</code> is set to an unsupported value, a <code>text</code> input will be rendered.</p> <p>Not all browsers support all types, nor do some types render in the same format across browser types/version. Browsers that do not support a particular type will fall back to a <code>text</code> input type.</p> <p>Chrome lost support for <code>datetime</code> in version 26, Opera in version 15, and Safari in iOS 7. Instead of using <code>datetime</code>, since support should be deprecated, use <code>date</code> and <code>time</code> as two separate input types.</p> <p>For date an time style input, when supported, the displayed value in the GUI may be different than what is return by it&apos;s value.</p> <h2 id=control-sizing>Control sizing</h2> <p>Set heights using the <code>size</code> prop to <code>sm</code> or <code>lg</code> for small or large respectively.</p> <p>To control width, place the input inside standard Bootstrap grid column.</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>b-container</span> <span class=hljs-attr>fluid</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-row</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;my-1&quot;</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;2&quot;</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>for</span>=<span class=hljs-string>&quot;input-small&quot;</span>&gt;</span>Small:<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;10&quot;</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;input-small&quot;</span> <span class=hljs-attr>size</span>=<span class=hljs-string>&quot;sm&quot;</span> <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;text&quot;</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Enter your name&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-row</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;my-1&quot;</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;2&quot;</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>for</span>=<span class=hljs-string>&quot;input-default&quot;</span>&gt;</span>Default:<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;10&quot;</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;input-default&quot;</span> <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;text&quot;</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Enter your name&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-row</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;my-1&quot;</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;2&quot;</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>for</span>=<span class=hljs-string>&quot;input-large&quot;</span>&gt;</span>Large:<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;10&quot;</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;input-large&quot;</span> <span class=hljs-attr>size</span>=<span class=hljs-string>&quot;lg&quot;</span> <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;text&quot;</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Enter your name&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>b-container</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- form-input-size-1.vue --&gt;</span>\n</pre> <h2 id=contextual-states>Contextual States</h2> <p>Bootstrap includes validation styles for <code>valid</code> and <code>invalid</code> states on most form controls.</p> <p>Generally speaking, you&#x2019;ll want to use a particular state for specific types of feedback:</p> <ul> <li><code>&apos;invalid&apos;</code> (or <code>false</code>) is great for when there&#x2019;s a blocking or required field. A user must fill in this field properly to submit the form.</li> <li><code>&apos;valid&apos;</code> (or <code>true</code>) is ideal for situations when you have per-field validation throughout a form and want to encourage a user through the rest of the fields.</li> <li><code>null</code> Displays no validation state</li> </ul> <p>To apply one of the contextual state icons on <code>&lt;b-form-input&gt;</code>, set the <code>state</code> prop to:</p> <ul> <li><code>&apos;invalid&apos;</code> or <code>false</code> for invalid contextual state</li> <li><code>&apos;valid&apos;</code> or <code>true</code> for the valid contextual state</li> <li><code>null</code> for no validation contextual state (default)</li> </ul> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>b-container</span> <span class=hljs-attr>fluid</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-row</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;my-1&quot;</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;3&quot;</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>for</span>=<span class=hljs-string>&quot;input-none&quot;</span>&gt;</span>No State:<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;9&quot;</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;input-none&quot;</span> <span class=hljs-attr>:state</span>=<span class=hljs-string>&quot;null&quot;</span> <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;text&quot;</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;No validation&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-row</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;my-1&quot;</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;3&quot;</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>for</span>=<span class=hljs-string>&quot;input-valid&quot;</span>&gt;</span>Valid State:<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;9&quot;</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;input-valid&quot;</span> <span class=hljs-attr>:state</span>=<span class=hljs-string>&quot;true&quot;</span> <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;text&quot;</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Valid input&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-row</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;my-1&quot;</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;3&quot;</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>for</span>=<span class=hljs-string>&quot;input-invalid&quot;</span>&gt;</span>Invalid State:<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>sm</span>=<span class=hljs-string>&quot;9&quot;</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;input-invalid&quot;</span> <span class=hljs-attr>:state</span>=<span class=hljs-string>&quot;false&quot;</span> <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;text&quot;</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Invalid input&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>b-container</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- form-input-states-1.vue --&gt;</span>\n</pre> <p><strong>Live Example</strong></p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>role</span>=<span class=hljs-string>&quot;group&quot;</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>v-model.trim</span>=<span class=hljs-string>&quot;name&quot;</span>\n                  <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;text&quot;</span>\n                  <span class=hljs-attr>:state</span>=<span class=hljs-string>&quot;nameState&quot;</span>\n                  <span class=hljs-attr>aria-describedby</span>=<span class=hljs-string>&quot;input-help input-feeback&quot;</span>\n                  <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Enter your name&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-feedback</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;input-feedback&quot;</span>&gt;</span>\n      <span class=hljs-comment>&lt;!-- This will only be shown if the preceeding input has an invalid state --&gt;</span>\n      Enter at least 3 letters\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-feedback</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-text</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;input-help&quot;</span>&gt;</span>\n      <span class=hljs-comment>&lt;!-- this is a form text block (formerly known as help block) --&gt;</span>\n      Enter your name.\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-text</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    <span class=hljs-attr>data</span>: {\n      <span class=hljs-attr>name</span>: <span class=hljs-string>&apos;&apos;</span>\n    },\n    <span class=hljs-attr>computed</span>: {\n      nameState() {\n        <span class=hljs-keyword>return</span> <span class=hljs-keyword>this</span>.name.length &gt; <span class=hljs-number>2</span> ? <span class=hljs-literal>null</span> : <span class=hljs-literal>false</span>;\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- form-input-states-2.vue --&gt;</span>\n</pre> <p><strong>Tip:</strong> Use the <a href=/docs/components/form-group><code>&lt;b-form-group&gt;</code></a> component to automatically generate markup similar to above.</p> <h3 id=conveying-contextual-state-to-assistive-technologies-and-colorblind-users>Conveying contextual state to assistive technologies and colorblind users</h3> <p>Using these contextual states to denote the state of a form control only provides a visual, color-based indication, which will not be conveyed to users of assistive technologies - such as screen readers - or to colorblind users.</p> <p>Ensure that an alternative indication of state is also provided. For instance, you could include a hint about state in the form control&apos;s <code>&lt;label&gt;</code> text itself, or by providing an additional help text block.</p> <h3 id=aria-aria-invalid-attribute>ARIA <code>aria-invalid</code> attribute</h3> <p>Specifically for assistive technologies, invalid form controls can also be assigned an <code>aria-invalid=&quot;true&quot;</code> attribute.</p> <p>When <code>&lt;b-form-input&gt;</code> has an invalid contextual state (i.e. <code>&apos;invalid&apos;</code> or <code>false</code>) you may also want to set the <code>&lt;b-form-input&gt;</code> prop <code>aria-invalid</code> to <code>true</code>, or to one of the supported values:</p> <ul> <li><code>false</code>: No errors detected (default)</li> <li><code>true</code> or <code>&apos;true&apos;</code>: The value has failed validation.</li> <li><code>&apos;grammar&apos;</code> A grammatical error has been detected.</li> <li><code>&apos;spelling&apos;</code> A spelling error has been detected.</li> </ul> <p>If <code>aria-invalid</code> is not explicitly set and <code>state</code> is set to <code>false</code> (or <code>&apos;invalid&apos;</code>), then the <code>aria-invalid</code> attribute on the input will automatically be set to <code>&apos;true&apos;</code>;</p> <h2 id=formatter-support>Formatter support</h2> <p><code>&lt;b-form-input&gt;</code> optionally supports formatting by passing a function reference to the <code>formatter</code> prop.</p> <p>By default, formatting occurs when the control&apos;s native <code>input</code> event fires. You can use the boolean prop <code>lazy-formatter</code> to restrict the formatter function to being called on the control&apos;s native <code>change</code> event (which usually occurs on blur).</p> <p>The <code>formatter</code> function receives two arguments: the raw <code>value</code> of the input element, and the native <code>event</code> object.</p> <p>The <code>formatter</code> function should return the formatted value (as a string).</p> <p>No formatting occurs if a <code>formatter</code> is not provided.</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>Text input with formatter (on input)<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>&quot;text1&quot;</span>\n                  <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;text&quot;</span>\n                  <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Enter your name&quot;</span>\n                  <span class=hljs-attr>:formatter</span>=<span class=hljs-string>&quot;format&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-text</span>&gt;</span>We will convert your name to lowercase instantly<span class=hljs-tag>&lt;/<span class=hljs-name>b-form-text</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>p</span>&gt;</span>Value: {{ text1 }}<span class=hljs-tag>&lt;/<span class=hljs-name>p</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>Text input with lazy formatter (on change)<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>&quot;text2&quot;</span>\n                  <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;text&quot;</span>\n                  <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Enter your name&quot;</span>\n                  <span class=hljs-attr>:formatter</span>=<span class=hljs-string>&quot;format&quot;</span>\n                  <span class=hljs-attr>lazy-formatter</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-text</span>&gt;</span>This one is a little lazy!<span class=hljs-tag>&lt;/<span class=hljs-name>b-form-text</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>p</span>&gt;</span>Value: {{ text2 }}<span class=hljs-tag>&lt;/<span class=hljs-name>p</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    <span class=hljs-attr>data</span>: {\n      <span class=hljs-attr>text1</span>: <span class=hljs-string>&apos;&apos;</span>,\n      <span class=hljs-attr>text2</span>: <span class=hljs-string>&apos;&apos;</span>\n    },\n    <span class=hljs-attr>methods</span>: {\n      format(value, event) {\n        <span class=hljs-keyword>return</span> value.toLowerCase();\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- form-input-formatter.vue --&gt;</span>\n</pre> <p><strong>Note:</strong> When using a non-text-like input (i.e. <code>color</code>, <code>range</code>, <code>date</code>, etc), ensure that your formatter function returns the value in the expected format for the input type. The formatter <strong>must</strong> return the value as a string.</p> <h2 id=readonly-plain-text>Readonly plain text</h2> <p>If you want to have <code>&lt;b-form-input readonly&gt;</code> elements in your form styled as plain text, set the <code>plaintext</code> prop (no need to set <code>readonly</code>) to remove the default form field styling and preserve the correct margin and padding.</p> <h2 id=component-alias>Component alias</h2> <p>You can also use <code>&lt;b-form-input&gt;</code> by it&apos;s shorter alias of <code>&lt;b-input&gt;</code>.</p> <h2 id=component-reference>Component Reference</h2> "}});
//# sourceMappingURL=42.610d5d1f88cfeff1a8a2.js.map