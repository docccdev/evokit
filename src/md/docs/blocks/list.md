<!--
docs/blocks/list|50
-->

# Список

Блок `.ui-list` создает список. Каждый элемент списка должен иметь класс `.ui-list__item`.

---

## Использование

Чтобы применить этот компонент, просто добавьте класс `.ui-list` к тегу `<ul>` или `<ol>`.


``` html
<ul class='ui-list'>
    <li class='ui-list__item'>
        Item
    </li>
    <li class='ui-list__item'>
        Item
    </li>
</ul>
```

---

## Размер

Модификатор размера списка определяет вертикальные отступы.

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ui-list_size_`[size](docs/base/sizes.html)  | Отступ между ячейками.  |

``` html
<ul class='ui-list ui-list_size_xxxl'>
    <li class='ui-list__item'>
        Item
    </li>
    <li class='ui-list__item'>
        Item
    </li>
</ul>
```

---

## Стили маркера

Изменяет вид маркера для каждого элемента списка.

|            Class          |            Description            |
|---------------------------|-----------------------------------|
|  `.ui-list_style_decimal` |  Арабские числа (1, 2, 3, 4,...). |
|  `.ui-list_style_dash`    |  Маркер в виде тире.              |
|  `.ui-list_style_disc`    |  Маркер в виде точки.             |

``` html
<ul class='ui-list ui-list_style_decimal'>
    <li class='ui-list__item'>
        Item
    </li>
    <li class='ui-list__item'>
        Item
    </li>
</ul>
<ul class='ui-list ui-list_style_dash'>
    <li class='ui-list__item'>
        Item
    </li>
    <li class='ui-list__item'>
        Item
    </li>
</ul>
<ul class='ui-list ui-list_style_disc'>
    <li class='ui-list__item'>
        Item
    </li>
    <li class='ui-list__item'>
        Item
    </li>
</ul>
```

---

## Цвет

Определяют цвет маркера.

|            Class          |            Description            |
|---------------------------|-----------------------------------|
|  `.ui-list_color_`[color](docs/base/text.html)  | Цвет текста.  |

``` html
<ul class='ui-list ui-list_style_disc ui-list_color_red'>
    <li class='ui-list__item'>
        Red
    </li>
</ul>
<ul class='ui-list ui-list_style_disc ui-list_color_yellow'>
    <li class='ui-list__item'>
        Yellow
    </li>
</ul>
<ul class='ui-list ui-list_style_disc ui-list_color_link'>
    <li class='ui-list__item'>
        Link
    </li>
</ul>
<ul class='ui-list ui-list_style_disc ui-list_color_muted'>
    <li class='ui-list__item'>
        Muted
    </li>
</ul>
<ul class='ui-list ui-list_style_disc ui-list_color_info'>
    <li class='ui-list__item'>
        Info
    </li>
</ul>
<ul class='ui-list ui-list_style_disc ui-list_color_success'>
    <li class='ui-list__item'>
        Success
    </li>
</ul>
<ul class='ui-list ui-list_style_disc ui-list_color_warning'>
    <li class='ui-list__item'>
        Warning
    </li>
</ul>
<ul class='ui-list ui-list_style_disc ui-list_color_error'>
    <li class='ui-list__item'>
        Error
    </li>
</ul>
```

---

## Разделитель между элементами

Чтобы применить горизонтальный разделитель, добавьте класс `.ui-list_theme_divider`.

``` html
<ul class='ui-list ui-list_size_xl ui-list_theme_divider'>
    <li class='ui-list__item'>
        Item
    </li>
    <li class='ui-list__item'>
        Item
    </li>
</ul>
```
