# ztree-vue
> A element tree component for Vue.js used ztree.

## Installation
```shell
npm i ztree-vue --save
```

## Usage
```
<ztree :setting="{
        data: {
            key: {
                name: 'label'
            }
        }
    }"
    :extraSetting="{
        url:'./test.php'
        params:{a:3}
    }"
>

</ztree>
```

### Attributes
| 参数      | 说明          | 类型      | 默认值                           |  备注 |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| setting     | ztree origin setting | Object    | —                               | —      |
| extraSetting | new setting for lazy loading | Object    | — | 该配置和setting中的url配置二选一， 优先使用extraSetting; <br/>extraSetting.url [String] 获取节点数据的接口; <br/>extraSetting.dataFilter [Function] 对接口返回数据对处理函数;<br/> extraSetting.params [Object] 调用接口时的参数 |
| data     | localdata | Array    | —                               | —      |
