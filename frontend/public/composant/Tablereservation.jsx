import axios from "axios";
import { useEffect, useState } from "react";


function Tablereservation() {
       const [reservations, setReservations] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3000/reservation')
            .then(res => setReservations(res.data))
            .catch(err => console.log(err))
    }, [])
    return (<div>
        <h1 className="text-center">Liste de Reservation</h1>
        <div className="container">
            <table className="table table-striped table-hover table-bordered mt-4 text-center">
                <thead className="table-danger">
                    <tr>
                        <th>#</th>
                        <th>user</th>
                        <th>voiture</th>
                        <th>date_debt</th>
                        <th>date_fin</th>
                        <th>statut</th>
                        <th>criation de reservation</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {reservations && reservations.map((reserv, index) => (
                        <tr key={reserv.id}>
                            <td>{index + 1}</td>
                            <td>{reserv.userid}</td>
                            <td>{reserv.Voitureid}</td>
                            <td>{reserv.date_debut} </td>
                            <td>{reserv.date_fin}</td>
                            <td>{reserv.statut}</td>
                            <td>{reserv.created_at}</td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>)

}
export default Tablereservation;