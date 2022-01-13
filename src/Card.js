export default function PricingPolicy(props) {
    return <div className="col-lg-3 col-md-6">
        <div className="card text-center card-shadow on-hover border-0 mb-4">
            <div className="card-body font-14">
                <h5 className="mt-3 mb-1 font-weight-medium">{props.data.plan}</h5>
                <h6 clclassNameass="subtitle font-weight-normal">{props.data.team}</h6>
                <div className="pricing my-3">
                    <sup>$</sup>
                    <span className="monthly display-5">{props.data.amount}</span>
                    {props.data.best ? <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">Popular</span> : ''}
                    <small className="monthly">{props.data.period}</small>
                    <span className="d-block">{props.data.save} <span class="font-weight-medium">{props.data.dollar}</span>{props.data.time}</span>
                </div>
                <ul className="list-inline">
                    {
                        props.data.features.map(obj => {
                            return <li className="d-block py-2">{obj.name}</li>
                        })
                    }

                </ul>
                <div className="bottom-btn">
                    {props.data.best ? <a className="btn btn-danger-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a> : <a className="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>}

                </div>
            </div>
        </div>
    </div>
}