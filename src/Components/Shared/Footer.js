import React from 'react';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";


const Footer = () => {

    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div>

            <footer className="bg-gray-900  text-center lg:text-left mt-20">
                <div className="text-gray-300 flex justify-around  items-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    <p className="m-0 text-center text-white">
                        Copyright &copy;
                        <span> {getYear()} <a target='_blank' rel="noreferrer" className="text-gray-300" href="https://www.linkedin.com/in/shimulchandradas/">Made with Developer SHIMUL</a> </span>
                    </p>
                    <div>
                        <div className='flex'>
                            <a target='_blank' rel="noreferrer" href="https://github.com/shimulchandradas" className='text-4xl '><FaFacebookSquare className='text-gray-300 my-2 mr-5' /></a>
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/shimulchandradas/" className='text-4xl'><FaLinkedin className='text-gray-300 my-2 mr-5' /></a>
                            <a target='_blank' rel="noreferrer" href="https://github.com/shimulchandradas" className='text-4xl'><FaGithubSquare className='text-gray-300 my-2 mr-5' /></a>
                        </div>
                    </div>
                </div>
            </footer >


        </div>
    );
};

export default Footer;