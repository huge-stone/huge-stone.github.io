---
layout: page
title: 简单代码示例
permalink: /code-sample/
---

# 代码示例测试

以下是几个简单的代码示例，用于测试代码高亮功能是否正常工作。

## Python示例

```python
# 这是一个简单的Python函数
def greet(name):
    """向某人打招呼"""
    return f"你好，{name}！"

# 调用函数
message = greet("世界")
print(message)  # 输出：你好，世界！
```

## JavaScript示例

```javascript
// 定义一个简单的函数
function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// 示例数据
const cart = [
  { name: '笔记本', price: 10, quantity: 2 },
  { name: '铅笔', price: 2, quantity: 5 },
  { name: '橡皮', price: 5, quantity: 1 }
];

// 计算总价
const total = calculateTotal(cart);
console.log(`购物车总价: ¥${total}`); // 输出：购物车总价: ¥35
``` 