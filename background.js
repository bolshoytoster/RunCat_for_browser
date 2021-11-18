// Match theme with system
const theme = window.matchMedia("(prefers-color-scheme: dark)");
theme.addListener(e => {
	prefix = e.matches ? 'dark' : 'light';
});

var prefix = theme.matches ? 'dark' : 'light';

var runner = 'cat';
// Use cat by default swap with parrot when the icon is clicked
chrome.browserAction.onClicked.addListener(function() {
	runner = runner == 'cat' ? 'parrot' : 'cat';
});

var current = 0;
// Set next frame every 200ms
window.setInterval(function() {
	// Change icon to the next frame
	chrome.browserAction.setIcon({path: `/${runner}/${prefix}_${runner}_${current}.ico`});
	current = (current + 1) % (runner == 'cat' ? 5 : 10);
}, 200);
