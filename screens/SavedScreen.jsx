import React, { memo } from 'react';
import { List } from "@ui-kitten/components";
import { connect } from "react-redux";

import { Container, DataField } from "../components";
import { deleteDataField } from "./../redux/actions/text";

const SavedScreen = memo(({ dataFields, deleteDataField }) => {
    return (
        <Container>
            <List
                data={ dataFields.filter(item => item.saved) }
                keyExtractor={ (item, index) => item._id + index }
                renderItem={({ item }) =>
                    <DataField item={ item } saved={ true } deleteData={ deleteDataField } />
                }
                style={{ width: "100%" }}
                refreshing
                inverted
            />
        </Container>
    );
});

SavedScreen.navigationOptions = {
  title: "Saved",
};

const mapSateToProps = ({ text }) => ({
    dataFields: text.dataFields
});

export default connect(mapSateToProps, { deleteDataField })(SavedScreen);