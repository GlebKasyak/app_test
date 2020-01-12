import React from 'react';
import styled from "styled-components";
import { ListItem } from '@ui-kitten/components';
import { styles } from "../utils/styles";

export default ({ item, setLanguage }) => (
    <Field
        style={ item.active && styles.active }
        key={ item._id }
        onPress={ () => setLanguage(item) }
    >
        <Language >{ item.language }</Language>
    </Field>
);

const Field = styled(ListItem)`
    height: 64px;
    width: 100%;
    display: flex;
    padding: 20px 16px;
    borderBottomWidth: 1;
    borderBottomColor: #EDF1F7;
`;

const Language = styled.Text`
    color: #222B45;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
`;
