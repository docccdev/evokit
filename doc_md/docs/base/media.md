<!--
docs/base/media|2
-->

# Медиа классы


---

## Типы

|    Ключ    |                        Значение                        |
|------------|--------------------------------------------------------|
| `small`    | Действует только на ширину устройства `480px` и выше.  |
| `medium`   | Действует только на ширину устройства `768px` и выше.  |
| `large`    | Действует только на ширину устройства `960px` и выше.  |
| `xlarge`   | Действует только на ширину устройства `1200px` и выше. |
| `xxlarge`  | Действует только на ширину устройства `1400px` и выше. |
| `xxxlarge` | Действует только на ширину устройства `1600px` и выше. |

---

## Структура media модификатора

- `{имя-блока}_{имя-модификатора}@{тип-медиа}`

---

## Пример

``` html
<div class='ui-grid ui-grid_size_m ui-grid_column_3 ui-grid_column_4@xlarge ui-grid_column_5@xxlarge ui-grid_column_6@xxxlarge'>
    <div class='ui-grid__item'>
        <div class="doc-example">Item 1</div>
    </div>
    <div class='ui-grid__item'>
        <div class="doc-example">Item 2</div>
    </div>
    <div class='ui-grid__item'>
        <div class="doc-example">Item 3</div>
    </div>
    <div class='ui-grid__item'>
        <div class="doc-example">Item 4</div>
    </div>
    <div class='ui-grid__item'>
        <div class="doc-example">Item 5</div>
    </div>
    <div class='ui-grid__item'>
        <div class="doc-example">Item 6</div>
    </div>
</div>
```
