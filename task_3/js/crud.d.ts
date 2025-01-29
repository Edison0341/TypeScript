// crud.d.ts
import { RowElement, RowID } from './interface';

declare module './crud.js' {
    export const CRUD: {
        insertRow(row: RowElement): RowID;
        deleteRow(rowId: RowID): void;
        updateRow(rowId: RowID, row: RowElement): RowID;
    };
}
