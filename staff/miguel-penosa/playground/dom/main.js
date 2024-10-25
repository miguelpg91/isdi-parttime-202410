console.log("Hello, DOM")

function printDomTree(node, indent) {
    if (node === undefined) node = document
    if (indent === undefined) indent = 0

    for (var i = 0; i < node.childNodes.length, i++) {
        var child = node.childNodes[i]///indentacion

        if (child instanceof DocumentType || child instanceof Text) continue

        var spaces = ""
        for (var j = 0; j < indent; j++)
            spaces = spaces + ""
        console.log(indent, spaces + child.nodeName)

        printDomTree(child, indent + 1)
    }
}

printDomTree()

/*
html
    head
        meta
        meta
        tittle
    body
        h1
        p
        h2
        ul
            li
            li
            li
        h2
        table
            tr
                th
                th
                th
            tr
                td
                td
                td
            tr
                td
                td
                td
            tr
                td
                td
                td
            tr
        table
    body
html