/**
 * 代码展示功能
 * 此脚本增强了代码块的展示效果，添加了行号和复制功能
 */

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 初始化代码展示功能
  setTimeout(initCodeShowcase, 300);
});

// 初始化代码展示功能
function initCodeShowcase() {
  // 确保highlight.js已经应用
  if (typeof hljs !== 'undefined') {
    console.log('初始化代码展示功能');
    try {
      // 增强所有代码块
      enhanceAllCodeBlocks();
      
      // 注册复制按钮事件监听器
      document.addEventListener('click', function(event) {
        if (event.target.classList.contains('copy-btn') || 
            event.target.parentElement.classList.contains('copy-btn')) {
          const btn = event.target.classList.contains('copy-btn') ? 
                      event.target : event.target.parentElement;
          const codeBlock = btn.closest('.code-showcase').querySelector('pre code');
          
          if (codeBlock) {
            copyTextToClipboard(codeBlock.textContent, btn);
          }
        }
      });
      
      // 确保样式正确应用
      setTimeout(enforceStyles, 200);
    } catch (error) {
      console.error('代码展示功能初始化错误:', error);
    }
  } else {
    console.warn('highlight.js未加载，等待加载完成');
    // 如果highlight.js还未加载，再次尝试
    setTimeout(initCodeShowcase, 300);
  }
}

// 确保样式正确应用
function enforceStyles() {
  console.log('强制应用自定义样式');
  
  // 对所有代码展示区应用样式
  document.querySelectorAll('.code-showcase').forEach(showcase => {
    // 设置展示区容器样式
    showcase.style.cssText = "border: 1px solid #30363d !important; border-radius: 6px !important; overflow: hidden !important; margin: 1.5em 0 !important;";
    
    // 设置代码头部样式
    const header = showcase.querySelector('.code-header');
    if (header) {
      header.style.cssText = "background-color: #161b22 !important; border-bottom: 1px solid #30363d !important; padding: 8px 16px !important; color: #c9d1d9 !important;";
    }
    
    // 设置代码体区域样式
    const codeBody = showcase.querySelector('.code-body');
    if (codeBody) {
      codeBody.style.cssText = "background-color: #1a1f29 !important; overflow-x: auto !important; margin: 0 !important;";
      
      // 设置pre标签样式
      const pre = codeBody.querySelector('pre');
      if (pre) {
        pre.style.cssText = "background-color: #1a1f29 !important; color: #ffffff !important; padding: 16px !important; margin: 0 !important; overflow-x: auto !important; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace !important;";
        
        // 设置code标签样式
        const code = pre.querySelector('code');
        if (code) {
          code.style.cssText = "background-color: transparent !important; color: #ffffff !important; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace !important; padding: 0 !important;";
          
          // 处理代码高亮元素
          code.querySelectorAll('span').forEach(span => {
            applyHighlightStyle(span);
          });
        }
      }
    }
  });
}

// 应用高亮样式到元素
function applyHighlightStyle(span) {
  // 根据类名应用不同的样式
  if (span.className.includes('hljs-keyword')) {
    span.style.cssText = "color: #ff79c6 !important; font-weight: bold !important;";
  } else if (span.className.includes('hljs-string')) {
    span.style.cssText = "color: #f1fa8c !important;";
  } else if (span.className.includes('hljs-number')) {
    span.style.cssText = "color: #bd93f9 !important;";
  } else if (span.className.includes('hljs-comment')) {
    span.style.cssText = "color: #8899bb !important; font-style: italic !important;";
  } else if (span.className.includes('hljs-title') || span.className.includes('hljs-function')) {
    span.style.cssText = "color: #50fa7b !important; font-weight: bold !important;";
  } else if (span.className.includes('hljs-built_in')) {
    span.style.cssText = "color: #8be9fd !important; font-weight: bold !important;";
  } else {
    span.style.cssText = "color: #f8f8f2 !important;";
  }
}

// 增强所有代码块
function enhanceAllCodeBlocks() {
  // 查找所有代码块
  const codeBlocks = document.querySelectorAll('pre code');
  console.log(`找到 ${codeBlocks.length} 个代码块`);
  
  codeBlocks.forEach(function(codeBlock, index) {
    // 如果代码块已经被处理过，跳过
    if (codeBlock.closest('.code-showcase')) {
      return;
    }
    
    try {
      const pre = codeBlock.parentNode;
      if (!pre) return;
      
      // 创建代码展示容器
      const showcase = document.createElement('div');
      showcase.className = 'code-showcase';
      showcase.id = `code-showcase-${index}`;
      
      // 创建代码头部
      const header = document.createElement('div');
      header.className = 'code-header';
      
      // 识别语言类型
      let language = '';
      codeBlock.className.split(' ').forEach(className => {
        if (className.startsWith('language-')) {
          language = className.replace('language-', '');
        }
      });
      
      // 设置语言标签
      const langTag = document.createElement('span');
      langTag.className = 'code-lang';
      langTag.textContent = language || 'text';
      header.appendChild(langTag);
      
      // 创建控制按钮容器
      const controls = document.createElement('div');
      controls.className = 'code-controls';
      
      // 添加复制按钮
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.title = '复制代码';
      copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
      controls.appendChild(copyBtn);
      
      // 添加控制按钮到头部
      header.appendChild(controls);
      
      // 创建代码体容器
      const codeBody = document.createElement('div');
      codeBody.className = 'code-body';
      
      // 获取原始的pre和code标签
      const originalPre = pre.cloneNode(true);
      
      // 添加元素到展示容器
      codeBody.appendChild(originalPre);
      showcase.appendChild(header);
      showcase.appendChild(codeBody);
      
      // 替换原始的pre标签
      pre.parentNode.replaceChild(showcase, pre);
      
      console.log(`成功增强代码块 #${index}`);
    } catch (error) {
      console.error(`增强代码块 #${index} 时出错:`, error);
    }
  });
}

// 复制文本到剪贴板
function copyTextToClipboard(text, button) {
  // 创建临时文本区域
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'absolute';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  
  try {
    // 选择并复制文本
    textArea.select();
    const successful = document.execCommand('copy');
    
    // 设置反馈状态
    if (successful) {
      // 原图标
      const originalHTML = button.innerHTML;
      
      // 显示成功图标
      button.innerHTML = '<i class="fas fa-check"></i>';
      button.classList.add('copy-success');
      
      // 2秒后恢复原状态
      setTimeout(function() {
        button.innerHTML = originalHTML;
        button.classList.remove('copy-success');
      }, 2000);
    }
  } catch (err) {
    console.error('复制失败:', err);
  }
  
  // 移除临时文本区域
  document.body.removeChild(textArea);
}

// 监听页面加载完成，确保应用样式
window.addEventListener('load', function() {
  // 确保代码块被处理
  setTimeout(function() {
    if (document.querySelectorAll('.code-showcase').length === 0) {
      console.log('页面加载后重新初始化代码展示功能');
      initCodeShowcase();
    }
    
    // 确保样式正确应用
    enforceStyles();
    
    // 额外的检查，确保样式持续应用
    setInterval(enforceStyles, 2000);
  }, 500);
}); 