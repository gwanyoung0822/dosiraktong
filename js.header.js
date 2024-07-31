window.addEventListener("load",function(){
    // 헤더를 스크롤 할떄 헤더 변경 기능
    const header = this.document.querySelector(".header")
    // 모바일 바
    const mbt = this.document.querySelector(".mbt")
    let scy = 0
    this.window.addEventListener("scroll",function(){
        scy = this.window.document.documentElement.scrollTop
        if(scy > 0){
            header.classList.add("active")
        }
        else
        {header.classList.remove("active")}

    })
    // 모바일 버튼
    // 모바일 바 클릭했을때
    const navMb = this.document.querySelector(".nav-mb")
    mbt.addEventListener("click", function(){
    const htmlRoot = document.querySelector("html")
        // 현재 ani클래스가 있는지 없는지 확인
        const state = this.classList.contains("ani")
        if(state){
            this.classList.remove("ani")
            navMb.classList.remove("active")
            htmlRoot.classList.remove("active")
        }
        else{
            this.classList.add("ani")
            navMb.classList.add("active")
            htmlRoot.classList.add("active")
        }
    })
    // 반응형일때
    this.window.addEventListener("resize", function () {
        let windowW = this.window.innerWidth;
        if (windowW > 1024) {
            mbt.classList.remove("ani");
            navMb.classList.remove("active");
            htmlRoot.classList.remove("active");
            if (scy > 0) {
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }
        }
    });
})