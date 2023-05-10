
const ServiceCard = ({ service }) => {

    const { title, img, price } = service;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-2xl">
            <figure><img className="h-56" src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;