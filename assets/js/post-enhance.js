/**
 * 博客文章增强功能
 * 包括自动目录生成、阅读时间估算和返回顶部按钮
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log("博客文章增强功能已加载");
  
  // 初始化目录
  generateTableOfContents();
  
  // 计算阅读时间
  calculateReadingTime();
  
  // 添加返回顶部按钮
  addBackToTopButton();
});

/**
 * 生成文章目录
 */
function generateTableOfContents() {
  // 检查是否是文章页面
  const articleBody = document.querySelector('.post-content');
  if (!articleBody) return;
  
  // 查找文章中的所有标题标签 (h2, h3)
  const headings = articleBody.querySelectorAll('h2, h3');
  if (headings.length === 0) return;
  
  // 创建目录容器
  const tocContainer = document.createElement('div');
  tocContainer.className = 'table-of-contents';
  tocContainer.innerHTML = '<h4>目录</h4>';
  
  // 创建目录列表
  const tocList = document.createElement('ul');
  tocList.className = 'toc-list';
  
  // 为每个标题创建目录项
  headings.forEach(function(heading, index) {
    // 添加ID以便链接
    if (!heading.id) {
      heading.id = 'heading-' + index;
    }
    
    // 创建目录项
    const listItem = document.createElement('li');
    listItem.className = 'toc-item toc-' + heading.tagName.toLowerCase();
    
    const link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent;
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#' + heading.id).scrollIntoView({
        behavior: 'smooth'
      });
    });
    
    listItem.appendChild(link);
    tocList.appendChild(listItem);
  });
  
  tocContainer.appendChild(tocList);
  
  // 查找要插入目录的位置 (文章开头)
  const articleHeader = document.querySelector('.post-header');
  if (articleHeader && articleHeader.nextElementSibling) {
    articleBody.insertBefore(tocContainer, articleBody.firstChild);
  }
  
  // 添加目录样式
  const tocStyle = document.createElement('style');
  tocStyle.textContent = `
    .table-of-contents {
      margin: 20px 0 30px;
      padding: 15px 20px;
      background: var(--light-bg);
      border-radius: 8px;
      border-left: 3px solid var(--primary-color);
    }
    
    .table-of-contents h4 {
      margin-top: 0;
      margin-bottom: 10px;
      color: var(--primary-color);
      font-size: 1.1rem;
    }
    
    .toc-list {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    
    .toc-item {
      margin-bottom: 8px;
      line-height: 1.3;
    }
    
    .toc-h3 {
      padding-left: 20px;
      font-size: 0.95em;
    }
    
    .toc-item a {
      color: var(--text-color);
      text-decoration: none;
      transition: color 0.2s;
      display: block;
      padding: 3px 0;
    }
    
    .toc-item a:hover {
      color: var(--primary-color);
    }
    
    @media (max-width: 768px) {
      .table-of-contents {
        padding: 12px 15px;
      }
    }
  `;
  document.head.appendChild(tocStyle);
}

/**
 * 计算阅读时间
 */
function calculateReadingTime() {
  // 检查是否是文章页面
  const articleBody = document.querySelector('.post-content');
  if (!articleBody) return;
  
  // 获取文章文本内容
  const text = articleBody.textContent;
  
  // 计算字数
  const wordCount = text.trim().replace(/\s+/g, ' ').split(' ').length;
  
  // 中文内容特殊处理
  const chineseCount = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  
  // 估算阅读时间（中文按照300字/分钟，英文按照200词/分钟）
  const chineseTime = chineseCount / 300;
  const englishTime = (wordCount - chineseCount) / 200;
  let readingTime = Math.ceil(chineseTime + englishTime);
  
  // 确保至少显示1分钟
  readingTime = Math.max(1, readingTime);
  
  // 创建阅读时间元素
  const readingTimeEl = document.createElement('span');
  readingTimeEl.className = 'reading-time';
  readingTimeEl.innerHTML = `<i class="far fa-clock"></i> 阅读时间: ${readingTime} 分钟`;
  
  // 插入到meta信息中
  const postMeta = document.querySelector('.post-meta');
  if (postMeta) {
    postMeta.appendChild(document.createElement('br'));
    postMeta.appendChild(readingTimeEl);
  }
}

/**
 * 添加返回顶部按钮
 */
function addBackToTopButton() {
  // 创建按钮
  const backToTopButton = document.createElement('button');
  backToTopButton.className = 'back-to-top';
  backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopButton.setAttribute('aria-label', '返回顶部');
  backToTopButton.setAttribute('title', '返回顶部');
  
  // 添加到页面
  document.body.appendChild(backToTopButton);
  
  // 监听滚动事件
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  // 添加点击事件
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // 添加样式
  const backToTopStyle = document.createElement('style');
  backToTopStyle.textContent = `
    .back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .back-to-top.show {
      opacity: 1;
      visibility: visible;
    }
    
    .back-to-top:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }
  `;
  document.head.appendChild(backToTopStyle);
} 