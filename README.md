# AI大模型技术与应用

# AGI SEEKING 博客

这是一个基于Jekyll的博客，专注于人工智能前沿技术与最佳实践。

## 功能特点

- 响应式设计，适配各种设备
- 深色模式支持
- SEO优化
- 文章分类和标签系统
- 相关文章推荐
- 评论系统支持

## 评论系统配置

本博客支持三种评论系统：Utterances、Gitalk 和 Disqus，默认配置为Utterances（最轻量级）。

### Utterances配置（推荐）

Utterances是一个轻量级的基于GitHub Issues的评论系统：

1. 确保您的GitHub仓库是公开的，并且已开启Issues功能

2. 在`_config.yml`中配置：
   ```yaml
   utterances:
     repo: 用户名/仓库名
     issue-term: pathname
     theme: github-light
   ```

3. 无需额外创建OAuth应用，配置简单快捷

### Gitalk配置

Gitalk也是基于GitHub Issue的评论系统，但需要创建OAuth应用：

1. 创建一个GitHub OAuth应用：
   - 访问 https://github.com/settings/applications/new
   - 填写应用信息（Application name、Homepage URL、Authorization callback URL）
   - Authorization callback URL应与您的网站URL相同

2. 获取Client ID和Client Secret

3. 在`_config.yml`中填入相关信息：
   ```yaml
   gitalk:
     enable: true
     client_id: YOUR_CLIENT_ID
     client_secret: YOUR_CLIENT_SECRET
     repo: YOUR_REPO_NAME
     owner: YOUR_GITHUB_USERNAME
     admin: YOUR_GITHUB_USERNAME
   ```

### Disqus配置

如果您更偏向使用Disqus：

1. 在Disqus注册并创建站点

2. 获取您的Disqus shortname

3. 在`_config.yml`中配置：
   ```yaml
   disqus:
     shortname: YOUR_DISQUS_SHORTNAME
   ```

## 开发与部署

本站使用GitHub Pages自动部署。

## 许可证

MIT
