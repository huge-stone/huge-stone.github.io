---
layout: page
title: 技术标签
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
.tag-cloud {
  margin: 20px 0 40px;
  padding: 20px;
  background: #f7f7f7;
  border-radius: 10px;
  text-align: center;
  line-height: 2.2;
}
.tag-item {
  display: inline-block;
  margin: 5px;
  padding: 2px 10px;
  background: #eef;
  border-radius: 15px;
  text-decoration: none;
  color: #47a;
  transition: all 0.3s;
}
.tag-item:hover {
  background: #ddf;
  transform: scale(1.05);
}
.tag-item span {
  font-size: 0.8em;
  color: #999;
}
.tags-page h2 {
  margin-top: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.tags-page ul {
  margin-left: 20px;
}
.tags-page small {
  color: #999;
  margin-left: 10px;
}
.tag-groups {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 2px solid #eee;
}
.tag-group {
  margin-bottom: 25px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 5px;
}
.tag-group h3 {
  color: #2a7ae2;
  margin-top: 0;
  margin-bottom: 15px;
}
.tag-list a {
  display: inline-block;
  margin: 5px;
  padding: 3px 10px;
  background: #e8f0f9;
  border-radius: 4px;
  text-decoration: none;
  color: #3a7bd5;
}
.tag-list a:hover {
  background: #d0e1f5;
}
</style> 