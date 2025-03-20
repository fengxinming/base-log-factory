# base-log-factory

[![npm package](https://nodei.co/npm/base-log-factory.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/base-log-factory)

[![NPM version](https://img.shields.io/npm/v/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![NPM Downloads](https://img.shields.io/npm/dm/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-007ACC.svg)](https://www.typescriptlang.org/)

> 🚀 一个灵活高效的Node.js日志库，支持控制台输出、文件滚动记录、自定义格式和日志分级。

## 📅 中文文档 | [English](README.md)

---

## 🌟 核心特性

- **多级别日志**  
  支持 `TRACE/DEBUG/INFO/WARN/ERROR/FATAL/OFF` 七级日志分级，精准控制日志输出粒度。
  
- **灵活的Appender配置**  
  内置 `ConsoleAppender`（控制台输出）、`FileAppender`（按大小滚动）和 `DateFileAppender`（按日期滚动），支持自定义Appender扩展。

- **丰富的日志格式化**  
  提供 `BasicLayout`（基础格式）和 `PatternLayout`（类似Log4j的灵活格式），支持自定义占位符。

- **上下文管理**  
  支持MDC（Mapped Diagnostic Context），方便在日志中携带请求ID、用户信息等上下文数据。

- **高性能与集群支持**  
  非阻塞I/O、背压控制、文件锁机制，保障高并发场景下的日志可靠性。

---

## 🚀 快速开始

### 1. 安装
```bash
npm install base-log-factory
```

### 2. 基础用法
```typescript
// factory.ts
import { LogFactory, ConsoleAppender } from 'base-log-factory';

export default new LogFactory({
  appenders: [new ConsoleAppender()]
});

// main.ts
import logFactory from './factory';

const logger = logFactory.getLogger('app');
logger.info('服务器启动成功');
```

### 3. 高级配置示例
```typescript
// 配置文件滚动、自定义格式和上下文
import { 
  LogFactory, 
  ConsoleAppender, 
  FileAppender, 
  DateFileAppender, 
  PatternLayout 
} from 'base-log-factory';

const logFactory = new LogFactory({
  level: 'DEBUG',  // 设置全局日志级别
  appenders: [
    new ConsoleAppender(),
    new FileAppender('./logs/app.log', {
      layout: new PatternLayout('[%d{YYYY-MM-DD HH:mm:ss}] [%p] %c - %m %x{userId}'),
      maxSize: 1024 * 1024, // 1MB
      backups: 5,
      compress: true // 启用GZIP压缩
    }),
    new DateFileAppender('./logs/app.daily.log', {
      pattern: 'YYYY-MM-DD',
      backups: 7 // 保留7天日志
    })
  ]
});
```

---

## 🛠 核心概念详解

### 1. 日志级别（支持彩色标识）
| 级别   | 值  | 说明         | 建议使用场景                |
|--------|-----|------------|-------------------------|
| TRACE  | 6   | 跟踪级详细日志  | 调试代码逻辑时的详细流程记录      |
| DEBUG  | 5   | 调试信息      | 开发阶段的调试输出            |
| **INFO** | 4   | 常规运行信息   | 业务流程关键节点的正常状态记录  |
| **WARN** | 3   | 警告事件      | 非致命但需关注的问题（如资源不足） |
| **ERROR** | 2   | 错误事件      | 异常或失败操作的记录          |
| **FATAL** | 1   | 严重错误事件   | 导致系统崩溃的致命错误         |
| OFF    | 0   | 关闭所有日志   | 禁用日志输出                |

### 2. Appender类型对比
| 类型               | 特点                          | 典型场景               |
|--------------------|-----------------------------|----------------------|
| `ConsoleAppender`  | 实时输出到控制台               | 开发调试阶段          |
| `FileAppender`     | 按文件大小滚动（如app.log.1） | 生产环境日志持久化    |
| `DateFileAppender` | 按日期滚动（如app.2023-08-01.log） | 需要按天归档日志时     |

---

## 🎁 使用示例

### 示例1：带上下文的API请求日志
```typescript
// 在请求处理函数中添加用户ID
app.get('/api/data', (req, res) => {
  const userId = req.user.id;
  logger.addContext('userId', userId);
  try {
    // 业务逻辑
    logger.debug('开始处理请求');
    res.send(data);
  } catch (err) {
    logger.error('请求处理失败', err);
  } finally {
    logger.removeContext('userId'); // 清理上下文
  }
});
```

### 示例2：自定义日志格式
```typescript
// 定义包含请求ID和时间戳的格式
const layout = new PatternLayout(
  '[%d{YYYY-MM-DD HH:mm:ss.SSS}] [%p] %c - %m %x{requestId} %t'
);

// 在Appender中使用
new FileAppender('./logs/app.log', { layout });
```

### 示例3：集群环境配置
```typescript
// 使用进程ID区分日志输出
const cluster = require('cluster');
const logFactory = new LogFactory({
  appenders: [
    new FileAppender(`./logs/app_${cluster.worker.id}.log`, {
      layout: new BasicLayout(),
      maxSize: 1024 * 1024 * 5 // 5MB
    })
  ]
});
```

### 示例4：动态修改日志级别
```typescript
// 动态调整全局日志级别
logFactory.level = 'DEBUG'; // 设置为DEBUG级别
logger.debug('调试信息现在会显示'); // 输出生效
```

### 示例5：进程结束前的资源清理
```typescript
// 在Node.js进程退出前确保所有日志写入完成
process.on('exit', async () => {
  await logFactory.dispose(); // 等待所有Appender资源释放
});

// 处理未捕获异常时的清理
process.on('uncaughtException', async (err) => {
  logger.error('进程异常', err);
  await logFactory.dispose();
  process.exit(1);
});
```

---

## ⚡ 性能优化建议

1. **异步写入**  
   默认使用异步模式，通过 `syncThreshold` 控制同步写入频率：
   ```typescript
   new FileAppender('app.log', {
     syncThreshold: 10 * 1024, // 每10K日志强制同步
     syncInterval: 5000 // 每5秒强制同步
   });
   ```

2. **文件锁机制**  
   在集群环境中启用 `useLock: true` 避免文件写入冲突：
   ```typescript
   new FileAppender('app.log', { useLock: true });
   ```

---

## 📝 贡献指南

1. **开发环境**  
   ```bash
   npm install
   ```

2. **测试用例**  
   ```bash
   npm test # 运行单元测试
   ```

3. **提交PR前**  
   - 确保 vscode 安装了 eslint 插件
   - 添加新功能的测试用例
   - 更新文档说明

---

## 📄 许可证

[MIT License](LICENSE)
