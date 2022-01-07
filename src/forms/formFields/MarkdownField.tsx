import { Field, useFormikContext } from 'formik'
import ReactMarkdown from 'react-markdown';
import "./MarkdownField.css";

export default function MarkdownField(props: markdownFieldProps) {
    const { values } = useFormikContext<any>();
    return (
        <div className="mb-3 form-markdown">
            <div>
                <label>{props.displayName}</label>
                <div>
                    <Field name={props.field} component="textarea" className="form-textarea" />
                </div>
            </div>
            <div>
                <label htmlFor={props.displayName}>{props.displayName}</label>
                <div className="markdown-container">
                    <ReactMarkdown>{values[props.field]}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

interface markdownFieldProps {
    displayName: string;
    field: string;
}