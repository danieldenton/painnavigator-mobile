import React from "react";
import styled from "styled-components/native";
import { Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { 
    RestaurantCard, 
    RestaurantCardCover, 
    Info, 
    Address, 
    RatingRow, 
    Rating, 
    RatingRowEnd,
    Icon
} from "./restaurant-info-card.styles"

import { Spacer } from "../../../components/spacer/spacer.component"
import { Text } from "../../../components/typograhpy/text.component"
import { Favourite } from "../../../components/favourites/favourite.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const { 
        name = 'Some restaurant', 
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", 
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg", ], 
        address = '100 Park Place', 
        isOpenNow = true, 
        rating = 4, 
        isClosedTemporarily = true,
        placeId,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <Favourite restaurant={restaurant} />
            <RestaurantCardCover key={name} source={{ uri: photos[0] }}/>
            <Info>
                <Text variant="label">{name}</Text>
                <RatingRow>
                    <Rating>
                        {ratingArray.map((_, i) => (
                            <SvgXml 
                                key={`star-${placeId}-${i}`} 
                                xml={star} 
                                width={20} 
                                height={20} 
                            />
                        ))}
                    </Rating>
                    <RatingRowEnd>
                        {isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </RatingRowEnd>
                </RatingRow>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard> 
    )
}
