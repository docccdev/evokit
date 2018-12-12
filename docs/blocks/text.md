[colors]: base/colors.md
[text]: base/text.md

# Text

Текстовый блок

---

## Использование

``` html
<span class='ek-text'>Текст</span>
```

```jsx
/*react*/
<script>
const { Text } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <Text>
                Текст
            </Text>
        )
    }
}
</script>
```

---

## Цвет

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ek-text_color_`[colors]  | Цвет текста.  |

``` html
<span class='ek-text ek-text_color_success'>Success</span>
```

```jsx
/*react*/
<script>
const { Text } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Text text-color='default'>default</Text>
                <br />
                <Text text-color='reset'>reset</Text>
                <br />
                <Text text-color='muted'>muted</Text>
                <br />
                <Text text-color='second'>second</Text>
                <br />
                <Text text-color='minor'>minor</Text>
                <br />
                <Text text-color='light'>light</Text>
                <br />
                <Text text-color='muted'>muted</Text>
                <br />
                <Text text-color='dark'>dark</Text>
                <br />
                <Text text-color='success'>success</Text>
                <br />
                <Text text-color='info'>info</Text>
                <br />
                <Text text-color='warning'>warning</Text>
                <br />
                <Text text-color='danger'>danger</Text>
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
|  `.ek-text_size_`[font-size][text]  | Размер текста.  |

``` html
<span class='ek-text ek-text_size_h2'>H2</span>
```

```jsx
/*react*/
<script>
const { Text } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Text text-size='small'>small</Text>
                <br />
                <Text text-size='default'>default</Text>
                <br />
                <Text text-size='big'>big</Text>
                <br />
                <Text text-size='h1'>h1</Text>
                <br />
                <Text text-size='h2'>h2</Text>
                <br />
                <Text text-size='h3'>h3</Text>
                <br />
                <Text text-size='h4'>h4</Text>
                <br />
                <Text text-size='h5'>h5</Text>
                <br />
                <Text text-size='h6'>h6</Text>
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
|  `.ek-text_weight_`[font-weight][text]  | Насыщенность шрифта.  |


``` html
<span class='ek-text ek-text_weight_medium'>medium 500</span>
```

```jsx
/*react*/
<script>
const { Text } = EvoKit;

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <Text text-weight='default'>default 400</Text>
                <br />
                <Text text-weight='thin'>thin 100</Text>
                <br />
                <Text text-weight='light'>light 300</Text>
                <br />
                <Text text-weight='medium'>medium 500</Text>
                <br />
                <Text text-weight='bold'>bold 700</Text>
                <br />
                <Text text-weight='black'>black 900</Text>
            </div>
        )
    }
}
</script>
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
