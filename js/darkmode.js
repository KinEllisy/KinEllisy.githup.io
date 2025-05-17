document.addEventListener('DOMContentLoaded', () => {
    // 自动切换第三方插件
    const toggleDark = (isDark) => {
        document.body.classList.toggle('DarkMode', isDark);

        /* 适配 utterances 评论系统 */
        const utterances = document.querySelector('iframe.utterances-frame');
        if (utterances) {
            const theme = isDark ? 'github-dark' : 'github-light';
            utterances.contentWindow.postMessage({ type: 'set-theme', theme }, '*');
        }
    };

    // 初始化状态
    const savedMode = localStorage.getItem('darkMode');
    const isDark = savedMode ? savedMode === 'true' : true; // 默认强制夜间
    toggleDark(isDark);

    // 按钮事件
    document.getElementById('dark-toggle')?.addEventListener('click', () => {
        const isDarkNow = !document.body.classList.contains('DarkMode');
        localStorage.setItem('darkMode', isDarkNow);
        toggleDark(isDarkNow);

        // 图标切换
        const icon = document.getElementById('mode-icon');
        if (icon) icon.setAttribute('xlink:href', isDarkNow ? '#icon-sun' : '#icon-moon');
    });
});