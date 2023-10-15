import  style  from "./styles.css"
const conferenceLayout = ({children} : {children:React.ReactNode}) => {
    return(
        <div>
            <header style={style.header}>
                <h1>This is the Conference Layout</h1>
            </header>
            <section>{children}</section>
        </div>
    )
}
export default conferenceLayout; 
