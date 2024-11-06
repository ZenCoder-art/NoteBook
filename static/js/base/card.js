// 检查当前页面的 URL 是否匹配目标页面
if (window.location.href.includes('/docs/classify')) {
    // 等待页面加载完成
    window.onload = function () {
        // 查找所有具有 title 和 description 属性的 <a> 标签
        const links = document.querySelectorAll('a[title][description]');

        // 遍历每个 <a> 标签
        links.forEach(link => {
            // 获取 <a> 标签的属性值
            const title = link.getAttribute('title');
            const href = link.getAttribute('href');
            const description = link.getAttribute('description');

            // 创建新的结构
            const wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');

            const card = document.createElement('a');
            card.classList.add('card');
            card.href = href;
            card.target = '_self'; // 设置 target="_blank" 打开链接

            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');

            const cardTitle = document.createElement('div');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = title; // 设置标题

            const cardDescription = document.createElement('div');
            cardDescription.classList.add('card-description');
            cardDescription.textContent = description; // 设置描述

            cardContent.appendChild(cardTitle);
            cardContent.appendChild(cardDescription);
            card.appendChild(cardContent);
            wrapper.appendChild(card);

            link.parentNode.replaceChild(wrapper, link);
        });
    };
}