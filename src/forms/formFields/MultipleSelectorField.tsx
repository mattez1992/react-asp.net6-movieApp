import "./MultipleSelector.css"
export default function MultipleSelectorField(props: multipleSelectorProps) {
    function select(item: multipleSelectorModel) {
        const selected = [...props.selected, item];
        const nonSelected = props.nonSelected.filter(value => value !== item);
        props.onChange(selected, nonSelected);
    }
    function deSelect(item: multipleSelectorModel) {
        const nonSelected = [...props.nonSelected, item];
        const selected = props.selected.filter(value => value !== item);
        props.onChange(selected, nonSelected);
    }
    function selectAll() {
        const selected = [...props.selected, ...props.nonSelected];
        const nonSelected: multipleSelectorModel[] = [];
        props.onChange(selected, nonSelected);
    }
    function deSelectAll() {
        const selected: multipleSelectorModel[] = [];
        const nonSelected = [...props.nonSelected, ...props.selected,];
        props.onChange(selected, nonSelected);
    }
    return (
        <div className="mb-3">

            <div className='multiple-selector'>
                <div>
                    <label>{props.displayName}</label>
                    <ul className="shadow-lg mb-5 bg-white rounded">
                        {props.nonSelected.map(item =>
                            <li key={item.key} onClick={() => { select(item) }}>{item.value}</li>)}
                    </ul>
                </div>

                <div className="multiple-selector-buttons">
                    <button type="button" onClick={selectAll}>{">>"}</button>
                    <button type="button" onClick={deSelectAll}>{"<<"}</button>
                </div>
                <div>
                    <label>Selected: {props.displayName}</label>
                    <ul className="shadow-lg mb-5 bg-white rounded">
                        {props.selected.map(item =>
                            <li key={item.key} onClick={() => { deSelect(item) }}>{item.value}</li>)}
                    </ul>
                </div>
            </div>
        </div>

    )
}
interface multipleSelectorProps {
    displayName: string;
    selected: multipleSelectorModel[];
    nonSelected: multipleSelectorModel[];
    onChange(selected: multipleSelectorModel[],
        nonSelected: multipleSelectorModel[]): void;
}
export interface multipleSelectorModel {
    key: number;
    value: string;
}