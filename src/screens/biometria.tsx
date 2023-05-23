import { HStack, VStack, useTheme, Text, Center } from "native-base";
import React from 'react';
import { Image } from "react-native";

export function Biometria() {

    const { colors } = useTheme();
    const img = require('../assets/logop.png');


    return (

        <VStack flex={1} p={6} bg='cor1'>
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                pb={5}
                px={50}
            >
                {/* <Logo />
                <IconButton
                    icon={<SignOut size={26} color={colors.gray[300]} />}
                /> */}
                <Center>
                <Image source={img} />
                </Center>
            </HStack>
        </VStack>
    )

}