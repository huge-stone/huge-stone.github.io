---
layout: page
title: 技术专题
permalink: /tags/
---

<div class="tag-cloud">
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
    <a href="#{{ tag[0] }}" class="tag-item" style="font-size: {{ tag[1].size | times: 4 | plus: 80 }}%">
      {{ tag[0] }} <span>({{ tag[1].size }})</span>
    </a>
  {% endfor %}
</div>

<div class="tags-page">
  {% for tag in site.tags %}
    <h2 id="{{ tag[0] }}">{{ tag[0] }}</h2>
    <ul>
      {% for post in tag[1] %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <small>{{ post.date | date: "%Y-%m-%d" }}</small>
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>

<div class="tag-groups">
  <h2>大模型实践技术栈</h2>
  
  <div class="tag-group">
    <h3>核心技术</h3>
    <div class="tag-list">
      <a href="#Prompt设计">Prompt设计</a>
      <a href="#上下文窗口">上下文窗口</a>
      <a href="#RAG">RAG</a>
      <a href="#向量检索">向量检索</a>
      <a href="#Chain-of-Thought">Chain-of-Thought</a>
    </div>
  </div>
  
  <div class="tag-group">
    <h3>定制优化</h3>
    <div class="tag-list">
      <a href="#SFT">SFT</a>
      <a href="#LoRA">LoRA</a>
      <a href="#QLoRA">QLoRA</a>
      <a href="#DPO">DPO</a>
      <a href="#RLHF">RLHF</a>
      <a href="#PPO">PPO</a>
    </div>
  </div>
  
  <div class="tag-group">
    <h3>部署加速</h3>
    <div class="tag-list">
      <a href="#量化">量化</a>
      <a href="#KV-Cache">KV-Cache</a>
      <a href="#Flash-Attention">Flash-Attention</a>
      <a href="#vLLM">vLLM</a>
      <a href="#TensorRT">TensorRT</a>
      <a href="#推理优化">推理优化</a>
    </div>
  </div>
  
  <div class="tag-group">
    <h3>开发框架</h3>
    <div class="tag-list">
      <a href="#LangChain">LangChain</a>
      <a href="#LlamaIndex">LlamaIndex</a>
      <a href="#Semantic-Kernel">Semantic-Kernel</a>
      <a href="#Haystack">Haystack</a>
      <a href="#AutoGPT">AutoGPT</a>
      <a href="#CrewAI">CrewAI</a>
    </div>
  </div>
  
  <div class="tag-group">
    <h3>实用工具</h3>
    <div class="tag-list">
      <a href="#Pinecone">Pinecone</a>
      <a href="#Weaviate">Weaviate</a>
      <a href="#Chroma">Chroma</a>
      <a href="#Milvus">Milvus</a>
      <a href="#OpenAI">OpenAI</a>
      <a href="#Hugging-Face">Hugging Face</a>
      <a href="#LM-Studio">LM Studio</a>
    </div>
  </div>
  
  <div class="tag-group">
    <h3>应用场景</h3>
    <div class="tag-list">
      <a href="#对话系统">对话系统</a>
      <a href="#文档处理">文档处理</a>
      <a href="#内容生成">内容生成</a>
      <a href="#代码助手">代码助手</a>
      <a href="#数据分析">数据分析</a>
      <a href="#多模态应用">多模态应用</a>
    </div>
  </div>
</div>

<style>
/* 使用全局样式变量保持一致性 */
.tags-page h2 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-top: 30px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
  margin-bottom: 15px;
}

.tags-page ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

.tags-page li {
  margin-bottom: 8px;
}

.tags-page small {
  color: var(--text-light);
  font-size: 0.85rem;
  margin-left: 8px;
}

.tag-groups {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.tag-groups h2 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
}

.tag-groups h2:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
}

.tag-group {
  margin-bottom: 20px;
  padding: 15px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  transition: transform 0.3s;
  border: 1px solid #eee;
}

.tag-group:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  border-color: var(--primary-color);
}

.tag-group h3 {
  color: var(--primary-color);
  margin-top: 0;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 8px;
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.tag-list a {
  display: inline-block;
  margin: 4px;
  padding: 3px 10px;
  background: #f8f9fa;
  border-radius: 15px;
  text-decoration: none;
  color: var(--primary-color);
  font-size: 0.9rem;
  transition: all 0.3s;
}

.tag-list a:hover {
  background: rgba(252, 79, 55, 0.05);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .tag-group {
    padding: 12px;
  }
  
  .tag-list a {
    margin: 3px;
    padding: 3px 8px;
    font-size: 0.85rem;
  }
  
  .tag-groups h2 {
    font-size: 1.3rem;
  }
  
  .tag-group h3 {
    font-size: 1rem;
  }
}
</style> 