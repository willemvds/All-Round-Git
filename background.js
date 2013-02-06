chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
	suggest([]);
});

chrome.omnibox.onInputEntered.addListener(function(text) {
	chrome.tabs.create({
		url: "https://github.com/spiraleye/swordfish/issues/" + text,
		active: true,
	});
});
