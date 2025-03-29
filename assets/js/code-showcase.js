/**
 * 代码展示功能 - 改进版
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log("代码展示功能已加载");
  
  // 处理页面上所有代码块
  setTimeout(function() {
    enhanceAllCodeBlocks();
  }, 300); // 延迟300ms，确保所有DOM已经加载完成
});

/**
 * 增强所有代码块
 */
function enhanceAllCodeBlocks() {
  // 查找所有代码块
  const codeBlocks = document.querySelectorAll('pre code');
  console.log("找到代码块数量:", codeBlocks.length);
  
  if (codeBlocks.length === 0) {
    console.log("未找到代码块，将在1秒后重试");
    setTimeout(enhanceAllCodeBlocks, 1000); // 如果没有找到，1秒后重试
    return;
  }
  
  codeBlocks.forEach(function(codeElement, index) {
    const pre = codeElement.parentNode;
    
    // 跳过已处理的代码块
    if (pre.parentNode && pre.parentNode.classList && pre.parentNode.classList.contains('code-body')) {
      console.log("跳过已处理的代码块");
      return;
    }
    
    console.log("处理代码块", index);
    
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
    copyButton.onclick = function(e) {
      e.preventDefault(); // 防止页面滚动
      e.stopPropagation(); // 阻止事件冒泡
      
      const text = codeElement.textContent;
      
      // 使用现代剪贴板API复制文本
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
          .then(function() {
            copyButton.textContent = '已复制!';
            setTimeout(function() {
              copyButton.textContent = '复制';
            }, 2000);
          })
          .catch(function(err) {
            console.error('复制失败 (Clipboard API):', err);
            fallbackCopy();
          });
      } else {
        fallbackCopy();
      }
      
      // 回退复制方法
      function fallbackCopy() {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
          const successful = document.execCommand('copy');
          copyButton.textContent = successful ? '已复制!' : '复制失败';
          setTimeout(function() {
            copyButton.textContent = '复制';
          }, 2000);
        } catch (err) {
          console.error('复制失败 (execCommand):', err);
          copyButton.textContent = '复制失败';
        }
        
        document.body.removeChild(textarea);
      }
      
      return false;
    };
    
    try {
      // 重组DOM结构
      const parent = pre.parentNode;
      wrapper.appendChild(header);
      
      // 从原位置移除pre
      if (parent) {
        parent.replaceChild(wrapper, pre);
      }
      
      codeBody.appendChild(pre);
      codeBody.appendChild(copyButton);
      wrapper.appendChild(codeBody);
      
      console.log("代码块", index, "处理完成");
    } catch (err) {
      console.error("处理代码块时出错:", err);
    }
  });
  
  console.log("所有代码块处理完成");
}

// 添加自定义样式（如果需要的话）
function addCustomStyles() {
  if (document.getElementById('code-showcase-styles')) return;
  
  const styleElement = document.createElement('style');
  styleElement.id = 'code-showcase-styles';
  styleElement.textContent = `
    /* 代码展示区域样式 */
    .code-showcase {
      margin: 30px 0;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    /* 样式内容已包含在主CSS中，这里仅作为备份 */
  `;
  
  document.head.appendChild(styleElement);
} 