(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{585:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"packuswb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#packuswb"}},[t._v("#")]),t._v(" PACKUSWB")]),t._v(" "),n("h2",{attrs:{id:"pack-with-unsigned-saturation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pack-with-unsigned-saturation"}},[t._v("#")]),t._v(" Pack with Unsigned Saturation")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Opcode")]),t._v(" "),n("th",[t._v("Mnemonic")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("0F 67 /r")]),t._v(" "),n("td",[t._v("PACKUSWB mm, mm/m64")]),t._v(" "),n("td",[t._v("Converts 4 signed word integers from mm and 4 signed word integers from mm/m64 into 8 unsigned byte integers in mm using unsigned saturation.")])]),t._v(" "),n("tr",[n("td",[t._v("66 0F 67 /r")]),t._v(" "),n("td",[t._v("PACKUSWB xmm1, xmm2/m128")]),t._v(" "),n("td",[t._v("Converts 8 signed word integers from xmm1 and 8 signed word integers from xmm2/m128 into 16 unsigned byte integers in xmm1 using unsigned saturation.")])])])]),t._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),n("p",[t._v("Converts 4 or 8 signed word integers from the destination operand (first operand) and 4 or 8 signed word integers from the source operand (second operand) into 8 or 16 unsigned byte integers and stores the result in the destination operand. (See Figure 4-1 for an example of the packing operation.) If a signed word integer value is beyond the range of an unsigned byte integer (that is, greater than FFH or less than 00H), the saturated unsigned byte integer value of FFH or 00H, respectively, is stored in the destination.")]),t._v(" "),n("p",[t._v("The PACKUSWB instruction operates on either 64-bit or 128-bit operands. When operating on 64-bit operands, the destination operand must be an MMX technology register and the source operand can be either an MMX technology register or a 64-bit memory location. When operating on 128-bit operands, the destination operand must be an XMM register and the source operand can be either an XMM register or a 128-bit memory location.")]),t._v(" "),n("h2",{attrs:{id:"operation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OperandSize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//PACKUSWB instruction with 64-bit operands:")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".23")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".47")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("24.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".39")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("40.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".47")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".55")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".47")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("56.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//PACKUSWB instruction with 128-bit operands:")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".23")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".47")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("24.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".39")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".79")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("40.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".47")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".95")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".55")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("96.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".111")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("56.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("112.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".71")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("72.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".79")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".87")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".47")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("88.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".95")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("96.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".103")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".79")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("104.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".111")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".95")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("112.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".119")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("96.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".111")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("120.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaturateSignedWordToUnsignedByte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("112.")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br")])]),n("h2",{attrs:{id:"flags-affected"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flags-affected"}},[t._v("#")]),t._v(" Flags affected")]),t._v(" "),n("p",[t._v("None.")]),t._v(" "),n("h2",{attrs:{id:"protected-mode-exceptions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("a",{attrs:{href:""}})]),t._v(" "),n("th")])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("#GP(0)")]),t._v(" "),n("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. (128-bit operations only) If a memory operand is not aligned on a 16-byte boundary, regardless of segment.")])]),t._v(" "),n("tr",[n("td",[t._v("#GP(0)")]),t._v(" "),n("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. (128-bit operations only) If a memory operand is not aligned on a 16-byte boundary, regardless of segment.")])]),t._v(" "),n("tr",[n("td",[t._v("#SS(0)")]),t._v(" "),n("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),n("tr",[n("td",[t._v("#UD")]),t._v(" "),n("td",[t._v("If EM in CR0 is set. 128-bit operations will generate #UD only if OSFXSR in CR4 is 0. Execution of 128-bit instructions on a non-SSE2 capable processor (one that is MMX technology capable) will result in the instruction operating on the mm registers, not #UD.")])]),t._v(" "),n("tr",[n("td",[t._v("#NM")]),t._v(" "),n("td",[t._v("If TS in CR0 is set.")])]),t._v(" "),n("tr",[n("td",[t._v("#MF")]),t._v(" "),n("td",[t._v("(64-bit operations only) If there is a pending x87 FPU exception.")])]),t._v(" "),n("tr",[n("td",[t._v("#PF(fault-code)")]),t._v(" "),n("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),n("h2",{attrs:{id:"real-address-mode-exceptions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("a",{attrs:{href:""}})]),t._v(" "),n("th")])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("#GP(0)")]),t._v(" "),n("td",[t._v("(128-bit operations only) If a memory operand is not aligned on a 16-byte boundary, regardless of segment. If any part of the operand lies outside of the effective address space from 0 to FFFFH.")])]),t._v(" "),n("tr",[n("td",[t._v("#GP(0)")]),t._v(" "),n("td",[t._v("(128-bit operations only) If a memory operand is not aligned on a 16-byte boundary, regardless of segment. If any part of the operand lies outside of the effective address space from 0 to FFFFH.")])]),t._v(" "),n("tr",[n("td",[t._v("#UD")]),t._v(" "),n("td",[t._v("If EM in CR0 is set. 128-bit operations will generate #UD only if OSFXSR in CR4 is 0. Execution of 128-bit instructions on a non-SSE2 capable processor (one that is MMX technology capable) will result in the instruction operating on the mm registers, not #UD.")])]),t._v(" "),n("tr",[n("td",[t._v("#NM")]),t._v(" "),n("td",[t._v("If TS in CR0 is set.")])])])]),t._v(" "),n("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),n("p",[t._v("Same exceptions as in Real Address Mode")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("a",{attrs:{href:""}})]),t._v(" "),n("th")])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("#PF(fault-code)")]),t._v(" "),n("td",[t._v("For a page fault.")])]),t._v(" "),n("tr",[n("td",[t._v("#PF(fault-code)")]),t._v(" "),n("td",[t._v("For a page fault.")])])])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Instruction")]),t._v(" "),n("th",[t._v("Latency")]),t._v(" "),n("th",[t._v("Throughput")]),t._v(" "),n("th",[t._v("Execution Unit")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("CPUID")]),t._v(" "),n("td",[t._v("0F3n/0F2n/069n")]),t._v(" "),n("td",[t._v("0F3n/0F2n/069n")]),t._v(" "),n("td",[t._v("0F2n")])]),t._v(" "),n("tr",[n("td",[t._v("PACKUSWB mm, mm")]),t._v(" "),n("td",[t._v("2/2/-")]),t._v(" "),n("td",[t._v("1/1/-")]),t._v(" "),n("td",[t._v("MMX_SHFT")])]),t._v(" "),n("tr",[n("td",[t._v("PACKUSWB xmm, xmm")]),t._v(" "),n("td",[t._v("4/4/2+1")]),t._v(" "),n("td",[t._v("2/2/2")]),t._v(" "),n("td",[t._v("MMX_SHFT")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);