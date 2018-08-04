[colors]: base/colors.md
[text]: base/text.md


# Text

Текстовый блок

---

## Использование

Добавьте класс `.ek-text` к текстовому элементу и выберите нужный модификатор.

``` html
<span class='ek-text'>Текст</span>
```

---

## Цвет

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ek-text_color_`[colors]  | Цвет текста.  |

``` html
<span class='ek-text ek-text_color_base'>Base</span>
<span class='ek-text ek-text_color_white'>White</span>
<span class='ek-text ek-text_color_link'>Link</span>
<span class='ek-text ek-text_color_red'>Red</span>
<span class='ek-text ek-text_color_yellow'>Yellow</span>
<span class='ek-text ek-text_color_muted'>Muted</span>
<span class='ek-text ek-text_color_info'>Info</span>
<span class='ek-text ek-text_color_success'>Success</span>
<span class='ek-text ek-text_color_warning'>Warning</span>
<span class='ek-text ek-text_color_error'>Error</span>
```

---

## Размер

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ek-text_size_`[font-size][text]  | Размер текста.  |

``` html
<span class='ek-text ek-text_size_h1'>H1</span>
<span class='ek-text ek-text_size_h2'>H2</span>
<span class='ek-text ek-text_size_h3'>H3</span>
<span class='ek-text ek-text_size_h4'>H4</span>
<span class='ek-text ek-text_size_h5'>H5</span>
<span class='ek-text ek-text_size_h6'>H6</span>
```

---

## Насыщенность шрифта

|        Class       |    Description   |
|--------------------|------------------|
|  `.ek-text_weight_`[font-weight][text]  | Насыщенность текста.  |


``` html
<span class='ek-text ek-text_weight_base'>base</span>
<span class='ek-text ek-text_weight_thin'>100</span>
<span class='ek-text ek-text_weight_light'>300</span>
<span class='ek-text ek-text_weight_medium'>500</span>
<span class='ek-text ek-text_weight_bold'>700</span>
<span class='ek-text ek-text_weight_black'>900</span>
```

---

## Горизонтальное выравнивание

Устанавливает свойство `display: block`.

|           Class          |             Description              |
|--------------------------|--------------------------------------|
| `.ek-text_align_left`    | Выравнивание текста по левому краю.  |
| `.ek-text_align_center`  | Выравнивание текста по центру.       |
| `.ek-text_align_right`   | Выравнивание текста по правому краю. |
| `.ek-text_align_justify` | Выравнивание по ширине.              |

``` html
<span class='ek-text ek-text_align_left'>
    Текст слева
</span>
<span class='ek-text ek-text_align_center'>
    Текст по центру
</span>
<span class='ek-text ek-text_align_right'>
    Текст справа
</span>
```

---

## Вертикальное выравнивание

|            Class           |             Description              |
|----------------------------|--------------------------------------|
| `.ek-text_valign_top`      | Выравнивание верхнего края элемента по верху самого высокого элемента строки. |
| `.ek-text_valign_middle`   | Выравнивание средней точки элемента по базовой линии родителя плюс половина высоты родительского элемента. |
| `.ek-text_valign_bottom`   | Выравнивает основание текущего элемента по нижней части элемента строки, расположенного ниже всех. |

``` html
<span class="ek-text ek-text_valign_top ek-text_size_h1">Текст</span>
<span class='ek-text ek-text_valign_top'>
    вверху
</span>
<br>
<span class="ek-text ek-text_valign_middle ek-text_size_h1">Текст</span>
<span class='ek-text ek-text_valign_middle'>
    по середине
</span>
<br>
<span class="ek-text ek-text_valign_bottom ek-text_size_h1">Текст</span>
<span class='ek-text ek-text_valign_bottom'>
    внизу
</span>
```

---

## Преобразование текста

|            Class           |             Description              |
|----------------------------|--------------------------------------|
| `.ek-text_transform_none`       | Не меняет регистр символов. |
| `.ek-text_transform_capitalize` | Первый символ каждого слова в предложении будет заглавным. Остальные символы свой вид не меняют. |
| `.ek-text_transform_lowercase`  | Все символы текста становятся строчными (нижний регистр). |
| `.ek-text_transform_uppercase`  | Все символы текста становятся прописными (верхний регистр). |

``` html
<span class="ek-text ek-text_transform_capitalize">заглавные буквы</span>
<span class="ek-text ek-text_transform_lowercase">Нижний Регистр</span>
<span class="ek-text ek-text_transform_uppercase">Верхний Регистр</span>
```
---

## Перенос и обрезание

Устанавливает свойство `display: block` для `ellipsis`, `two-line` и `three-line`.

|            Class           |                        Description                       |
|----------------------------|----------------------------------------------------------|
| `.ek-text_wrap_ellipsis`   | Текст обрезается и к концу строки добавляется троеточие. |
| `.ek-text_wrap_two-line`   | Текст обрезается больше 2 строк.                             |
| `.ek-text_wrap_three-line` | Текст обрезается больше 3 строк.                             |
| `.ek-text_wrap_break`      | Перенос строк чтобы текст поместился в блок.             |
| `.ek-text_wrap_nowrap`     | Весь текст отображается одной строкой.                   |

``` html
<span class='ek-text ek-text_wrap_ellipsis'>
    Текст обрезается и к концу строки добавляется троеточие.
    Текст обрезается и к концу строки добавляется троеточие.
    Текст обрезается и к концу строки добавляется троеточие.
</span>
<br>
<span class='ek-text ek-text_wrap_two-line'>
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
<span class='ek-text ek-text_wrap_three-line'>
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
<span class='ek-text ek-text_wrap_break'>
    Перенос|строк|добавляется|автоматически|Перенос|строк|добавляется|автоматически|Перенос|строк|добавляется|автоматически|Перенос|строк|добавляется|автоматически|Перенос|строк|добавляется|автоматически|Перенос|строк|добавляется|автоматически.
</span>
<br>
<br>
<span class='ek-text ek-text_wrap_nowrap'>
    Пробелы не учитываются, переносы строк в коде HTML игнорируются, весь текст отображается одной строкой; вместе с тем, добавление тега &lt;br&gt; <br> переносит текст на новую строку.
</span>
```

---

## Стили

|            Class           |             Description              |
|----------------------------|--------------------------------------|
| `.ek-text_style_overline`  | Линия проходит над текстом.          |
| `.ek-text_style_strike`    | Создает перечеркнутый текст.         |
| `.ek-text_style_underline` | Устанавливает подчеркнутый текст.    |
| `.ek-text_style_italic`    | Курсивное начертание.                |
| `.ek-text_style_read`      | Для чтения `line-height: 1.5em`.     |

``` html
<span class='ek-text ek-text_style_overline'>
    Линия проходит над текстом
</span>
<br>
<span class='ek-text ek-text_style_strike'>
    Перечеркнутый текст
</span>
<br>
<span class='ek-text ek-text_style_underline'>
    Подчеркнутый текст
</span>
<br>
<span class='ek-text ek-text_style_italic'>
    Курсивное начертание
</span>
<br>
<span class='ek-text ek-text_style_read'>
    Текст для чтения
</span>
```
