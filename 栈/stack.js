function Stack () {
  var items = [] // 使用数组存储数据
  // 这儿不使用 this.items 的原因是因为 
  // var items 是私有变量，在外边不能被访问到
  // this.items 在外面可以被访问，被修改

  // 从栈顶添加元素， 也叫压栈
  this.push = function(item) {
    items.push(item)
  }

  // 弹出栈顶元素
  this.pop = function(){
    return items.pop()
  }

  // 返回栈顶元素
  this.top = function(){
    return items[items.length - 1]
  }

  // 判断栈是否为空
  this.isEmpty = function () {
    return items.length == 0
  }

  // 返回栈的大小
  this.size = function() {
    return items.length
  }

  // 清空栈
  this.clear = function () {
    // 数组的length是只读属性，不能赋值×错误的 可以赋值的
    items = []
  }
}