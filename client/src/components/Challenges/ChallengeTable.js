import React from "react";
import { Table } from "reactstrap";

const ChallengeTable = props => {
    const tableItems = props.challenges.map((challenge, i) => {
        return (
            <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td
                    onClick={() => props.onClick(challenge._id)}
                    className="title"
                >
                    {challenge.title}
                </td>
                <td>{challenge.difficulty}</td>
            </tr>
        );
    });

    return (
        <div className="table-container">
            <Table>
                <thead>
                    <tr>
                        <th style={{ width: "15%" }}>#</th>
                        <th style={{ width: "60%" }}>Title</th>
                        <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>{tableItems}</tbody>
            </Table>
        </div>
    );
};

export default ChallengeTable;
