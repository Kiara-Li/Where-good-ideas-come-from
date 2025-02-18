
function showInfo(element, text, url) {
    let existingBox = element.nextElementSibling;

    // 获取当前单词的 data-index 值
    let originalIndex = element.getAttribute('data-index');

    // 如果已经存在 info-box，则删除它并恢复原来的 data-index
    if (existingBox && existingBox.classList.contains('info-box')) {
        existingBox.remove();
        element.setAttribute('data-index', originalIndex); // 恢复原数字
        return;
    }

    // 先恢复所有单词的 data-index，防止多个打开时混乱
    document.querySelectorAll('.word').forEach(word => {
        let index = word.getAttribute('data-index-original') || word.getAttribute('data-index');
        word.setAttribute('data-index', index);
    });

    // 创建新的 info-box
    let infoBox = document.createElement('div');
    infoBox.className = 'info-box show';
    
    // 创建一个链接，点击后跳转
    let link = document.createElement('a');
    link.href = url;  // 跳转链接
    link.target = '_blank'; // 在新标签页打开链接
    link.innerHTML = text;  // 展开显示的文本
    
    // 把链接添加到 info-box
    infoBox.appendChild(link);

    // 插入到 .word 下方
    element.parentNode.insertBefore(infoBox, element.nextSibling);

    // 把 data-index 改成 `>`
    element.setAttribute('data-index-original', originalIndex); // 记录原始值
    element.setAttribute('data-index', '>'); 
    
}
document.querySelectorAll(".word").forEach(word => {
    word.addEventListener("click", function() {
        this.classList.toggle("active");
    });
});
