function isP(node){
    if (node.parentNode && node.parentNode.tagName === "P"){
        return NodeFilter.FILTER_ACCEPT
    }
    return NodeFilter.FILTER_SKIP
}

function removeCharFromPage(charToRemove) {
    const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, isP);
    let node;

    while ((node = treeWalker.nextNode())) {
        node.nodeValue = node.nodeValue.split(charToRemove).join("");
    }
}

removeCharFromPage("—")
