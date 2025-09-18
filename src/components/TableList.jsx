export default function TableList({handleOpen}){
    const clients = [
        {id:1,name: "John Apple", email:"john@xyz.com", job:"Developer", rate:"100", isactive: true},
        {id:2,name: "Larry Orange", email:"larry@xyz.com", job:"Chef", rate:"200", isactive: true},
        {id:3,name: "Niko Pear", email:"niko@xyz.com", job:"Banker", rate:"300", isactive: false} 
    ]

    return (
        <>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Email</th>
                        <th>Rate</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody className="hover:bg-base-300">
                    {/* row 1 */}
                    {clients.map(function(client){
                        return (<tr key={client.id}>
                            <th>{client.id}</th>
                            <td>{client.name}</td>
                            <td>{client.job}</td>
                            <td>{client.email}</td>
                            <td>{client.rate}</td>
                            <td>
                                <button className={`btn rounded-full w-20 ${client.isactive ? `btn-primary` : `btn-outline btn-primary`}`}>
                                    {client.isactive ? 'Active' : 'Inactive'}
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-secondary" onClick={() => handleOpen('edit')}>
                                    Update
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-accent">
                                    Delete
                                </button>
                            </td>
                        </tr>)
                    })}
                    
                    
                    </tbody>
                </table>
            </div>
        </>
    )
}