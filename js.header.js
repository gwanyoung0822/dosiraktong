window.addEventListener("load",function(){
    // 헤더를 스크롤 할떄 헤더 변경 기능
    const header = this.document.querySelector(".header")
    let scy = 0
    this.window.addEventListener("scroll",function(){
        scy = this.window.document.documentElement.scrollTop
        if(scy > 0){
            header.classList.add("active")
        }
        else
        {header.classList.remove("active")}

    })
})