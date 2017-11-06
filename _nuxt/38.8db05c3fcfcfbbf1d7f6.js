webpackJsonp([38],{"j/Ld":function(s,a){s.exports="<h1 id=form>Form</h1> <blockquote> <p>Bootstrap form component that optionally supports inline form styles and validation methods</p> </blockquote> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form</span> @<span class=hljs-attr>submit</span>=<span class=hljs-string>&quot;onSubmit&quot;</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-group</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;exampleInputGroup1&quot;</span>\n                    <span class=hljs-attr>label</span>=<span class=hljs-string>&quot;Email address:&quot;</span> <span class=hljs-attr>label-for</span>=<span class=hljs-string>&quot;exampleInput1&quot;</span>\n                    <span class=hljs-attr>description</span>=<span class=hljs-string>&quot;We&apos;ll never share your email with anyone else.&quot;</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;exampleInput1&quot;</span>\n                      <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;email&quot;</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>&quot;form.email&quot;</span> <span class=hljs-attr>required</span>\n                      <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Enter email&quot;</span>\n        &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-group</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-group</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;exampleInputGroup2&quot;</span>\n                    <span class=hljs-attr>label</span>=<span class=hljs-string>&quot;Your Name:&quot;</span> <span class=hljs-attr>label-for</span>=<span class=hljs-string>&quot;exampleInput2&quot;</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;exampleInput2&quot;</span>\n                      <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;text&quot;</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>&quot;form.name&quot;</span> <span class=hljs-attr>required</span>\n                      <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Enter name&quot;</span>\n        &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-group</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-group</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;exampleInputGroup3&quot;</span>\n                    <span class=hljs-attr>label</span>=<span class=hljs-string>&quot;Food:&quot;</span> <span class=hljs-attr>label-for</span>=<span class=hljs-string>&quot;exampleInput3&quot;</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-form-select</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;exampleInput3&quot;</span>\n                      <span class=hljs-attr>:options</span>=<span class=hljs-string>&quot;foods&quot;</span> <span class=hljs-attr>required</span>\n                      <span class=hljs-attr>v-model</span>=<span class=hljs-string>&quot;form.food&quot;</span>\n        &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-select</span>&gt;</span>\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-group</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-group</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;exampleGroup4&quot;</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-form-checkbox</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>&quot;form.checked&quot;</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;exampleInput4&quot;</span>&gt;</span>\n          Check me out\n        <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-checkbox</span>&gt;</span>\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-group</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;submit&quot;</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>&quot;primary&quot;</span>&gt;</span>Submit<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>&quot;reset&quot;</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>&quot;secondary&quot;</span>&gt;</span>Reset<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-form</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    <span class=hljs-attr>data</span>: {\n      <span class=hljs-attr>form</span>: {\n        <span class=hljs-attr>email</span>: <span class=hljs-string>&apos;&apos;</span>,\n        <span class=hljs-attr>name</span>: <span class=hljs-string>&apos;&apos;</span>,\n        <span class=hljs-attr>food</span>: <span class=hljs-literal>null</span>,\n        <span class=hljs-attr>checked</span>: <span class=hljs-literal>false</span>,\n        <span class=hljs-attr>secret</span>: <span class=hljs-string>&apos;S3CR3T&apos;</span>\n      },\n      <span class=hljs-attr>foods</span>: [\n        { <span class=hljs-attr>text</span>:<span class=hljs-string>&apos;Select One&apos;</span>, <span class=hljs-attr>value</span>:<span class=hljs-literal>null</span> },\n        <span class=hljs-string>&apos;Carrots&apos;</span>,<span class=hljs-string>&apos;Beans&apos;</span>,<span class=hljs-string>&apos;Tomatoes&apos;</span>,<span class=hljs-string>&apos;Corn&apos;</span>\n      ]\n    },\n    <span class=hljs-attr>methods</span>: {\n      onSubmit(evt) {\n        evt.preventDefault();\n        alert(<span class=hljs-built_in>JSON</span>.stringify(<span class=hljs-keyword>this</span>.form));\n      }\n    }\n  };\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-1.vue --&gt;</span>\n</pre> <h2 id=inline-form>Inline form</h2> <p>Use the <code>inline</code> prop on <code>&lt;b-form&gt;</code> to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.</p> <ul> <li>Controls are <code>display: flex</code>, collapsing any HTML white space and allowing you to provide alignment control with spacing and flexbox utilities.</li> <li>Controls and input groups receive <code>width: auto</code> to override the Bootstrap default width: 100%.</li> <li>Controls <strong>only appear inline in viewports that are at least 576px wide</strong> to account for narrow viewports on mobile devices.</li> </ul> <p>You may need to manually address the width and alignment of individual form controls with <a href=/docs/reference/spacing>spacing utilities</a> (as shown below). Lastly, be sure to always include a <code>&lt;label&gt;</code> with each form control, even if you need to hide it from non-screenreader visitors with class <code>.sr-only</code>.</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form</span> <span class=hljs-attr>inline</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;sr-only&quot;</span> <span class=hljs-attr>for</span>=<span class=hljs-string>&quot;inlineFormInputName2&quot;</span>&gt;</span>Name<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-input</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;mb-2 mr-sm-2 mb-sm-0&quot;</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;inlineFormInputName2&quot;</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Jane Doe&quot;</span> /&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;sr-only&quot;</span> <span class=hljs-attr>for</span>=<span class=hljs-string>&quot;inlineFormInputGroupUsername2&quot;</span>&gt;</span>Username<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-input-group</span> <span class=hljs-attr>left</span>=<span class=hljs-string>&quot;@&quot;</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;mb-2 mr-sm-2 mb-sm-0&quot;</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-input</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;inlineFormInputGroupUsername2&quot;</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Username&quot;</span> /&gt;</span>\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-input-group</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-checkbox</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;mb-2 mr-sm-2 mb-sm-0&quot;</span>&gt;</span>Remember me<span class=hljs-tag>&lt;/<span class=hljs-name>b-form-checkbox</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>&quot;primary&quot;</span>&gt;</span>Save<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-form</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-inline-1.vue --&gt;</span>\n</pre> <p>Custom form controls and selects are also supported.</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form</span> <span class=hljs-attr>inline</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>label</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;mr-sm-2&quot;</span> <span class=hljs-attr>for</span>=<span class=hljs-string>&quot;inlineFormCustomSelectPref&quot;</span>&gt;</span>Preference<span class=hljs-tag>&lt;/<span class=hljs-name>label</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-select</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;mb-2 mr-sm-2 mb-sm-0&quot;</span>\n                     <span class=hljs-attr>:value</span>=<span class=hljs-string>&quot;null&quot;</span>\n                     <span class=hljs-attr>:options</span>=<span class=hljs-string>&quot;{ &apos;1&apos;: &apos;One&apos;, &apos;2&apos;: &apos;Two&apos;, &apos;3&apos;: &apos;Three&apos; }&quot;</span>\n                     <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;inlineFormCustomSelectPref&quot;</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>option</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>&quot;first&quot;</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>&quot;null&quot;</span>&gt;</span>Choose...<span class=hljs-tag>&lt;/<span class=hljs-name>option</span>&gt;</span>\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-select</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-form-checkbox</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;mb-2 mr-sm-2 mb-sm-0&quot;</span>&gt;</span>\n        Remember my preference\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-checkbox</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>&quot;primary&quot;</span>&gt;</span>Save<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-form</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-inline-2.vue --&gt;</span>\n</pre> <p><strong>Note:</strong> <em><code>&lt;b-form-group&gt;</code> is not supported in <code>inline</code> forms due to layout conflicts.</em></p> <h3 id=alternatives-to-hidden-labels>Alternatives to hidden labels</h3> <p>Assistive technologies such as screen readers will have trouble with your forms if you don&#x2019;t include a label for every input. For these inline forms, you can hide the labels using the <code>.sr-only</code> class. There are further alternative methods of providing a label for assistive technologies, such as the <code>aria-label</code>, <code>aria-labelledby</code> or <code>title</code> attributes. If none of these are present, assistive technologies may resort to using the <code>placeholder</code> attribute, if present, but note that use of <code>placeholder</code> as a replacement for other labelling methods is not advised.</p> <h2 id=related-form-control-components>Related Form Control Components</h2> <p>See also:</p> <ul> <li><a href=/docs/components/form-input><code>&lt;b-form-input&gt;</code></a> Textual and text-like inputs</li> <li><a href=/docs/components/form-textarea><code>&lt;b-form-textarea&gt;</code></a> Text area inputs</li> <li><a href=/docs/components/form-select><code>&lt;b-form-select&gt;</code></a> Select input</li> <li><a href=/docs/components/form-radio><code>&lt;b-form-radio&gt;</code></a> Radio Inputs</li> <li><a href=/docs/components/form-checkbox><code>&lt;b-form-checkbox&gt;</code></a> Checkbox Inputs</li> <li><a href=/docs/components/form-file><code>&lt;b-form-file&gt;</code></a> File Input</li> <li><a href=/docs/components/form-group><code>&lt;b-form-group&gt;</code></a> Form input wrapper to generate form-groups that support labels, help text and feedback</li> <li><a href=/docs/components/button><code>&lt;b-button&gt;</code></a> Buttons</li> <li><a href=/docs/components/input-group><code>&lt;b-input-group&gt;</code></a> Form inputs with add-ons</li> </ul> <h2 id=helper-components>Helper components</h2> <ul> <li><code>&lt;b-form-row&gt;</code> create form rows with tighter margins</li> <li><code>&lt;b-form-text&gt;</code> Help text blocks for inputs</li> <li><code>&lt;b-form-feedback&gt;</code> Invalid feedback text blocks for input <code>invalid</code> states</li> </ul> <h2 id=validation>Validation</h2> <p>Disable browser native HTML5 validation by setting the <code>novalidate</code> prop to true on <code>&lt;b-form&gt;</code>.</p> <p>Set the <code>validated</code> prop, on <code>&lt;b-form&gt;</code>, to <code>true</code> to add the Bootstrap V4 <code>.was-validated</code> class to the form.</p> <p>Refer to the <a href=https://getbootstrap.com/docs/4.0/components/forms/#validation>Bootstrap V4 Form Validation Documentation</a> for details on the new Bootstrap V4 validation states.</p> <h3 id=validation-mechanisms>Validation mechanisms</h3> <p>Documentation and examples (hopefully) coming soon.</p> <p>Please see the following references:</p> <ul> <li><a href=https://getbootstrap.com/docs/4.0/components/forms/#validation>Bootstrap V4: Form Validation Documentation</a></li> <li><a href=https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation#Validating_forms_using_JavaScript>MDN: Learn Form Validation - Using JavaScript API</a></li> <li><a href=https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation>MDN: HTML5 Constraint Validation</a></li> <li><a href=https://developer.mozilla.org/en-US/docs/Web/API/ValidityState>MDN: Validity State API</a></li> </ul> <h2 id=component-reference>Component Reference</h2> "}});
//# sourceMappingURL=38.8db05c3fcfcfbbf1d7f6.js.map