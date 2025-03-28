---
layout: page
title: 大模型理论
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
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .tutorial-header p {
    color: #666;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .tutorial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 50px;
  }
  
  .tutorial-card {
    background: white;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
  }
  
  .tutorial-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    border-color: var(--primary-color);
  }
  
  .tutorial-icon {
    font-size: 2.2rem;
    margin-bottom: 15px;
    color: var(--primary-color);
  }
  
  .tutorial-card h3 {
    color: var(--primary-color);
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  .tutorial-card p {
    color: #666;
    margin-bottom: 20px;
    flex-grow: 1;
    font-size: 0.95rem;
  }
  
  .tutorial-btn {
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 8px 20px;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s;
    font-weight: 500;
    text-align: center;
    font-size: 0.95rem;
  }
  
  .tutorial-btn:hover {
    background: darken(var(--primary-color), 10%);
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(0,0,0,0.12);
    color: white;
  }
  
  .tutorial-path {
    margin-top: 50px;
  }
  
  .tutorial-path h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 30px;
    font-size: 1.5rem;
    position: relative;
    padding-bottom: 10px;
  }
  
  .tutorial-path h2:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    background: var(--primary-color);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
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
    width: 2px;
    background: #eee;
  }
  
  .path-item {
    position: relative;
    margin-bottom: 25px;
    padding-left: 60px;
  }
  
  .path-number {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    z-index: 1;
  }
  
  .path-content {
    background: white;
    padding: 15px 20px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    border: 1px solid #eee;
  }
  
  .path-content h3 {
    margin-top: 0;
    margin-bottom: 8px;
    color: var(--primary-color);
    font-size: 1.1rem;
  }
  
  .path-content p {
    margin: 0;
    color: #666;
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    .tutorial-grid {
      grid-template-columns: 1fr;
    }
    
    .tutorial-header h1 {
      font-size: 1.7rem;
    }
    
    .tutorial-header p {
      font-size: 1rem;
    }
    
    .path-item {
      padding-left: 50px;
    }
    
    .path-number {
      width: 32px;
      height: 32px;
      font-size: 1rem;
    }
  }
</style> 