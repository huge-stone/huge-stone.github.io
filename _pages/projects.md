---
layout: page
title: 项目实践
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
    margin-bottom: 30px;
  }
  
  .projects-header h1 {
    color: var(--primary-color);
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .projects-header p {
    color: #666;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .projects-filter {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 25px;
  }
  
  .filter-btn {
    background: #f8f9fa;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    color: #444;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s;
    border: 1px solid #eee;
  }
  
  .filter-btn:hover {
    background: #f1f1f1;
    transform: translateY(-2px);
  }
  
  .filter-btn.active {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .project-card {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid #eee;
  }
  
  .project-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    border-color: var(--primary-color);
  }
  
  .project-image {
    height: 180px;
    background-size: cover;
    background-position: center;
  }
  
  .project-card h3 {
    padding: 15px 15px 10px;
    margin: 0;
    color: var(--primary-color);
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  .project-tags {
    padding: 0 15px 10px;
    display: flex;
    gap: 8px;
  }
  
  .project-tags span {
    background: #f8f9fa;
    color: var(--text-color);
    padding: 3px 8px;
    border-radius: 15px;
    font-size: 0.8rem;
  }
  
  .project-card p {
    padding: 0 15px 15px;
    margin: 0;
    color: #666;
    font-size: 0.95rem;
    flex-grow: 1;
  }
  
  .project-btn {
    margin: 0 15px 15px;
    padding: 8px 0;
    text-align: center;
    background: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s;
  }
  
  .project-btn:hover {
    background: darken(var(--primary-color), 10%);
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(0,0,0,0.12);
    color: white;
  }
  
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
    
    .projects-header h1 {
      font-size: 1.7rem;
    }
    
    .projects-header p {
      font-size: 1rem;
    }
    
    .filter-btn {
      padding: 6px 12px;
      font-size: 0.85rem;
    }
    
    .project-card h3 {
      font-size: 1.1rem;
    }
  }
</style> 