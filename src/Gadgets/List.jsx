import React from 'react';
import { connect } from 'react-redux';
import { GridColumn, Grid } from '@progress/kendo-react-grid';
import { ColumnMenu } from '../Common/ColumnMenu';
import { process } from '@progress/kendo-data-query';
import LinkCell from '../Common/LinkCell';

const DEFAULT_DATA_STATE = {
    skip: 0,
    take: 10
};

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataState: DEFAULT_DATA_STATE,
            pageSize: DEFAULT_DATA_STATE.take - DEFAULT_DATA_STATE.skip,
            gadgets: process(props.gadgets.slice(0), DEFAULT_DATA_STATE)
        };
    };

    dataStateChange = e => this.setState({ dataState: e.data, gadgets: process(this.props.gadgets.slice(0), e.data) });

    render = () => {
        return <React.Fragment>
            <h1>Gadgets List</h1>
            <Grid
                data={this.state.gadgets}
                {...this.state.dataState}
                onDataStateChange={this.dataStateChange}
                sortable={true}
                pageable={true}
                pageSize={this.state.pageSize}>
                <GridColumn field='id' title='ID' filterable={false} />
                <GridColumn field='name' title='Name' filter='text' columnMenu={ColumnMenu} cell={props => {
                    const { id, name } = props.dataItem;

                    return <LinkCell id={id} linkText={name} />;
                }} />
                <GridColumn field='category' title='Category' columnMenu={ColumnMenu} />
                <GridColumn field='supplier' title='Supplier' columnMenu={ColumnMenu} />
                <GridColumn field='cost' title='Cost' filter='numeric' columnMenu={ColumnMenu} />
                <GridColumn field='price' title='Price' filter='numeric' columnMenu={ColumnMenu} />
                <GridColumn field='volume' title='Volume' filter='numeric' columnMenu={ColumnMenu} />
            </Grid>
        </React.Fragment>;
    };
};

const mapStateToProps = state => {
    return {
        gadgets: state.gadget.gadgets
    };
};

export default connect(mapStateToProps, null)(List);