/**
 * 深色模式切换功能
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log("深色模式功能已加载");
  initDarkMode();
});

/**
 * 初始化深色模式
 */
function initDarkMode() {
  // 创建样式
  createDarkModeStyles();
  
  // 检查是否已存在切换按钮，避免重复创建
  if (!document.querySelector('.dark-mode-toggle')) {
    // 创建切换按钮
    createDarkModeToggle();
  }
  
  // 初始化模式
  setInitialMode();
  
  // 监听系统主题变化
  listenForSystemThemeChanges();
}

/**
 * 创建深色模式的CSS变量
 */
function createDarkModeStyles() {
  // 避免重复创建样式
  if (document.getElementById('dark-mode-styles')) return;
  
  const darkModeStyle = document.createElement('style');
  darkModeStyle.id = 'dark-mode-styles';
  darkModeStyle.textContent = `
    :root {
      --transition-time: 0.3s;
    }
    
    body.dark-mode {
      --primary-color: #6abf6e;
      --secondary-color: #81c784;
      --accent-color: #a5d6a7;
      --gradient-start: #1a1a1a;
      --gradient-end: #2d2d2d;
      --text-color: #e0e0e0;
      --text-light: #aaaaaa;
      --light-bg: #2d2d2d;
      --dark-bg: #121212;
      --border-color: #444444;
      --card-bg: #1f1f1f;
      --background-color: #121212;
      --card-shadow: 0 2px 10px rgba(0,0,0,0.2);
      --hover-shadow: 0 4px 15px rgba(0,0,0,0.3);
      --footer-bg: #1a1a1a;
      --code-bg: #2d2d2d;
    }
    
    body {
      transition: background-color var(--transition-time);
    }
    
    .dark-mode-toggle {
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background-color: var(--card-bg);
      color: var(--text-color);
      border: 1px solid var(--border-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      z-index: 1000;
      box-shadow: var(--card-shadow);
    }
    
    .dark-mode-toggle:hover {
      transform: translateY(-3px);
      box-shadow: var(--hover-shadow);
    }
    
    .dark-mode-toggle i {
      font-size: 1.2rem;
      transition: all 0.3s;
    }
    
    .dark-mode-toggle .icon-sun {
      display: none;
    }
    
    .dark-mode-toggle .icon-moon {
      display: block;
    }
    
    body.dark-mode .dark-mode-toggle .icon-sun {
      display: block;
    }
    
    body.dark-mode .dark-mode-toggle .icon-moon {
      display: none;
    }
    
    /* 在移动设备上调整位置 */
    @media (max-width: 768px) {
      .dark-mode-toggle {
        bottom: 70px;
        left: 15px;
        width: 36px;
        height: 36px;
      }
    }
  `;
  document.head.appendChild(darkModeStyle);
}

/**
 * 创建深色模式切换按钮
 */
function createDarkModeToggle() {
  const darkModeToggle = document.createElement('button');
  darkModeToggle.className = 'dark-mode-toggle';
  darkModeToggle.setAttribute('aria-label', '切换深色/浅色模式');
  darkModeToggle.setAttribute('title', '切换深色/浅色模式');
  darkModeToggle.innerHTML = `
    <i class="icon-sun fas fa-sun"></i>
    <i class="icon-moon fas fa-moon"></i>
  `;
  
  // 添加点击事件处理器
  darkModeToggle.addEventListener('click', toggleDarkMode);
  
  // 添加到页面
  document.body.appendChild(darkModeToggle);
  console.log("深色模式按钮已创建");
}

/**
 * 切换深色模式
 */
function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  console.log("深色模式状态：", isDarkMode ? "已启用" : "已禁用");
}

/**
 * 设置初始模式
 */
function setInitialMode() {
  // 检查本地存储中的偏好设置
  const savedMode = localStorage.getItem('darkMode');
  console.log("从本地存储读取深色模式设置:", savedMode);
  
  if (savedMode === 'enabled') {
    // 用户之前选择了深色模式
    document.body.classList.add('dark-mode');
    console.log("应用深色模式 (基于用户设置)");
  } else if (savedMode === 'disabled') {
    // 用户之前选择了浅色模式
    document.body.classList.remove('dark-mode');
    console.log("应用浅色模式 (基于用户设置)");
  } else {
    // 根据系统偏好设置
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
      document.body.classList.add('dark-mode');
      console.log("应用深色模式 (基于系统偏好)");
    } else {
      console.log("应用浅色模式 (基于系统偏好)");
    }
  }
}

/**
 * 监听系统主题变化
 */
function listenForSystemThemeChanges() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  // 检测系统主题变化
  mediaQuery.addEventListener('change', (e) => {
    // 只有当用户没有明确设置偏好时才根据系统主题切换
    if (!localStorage.getItem('darkMode')) {
      if (e.matches) {
        document.body.classList.add('dark-mode');
        console.log("系统主题变化: 切换到深色模式");
      } else {
        document.body.classList.remove('dark-mode');
        console.log("系统主题变化: 切换到浅色模式");
      }
    }
  });
} 