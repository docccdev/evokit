<!--
docs/blocks/text|60
-->

[colors]: docs/base/colors.html
[text]: docs/base/text.html


# Text

Текстовый блок

---

## Использование

Добавьте класс `.ui-text` к текстовому элементу и выберите нужный модификатор.

``` html
<span class='ui-text'>Текст</span>
```

---

## Цвет

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ui-text_color_`[colors]  | Цвет текста.  |

``` html
<span class='ui-text ui-text_color_base'>Base</span>
<span class='ui-text ui-text_color_link'>Link</span>
<span class='ui-text ui-text_color_red'>Red</span>
<span class='ui-text ui-text_color_yellow'>Yellow</span>
<span class='ui-text ui-text_color_muted'>Muted</span>
<span class='ui-text ui-text_color_info'>Info</span>
<span class='ui-text ui-text_color_success'>Success</span>
<span class='ui-text ui-text_color_warning'>Warning</span>
<span class='ui-text ui-text_color_error'>Error</span>
```

---

## Размер

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ui-text_size_`[font-size][text]  | Размер текста.  |

``` html
<span class='ui-text ui-text_size_h1'>H1</span>
<span class='ui-text ui-text_size_h2'>H2</span>
<span class='ui-text ui-text_size_h3'>H3</span>
<span class='ui-text ui-text_size_h4'>H4</span>
<span class='ui-text ui-text_size_h5'>H5</span>
<span class='ui-text ui-text_size_h6'>H6</span>
```

---

## Насыщенность шрифта

|        Class       |    Description   |
|--------------------|------------------|
|  `.ui-text_weight_`[font-weight][text]  | Насыщенность текста.  |


``` html
<span class='ui-text ui-text_weight_base'>base</span>
<span class='ui-text ui-text_weight_thin'>100</span>
<span class='ui-text ui-text_weight_light'>300</span>
<span class='ui-text ui-text_weight_medium'>500</span>
<span class='ui-text ui-text_weight_bold'>700</span>
<span class='ui-text ui-text_weight_black'>900</span>
```

---

## Горизонтальное выравнивание

Устанавливает свойство `display: block`.

|           Class          |             Description              |
|--------------------------|--------------------------------------|
| `.ui-text_align_left`    | Выравнивание текста по левому краю.  |
| `.ui-text_align_center`  | Выравнивание текста по центру.       |
| `.ui-text_align_right`   | Выравнивание текста по правому краю. |
| `.ui-text_align_justify` | Выравнивание по ширине.              |

``` html
<span class='ui-text ui-text_align_left'>
    Текст слева
</span>
<span class='ui-text ui-text_align_center'>
    Текст по центру
</span>
<span class='ui-text ui-text_align_right'>
    Текст справа
</span>
```

---

## Вертикальное выравнивание

|            Class           |             Description              |
|----------------------------|--------------------------------------|
| `.ui-text_valign_top`      | Выравнивание верхнего края элемента по верху самого высокого элемента строки. |
| `.ui-text_valign_middle`   | Выравнивание средней точки элемента по базовой линии родителя плюс половина высоты родительского элемента. |
| `.ui-text_valign_bottom`   | Выравнивает основание текущего элемента по нижней части элемента строки, расположенного ниже всех. |

``` html
<span class="ui-text ui-text_valign_top ui-text_size_h1">Текст</span>
<span class='ui-text ui-text_valign_top'>
    вверху
</span>
<br>
<span class="ui-text ui-text_valign_middle ui-text_size_h1">Текст</span>
<span class='ui-text ui-text_valign_middle'>
    по середине
</span>
<br>
<span class="ui-text ui-text_valign_bottom ui-text_size_h1">Текст</span>
<span class='ui-text ui-text_valign_bottom'>
    внизу
</span>
```

---

## Перенос и обрезание

Устанавливает свойство `display: block`.

|            Class           |                        Description                       |
|----------------------------|----------------------------------------------------------|
| `.ui-text_wrap_ellipsis`   | Текст обрезается и к концу строки добавляется троеточие. |
| `.ui-text_wrap_two-line`   | Текст обрезается больше 2 строк.                             |
| `.ui-text_wrap_three-line` | Текст обрезается больше 3 строк.                             |
| `.ui-text_wrap_break`      | Перенос строк чтобы текст поместился в блок.             |
| `.ui-text_wrap_nowrap`     | Весь текст отображается одной строкой.                   |

``` html
<span class='ui-text ui-text_wrap_ellipsis'>
    Текст обрезается и к концу строки добавляется троеточие.
    Текст обрезается и к концу строки добавляется троеточие.
    Текст обрезается и к концу строки добавляется троеточие.
</span>
<br>
<span class='ui-text ui-text_wrap_two-line'>
    Текст обрезается больше 2 строк.
    Текст обрезается больше 2 строк.
    Текст обрезается больше 2 строк.
    Текст обрезается больше 2 строк.
    Текст обрезается больше 2 строк.
    Текст обрезается больше 2 строк.
    Текст обрезается больше 2 строк.
    Текст обрезается больше 2 строк.
    Текст обрезается больше 2 строк.
    Текст обрезается больше 2 строк.
    Текст обрезается больше 2 строк.
</span>
<br>
<span class='ui-text ui-text_wrap_three-line'>
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
    Текст обрезается больше 3 строк.
</span>
<br>
<span class='ui-text ui-text_wrap_three-line'>
    Перенос строк добавляется автоматически, чтобы слово поместилось в заданную ширину блока.
    Перенос строк добавляется автоматически, чтобы слово поместилось в заданную ширину блока.
</span>
<br>
<span class='ui-text ui-text_wrap_break'>
    Перенос строк добавляется автоматически, чтобы слово поместилось в заданную ширину блока.
    Перенос строк добавляется автоматически, чтобы слово поместилось в заданную ширину блока.
</span>
<br>
<span class='ui-text ui-text_wrap_nowrap'>
    Пробелы не учитываются, переносы строк в коде HTML игнорируются, весь текст отображается одной строкой; вместе с тем, добавление тега <br> переносит текст на новую строку.
</span>
```

---

## Стили

|            Class           |             Description              |
|----------------------------|--------------------------------------|
| `.ui-text_style_overline`  | Линия проходит над текстом.          |
| `.ui-text_style_strike`    | Создает перечеркнутый текст.         |
| `.ui-text_style_underline` | Устанавливает подчеркнутый текст.    |
| `.ui-text_style_italic`    | Курсивное начертание.                |
| `.ui-text_style_read`      | Для чтения `line-height: 1.5em`.     |

``` html
<span class='ui-text ui-text_style_overline'>
    Линия проходит над текстом
</span>
<br>
<span class='ui-text ui-text_style_strike'>
    Перечеркнутый текст
</span>
<br>
<span class='ui-text ui-text_style_underline'>
    Подчеркнутый текст
</span>
<br>
<span class='ui-text ui-text_style_italic'>
    Курсивное начертание
</span>
<br>
<span class='ui-text ui-text_style_read'>
    Текст для чтения
</span>
```
