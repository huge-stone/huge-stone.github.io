---
layout: page
title: 代码示例展示
permalink: /code-showcase/
---

# 代码展示示例

我们的网站现在支持美观的代码展示功能，支持多种编程语言的语法高亮、行号显示和代码复制功能。

## 基本用法

创建一个基本的代码展示区非常简单，只需在Markdown中使用代码块语法，并指定语言：

```markdown
​```python
def hello_world():
    print("Hello, World!")
​```
```

系统会自动将上述代码转换为美观的代码展示区。

## 代码示例

### Python 示例

```python
import numpy as np
import matplotlib.pyplot as plt

# 生成数据
x = np.linspace(0, 10, 100)
y = np.sin(x)

# 绘制图形
plt.figure(figsize=(10, 6))
plt.plot(x, y, 'b-', linewidth=2)
plt.title('Sin(x) 函数图')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.grid(True)
plt.show()

# 定义一个简单的类
class DataProcessor:
    def __init__(self, data):
        self.data = data
        
    def normalize(self):
        """归一化数据到[0,1]区间"""
        min_val = np.min(self.data)
        max_val = np.max(self.data)
        return (self.data - min_val) / (max_val - min_val)
        
    def standardize(self):
        """标准化数据（均值为0，标准差为1）"""
        mean = np.mean(self.data)
        std = np.std(self.data)
        return (self.data - mean) / std
```

### JavaScript 示例

```javascript
// 异步函数示例
async function fetchUserData(userId) {
  try {
    // 发起API请求
    const response = await fetch(`https://api.example.com/users/${userId}`);
    
    // 检查响应状态
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // 解析JSON响应
    const userData = await response.json();
    
    // 处理用户数据
    console.log('用户数据:', userData);
    return userData;
  } catch (error) {
    console.error('获取用户数据时出错:', error);
    return null;
  }
}

// DOM 操作示例
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  
  // 创建元素
  const header = document.createElement('header');
  header.className = 'main-header';
  header.innerHTML = `
    <h1>代码展示示例</h1>
    <p>这是一个使用JavaScript创建的动态页面</p>
  `;
  
  // 添加到DOM
  app.appendChild(header);
  
  // 添加点击事件
  const button = document.createElement('button');
  button.textContent = '点击我';
  button.addEventListener('click', () => {
    alert('你点击了按钮!');
  });
  
  app.appendChild(button);
});
```

### HTML/CSS 示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>响应式卡片示例</title>
  <style>
    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    
    .card {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-5px);
    }
    
    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    
    .card-content {
      padding: 15px;
    }
    
    .card-title {
      margin-top: 0;
      color: #2c3e50;
    }
    
    .card-text {
      color: #666;
      line-height: 1.5;
    }
    
    @media (max-width: 768px) {
      .card-container {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="card-container">
    <div class="card">
      <img src="image1.jpg" alt="卡片图片" class="card-image">
      <div class="card-content">
        <h3 class="card-title">卡片标题1</h3>
        <p class="card-text">这是卡片内容的简短描述，展示卡片的主要信息。</p>
      </div>
    </div>
    <!-- 更多卡片... -->
  </div>
</body>
</html>
```

### Java 示例

```java
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 用户管理系统示例
 */
public class UserManagementSystem {
    
    private List<User> users;
    
    public UserManagementSystem() {
        this.users = new ArrayList<>();
    }
    
    /**
     * 添加新用户
     * @param user 要添加的用户对象
     * @return 添加成功返回true，否则返回false
     */
    public boolean addUser(User user) {
        if (getUserById(user.getId()) != null) {
            System.out.println("用户ID已存在: " + user.getId());
            return false;
        }
        return users.add(user);
    }
    
    /**
     * 根据ID查找用户
     * @param id 用户ID
     * @return 找到的用户对象，未找到返回null
     */
    public User getUserById(int id) {
        return users.stream()
                .filter(user -> user.getId() == id)
                .findFirst()
                .orElse(null);
    }
    
    /**
     * 获取活跃用户列表
     * @return 活跃用户列表
     */
    public List<User> getActiveUsers() {
        return users.stream()
                .filter(User::isActive)
                .collect(Collectors.toList());
    }
    
    /**
     * 用户类
     */
    public static class User {
        private int id;
        private String username;
        private String email;
        private boolean active;
        
        public User(int id, String username, String email) {
            this.id = id;
            this.username = username;
            this.email = email;
            this.active = true;
        }
        
        // Getters and setters
        public int getId() {
            return id;
        }
        
        public String getUsername() {
            return username;
        }
        
        public void setUsername(String username) {
            this.username = username;
        }
        
        public String getEmail() {
            return email;
        }
        
        public void setEmail(String email) {
            this.email = email;
        }
        
        public boolean isActive() {
            return active;
        }
        
        public void setActive(boolean active) {
            this.active = active;
        }
    }
} 