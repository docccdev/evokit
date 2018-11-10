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
<a class='ek-link ek-link_color_success'>Success</a>
```

```jsx
/*react*/
<script>
const { Link } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Link href="#" link-color='default'>default</Link>
                <br />
                <Link href="#" link-color='reset'>reset</Link>
                <br />
                <Link href="#" link-color='muted'>muted</Link>
                <br />
                <Link href="#" link-color='second'>second</Link>
                <br />
                <Link href="#" link-color='minor'>minor</Link>
                <br />
                <Link href="#" link-color='light'>light</Link>
                <br />
                <Link href="#" link-color='muted'>muted</Link>
                <br />
                <Link href="#" link-color='dark'>dark</Link>
                <br />
                <Link href="#" link-color='success'>success</Link>
                <br />
                <Link href="#" link-color='info'>info</Link>
                <br />
                <Link href="#" link-color='warning'>warning</Link>
                <br />
                <Link href="#" link-color='danger'>danger</Link>
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
<a class='ek-link ek-link_size_h2'>H2</a>
```

```jsx
/*react*/
<script>
const { Link } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Link href="#" link-size='small'>small</Link>
                <br />
                <Link href="#" link-size='default'>default</Link>
                <br />
                <Link href="#" link-size='big'>big</Link>
                <br />
                <Link href="#" link-size='h1'>h1</Link>
                <br />
                <Link href="#" link-size='h2'>h2</Link>
                <br />
                <Link href="#" link-size='h3'>h3</Link>
                <br />
                <Link href="#" link-size='h4'>h4</Link>
                <br />
                <Link href="#" link-size='h5'>h5</Link>
                <br />
                <Link href="#" link-size='h6'>h6</Link>
            </div>
        )
    }
}
</script>
```

---

## Насыщенность шрифта

|        Class       |    Description   |
|--------------------|------------------|
|  `.ek-link_weight_`[font-weight][text]  | Насыщенность шрифта.  |


``` html
<a class='ek-link ek-link_weight_medium'>medium 500</a>
```

```jsx
/*react*/
<script>
const { Link } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Link href="#" link-weight='default'>default 400</Link>
                <br />
                <Link href="#" link-weight='thin'>thin 100</Link>
                <br />
                <Link href="#" link-weight='light'>light 300</Link>
                <br />
                <Link href="#" link-weight='medium'>medium 500</Link>
                <br />
                <Link href="#" link-weight='bold'>bold 700</Link>
                <br />
                <Link href="#" link-weight='black'>black 900</Link>
            </div>
        )
    }
}
</script>
```

---

## Стили

|          Class          |             Description             |
|-------------------------|-------------------------------------|
| `.ek-link_style_dotted` | Добавляет пунктирное подчеркивание. |
| `.ek-link_style_multi-line` | Делает пространство между многострочной ссылкой кликабельным. |

``` html
<a class='ek-link ek-link_style_dotted'>Пунктирная ссылка</a>
```

```jsx
/*react*/
<script>
const { Link } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Link href="#" link-style='dotted'>dotted</Link>
                <br />
                <Link href="#" link-style='multi-line'>ссылка в две <br /> строки</Link>
            </div>
        )
    }
}
</script>
```
