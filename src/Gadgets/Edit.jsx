import React from 'react';
import { connect } from 'react-redux';
import { addGadget, updateGadget } from './actions';

class Edit extends React.Component {
    constructor(props) {
        super(props);

        const defaultGadget = {
            id: 0,
            name: '',
            category: '',
            supplier: '',
            cost: 0,
            price: 0,
            volume: 0
        };

        this.state = {
            pristineGadget: defaultGadget,
            gadget: defaultGadget
        };
    };

    handleSubmit = e => {
        e.preventDefault();

        // todo: form validation

        this.state.gadget.id > 0 ?
            this.props.updateGadget(this.state.gadget) :
            this.props.addGadget(this.state.gadget);

        this.props.history.push('/gadgets/list');
    };

    componentDidMount = () => {
        const { id } = this.props.match.params;
        const gadget = this.props.gadgets.find(w => w.id === parseInt(id));

        if (!!gadget)
            this.setState({ pristineGadget: gadget, gadget: gadget });
    };


    render = () => {
        return <React.Fragment>
            <h1>Gadgets Edit</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Enter name'
                        value={this.state.gadget.name}
                        onChange={e => this.setState({ gadget: { ...this.state.gadget, name: e.target.value } })} />
                </div>


                <div className='form-row'>
                    <div className='col'>
                        <div className='form-group'>
                            <label htmlFor='category'>Category</label>
                            <select
                                type='text'
                                id='category'
                                name='category'
                                className='form-control'
                                value={this.state.gadget.category}
                                onChange={e => this.setState({ gadget: { ...this.state.gadget, category: e.target.value } })}>
                                <option value=''>Choose category</option>
                                {this.props.gadgetCategories.map(wc => <option key={wc} value={wc}>{wc}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='form-group'>
                            <label htmlFor='supplier'>Supplier</label>
                            <select
                                type='text'
                                id='supplier'
                                name='supplier'
                                className='form-control'
                                value={this.state.gadget.supplier}
                                onChange={e => this.setState({ supplier: { ...this.state.gadget, supplier: e.target.value } })}>
                                <option value=''>Choose supplier</option>
                                {this.props.suppliers.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                <div className='form-row'>
                    <div className='col'>
                        <div className='form-group'>
                            <label htmlFor='cost'>Cost</label>
                            <input
                                type='number'
                                id='cost'
                                name='cost'
                                className='form-control'
                                placeholder='Enter cost'
                                value={this.state.gadget.cost}
                                onChange={e => this.setState({ gadget: { ...this.state.gadget, cost: e.target.value } })} />
                        </div>
                    </div>

                    <div className='col'>
                        <div className='form-group'>
                            <label htmlFor='price'>Price</label>
                            <input
                                type='number'
                                id='price'
                                name='price'
                                className='form-control'
                                placeholder='Enter price'
                                value={this.state.gadget.price}
                                onChange={e => this.setState({ gadget: { ...this.state.gadget, price: e.target.value } })} />
                        </div>
                    </div>

                    <div className='col'>
                        <div className='form-group'>
                            <label htmlFor='volume'>Volume</label>
                            <input
                                type='number'
                                id='volume'
                                name='volume'
                                className='form-control'
                                placeholder='Enter volume'
                                value={this.state.gadget.volume}
                                onChange={e => this.setState({ gadget: { ...this.state.gadget, volume: e.target.value } })} />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col offset-md-9'>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <button type='reset' className='btn btn-secondary' onClick={() => this.setState({ gadget: this.state.pristineGadget })}>Reset</button>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment >;
    }
};

const mapStateToProps = state => {
    return {
        suppliers: state.platform.suppliers,
        gadgets: state.gadget.gadgets,
        gadgetCategories: state.gadget.gadgetCategories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addGadget: gadget => {
            dispatch(addGadget(gadget));
        },
        updateGadget: updatedGadget => {
            dispatch(updateGadget(updatedGadget));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);