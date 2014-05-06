/*
Language: llvm assembly
Author: Philipp Borgers <borgers@mi.fu-berlin.de>
Description: Language definition for the llvm assembly language
*/
function(hljs) {
  return {
    case_insensitive: false,
    keywords: {
      keyword: 'define declare global constant' +
        ' internal external private' +
        ' linkonce linkonce_odr weak weak_odr appending' +
        ' common extern_weak' +
        ' thread_local dllimport dllexport' +
        ' hidden protected default' +
        ' except deplibs' +
        ' volatile fastcc coldcc cc ccc' +
        ' x86_stdcallcc x86_fastcallcc' +
        ' ptx_kernel ptx_device' +
        ' signext zeroext inreg sret nounwind noreturn' +
        ' nocapture byval nest readnone readonly noalias uwtable' +
        ' inlinehint noinline alwaysinline optsize ssp sspreq' +
        ' noredzone noimplicitfloat naked alignstack' +
        ' module asm align tail to' +
        ' addrspace section alias sideeffect c gc' +
        ' target datalayout triple' +
        ' blockaddress' +
        ' add fadd sub fsub mul fmul' +
        ' sdiv udiv fdiv srem urem frem' +
        ' and or xor' +
        ' icmp fcmp' +
        ' eq ne ugt uge ult ule sgt sge slt sle' +
        ' oeq ogt oge olt ole one ord ueq ugt uge' +
        ' ult ule une uno' +
        ' nuw nsw exact inbounds' +
        ' phi call select shl lshr ashr va_arg' +
        ' trunc zext sext' +
        ' fptrunc fpext fptoui fptosi uitofp sitofp' +
        ' ptrtoint inttoptr bitcast' +
        ' ret br indirectbr switch invoke unwind unreachable' +
        ' malloc alloca free load store getelementptr' +
        ' extractelement insertelement shufflevector' +
        ' extractvalue insertvalue',
        literal: 'true false zeroinitializer undef null',
        //reserved: 'void',
    },
    contains: [
      { className: 'comment', begin: ';', end: '$' },
      { className: 'label',  begin: '^[-a-zA-Z$._][-a-zA-Z$._0-9]*:' },
      { className: 'number', begin: '-?\\d+' },
      { className: 'number', begin: '0x[0-9A-Fa-f]+' },
      { className: 'number', begin: '-?\\d+.d*(e[+-]\\d+)?' },
      hljs.NUMBER_MODE,
      { className: 'type', begin: 'i\\d+' },
      { className: 'type', begin: '(void|float|double|x86_fp80|fp128|ppc_fp128|type|label|opaue)' },
      { className: 'variable', begin: '[%@]\\d+' },
      { className: 'variable', begin: '[%@][-a-zA-Z$._][-a-zA-Z$._0-9]*' },
      { className: 'string', begin: '"', end: '"' }
    ],
  };
}
