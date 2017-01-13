<!--
core/layout/box|2
-->

# Box

Задаёт блок для контента.

---

## Использование

Добавьте класс `.ui-box` к элементу контейнера.

``` html
<div class='ui-box'>
    ...
</div>
```

---

## Отступы

Модификатор размера определяет внутренние и внешние отступы. По умолчанию, блок не имеет отступов.

### Внутренние

|                  Class                   |            Description            |
|------------------------------------------|-----------------------------------|
|  `.ui-box_padding_`[size](core/base/sizes.html)    | Внутренний отступ со всех сторон. |
|  `.ui-box_padding-tb_`[size](core/base/sizes.html) | Внутренний отступ сверху и снизу. |
|  `.ui-box_padding-lr_`[size](core/base/sizes.html) | Внутренний отступ слева и справа. |

---

### Внешние

|                  Class                  |            Description         |
|-----------------------------------------|--------------------------------|
|  `.ui-box_margin_`[size](core/base/sizes.html)    | Внешний отступ со всех сторон. |
|  `.ui-box_margin-tb_`[size](core/base/sizes.html) | Внешний отступ сверху и снизу. |
|  `.ui-box_margin-lr_`[size](core/base/sizes.html) | Внешний отступ слева и справа. |




``` html
<div class='ui-box ui-box_padding_xxs'>
    ...
</div>
```

---

## Темы

Определяется фоновым цветом. По умолчанию, панель не имеет фона.

|           Class           |     Description    |
|---------------------------|--------------------|
|  `.ui-box_theme_white`  |  Цвет фона белый.  |
|  `.ui-box_theme_gray`   |  Цвет фона серый.  |

``` html
<div class='ui-box ui-box_theme_white'>
    ...
</div>
```
