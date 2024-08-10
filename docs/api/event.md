# Plugin Event

## 概述

插件系统通过 `on/emit` 机制实现，可以在插件的 `install` 方法中使用 `ctx.on` 订阅事件，并根据插件的优先级控制执行顺序。优先级为 `0` 的插件最先加载，通常用于系统插件。插件可以通过 `EventType.XXX` 订阅特定的事件，在不同位置注入逻辑。方法返回值应为 `ctx`。

## 1. 事件类型定义

`EventType` 枚举定义了系统中可触发的事件。以下是预定义的事件类型：


| 名称       | 触发时间       | 影响内容 |
| ---------- | -------------- | -------- |
| PLAY       | 点击播放时     | ——       |
| PAUSE      | 暂停播放时     |          |
| STOP       | 停止播放时     |          |
| SEEK       | 调整位置时     |          |
| SET_VOLUME | 设置音量时     |          |
| SET_MODE   | 切换播放模式时 |          |
| SEARCH     | 搜索结果时     |          |
|PLAYLIST_UPDATED| 播放列表更新时||
|ERROR| 出现错误时 ||
|LOADING| 资源加载时 ||
|SETTING_UPDATED| 设置更新时 ||

可以通过在事件名前添加 `BEFORE_` 来订阅事件前的操作，例如 `BEFORE_PLAY` 在播放前触发。

## 示例

```ts
class MyPlugin implements IPlugin {
  id = 'my-plugin';
  name = 'my-plugin';
  author = 'flex-lark';
  description = '';
  version = 'v1.0';
  install(ctx: PluginContext) {
    ctx.on(EventType.BEFORE_PLAY, () => {
      console.log("播放前的处理逻辑");
    });

    ctx.on(EventType.PLAY, () => {
      console.log("播放事件被触发");
    });
  }
}
```

