---
layout: home

hero:
  name: base-log-factory
  text: A flexible and simple JS logging library
  tagline: Allows logging or collecting logs in different environments by configuring various Appenders. Suitable for browser, NodeJS and other environments.
  actions:
    - theme: brand
      text: Guide
      link: /guide/introduce
    - theme: alt
      text: Reference
      link: /reference/use-appenders
  image:
    src: /logo.png
    alt: base-log-factory

features:
  - title: Multi-level Logging
    details: Supports seven-level logging granularity (`TRACE/DEBUG/INFO/WARN/ERROR/FATAL/OFF`), allowing precise control over log output.
  - title: Flexible Appender Configuration
    details: Built-in appenders include `ConsoleAppender` (console output), `FileAppender` (size-based rotation), and `DateFileAppender` (date-based rotation). Supports custom Appender extensions.
  - title: Rich Log Formatting
    details: Provides `BasicLayout` (basic format) and `PatternLayout` (Log4j-like flexible format), supports custom placeholders.
  - title: Context Management
    details: Supports MDC (Mapped Diagnostic Context) to carry context data such as request IDs and user information in logs.
---
