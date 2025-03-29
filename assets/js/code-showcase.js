/**
 * 代码展示功能
 * 包括代码高亮、行号显示和复制功能
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log("代码展示功能已加载");
  
  // 立即对所有pre元素应用样式增强
  enhanceCodeBlocks();
  
  // 初始化所有代码展示区
  setTimeout(function() {
    initCodeShowcases();
    initCopyButtons();
  }, 500);
});

/**
 * 初始化所有代码展示区
 */
function initCodeShowcases() {
  // 查找所有带有.code-showcase类的元素
  const showcases = document.querySelectorAll('.code-showcase:not(.initialized)');
  
  showcases.forEach(showcase => {
    // 标记为已初始化
    showcase.classList.add('initialized');
    
    // 获取展示区内的pre元素
    const preElement = showcase.querySelector('pre');
    if (!preElement) return;
    
    // 如果需要行号，添加行号
    if (showcase.dataset.lineNumbers === 'true') {
      addLineNumbers(preElement);
    }
  });
}

/**
 * 为pre元素添加行号
 */
function addLineNumbers(preElement) {
  // 添加带行号的类
  preElement.classList.add('with-line-numbers');
  
  // 获取代码内容
  const codeElement = preElement.querySelector('code') || preElement;
  const codeText = codeElement.textContent;
  
  // 计算行数
  const lines = codeText.split('\n');
  const lineCount = lines.length;
  
  // 创建行号容器
  const lineNumbers = document.createElement('div');
  lineNumbers.className = 'line-numbers';
  
  // 生成行号
  let lineNumbersHTML = '';
  for (let i = 1; i <= lineCount; i++) {
    lineNumbersHTML += i + '\n';
  }
  
  lineNumbers.textContent = lineNumbersHTML;
  
  // 添加到pre前面
  preElement.parentNode.insertBefore(lineNumbers, preElement);
}

/**
 * 初始化复制按钮功能
 */
function initCopyButtons() {
  document.querySelectorAll('.code-body').forEach(codeBody => {
    // 如果已经有复制按钮，跳过
    if (codeBody.querySelector('.copy-button')) return;
    
    // 创建复制按钮
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = '复制';
    
    // 添加复制功能
    copyButton.addEventListener('click', function() {
      // 获取代码内容
      const preElement = codeBody.querySelector('pre');
      const codeElement = preElement.querySelector('code') || preElement;
      const codeText = codeElement.textContent;
      
      // 复制到剪贴板
      navigator.clipboard.writeText(codeText).then(() => {
        // 复制成功，更改按钮文本
        copyButton.textContent = '已复制!';
        
        // 2秒后恢复
        setTimeout(() => {
          copyButton.textContent = '复制';
        }, 2000);
      });
    });
    
    // 添加到代码主体
    codeBody.appendChild(copyButton);
  });
}

/**
 * 为页面上的.code-showcase标记添加完整的代码展示结构
 * 这个函数可以在页面加载后自动处理没有完整结构的代码块
 */
function enhanceCodeBlocks() {
  // 查找所有未经处理的代码块
  document.querySelectorAll('pre:not(.enhanced)').forEach(pre => {
    // 标记为已处理
    pre.classList.add('enhanced');
    
    // 创建代码展示容器
    const showcase = document.createElement('div');
    showcase.className = 'code-showcase';
    
    // 获取语言信息
    const code = pre.querySelector('code');
    let language = '';
    if (code && code.className) {
      const match = code.className.match(/language-(\w+)/);
      if (match) language = match[1];
    }
    
    // 创建标题栏
    const header = document.createElement('div');
    header.className = 'code-header';
    
    const title = document.createElement('div');
    title.className = 'code-title';
    title.textContent = language || '代码';
    
    const controls = document.createElement('div');
    controls.className = 'code-controls';
    controls.innerHTML = `
      <div class="code-dot dot-red"></div>
      <div class="code-dot dot-yellow"></div>
      <div class="code-dot dot-green"></div>
    `;
    
    header.appendChild(title);
    header.appendChild(controls);
    
    // 创建代码主体
    const body = document.createElement('div');
    body.className = 'code-body';
    
    // 将原始pre移入新结构
    const parent = pre.parentNode;
    body.appendChild(pre);
    
    showcase.appendChild(header);
    showcase.appendChild(body);
    
    // 替换原始pre
    parent.appendChild(showcase);
    
    // 初始化该展示区
    initCodeShowcases();
    initCopyButtons();
  });
} 