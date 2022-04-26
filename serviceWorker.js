chrome.contextMenus.create({
    id: 'libgen-search',
    title: 'Search on Libgen',
    contexts: ['selection'],
});

const onLibgenSearch = ({ menuItemId, selectionText }) => {

    if (menuItemId === 'libgen-search') {
        chrome.tabs.create({
            url: `http://libgen.rs/search.php?req=${selectionText}&lg_topic=libgen`,
        });
    }
};

chrome.contextMenus.onClicked.addListener(onLibgenSearch);
