// 校验括号是否合法
// let str = '()()sss(ss(df)ss))('
let str = '()()sss(ss(df)ss)'
function check(str){
    let stack = []
    for(let i=0; i<str.length; i++){
        // if(str.charAt(i) == '('){
        if(str[i] == '('){
            stack.push(1)
        }else if(str.charAt(i) == ')'){
            // 出栈
            if(stack.length){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length == 0
}
console.log(check(str))