import React from "react";
import styled from "styled-components/native";
import { Text, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View `
    padding: ${(props) => props.theme.space[3]};
`

const Title = styled.Text`
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`

const RatingRow = styled.View `
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[1]};
`

const Rating = styled.View `
    flex-direction: row;
`

const RatingRowEnd = styled.View `
    flex-direction: row;
    justify-content: space-evenly;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const { 
        name = 'Some restaurant', 
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", 
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg", ], 
        address = '100 Park Place', 
        isOpenNow = true, 
        rating = 4, 
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }}/>
            <Info>
                <Title>{name}</Title>
                <RatingRow>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <RatingRowEnd>
                        {isClosedTemporarily && <Text style={{ color: "red" }} variant="label">CLOSED TEMPORARILY</Text>}
                        {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        <Image source={{ uri: icon }} style={{ width: 15, height: 15 }} />
                    </RatingRowEnd>
                </RatingRow>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard> 
    )
}
