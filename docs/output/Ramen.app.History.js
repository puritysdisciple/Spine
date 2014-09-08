Ext.data.JsonP.Ramen_app_History({"tagname":"class","name":"Ramen.app.History","autodetected":{},"files":[{"filename":"History.js","href":"History.html#Ramen-app-History"}],"singleton":true,"mixins":["JSoop.mixins.Observable"],"members":[{"name":"updateFragment","tagname":"property","owner":"Ramen.app.History","id":"property-updateFragment","meta":{"private":true}},{"name":"checkUrl","tagname":"method","owner":"Ramen.app.History","id":"method-checkUrl","meta":{"private":true}},{"name":"createFrame","tagname":"method","owner":"Ramen.app.History","id":"method-createFrame","meta":{"private":true}},{"name":"getFragment","tagname":"method","owner":"Ramen.app.History","id":"method-getFragment","meta":{}},{"name":"getHash","tagname":"method","owner":"Ramen.app.History","id":"method-getHash","meta":{"private":true}},{"name":"loadUrl","tagname":"method","owner":"Ramen.app.History","id":"method-loadUrl","meta":{"private":true}},{"name":"navigate","tagname":"method","owner":"Ramen.app.History","id":"method-navigate","meta":{}},{"name":"start","tagname":"method","owner":"Ramen.app.History","id":"method-start","meta":{"private":true}},{"name":"change","tagname":"event","owner":"Ramen.app.History","id":"event-change","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Ramen.app.History","short_doc":"Represents browser history state and is used to track changes in the browser history state. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixins</h4><div class='dependency'>JSoop.mixins.Observable</div><h4>Files</h4><div class='dependency'><a href='source/History.html#Ramen-app-History' target='_blank'>History.js</a></div></pre><div class='doc-contents'><p>Represents browser history state and is used to track changes in the browser history state. In general this class\nshould not be used, instead use <a href=\"#!/api/Ramen.app.Controller-cfg-routes\" rel=\"Ramen.app.Controller-cfg-routes\" class=\"docClass\">routes</a> to moniter and execute code based on\nbrowser state.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-updateFragment' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.app.History'>Ramen.app.History</span><br/><a href='source/History.html#Ramen-app-History-property-updateFragment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.app.History-property-updateFragment' class='name expandable'>updateFragment</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-checkUrl' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.app.History'>Ramen.app.History</span><br/><a href='source/History.html#Ramen-app-History-method-checkUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.app.History-method-checkUrl' class='name expandable'>checkUrl</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ramen.app.History-event-change\" rel=\"Ramen.app.History-event-change\" class=\"docClass\">change</a></li></ul></div></div></div><div id='method-createFrame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.app.History'>Ramen.app.History</span><br/><a href='source/History.html#Ramen-app-History-method-createFrame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.app.History-method-createFrame' class='name expandable'>createFrame</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getFragment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.app.History'>Ramen.app.History</span><br/><a href='source/History.html#Ramen-app-History-method-getFragment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.app.History-method-getFragment' class='name expandable'>getFragment</a>( <span class='pre'>fragment</span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the current fragment ...</div><div class='long'><p>Gets the current fragment</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fragment</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The current fragment</p>\n</div></li></ul></div></div></div><div id='method-getHash' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.app.History'>Ramen.app.History</span><br/><a href='source/History.html#Ramen-app-History-method-getHash' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.app.History-method-getHash' class='name expandable'>getHash</a>( <span class='pre'>target</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-loadUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.app.History'>Ramen.app.History</span><br/><a href='source/History.html#Ramen-app-History-method-loadUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.app.History-method-loadUrl' class='name expandable'>loadUrl</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ramen.app.History-event-change\" rel=\"Ramen.app.History-event-change\" class=\"docClass\">change</a></li></ul></div></div></div><div id='method-navigate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.app.History'>Ramen.app.History</span><br/><a href='source/History.html#Ramen-app-History-method-navigate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.app.History-method-navigate' class='name expandable'>navigate</a>( <span class='pre'>config</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Changes the current history state ...</div><div class='long'><p>Changes the current history state</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object/string<div class='sub-desc'><p>The config object or new fragment</p>\n<ul><li><span class='pre'>fragment</span> : string<div class='sub-desc'><p>The new fragment</p>\n</div></li><li><span class='pre'>silent</span> : boolean (optional)<div class='sub-desc'><p>Whether or not to supress the change event</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>replace</span> : boolean (optional)<div class='sub-desc'><p>Whether or not to replace the current history state</p>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ramen.app.History-event-change\" rel=\"Ramen.app.History-event-change\" class=\"docClass\">change</a></li></ul></div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.app.History'>Ramen.app.History</span><br/><a href='source/History.html#Ramen-app-History-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.app.History-method-start' class='name expandable'>start</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ramen.app.History-event-change\" rel=\"Ramen.app.History-event-change\" class=\"docClass\">change</a></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-change' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ramen.app.History'>Ramen.app.History</span><br/><a href='source/History.html#Ramen-app-History-event-change' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ramen.app.History-event-change' class='name expandable'>change</a>( <span class='pre'>fragment</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the history state changes ...</div><div class='long'><p>Fired when the history state changes</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fragment</span> : string<div class='sub-desc'><p>the new fragment</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});