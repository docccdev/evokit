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

---

## Размер

Модификатор размера определяет внешние вертикальные отступы. По умолчанию, линия не имеет отступов.

|         Class         |          Description           |
|-----------------------|--------------------------------|
|  `.ek-line_size_`[sizes]  | Отступ сверху и снизу.  |

``` html
<hr class='ek-line ek-line_size_xxxl' />
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
