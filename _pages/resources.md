---
layout: page
title: 资源导航
permalink: /resources/
---

<div class="resources-header">
  <h1>大模型实践资源</h1>
  <p>精选大模型开发与应用相关的优质学习资源</p>
</div>

<div class="resources-container">
  <div class="resource-category">
    <h2><i class="resource-icon">📚</i> 学习资料</h2>
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
    <h2><i class="resource-icon">🛠️</i> 开发工具</h2>
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
    <h2><i class="resource-icon">🚀</i> 部署方案</h2>
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
    <h2><i class="resource-icon">🔍</i> 向量数据库</h2>
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
    <h2><i class="resource-icon">📊</i> 评估工具</h2>
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
    margin-bottom: 40px;
  }
  
  .resources-header h1 {
    color: var(--primary-color);
    font-size: 2.2em;
    margin-bottom: 10px;
  }
  
  .resources-header p {
    color: #666;
    font-size: 1.2em;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .resources-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .resource-category {
    margin-bottom: 40px;
  }
  
  .resource-category h2 {
    color: var(--primary-color);
    font-size: 1.6em;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
    display: flex;
    align-items: center;
  }
  
  .resource-icon {
    font-style: normal;
    margin-right: 10px;
    font-size: 1.2em;
  }
  
  .resource-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .resource-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .resource-card h3 {
    color: var(--primary-color);
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.2em;
  }
  
  .resource-card p {
    color: #666;
    margin-bottom: 15px;
    flex-grow: 1;
  }
  
  .resource-link {
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s;
    text-align: center;
    margin-top: auto;
  }
  
  .resource-link:hover {
    background: darken(var(--primary-color), 10%);
    transform: translateY(-2px);
    color: white;
  }
  
  @media (max-width: 600px) {
    .resource-list {
      grid-template-columns: 1fr;
    }
  }
  
  @media screen and (max-width: 767px) {
    .resources-header h1 {
      font-size: 1.8em;
    }
    
    .resources-header p {
      font-size: 1em;
    }
    
    .resource-category h2 {
      font-size: 1.4em;
    }
    
    .resource-list {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 15px;
    }
    
    .resource-link {
      width: 100%;
      text-align: center;
    }
  }
  
  @media screen and (max-width: 480px) {
    .resource-list {
      grid-template-columns: 1fr;
    }
    
    .resource-card {
      padding: 15px;
    }
    
    .resource-card h3 {
      font-size: 1.1em;
    }
    
    .resource-card p {
      font-size: 0.95em;
    }
    
    .resource-link {
      padding: 10px 15px;
    }
    
    /* 移动端触摸优化 */
    .resource-link {
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      height: auto;
      line-height: normal;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    /* 移动端上下页面空间优化 */
    .resource-category:first-child {
      margin-top: 10px;
    }
    
    .resource-category:last-child {
      margin-bottom: 20px;
    }
  }
</style> 