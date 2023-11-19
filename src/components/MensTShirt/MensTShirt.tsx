import React from "react";
import {
    CardCollectionContainerStyle,
    CardDiscountContainerStyle,
    MensTShirtCardBorderStyle,
    MensTShirtCardCollectionStyle,
    MensTShirtCardDiscountStyle,
    MensTShirtContainerGroupCardStyle,
    MensTShirtContainerStyle,
    MensTShirtStyle,
} from "./MensTShirt.style";

const MensTShirt = () => {
    return (
        <MensTShirtStyle>
            <MensTShirtContainerStyle>
                <MensTShirtContainerGroupCardStyle>
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
                </MensTShirtContainerGroupCardStyle>
            </MensTShirtContainerStyle>
        </MensTShirtStyle>
    );
};

export default MensTShirt;
