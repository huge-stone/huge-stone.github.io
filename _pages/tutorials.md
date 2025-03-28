---
layout: page
title: 入门实战
permalink: /tutorials/
---

<div class="tutorial-header">
  <h1>大模型入门实战教程</h1>
  <p>从零开始学习大模型应用开发的实战教程</p>
</div>

<div class="tutorial-grid">
  <div class="tutorial-card">
    <div class="tutorial-icon">📝</div>
    <h3>提示工程入门</h3>
    <p>学习如何设计有效的提示词，掌握提示工程的核心技巧</p>
    <a href="#" class="tutorial-btn">开始学习</a>
  </div>
  
  <div class="tutorial-card">
    <div class="tutorial-icon">🔍</div>
    <h3>RAG 实战指南</h3>
    <p>构建基于检索增强生成的智能问答系统</p>
    <a href="#" class="tutorial-btn">开始学习</a>
  </div>
  
  <div class="tutorial-card">
    <div class="tutorial-icon">🧠</div>
    <h3>大模型微调实践</h3>
    <p>使用LoRA等技术定制化你的专属模型</p>
    <a href="#" class="tutorial-btn">开始学习</a>
  </div>
  
  <div class="tutorial-card">
    <div class="tutorial-icon">🤖</div>
    <h3>Agent 开发教程</h3>
    <p>打造具有自主行动能力的AI助手</p>
    <a href="#" class="tutorial-btn">开始学习</a>
  </div>
  
  <div class="tutorial-card">
    <div class="tutorial-icon">🚀</div>
    <h3>模型部署优化</h3>
    <p>大模型低成本高效部署与推理加速</p>
    <a href="#" class="tutorial-btn">开始学习</a>
  </div>
  
  <div class="tutorial-card">
    <div class="tutorial-icon">📊</div>
    <h3>评估与优化</h3>
    <p>如何评估和持续优化大模型应用</p>
    <a href="#" class="tutorial-btn">开始学习</a>
  </div>
</div>

<div class="tutorial-path">
  <h2>学习路径推荐</h2>
  <div class="path-timeline">
    <div class="path-item">
      <div class="path-number">1</div>
      <div class="path-content">
        <h3>基础入门</h3>
        <p>了解大模型原理，学习提示工程基础</p>
      </div>
    </div>
    
    <div class="path-item">
      <div class="path-number">2</div>
      <div class="path-content">
        <h3>应用开发</h3>
        <p>掌握RAG技术，构建知识库问答系统</p>
      </div>
    </div>
    
    <div class="path-item">
      <div class="path-number">3</div>
      <div class="path-content">
        <h3>定制优化</h3>
        <p>学习模型微调与部署优化技术</p>
      </div>
    </div>
    
    <div class="path-item">
      <div class="path-number">4</div>
      <div class="path-content">
        <h3>高级应用</h3>
        <p>开发智能Agent，构建复杂应用</p>
      </div>
    </div>
  </div>
</div>

<style>
  .tutorial-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .tutorial-header h1 {
    color: var(--primary-color);
    font-size: 2.2em;
    margin-bottom: 10px;
  }
  
  .tutorial-header p {
    color: #666;
    font-size: 1.2em;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .tutorial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    margin-bottom: 50px;
  }
  
  .tutorial-card {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
  }
  
  .tutorial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
  
  .tutorial-icon {
    font-size: 2.5em;
    margin-bottom: 15px;
  }
  
  .tutorial-card h3 {
    color: var(--primary-color);
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.3em;
  }
  
  .tutorial-card p {
    color: #666;
    margin-bottom: 20px;
    flex-grow: 1;
  }
  
  .tutorial-btn {
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 8px 20px;
    border-radius: 30px;
    text-decoration: none;
    transition: all 0.3s;
    font-weight: 500;
    text-align: center;
  }
  
  .tutorial-btn:hover {
    background: darken(var(--primary-color), 10%);
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(58, 123, 213, 0.3);
  }
  
  .tutorial-path {
    margin-top: 60px;
  }
  
  .tutorial-path h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 30px;
    font-size: 1.8em;
  }
  
  .path-timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .path-timeline:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    width: 3px;
    background: var(--primary-color);
  }
  
  .path-item {
    position: relative;
    margin-bottom: 30px;
    padding-left: 60px;
  }
  
  .path-number {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2em;
    z-index: 1;
  }
  
  .path-content {
    background: white;
    padding: 20px 25px;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  }
  
  .path-content h3 {
    margin-top: 0;
    color: var(--primary-color);
    margin-bottom: 10px;
  }
  
  .path-content p {
    margin-bottom: 0;
    color: #666;
  }
  
  @media screen and (max-width: 767px) {
    .tutorial-header h1 {
      font-size: 1.8em;
    }
    
    .tutorial-header p {
      font-size: 1em;
    }
    
    .tutorial-grid {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
    
    .tutorial-card {
      padding: 20px;
    }
    
    .tutorial-icon {
      font-size: 2.2em;
    }
    
    .path-timeline:before {
      left: 18px;
    }
    
    .path-item {
      padding-left: 55px;
    }
    
    .path-number {
      width: 36px;
      height: 36px;
    }
    
    .tutorial-btn {
      width: 100%;
      text-align: center;
      padding: 10px;
    }
    
    .path-content {
      padding: 15px 20px;
    }
  }
  
  @media screen and (max-width: 480px) {
    .tutorial-grid {
      grid-template-columns: 1fr;
    }
    
    .tutorial-card {
      padding: 15px;
    }
    
    .tutorial-card h3 {
      font-size: 1.2em;
    }
    
    .tutorial-icon {
      font-size: 2em;
      margin-bottom: 10px;
    }
    
    .tutorial-card p {
      font-size: 0.95em;
    }
    
    .tutorial-btn {
      padding: 10px 15px;
      font-size: 0.95em;
      border-radius: 25px;
    }
    
    .path-timeline:before {
      left: 15px;
      width: 2px;
    }
    
    .path-item {
      padding-left: 45px;
      margin-bottom: 25px;
    }
    
    .path-number {
      width: 30px;
      height: 30px;
      font-size: 1em;
    }
    
    .path-content {
      padding: 15px;
    }
    
    .path-content h3 {
      font-size: 1.1em;
    }
    
    .path-content p {
      font-size: 0.9em;
    }
    
    /* 触摸优化 */
    .tutorial-btn {
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    }
    
    /* 移动端上下页面空间优化 */
    .tutorial-path {
      margin-top: 40px;
      padding-bottom: 20px;
    }
  }
</style> 