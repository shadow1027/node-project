//写好的方法
function Dialog(){
  this.time = 3000;
}
Dialog.title = "弹框"//只能够类调用
Dialog.prototype.$show = function(){
  console.log('show')
}
Dialog.prototype.$hide = function(){
  console.log("hide")
}
console.log(Dialog)
exports.Dialog = Dialog