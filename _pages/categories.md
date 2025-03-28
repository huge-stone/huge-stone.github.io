---
layout: page
title: 实践专题
permalink: /categories/
---

<div class="category-cloud">
  {% for category in site.categories %}
    <a href="#{{ category[0] }}" class="category-item">
      {{ category[0] }} <span>({{ category[1].size }})</span>
    </a>
  {% endfor %}
</div>

<div class="categories-page">
  {% for category in site.categories %}
    <h2 id="{{ category[0] }}">{{ category[0] }}</h2>
    <ul>
      {% for post in category[1] %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <small>{{ post.date | date: "%Y-%m-%d" }}</small>
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>

<div class="categories-overview">
  <h2>大模型实践方向</h2>
  
  <div class="category-group">
    <h3>技术实战</h3>
    <p>大模型的核心技术实践与应用开发经验</p>
    <ul class="category-list">
      <li><a href="/categories/#提示工程">提示工程</a></li>
      <li><a href="/categories/#RAG实践">RAG实践</a></li>
      <li><a href="/categories/#微调技术">微调技术</a></li>
      <li><a href="/categories/#Agents开发">Agents开发</a></li>
    </ul>
  </div>
  
  <div class="category-group">
    <h3>模型应用</h3>
    <p>各类大模型的最佳实践和应用案例</p>
    <ul class="category-list">
      <li><a href="/categories/#GPT应用">GPT应用</a></li>
      <li><a href="/categories/#Claude应用">Claude应用</a></li>
      <li><a href="/categories/#开源模型部署">开源模型部署</a></li>
      <li><a href="/categories/#多模态应用">多模态应用</a></li>
      <li><a href="/categories/#定制化助手">定制化助手</a></li>
    </ul>
  </div>
  
  <div class="category-group">
    <h3>性能优化</h3>
    <p>大模型应用的性能优化与部署实践</p>
    <ul class="category-list">
      <li><a href="/categories/#推理优化">推理优化</a></li>
      <li><a href="/categories/#量化部署">量化部署</a></li>
      <li><a href="/categories/#成本控制">成本控制</a></li>
      <li><a href="/categories/#分布式部署">分布式部署</a></li>
      <li><a href="/categories/#WebGPU加速">WebGPU加速</a></li>
    </ul>
  </div>
  
  <div class="category-group">
    <h3>行业落地</h3>
    <p>大模型在各行业的落地实践案例</p>
    <ul class="category-list">
      <li><a href="/categories/#企业应用">企业应用</a></li>
      <li><a href="/categories/#客服助手">客服助手</a></li>
      <li><a href="/categories/#内容创作">内容创作</a></li>
      <li><a href="/categories/#教育应用">教育应用</a></li>
      <li><a href="/categories/#医疗健康">医疗健康</a></li>
    </ul>
  </div>
  
  <div class="category-group">
    <h3>开发生态</h3>
    <p>大模型开发工具和生态系统实践</p>
    <ul class="category-list">
      <li><a href="/categories/#LangChain实践">LangChain实践</a></li>
      <li><a href="/categories/#LlamaIndex应用">LlamaIndex应用</a></li>
      <li><a href="/categories/#向量数据库">向量数据库</a></li>
      <li><a href="/categories/#评估优化">评估优化</a></li>
    </ul>
  </div>
</div>

<style>
.categories-page h2 {
  margin-top: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.categories-page ul {
  margin-left: 20px;
}
.categories-page small {
  color: #999;
  margin-left: 10px;
}
.categories-overview {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 2px solid #eee;
}
.category-group {
  margin-bottom: 30px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.category-group h3 {
  color: #2a7ae2;
  margin-top: 0;
}
.category-group p {
  color: #666;
  margin-bottom: 15px;
}
</style> 