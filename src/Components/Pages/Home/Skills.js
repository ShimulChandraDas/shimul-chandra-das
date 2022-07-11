import React from 'react';

const Skills = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-center text-3xl font-bold'>My skills</h2>
            {/* 
            <figure className=''><img className='w-50' src="https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2020/03/full-stack-development.gif" alt="Album" /></figure> */}
            <div className="hero">
                <div className="hero-content flex-col gap-10 lg:flex-row">
                    <img src="https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2020/03/full-stack-development.gif" className="max-w-md rounded-lg shadow-2xl" alt='skills' />
                    <div className=' flex-col '>

                        <div className=''>
                            <h2 className='font-bold pt-4 text-xl uppercase'>Experts in</h2>
                            <p>Html5, CSS3,Bootstrap,Tailwind,React Js, Firebase(Authentication)</p>
                        </div>
                        <div>

                            <h2 className='font-bold pt-4 text-xl uppercase'>Comfortable in</h2>
                            Node.js
                            ,Express.js
                            ,Bootstrap
                            ,MongoDB
                            ,React query
                            ,React hook from
                        </div>
                        <div>

                            <h2 className='font-bold pt-4 text-xl uppercase'>Familiar</h2>
                            Typescript
                            ,Redux
                            ,Axios
                            ,Json web Token
                        </div>
                        <div>

                            <h2 className='font-bold pt-4 text-xl uppercase'>Tools</h2>
                            ,Github
                            ,Figma
                            ,Netlify
                            ,Heroku
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Skills;