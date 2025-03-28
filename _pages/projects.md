---
layout: page
title: 案例项目
permalink: /projects/
---

<div class="projects-header">
  <h1>大模型实践案例</h1>
  <p>精选大模型实际应用案例和开源项目</p>
</div>

<div class="projects-filter">
  <button class="filter-btn active" data-filter="all">全部</button>
  <button class="filter-btn" data-filter="rag">RAG应用</button>
  <button class="filter-btn" data-filter="agent">智能Agent</button>
  <button class="filter-btn" data-filter="finetune">模型微调</button>
  <button class="filter-btn" data-filter="multimodal">多模态</button>
</div>

<div class="projects-grid">
  <div class="project-card" data-category="rag">
    <div class="project-image" style="background-image: url('https://via.placeholder.com/300x180?text=智能文档助手')"></div>
    <h3>智能文档助手</h3>
    <div class="project-tags">
      <span>RAG</span>
      <span>向量检索</span>
    </div>
    <p>基于RAG架构的企业文档智能问答系统，支持PDF、Word、Excel等多种格式文档的知识库构建与问答</p>
    <a href="#" class="project-btn">查看详情</a>
  </div>
  
  <div class="project-card" data-category="agent">
    <div class="project-image" style="background-image: url('https://via.placeholder.com/300x180?text=自动化营销助手')"></div>
    <h3>自动化营销助手</h3>
    <div class="project-tags">
      <span>Agent</span>
      <span>自动化</span>
    </div>
    <p>具有多工具调用能力的营销内容创作与分发助手，可自动生成、优化和发布营销内容</p>
    <a href="#" class="project-btn">查看详情</a>
  </div>
  
  <div class="project-card" data-category="finetune">
    <div class="project-image" style="background-image: url('https://via.placeholder.com/300x180?text=垂直领域助手')"></div>
    <h3>垂直领域助手</h3>
    <div class="project-tags">
      <span>LoRA微调</span>
      <span>专业领域</span>
    </div>
    <p>针对医疗、法律等专业领域定制的大模型助手，通过LoRA微调提升专业能力</p>
    <a href="#" class="project-btn">查看详情</a>
  </div>
  
  <div class="project-card" data-category="multimodal">
    <div class="project-image" style="background-image: url('https://via.placeholder.com/300x180?text=智能图像分析')"></div>
    <h3>智能图像分析</h3>
    <div class="project-tags">
      <span>多模态</span>
      <span>图像处理</span>
    </div>
    <p>结合视觉和语言能力的多模态应用，可进行图像识别、描述和内容分析</p>
    <a href="#" class="project-btn">查看详情</a>
  </div>
  
  <div class="project-card" data-category="rag">
    <div class="project-image" style="background-image: url('https://via.placeholder.com/300x180?text=个人知识库')"></div>
    <h3>个人知识库</h3>
    <div class="project-tags">
      <span>RAG</span>
      <span>个人助手</span>
    </div>
    <p>打造个人专属知识库与学习助手，支持笔记、网页和书籍内容的智能检索与总结</p>
    <a href="#" class="project-btn">查看详情</a>
  </div>
  
  <div class="project-card" data-category="agent">
    <div class="project-image" style="background-image: url('https://via.placeholder.com/300x180?text=数据分析Agent')"></div>
    <h3>数据分析Agent</h3>
    <div class="project-tags">
      <span>Agent</span>
      <span>数据处理</span>
    </div>
    <p>能够自动执行数据清洗、分析和可视化的智能助手，支持SQL查询和Python数据处理</p>
    <a href="#" class="project-btn">查看详情</a>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
</script>

<style>
  .projects-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .projects-header h1 {
    color: var(--primary-color);
    font-size: 2.2em;
    margin-bottom: 10px;
  }
  
  .projects-header p {
    color: #666;
    font-size: 1.2em;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .projects-filter {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
  }
  
  .filter-btn {
    background: #f0f7ff;
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    color: #444;
    cursor: pointer;
    font-size: 0.95em;
    transition: all 0.3s;
  }
  
  .filter-btn:hover {
    background: #e0f0ff;
  }
  
  .filter-btn.active {
    background: var(--primary-color);
    color: white;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
  }
  
  .project-card {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
  
  .project-image {
    height: 180px;
    background-size: cover;
    background-position: center;
  }
  
  .project-card h3 {
    padding: 20px 20px 10px;
    margin: 0;
    color: var(--primary-color);
    font-size: 1.3em;
  }
  
  .project-tags {
    padding: 0 20px 10px;
    display: flex;
    gap: 8px;
  }
  
  .project-tags span {
    background: #f0f7ff;
    padding: 3px 10px;
    border-radius: 15px;
    font-size: 0.8em;
    color: var(--primary-color);
  }
  
  .project-card p {
    padding: 0 20px;
    margin: 0 0 20px;
    color: #666;
    flex-grow: 1;
  }
  
  .project-btn {
    margin: 0 20px 20px;
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 8px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s;
    text-align: center;
  }
  
  .project-btn:hover {
    background: darken(var(--primary-color), 10%);
  }
  
  @media (max-width: 600px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
    
    .filter-btn {
      padding: 6px 12px;
      font-size: 0.9em;
    }
  }
  
  @media screen and (max-width: 767px) {
    .projects-grid {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
    
    .projects-header h1 {
      font-size: 1.8em;
    }
    
    .projects-header p {
      font-size: 1em;
    }
    
    .project-image {
      height: 160px;
    }
    
    .project-card h3 {
      font-size: 1.2em;
    }
    
    .project-btn {
      width: 100%;
      text-align: center;
      padding: 10px;
    }
  }
  
  @media screen and (max-width: 480px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
    
    .filter-btn {
      padding: 8px 12px;
      font-size: 0.9em;
      border-radius: 30px;
    }
    
    .projects-filter {
      padding: 0 10px;
    }
    
    .project-image {
      height: 140px;
    }
    
    .project-tags {
      flex-wrap: wrap;
    }
    
    .project-tags span {
      margin-top: 5px;
    }
    
    /* 移动端触摸优化 */
    .project-card {
      -webkit-tap-highlight-color: transparent;
    }
    
    .project-btn, .filter-btn {
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      padding: 12px 20px;
    }
  }
</style> 