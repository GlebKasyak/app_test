import React from 'react';
import styled from "styled-components";
import { Image } from "react-native";

export default ({ item, saved, deleteData }) => (
    <DataField>
        { saved &&
            <DeleteIcon onPress={() => deleteData(item)} >
                <Image source={ require("./../assets/small_star_blue.png") } />
            </DeleteIcon>
        }
        <TextField >{ item.source }</TextField>
        <TextField style={{ opacity: 0.5 }}>{ item.translated }</TextField>
    </DataField>
);

const DeleteIcon = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    zIndex: 1;
`;

const TextField = styled.Text`
    color: #2E3A59;
    line-height: 20px;
    fontSize: 15px;
    margin-bottom: 2px;
`;

const DataField = styled.ScrollView`
    min-height: 74px;
    max-height: 163px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #fff;
    margin-top: 10px;
    padding: 10px 24px;
`;
