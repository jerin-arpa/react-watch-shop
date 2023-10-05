import watch1 from '../../assets/images/watch-2.png';
import watch2 from '../../assets/images/watch-5.png';
import watch3 from '../../assets/images/watch-9.png';
import watch4 from '../../assets/images/watch-3.png';



const Home = () => {
    return (
        <div>
            {/* Banner */}
            <div className="hero" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/watch-vintage-pocket-with-smoke-black-background_309761-600.jpg)' }}>
                <div className="hero-overlay py-72 bg-opacity-50"></div>
                <div>
                    <div className="flex justify-between items-center gap-10  container mx-auto px-5">
                        <div className='w-2/3'>
                            <h1 className="mb-5 text-5xl font-bold">Discover Time <br /> Elegance at <br /> Watch Wonders Hub</h1>
                            <p className="mb-5">Step into a world of horological marvels at Watch Wonders Hub. Explore an exquisite collection of wristwatches that embody precision, style, and innovation. From classic timepieces to modern marvels, we curate a selection that celebrates the artistry and engineering of watchmaking. Find the perfect watch that suits your lifestyle and makes a statement about who you are.</p>
                            <button className="btn btn-neutral">Get Started</button>
                        </div>
                        <div className='w-2/5'>
                            <div className='flex gap-5 mb-5'>
                                <img className='w-1/3 rounded-lg shadow-2xl' src={watch1} alt="" />
                                <img className='w-1/3 rounded-lg shadow-2xl' src={watch2} alt="" />
                            </div>
                            <div className='flex gap-5'>
                                <img className='w-1/3 rounded-lg shadow-2xl' src={watch4} alt="" />
                                <img className='w-1/3 rounded-lg shadow-2xl' src={watch3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Collection */}
            <div className='my-20'>

            </div>
        </div>
    );
};

export default Home;