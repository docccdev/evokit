[sizes]: base/sizes.md
[colors]: base/colors.md

# Line

### Разделительная линия с внешними отступами.

Рисует горизонтальную линию, которая относится к блочным элементам. Линия всегда начинается с новой строки, а после нее все элементы отображаются на следующей строке.

---

## Использование

Блок состоит из одного класса `.ek-line`.

``` html
<hr class='ek-line'>
```

```jsx
/*react*/
<script>
const { Line } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <Line line-indent='xl' />
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
|  `.ek-line_indent_`[sizes]  | Отступ сверху и снизу.  |

``` html
<hr class='ek-line ek-line_indent_xl'>
```

```jsx
/*react*/
<script>
const { Line } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Line line-indent='xxs' />
                <Line line-indent='xs' />
                <Line line-indent='s' />
                <Line line-indent='m' />
                <Line line-indent='l' />
                <Line line-indent='xl' />
                <Line line-indent='xxl' />
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
<hr class='ek-line ek-line_color_success'>
```

```jsx
/*react*/
<script>
const { Line } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Line line-indent='xl' line-color='base' />
                <Line line-indent='xl' line-color='link' />
                <Line line-indent='xl' line-color='muted' />
                <Line line-indent='xl' line-color='success' />
                <Line line-indent='xl' line-color='info' />
                <Line line-indent='xl' line-color='warning' />
                <Line line-indent='xl' line-color='error' />
                <Line line-indent='xl' line-color='first' />
                <Line line-indent='xl' line-color='second' />
                <Line line-indent='xl' line-color='third' />
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
<hr class='ek-line ek-line_style_dotted'>
```

```jsx
/*react*/
<script>
const { Line } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Line line-indent='xl' line-style='dotted' />
                <Line line-indent='xl' line-style='dashed' />
            </div>
        )
    }
}
</script>
```
