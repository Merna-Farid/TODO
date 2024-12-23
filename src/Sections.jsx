export default function Sections({completed,allTodos}){
    
    return(
        <div className="section">
            <div onClick={allTodos}>All</div>
            <div onClick={completed}>Completed</div>
        </div>
    )
}