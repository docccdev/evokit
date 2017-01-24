<!--
docs/elements/list|1
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

## Стили

Изменяет вид маркера для каждого элемента списка.

|            Class          |            Description            |
|---------------------------|-----------------------------------|
|  `.ui-list_style_dash`    |  Маркер в виде тире.              |
|  `.ui-list_style_decimal` |  Арабские числа (1, 2, 3, 4,...). |
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
```

---

## Разделитель между элементами

Чтобы применить горизонтальный разделитель, добавьте класс `.ui-list_theme_divider`.

``` html
<ul class='ui-list ui-list_size_xxxl ui-list_theme_divider'>
    <li class='ui-list__item'>
        Item
    </li>
    <li class='ui-list__item'>
        Item
    </li>
</ul>
```
