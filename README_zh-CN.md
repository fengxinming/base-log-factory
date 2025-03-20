# base-log-factory

[![npm package](https://nodei.co/npm/base-log-factory.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/base-log-factory)

[![NPM version](https://img.shields.io/npm/v/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![NPM Downloads](https://img.shields.io/npm/dm/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-007ACC.svg)](https://www.typescriptlang.org/)

> 一个灵活高效的Node.js日志库，支持控制台输出、文件滚动记录、自定义格式和日志分级。

## 中文 | [English](README.md)

## 功能特性

- **多级别日志**：支持 TRACE/DEBUG/INFO/WARN/ERROR/FATAL/OFF 七个级别
- **多种Appender**：内置控制台、文件滚动（按大小/日期）输出器
- **自定义布局**：提供基础布局和模式布局（类似Log4j格式）
- **上下文管理**：支持MDC（Mapped Diagnostic Context）
- **高性能异步**：非阻塞I/O和背压控制
- **集群支持**：内置进程ID和集群序列号记录

## 安装

```bash
npm install base-log-factory
```

## 快速开始

### 基本使用

factory.ts
```typescript
import { LogFactory, ConsoleAppender } from 'base-log-factory';

export default new LogFactory();
```

main.ts
```typescript
import logFactory from './factory';

const logger = logFactory.getLogger('app');

logger.info('Server started on port 3000');
```

### 配置示例
```typescript
import { LogFactory, ConsoleAppender, FileAppender, BasicLayout } from 'base-log-factory';

const logFactory = new LogFactory({
  level: 'DEBUG',
  appenders: [
    new ConsoleAppender(),
    new FileAppender('./logs/app.log', {
      layout: new BasicLayout(),
      maxSize: 1024 * 1024, // 1MB
      backups: 5
    })
  ]
});
```

## 核心概念

### 日志级别
| 级别   | 值  | 说明         |
|--------|-----|------------|
| TRACE  | 6   | 跟踪级详细日志  |
| DEBUG  | 5   | 调试信息      |
| INFO   | 4   | 常规运行信息   |
| WARN   | 3   | 警告事件      |
| ERROR  | 2   | 错误事件      |
| FATAL  | 1   | 严重错误事件   |
| OFF    | 0   | 关闭所有日志   |

### Appenders
| 类型               | 说明                      |
|--------------------|-------------------------|
| `ConsoleAppender`  | 输出到控制台                |
| `FileAppender`     | 按文件大小滚动（如app.log.1）|
| `DateFileAppender` | 按日期滚动（如app.2023-08-01.log）|

### Layouts
```typescript
// 使用PatternLayout自定义格式
new PatternLayout('[%d{YYYY-MM-DD HH:mm:ssZ}] %p %c - %m %x{user}')
```

格式说明符：
- `%d`: 日期时间（可指定格式）
- `%p`: 日志级别
- `%c`: Logger名称
- `%m`: 日志消息
- `%x`: 上下文变量
- `%t`: 线程信息

## 高级功能

### 上下文管理
```typescript
logger.addContext('user', '12345');
logger.info('Processing user:'); // 自动携带上下文
```

### 文件滚动配置
```typescript
// 按大小滚动（保留5个备份）
new FileAppender('./logs/app.log', {
  maxSize: 1024 * 1024, // 1MB
  backups: 5,
  compress: true // 启用GZIP压缩
});

// 按日期滚动（每天生成新文件）
new DateFileAppender('./logs/app.log', {
  pattern: 'YYYY-MM-DD',
  backups: 7 // 保留7天日志
});
```

### 自定义Appender
```typescript
class CustomAppender implements IAppender {
  write(event: ILogEvent) {
    // 实现自定义逻辑
  }
  close() { /* 清理资源 */ }
}
```

## 性能优化

- **同步策略**：通过`syncThreshold`和`syncInterval`控制fsync频率
- **文件锁**：启用`useLock: true`保证集群环境下的写入安全
- **背压处理**：自动管理流写入压力，避免内存溢出

## 贡献指南

欢迎提交Issue和PR！请确保：
1. 通过ESLint检查
2. 包含测试用例
3. 更新相关文档

## 许可证

[MIT License](LICENSE)