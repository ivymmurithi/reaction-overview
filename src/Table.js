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
        return (
            <table>
                <TableHeader></TableHeader>
                <TableBody></TableBody>
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

const TableBody = () => {
    return (
    <tbody>
        <tr>
            <td>Charlie</td>
            <td>Janitor</td>
        </tr>
        <tr>
            <td>Mac</td>
            <td>Bouncer</td>
        </tr>
        <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
        </tr>
        <tr>
            <td>Dennis</td>
            <td>Bartender</td>
        </tr>
    </tbody>
    )
}

export default Table