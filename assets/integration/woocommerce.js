function gtmkitLoad(){const a=window.gtmkit_settings.datalayer_name;let d;const n={"wp-block-handpicked-products":1,"wp-block-product-best-sellers":1,"wp-block-product-category":1,"wp-block-product-new":1,"wp-block-product-on-sale":1,"wp-block-products-by-attribute":1,"wp-block-product-tag":1,"wp-block-product-top-rated":1};document.querySelectorAll(".wc-block-grid .wc-block-grid__product").forEach(function(t){var e=t.closest(".wc-block-grid"),o=t.querySelector(".gtmkit_product_data");if(e&&o){var i,r=e.classList;if(r)for(const c in n)r.contains(c)&&((i=JSON.parse(o.getAttribute("data-gtmkit_product_data"))).item_list_name=window.gtmkit_settings.wc.text[c],i.index=n[c],o.setAttribute("data-gtmkit_product_data",JSON.stringify(i)),n[c]++)}});var t=document.querySelectorAll(".gtmkit_product_data");if(t.length){const o=[];let e;t.forEach(function(t){e=JSON.parse(t.getAttribute("data-gtmkit_product_data")),o.push(e)}),window[a].push({ecommerce:null}),window[a].push({event:"view_item_list",ecommerce:{items:o}})}document.addEventListener("click",function(t){t=t.target;let e;if(!t)return!0;if(t.closest(".add_to_cart_button:not(.single_add_to_cart_button)"))e="add_to_cart";else{if(!t.closest(".products")&&!t.closest(".wc-block-grid__products")||!t.closest(".add_to_wishlist, .tinvwl_add_to_wishlist_button:not(.tinvwl-product-in-list)"))return!0;e="add_to_wishlist"}t=t.closest(".product,.wc-block-grid__product"),t=t&&t.querySelector(".gtmkit_product_data");if(!t)return!0;t=JSON.parse(t.getAttribute("data-gtmkit_product_data"));window[a].push({ecommerce:null}),window[a].push({event:e,ecommerce:{currency:window.gtmkit_data.wc.currency,value:t.price,items:[t]}})}),document.addEventListener("click",function(i){var i=i.target;let r;if(!i)return!0;let o;if((o=i.closest("form.cart"))&&i.closest(".single_add_to_cart_button:not(.disabled,.input-needed)")?r="add_to_cart":(o&&i.closest(".tinvwl_add_to_wishlist_button:not(.tinvwl-product-in-list,.disabled-add-wishlist)")||(i=i.closest(".yith-wcwl-add-to-wishlist"))&&(o=i.parentNode.querySelector("form.cart")))&&(r="add_to_wishlist"),!r)return!0;var i=o.querySelectorAll("[name=variation_id]"),t=o.classList&&o.classList.contains("grouped_form");if(i.length){let t=1,e;d&&(i=o.querySelector("[name=quantity]"),d.quantity=i&&i.value||1,t=d.quantity,e=d.price),(d&&"add_to_cart"===r||"add_to_wishlist"===r)&&(window[a].push({ecommerce:null}),window[a].push({event:r,ecommerce:{currency:window.gtmkit_data.wc.currency,value:e*t,items:[d]}}))}else if(t){i=document.querySelectorAll(".grouped_form .gtmkit_product_data");const c=[];let o=0;if(i.forEach(function(t){var e=document.querySelectorAll("input[name=quantity\\["+t.getAttribute("data-gtmkit_product_id")+"\\]]");if(0===(e=parseInt(e[0].value)))return!0;t=JSON.parse(t.getAttribute("data-gtmkit_product_data"));t.quantity=e,c.push(t),o+=t.price*t.quantity}),0===c.length)return!0;window[a].push({ecommerce:null}),window[a].push({event:r,ecommerce:{currency:window.gtmkit_data.wc.currency,value:o,items:c}})}else{t=JSON.parse(o.querySelector("[name=gtmkit_product_data]")&&o.querySelector("[name=gtmkit_product_data]").value);t.quantity=o.querySelector("[name=quantity]")&&o.querySelector("[name=quantity]").value,window[a].push({ecommerce:null}),window[a].push({event:r,ecommerce:{currency:window.gtmkit_data.wc.currency,value:t.price*t.quantity,items:[t]}})}}),document.addEventListener("click",function(t){var t=t.target;return!t||!t.closest(".mini_cart_item a.remove,.product-remove a.remove")||!(t=JSON.parse(t.getAttribute("data-gtmkit_product_data")))||void window[a].push({event:"remove_from_cart",ecommerce:{items:[t]}})});document.addEventListener("click",function(t){t=t.target;if(!t.closest(".products li:not(.product-category) a:not(.add_to_cart_button,.add_to_wishlist,.tinvwl_add_to_wishlist_button),.wc-block-grid__products li:not(.product-category) a:not(.add_to_cart_button,.add_to_wishlist,.tinvwl_add_to_wishlist_button),.woocommerce-grouped-product-list-item__label a:not(.add_to_wishlist,.tinvwl_add_to_wishlist_button)"))return!0;var t=t.closest(".product,.wc-block-grid__product");let e;return!t||void 0===(e=t.querySelector(".gtmkit_product_data")).getAttribute("data-gtmkit_product_data")||!(t=JSON.parse(e.getAttribute("data-gtmkit_product_data")))||void window[a].push({event:"select_item",ecommerce:{items:[t]}})}),jQuery(document).on("found_variation",function(t,e){if(void 0!==e){t=t.target;if(t.querySelector("[name=gtmkit_product_data]")){var t=JSON.parse(t.querySelector("[name=gtmkit_product_data]")&&t.querySelector("[name=gtmkit_product_data]").value),o=(t.item_id=e.variation_id,window.gtmkit_settings.wc.use_sku&&e.sku&&""!==e.sku&&(t.item_id=e.sku),t.price=e.display_price,[]);for(const i in e.attributes)o.push(e.attributes[i]);t.item_variant=o.filter(t=>t).join("|"),d=t,0!==window.gtmkit_settings.wc.view_item.config&&(window[a].push({ecommerce:null}),window[a].push({event:"view_item",ecommerce:{currency:window.gtmkit_data.wc.currency,value:t.price,items:[t]}}))}}})}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",gtmkitLoad):gtmkitLoad();