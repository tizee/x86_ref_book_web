(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{570:function(t,e,r){"use strict";r.r(e);var s=r(42),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"mul"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mul"}},[t._v("#")]),t._v(" MUL")]),t._v(" "),r("h2",{attrs:{id:"unsigned-multiply"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unsigned-multiply"}},[t._v("#")]),t._v(" Unsigned Multiply")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Opcode")]),t._v(" "),r("th",[t._v("Mnemonic")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("F6 /4")]),t._v(" "),r("td",[t._v("MUL r/m8")]),t._v(" "),r("td",[t._v("Unsigned multiply (AX = AL * r/m8).")])]),t._v(" "),r("tr",[r("td",[t._v("F7 /4")]),t._v(" "),r("td",[t._v("MUL r/m16")]),t._v(" "),r("td",[t._v("Unsigned multiply (DX:AX = AX * r/m16).")])]),t._v(" "),r("tr",[r("td",[t._v("F7 /4")]),t._v(" "),r("td",[t._v("MUL r/m32")]),t._v(" "),r("td",[t._v("Unsigned multiply (EDX:EAX = EAX * r/m32).")])])])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Description")]),t._v(" "),r("th",[t._v("Operand Size")]),t._v(" "),r("th",[t._v("Source 1")]),t._v(" "),r("th",[t._v("Source 2")]),t._v(" "),r("th",[t._v("Destination")])])]),t._v(" "),r("tbody",[r("tr",[r("td"),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td"),t._v(" "),r("td")])])]),t._v(" "),r("p",[t._v("Performs an unsigned multiplication of the first operand (destination operand) and the second operand (source operand) and stores the result in the destination operand. The destination operand is an implied operand located in register AL, AX or EAX (depending on the size of the operand); the source operand is located in a general-purpose register or a memory location. The action of this instruction and the location of the result depends on the opcode and the operand size as shown in the following table.")]),t._v(" "),r("p",[t._v("MUL Results\nOperand SizeSource 1Source 2Destination\nByteALr/m8AX\nWordAXr/m16DX:AX\nDoublewordEAXr/m32EDX:EAX")]),t._v(" "),r("p",[t._v("The result is stored in register AX, register pair DX:AX, or register pair EDX:EAX (depending on the operand size), with the high-order bits of the product contained in register AH, DX, or EDX, respectively. If the high-order bits of the product are 0, the CF and OF flags are cleared; otherwise, the flags are set.\n|Byte|AL|r/m8|AX|Word|AX|r/m16|DX:AX|Doubleword|EAX|r/m32|EDX:EAX|\n|\n|Byte|AL|r/m8|AX|\n|Word|AX|r/m16|DX:AX|\n|Doubleword|EAX|r/m32|EDX:EAX|")]),t._v(" "),r("h2",{attrs:{id:"operation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),r("div",{staticClass:"language-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-c"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsByteOperation")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AX "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AL "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//word or doubleword operation")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OperandSize "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" DX"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("AX "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AX "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//word operation")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" EDX"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("EAX "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EAX "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//doubleword operation")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br")])]),r("h2",{attrs:{id:"flags-affected"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flags-affected"}},[t._v("#")]),t._v(" Flags affected")]),t._v(" "),r("p",[t._v("The OF and CF flags are set to 0 if the upper half of the result is 0; otherwise, they are set to 1.\nThe SF, ZF, AF, and PF flags are undefined.")]),t._v(" "),r("h2",{attrs:{id:"protected-mode-exceptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("a",{attrs:{href:""}})]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("#GP(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. If the DS, ES, FS, or GS register contains a null segment selector.")])]),t._v(" "),r("tr",[r("td",[t._v("#GP(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. If the DS, ES, FS, or GS register contains a null segment selector.")])]),t._v(" "),r("tr",[r("td",[t._v("#SS(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#PF(fault-code)")]),t._v(" "),r("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),r("h2",{attrs:{id:"real-address-mode-exceptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("a",{attrs:{href:""}})]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("#GP")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#GP")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])])])]),t._v(" "),r("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("a",{attrs:{href:""}})]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("#GP(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#GP(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#SS(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#PF(fault-code)")]),t._v(" "),r("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Instruction")]),t._v(" "),r("th",[t._v("Latency")]),t._v(" "),r("th",[t._v("Throughput")]),t._v(" "),r("th",[t._v("Execution Unit")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("CPUID")]),t._v(" "),r("td",[t._v("0F3n/0F2n")]),t._v(" "),r("td",[t._v("0F3n/0F2n")]),t._v(" "),r("td",[t._v("0F2n")])]),t._v(" "),r("tr",[r("td",[t._v("MUL")]),t._v(" "),r("td",[t._v("10/14-18")]),t._v(" "),r("td",[t._v("1/5")]),t._v(" "),r("td",[t._v("-")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);