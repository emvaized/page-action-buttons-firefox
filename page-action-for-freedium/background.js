browser.pageAction.onClicked.addListener(function(t,d){
    if (!t.url) return
    const cur = t.url;
    const tar = 'https://freedium.cfd/' + cur;
    if (d.button == 1)
        chrome.tabs.create({url:tar, active: !!d.modifiers[0]})
    else 
        chrome.tabs.update(t.id,{url:tar})
});