import React from "react";
// import Link from "next/link";
import Table from "react-bootstrap/Table";

import classesTable from "./classesTable.module.scss";

interface Props {
  title: string;
  classes: any;
}

const ClassesTable: React.FC<Props> = ({ title, classes }) => {
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
              {classes.map((item) => (
                <tr key={item.hour}>
                  <td>{item.hour}</td>
                  {item.classes.map((aula) => (
                    <td key={aula.id}>{aula.name}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ClassesTable;
