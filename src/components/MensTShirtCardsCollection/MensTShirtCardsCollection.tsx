import React from "react";
import {
    CardCollectionContainerStyle,
    CardDiscountContainerStyle,
    MensTShirtCardBorderStyle,
    MensTShirtCardCollectionStyle,
    MensTShirtCardDiscountStyle,
    MensTShirtCardsCollectionStyle,
} from "./MensTShirtCardsCollection.style";

const MensTShirtCardsCollection = () => {
    return (
        <MensTShirtCardsCollectionStyle>
            <MensTShirtCardCollectionStyle>
                <MensTShirtCardBorderStyle>
                    <CardCollectionContainerStyle>
                        <h3>Men’s t-shirt</h3>
                        <p>collection</p>
                        <span>2023</span>
                    </CardCollectionContainerStyle>
                </MensTShirtCardBorderStyle>
            </MensTShirtCardCollectionStyle>
            <MensTShirtCardDiscountStyle>
                <CardDiscountContainerStyle>
                    <h3>50% OFFER</h3>
                    <p>
                        BELT <span>COLLECTION</span>
                    </p>
                    <span>See more...</span>
                </CardDiscountContainerStyle>
            </MensTShirtCardDiscountStyle>
        </MensTShirtCardsCollectionStyle>
    );
};

export default MensTShirtCardsCollection;
