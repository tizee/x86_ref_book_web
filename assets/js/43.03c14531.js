(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{399:function(t,e,r){"use strict";r.r(e);var a=r(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"cmp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cmp"}},[t._v("#")]),t._v(" CMP")]),t._v(" "),r("h2",{attrs:{id:"compare-two-operands"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compare-two-operands"}},[t._v("#")]),t._v(" Compare Two Operands")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Opcode")]),t._v(" "),r("th",[t._v("Mnemonic")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("3C ib")]),t._v(" "),r("td",[t._v("CMP AL, imm8")]),t._v(" "),r("td",[t._v("Compare imm8 with AL.")])]),t._v(" "),r("tr",[r("td",[t._v("3D iw")]),t._v(" "),r("td",[t._v("CMP AX, imm16")]),t._v(" "),r("td",[t._v("Compare imm16 with AX.")])]),t._v(" "),r("tr",[r("td",[t._v("3D id")]),t._v(" "),r("td",[t._v("CMP EAX, imm32")]),t._v(" "),r("td",[t._v("Compare imm32 with EAX.")])]),t._v(" "),r("tr",[r("td",[t._v("80 /7 ib")]),t._v(" "),r("td",[t._v("CMP r/m8, imm8")]),t._v(" "),r("td",[t._v("Compare imm8 with r/m8.")])]),t._v(" "),r("tr",[r("td",[t._v("81 /7 iw")]),t._v(" "),r("td",[t._v("CMP r/m16, imm16")]),t._v(" "),r("td",[t._v("Compare imm16 with r/m16.")])]),t._v(" "),r("tr",[r("td",[t._v("81 /7 id")]),t._v(" "),r("td",[t._v("CMP r/m32,imm32")]),t._v(" "),r("td",[t._v("Compare imm32 with r/m32.")])]),t._v(" "),r("tr",[r("td",[t._v("83 /7 ib")]),t._v(" "),r("td",[t._v("CMP r/m16,imm8")]),t._v(" "),r("td",[t._v("Compare imm8 with r/m16.")])]),t._v(" "),r("tr",[r("td",[t._v("83 /7 ib")]),t._v(" "),r("td",[t._v("CMP r/m32,imm8")]),t._v(" "),r("td",[t._v("Compare imm8 with r/m32.")])]),t._v(" "),r("tr",[r("td",[t._v("38 /r")]),t._v(" "),r("td",[t._v("CMP r/m8,r8")]),t._v(" "),r("td",[t._v("Compare r8 with r/m8.")])]),t._v(" "),r("tr",[r("td",[t._v("39 /r")]),t._v(" "),r("td",[t._v("CMP r/m16,r16")]),t._v(" "),r("td",[t._v("Compare r16 with r/m16.")])]),t._v(" "),r("tr",[r("td",[t._v("39 /r")]),t._v(" "),r("td",[t._v("CMP r/m32,r32")]),t._v(" "),r("td",[t._v("Compare r32 with r/m32.")])]),t._v(" "),r("tr",[r("td",[t._v("3A /r")]),t._v(" "),r("td",[t._v("CMP r8,r/m8")]),t._v(" "),r("td",[t._v("Compare r/m8 with r8.")])]),t._v(" "),r("tr",[r("td",[t._v("3B /r")]),t._v(" "),r("td",[t._v("CMP r16,r/m16")]),t._v(" "),r("td",[t._v("Compare r/m16 with r16.")])]),t._v(" "),r("tr",[r("td",[t._v("3B /r")]),t._v(" "),r("td",[t._v("CMP r32,r/m32")]),t._v(" "),r("td",[t._v("Compare r/m32 with r32.")])])])]),t._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Compares the first source operand with the second source operand and sets the status flags in the EFLAGS register according to the results. The comparison is performed by subtracting the second operand from the first operand and then setting the status flags in the same manner as the SUB instruction. When an immediate value is used as an operand, it is sign-extended to the length of the first operand.")]),t._v(" "),r("p",[t._v("The CMP instruction is typically used in conjunction with a conditional jump (Jcc), condition move (CMOVcc), or SETcc instruction. The condition codes used by the Jcc, CMOVcc, and SETcc instructions are based on the results of a CMP instruction. Appendix B, EFLAGS Condition Codes, in the IA-32 Intel Architecture Software Developer's Manual, Volume 1, shows the relationship of the status flags and the condition codes.")]),t._v(" "),r("h2",{attrs:{id:"operation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),r("div",{staticClass:"language-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-c"}},[r("code",[t._v("temp "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Source1 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignExtend")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ModifyStatusFlags")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Modify status flags in the same manner as the SUB instruction")]),t._v("\n\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br")])]),r("h2",{attrs:{id:"flags-affected"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flags-affected"}},[t._v("#")]),t._v(" Flags affected")]),t._v(" "),r("p",[t._v("The CF, OF, SF, ZF, AF, and PF flags are set according to the result.")]),t._v(" "),r("h2",{attrs:{id:"protected-mode-exceptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("a",{attrs:{href:""}})]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("#GP(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. If the DS, ES, FS, or GS register contains a null segment selector.")])]),t._v(" "),r("tr",[r("td",[t._v("#GP(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. If the DS, ES, FS, or GS register contains a null segment selector.")])]),t._v(" "),r("tr",[r("td",[t._v("#SS(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#PF(fault-code)")]),t._v(" "),r("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),r("h2",{attrs:{id:"real-address-mode-exceptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("a",{attrs:{href:""}})]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("#GP")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#GP")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])])])]),t._v(" "),r("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("a",{attrs:{href:""}})]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("#GP(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#GP(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#SS(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#PF(fault-code)")]),t._v(" "),r("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Instruction")]),t._v(" "),r("th",[t._v("Latency")]),t._v(" "),r("th",[t._v("Throughput")]),t._v(" "),r("th",[t._v("Execution Unit")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("CPUID")]),t._v(" "),r("td",[t._v("0F3n/0F2n")]),t._v(" "),r("td",[t._v("0F3n/0F2n")]),t._v(" "),r("td",[t._v("0F2n")])]),t._v(" "),r("tr",[r("td",[t._v("CMP")]),t._v(" "),r("td",[t._v("1/0.5")]),t._v(" "),r("td",[t._v("0.5/0.5")]),t._v(" "),r("td",[t._v("ALU")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);