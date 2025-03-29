/**
 * 代码展示功能 - 简化版
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log("代码展示功能已加载");
  
  // 处理页面上所有代码块
  enhanceAllCodeBlocks();
});

/**
 * 增强所有代码块
 */
function enhanceAllCodeBlocks() {
  // 查找所有代码块
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(function(codeElement) {
    const pre = codeElement.parentNode;
    if (pre.classList.contains('enhanced')) return;
    
    // 标记为已处理
    pre.classList.add('enhanced');
    
    // 获取语言信息
    let language = '';
    if (codeElement.className) {
      const match = codeElement.className.match(/language-(\w+)/);
      if (match) language = match[1];
    }
    
    // 创建包装容器
    const wrapper = document.createElement('div');
    wrapper.className = 'code-showcase';
    
    // 创建标题栏
    const header = document.createElement('div');
    header.className = 'code-header';
    header.innerHTML = `
      <div class="code-title">${language || '代码'}</div>
      <div class="code-controls">
        <div class="code-dot dot-red"></div>
        <div class="code-dot dot-yellow"></div>
        <div class="code-dot dot-green"></div>
      </div>
    `;
    
    // 创建代码容器
    const codeBody = document.createElement('div');
    codeBody.className = 'code-body';
    
    // 添加复制按钮
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = '复制';
    copyButton.onclick = function() {
      const text = codeElement.textContent;
      
      // 使用临时textarea元素复制文本（兼容性更好）
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';  // 防止页面滚动
      document.body.appendChild(textarea);
      textarea.select();
      
      try {
        document.execCommand('copy');
        copyButton.textContent = '已复制!';
        setTimeout(function() {
          copyButton.textContent = '复制';
        }, 2000);
      } catch (err) {
        console.error('复制失败:', err);
        copyButton.textContent = '复制失败';
      }
      
      document.body.removeChild(textarea);
    };
    
    // 重组DOM结构
    const parent = pre.parentNode;
    parent.insertBefore(wrapper, pre);
    codeBody.appendChild(pre);
    codeBody.appendChild(copyButton);
    wrapper.appendChild(header);
    wrapper.appendChild(codeBody);
  });
} 