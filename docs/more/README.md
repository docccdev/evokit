[bigl]: http://bigl.ua
[bigl-trunk]: http://bigl-trunk.uaprom
[bigl-stable]: http://bigl-stable.uaprom


# Bigl [![build status](https://gitlab.uaprom/uaprom/uaprom/badges/master/build.svg)](https://gitlab.uaprom/uaprom/uaprom/pipelines)


**Production**: [Bigl.ua][bigl]

**Trunk**: [Bigl-trunk][bigl-trunk]

**Stable**: [Bigl-stable][bigl-stable]

---

## Команды
`vagga run` - запуск проекта

`vagga webpack -B` - Собрать javascript

`vagga webpack -B -w` - Собрать javascript и следить за изменениями

`vagga css -B` - Собрать css

`vagga css -B -w` - Собрать css и следить за изменениями



---

## Исходники

|               source             |     lang     |   view   |
|----------------------------------|--------------|----------|
| `uaprom/styl/bigl/desktop`       | *.styl       | desktop  |
| `uaprom/styl/bigl/portable`      | *.styl       | portable |
| `uaprom/cs/domain/bigl`          | *.js, *.jsx  | desktop  |
| `uaprom/cs/domain/bigl_portable` | *.js, *.jsx  | portable |

---

### Static files (public folder)

- **uaprom**
    - **public**
        - **bigl**
            - **css**
                - uikit.css
                - common.css
                - cabinet.css
                - scart.css
                - **portable**
                     - uikit.css
                     - common.css
                     - cabinet.css
                     - amp.css
            - **favicons**
                - *.png
                - *.ico
            - **fonts**
                - bigl-glyphs.eot
                - bigl-glyphs.svg
                - bigl-glyphs.ttf
                - bigl-glyphs.woff
                - **portable**
                    - bigl-glyphs.eot
                    - bigl-glyphs.svg
                    - bigl-glyphs.ttf
                    - bigl-glyphs.woff
            - **images**
                - *.png
                - *.svg
