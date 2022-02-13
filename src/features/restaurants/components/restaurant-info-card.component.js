import React from "react";
import styled from "styled-components/native";
import { Text, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
    fontFamily: ${(props) => props.theme.fonts.body};
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const { 
        name = 'Some restaurant', 
        icon, 
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg", ], 
        address = '100 Park Place', 
        isOpenNow = true, 
        rating = 4, 
        isClosedTemporarily
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }}/>
            <Title>{name}</Title>
        </RestaurantCard> 
    )
}
