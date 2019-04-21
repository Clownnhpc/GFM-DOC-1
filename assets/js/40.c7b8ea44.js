(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{340:function(e,t,n){"use strict";n.r(t);var r=n(46),a=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h3",{attrs:{id:"tables-extension"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tables-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" Tables (extension)")]),e._v(" "),n("p",[e._v("GFM enables the "),n("code",[e._v("table")]),e._v(" extension, where an additional leaf block type is available."),n("br"),e._v("\nA "),n("a",{attrs:{href:"https://github.github.com/gfm/#table",target:"_blank",rel:"noopener noreferrer"}},[e._v("table"),n("OutboundLink")],1),e._v(" is an arrangement of data with rows and columns, consisting of a single header row, a "),n("a",{attrs:{href:"https://github.github.com/gfm/#delimiter-row",target:"_blank",rel:"noopener noreferrer"}},[e._v("delimiter row"),n("OutboundLink")],1),e._v("separating the header from the data, and zero or more data rows."),n("br"),e._v("\nEach row consists of cells containing arbitrary text, in which "),n("a",{attrs:{href:"https://github.github.com/gfm/#inlines",target:"_blank",rel:"noopener noreferrer"}},[e._v("inlines"),n("OutboundLink")],1),e._v(" are parsed, separated by pipes ("),n("code",[e._v("|")]),e._v("). A leading and trailing pipe is also recommended for clarity of reading, and if there’s otherwise parsing ambiguity. Spaces between pipes and cell content are trimmed. Block-level elements cannot be inserted in a table."),n("br"),e._v("\nThe "),n("a",{attrs:{href:"https://github.github.com/gfm/#delimiter-row",target:"_blank",rel:"noopener noreferrer"}},[e._v("delimiter row"),n("OutboundLink")],1),e._v(" consists of cells whose only content are hyphens ("),n("code",[e._v("-")]),e._v("), and optionally, a leading or trailing colon ("),n("code",[e._v(":")]),e._v("), or both, to indicate left, right, or center alignment respectively."),n("br"),e._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-191",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 191"),n("OutboundLink")],1)]),e._v(" "),n("pre",[n("code",[e._v("| foo | bar |\n| --- | --- |\n| baz | bim |\n")])]),e._v(" "),n("p"),e._v(" "),n("pre",[n("code",[e._v("<table>\n<thead>\n<tr>\n<th>foo</th>\n<th>bar</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>baz</td>\n<td>bim</td>\n</tr></tbody></table>\n")])]),e._v(" "),n("p",[e._v("Cells in one column don’t need to match length, though it’s easier to read if they are. Likewise, use of leading and trailing pipes may be inconsistent:"),n("br"),e._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-192",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 192"),n("OutboundLink")],1)]),e._v(" "),n("pre",[n("code",[e._v("| abc | defghi |\n:-: | -----------:\nbar | baz\n")])]),e._v(" "),n("p"),e._v(" "),n("pre",[n("code",[e._v('<table>\n<thead>\n<tr>\n<th align="center">abc</th>\n<th align="right">defghi</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">bar</td>\n<td align="right">baz</td>\n</tr></tbody></table>\n')])]),e._v(" "),n("p",[e._v("Include a pipe in a cell’s content by escaping it, including inside other inline spans:"),n("br"),e._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-193",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 193"),n("OutboundLink")],1)]),e._v(" "),n("pre",[n("code",[e._v("| f\\|oo  |\n| ------ |\n| b `\\|` az |\n| b **\\|** im |\n")])]),e._v(" "),n("p"),e._v(" "),n("pre",[n("code",[e._v("<table>\n<thead>\n<tr>\n<th>f|oo</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>b <code>|</code> az</td>\n</tr>\n<tr>\n<td>b <strong>|</strong> im</td>\n</tr></tbody></table>\n")])]),e._v(" "),n("p",[e._v("The table is broken at the first empty line, or beginning of another block-level structure:"),n("br"),e._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-194",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 194"),n("OutboundLink")],1)]),e._v(" "),n("pre",[n("code",[e._v("| abc | def |\n| --- | --- |\n| bar | baz |\n> bar\n")])]),e._v(" "),n("p"),e._v(" "),n("pre",[n("code",[e._v("<table>\n<thead>\n<tr>\n<th>abc</th>\n<th>def</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bar</td>\n<td>baz</td>\n</tr></tbody></table>\n<blockquote>\n<p>bar</p>\n</blockquote>\n")])]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.github.com/gfm/#example-195",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 195"),n("OutboundLink")],1)]),e._v(" "),n("pre",[n("code",[e._v("| abc | def |\n| --- | --- |\n| bar | baz |\nbar\n\nbar\n")])]),e._v(" "),n("p"),e._v(" "),n("pre",[n("code",[e._v("<table>\n<thead>\n<tr>\n<th>abc</th>\n<th>def</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bar</td>\n<td>baz</td>\n</tr>\n<tr>\n<td>bar</td>\n<td></td>\n</tr></tbody></table>\n<p>bar</p>\n")])]),e._v(" "),n("p",[e._v("The header row must match the "),n("a",{attrs:{href:"https://github.github.com/gfm/#delimiter-row",target:"_blank",rel:"noopener noreferrer"}},[e._v("delimiter row"),n("OutboundLink")],1),e._v(" in the number of cells. If not, a table will not be recognized:"),n("br"),e._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-196",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 196"),n("OutboundLink")],1)]),e._v(" "),n("pre",[n("code",[e._v("| abc | def |\n| --- |\n| bar |\n")])]),e._v(" "),n("p"),e._v(" "),n("pre",[n("code",[e._v("<p>| abc | def |\n| --- |\n| bar |</p>\n")])]),e._v(" "),n("p",[e._v("The remainder of the table’s rows may vary in the number of cells. If there are a number of cells fewer than the number of cells in the header row, empty cells are inserted. If there are greater, the excess is ignored:"),n("br"),e._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-197",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 197"),n("OutboundLink")],1)]),e._v(" "),n("pre",[n("code",[e._v("| abc | def |\n| --- | --- |\n| bar |\n| bar | baz | boo |\n")])]),e._v(" "),n("p"),e._v(" "),n("pre",[n("code",[e._v("<table>\n<thead>\n<tr>\n<th>abc</th>\n<th>def</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bar</td>\n<td></td>\n</tr>\n<tr>\n<td>bar</td>\n<td>baz</td>\n</tr></tbody></table>\n")])]),e._v(" "),n("p",[e._v("If there are no rows in the body, no "),n("code",[e._v("<tbody>")]),e._v(" is generated in HTML output:"),n("br"),e._v(" "),n("a",{attrs:{href:"https://github.github.com/gfm/#example-198",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example 198"),n("OutboundLink")],1)]),e._v(" "),n("pre",[n("code",[e._v("| abc | def |\n| --- | --- |\n")])]),e._v(" "),n("p"),e._v(" "),n("pre",[n("code",[e._v("<table>\n<thead>\n<tr>\n<th>abc</th>\n<th>def</th>\n</tr>\n</thead></table>\n")])])])},[],!1,null,null,null);t.default=a.exports}}]);