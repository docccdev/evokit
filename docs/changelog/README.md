[media]: base/media.md
[size]: base/sizes.md
[text]: base/text.md
[colors]: base/colors.md

[body]: blocks/body.md
[grid]: blocks/grid.md
[panel]: blocks/panel.md
[box]: blocks/box.md
[list]: blocks/list.md
[text]: blocks/text.md
[link]: blocks/link.md
[picture]: blocks/picture.md
[image]: blocks/image.md
[line]: blocks/line.md
[tags]: blocks/tags.md

# CHANGELOG

## 1.0.8
- Добавлены модификаторы `position` для [box][box]:
    - `.ek-box_position_absolute`
    - `.ek-box_position_fixed`
    - `.ek-box_position_relative`
    - `.ek-box_position_static`
- Добавлены модификаторы `place` для [box][box]:
    - `.ek-box_place_top`
    - `.ek-box_place_top-left`
    - `.ek-box_place_top-right`
    - `.ek-box_place_center`
    - `.ek-box_place_center-left`
    - `.ek-box_place_center-right`
    - `.ek-box_place_bottom`
    - `.ek-box_place_bottom-left`
    - `.ek-box_place_bottom-right`
- Добавлен модификатор `style` для [box][box]:
    - `.ek-box_style_round`

## 1.0.7
- Установлен дефолтный class prefix `ek-`.


## 1.0.6
- Добавлены media модификаторы для:
    - `ek-text_align_*`
    - `ek-text_valign_*`


## 1.0.5
- Удалена переменная `--EKFontFamily`, используется `system-ui`.


## 0.1.59 beta (24.05.2018)
- Добавлен белый цвет текста [colors][colors]:
    - `.ek-text_color_white`
    - `.ek-link_color_white`
    - `.ek-list_color_white`
- Удалено свойство `display: block` для модификаторов:
    - `.ek-text_wrap_nowrap`
    - `.ek-text_wrap_break`
- Добавлены по умолчанию ограничения `max-width` и `max-height` для блока [image][image].
- Добавлены модификаторы отражения [image][image]:
    - `.ek-image_mirror_x`
    - `.ek-image_mirror_y`
    - `.ek-image_mirror_xy`
- Добавлен модификатор для [box][box]:
    - `.ek-box_display_none`


## 0.1.58 beta (25.04.2018)
- Fix warning `Unknown prop domRef on <div> tag`


## 0.1.57 beta (25.04.2018)
- Добавлен метов `domRef` для всех `jsx` блоков, пример: `domRef={(node) => this.node = node}`
- Добавлен новый блок в `jsx`:
     - [UiTags][tags]


## 0.1.56 beta (20.03.2018)
- Блок [link][link] получил свойство `display: inline` и базовый `line-height: 1.3em`.
- Добавлен модификатор для [link][link]:
    - `.ek-link_style_multi-line`
- Добавлен модификатор разделителя для [panel][panel]:
    - `.ek-panel_style_divider`
- Удалены модификаторы отображения [text][text]:
    - `.ek-text_display_*`
- Установлено по умолчанию свойство `display: block` для модификаторов:
    - `.ek-text_align_*`
    - `.ek-text_wrap_*`

## 0.1.55 beta (14.03.2018)
- Добавлены модификаторы `display` для `jsx` блоков:
     - [UiBox][box]
     - [UiText][text]


## 0.1.54 beta (14.03.2018)
- Изменен тег c `<div>` на `<span>` для jsx компонента [UiText][text].
- Изменен тег c `<a>` на `<hr>` для jsx компонента [UiLine][line].
- Блок [box][box] получил свойство `display: block`.
- Блок [text][text] получил свойство `display: inline`.
- Блок [list][list] получил свойство `display: block`.
- Добавлены модификаторы отображения [box][box]:
    - `.ek-box_display_*`
- Добавлены модификаторы отображения [text][text]:
    - `.ek-text_display_*`

## 0.1.53 beta (12.03.2018)
- Новый раздел [colors][colors].
- Изменен модификатор насыщенности с `regular` на `base` для [text][text].
- Установлен базовый `font-weight: 400` для [body][body].
- Добавлено автоопределение сенсорных экранов для свойства `:hover` на ссылке [link][link].
- Добавлен модификатор базового цвета [text][text]:
    - `.ek-text_color_base`
- Добавлен модификатор базового цвета [list][list]:
    - `.ek-list_color_base`
- Добавлены модификаторы для [link][link]:
    - `.ek-link_color_*`
    - `.ek-link_size_*`
    - `.ek-link_weight_*`


## 0.1.52 beta (19.01.2018)
- Добавлен новый блок в `jsx`:
     - [UiImage][image]


## 0.1.51 beta (14.12.2017)
- Новый блок [tags][tags].


## 0.1.50 beta (27.09.2017)
- Добавлены модификаторы переноса [grid][grid]:
    - `.ek-grid_wrap_nowrap`
    - `.ek-grid_wrap_wrap`
    - `.ek-grid_wrap_wrap-reverse`


## 0.1.49 beta (14.09.2017)
- Добавлены модификаторы стиля для [line][line]:
    - `.ek-line_style_dotted`
    - `.ek-line_style_dashed`


## 0.1.48 beta (13.09.2017)
- Исправлены названия компононетов для `React Developer Tools`.


## 0.1.46 beta (06.09.2017)
- Оптимизирован размер `.js` бандла.
- Добавлены модификаторы в `jsx` для блока [UiPicture][picture]:
    - `ek-size`
    - `ek-style`
- Добавлен новый блок в `jsx`:
    - [UiImage][image]


## 0.1.45 beta (04.09.2017)
- Добавлен новый блок в `jsx`:
     - [UiList][list]


## 0.1.44 beta (31.08.2017)
- Добавлены блоки `jsx`:
     - [UiGrid][grid]
     - [UiPanel][panel]
     - [UiBox][box]
     - [UiText][text]
     - [UiLink][link]
     - [UiPicture][picture]
     - [UiLine][line]


## 0.1.43 beta (30.08.2017)
- Исправлены стили  [picture][picture].
- Добавлен модификатор закругления для [picture][picture]:
    - `.ek-picture_size_cover`
    - `.ek-picture_style_round`


## 0.1.42 beta (28.08.2017)
- Новый блок [image][image].


## 0.1.41 beta (16.08.2017)
- Добавлены два цвета для [text][text]:
    - `.ek-text_color_red`
    - `.ek-text_color_yellow`
- Добавлены модификаторы цвета маркера для списка [list][list]:
    - `.ek-list_color_red`
    - `.ek-list_color_yellow`
    - `.ek-list_color_link`
    - `.ek-list_color_muted`
    - `.ek-list_color_info`
    - `.ek-list_color_success`
    - `.ek-list_color_warning`
    - `.ek-list_color_error`


## 0.1.40 beta (10.08.2017)
- **УДАЛЕН** блок `.ek-page`
- **УДАЛЕН** блок `.ek-title-*`
- **УДАЛЕН** блок `.ek-text-*`


## 0.1.39 beta (03.08.2017)
- Добавлен новый элемент `.ek-body__section` для блока [body][body]:
    - **НЕ ИСПОЛЬЗОВАТЬ** блок `.ek-page`, замените его на `.ek-body__section`


## 0.1.38 beta (28.07.2017)
- Новый блок [body][body].
- Новый блок [text][text]:
    - **НЕ ИСПОЛЬЗОВАТЬ** вспомогательные классы `.ek-title-*`, замените их на `.ek-text`
    - **НЕ ИСПОЛЬЗОВАТЬ** вспомогательные классы `.ek-text-*`, замените их на `.ek-text`
- Добавлен модификатор `.ek-grid_valign_baseline` для [grid][grid].
- Добавлены модификаторы тем для блока [box][box]:
    - `.ek-box_theme_info`
    - `.ek-box_theme_success`
    - `.ek-box_theme_warning`
    - `.ek-box_theme_error`
- Добавлены модификаторы тем для блока [panel][panel]:
    - `.ek-panel_theme_info`
    - `.ek-panel_theme_success`
    - `.ek-panel_theme_warning`
    - `.ek-panel_theme_error`


## 0.1.37 beta (25.07.2017)
- Увеличена скорость компиляции стилей в 6 раз.
- **Удален** миксин для комбинирования медиа стилей. Использовать [postcss](http://postcss.org) плагин.


## 0.1.36 beta (11.07.2017)

- Новое [media][media] правило `xxxlarge`.
- Добавлен модификатор `.ek-page_size_xxxl` для блока `.ek-page`.


## 0.1.35 beta (20.06.2017)

- Исправлен модификатор размера для [list][list].
- Для модификатора `.ek-list_theme_divider` добавлены [media][media] правила.
- Модификаторы для обнуления [size][size]:
    - `.ek-box_margin_none`
    - `.ek-box_padding_none`
    - `.ek-box_size_none`
    - `.ek-grid_size_none`
    - `.ek-line_size_none`
    - `.ek-list_size_none`
    - `.ek-panel_size_none`


## 0.1.34 beta (19.04.2017)

- Добавлены стили `border-radius` и `padding` к элементу`.ek-panel__body` для блока [panel][panel].
- Добавлен модификатор `.ek-panel_theme_blue` для [panel][panel].
- Новые модификаторы для [box][box]:
    - `.ek-box_margin_auto`
    - `.ek-box_margin-left_auto`
    - `.ek-box_margin-top_auto`
    - `.ek-box_margin-right_auto`
    - `.ek-box_margin-bottom_auto`
    - `.ek-box_margin-tb_auto`
    - `.ek-box_margin-lr_auto`

## 0.1.33 beta (18.04.2017)

- Добавлен модификатор `.ek-box_theme_blue` для [box][box].
- Обновлен список переменных.


## 0.1.32 beta (13.04.2017)

- Added [picture][picture] to portable bundle.
- Added min and max width for `.ek-grid__item`.


## 0.1.31 beta (27.03.2017)

- Fixed bug with [grid][grid] item padding when applied theme divider.


## 0.1.30 beta (23.03.2017)

- Исправлена ошибка с повторяющимися стилями.


## 0.1.29 beta (23.03.2017)

- Big update [grid][grid] divider:
    - `Responsive`
    - `Multi column`
    - `Horizontal and vertical divider`


## 0.1.28 beta (06.03.2017)

- Added font weight class for [text][text]:
    - `.ek-text-thin`
    - `.ek-text-light`
    - `.ek-text-regular`
    - `.ek-text-medium`
    - `.ek-text-black`


## 0.1.27 beta (06.03.2017)

- Добавлен модификатор `.ek-box_theme_transparent` для [box][box].
- Добавлен модификатор `.ek-panel_theme_transparent` для [panel][panel].
- Added [media][media] rules for all [box][box] modifiers.
- Added [media][media] rules for all [panel][panel] modifiers.


## 0.1.26 beta (01.03.2017)

- Добавлен цвет текста `.ek-text-muted` для [text][text].
- Добавлен модификатор `.ek-panel_style_border` для [panel][panel].
- Added border-box for [panel][panel].
- Reset margin-bottom for `.ek-grid_theme_divider`.


## 0.1.25 beta (20.02.2017)

- Added modifiers for [grid][grid]:
    - `.ek-grid_direction_row`
    - `.ek-grid_direction_row-reverse`
    - `.ek-grid_direction_column`
    - `.ek-grid_direction_column-reverse`
    - `.ek-grid_align_left`
    - `.ek-grid_valign_top`
- Added [media][media] rules for all grid modifiers.


## 0.1.24 beta (06.02.2017)

- Новый блок [link][link].
- Added modifiers for [box][box] padding:
    - `.ek-box_padding-left_*`
    - `.ek-box_padding-top_*`
    - `.ek-box_padding-right_*`
    - `.ek-box_padding-bottom_*`
- Added modifiers for [box][box] margin:
    - `.ek-box_margin-left_*`
    - `.ek-box_margin-top_*`
    - `.ek-box_margin-right_*`
    - `.ek-box_margin-bottom_*`


## 0.1.23 beta (24.01.2017)

- Новый блок [picture][picture].
- Added ek-width class `.ek-width-auto`.
- Added ek-width class `.ek-width-expand`.
- Added modifier for [grid][grid] `.ek-grid_column_expand`.
- Исправлен стиль `position` для `.ek-list__item`.
- Changed the design documentation and add preview block.


## 0.1.21 beta (16.01.2017)

- Added modifier `.ek-grid_column_*` for [grid][grid].
- Added description for [media][media] rules.
- Changed all media class from `.ek-width-xl-1-2` to `.ek-width-1-2@xlarge`.


## 0.1.20 beta (13.01.2017)

- Новый блок [box][box].
- **УДАЛЕН** блок `.ek-block`.
- Исправлен стиль `display` для `.ek-list__item`.