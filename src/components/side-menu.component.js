import React from "react";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Settings } from "../icons";
import { StyleSheet, View, Text } from 'react-native';
import styled from "styled-components";

const LabelContainer = styled.View`
`

export const SideMenu = ({ navigation }) => {
    return (
        <DrawerContentScrollView
            contentContainerStyle={styles.sideMenuContainer}
        >
            <LabelContainer>
                <Text>
                    Test
                </Text>
            </LabelContainer>
            <LabelContainer>
                <DrawerItem 
                    label="Settings" 
                    labelStyle={styles.sideMenuLabel}
                    onPress={() => navigation.navigate("JournalsNavigator")} 
                    icon={() => <Settings />}
                />
            </LabelContainer>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    sideMenuContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#F6F8FB',
      paddingTop: 20,
    },
    sideMenuLabel: {
        color: "#000000", 
        fontFamily: "Inter_400Regular",
        fontSize: 18,
        borderTopColor: "hsl(218, 44%, 86%)"
    },
    sideMenuLabelContainer: {
        borderTopColor: "hsl(218, 44%, 86%)",
    },
    sideMenuProfileIcon: {
      resizeMode: 'center',
      width: 150,
      height: 150,
      marginTop: 20,
      borderRadius: 150 / 2,
    },
  });