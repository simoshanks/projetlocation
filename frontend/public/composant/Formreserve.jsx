function Formreserve() {
    return (
        <div>

            <button type="button" className="btn btn-outline-success w-25" data-bs-toggle="modal" data-bs-target="#exampleModal">
                reserve
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Entre votre information</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="m-3">
                                    <label for="name" className="form-label">name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="m-3">
                                    <label for="prenom" className="form-label">prenom</label>
                                    <input type="text" className="form-control" id="prenom" />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                            <button type="button" className="btn btn-primary">Reserver</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Formreserve;