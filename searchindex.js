Object.assign(window.search, {"doc_urls":["python_/i_scope.html","python_/for_i_in.html","golang_/innerfunc.html","golang_/innerfunc2.html","c_/return_stack_p.html"],"index":{"documentStore":{"docInfo":{"0":{"body":38,"breadcrumbs":0,"title":0},"1":{"body":9,"breadcrumbs":0,"title":0},"2":{"body":29,"breadcrumbs":0,"title":0},"3":{"body":11,"breadcrumbs":0,"title":0},"4":{"body":36,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"python的变量，在使用前不需要先声明，在循环的时候，可以直接使用变量i来承接迭代器给出的值 i = 4\nfor i in range(5): print('x')\nprint(i) # i = ? 在golang中的表现 package main import \"fmt\" func main() { x := []int{1, 2, 3, 4} for i := range(x) { fmt.Println(\"x\", i) } // fmt.Printf(\"i: %v\\n\", i) // undefined: i\n} 这段代码展示了一个事实：循环内部的i和外部定义的变量i是无关的，这表明go的循环内部变量是有作用域的 package main import \"fmt\" func main() { i := 20 x := []int{1, 2, 3, 4} for i := range(x) { fmt.Println(\"x\", i) } fmt.Printf(\"i: %v\\n\", i) // i: 20\n}","breadcrumbs":"i作用域","id":"0","title":"i作用域"},"1":{"body":"这样修改数组的值，是错误的方式 nums = [2, 4, 5, 7, 9]\nfor i in nums: i = 7\nprint(nums) i = 7只是让原先指向迭代器抛出对象的变量i，转而指向另一个对象7，而原先的迭代器给出的对象不受影响","breadcrumbs":"改迭代器？","id":"1","title":"改迭代器？"},"2":{"body":"在golang函数的内部，可以定义另外的函数 package main import \"fmt\" func main() { fmt.Println(\"Outer function\") var innerFunction = func() { fmt.Println(\"Inner function\") } innerFunction() // 没有这一句会出错，因为innerFunction定义而不使用\n} package main import \"fmt\" func main() { fmt.Println(\"Outer function\") innerFunction := func() { // 使用 := 也可以 fmt.Println(\"Inner function\") } innerFunction()\n}","breadcrumbs":"在函数内定义函数","id":"2","title":"在函数内定义函数"},"3":{"body":"golang的闭包函数，可以访问到相同地位的兄弟变量，同一作用域的其他变量 func innerfunc2() { x := 20 this_func_can_visit_x := func() { fmt.Println(\"this_func_can_visit_x\", x) } this_func_can_visit_x() // this_func_can_visit_x 20\n}","breadcrumbs":"在函数内定义函数 » 闭包函数","id":"3","title":"在函数内定义函数"},"4":{"body":"返回栈内局部变量的地址是危险的 // return_stack_p.c\n#include<stdio.h> int* f(int tmp) { int a = tmp; return &a;\n} int main() { int *b = f(1); printf(\"b is %d\\n\", *b); // b is 1 f(2); printf(\"b is %d\\n\", *b); // b is 2\n} //return_stack_p.c:6:13: warning: address of stack memory associated with local variable 'a' returned [-Wreturn-stack-address]","breadcrumbs":"返回栈内地址","id":"4","title":"返回栈内地址"}},"length":5,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"df":1,"docs":{"4":{"tf":1.0}}},"2":{"0":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}},"df":3,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"4":{"tf":1.0}}},"3":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"4":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}},"5":{"df":1,"docs":{"1":{"tf":1.0}}},"7":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"9":{"df":1,"docs":{"1":{"tf":1.0}}},"a":{"d":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}},"b":{"df":1,"docs":{"4":{"tf":2.23606797749979}}},"d":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"(":{"1":{"df":1,"docs":{"4":{"tf":1.0}}},"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"(":{"\"":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"n":{"(":{"\"":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"_":{"c":{"a":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"x":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":2.0},"3":{"tf":1.4142135623730951}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":2.0}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951}}}}}}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"e":{"<":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.23606797749979}}}},"df":0,"docs":{}}}}}}},"t":{"df":1,"docs":{"4":{"tf":2.0}},"{":{"1":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"l":{"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":3,"docs":{"0":{"tf":2.0},"2":{"tf":2.0},"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"'":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"f":{"(":{"\"":{"b":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"(":{"5":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"k":{"_":{"df":0,"docs":{},"p":{".":{"c":{":":{"6":{":":{"1":{"3":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"_":{"c":{"a":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"v":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"x":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}}},"breadcrumbs":{"root":{"1":{"df":1,"docs":{"4":{"tf":1.0}}},"2":{"0":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}},"df":3,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"4":{"tf":1.0}}},"3":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"4":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}},"5":{"df":1,"docs":{"1":{"tf":1.0}}},"7":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"9":{"df":1,"docs":{"1":{"tf":1.0}}},"a":{"d":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}},"b":{"df":1,"docs":{"4":{"tf":2.23606797749979}}},"d":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"(":{"1":{"df":1,"docs":{"4":{"tf":1.0}}},"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"(":{"\"":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"n":{"(":{"\"":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"_":{"c":{"a":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"x":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":2.0},"3":{"tf":1.4142135623730951}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":2.0}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951}}}}}}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"e":{"<":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.23606797749979}}}},"df":0,"docs":{}}}}}}},"t":{"df":1,"docs":{"4":{"tf":2.0}},"{":{"1":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"l":{"df":0,"docs":{},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":3,"docs":{"0":{"tf":2.0},"2":{"tf":2.0},"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"'":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"f":{"(":{"\"":{"b":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"(":{"5":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"k":{"_":{"df":0,"docs":{},"p":{".":{"c":{":":{"6":{":":{"1":{"3":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"_":{"c":{"a":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"v":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"x":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}}},"title":{"root":{"df":0,"docs":{}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});