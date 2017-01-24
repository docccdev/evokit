<!--
docs/layout/panel|4
-->

# Panel

### Прямоугольный блок с разными темами и внутренними отступами.

UIKit использует панели для того чтобы наметить определенные разделы вашего содержания, которые могут быть стилизованы по-разному. Как правило, панели расположены в столбцах сетки из компонента <a href="docs/layout/grid.html">Grid</a>.

---

## Использование

Блок состоит из самой панели `.ui-panel`  и дочерним элементом `.ui-panel__body`. По умолчанию панель не имеет цвета и отступов.

|       Class       |                              Description                               |
|-------------------|------------------------------------------------------------------------|
|  `.ui-panel`      |  Добавьте этот класс для элемента, чтобы определить компонент панели.  |
|  `.ui-panel_body` |  Добавьте этот класс дочернему элементу для создания тела панели.      |

``` html
<div class="doc-example">
    <div class='ui-panel ui-panel_theme_gray'>
        <div class='ui-panel__body'>
            Panel
        </div>
    </div>
</div>
```

---

## Размеры

Модификатор размера панели определяет внутренние отступы. По умолчанию, панель не имеет отступов.

|         Class         |      Description      |
|-----------------------|-----------------------|
|  `.ui-panel_size_`[size](docs/base/sizes.html)  | Внутренний отступ.  |

``` html
<div class="doc-example">
    <div class='ui-panel ui-panel_theme_gray ui-panel_size_xxxl'>
        <div class='ui-panel__body'>
            Panel
        </div>
    </div>
</div>
```

---

## Темы

Определяется фоновым цветом. По умолчанию, панель не имеет фона.

|           Class           |     Description    |
|---------------------------|--------------------|
|  `.ui-panel_theme_white`  |  Цвет фона белый.  |
|  `.ui-panel_theme_gray`   |  Цвет фона серый.  |

``` html
<div class="doc-example">
    <div class='ui-panel ui-panel_theme_gray ui-panel_size_xxxl'>
        <div class='ui-panel__body'>
            <div class='ui-panel ui-panel_theme_white'>
                <div class='ui-panel__body'>
                    Panel
                </div>
            </div>
        </div>
    </div>
</div>
```
