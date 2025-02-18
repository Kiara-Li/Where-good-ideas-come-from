let unlockedCount = 0; // 记录解锁的段落数
const totalTexts = 3; // 需要解锁的段落总数

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("trigger-word")) {
        let targetId = event.target.getAttribute("data-target");
        let targetElement = document.getElementById(targetId);
        let hintElement = document.getElementById("hint" + targetId.replace("text", ""));
        
        if (targetElement && targetElement.style.display !== "block") {
            targetElement.style.display = "block"; // 显示段落
            unlockedCount++; // 增加计数
        }
        if (hintElement) {
            hintElement.style.display = "block"; // 立即显示提示信息
        }

        // 当所有文本都解锁时，显示 Next Page 按钮
        if (unlockedCount === totalTexts) {
            document.getElementById("nextPage").style.display = "block";
        }
    }
});
