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
                <Line line-size='xxs' />
                <Line line-size='xs' />
                <Line line-size='s' />
                <Line line-size='m' />
                <Line line-size='l' />
                <Line line-size='xl' />
                <Line line-size='xxl' />
                <Line line-size='xxxl' />
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
                <Line line-color='base' />
                <br />
                <Line line-color='link' />
                <br />
                <Line line-color='muted' />
                <br />
                <Line line-color='success' />
                <br />
                <Line line-color='info' />
                <br />
                <Line line-color='warning' />
                <br />
                <Line line-color='error' />
                <br />
                <Line line-color='first' />
                <br />
                <Line line-color='second' />
                <br />
                <Line line-color='third' />
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
                <Line line-style='dotted' />
                <br />
                <Line line-style='dashed' />
            </div>
        )
    }
}
</script>
```
