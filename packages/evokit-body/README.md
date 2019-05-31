[evokit-core]: /packages/evokit-core/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-tag-body]: //www.w3schools.com/tags/tag_body.asp
[html-tag-div]: //www.w3schools.com/tags/tag_div.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[create_theme]: docs/base/theme

[body-size]: #body-size
[body-indent]: #body-indent
[body-background]: #body-background
[body-color]: #body-color


[README]: /packages/evokit-body/README.md
[CHANGELOG]: /packages/evokit-body/CHANGELOG.md
[CREATE THEME]: /packages/evokit-body/CREATE_THEME.md

[![](https://img.shields.io/npm/v/evokit-body.svg?style=flat-square&colorB=blue)](https://www.npmjs.com/package/evokit-body)

# EvoKit - Body

- **README**
- [CHANGELOG]
- [CREATE THEME]

Used for body of the web page and sets the basic styles. Contains two elements `<Body>` and `<Body.Section>`.

- `<Body>` has a default html tag [body][html-tag-body]
- `<Body.Section>` has a default html tag [div][html-tag-div]

---

#### Install

> Peer dependencies [evokit-core]

```bash
npm install evokit-body --save
```


#### Usage

> The styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.


```jsx
import { Body } from 'evokit-body';
import 'evokit-body/style.css';

<Body>
    <Body.Section>
        content
    </Body.Section>
</Body>

```

#### Variables

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-body-media-small only screen and (min-width: 480px);
@custom-media --ek-body-media-medium only screen and (min-width: 768px);
@custom-media --ek-body-media-large only screen and (min-width: 960px);
@custom-media --ek-body-media-wide only screen and (min-width: 1200px);
@custom-media --ek-body-media-huge only screen and (min-width: 1400px);

:root {
    // common
    --ek-body-font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    --ek-body-font-size: 13px;
    --ek-body-font-weight: 400;
    --ek-body-line-height: 1em;
    --ek-body-min-width: 320px;
    --ek-body-max-width: 1240px;
    // prop `body-indent`
    --ek-body-indent-xxs: 5px;
    --ek-body-indent-xs: 10px;
    --ek-body-indent-s: 15px;
    --ek-body-indent-m: 20px;
    --ek-body-indent-l: 25px;
    --ek-body-indent-xl: 30px;
    --ek-body-indent-xxl: 35px;
    // prop `body-size`
    --ek-body-max-width-xl: 1440px;
    --ek-body-max-width-xxl: 1640px;
    --ek-body-max-width-xxxl: 1840px;
}

```

#### Props

| Key | Values | Description |
|-------|--------|-------------|
| [body-size]       | `xl` `xxl` `xxxl` | Max width for `<Body.Section>` |
| [body-indent]     | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Padding on the side left and right for `<Body.Section>` |
| [body-background] | `${themeName}` - [Create Theme][create_theme] | Background color |
| [body-color]      | `${themeName}` - [Create Theme][create_theme] | Text color |


##### `body-size`

- `xl` - css variable `--ek-body-max-width-xl`, default value: `1440px`
- `xxl` - css variable `--ek-body-max-width-xxl`, default value: `1640px`
- `xxxl` - css variable `--ek-body-max-width-xxxl`, default value: `1840px`

```jsx
<Body body-size='...'></Body>
```

```jsx
/*react*/
<script>
const { Body, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['xl', 'xxl', 'xxxl']}>
                {(value) => (
                    <Body body-size={value}>
                        <Body.Section>
                            <Example.Box>
                                {`body-size='${value || ''}'`}
                            </Example.Box>
                        </Body.Section>
                    </Body>
                )}
            </Example>
        )
    }
}
</script>
```

---

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
<Body body-indent='...'></Body>
```

```jsx
/*react*/
<script>
const { Body, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Body body-indent={value} body-background='muted'>
                        <Body.Section>
                            <Example.Box>
                                {`body-indent='${value || ''}'`}
                            </Example.Box>
                        </Body.Section>
                    </Body>
                )}
            </Example>
        )
    }
}
</script>
```


##### `body-background`

> Set the background color depending on the [created theme][create_theme], used `background color` value.

```jsx
<Body body-background='...'></Body>
```

```jsx
/*react*/
<script>
const { Body, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <Body body-background={value}>
                        <Body.Section>
                            {`body-background='${value || ''}'`}
                        </Body.Section>
                    </Body>
                )}
            </Example>
        )
    }
}
</script>
```

##### `body-color`

> Set the color depending on the [created theme][create_theme], used `text color` value.

```jsx
<Body body-color='...'></Body>
```

```jsx
/*react*/
<script>
const { Body, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <Body body-color={value}>
                        <Body.Section>
                            {`body-color='${value || ''}'`}
                        </Body.Section>
                    </Body>
                )}
            </Example>
        )
    }
}
</script>
```
