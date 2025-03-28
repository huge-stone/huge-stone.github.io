---
layout: page
title: 资源导航
permalink: /resources/
---

<div class="resources-header">
  <h1>大模型开发资源</h1>
  <p>精选大模型开发与应用相关的优质学习资源</p>
</div>

<div class="resources-container">
  <div class="resource-category">
    <h2><i class="fas fa-book"></i> 学习资料</h2>
    <div class="resource-list">
      <div class="resource-card">
        <h3>Prompt Engineering Guide</h3>
        <p>全面的提示工程学习指南，涵盖基础技巧到高级应用</p>
        <a href="https://www.promptingguide.ai/" target="_blank" class="resource-link">访问资源</a>
      </div>
      
      <div class="resource-card">
        <h3>LangChain 文档</h3>
        <p>大模型应用开发框架LangChain的官方文档与教程</p>
        <a href="https://python.langchain.com/docs/get_started/introduction" target="_blank" class="resource-link">访问资源</a>
      </div>
      
      <div class="resource-card">
        <h3>RAG 最佳实践</h3>
        <p>检索增强生成技术的最佳实践与实现指南</p>
        <a href="https://github.com/ray-project/llm-applications/blob/main/docs/rag.md" target="_blank" class="resource-link">访问资源</a>
      </div>
    </div>
  </div>
  
  <div class="resource-category">
    <h2><i class="fas fa-tools"></i> 开发工具</h2>
    <div class="resource-list">
      <div class="resource-card">
        <h3>Hugging Face</h3>
        <p>开源模型库和工具集，支持模型下载、微调和部署</p>
        <a href="https://huggingface.co/" target="_blank" class="resource-link">访问资源</a>
      </div>
      
      <div class="resource-card">
        <h3>LlamaIndex</h3>
        <p>构建RAG应用的数据框架，简化知识库构建流程</p>
        <a href="https://www.llamaindex.ai/" target="_blank" class="resource-link">访问资源</a>
      </div>
      
      <div class="resource-card">
        <h3>Semantic Kernel</h3>
        <p>微软开源的大模型集成开发框架</p>
        <a href="https://github.com/microsoft/semantic-kernel" target="_blank" class="resource-link">访问资源</a>
      </div>
    </div>
  </div>
  
  <div class="resource-category">
    <h2><i class="fas fa-rocket"></i> 部署方案</h2>
    <div class="resource-list">
      <div class="resource-card">
        <h3>Ollama</h3>
        <p>本地运行大型语言模型的简易解决方案</p>
        <a href="https://ollama.ai/" target="_blank" class="resource-link">访问资源</a>
      </div>
      
      <div class="resource-card">
        <h3>vLLM</h3>
        <p>高性能大模型推理与服务框架</p>
        <a href="https://github.com/vllm-project/vllm" target="_blank" class="resource-link">访问资源</a>
      </div>
      
      <div class="resource-card">
        <h3>Text Generation Inference</h3>
        <p>Hugging Face的大模型部署与服务工具</p>
        <a href="https://github.com/huggingface/text-generation-inference" target="_blank" class="resource-link">访问资源</a>
      </div>
    </div>
  </div>
  
  <div class="resource-category">
    <h2><i class="fas fa-database"></i> 向量数据库</h2>
    <div class="resource-list">
      <div class="resource-card">
        <h3>Pinecone</h3>
        <p>全托管的向量搜索服务，适用于生产级RAG应用</p>
        <a href="https://www.pinecone.io/" target="_blank" class="resource-link">访问资源</a>
      </div>
      
      <div class="resource-card">
        <h3>Chroma</h3>
        <p>开源的嵌入式向量数据库，易于集成到AI应用中</p>
        <a href="https://www.trychroma.com/" target="_blank" class="resource-link">访问资源</a>
      </div>
      
      <div class="resource-card">
        <h3>Milvus</h3>
        <p>开源分布式向量数据库，支持大规模向量检索</p>
        <a href="https://milvus.io/" target="_blank" class="resource-link">访问资源</a>
      </div>
    </div>
  </div>
  
  <div class="resource-category">
    <h2><i class="fas fa-chart-line"></i> 评估工具</h2>
    <div class="resource-list">
      <div class="resource-card">
        <h3>RAGAS</h3>
        <p>评估RAG系统的全面评估框架</p>
        <a href="https://github.com/explodinggradients/ragas" target="_blank" class="resource-link">访问资源</a>
      </div>
      
      <div class="resource-card">
        <h3>LangSmith</h3>
        <p>LangChain的应用调试、测试与监控平台</p>
        <a href="https://www.langchain.com/langsmith" target="_blank" class="resource-link">访问资源</a>
      </div>
      
      <div class="resource-card">
        <h3>Promptfoo</h3>
        <p>LLM应用的自动化测试和评估工具</p>
        <a href="https://www.promptfoo.dev/" target="_blank" class="resource-link">访问资源</a>
      </div>
    </div>
  </div>
</div>

<style>
  .resources-header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .resources-header h1 {
    color: var(--primary-color);
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .resources-header p {
    color: #666;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .resources-container {
    max-width: 1100px;
    margin: 0 auto;
  }
  
  .resource-category {
    margin-bottom: 35px;
  }
  
  .resource-category h2 {
    color: var(--primary-color);
    font-size: 1.4rem;
    margin-bottom: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
  }
  
  .resource-category h2 i {
    margin-right: 10px;
    color: var(--primary-color);
  }
  
  .resource-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .resource-card {
    background: white;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
  }
  
  .resource-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    border-color: var(--primary-color);
  }
  
  .resource-card h3 {
    color: var(--primary-color);
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  .resource-card p {
    color: #666;
    margin-bottom: 15px;
    line-height: 1.5;
    flex-grow: 1;
    font-size: 0.95rem;
  }
  
  .resource-link {
    display: inline-block;
    padding: 8px 15px;
    background: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s;
    text-align: center;
    margin-top: auto;
  }
  
  .resource-link:hover {
    background: darken(var(--primary-color), 10%);
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(0,0,0,0.12);
    color: white;
  }
  
  @media (max-width: 768px) {
    .resource-list {
      grid-template-columns: 1fr;
    }
    
    .resources-header h1 {
      font-size: 1.7rem;
    }
    
    .resources-header p {
      font-size: 1rem;
    }
    
    .resource-category h2 {
      font-size: 1.3rem;
    }
    
    .resource-card h3 {
      font-size: 1.1rem;
    }
  }
</style> 