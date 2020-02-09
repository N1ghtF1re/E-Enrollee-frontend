import React from "react";
import {Table as BootstrapTable } from "react-bootstrap";
import { useListContext } from "../ListContext";

/**
 * This component render <TableColumn> components as header row or just row.
 * It's allow to use declarative table description:
 * <Table>
 *     <TableColumn source={'firstName'}/>
 *     <TableColumn source={'lastName'}/>
 * </Table>
 *
 * It will render the table like
 *
 * <table>
 *     <thead>
 *         <tr>
 *             <th>First Name</th>
 *             <th>Last Name</th>
 *          </tr>
 *     </thead>
 *     <tbody>
 *         <tr>
 *             <td>Value1</td>
 *             <td>Value2</td>
 *         </tr>
 *         <tr>
 *             <td>Value1</td>
 *             <td>Value2</td>
 *         </tr>
 *         <tr>
 *             <td>Value1</td>
 *             <td>Value2</td>
 *         </tr>
 *         ...
 *     </tbody>
 * </table>
 *
 * It will render as much rows as there are records in ListContext
 * @param children
 * @returns {*}
 * @constructor
 */
const Table = ({ children }) => {
  const arr = useListContext();

  return (
    <BootstrapTable striped bordered hover>
      <thead>
        <tr>
          {React.Children.map(children, child => {
            return React.cloneElement(child, { index: -1 });
          })}
        </tr>
      </thead>
      <tbody>
        {arr.map((_, index) => {
          return (
            <tr key={arr[index].id}>
              {React.Children.map(children, child => {
                return React.cloneElement(child, { index: index });
              })}
            </tr>
          );
        })}
      </tbody>
    </BootstrapTable>
  );
};

export default Table;
