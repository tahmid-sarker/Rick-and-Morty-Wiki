import { use } from 'react';
import { useParams } from 'react-router';
import { DataContext } from '../context/DataContext';
import backgroundImage from "../assets/images/hero-background.png"
import logo from "../assets/images/title-logo.png"
import status from "../assets/images/status.png"
import species from "../assets/images/species.png"
import gender from "../assets/images/gender.png"
import origin from "../assets/images/origin.png"
import location from "../assets/images/location.png"
import episodes from "../assets/images/episodes.png"
import { RiExternalLinkFill } from "react-icons/ri";

const CastDetails = () => {
    const { id } = useParams();
    // console.log(id)
    // console.log(typeof id)
    const { characters } = use(DataContext);
    // console.log(characters)
    const singleCharacter = characters.find(character => character.id === parseInt(id))
    // console.log(singleCharacter)
    return (
        <section className='md:min-h-screen bg-cover bg-right md:bg-center relative overflow-hidden' style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Semi-transparent black overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />
            {/*Circle Gradient - Top*/}
            <div className="absolute bg-[#2A3E84] rounded-full p-30 blur-3xl top-1/2 -right-30 z-0" />
            {/*Circle Gradient - Bottom*/}
            <div className="absolute bg-[#2A3E84] rounded-full p-30 blur-3xl -bottom-30 -left-30" />
            {/* Main content */}
            <div className='w-11/12 mx-auto py-5 relative z-5'>

                {/*Title Image*/}
                <div className='flex justify-center'>
                    <img src={logo} alt="Ricky and Morty" className='w-[134px] md:w-[227px] h-[28px] md:h-[48px] mt-1.5 md:mt-3' />
                </div>

                <div className='flex flex-col md:flex-row justify-center items-center gap-10 my-5'>
                    <div>
                        {/*Title Text & Image*/}
                        <h1 className='text-base md:text-5xl font-bold text-center md:text-left text-secondary mb-2.5 md:mb-5'>{singleCharacter.name}</h1>
                        <div className='p-7.5 md:p-12.5 border border-primary rounded-md'>
                            <img src={singleCharacter.image} alt={singleCharacter.name} />
                        </div>
                    </div>
                    <div className="w-px h-[300px] bg-gradient-to-r from-primary to-secondary mx-8 hidden md:block" />
                    {/* Details */}
                    <div>
                        {/* Status, Species, Gender */}
                        <div className='flex justify-center items-center gap-4 md:gap-10 mb-4 md:mb-6'>
                            <div className='flex flex-col gap-1 md:gap-2 justify-start items-start border border-primary rounded-md px-3 md:px-8 py-2 md:py-4 w-full max-w-[240px] md:w-60 min-h-[64px] md:h-44'>
                                <img src={status} alt="Status" className='w-4 md:w-9 h-4 md:h-9' />
                                <p className='text-sm'>Status</p>
                                <h1 className='text-base md:text-3xl font-semibold'>{singleCharacter.status}</h1>
                            </div>
                            <div className='flex flex-col gap-1 md:gap-2 justify-start items-start border border-primary rounded-md px-3 md:px-8 py-2 md:py-4 w-full max-w-[240px] md:w-60 min-h-[64px] md:h-44'>
                                <img src={species} alt="Species" className='w-4 md:w-9 h-4 md:h-9' />
                                <p className='text-sm'>Species</p>
                                <h1 className='text-base md:text-3xl font-semibold'>{singleCharacter.species}</h1>
                            </div>
                            <div className='flex flex-col gap-1 md:gap-2 justify-start items-start border border-primary rounded-md px-3 md:px-8 py-2 md:py-4 w-full max-w-[240px] md:w-60 min-h-[64px] md:h-44'>
                                <img src={gender} alt="Gender" className='w-4 md:w-9 h-4 md:h-9' />
                                <p className='text-sm'>Gender</p>
                                <h1 className='text-base md:text-3xl font-semibold'>{singleCharacter.gender}</h1>
                            </div>
                        </div>
                        {/* Origin */}
                        <div className='flex flex-col gap-1 md:gap-2 justify-start items-start border border-primary rounded-md px-3 md:px-8 py-2 md:py-4 w-full mb-4 md:mb-6'>
                            <img src={origin} alt="Origin" className='w-4 md:w-9 h-4 md:h-9' />
                            <p>Origin</p>
                            <div className='flex justify-between items-center w-full'>
                                <h1 className='text-base md:text-3xl font-semibold'>{singleCharacter.origin.name}</h1>
                                <RiExternalLinkFill className='w-3 md:w-5' />
                            </div>
                        </div>
                        {/* Location */}
                        <div className='flex flex-col gap-1 md:gap-2 justify-start items-start border border-primary rounded-md px-3 md:px-8 py-2 md:py-4 w-full mb-4 md:mb-6'>
                            <img src={location} alt="Location" className='w-4 md:w-9 h-4 md:h-9' />
                            <p>Last Known Location</p>
                            <div className='flex justify-between items-center w-full'>
                                <h1 className='text-base md:text-3xl font-semibold'>{singleCharacter.location.name}</h1>
                                <RiExternalLinkFill className='w-3 md:w-5' />
                            </div>
                        </div>
                        {/* Episodes */}
                        <div className='flex flex-col gap-1 md:gap-2 justify-start items-start border border-primary rounded-md px-3 md:px-8 py-2 md:py-4 w-full mb-4 md:mb-6'>
                            <img src={episodes} alt="Episodes" className='w-4 md:w-9 h-4 md:h-9' />
                            <p>Episode(S)</p>
                            <div className="max-h-40 overflow-y-auto w-full">
                                <ul className="list-disc list-inside text-sm md:text-lg">
                                    {singleCharacter.episode.map((episode, index) => (
                                        <li key={index}>{episode}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CastDetails;