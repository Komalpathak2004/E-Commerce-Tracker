document.addEventListener('click', function(event) {
  if (event.target.matches('input#add-to-cart-button.a-button-input')) {
    let product = {
      name: document.querySelector('span#productTitle').innerText.trim(),
      price: document.querySelector('span.a-price-whole') ? document.querySelector('span.a-price-whole').innerText.trim() : "Price not available",
      url: window.location.href
    };
    console.log('Add to Cart Clicked:', product); // Debugging ke liye
    chrome.runtime.sendMessage({ action: 'add_to_cart', product });
  } else if (event.target.matches('input#add-to-wishlist-button-submit.a-button-input.a-declarative')) {
    let product = {
      name: document.querySelector('span#productTitle').innerText.trim(),
      price: document.querySelector('span.a-price-whole') ? document.querySelector('span.a-price-whole').innerText.trim() : "Price not available",
      url: window.location.href
    };
    console.log('Add to Wishlist Clicked:', product); // Debugging ke liye
    chrome.runtime.sendMessage({ action: 'add_to_wishlist', product });
  }
});
