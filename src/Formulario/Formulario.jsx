export function Formulario() {
    return (
        <>

            <form>
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Entrada</label>
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Salida</label>
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6"></div>
                </div>
            </form>

        </>
    )
}