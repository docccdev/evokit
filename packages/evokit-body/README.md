[evokit]: /packages/evokit/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[create_theme]: docs/base/theme

[body-tag]: #body-tag
[body-section-tag]: #body-section-tag

[body-size]: #body-size
[body-indent]: #body-indent
[body-background]: #body-background
[body-color]: #body-color

[base-props]: #base-props
[main-props]: #main-props
[color-props]: #color-props

# EvoKit - Body

[![](https://img.shields.io/npm/v/evokit-body.svg)](https://www.npmjs.com/package/evokit-body)

Used for body of the web page and sets the basic styles. Contains two elements `<Body>` and `<BodySection>`

---

#### Install

> Peer dependencies [evokit]

```bash
npm install evokit-body --save
```

#### Usage

> The styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

```jsx
import { Body, BodySection } from 'evokit-body';
import 'evokit-body/style.css';

<Body>
    <BodySection>
        header
    </BodySection>
    <BodySection>
        content
    </BodySection>
    <BodySection>
        footer
    </BodySection>
</Body>
```

#### Props

> Also supports other valid props of the React Element

###### [Base][base-props]

| Prop name          | Default value | Possible value             | Description |
|--------------------|---------------|----------------------------|-------------|
| [body-tag]         | `body`        | [html tags][html-all-tags] | HTML tag    |
| [body-section-tag] | `div`         | [html tags][html-all-tags] | HTML tag    |

###### [Main][main-props]

| Prop name     | Default value | Possible value | Description |
|---------------|---------------|-------------------|-------------|
| [body-size]   | `null`        | `xl` `xxl` `xxxl` | Max width for `<BodySection>` |
| [body-indent] | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Padding on the side left and right for `<BodySection>` |

###### [Color][color-props]

> Use [theming][create_theme] for creating custom colors.

| Prop name         | Default value | Possible value | Description |
|-------------------|--------|----------------|--------------------|
| [body-background] | `null` | `{THEME_NAME}` | Background color   |
| [body-color]      | `null` | `{THEME_NAME}` | Text color         |

#### Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-body-media-small only screen and (min-width: 480px);
@custom-media --ek-body-media-medium only screen and (min-width: 768px);
@custom-media --ek-body-media-large only screen and (min-width: 960px);
@custom-media --ek-body-media-wide only screen and (min-width: 1200px);
@custom-media --ek-body-media-huge only screen and (min-width: 1400px);

:root {
    /* base */
    --ek-body-font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    --ek-body-font-size: 13px;
    --ek-body-font-weight: 400;
    --ek-body-line-height: 1em;
    --ek-body-min-width: 320px;
    --ek-body-max-width: 1240px;
    /* prop 'body-indent' */
    --ek-body-indent-xxs: 5px;
    --ek-body-indent-xs: 10px;
    --ek-body-indent-s: 15px;
    --ek-body-indent-m: 20px;
    --ek-body-indent-l: 25px;
    --ek-body-indent-xl: 30px;
    --ek-body-indent-xxl: 35px;
    /* prop 'body-size' */
    --ek-body-max-width-xl: 1440px;
    --ek-body-max-width-xxl: 1640px;
    --ek-body-max-width-xxxl: 1840px;
}
```

#### Live demo

[![Edit body-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/bodyusage-kz6ss?fontsize=14 ':include :type=iframe width=100% height=500px')

---


#### Base props

##### `body-tag`

Default value `body`

```jsx
<Body body-tag='body'>
    ...
</Body>
```

##### `body-section-tag`

Default value `div`

```jsx
<Body>
    <BodySection body-section-tag='div'>
        ...
    </BodySection>
</Body>
```


#### Main props

##### `body-size`

- `xl` - css variable `--ek-body-max-width-xl`, default value: `1440px`
- `xxl` - css variable `--ek-body-max-width-xxl`, default value: `1640px`
- `xxxl` - css variable `--ek-body-max-width-xxxl`, default value: `1840px`

```jsx
<Body body-size='xl'>
    ...
</Body>
```

##### `body-indent`

- `none` - no indent, value: `0px`
- `xxs` - css variable `--ek-body-indent-xxs`, default value: `5px`
- `xs` - css variable `--ek-body-indent-xs`, default value: `10px`
- `s` - css variable `--ek-body-indent-s`, default value: `15px`
- `m` - css variable `--ek-body-indent-m`, default value: `20px`
- `l` - css variable `--ek-body-indent-l`, default value: `25px`
- `xl` - css variable `--ek-body-indent-xl`, default value: `30px`
- `xxl` - css variable `--ek-body-indent-xxl`, default value: `35px`

```jsx
<Body body-indent='m'>
    ...
</Body>
```


#### Color props

> Set the THEME NAME depending on the [theming][create_theme]

##### `body-background`

```jsx
<Body body-background={THEME_NAME}>
    ...
</Body>
```

##### `body-color`

```jsx
<Body body-color={THEME_NAME}>
    ...
</Body>
```
