(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{440:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"f2xm1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#f2xm1"}},[t._v("#")]),t._v(" F2XM1")]),t._v(" "),a("h2",{attrs:{id:"compute-2x-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compute-2x-1"}},[t._v("#")]),t._v(" Compute 2x-1")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Opcode")]),t._v(" "),a("th",[t._v("Mnemonic")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("D9 F0")]),t._v(" "),a("td",[t._v("F2XM1")]),t._v(" "),a("td",[t._v("Replace ST(0) with (2ST(0) - 1).")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("ST(0) Source")]),t._v(" "),a("th",[t._v("ST(0) Destination")])])]),t._v(" "),a("tbody",[a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("Computes the exponential value of 2 to the power of the source operand minus 1. The source operand is located in register ST(0) and the result is also stored in ST(0). The value of the source operand must lie in the range -1.0 to +1.0. If the source value is outside this range, the result is undefined.\nThe following table shows the results obtained when computing the exponential value of various classes of numbers, assuming that neither overflow nor underflow occurs.")]),t._v(" "),a("p",[t._v("Results Obtained from F2XM1\nST(0) SourceST(0) Destination\n-1.0 to -0-0.5 to -0\n-0-0\n+0+0\n+0 to +1.0+0 to 1.0")]),t._v(" "),a("p",[t._v("Values other than 2 can be exponentiated using the following formula:\nx^y = 2 * (y * log_2(x))")]),t._v(" "),a("p",[t._v("|-1.0 to -0|-0.5 to -0|-0|-0|+0|+0|+0 to +1.0|+0 to 1.0|\n|\n|-1.0 to -0|-0.5 to -0|\n|-0|-0|\n|+0|+0|\n|+0 to +1.0|+0 to 1.0|")]),t._v(" "),a("h2",{attrs:{id:"operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"fpu-flags-affected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fpu-flags-affected"}},[t._v("#")]),t._v(" FPU flags affected")]),t._v(" "),a("p",[t._v("C1 Set to 0 if stack underflow occurred.\nSet if result was rounded up; cleared otherwise.\nC0, C2, C3 Undefined.")]),t._v(" "),a("h2",{attrs:{id:"floating-point-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#floating-point-exceptions"}},[t._v("#")]),t._v(" Floating-Point Exceptions")]),t._v(" "),a("p",[t._v("#IS Stack underflow occurred.\n#IA Source operand is an SNaN value or unsupported format.\n#D Source is a denormal value.\n#U Result is too small for destination format.\n#P Value cannot be represented exactly in destination format.")]),t._v(" "),a("h2",{attrs:{id:"protected-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#NM")]),t._v(" "),a("td",[t._v("EM or TS in CR0 is set.")])])])]),t._v(" "),a("h2",{attrs:{id:"real-address-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#NM")]),t._v(" "),a("td",[t._v("EM or TS in CR0 is set.")])])])]),t._v(" "),a("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#NM")]),t._v(" "),a("td",[t._v("EM or TS in CR0 is set.")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Instruction")]),t._v(" "),a("th",[t._v("Latency")]),t._v(" "),a("th",[t._v("Throughput")]),t._v(" "),a("th",[t._v("Execution Unit")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CPUID")]),t._v(" "),a("td",[t._v("0F3n/0F2n")]),t._v(" "),a("td",[t._v("0F3n/0F2n")]),t._v(" "),a("td",[t._v("0F2n")])]),t._v(" "),a("tr",[a("td",[t._v("F2XM1")]),t._v(" "),a("td",[t._v("100-200/90-150")]),t._v(" "),a("td",[t._v("60")]),t._v(" "),a("td",[t._v("-")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);