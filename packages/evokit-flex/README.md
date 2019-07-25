[react]: //www.npmjs.com/package/react
[prop-types]: //www.npmjs.com/package/prop-types

[evokit]: /packages/evokit/
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp

[installation]: docs/getting-started/installation.md
[quik-start]: docs/getting-started/quick-start.md
[use-props]: docs/getting-started/props.md

[flex-tag]: #flex-tag

[flex-display]: #flex-display
[flex-align-items]: #flex-align-items
[flex-align-content]: #flex-align-content
[flex-justify-content]: #flex-justify-content
[flex-direction]: #flex-direction
[flex-wrap]: #flex-wrap

[base-props]: #base-props
[main-props]: #main-props

# EvoKit - Flex

[![](https://img.shields.io/npm/v/evokit-flex.svg)](https://www.npmjs.com/package/evokit-flex)

The Flex block has an essential role in building layouts

---

!> THE ALPHA VERSION OF THE PACKAGE IS RECOMMENDED FOR REFERENCE ONLY. DO NOT USE IN PRODUCTION!

#### Install

> Peer dependencies [react], [prop-types], [evokit]. More about [install][installation]

```bash
npm install evokit-flex --save
```

#### Usage

> More about [usage][quik-start]

```jsx
import { Flex } from 'evokit-flex';
import 'evokit-flex/style.css';

<Flex>
    ...
</Flex>

```

#### Props

> Also supports other valid props of the React Element. More about [use props][use-props]

###### [Base][base-props]

| Prop name  | Default value | Possible value             | Description |
|------------|---------------|----------------------------|-------------|
| [flex-tag] | `div`         | [html tags][html-all-tags] | HTML tag    |

###### [Main][main-props]

| Prop name        | Default value    | Possible value | Description |
|------------------|------------------|----------------|-------------|
| [flex-display]         | `flex`     | `flex`, `flex-inline`, `block`, `none` | Display type |
| [flex-align-items]     | `initial`  | `stretch`, `top`, `middle`, `bottom` | Alignment of all items on the cross axis |
| [flex-align-content]   | `initial`  | `stretch`, `top`, `middle`, `bottom`, `between`, `around` | Space between flex lines on the cross axis |
| [flex-justify-content] | `initial`  | `left`, `center`, `right`, `between`, `around` | Alignment of all items on the main axis |
| [flex-direction]       | `initial`  | `row`, `row-reverse`, `column`, `column-reverse` | Direction of all items |
| [flex-wrap]            | `initial`  | `nowrap`, `wrap`, `wrap-reverse` | Wrap rules |


#### Live demo

[![Edit flex-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/flex-usage-d85tn?fontsize=14 ':include :type=iframe width=100% height=500px')

---


#### Base props

##### `flex-tag`

Default value `div`

```jsx
<Flex flex-tag='div'>
    ...
</Flex>
```


#### Main props

##### `flex-display`

```jsx
<Flex flex-display='flex-inline'>
    ...
</Flex>
```
