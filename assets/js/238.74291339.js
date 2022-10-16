(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{592:function(e,t,s){"use strict";s.r(t);var o=s(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"pause"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pause"}},[e._v("#")]),e._v(" PAUSE")]),e._v(" "),s("h2",{attrs:{id:"spin-loop-hint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spin-loop-hint"}},[e._v("#")]),e._v(" Spin Loop Hint")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Opcode")]),e._v(" "),s("th",[e._v("Mnemonic")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("F3 90")]),e._v(" "),s("td",[e._v("PAUSE")]),e._v(" "),s("td",[e._v("Gives hint to processor that improves performance of spin-wait loops.")])])])]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("p",[e._v('Improves the performance of spin-wait loops. When executing a "spin-wait loop," a Pentium 4 or Intel Xeon processor suffers a severe performance penalty when exiting the loop because it detects a possible memory order violation. The PAUSE instruction provides a hint to the processor that the code sequence is a spin-wait loop. The processor uses this hint to avoid the memory order violation in most situations, which greatly improves processor performance. For this reason, it is recommended that a PAUSE instruction be placed in all spin-wait loops.')]),e._v(" "),s("p",[e._v("An additional function of the PAUSE instruction is to reduce the power consumed by a Pentium 4 processor while executing a spin loop. The Pentium 4 processor can execute a spinwait loop extremely quickly, causing the processor to consume a lot of power while it waits for the resource it is spinning on to become available. Inserting a pause instruction in a spinwait loop greatly reduces the processor's power consumption.")]),e._v(" "),s("p",[e._v("This instruction was introduced in the Pentium 4 processors, but is backward compatible with all IA-32 processors. In earlier IA-32 processors, the PAUSE instruction operates like a NOP instruction. The Pentium 4 and Intel Xeon processors implement the PAUSE instruction as a pre-defined delay. The delay is finite and can be zero for some processors. This instruction does not change the architectural state of the processor (that is, it performs essentially a delaying noop operation).")]),e._v(" "),s("h2",{attrs:{id:"operation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[e._v("#")]),e._v(" Operation")]),e._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ExecuteNextInstruction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"protected-mode-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[e._v("#")]),e._v(" Protected Mode Exceptions")]),e._v(" "),s("p",[e._v("None.")]),e._v(" "),s("h2",{attrs:{id:"real-address-mode-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[e._v("#")]),e._v(" Real-Address Mode Exceptions")]),e._v(" "),s("p",[e._v("None.")]),e._v(" "),s("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[e._v("#")]),e._v(" Virtual-8086 Mode Exceptions")]),e._v(" "),s("p",[e._v("None.")]),e._v(" "),s("h2",{attrs:{id:"numeric-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#numeric-exceptions"}},[e._v("#")]),e._v(" Numeric Exceptions")]),e._v(" "),s("p",[e._v("None.")])])}),[],!1,null,null,null);t.default=a.exports}}]);