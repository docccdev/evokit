module.exports = {
    "root_dir":         __dirname + "/__root",
    "base":             __dirname + "/tmpl/base.html",
    "block": {
        // Block level renderer methods
        "code":         __dirname + "/tmpl/block/code.html",                // (string code, string language)
        "blockquote":   __dirname + "/tmpl/block/blockquote.html",          // (string quote)
        "html":         __dirname + "/tmpl/block/html.html",                // (string html)
        "heading":      __dirname + "/tmpl/block/heading.html",             // (string text, number level)
        "hr":           __dirname + "/tmpl/block/hr.html",                  // (null)
        "list":         __dirname + "/tmpl/block/list.html",                // (string body, boolean ordered)
        "listitem":     __dirname + "/tmpl/block/listitem.html",            // (string text)
        "paragraph":    __dirname + "/tmpl/block/paragraph.html",           // (string text)
        "table":        __dirname + "/tmpl/block/table.html",               // (string header, string body)
        "tablerow":     __dirname + "/tmpl/block/tablerow.html",            // (string content)
        "tablecell":    __dirname + "/tmpl/block/tablecell.html",           // (string content, object flags)
        // Inline level renderer methods
        "strong":       __dirname + "/tmpl/inline/strong.html",             // (string text)
        "em":           __dirname + "/tmpl/inline/em.html",                 // (string text)
        "codespan":     __dirname + "/tmpl/inline/codespan.html",           // (string code)
        "br":           __dirname + "/tmpl/inline/br.html",                 // (null)
        "del":          __dirname + "/tmpl/inline/del.html",                // (string text)
        "link":         __dirname + "/tmpl/inline/link.html",               // (string href, string title, string text)
        "image":         __dirname + "/tmpl/inline/image.html",             // (string src, string alt)
    }
}
