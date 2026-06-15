import "./Table.css";
import type { TableHeaderCell } from "../data/InformationPageText";

interface TableProps {
  title?: string;
  description?: string;
  headers: TableHeaderCell[][];
  rows: string[][];
  footerNotes?: string[];
}

function Table({
  title,
  description,
  headers,
  rows,
  footerNotes,
}: TableProps) {
  return (
    <div className="table-container">
      {title && <h3 className="table-title">{title}</h3>}
      {description && (
        <p className="major-table-description">
          {description}
        </p>
      )}

      <table className="credit-table">
        <thead>
          {headers.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <th
                  key={cellIndex}
                  colSpan={cell.colSpan}
                  rowSpan={cell.rowSpan}
                >
                  {cell.text}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {footerNotes && footerNotes.length > 0 && (
        <div className="major-table-footer">
          {footerNotes.map((note, idx) => (
            <p className="footer-note-item" key={idx}>
              {note}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Table;