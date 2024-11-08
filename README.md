### A Enum Tool

```html
<script src="https://cdn.jsdelivr.net/npm/format-enum/lib/index.js"></script>
```

```javascript
const LIST_ENUM = createEnum([
	{ key: 'apple', value: 0, desc: '苹果' },
	{ key: 'pear', value: 1, desc: '梨' },
	{ key: 'watermelon', value: 2, desc: '西瓜' }
]);
```

#### getItem

```javascript
LIST_ENUM.getItem(0) 
// { key: 'apple', value: 0, desc: '苹果' }
```

#### getByKey

```javascript
LIST_ENUM.getByKey('梨')
// pear
```

#### getByValue

```javascript
LIST_ENUM.getByValue('watermelon')
// 2
```

#### getByDesc

```javascript
LIST_ENUM.getByDesc('apple')
// 苹果
```

#### getByList

```javascript
LIST_ENUM.getByList()
// [
// 	{ key: 'apple', value: 0, desc: '苹果' },
// 	{ key: 'pear', value: 1, desc: '梨' },
// 	{ key: 'watermelon', value: 2, desc: '西瓜' }
// ]
```

#### getByOptions

```javascript
LIST_ENUM.getByOptions({ id: 'value', title: 'desc' })
// [
// 	{ id: 0, title: '苹果' },
// 	{ id: 1, title: '梨' },
// 	{ id: 2, title: '西瓜' }
// ]
```

#### has

```javascript
LIST_ENUM.has(2)
// true
```

Original author： @mengxianghan https://github.com/mengxianghan/xy-enum.git