
export default function Cell({value, onClick}) {
    const style = value === "x" ? "box x" : "box o";
    
    return (
        <div className={style} onClick={onClick}>
            {value}
        </div>
    )
}