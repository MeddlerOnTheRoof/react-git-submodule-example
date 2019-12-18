import React from 'react';
import { Link } from 'react-router-dom';

const LinkCell = props => <td><Link className='nav-link' to={`/widgets/edit/${props.id}`}>{props.linkText}</Link></td>;

export default LinkCell;