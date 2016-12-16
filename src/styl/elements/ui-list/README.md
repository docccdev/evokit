<!--
core/elements/list|1
-->

# Список

Блок `.ui-list` создает список. Каждый элемент списка должен иметь класс `.ui-list__item`.

---

## Использование

Чтобы применить этот компонент, просто добавьте класс `.ui-list` к тегу `<ul>` или `<ol>`.


``` html
<ul class="ui-list">
    <li class="ui-list__item">
        ...
    </li>
    <li class="ui-list__item">
        ...
    </li>
</ul>
```

---

## Размер

Модификатор размера списка определяет вертикальные отступы.

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ui-list_size_xxs`  | Отступ между ячейками 4px.  |
|  `.ui-list_size_xs`   | Отступ между ячейками 10px. |
|  `.ui-list_size_s`    | Отступ между ячейками 14px. |
|  `.ui-list_size_m`    | Отступ между ячейками 20px. |
|  `.ui-list_size_l`    | Отступ между ячейками 24px. |
|  `.ui-list_size_xl`   | Отступ между ячейками 30px. |
|  `.ui-list_size_xxl`  | Отступ между ячейками 34px. |
|  `.ui-list_size_xxxl` | Отступ между ячейками 40px. |

``` html
<ul class="ui-list ui-list_size_xxs">
    <li class="ui-list__item">
        ...
    </li>
    <li class="ui-list__item">
        ...
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
<div class='ui-list ui-list_style_decimal'>
    <li class="ui-list__item">
        ...
    </li>
</div>
```

---

## Разделитель между элементами

Чтобы применить горизонтальный разделитель, добавьте класс `.ui-list_theme_divider`.

``` html
<ul class="ui-list ui-list_theme_divider">
    <li class="ui-list__item">
        ...
    </li>
    <li class="ui-list__item">
        ...
    </li>
</ul>
```
