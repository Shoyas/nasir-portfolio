import React from 'react';
import picFour from './blog-image/four.jpeg';
import picThree from './blog-image/react.png';
import picTwo from './blog-image/javacsript.jpeg';
import picOne from './blog-image/function.png';

const Blogs = () => {
    return (
        <section className="text-center container-fluid mt-5">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col mb-4">
                    <div class="card h-100">
                        <img src={picOne} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Functions</h5>
                            <p class="card-text">Ten functions of JavaScript</p>
                        </div>
                        <a href="https://md-nasiruddin4067.medium.com/ten-simple-functions-of-javascript-630e9b13177a" target="_blank">Read More</a>
                    </div>
                </div>

                <div class="col mb-4">
                    <div class="card h-100">
                        <img src={picTwo} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">JavaScript</h5>
                            <p class="card-text">Ten important items of JavaScript</p>
                            <a href="https://md-nasiruddin4067.medium.com/ten-important-items-of-javascript-107a9189ad76" target="_blank">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="col mb-4">
                    <div class="card h-100">
                        <img src={picThree} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Important information of React</h5>
                            <p class="card-text">Ten important items of React</p>
                            <a href="https://md-nasiruddin4067.medium.com/10-important-items-of-react-351774fe1ec4" target="_blank">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col mb-4">
                    <div class="card h-100">
                        <img src={picFour} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Important basic interview questions</h5>
                            <p class="card-text">Ten most important basic interview questions for React & JavaScript</p>
                            <a href="https://md-nasiruddin4067.medium.com/10-most-important-basic-interview-questions-for-react-javascript-7bf6169d835d" target="_blank">
                                Read More
                            </a>
                            
                        </div>
                    </div>
                </div>
                
            </div>

            
        </section>
        
    );
};

export default Blogs;