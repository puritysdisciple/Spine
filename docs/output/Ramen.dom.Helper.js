Ext.data.JsonP.Ramen_dom_Helper({"tagname":"class","name":"Ramen.dom.Helper","autodetected":{},"files":[{"filename":"Helper.js","href":"Helper2.html#Ramen-dom-Helper"}],"singleton":true,"members":[{"name":"addUnits","tagname":"method","owner":"Ramen.dom.Helper","id":"method-addUnits","meta":{"private":true}},{"name":"create","tagname":"method","owner":"Ramen.dom.Helper","id":"method-create","meta":{}},{"name":"markup","tagname":"method","owner":"Ramen.dom.Helper","id":"method-markup","meta":{}},{"name":"parseStyle","tagname":"method","owner":"Ramen.dom.Helper","id":"method-parseStyle","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Ramen.dom.Helper","short_doc":"A helper class that turns structured objects into HTMLElements or markup. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Helper2.html#Ramen-dom-Helper' target='_blank'>Helper.js</a></div></pre><div class='doc-contents'><p>A helper class that turns structured objects into HTMLElements or markup. A dom object consists of a tag, and then\nany attributes you want to add to the tag. There are a few special keys that you can use:</p>\n\n<ul>\n<li><strong>cls</strong> - is used to add css classes as <code>class</code> is a keyword in javascript, and can't be used as a key</li>\n<li><p><strong>style</strong> - can either be a string, or an object. A style object will be converted to valid\ncss. Any appropriate numbers will have \"px\" added to them as units. You can also use nested objects for\nstyles that have multiple properties for example \"padding-left\", \"padding-right\", etc can instead be written:</p>\n\n<pre><code>{\n    padding: {\n        top: 5\n        left: 10,\n        right: 10,\n        bottom: 5\n    }\n}\n</code></pre></li>\n<li><p><strong>html</strong> - will be applied to the innerHTML of the created tag</p></li>\n<li><strong>children</strong> - is an array of tag objects that will be added as children to the created tag.</li>\n</ul>\n\n\n<p> The following is a correctly formatted object:</p>\n\n<pre><code> <a href=\"#!/api/Ramen.dom.Helper-method-markup\" rel=\"Ramen.dom.Helper-method-markup\" class=\"docClass\">Ramen.dom.Helper.markup</a>({\n     tag: 'ul',\n     cls: [\n         'task-list',\n         'important-list'\n     ],\n     style: {\n         margin: {\n             top: 20\n         }\n     },\n     children: [{\n         tag: 'li',\n         html: 'Write awesome app'\n     }, {\n         tag: 'li',\n         html: '???'\n     }, {\n         tag: 'li',\n         html: 'profit'\n     }]\n });\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addUnits' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.dom.Helper'>Ramen.dom.Helper</span><br/><a href='source/Helper2.html#Ramen-dom-Helper-method-addUnits' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.dom.Helper-method-addUnits' class='name expandable'>addUnits</a>( <span class='pre'>value</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.dom.Helper'>Ramen.dom.Helper</span><br/><a href='source/Helper2.html#Ramen-dom-Helper-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.dom.Helper-method-create' class='name expandable'>create</a>( <span class='pre'>config</span> ) : HTMLElement<span class=\"signature\"></span></div><div class='description'><div class='short'>Generates HTMLElements from the given tag object. ...</div><div class='long'><p>Generates HTMLElements from the given tag object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The tag config</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>The generated HTMLElements</p>\n</div></li></ul></div></div></div><div id='method-markup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.dom.Helper'>Ramen.dom.Helper</span><br/><a href='source/Helper2.html#Ramen-dom-Helper-method-markup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.dom.Helper-method-markup' class='name expandable'>markup</a>( <span class='pre'>config</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Generates HTML markup from the given tag object. ...</div><div class='long'><p>Generates HTML markup from the given tag object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The tag config</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The generated markup</p>\n</div></li></ul></div></div></div><div id='method-parseStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.dom.Helper'>Ramen.dom.Helper</span><br/><a href='source/Helper2.html#Ramen-dom-Helper-method-parseStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.dom.Helper-method-parseStyle' class='name expandable'>parseStyle</a>( <span class='pre'>obj</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});