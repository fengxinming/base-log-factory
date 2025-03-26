# blf-debug-appender

[![npm package](https://nodei.co/npm/blf-debug-appender.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/blf-debug-appender)

[![NPM version](https://img.shields.io/npm/v/blf-debug-appender.svg?style=flat)](https://npmjs.org/package/blf-debug-appender)
[![NPM Downloads](https://img.shields.io/npm/dm/blf-debug-appender.svg?style=flat)](https://npmjs.org/package/blf-debug-appender)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-007ACC.svg)](https://www.typescriptlang.org/)

> 🚀 A DebugAppender for `base-log-factory`.

---

## 📅 Documentation

For detailed usage instructions and API references, please visit the official documentation:

👉 [View Full Documentation](https://fengxinming.github.io/base-log-factory/)

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install base-log-factory blf-debug-appender
```

### 2. Basic Usage
```typescript
// factory.ts
import { LogFactory } from 'base-log-factory';
import { DebugAppender } from 'blf-debug-appender';

export default new LogFactory({
  appenders: [new DebugAppender()]
});

// main.ts
import logFactory from './factory';

const logger = logFactory.getLogger('app');
logger.info('Server started successfully');
```

---

## 📝 Contribution Guide

1. **Development Setup**  
   ```bash
   npm install
   ```

2. **Testing**  
   ```bash
   npm test # Run unit tests
   ```

3. **Before Submitting PRs**  
   - Ensure ESLint is configured (VSCode plugin recommended)
   - Add test cases for new features
   - Update documentation

---

## 📄 License

[MIT License](../../LICENSE)
