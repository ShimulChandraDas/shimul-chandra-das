import React from 'react';
import Shimul from "../../Assets/Shimul.png";
import TextTransition, { presets } from "react-text-transition";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";



const texts = [
    "Jr. Web Developer.",
    "Frontend Developer.",
    "MERN Stack Developer."
]

const Banner = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div>
            <div className="hero  bg-base-300">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="avatar">
                        <div className="w-96 bg-slate-700 rounded-2xl">
                            <img src={Shimul} alt='shimul' />
                        </div>
                    </div>


                    <div>

                        <h1 className='text-2xl  font-bold'>Hi, This is</h1>
                        <h1 className="text-4xl pb-5 uppercase font-bold">Shimul Chandra Das.</h1>
                        <h1 className='text-3xl pb-4  font-bold'>
                            <TextTransition springConfig={presets.wobbly}>
                                {texts[index % texts.length]}
                            </TextTransition>

                        </h1>
                        <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <div className='flex  '>
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/shimulchandradas/" className='text-4xl mr-5'><FaFacebookSquare className=' my-2' /></a>
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/shimulchandradas/" className='text-4xl mr-5'><FaLinkedin className='my-2' /></a>
                            <a target='_blank' rel="noreferrer" href="https://github.com/shimulchandradas" className='text-4xl'><FaGithubSquare className=' my-2 mr-5' /></a>
                        </div>
                        <div className=''>
                            <a href='shimul-mern-web-developer.pdf' >
                                <button className="btn btn-primary  btn-lg rounded-2xl ">My Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;