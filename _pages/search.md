---
layout: page
title: 搜索
permalink: /search/
---

<div class="search-container">
  <div class="search-header">
    <h2>搜索内容</h2>
    <p>在全站范围内搜索大模型实践相关内容</p>
  </div>
  <div class="search-box">
    <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    <input type="text" id="search-input" placeholder="输入关键词搜索..." class="search-input">
  </div>
  <div id="search-results" class="search-results"></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
<script>
  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('search-results'),
    json: '/search.json',
    searchResultTemplate: '<div class="search-item"><a href="{url}"><h3>{title}</h3></a><div class="search-meta"><span class="search-date">{date}</span>{% if category %}<span class="search-category">{category}</span>{% endif %}{% if tags %}<span class="search-tags">{tags}</span>{% endif %}</div><p class="search-excerpt">{excerpt}</p></div>',
    noResultsText: '<div class="no-results"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg><p>没有找到相关内容</p><p class="suggestion">尝试其他关键词或浏览<a href="/categories/">实践专题</a></p></div>',
    limit: 15,
    fuzzy: false
  })
</script>

<style>
  .search-container {
    margin: 20px 0 40px;
  }
  
  .search-header {
    text-align: center;
    margin-bottom: 25px;
  }
  
  .search-header h2 {
    color: var(--primary-color);
    font-size: 1.8em;
    margin-bottom: 10px;
  }
  
  .search-header p {
    color: #666;
    font-size: 1.1em;
  }
  
  .search-box {
    position: relative;
    margin-bottom: 30px;
  }
  
  .search-icon {
    position: absolute;
    left: 15px;
    top: 14px;
    color: #aaa;
  }
  
  .search-input {
    width: 100%;
    padding: 15px 15px 15px 45px;
    border: 1px solid #ddd;
    border-radius: 30px;
    font-size: 16px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.05);
    transition: all 0.3s;
  }
  
  .search-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 3px 15px rgba(58, 123, 213, 0.15);
  }
  
  .search-results {
    margin-top: 20px;
  }
  
  .search-item {
    margin-bottom: 25px;
    padding: 20px;
    border-radius: 10px;
    background: white;
    box-shadow: 0 3px 10px rgba(0,0,0,0.05);
    transition: all 0.3s;
  }
  
  .search-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .search-item h3 {
    margin-top: 0;
    margin-bottom: 12px;
    color: var(--primary-color);
    font-size: 1.4em;
  }
  
  .search-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 12px;
    font-size: 0.85em;
  }
  
  .search-date, .search-category, .search-tags {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 15px;
    background: #f5f5f5;
    color: #666;
  }
  
  .search-category {
    background: #e1f5fe;
    color: #0288d1;
  }
  
  .search-tags {
    background: #e8f5e9;
    color: #388e3c;
  }
  
  .search-excerpt {
    color: #666;
    margin: 8px 0 0;
    line-height: 1.5;
  }
  
  .no-results {
    text-align: center;
    padding: 40px 20px;
    color: #666;
  }
  
  .no-results svg {
    margin-bottom: 15px;
    color: #ccc;
  }
  
  .no-results p {
    margin: 5px 0;
    font-size: 1.1em;
  }
  
  .suggestion {
    font-size: 0.95em;
    margin-top: 15px !important;
    color: #888;
  }
  
  .suggestion a {
    color: var(--primary-color);
    text-decoration: none;
  }
  
  .suggestion a:hover {
    text-decoration: underline;
  }
</style> 