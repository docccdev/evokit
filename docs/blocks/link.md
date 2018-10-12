[colors]: base/colors.md
[text]: base/text.md

# Link

Блок предназначен для создания ссылок.

---

## Использование

``` html
<a class='ek-link'>Cсылка</a>
```

```jsx
/*react*/
<script>
const { Link } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <Link href="#">
                Ссылка
            </Link>
        )
    }
}
</script>
```

---

## Цвет

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ek-link_color_`[colors]  | Цвет ссылки.  |

``` html
<a class='ek-link ek-link_color_base'>Base</a>
<a class='ek-link ek-link_color_link'>Link</a>
<a class='ek-link ek-link_color_white'>White</a>
<a class='ek-link ek-link_color_muted'>Muted</a>
<a class='ek-link ek-link_color_link'>Link</a>
<a class='ek-link ek-link_color_info'>Info</a>
<a class='ek-link ek-link_color_success'>Success</a>
<a class='ek-link ek-link_color_warning'>Warning</a>
<a class='ek-link ek-link_color_error'>Error</a>
<a class='ek-link ek-link_color_first'>First</a>
<a class='ek-link ek-link_color_second'>Second</a>
<a class='ek-link ek-link_color_third'>Third</a>
<a class='ek-link ek-link_color_transparent'>Transparent</a>
```

```jsx
/*react*/
<script>
const { Link } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Link href="#" link-color='base'>base</Link>
                <br />
                <Link href="#" link-color='link'>link</Link>
                <br />
                <Link href="#" link-color='white'>white</Link>
                <br />
                <Link href="#" link-color='muted'>muted</Link>
                <br />
                <Link href="#" link-color='info'>info</Link>
                <br />
                <Link href="#" link-color='success'>success</Link>
                <br />
                <Link href="#" link-color='warning'>warning</Link>
                <br />
                <Link href="#" link-color='error'>error</Link>
                <br />
                <Link href="#" link-color='first'>first</Link>
                <br />
                <Link href="#" link-color='second'>second</Link>
                <br />
                <Link href="#" link-color='third'>third</Link>
                <br />
                <Link href="#" link-color='transparent'>transparent</Link>
            </div>
        )
    }
}
</script>
```

---

## Размер

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ek-link_size_`[font-size][text]  | Размер текста.  |

``` html
<a class='ek-link ek-link_size_h1'>H1</a>
<a class='ek-link ek-link_size_h2'>H2</a>
<a class='ek-link ek-link_size_h3'>H3</a>
<a class='ek-link ek-link_size_h4'>H4</a>
<a class='ek-link ek-link_size_h5'>H5</a>
<a class='ek-link ek-link_size_h6'>H6</a>
```

---

## Насыщенность шрифта

|        Class       |    Description   |
|--------------------|------------------|
|  `.ek-link_weight_`[font-weight][text]  | Насыщенность шрифта.  |


``` html
<a class='ek-link ek-link_weight_base'>base</a>
<a class='ek-link ek-link_weight_thin'>100</a>
<a class='ek-link ek-link_weight_light'>300</a>
<a class='ek-link ek-link_weight_medium'>500</a>
<a class='ek-link ek-link_weight_bold'>700</a>
<a class='ek-link ek-link_weight_black'>900</a>
```

---

## Стили

|          Class          |             Description             |
|-------------------------|-------------------------------------|
| `.ek-link_style_dotted` | Добавляет пунктирное подчеркивание. |
| `.ek-link_style_multi-line` | Делает пространство между многострочной ссылкой кликабельным. |

``` html
<a class='ek-link ek-link_style_dotted'>Пунктирная ссылка</a>
<hr class="ek-line ek-line_size_xl">
<a class='ek-link ek-link_style_multi-line'>Многострочная <br><br> ссылка</a>
```
