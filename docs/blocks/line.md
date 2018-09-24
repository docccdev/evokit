[sizes]: base/sizes.md
[colors]: base/colors.md

# Line

### Разделительная линия с внешними отступами.

Рисует горизонтальную линию, которая относится к блочным элементам. Линия всегда начинается с новой строки, а после нее все элементы отображаются на следующей строке.

---

## Использование

Блок состоит из одного класса `.ek-line`.

``` html
<hr class='ek-line' />
```

```jsx
/*react*/
<script>
const { Line } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <Line />
        )
    }
}
</script>
```

---

## Размер

Модификатор размера определяет внешние вертикальные отступы. По умолчанию, линия не имеет отступов.

|         Class         |          Description           |
|-----------------------|--------------------------------|
|  `.ek-line_size_`[sizes]  | Отступ сверху и снизу.  |

``` html
<hr class='ek-line ek-line_size_xxxl' />
```

```jsx
/*react*/
<script>
const { Line } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Line ek-size='xxs' />
                <Line ek-size='xs' />
                <Line ek-size='s' />
                <Line ek-size='m' />
                <Line ek-size='l' />
                <Line ek-size='xl' />
                <Line ek-size='xxl' />
                <Line ek-size='xxxl' />
            </div>
        )
    }
}
</script>
```

---

## Цвет

Определяет цвет линии.

|         Class         |          Description           |
|-----------------------|--------------------------------|
|  `.ek-line_color_`[colors]  | Цвет.  |

``` html
<hr class='ek-line ek-line_color_base'>
<hr class='ek-line ek-line_color_transparent'>
<hr class='ek-line ek-line_color_white'>
<hr class='ek-line ek-line_color_black'>
<hr class='ek-line ek-line_color_link'>
<hr class='ek-line ek-line_color_muted'>
<hr class='ek-line ek-line_color_success'>
<hr class='ek-line ek-line_color_info'>
<hr class='ek-line ek-line_color_warning'>
<hr class='ek-line ek-line_color_error'>
<hr class='ek-line ek-line_color_first'>
<hr class='ek-line ek-line_color_second'>
<hr class='ek-line ek-line_color_third'>
```

```jsx
/*react*/
<script>
const { Line } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Line ek-color='base' />
                <br />
                <Line ek-color='link' />
                <br />
                <Line ek-color='muted' />
                <br />
                <Line ek-color='success' />
                <br />
                <Line ek-color='info' />
                <br />
                <Line ek-color='warning' />
                <br />
                <Line ek-color='error' />
                <br />
                <Line ek-color='first' />
                <br />
                <Line ek-color='second' />
                <br />
                <Line ek-color='third' />
            </div>
        )
    }
}
</script>
```

---

## Стили

Устанавливает стиль линии.

|          Class          |      Description       |
|-------------------------|------------------------|
| `.ek-line_style_dotted` | Точечный.              |
| `.ek-line_style_dashed` | Пунктирный.            |

``` html
<hr class='ek-line ek-line_style_dotted' />
<br>
<div>текст</div>
<br>
<hr class='ek-line ek-line_style_dashed' />
```

```jsx
/*react*/
<script>
const { Line } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Line ek-style='dotted' />
                <br />
                <Line ek-style='dashed' />
            </div>
        )
    }
}
</script>
```
