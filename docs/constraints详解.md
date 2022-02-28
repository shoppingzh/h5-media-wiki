# MediaStreamConstraints.md
| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
|video|视频信息|Boolean|Video|\-|\-|
|audio|音频信息|Boolean|\-|\-|



**Video**

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
|width|分辨率宽度要求|Number|Size|\-|\-|
|height|分辨率高度要求|Number|Size|\-|\-|
|facingMode|摄像头模式|String|FacingMode| |user/environment|



**Size**

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
|min|强制要求的最小值|Number|\-|\-|
|max|强制要求的最大值|Number|\-|\-|
|exact|强制要求的精确值|Number|\-|\-|
|ideal|理想值|Number|\-|\-|

> 注：
1. min/max/exact是强制要求的值，当设备不支持这些分辨率时，将会抛出错误。
2. ideal为理想值，设备不支持该分辨率时，会选用其他分辨率替代，不会抛出错误。



**FacingMode**

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- |
|exact|强制要求的模式|String|\-|user/environment|

