[evokit]: /packages/evokit/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-tag-hr]: //www.w3schools.com/tags/tag_hr.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[base_props]: docs/base/props
[create_theme]: docs/base/theme

[line-indent]: #line-indent
[line-color]: #line-color
[line-style]: #line-style

# EvoKit - Line

[![](https://img.shields.io/npm/v/evokit-line.svg)](https://www.npmjs.com/package/evokit-line)

Horizontal line, used to separate content. Contains one element `<Line>`

---

#### Install

> Peer dependencies [evokit]

```bash
npm install evokit-line --save
```

#### Usage

> The styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

- `<Line>` has a default html tag [hr][html-tag-hr]

```jsx
import { Line } from 'evokit-line';
import 'evokit-line/style.css';

<Line />
```

#### Props

Also have [additioanl props][base_props]

| Props | Values | Description |
|-------|--------|-------------|
| [line-indent] | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Indent above and below |
| [line-style]  | `dotted` `dashed` | Style |
| [line-color]  | `{THEME_NAME}` | Color - [Create Theme][create_theme] |

#### Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-line-media-small only screen and (min-width: 480px);
@custom-media --ek-line-media-medium only screen and (min-width: 768px);
@custom-media --ek-line-media-large only screen and (min-width: 960px);
@custom-media --ek-line-media-wide only screen and (min-width: 1200px);
@custom-media --ek-line-media-huge only screen and (min-width: 1400px);

:root {
    /* prop 'line-indent' */
    --ek-line-indent-xxs: 5px;
    --ek-line-indent-xs: 10px;
    --ek-line-indent-s: 15px;
    --ek-line-indent-m: 20px;
    --ek-line-indent-l: 25px;
    --ek-line-indent-xl: 30px;
    --ek-line-indent-xxl: 35px
}
```

#### Live demo

[![Edit line-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/lineusage-mti8w?fontsize=14 ':include :type=iframe width=100% height=500px')

---

##### `line-indent`

- `none` - no indent, value: `0px`
- `xxs` - css variable `--ek-line-indent-xxs`, default value: `5px`
- `xs` - css variable `--ek-line-indent-xs`, default value: `10px`
- `s` - css variable `--ek-line-indent-s`, default value: `15px`
- `m` - css variable `--ek-line-indent-m`, default value: `20px`
- `l` - css variable `--ek-line-indent-l`, default value: `25px`
- `xl` - css variable `--ek-line-indent-xl`, default value: `30px`
- `xxl` - css variable `--ek-line-indent-xxl`, default value: `35px`

```jsx
<Line line-indent='l' />
```

##### `line-style`

- `dotted` - dotted style
- `dashed` - dashed style

```jsx
<Line line-style='...' />
```

##### `line-color`

> Set the border color depending on the [created theme][create_theme], used `border color` value.

```jsx
<Line line-color={THEME_NAME} />
```
