(function(){
    "use strict";
    const tabs = document.querySelectorAll("#tabs >ul >li >a");

    tabs.forEach(tab => {
        tab.addEventListener("click", selectTtab);
    });

    function selectTtab(event){
        event.preventDefault();

        tabs.forEach(tab =>{
            tab.removeAttribute("class");
        });

        event.target.className = "active";

        const thisTab = event.target.getAttribute("href");
        const thisContent = document.querySelector(thisTab);

        const oldContent = document.querySelector(".visible");
        oldContent.className = "visuallyhidden";
        oldContent.addEventListener("transitionend", function(){
            oldContent.className = "hidden";
            thisContent.className = "visible visuallyhidden";
            setTimeout(function(){
            thisContent.classList.remove("visuallyhidden")
            },20);
        }, {capture:false, once:true, passive:false});
        
    }
})();