<!--
docs/blocks/text|4
-->

# Text

Текстовый блок

---

## Использование

Добавьте класс `.ui-text` к текстовому элементу и выберите нужный модификатор.

``` html
<div class='doc-example'>
    <span class='ui-text ui-text_color_success'>
        Text
    </span>
</div>
```

---

## Цвет

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ui-text_color_`[color](docs/base/text.html)  | Цвет текста.  |

``` html
<div class='doc-example'>
    <div class='ui-text ui-text_color_link'>
        Link
    </div>
    <div class='ui-text ui-text_color_muted'>
        Muted
    </div>
    <div class='ui-text ui-text_color_info'>
        Info
    </div>
    <div class='ui-text ui-text_color_success'>
        Success
    </div>
    <div class='ui-text ui-text_color_warning'>
        Warning
    </div>
    <div class='ui-text ui-text_color_error'>
        Error
    </div>
</div>
```

---

## Размер

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ui-text_size_`[font-size](docs/base/text.html)  | Размер текста.  |

``` html
<div class='doc-example'>
    <div class='ui-text ui-text_size_h1'>
        Размер заголовка h1
    </div>
    <div class='ui-text ui-text_size_h2'>
        Размер заголовка h2
    </div>
    <div class='ui-text ui-text_size_h3'>
        Размер заголовка h3
    </div>
    <div class='ui-text ui-text_size_h4'>
        Размер заголовка h4
    </div>
    <div class='ui-text ui-text_size_h5'>
        Размер заголовка h5
    </div>
    <div class='ui-text ui-text_size_h6'>
        Размер заголовка h6
    </div>
</div>
```

---

## Насыщенность шрифта

|        Class       |    Description   |
|--------------------|------------------|
|  `.ui-text_weight_`[font-weight](docs/base/text.html)  | Насыщенность текста.  |


``` html
<div class="doc-example">
    <span class='ui-text ui-text_weight_thin'>
        100
    </span>
    <span class='ui-text ui-text_weight_light'>
        300
    </span>
    <span class='ui-text ui-text_weight_regular'>
        400
    </span>
    <span class='ui-text ui-text_weight_medium'>
        500
    </span>
    <span class='ui-text ui-text_weight_bold'>
        700
    </span>
    <span class='ui-text ui-text_weight_black'>
        900
    </span>
</div>
```

---

## Горизонтальное выравнивание

|           Class          |             Description              |
|--------------------------|--------------------------------------|
| `.ui-text_align_left`    | Выравнивание текста по левому краю.  |
| `.ui-text_align_center`  | Выравнивание текста по центру.       |
| `.ui-text_align_right`   | Выравнивание текста по правому краю. |
| `.ui-text_align_justify` | Выравнивание по ширине.              |

``` html
<div class="doc-example">
    <div class='ui-text ui-text_align_left'>
        Текст слева
    </div>
    <div class='ui-text ui-text_align_center'>
        Текст по центру
    </div>
    <div class='ui-text ui-text_align_right'>
        Текст справа
    </div>
</div>
```

---

## Вертикальное выравнивание

|            Class           |             Description              |
|----------------------------|--------------------------------------|
| `.ui-text_valign_top`      | Выравнивание верхнего края элемента по верху самого высокого элемента строки. |
| `.ui-text_valign_middle`   | Выравнивание средней точки элемента по базовой линии родителя плюс половина высоты родительского элемента. |
| `.ui-text_valign_bottom`   | Выравнивает основание текущего элемента по нижней части элемента строки, расположенного ниже всех. |

``` html
<div class="doc-example">
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
</div>
```

---

## Перенос и обрезание

|            Class           |                        Description                       |
|----------------------------|----------------------------------------------------------|
| `.ui-text_wrap_ellipsis`   | Текст обрезается и к концу строки добавляется троеточие. |
| `.ui-text_wrap_two-line`   | Текст обрезается больше 2 строк.                             |
| `.ui-text_wrap_three-line` | Текст обрезается больше 3 строк.                             |
| `.ui-text_wrap_break`      | Перенос строк чтобы текст поместился в блок.             |
| `.ui-text_wrap_nowrap`     | Весь текст отображается одной строкой.                   |

``` html
<div class='doc-example'>
    <div class='ui-text ui-text_wrap_ellipsis'>
        Текст обрезается и к концу строки добавляется троеточие.
        Текст обрезается и к концу строки добавляется троеточие.
        Текст обрезается и к концу строки добавляется троеточие.
    </div>
    <br>
    <div class='ui-text ui-text_wrap_two-line'>
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
    </div>
    <br>
    <div class='ui-text ui-text_wrap_three-line'>
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
    </div>
    <br>
    <div class='ui-text ui-text_wrap_three-line'>
        Перенос строк добавляется автоматически, чтобы слово поместилось в заданную ширину блока.
        Перенос строк добавляется автоматически, чтобы слово поместилось в заданную ширину блока.
    </div>
    <br>
    <div class='ui-text ui-text_wrap_break'>
        Перенос строк добавляется автоматически, чтобы слово поместилось в заданную ширину блока.
        Перенос строк добавляется автоматически, чтобы слово поместилось в заданную ширину блока.
    </div>
    <br>
    <div class='ui-text ui-text_wrap_nowrap'>
        Пробелы не учитываются, переносы строк в коде HTML игнорируются, весь текст отображается одной строкой; вместе с тем, добавление тега <br> переносит текст на новую строку.
    </div>
</div>
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
<div class="doc-example">
    <div class='ui-text ui-text_style_overline'>
        Линия проходит над текстом
    </div>
    <div class='ui-text ui-text_style_strike'>
        Создает перечеркнутый текст
    </div>
    <div class='ui-text ui-text_style_underline'>
        Устанавливает подчеркнутый текст
    </div>
    <div class='ui-text ui-text_style_italic'>
        Курсивное начертание
    </div>
    <div class='ui-text ui-text_style_read'>
        Текст для чтения
    </div>
</div>
```
