document.querySelectorAll(".owo").forEach(element => {
    element.addEventListener("click", function () {
        this.style.animation = "none"; // 移除动画
        this.style.webkitTextStroke = "1px rgba(255, 255, 255, 1)"; // 保持点亮状态
    });
});