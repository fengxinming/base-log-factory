---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: base-log-factory
  text: 一个灵活简单的 JS 日志库
  tagline: 通过配置不同的 Appender 可以在不同的环境记录或收集日志内容。适用于浏览器、NodeJS等环境。
  actions:
    - theme: brand
      text: 指南
      link: /zh/guide/what-is-this
    - theme: alt
      text: 参考
      link: /zh/reference/use-appenders
  image:
    src: /logo.png
    alt: base-log-factory

features:
  - title: 多级别日志
    details: 支持 `TRACE/DEBUG/INFO/WARN/ERROR/FATAL/OFF` 七级日志分级，精准控制日志输出粒度。
  - title: 灵活的Appender配置
    details: 内置 `ConsoleAppender`（控制台输出）、`FileAppender`（按大小滚动）和 `DateFileAppender`（按日期滚动），支持自定义Appender扩展。
  - title: 丰富的日志格式化
    details: 提供 `BasicLayout`（基础格式）和 `PatternLayout`（类似Log4j的灵活格式），支持自定义占位符。
  - title: 上下文管理
    details: 支持MDC（Mapped Diagnostic Context），方便在日志中携带请求ID、用户信息等上下文数据。
---

