function gtmkitLoadCheckout(){window.gtmkit_data.wc.is_cart&&gtmkitCart(),window.gtmkit_data.wc.is_checkout&&gtmkitCheckout()}function gtmkitCart(){document.addEventListener("click",function(t){t=t.target;if(!t||!t.closest("[name=update_cart]"))return!0;gtmkitCartQuantityChange()}),document.addEventListener("keypress",function(t){t=t.target;if(!t||!t.closest(".woocommerce-cart-form input[type=number]"))return!0;gtmkitCartQuantityChange()})}function gtmkitCartQuantityChange(){const i=window.gtmkit_settings.datalayer_name;document.querySelectorAll(".product-quantity input.qty").forEach(function(t){var e=t.defaultValue;let n=parseInt(t.value);e!==(n=isNaN(n)?e:n)&&(t=(t=t.closest(".cart_item"))&&t.querySelector(".remove"))&&(t=JSON.parse(t.getAttribute("data-gtmkit_product_data")),e<n?(t.quantity=n-e,window[i].push({ecommerce:null}),window[i].push({event:"add_to_cart",ecommerce:{currency:window.gtmkit_data.wc.currency,value:t.price*(n-e),items:[t]}})):(t.quantity=e-n,window[i].push({ecommerce:null}),window[i].push({event:"remove_from_cart",ecommerce:{currency:window.gtmkit_data.wc.currency,value:t.price*(e-n),items:[t]}})))})}function gtmkitCheckout(){0===window.gtmkit_settings.wc.add_shipping_info.config&&0===window.gtmkit_settings.wc.add_payment_info.config||(2===window.gtmkit_settings.wc.add_shipping_info.config&&document.addEventListener("change",function(t){t=t.target;if(!t||!t.closest("input[name^=shipping_method]")&&!t.closest(".wc-block-components-shipping-rates-control"))return!0;gtmkitShippingEvent()}),2===window.gtmkit_settings.wc.add_payment_info.config&&document.addEventListener("change",function(t){t=t.target;if(!t||!t.closest("input[name=payment_method]")&&!t.closest(".wc-block-checkout__payment-method"))return!0;gtmkitPaymentEvent()}),document.addEventListener("click",function(t){t=t.target.closest("button");return!t||!t.classList.contains("wc-block-components-checkout-place-order-button")&&!t.closest("button[name=woocommerce_checkout_place_order]")||(gtmkitShippingEvent(),void gtmkitPaymentEvent())}))}function gtmkitShippingEvent(){if(!0!==window.gtmkit_data.wc.add_shipping_info.fired){var e=window.gtmkit_settings.datalayer_name;let t;var n=(t=(t=document.querySelector("input[name^=shipping_method]:checked"))||document.querySelector("input[name^=shipping_method]"))?t.value:window.gtmkit_settings.wc.text["shipping-tier-not-found"],i=Object.values(window.gtmkit_data.wc.cart_items);window[e].push({ecommerce:null}),window[e].push({event:"add_shipping_info",ecommerce:{currency:window.gtmkit_data.wc.currency,value:window.gtmkit_data.wc.cart_value,shippingTier:n,items:[i]}}),window.gtmkit_data.wc.add_shipping_info.fired=!0}}function gtmkitPaymentEvent(){if(!0!==window.gtmkit_data.wc.add_payment_info.fired){let t;var e=window.gtmkit_settings.datalayer_name,n=(t=(t=document.querySelector(".payment_methods input:checked"))||document.querySelector("input[name^=payment_method]"))?t.value:window.gtmkit_settings.wc.text["payment-method-not-found"],i=Object.values(window.gtmkit_data.wc.cart_items);window[e].push({ecommerce:null}),window[e].push({event:"add_payment_info",ecommerce:{currency:window.gtmkit_data.wc.currency,value:window.gtmkit_data.wc.cart_value,paymentType:n,payment_type:n,items:[i]}}),window.gtmkit_data.wc.add_payment_info.fired=!0}}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",gtmkitLoadCheckout):gtmkitLoadCheckout();