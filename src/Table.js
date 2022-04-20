import React, {Component} from "react";

/**
 * ?We capitalize custom components to differentiate
 * ?them from regular HTML elements
 */

/**
 * ?A class component must include render(), and the 
 * ?return can only return one parent element.
 */
class Table extends Component {
    render() {

        // ?we can access all props through this.props
        const {characterData} = this.props
        return (
            <table>
                <TableHeader/>
                <TableBody characterData={characterData}/>
            </table>
        )
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

export default Table