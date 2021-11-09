import React from "react";
// import Link from "next/link";
import Table from "react-bootstrap/Table";

import classesTable from "./classesTable.module.scss";

interface Props {
  title: string;
}

const ClassesTable: React.FC<Props> = ({ title }) => {
  return (
    <section className={classesTable.sectionContainer}>
      <div className={classesTable.sectionContent}>
        <h2 className={classesTable.sectionTitle}>{title}</h2>
        <div className={classesTable.table}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Segunda</th>
                <th>Terça</th>
                <th>Quarta</th>
                <th>Quinta</th>
                <th>Sexta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8:00</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>8:00</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>8:00</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>8:00</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>8:00</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>8:00</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>8:00</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ClassesTable;
