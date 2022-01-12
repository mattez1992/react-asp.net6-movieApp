import React from 'react'

export default function SelectRecordsPerPage(props: selectRecordsProps) {
    return (
        <div className="mb-3" style={{ width: "150px" }}>
            <label className='mb-1'>Records per page</label>
            <select name="records" id="recordPicker" className="form-select"
                defaultValue={5}
                onChange={(e) => { props.onChange(parseInt(e.currentTarget.value, 10)) }}
            >
                <option value={2}>2</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
            </select>
        </div>
    )
}
interface selectRecordsProps {
    onChange(perPage: number): void
}
