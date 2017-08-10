<!--
docs/removed/text|20
-->

# Text - **УДАЛЕН**

Коллекция полезных классов для стилизации вашего контента.

## Текстовые стили

|         Class        |        Description        |
|----------------------|---------------------------|
| `.ui-text-underline` |  Подчеркнутый текст.  |
| `.ui-text-italic`    |  Курсивный текст.     |
| `.ui-text-strike`    |  Перечеркнутый текст. |

``` html
<div class="doc-example">
    <span class='ui-text-underline'>
        Подчеркнутый
    </span>
    <span class='ui-text-italic'>
        Курсивный
    </span>
    <span class='ui-text-strike'>
        Перечеркнутый
    </span>
</div>
```

---

## Насыщенность шрифта

|        Class       |    font weight   |
|--------------------|------------------|
| `.ui-text-thin`    | 100 |
| `.ui-text-light`   | 300 |
| `.ui-text-regular` | 400 |
| `.ui-text-medium`  | 500 |
| `.ui-text-bold`    | 700 |
| `.ui-text-black`   | 900 |

``` html
<div class="doc-example">
    <span class='ui-text-thin'>
        100
    </span>
    <span class='ui-text-light'>
        300
    </span>
    <span class='ui-text-regular'>
        400
    </span>
    <span class='ui-text-medium'>
        500
    </span>
    <span class='ui-text-bold'>
        700
    </span>
    <span class='ui-text-black'>
        900
    </span>
</div>
```

---

## Цвет текста

|       Class      |     Description     |
|------------------|---------------------|
| `.ui-text-muted` | Приглушенный цвет. |

``` html
<div class="doc-example">
    <div class='ui-text-muted'>
        Приглушенный цвет текста
    </div>
</div>
```

---

## Выравнивание текста

Добавьте один из этих классов для выравнивания текста по горизонтале.

|        Class      |          Description          |
|-------------------|-------------------------------|
| `.ui-text-left`   |  Выравнивает текст влево.     |
| `.ui-text-center` |  Выравнивает текст по центру. |
| `.ui-text-right`  |  Выравнивает текст вправо.    |

``` html
<div class="doc-example">
    <div class='ui-text-center'>
        Текст по центру
    </div>
</div>
```

---

## Вертикальное выравнивание

Добавьте один из этих классов для выравнивания текста по вертикали.

|        Class       |             Description             |
|--------------------|-------------------------------------|
| `.ui-text-top`     |  Выравнивает текст к верху.         |
| `.ui-text-middle`  |  Выравнивает к центру по вертикали. |
| `.ui-text-bottom`  |  Выравнивает текст к низу.          |

``` html
<div class='doc-example'>
    <span class='ui-text-middle'>
        Выравнивает к центру по вертикали
    </span>
</div>

```

---

## Перенос текста

Добавьте один из этих классов, чтобы определить перенос текста.

|         Class        |                         Description                        |
|----------------------|------------------------------------------------------------|
| `.ui-text-ellipsis`  |  Текст обрезается и к концу строки добавляется троеточие.  |
| `.ui-text-break`     |  Перенос строк чтобы текст поместился в блок.              |
| `.ui-text-nowrap`    |  Весь текст отображается одной строкой.                    |

``` html
<div class='doc-example'>
    <div class='ui-text-ellipsis'>
        Текст обрезается и к концу строки добавляется троеточие,
        Текст обрезается и к концу строки добавляется троеточие,
        Текст обрезается и к концу строки добавляется троеточие
    </div>
</div>
```

