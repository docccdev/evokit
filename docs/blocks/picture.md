# Картинка

Блок `.ek-picture` состоит из одного элемента `.ek-picture__item`.

---

## Использование
Компонент создает квадрат относительно ширины родителя и адаптирует изображение в этих рамках.

``` html
<div class='ek-width-1-5'>
    <div class='ek-picture'>
        <img class='ek-picture__item' src='https://picsum.photos/600/300/?random'>
    </div>
</div>
```

---

## Размер

|            Class           |                       Description                       |
|----------------------------|---------------------------------------------------------|
| `.ek-picture_size_cover`   | Картинка сохраняет свои пропорции при заполнении блока. |

``` html
<div class="ek-width-1-5">
    <div class="ek-picture ek-picture_size_cover">
        <img class='ek-picture__item' src='https://picsum.photos/600/300/?random'>
    </div>
</div>
```

---

## Стили

|          Class          |      Description     |
|-------------------------|----------------------|
| `.ek-picture_style_round` | Круглое изображение. |

``` html
<div class="ek-width-1-5">
    <div class="ek-picture ek-picture_style_round ek-picture_size_cover">
        <img class='ek-picture__item' src='https://picsum.photos/600/300/?random'>
    </div>
</div>
```
