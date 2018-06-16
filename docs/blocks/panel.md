[colors]: base/colors.md
[sizes]: base/sizes.md
[media]: base/media.md

[grid]: blocks/grid.md

# Panel

### Модификаторы имеют [Media][media] параметры.

UIKit использует панели для того чтобы наметить определенные разделы вашего содержания, которые могут быть стилизованы по-разному. Как правило, панели расположены в столбцах сетки из компонента [Grid][grid].

---

## Использование

Блок состоит из самой панели `.ui-panel`  и дочерним элементом `.ui-panel__body`. По умолчанию панель не имеет цвета и отступов.

|       Class       |                              Description                               |
|-------------------|------------------------------------------------------------------------|
|  `.ui-panel`      |  Добавьте этот класс для элемента, чтобы определить компонент панели.  |
|  `.ui-panel_body` |  Добавьте этот класс дочернему элементу для создания тела панели.      |

``` html
<div class='ui-panel ui-panel_theme_gray ui-panel_size_xxs'>
    <div class='ui-panel__body'>
        Panel
    </div>
</div>
```

---

## Размеры

Модификатор размера панели определяет внутренние отступы. По умолчанию, панель не имеет отступов.

|           Class           |      Description      |
|---------------------------|-----------------------|
|  `.ui-panel_size_`[sizes] | Внутренний отступ.    |

``` html
<div class='ui-panel ui-panel_theme_gray ui-panel_size_xxxl'>
    <div class='ui-panel__body'>
        Panel
    </div>
</div>
```

---

## Темы

Определяется фоновым цветом. По умолчанию, панель не имеет фона.

|             Class             |      Description      |
|-------------------------------|-----------------------|
| `.ui-panel_theme_`[colors] | Цвет фона. |


``` html
<div class='ui-panel ui-panel_size_s ui-panel_theme_transparent'>
    <div class='ui-panel__body'>
        transparent
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_theme_white'>
    <div class='ui-panel__body'>
        white
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_theme_gray'>
    <div class='ui-panel__body'>
        gray
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_theme_blue'>
    <div class='ui-panel__body'>
        blue
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_theme_info'>
    <div class='ui-panel__body'>
        info
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_theme_success'>
    <div class='ui-panel__body'>
        success
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_theme_warning'>
    <div class='ui-panel__body'>
        warning
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_theme_error'>
    <div class='ui-panel__body'>
        error
    </div>
</div>
```

---

## Стили

|           Class            |    Description   |
|----------------------------|------------------|
|  `.ui-panel_style_border`  | Добавляет рамку. |
|  `.ui-panel_style_divider`  | Добавляет разделитель. |

``` html
<div class='ui-panel ui-panel_size_s ui-panel_style_border ui-panel_style_divider'>
    <div class='ui-panel__body'>
        default
    </div>
    <div class='ui-panel__body'>
        default
    </div>
</div>
<br>

<div class='ui-panel ui-panel_size_s ui-panel_style_border ui-panel_style_divider ui-panel_theme_transparent'>
    <div class='ui-panel__body'>
        transparent
    </div>
    <div class='ui-panel__body'>
        transparent
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_style_border ui-panel_style_divider ui-panel_theme_white'>
    <div class='ui-panel__body'>
        white
    </div>
    <div class='ui-panel__body'>
        white
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_style_border ui-panel_style_divider ui-panel_theme_gray'>
    <div class='ui-panel__body'>
        gray
    </div>
    <div class='ui-panel__body'>
        gray
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_style_border ui-panel_style_divider ui-panel_theme_blue'>
    <div class='ui-panel__body'>
        blue
    </div>
    <div class='ui-panel__body'>
        blue
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_style_border ui-panel_style_divider ui-panel_theme_info'>
    <div class='ui-panel__body'>
        info
    </div>
    <div class='ui-panel__body'>
        info
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_style_border ui-panel_style_divider ui-panel_theme_success'>
    <div class='ui-panel__body'>
        success
    </div>
    <div class='ui-panel__body'>
        success
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_style_border ui-panel_style_divider ui-panel_theme_warning'>
    <div class='ui-panel__body'>
        warning
    </div>
    <div class='ui-panel__body'>
        warning
    </div>
</div>
<br>
<div class='ui-panel ui-panel_size_s ui-panel_style_border ui-panel_style_divider ui-panel_theme_error'>
    <div class='ui-panel__body'>
        error
    </div>
    <div class='ui-panel__body'>
        error
    </div>
</div>
```
