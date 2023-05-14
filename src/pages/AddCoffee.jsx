
const AddCoffee = () => {
    return (
        <div className="container mx-auto bg-[#F4F3F0] px-36 py-20">
            <div className="text-center">
                <h1 className="font-rancho text-5xl text-shadow">Add New Coffee</h1>
                <p className="m-10">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form>
                <div className="grid md:grid-cols-2 my-5">
                    <div className="form-control w-full px-5">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full px-5">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 my-5">
                    <div className="form-control w-full px-5">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full px-5">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 my-5">
                    <div className="form-control w-full px-5">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full px-5">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control w-full px-5">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full px-5 my-10">
                    <input className="btn-block bg-[#D2B48C] font-rancho cursor-pointer h-12 text-2xl rounded-md hover:bg-white border-4 border-[#331A15] text-[#331A15]" type="submit" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;