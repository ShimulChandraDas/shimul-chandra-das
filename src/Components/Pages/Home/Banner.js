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
            <div class="hero  bg-base-300">

                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Shimul} class="max-w-sm bg-slate-700 rounded-lg shadow-2xl" />
                    <div>

                        <h1 className='text-3xl  font-bold'>Hi, I am</h1>
                        <h1 class="text-5xl pb-5 uppercase font-bold">Shimul Chandra Das.</h1>
                        <h1 className='text-4xl pb-5  font-bold'>
                            <TextTransition springConfig={presets.wobbly}>
                                {texts[index % texts.length]}
                            </TextTransition>

                        </h1>
                        <p class="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <div className='flex  '>
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/shimulchandradas/" className='text-4xl mr-5'><FaFacebookSquare className=' my-2' /></a>
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/shimulchandradas/" className='text-4xl mr-5'><FaLinkedin className='my-2' /></a>
                            <a target='_blank' rel="noreferrer" href="https://github.com/shimulchandradas" className='text-4xl'><FaGithubSquare className=' my-2 mr-5' /></a>
                        </div>
                        <button class="btn btn-lg rounded-3xl btn-primary">My Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;