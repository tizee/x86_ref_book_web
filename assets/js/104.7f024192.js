(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{457:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fincstp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fincstp"}},[t._v("#")]),t._v(" FINCSTP")]),t._v(" "),s("h2",{attrs:{id:"increment-stack-top-pointer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#increment-stack-top-pointer"}},[t._v("#")]),t._v(" Increment Stack-Top Pointer")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Opcode")]),t._v(" "),s("th",[t._v("Mnemonic")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("D9 F7")]),t._v(" "),s("td",[t._v("FINCSTP")]),t._v(" "),s("td",[t._v("Increment the TOP field in the FPU status register.")])])])]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Adds one to the TOP field of the FPU status word (increments the top-of-stack pointer). If the TOP field contains a 7, it is set to 0. The effect of this instruction is to rotate the stack by one position. The contents of the FPU data registers and tag register are not affected. This operation is not equivalent to popping the stack, because the tag for the previous top-of-stack register is not marked empty.")]),t._v(" "),s("h2",{attrs:{id:"operation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" Top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"fpu-flags-affected"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fpu-flags-affected"}},[t._v("#")]),t._v(" FPU flags affected")]),t._v(" "),s("p",[t._v("The C1 flag is set to 0. The C0, C2, and C3 flags are undefined.")]),t._v(" "),s("h2",{attrs:{id:"floating-point-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#floating-point-exceptions"}},[t._v("#")]),t._v(" Floating-Point Exceptions")]),t._v(" "),s("p",[t._v("None.")]),t._v(" "),s("h2",{attrs:{id:"protected-mode-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("a",{attrs:{href:""}})]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("#NM")]),t._v(" "),s("td",[t._v("EM or TS in CR0 is set.")])])])]),t._v(" "),s("h2",{attrs:{id:"real-address-mode-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("a",{attrs:{href:""}})]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("#NM")]),t._v(" "),s("td",[t._v("EM or TS in CR0 is set.")])])])]),t._v(" "),s("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("a",{attrs:{href:""}})]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("#NM")]),t._v(" "),s("td",[t._v("EM or TS in CR0 is set.")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);