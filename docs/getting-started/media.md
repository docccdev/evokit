[evokit]: /packages/evokit/
[evokit-box]: /packages/evokit-box/
[custom-media]: //drafts.csswg.org/mediaqueries-5/#custom-mq
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-tag-body]: //www.w3schools.com/tags/tag_body.asp
[html-tag-div]: //www.w3schools.com/tags/tag_div.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

# Use media

All blocks have additional styles for Media Rules, this will reduce the size of the main bundle of styles and the flexibility of customization.

- `small` - min screen width `480px`
- `medium` - min screen width `768px`
- `large` - min screen width `960px`
- `wide` - min screen width `1200px`
- `huge` - min screen width `1400px`

!> The media styles use [custom-media] and has bad browsers support. Please use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

---

## Usage

See demo how to use media styles on the example of the [Box][evokit-box] block.


```jsx
import { Box } from 'evokit-box';
import 'evokit-box/style.css';
import 'evokit-box/style@large.css';
import 'evokit-box/style@wide.css';

<Box box-padding={['s', 'm@large', 'l@wide']}>
    ...
</Box>
```

## Customize

> All blocks has css variables for media is default. If you want to override one or more media, please define them below the css import.

Notice the pattern custom media: `--ek-{BLOCK_NAME}-media-{MEDIA_NAME}`.

```css
@custom-media --ek-box-media-small only screen and (min-width: 480px);
@custom-media --ek-box-media-medium only screen and (min-width: 768px);
@custom-media --ek-box-media-large only screen and (min-width: 960px);
@custom-media --ek-box-media-wide only screen and (min-width: 1200px);
@custom-media --ek-box-media-huge only screen and (min-width: 1400px);
```

## Live demo

[![Edit box-media](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/boxmedia-kygtc?fontsize=14 ':include :type=iframe width=100% height=500px')
