/* global CONFIG, quicklink */
!function(){if("string"==typeof CONFIG.quicklink.ignores){const ignoresStr=`[${CONFIG.quicklink.ignores}]`;try{CONFIG.quicklink.ignores=JSON.parse(ignoresStr)}catch{
// eslint-disable-next-line no-console
console.error("Setting regex and function in config file is deprecated. Try setting `CONFIG.quicklink.ignores` in any script code."),
// eslint-disable-next-line no-eval
CONFIG.quicklink.ignores=eval(ignoresStr)}}let resetFn=null;const onRefresh=()=>{if(resetFn&&resetFn(),!CONFIG.quicklink.enable)return;let e=CONFIG.quicklink.ignores||[];Array.isArray(e)||(e=[e]),resetFn=quicklink.listen({timeout:CONFIG.quicklink.timeout,priority:CONFIG.quicklink.priority,ignores:[e=>e.includes("#"),e=>e===CONFIG.quicklink.url,...e]})};CONFIG.quicklink.delay?(window.addEventListener("load",onRefresh),document.addEventListener("pjax:success",onRefresh)):document.addEventListener("page:loaded",onRefresh)}();