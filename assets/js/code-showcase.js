/**
 * 代码展示功能 - 改进版
 */

// 等待页面和highlight.js完全加载
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM加载完成，等待页面资源加载");
  
  // 确保所有资源都加载完毕再运行代码
  if (document.readyState === 'complete') {
    initCodeShowcase();
  } else {
    window.addEventListener('load', function() {
      console.log("页面完全加载，初始化代码展示功能");
      initCodeShowcase();
    });
  }
});

/**
 * 初始化代码展示功能
 */
function initCodeShowcase() {
  // 添加自定义样式（确保样式先加载）
  addCustomStyles();
  
  // 确保highlight.js已经处理了代码块
  setTimeout(function() {
    console.log("处理代码块...");
    enhanceAllCodeBlocks();
    
    // 在highlight.js处理后，再次应用我们的样式，确保样式不被覆盖
    setTimeout(enforceStyles, 200);
  }, 1000); // 延长延迟确保highlight.js有足够时间处理代码
}

/**
 * 强制应用我们的样式，覆盖highlight.js的样式
 */
function enforceStyles() {
  console.log("强制应用自定义样式...");
  
  // 查找所有代码展示区域
  const showcases = document.querySelectorAll('.code-showcase');
  showcases.forEach(function(showcase) {
    // 找到代码区域
    const codeBody = showcase.querySelector('.code-body');
    if (codeBody) {
      // 重新应用背景颜色
      codeBody.style.backgroundColor = 'var(--dark-bg)';
      
      // 处理pre标签
      const pre = codeBody.querySelector('pre');
      if (pre) {
        pre.style.backgroundColor = 'var(--dark-bg)';
        pre.style.color = 'var(--code-text)';
        
        // 处理code标签
        const code = pre.querySelector('code');
        if (code) {
          code.style.backgroundColor = 'var(--dark-bg)';
          code.style.color = 'var(--code-text)';
          
          // 处理code内的所有span元素（highlight.js生成的）
          const spans = code.querySelectorAll('span');
          spans.forEach(function(span) {
            // 提高高亮文本的可见性
            if (span.className.includes('hljs-')) {
              span.style.fontWeight = 'bold';
            }
          });
        }
      }
    }
  });
  
  console.log("样式强制应用完成");
}

/**
 * 增强所有代码块
 */
function enhanceAllCodeBlocks() {
  // 查找所有代码块
  const preElements = document.querySelectorAll('pre');
  console.log("找到pre元素数量:", preElements.length);
  
  if (preElements.length === 0) {
    console.log("未找到pre元素，将在1秒后重试");
    setTimeout(enhanceAllCodeBlocks, 1000); // 如果没有找到，1秒后重试
    return;
  }
  
  let processedCount = 0;
  
  preElements.forEach(function(pre, index) {
    try {
      // 跳过已处理的代码块
      if (pre.parentNode && pre.parentNode.classList && pre.parentNode.classList.contains('code-body')) {
        console.log(`跳过已处理的pre元素 #${index}`);
        return;
      }
      
      const codeElement = pre.querySelector('code');
      if (!codeElement) {
        console.log(`pre元素 #${index} 没有code子元素，跳过`);
        return;
      }
      
      console.log(`处理代码块 #${index}`);
      
      // 获取语言信息
      let language = '';
      if (codeElement.className) {
        // 尝试从highlight.js的类中提取语言
        const hlMatch = codeElement.className.match(/language-(\w+)/) || codeElement.className.match(/hljs (\w+)/);
        if (hlMatch) language = hlMatch[1];
      }
      
      // 创建包装容器
      const wrapper = document.createElement('div');
      wrapper.className = 'code-showcase';
      wrapper.setAttribute('data-language', language || 'plaintext');
      
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
      codeBody.style.backgroundColor = 'var(--dark-bg)';
      
      // 添加复制按钮
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.textContent = '复制';
      copyButton.addEventListener('click', function(e) {
        e.preventDefault(); // 防止页面滚动
        e.stopPropagation(); // 阻止事件冒泡
        
        const text = codeElement.textContent;
        copyTextToClipboard(text, copyButton);
        
        return false;
      });
      
      // 重组DOM结构
      const parent = pre.parentNode;
      
      // 只有当父元素存在时才进行替换
      if (parent) {
        // 深度克隆pre元素以保留highlight.js的样式
        const preClone = pre.cloneNode(true);
        preClone.style.backgroundColor = 'var(--dark-bg)';
        
        // 确保code元素的背景色是透明的
        const codeClone = preClone.querySelector('code');
        if (codeClone) {
          codeClone.style.backgroundColor = 'transparent';
          codeClone.style.color = 'var(--code-text)';
        }
        
        // 构建新的结构
        wrapper.appendChild(header);
        codeBody.appendChild(preClone);
        codeBody.appendChild(copyButton);
        wrapper.appendChild(codeBody);
        
        // 替换原始元素
        parent.replaceChild(wrapper, pre);
        processedCount++;
        
        console.log(`代码块 #${index} 处理完成`);
      } else {
        console.error(`代码块 #${index} 没有父元素，无法处理`);
      }
    } catch (err) {
      console.error(`处理代码块 #${index} 时出错:`, err);
    }
  });
  
  console.log(`所有代码块处理完成，成功处理了 ${processedCount} 个代码块`);
  
  // 如果没有处理任何代码块，可能是DOM还没有完全准备好，再次尝试
  if (processedCount === 0 && preElements.length > 0) {
    console.log("没有处理任何代码块，1秒后再次尝试");
    setTimeout(enhanceAllCodeBlocks, 1000);
  }
}

/**
 * 复制文本到剪贴板
 */
function copyTextToClipboard(text, button) {
  // 使用现代剪贴板API复制文本
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(function() {
        showCopySuccess(button);
      })
      .catch(function(err) {
        console.error('复制失败 (Clipboard API):', err);
        fallbackCopy(text, button);
      });
  } else {
    fallbackCopy(text, button);
  }
}

/**
 * 回退的复制方法（使用document.execCommand）
 */
function fallbackCopy(text, button) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  
  try {
    const successful = document.execCommand('copy');
    showCopySuccess(button, successful);
  } catch (err) {
    console.error('复制失败 (execCommand):', err);
    button.textContent = '复制失败';
    setTimeout(function() {
      button.textContent = '复制';
    }, 2000);
  }
  
  document.body.removeChild(textarea);
}

/**
 * 显示复制成功的反馈
 */
function showCopySuccess(button, successful = true) {
  button.textContent = successful ? '已复制!' : '复制失败';
  button.classList.add(successful ? 'copy-success' : 'copy-error');
  
  setTimeout(function() {
    button.textContent = '复制';
    button.classList.remove('copy-success', 'copy-error');
  }, 2000);
}

/**
 * 添加自定义样式
 */
function addCustomStyles() {
  if (document.getElementById('code-showcase-styles')) return;
  
  const styleElement = document.createElement('style');
  styleElement.id = 'code-showcase-styles';
  styleElement.textContent = `
    /* 复制按钮的额外样式 */
    .copy-success {
      background: rgba(40, 167, 69, 0.3) !important;
    }
    
    .copy-error {
      background: rgba(220, 53, 69, 0.3) !important;
    }
    
    /* 确保代码块内的文本可以选择 */
    .code-body pre, .code-body code {
      user-select: text;
      background-color: var(--dark-bg) !important;
    }
    
    /* 确保复制按钮始终可见 */
    .copy-button {
      z-index: 10;
    }
    
    /* 添加转换效果 */
    .code-showcase {
      transition: all 0.3s ease;
    }
    
    /* 改进代码块内部样式 */
    .code-body pre {
      border-radius: 0 0 8px 8px !important;
      background-color: var(--dark-bg) !important;
    }
    
    /* 确保代码文本颜色 */
    .code-body pre code {
      color: var(--code-text) !important;
      background-color: transparent !important;
    }
    
    /* 确保span元素颜色正确 */
    .code-body pre code span {
      background-color: transparent !important;
    }
  `;
  
  document.head.appendChild(styleElement);
} 