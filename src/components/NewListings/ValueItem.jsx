export default function ValueItem({ title, text, type }) {
    return (
        <div className="value-item">
            <h2 className="value-title">{title}</h2>
            <h4 className="value-text">{text} ({type})</h4>
        </div>
    )
}
