
export const CustomTable=(props)=>{

    return(
        <>
        <table>
            <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>confirmPassword</th>
            </tr>
            {
                props.allData.map((val,i)=>{
                    return(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>{val.confirmPassword}</td>
                        </tr>
                    )
                })
            }

        </table>
        
        </>
    )
}