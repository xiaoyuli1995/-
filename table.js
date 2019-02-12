//构造函数
function Tab(btn_selector , content_selector){
    //写属性，显示当前下标
    this.index=0;
    this.btns=document.querySelectorAll(".button-wrap button");
    this.contents=document.querySelectorAll(".content-box")
}
//初始化功能
Tab.prototype.init=function(){
    //调用最核心的方法
    this.btns=Array.from(this.btns);
    this.contents=Array.from(this.contents)
    this.bindEvent()

}
//绑定时间的功能
Tab.prototype.bindEvent=function(){
     this.btns.forEach((item,index)=>{
         item.addEventListener("click",this.changeIndex.bind(this,index));
         item.addEventListener("click",this.changeClass.bind(this))
     })
}
//改变下标的功能
Tab.prototype.changeIndex=function(index){
      this.index=index
}
//改变类名的功能
Tab.prototype.changeClass=function(){
    //先清空class
    this.contents.forEach((item,index)=>{
        item.className=item.className.replace(/\sactive/g,"");
        this.btns[index].className=""

    })
    //开始添加类名
    this.contents[this.index].className+=" active";
    this.btns[this.index].className+=" active"

}
var tab=new Tab();
tab.init()