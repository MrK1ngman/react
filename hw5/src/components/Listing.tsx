import React, { Component }  from 'react';

type UserProfileProps = {
    listing_id: number;
    url: string;
    MainImage: MainImage;
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}

type MainImage = {
    url_570xN: string;
}

type Items = {
    items: UserProfileProps;
}

function Listing({ items }: Items) {
    if(items.title && items.MainImage.url_570xN && items.quantity) {
        let title: string;
        let price: string;
        let quantityClass: string;

        if(items.title.length > 50) {
            title = items.title.slice(0, 50) + '...'
        } else {
            title = items.title
        }

        if(items.currency_code === 'USD') {
            price = '$' + items.price;
        } else if(items.currency_code === 'EUR') {
            price = '€' + items.price;
        } else {
            price = items.currency_code + ' ' + items.price;
        }

        if(items.quantity <= 10) {
            quantityClass = 'item-quantity level-low';
        } else if(items.quantity <= 20) {
            quantityClass = 'item-quantity level-medium';
        } else {
            quantityClass = 'item-quantity level-high';
        }
        
        return(
            <div className="item">
                <div className="item-image">
                  <a href={items.url}>
                    <img src={items.MainImage.url_570xN}/>
                  </a>
                </div>
                <div className="item-details">
                  <p className="item-title">{title}</p>
                  <p className="item-price">{price}</p>
                  <p className={quantityClass}>{items.quantity}</p>
                </div>
            </div>
        )
    }
    
}

Listing.defaultProps = {
    items: []
}

export default Listing;