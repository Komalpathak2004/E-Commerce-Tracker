chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'add_to_cart' || request.action === 'add_to_wishlist') {
    console.log('Message received:', request); // Add this line for debugging
    chrome.storage.local.get({ trackedItems: [] }, function(result) {
      let trackedItems = result.trackedItems;
      trackedItems.push(request.product);
      chrome.storage.local.set({ trackedItems: trackedItems }, function() {
        console.log('Product tracked:', request.product); // Existing log statement
      });
    });
  }
});
