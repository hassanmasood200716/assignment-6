import React from "react";

const EighthMain = () => {
    return (
        <div className="">
            <div className="flex flex-col sm:flex-row  mx-10 sm:mx-20 my-16 items-center  justify-between">
                <div>
                    <h1 className="font-bold text-2xl py-8 sm:py-6 ">Subscribe to our newsletter</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex gap-3 flex-col sm:flex-row p-6 sm:p-0">
                    <input
                        className="px-10  py-2 border-2 border-black rounded-lg"
                        type="text"
                        placeholder="enter your email" />
                    <button className="hover:bg-black hover:text-white border-2 px-3 py-2 border-black rounded-lg bg-white text-black">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6 text-center place-items-center">
                <div className="p-4">
                    <div className="flex gap-2">
                        <span>
                            <img className="w-8" src="/images/logo2.png" alt="image" />
                        </span>
                        <span className="font-bold text-3xl">Ddsgnr</span>
                    </div>
                </div>
                <div className="p-4">
                    <p className="font-semibold mb-2">Courses</p>
                    <p>Business</p>
                    <p>Development</p>
                    <p>Technology</p>
                    <p>Design</p>
                    <p>Programming</p>
                </div>
                <div className="p-4">
                    <p className="font-semibold mb-2">Resources</p>
                    <p>Career</p>
                    <p>Resume</p>
                    <p>Learning</p>
                    <p>Interview Preparation</p>
                    <p>Jobs</p>
                </div>
                <div className="p-4">
                    <p className="font-semibold mb-2">About Us</p>
                    <p>Contact</p>
                    <p>Help/Support</p>
                    <p>FAQ</p>
                    <p>Terms and Conditions</p>
                    <p>Partners</p>
                </div>

            </div>
            <div className="flex items-center justify-center">
                <div className="border w-[80vw] border-black self-center"></div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-around py-10">
                <div className="flex flex-col sm:flex-row gap-4 text-center">
                    <div>
                    <span >
                        2023 Ddsgnr. All right reserved.
                    </span>
                    </div>
                    <div className="flex underline underline-offset-4 gap-2 md:gap-4" >
                    <span>
                         Privacy Policy
                    </span>
                    <span>
                        Terms of Service
                    </span>
                    <span>
                        Cookies Settings
                    </span>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center py-5 w-6 md:gap-5 gap-3">
                    <img src="/images/facebook.png" alt="Facebook" />
                    <img src="/images/instagram.png" alt="instagram" />
                    <img src="/images/twitwer.png" alt="twitter" />
                    <img src="/images/linked.png" alt="linkedn" />
                </div>
            </div>
        </div>
    );
};

export default EighthMain;
