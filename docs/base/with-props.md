[evokit]: /packages/evokit/
[evokit-link]: /packages/evokit-link/

# With props

The function `withProps`from the npm package [evokit], set the default props for block

---

#### Usage

For examples, consider the use on the [Link][evokit-link] block.

``` jsx
import { withProps } from 'evokit';
import { Link } from 'evokit-link';

const LinkNofollow = withProps(Link, {
    'link-color': 'gray',
    rel: 'nofollow'
});

// input:
<LinkNofollow href='#' />
// output:
<a href='#' class='ek-link ek-link_color_gray' rel='nofollow' />
```

Override default props:
``` jsx
// input:
<LinkNofollow href='#' link-color='red' rel='help' />
// output:
<a href='#' class='ek-link ek-link_color_red' rel='help' />
```

Remove default props:
``` jsx
// input:
<LinkNofollow href='#' link-color={null} rel={null} />
// output:
<a href='#' class='ek-link' />
```
