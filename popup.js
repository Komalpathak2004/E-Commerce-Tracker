document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get({ trackedItems: [] }, function(result) {
    let trackedItems = result.trackedItems;
    console.log('Tracked Items:', trackedItems); // Debugging ke liye
    let trackedItemsList = document.getElementById('tracked-items-list');

    trackedItemsList.innerHTML = '';

    trackedItems.forEach(function(item, index) {
      let listItem = document.createElement('li');

      let itemName = document.createElement('span');
      itemName.className = 'item-name';
      itemName.textContent = item.name;

      let itemPrice = document.createElement('span');
      itemPrice.className = 'item-price';
      itemPrice.textContent = item.price;

      let deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button';
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        deleteItem(index);
      });

      listItem.appendChild(itemName);
      listItem.appendChild(itemPrice);
      listItem.appendChild(deleteButton);

      trackedItemsList.appendChild(listItem);
    });
  });
});

function deleteItem(index) {
  chrome.storage.local.get({ trackedItems: [] }, function(result) {
    let trackedItems = result.trackedItems;
    trackedItems.splice(index, 1);
    chrome.storage.local.set({ trackedItems: trackedItems }, function() {
      console.log('Item deleted');
      location.reload(); // Reload the popup to reflect the changes
    });
  });
}
